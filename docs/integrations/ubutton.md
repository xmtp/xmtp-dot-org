---
sidebar_label: Buttons
sidebar_position: 3
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import {UButton} from "@site/src/components/UWidgets/UButton";

# Contact Button

The `UButton` widget allows users to display buttons with different themes and sizes with links to apps of the ecosystem. You can use it as follows:

<div className="widget-container">
<UButton
domain="shanemac.eth"
walletAddress="0x7E0b0363404751346930AF92C80D1fef932Cc48a"
theme={"light"}
size={"medium"}
/>
</div>

### Props

- `domain`: (Required) Your ENS name.
- `walletAddress`: (Required) Your wallet address.
- `theme`: (Optional) Set the theme. Available options: 'default', 'dark', 'light'. Default is 'default'.
- `size`: (Optional) Set the button size. Available options: 'small', 'medium', 'large'. Default is 'medium'.
- `defaultApp`: (Optional) Name of the messaging app for contact.
- `deepLinkApps`: (Optional) An object containing information about different messaging apps.

### Usage

```jsx
<UButton
  domain="shanemac.eth"
  walletAddress="0x7E0b0363404751346930AF92C80D1fef932Cc48a"
  theme={"light"}
  deepLinkApps={deepLinkApps}
  size={"medium"}
/>
```

### Installation

Install required dependencies

```bash
npm install @xmtp/xmtp-js styled-components
```

Copy paste the component into your project

<Tabs >
<TabItem value="index" label="UButton.js">

