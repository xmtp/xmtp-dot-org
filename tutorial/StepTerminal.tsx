import React, { useEffect, useState } from "react";
import Terminal, {
  ColorMode,
  TerminalInput,
  TerminalOutput,
} from "react-terminal-ui";
import { stepText } from "./stepText";
import { Wallet } from "ethers";
import { Button } from "antd";
import { WebContainer } from "@webcontainer/api";
import stripAnsi from "strip-ansi";

// Need to parse a non-JSON string to access its properties.
const parseStringToObject = (inputStr: string) => {
  const obj: { [key: string]: string } = {};
  const keyValueRegex = /(\w+):\s*(([^,\n\[\]{}]+)|(\[.*?\])|(\{.*?\}))/g;

  let match;
  while ((match = keyValueRegex.exec(inputStr)) !== null) {
    const key = match[1];
    const rawValue = match[2];
    obj[key] = rawValue;
  }
  return obj;
};

// Needed to validate when to move onto the next step; as soon as expected output is visible.
const checkExpectedOutput = (step: number, sentMessage: string) => {
  switch (step) {
    case 2:
      return "0x";
    // Skip step 3 since all we care about for that is that the client exists, not checking against any expected output
    case 4:
      return "Can message: true";
    case 5:
      return "topic";
    case 6:
      return "senderAddress";
    case 7:
      return sentMessage;
  }
};

// Random wallet generated outside component so that this function isn't on each step
// Needed to avoid subsequent steps being tied to different wallets.
const randomWallet = Wallet.createRandom();

