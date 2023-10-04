import React from "react";

const styles = {
  Connect: {
    display: "inline-flex",
    alignItems: "center",
    padding: "0px",
    backgroundColor: "transparent",
    color: "#000",
    textDecoration: "none",
    borderRadius: "4px",
    transition: "background-color 0.3s ease",
  },
};

export function Connect({
  domain,
  walletAddress,
  defaultApp = "xmtp",
  deepLinkApps = {
    xmtp: {
      url: `https://xmtp-react-widgets.vercel.app/link/${domain}`,
      icon: "https://xmtp.chat/favicon.ico",
      device: ["All"],
      name: "xmtp",
    },
  },
  theme = "default",
  size = "small",
  showText = true,
}) {
  const selectedApp = deepLinkApps[defaultApp];

  return (
    <>
      <a
        href={selectedApp.url
          .replace("{walletAddress}", walletAddress)
          .replace("{domain}", domain)}
        target="_newtab"
        rel="noopener noreferrer"
        style={styles.Connect}
        className={`Connect ${theme}`}>
        {showText && domain}
      </a>
    </>
  );
}
