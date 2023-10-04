import React, { useState } from "react";
// This is the ProfileCard component. It displays a profile with an image, name, description, and a call-to-action button to contact the person or company through XMTP.
export function ProfileCard({
  image,
  description,
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
  size = "medium",
}) {
  const [showCard, setShowCard] = useState(false);

  // These are the styles for the ProfileCard component.
  const styles = {
    ProfileCardContainer: {
      position: "relative",
      display: "inline-block",
      zIndex: 1,
    },
    ButtonElement: {
      fontWeight: "bold",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "10px 20px",
      borderRadius: "5px",
      marginBottom: "2px",
      textAlign: "left",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
      color: theme === "dark" ? "#ffffff" : "#333333",
      backgroundColor:
        theme === "dark" ? "#333333" : theme === "light" ? "#fff" : "#ededed",
      border: theme === "light" ? "1px solid #333333" : "none",
      fontSize: size === "large" ? "16px" : "12px",
    },
    styledLogo: {
      marginRight: "10px",
      borderRadius: "50%",
      width: "15px",
      height: "15px",
    },
    ProfileCardContent: {
      display: "flex",
      position: "absolute",
      top: "100%",
      left: "0",
      width: "390px",
      padding: "15px",
      backgroundColor: "#ffffff",
      border: "1px solid #ccc",
      borderRadius: "5px",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    },
    ProfileCardText: {
      padding: "0px",
    },
    ProfileCardImage: {
      borderRadius: "50%",
      width: "50px",
      height: "50px",
      marginRight: "15px",
    },
    title: {
      fontWeight: "bold",
      textAlign: "left",
      fontSize: "14px !important",
      lineHeight: "15px",
      margin: "0px  !important;",
      marginBottom: "0px !important;",
    },
    desc: {
      textAlign: "left",
      fontSize: "14px !important",
      margin: "0px 0px 0px 0px !important;",
      lineHeight: "20px",
    },
    contact: {
      textAlign: "left",
      margin: "0px 0px 0px 0px !important;",
      lineHeight: "20px",
      fontSize: "14px !important",
    },
    contactLink: {
      textAlign: "left",
      margin: "0px",
      marginLeft: "5px",
    },
  };
  const selectedApp = deepLinkApps[defaultApp];
  const appUrl = selectedApp
    ? selectedApp.url
        .replace("{walletAddress}", walletAddress)
        .replace("{domain}", domain)
    : "";

  // This is the return statement for the ProfileCard component. It includes the layout and functionality of the component.
  return (
    <div
      style={styles.ProfileCardContainer}
      className={`ProfileCard`}
      onMouseEnter={() => setShowCard(true)}
      onMouseLeave={() => setShowCard(false)}>
      <button style={styles.ButtonElement}>{domain}</button>
      {showCard && (
        <div style={styles.ProfileCardContent}>
          <img style={styles.ProfileCardImage} src={image} />
          <div style={styles.ProfileCardText}>
            <div style={styles.title}>{domain}</div>
            <div style={styles.desc}>{description}</div>
            <div style={styles.contact}>
              Contact me at
              <a
                style={styles.contactLink}
                href={appUrl}
                target="_newtab"
                rel="noopener noreferrer">
                {defaultApp}
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
