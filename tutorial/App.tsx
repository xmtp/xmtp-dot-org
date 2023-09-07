import React from "react";
import { SetStateAction, useEffect, useState } from "react";
import staticCopy from "./staticCopy.json";
import { WebContainer } from "@webcontainer/api";
import { files } from "./files";
import { Step } from "./Step";
import { stepText } from "./stepText";
import Confetti from "react-confetti";
import { Progress, Spin } from "antd";
import "./index.css";

export let webcontainerInstance: WebContainer | undefined;

// Required to be outside component
const getWebContainerInstance = async () => {
  webcontainerInstance = await WebContainer.boot();
  await webcontainerInstance.mount(files);

  return webcontainerInstance;
};

const App = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [existingFileText, setExistingFileText] = useState("");
  const [browserSupported, setBrowserSupported] = useState(true);

  const [webContainerInstance, setWebContainerInstance]: [
    WebContainer | undefined,
    React.Dispatch<SetStateAction<WebContainer | undefined>>,
  ] = useState();

  const getInstance = async () => {
    try {
      const instance = await getWebContainerInstance();
      setWebContainerInstance(instance);
    } catch (e) {
      setBrowserSupported(false);
    }
  };

  useEffect(() => {
    getInstance();
  }, []);

  const percent = (currentStep / Object.keys(stepText).length) * 100;
  return (
    <>
      <div className="container">
        {percent === 100 ? (
          <div className="finalStep">
            <h1>Let’s gooooo, builder!</h1>
            <p>
              Congratulations on finishing this tutorial! Hope you had fun
              learning how to build with XMTP.
            </p>
            {/* <p>You’re eligible to claim THE APP BUILDER POAP!</p>
            <p>To claim it:</p> */}

            <Confetti width={window.innerWidth} height={window.innerHeight} />
          </div>
        ) : webContainerInstance ? (
          <>
            <h1>{staticCopy["header"]}</h1>
            <p>{staticCopy["subheader"]}</p>
            {/* Show Prerequisites or regular step  */}
            {currentStep < 2 ? (
              <>
                <Progress percent={percent} showInfo={false} />
                <h2>Prerequisites</h2>
                <p>
                  Click "Run" to install the xmtp-js SDK and import the required
                  packages. You don’t need to know how to code to use this
                  tutorial, but most code is editable if you're a coder and want
                  to experiment.
                </p>
              </>
            ) : null}
            {currentStep > 1 && <Progress percent={percent} showInfo={false} />}
            <Step
              step={currentStep}
              webContainerInstance={webContainerInstance}
              existingFileText={existingFileText}
              setCurrentStep={setCurrentStep}
              setExistingFileText={setExistingFileText}
            />
          </>
        ) : !browserSupported ? (
          <div className="errorContainer">
            Your browser does not currently support this tutorial's necessary
            features. Please try on another browser.
          </div>
        ) : (
          <div className="spinContainer">
            <Spin size="large" />
          </div>
        )}
      </div>
    </>
  );
};

export default App;
