---
sidebar_label: Buttons Tutorial
sidebar_position: 3
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import {Button} from "@site/src/components/Widgets/Button";

# Buttons Tutorial

The `Button` widget displays a dropdown with deeplink buttons for different apps. This tutorial will guide you through the process of integrating this widget into your project.

<div className="widget-container">
<Button
domain="shanemac.eth"
walletAddress="0x7E0b0363404751346930AF92C80D1fef932Cc48a"
theme="light"
size="medium"
/>
</div>

### Props

- `domain`: (Required) Your ENS name. This is the Ethereum Name Service domain that is associated with your wallet address.
- `walletAddress`: (Required) Your wallet address. This is the Ethereum address that is associated with your ENS domain.
- `theme`: (Optional) Set the theme. Available options: 'default', 'dark', 'light'. Default is 'default'. This changes the appearance of the button.
- `size`: (Optional) Set the button size. Available options: 'small', 'medium', 'large'. Default is 'medium'. This changes the size of the button.
- `defaultApp`: (Optional) Name of the messaging app for contact. This sets the default messaging app that will be used when the button is clicked.
- `deepLinkApps`: (Optional) An object containing information about different messaging apps. This allows you to specify which messaging apps are supported by your button.

### Usage

Here is an example of how to use the `Button` widget in your project. In this example, we are creating a button for the ENS domain "shanemac.eth" and the associated wallet address. The button will have a light theme and a medium size.

```jsx
<Button
  domain="shanemac.eth"
  walletAddress="0x7E0b0363404751346930AF92C80D1fef932Cc48a"
  theme={"light"}
  deepLinkApps={deepLinkApps}
  size={"medium"}
/>
```

### Constructing the Button Component

The `Button` component is a functional component in React. It utilizes the `useState` and `useEffect` hooks from React for state management and handling side effects.

Here is a concise explanation of the logic within the component:

1. **Props**: The component takes in several props including `domain`, `walletAddress`, `deepLinkApps`, `theme`, `size`, and `device`. These props are utilized to customize the functionality and appearance of the button.

2. **State**: The component employs two state variables - `deviceSpecificApps` and `showApps`. `deviceSpecificApps` is an array that holds the apps specific to the user's device. `showApps` is a boolean that decides whether to display the dropdown with the apps or not.

3. **Effects**: The component has a single effect that runs when the component mounts. This effect invokes the `detectDevice` function to identify the user's device and then filters the apps based on the device using the `filterAppsByDevice` function.

4. **Functions**: The component defines several functions including `getEstimatedWidth`, `detectDevice`, and `filterAppsByDevice`. `getEstimatedWidth` estimates the width of the button based on the length of the names of the supported apps. `detectDevice` identifies the user's device. `filterAppsByDevice` filters the apps based on the device.

5. **Render**: The component returns a button with a dropdown. The dropdown contains the apps specific to the user's device. When the user clicks on an app, it opens the corresponding app.

To construct a similar component, you would define the props, state, effects, functions, and render method as described above. You would also need to import the necessary dependencies and styles.

### Installation

Before you can use the `Button` widget, you need to install the required dependencies. You can do this by running the following command in your project's root directory.

```bash
npm install @xmtp/xmtp-js
```

After installing the dependencies, you can copy and paste the `Button` component into your project. Here is the complete code for the `Button` component.

<Tabs >
<TabItem value="index" label="Button.js">

