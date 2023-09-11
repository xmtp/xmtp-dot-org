import React from "react";
import { useState, useEffect } from "react";

const Tutorial = () => {
  const [url, setUrl] = useState(
    "https://xmtp-alpha-interactive-tutorial.vercel.app",
  );

  useEffect(() => {
    // This is a temporary fix required for loading the tutorial in iframe
    if (localStorage.getItem("loaded_tutorial") !== "true") {
      localStorage.setItem("loaded_tutorial", "true");
      window.location.reload();
    }
    return () => {
      localStorage.removeItem("loaded_tutorial");
      window.location.reload();
    };
  }, []);

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

  return (
    <iframe
      allow="cross-origin-isolated"
      src={url}
      width="100%"
      style={{ height: "100vh" }}></iframe>
  );
};

export default Tutorial;
