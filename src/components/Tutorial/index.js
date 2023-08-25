import React from "react";

const Tutorial = () => {
  const theme = window.localStorage.getItem("theme");
  const param = theme.includes("dark") ? "dark" : "light";
  return (
    <iframe
      allow="cross-origin-isolated"
      src={`https://xmtp-alpha-interactive-tutorial.vercel.app?theme=${param}`}
      width="100%"
      style={{ height: "100vh" }}></iframe>
  );
};

export default Tutorial;