```jsx
import React, { useState, useEffect } from "react";

import { Client } from "@xmtp/xmtp-js";

// This is the Button component. It displays a button that allows users to send messages to a specified ENS domain and wallet address.
export function Button({
  domain, // The ENS domain associated with the wallet address.
  walletAddress, // The wallet address associated with the ENS domain.
  deepLinkApps = {
    // The messaging apps supported by the button.
    xmtp: {
      url: `https://xmtp-react-widgets.vercel.app/link/${domain}`, // The URL for sending messages in the XMTP app.
      icon: "https://xmtp.chat/favicon.ico", // The favicon of the XMTP app.
      device: ["All"], // The operating systems where the XMTP app is available.
      name: "xmtp", // The name of the XMTP app.
    },
  },
  theme = "default", // The appearance theme of the button.
  size = "medium", // The size of the button.
  device = "All", // The operating system of the device where the button is displayed.
}) {
  const [deviceSpecificApps, setDeviceSpecificApps] = useState([]);
  const [showApps, setShowApps] = useState(false);

  // This function estimates the width of the button based on the length of the names of the supported apps.
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
    ButtonContainer: {
      position: "relative",
      display: "inline-block",
      borderRadius: "5px",
    },
    ButtonElement: {
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
    ButtonList: {
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
    ButtonListLi: {
      padding: "10px",
      display: "flex",
      alignItems: "center",
    },
    ButtonListA: {
      textDecoration: "none",
      fontSize: "1.2rem",
      color: theme === "dark" ? "#ffffff" : "#333333",
    },
    ButtonListImg: {
      width: "16px",
      height: "16px",
      marginRight: "8px",
    },
    ButtonIcon: {
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

  // This effect runs when the component mounts. It detects the device where the button is displayed and filters the supported apps based on the device.
  useEffect(() => {
    const devicep = detectDevice(device);
    const deepLinkAppsArray = Object.values(deepLinkApps);
    const filteredApps = filterAppsByDevice(deepLinkAppsArray, devicep);
    setDeviceSpecificApps(filteredApps);
  }, []);

  // This function detects the device where the button is displayed.
  const detectDevice = (device) => {
    const userAgent = window.navigator.userAgent;
    if (/Mobi|Android/i.test(userAgent)) return "Android";
    if (/iPhone|iPad|iPod/i.test(userAgent)) return "iOS";
    return device ? device : "Desktop";
  };

  // This function filters the supported apps based on the device where the button is displayed.
  const filterAppsByDevice = (apps, device) => {
    return apps.filter(
      (app) => app.device.includes(device) || app.device.includes("All"),
    );
  };

  const [canMessage, setCanMessage] = useState(null);

  // This effect runs when the wallet address changes. It checks if the wallet address can receive messages.
  useEffect(() => {
    const checkCanMessage = async () => {
      const result = await Client.canMessage(walletAddress);
      setCanMessage(result);
    };

    checkCanMessage();
  }, [walletAddress]);

  // If the wallet address cannot receive messages, the button is not displayed.
  if (!canMessage) {
    return null;
  }

  // This is the render method of the Button component. It returns the button and the list of supported apps.
  return (
    <div className="Button" style={styles.ButtonContainer}>
      <button
        style={styles.ButtonElement}
        onClick={() => setShowApps(!showApps)}>
        {`${domain}`}
        <CopyPasteIcon
          walletAddress={walletAddress}
          theme={theme}
          size={size}
        />
      </button>
      {showApps && (
        <ul style={styles.ButtonList} theme={theme} size={size}>
          {deviceSpecificApps.map((app, index) => (
            <li key={index} style={styles.ButtonListLi}>
              <img
                style={styles.ButtonIcon}
                src={app.icon}
                alt={`${app.name} Icon`}
              />
              <a
                href={app.url
                  .replace("{walletAddress}", walletAddress)
                  .replace("{domain}", domain)}
                target="_newtab"
                rel="noopener noreferrer"
                style={styles.ButtonListA}>
                Message on {app.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// This is a helper component that displays a copy icon. When the icon is clicked, the wallet address is copied to the clipboard.
function CopyPasteIcon({ walletAddress, size }) {
  const [isCopied, setIsCopied] = useState(false);

  // This function handles the click event of the copy icon. It copies the wallet address to the clipboard.
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

After copying the `Button` component into your project, you can import it and use it in your components like this:

```jsx
import { Button } from "./Button";
```

#### Deep Link Apps

In the `src/deepLinkApps.js` file, we have a `deepLinkApps` object that contains information about different messaging apps.

```jsx
//Alphabetical order
export const deepLinkApps = {
  xmtp: {
    url: `https://xmtp.chat/dm/{walletAddress}`,
    icon: "https://xmtp.chat/favicon.ico",
    device: ["Desktop"],
    name: "xmtp",
  },
  CustomApp: {
    url: `https://xmtp-react-widgets.vercel.app/link/{walletAddress}`,
    icon: "https://xmtp-react-widgets.vercel.app/link/favicon.ico",
    device: ["All"],
    name: "Custom App",
  },
};
```

**Props**

- `url`: The URL for direct messaging in the app. The `{walletAddress}` placeholder will be replaced with the actual wallet address.
- `name`: The descriptive name of the app.
- `icon`: The URL of the app's favicon.
- `device`: An array of operating systems where the app is available. "All" means the app is available on all operating systems.

**Usage**

This custom configuration works with `Button`, `Connect` and `ProfileCard`. All widgets that have deeplinking use case.

```jsx
<Button
 /*Other props*/
defaultApp = "CustomApp";
deepLinkApps = { deepLinkApps };
/>
```
