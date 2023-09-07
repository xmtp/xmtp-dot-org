import React from "react";
import staticCopy from "./staticCopy.json";

export const StepHeader = ({ step }: { step: number }) => {
  return (
    <>
      <h2>
        {
          staticCopy.steps[step as unknown as keyof typeof staticCopy.steps]
            ?.header
        }
      </h2>
      <p>
        {
          staticCopy.steps[step as unknown as keyof typeof staticCopy.steps]
            ?.subheader
        }
      </p>
    </>
  );
};