```jsx
import React, { useState, useEffect } from "react";

import { Client } from "@xmtp/xmtp-js";

export function UButton({
  domain,
  walletAddress,
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
  device = "All",
}) {
  const [deviceSpecificApps, setDeviceSpecificApps] = useState([]);
  const [showApps, setShowApps] = useState(false);

  const getEstimatedWidth = () => {
    let maxTextLength = 0;

    deviceSpecificApps.forEach((app) => {
      const len = app.name.length;
      if (len > maxTextLength) {
        maxTextLength = len;
      }
    });

    const estimatedWidth = 200 + 7 * maxTextLength;
    return estimatedWidth;
  };
  const styles = {
    uButtonContainer: {
      position: "relative",
      display: "inline-block",
      borderRadius: "5px",
    },
    uButtonElement: {
      fontWeight: "bold",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "10px 20px",
      borderRadius: "5px",
      marginBottom: "2px",
      border: "none",
      textAlign: "left",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
      color: theme === "dark" ? "#ffffff" : "#333333",
      backgroundColor:
        theme === "dark" ? "#333333" : theme === "light" ? "#fff" : "#ededed",
      border: theme === "light" ? "1px solid #333333" : "none",
      fontSize: size === "large" ? "16px" : "12px",
    },
    uButtonList: {
      display: "inline-flex",
      flexDirection: "column",
      borderRadius: "5px",
      position: "absolute",
      top: "100%",
      left: "0",
      textAlign: "left",
      borderRadius: "5px",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      listStyle: "none",
      padding: "0",
      margin: "0",
      zIndex: "1",
      color: theme === "dark" ? "#ffffff" : "#333333",
      backgroundColor:
        theme === "dark" ? "#333333" : theme === "light" ? "#fff" : "#ededed",
      border: theme === "light" ? "1px solid #333333" : "none",
      fontSize: size === "large" ? "16px" : "12px",
      minWidth: `${getEstimatedWidth()}px`,
    },
    uButtonListLi: {
      padding: "10px",
      display: "flex",
      alignItems: "center",
    },
    uButtonListA: {
      textDecoration: "none",
      fontSize: "1.2rem",
      color: theme === "dark" ? "#ffffff" : "#333333",
    },
    uButtonListImg: {
      width: "16px",
      height: "16px",
      marginRight: "8px",
    },
    uButtonIcon: {
      width: "16px",
      height: "16px",
      marginRight: "8px",
    },
    logoIcon: {
      width: size === "large" ? "16px" : size === "medium" ? "12px" : "10px",
      marginRight: "5px",
      transition: "all 0.5s ease",
    },
  };

  useEffect(() => {
    const devicep = detectDevice(device);
    const deepLinkAppsArray = Object.values(deepLinkApps);
    const filteredApps = filterAppsByDevice(deepLinkAppsArray, devicep);
    setDeviceSpecificApps(filteredApps);
  }, []);

  const detectDevice = (device) => {
    const userAgent = window.navigator.userAgent;
    if (/Mobi|Android/i.test(userAgent)) return "Android";
    if (/iPhone|iPad|iPod/i.test(userAgent)) return "iOS";
    return device ? device : "Desktop";
  };

  const filterAppsByDevice = (apps, device) => {
    return apps.filter(
      (app) => app.device.includes(device) || app.device.includes("All"),
    );
  };

  const [canMessage, setCanMessage] = useState(null);

  useEffect(() => {
    const checkCanMessage = async () => {
      const result = await Client.canMessage(walletAddress);
      setCanMessage(result);
    };

    checkCanMessage();
  }, [walletAddress]);

  if (!canMessage) {
    return null;
  }

  return (
    <div className="ubutton" style={styles.uButtonContainer}>
      <button
        style={styles.uButtonElement}
        onClick={() => setShowApps(!showApps)}>
        <SVGLogo parentClass="ubutton" theme={theme} size={size} />
        {`${domain}`}
        <CopyPasteIcon
          walletAddress={walletAddress}
          theme={theme}
          size={size}
        />
      </button>
      {showApps && (
        <ul style={styles.uButtonList} theme={theme} size={size}>
          {deviceSpecificApps.map((app, index) => (
            <li key={index} style={styles.uButtonListLi}>
              <img
                style={styles.uButtonIcon}
                src={app.icon}
                alt={`${app.name} Icon`}
              />
              <a
                href={app.url
                  .replace("{walletAddress}", walletAddress)
                  .replace("{domain}", domain)}
                target="_newtab"
                rel="noopener noreferrer"
                style={styles.uButtonListA}>
                Message on {app.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function SVGLogo({ parentClass, size, theme }) {
  const color =
    theme === "dark" ? "#fc4f37" : theme === "light" ? "#fc4f37" : "#fc4f37";

  const hoverColor =
    theme === "dark" ? "#fff" : theme === "light" ? "#000" : "#000";

  const uniqueClassLogo = `logo-${Math.random().toString(36).substr(2, 9)}`;

  const logoStyles = {
    container: {
      width: size === "large" ? "16px" : size === "medium" ? "12px" : "15px",
      marginRight: "5px",
      marginTop: "0px",
    },
    logo: `
        .${uniqueClassLogo} {
          transition: transform 0.5s ease;
        }
  
        .${parentClass}:hover .${uniqueClassLogo} {
          transform: rotate(360deg);
        }
  
        .${parentClass}:hover .${uniqueClassLogo} path {
          fill: ${hoverColor};
        }
      `,
  };

  return (
    <>
      <style>{logoStyles.logo}</style>
      <svg
        className={"logo " + uniqueClassLogo}
        style={logoStyles.container}
        viewBox="0 0 462 462"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fill={color}
          d="M1 231C1 103.422 104.422 0 232 0C359.495 0 458 101.5 461 230C461 271 447 305.5 412 338C382.424 365.464 332 369.5 295.003 349C268.597 333.767 248.246 301.326 231 277.5L199 326.5H130L195 229.997L132 135H203L231.5 184L259.5 135H331L266 230C266 230 297 277.5 314 296C331 314.5 362 315 382 295C403.989 273.011 408.912 255.502 409 230C409.343 131.294 330.941 52 232 52C133.141 52 53 132.141 53 231C53 329.859 133.141 410 232 410C245.674 410 258.781 408.851 271.5 406L283.5 456.5C265.401 460.558 249.778 462 232 462C104.422 462 1 358.578 1 231Z"
        />
      </svg>
    </>
  );
}

function CopyPasteIcon({ walletAddress, size }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = (event) => {
    event.stopPropagation();
    navigator.clipboard.writeText(walletAddress).then(
      () => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      },
      (err) => {
        console.error("Failed to copy wallet address:", err);
      },
    );
  };
  const styles = {
    copyPasteIconContainer: {
      width: size === "large" ? "16px" : size === "medium" ? "12px" : "10px",
      marginLeft: "5px",
    },
  };
  return (
    <div
      style={styles.copyPasteIconContainer}
      size={size}
      className={isCopied ? "copied" : ""}
      onClick={(event) => handleCopyClick(event)}>
      {isCopied ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M9 16.2l-4.6-4.6c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l5.6 5.6c.2.2.5.2.7 0l11.6-11.6c.4-.4.4-1 0-1.4s-1-.4-1.4 0L9 16.2z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 96 96">
          <path
            fill="currentColor"
            d="M50 96c-7.732 0-14-6.268-14-14V42c0-7.732 6.268-14 14-14h24c7.732 0 14 6.268 14 14v40c0 7.732-6.268 14-14 14H50Zm-2-14a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V42a2 2 0 0 0-2-2H50a2 2 0 0 0-2 2v40Z"></path>
          <path
            fill="currentColor"
            d="M22 0C14.268 0 8 6.268 8 14v40c0 7.732 6.268 14 14 14a6 6 0 0 0 0-12 2 2 0 0 1-2-2V14a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2 6 6 0 0 0 12 0c0-7.732-6.268-14-14-14H22Z"></path>
        </svg>
      )}
    </div>
  );
}
```

</TabItem>
</Tabs>

Import the component into your project

```jsx
import { UButton } from "./UButton";
```