export const StepTerminal = ({
  webContainerInstance,
  currentStep,
  setCurrentStep,
  existingFileText,
  setExistingFileText,
}: {
  webContainerInstance: WebContainer | undefined;
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  existingFileText: string;
  setExistingFileText: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const defaultTerminalVal = [
    <TerminalInput>Press "Run" to see the expected response</TerminalInput>,
  ];
  const [lineData, setLineData] = useState(defaultTerminalVal);
  const [allowNextStep, setAllowNextStep] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [sentMessage, setSentMessage] = useState("");

  // Reset these when current step changes
  useEffect(() => {
    if (allowNextStep) {
      setAllowNextStep(false);
    }
  }, [currentStep]);

  const runPrerequisites = async () => {
    if (currentStep === 0) {
      // Run prerequisite steps
      setIsLoading(true);

      const serverProcess = await webContainerInstance?.spawn("npm", [
        "install",
        "@xmtp/xmtp-js",
      ]);

      // Write importing packages, but no need to run it
      await webContainerInstance?.fs.writeFile("index.js", stepText[1]);

      serverProcess?.output.pipeTo(
        new WritableStream({
          write(data) {
            if (data.includes("run `npm fund` for details")) {
              // This means the prerequisite step ran successfully
              setExistingFileText(stepText[1]);
              setAllowNextStep(true);
              setIsLoading(false);
            }
          },
        }),
      );
    }
  };

  const onRun = async (hasClient = false) => {
    if (currentStep === 0) {
      runPrerequisites();
    } else {
      let ld = [...lineData];
      setIsLoading(true);

      // Remove any logs before adding more
      // Required since full file needs to be run each time, and we just want to run the last log.
      // Since regex for multi-line logs is too complex, instead just filtering IN vars we need to run subsequent steps, rather than filtering OUT logs.
      existingFileText = existingFileText
        .split("\n")
        .filter((line) => {
          return (
            line.includes("import") ||
            line.includes("const xmtp = ") ||
            line.includes("const wallet = ") ||
            line.includes("const WALLET_TO = ") ||
            line.includes("const conversation = ")
          );
        })
        .join("\n");

      // Pull the val from the editor, in case user changes it, and append to the file text
      const codeSnippet =
        // Ignore this error; this field does exist
        (document.getElementsByClassName("cm-editor")[0] as HTMLElement)
          .innerText;
      existingFileText += `\n${codeSnippet}`;

      // Remove duplicate lines — required for re-runs, e.g. can't run duplicate imports
      existingFileText = [...new Set(existingFileText.split("\n"))].join("\n");

      // Always assign the random wallet outside of this component to replace the wallet variable in the script
      // Else, this will just run Wallet.createRandom() on every step, and be tied to a different wallet.
      existingFileText = existingFileText.replace(
        existingFileText?.split(`wallet = `)?.[1]?.split(";")?.[0],
        `new Wallet("${randomWallet.privateKey}")`,
      );

      // Update full file to run, including new code
      await webContainerInstance?.fs.writeFile("index.js", existingFileText);

      // Run index.js file
      const serverProcess = await webContainerInstance?.spawn("node", [
        "index.js",
      ]);

      // Output result of file
      serverProcess?.output.pipeTo(
        new WritableStream({
          write(data) {
            const noAnsi = stripAnsi(data);

            // Check that the client is created before allowing next step. This is the only way to confirm that.
            if (
              currentStep === 3 &&
              noAnsi.includes("Connected to the XMTP 'dev' network.")
            ) {
              hasClient = true;
            }

            ld = [];
            setIsLoading(false);
            // Ensure what we get back is what we want, or they're blocked from the next step
            const expectedOutput = checkExpectedOutput(
              currentStep,
              sentMessage,
            );
            if (
              (currentStep !== 3 &&
                noAnsi.includes(expectedOutput as string)) ||
              noAnsi.includes("Connected to the XMTP 'dev' network.") ||
              // We have the client
              (currentStep === 3 && hasClient)
            ) {
              // Filters this block out of the actual terminal output, or it gets messy
              if (!noAnsi.includes("Connected to the XMTP 'dev' network.")) {
                // Info to show on the terminal
                ld.push(
                  <TerminalOutput>
                    {/* Needed to format ANSI that the response returns to something React-friendly */}
                    {noAnsi}
                  </TerminalOutput>,
                );
                // Only run the "send message" step once and don't keep appending it after that, else multiple messages get sent
                if (currentStep !== 6) {
                  // We only populate the file text once the step is complete
                  setExistingFileText(existingFileText);
                } else {
                  // Set message for step 6 so we can confirm it is part of the expected output for step 7
                  const obj = parseStringToObject(noAnsi);
                  setSentMessage(obj.content);
                }
                // Now set the terminal data and allow user to proceed to next step
                setLineData([...ld]);
                setAllowNextStep(true);
              }
            } else {
              // Expected response not received, populate the terminal with error message

              // Step 4 is only step with a custom error message — others fall into default
              if (currentStep === 4 && noAnsi.includes("Can message: false")) {
                const outputString = `${noAnsi} \nThe address you entered is not activated on the XMTP dev network. \n Visit https://dev.xmtp.chat and sign with the account address to activate it.`;
                ld.push(<TerminalOutput>{outputString}</TerminalOutput>);
              } else {
                ld.push(
                  <TerminalOutput>
                    Unexpected output from this step. Please reload the page and
                    try again.
                  </TerminalOutput>,
                );
              }
              setLineData([...ld]);
            }
          },
        }),
      );
    }
  };

  return (
    <>
      {/* Don't show terminal for prerequisite steps */}
      {currentStep > 1 && (
        <Terminal
          key={lineData.length}
          colorMode={ColorMode.Dark}
          height="150px">
          {lineData}
        </Terminal>
      )}
      {currentStep === 0 && allowNextStep ? <p>Packages imported!</p> : null}
      {/* Next and Run CTAs */}
      <div className="ctaContainer">
        <Button
          type={allowNextStep ? "text" : "primary"}
          style={{
            color: allowNextStep ? "lightgray" : "white",
            backgroundColor: allowNextStep ? "gray" : "",
            opacity: allowNextStep ? 0.5 : 1,
          }}
          loading={isLoading}
          disabled={allowNextStep}
          onClick={() => {
            onRun();
          }}>
          {"Run"}
        </Button>
        <Button
          type={!allowNextStep ? "text" : "primary"}
          style={{
            color: !allowNextStep ? "lightgray" : "white",
            backgroundColor: !allowNextStep ? "gray" : "",
            opacity: !allowNextStep ? 0.5 : 1,
          }}
          disabled={!allowNextStep}
          onClick={() => {
            if (currentStep === 0) {
              // Steps 0 and 1 are prerequisites and run at the same time
              setCurrentStep(currentStep + 2);
            } else {
              setCurrentStep(currentStep + 1);
            }
            setLineData(defaultTerminalVal);
          }}>
          Next
        </Button>
      </div>
    </>
  );
};
