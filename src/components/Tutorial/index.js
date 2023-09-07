import React from "react";
import { useState, useEffect } from "react";
import App from "../../../tutorial/App";
import "../../../tutorial/index.css";

const Tutorial = () => {
  const [url, setUrl] = useState(
    "https://xmtp-alpha-interactive-tutorial.vercel.app",
  );

  useEffect(() => {
    // Add mutation handling for the data-theme in the html. Needed so we can pass appropriate dark/light mode to iframe.
    const handleMutations = (mutationsList, observer) => {
      for (let mutation of mutationsList) {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "data-theme"
        ) {
          const theme = document.documentElement.getAttribute("data-theme");
          const url = `https://xmtp-alpha-interactive-tutorial.vercel.app?theme=${theme}`;
          setUrl(url);
        }
      }
    };

    // Create an observer instance with the callback
    const observer = new MutationObserver(handleMutations);

    // Start observing the target node for configured mutations
    const config = {
      attributes: true,
      attributeOldValue: document.documentElement.getAttribute("data-theme"),
      attributeFilter: ["data-theme"],
    };
    observer.observe(document.querySelector("html"), config);
  }, []);

  return <App />;
};

export default Tutorial;
