import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { bracketMatching } from "@codemirror/language";
import { keymap } from "@codemirror/view";
import { defaultKeymap } from "@codemirror/commands";
import { useEffect, useState } from "react";
import { stepText } from "./stepText";

export const StepEditor = ({ step }: { step: number }) => {
  const [codeSnippet, setCodeSnippet] = useState(
    stepText[step as keyof typeof stepText],
  );

  useEffect(() => {
    setCodeSnippet(stepText[step as keyof typeof stepText]);
  }, [step]);
  return (
    <>
      <CodeMirror
        value={codeSnippet}
        style={{ marginBottom: "24px", fontSize: "14px" }}
        basicSetup={{ lineNumbers: false }}
        // Don't let users change prerequisites
        readOnly={step < 2}
        theme="dark"
        extensions={[
          javascript({ jsx: true }),
          bracketMatching(),
          keymap.of(defaultKeymap),
        ]}
        onChange={(updatedCopy) => setCodeSnippet(updatedCopy)}
      />
    </>
  );
};
