import React from "react";
import { StepEditor } from "./StepEditor";
import { StepHeader } from "./StepHeader";
import { WebContainer } from "@webcontainer/api";
import { StepTerminal } from "./StepTerminal";
import { Dispatch, SetStateAction } from "react";

export const Step = ({
  step,
  webContainerInstance,
  existingFileText,
  setCurrentStep,
  setExistingFileText,
}: {
  step: number;
  webContainerInstance: WebContainer | undefined;
  existingFileText: string;
  setCurrentStep: Dispatch<SetStateAction<number>>;
  setExistingFileText: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div className="stepContainer">
      <StepHeader step={step} />
      {/* Show both Prerequisites on the same page if in beginning of tutorial */}
      {step === 0 ? (
        <>
          <StepEditor step={step} />
          <StepEditor step={step + 1} />
        </>
      ) : (
        <StepEditor step={step} />
      )}

      <StepTerminal
        webContainerInstance={webContainerInstance}
        currentStep={step}
        setCurrentStep={setCurrentStep}
        existingFileText={existingFileText}
        setExistingFileText={setExistingFileText}
      />
    </div>
  );
};
