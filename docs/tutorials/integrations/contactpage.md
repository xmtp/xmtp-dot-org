---
sidebar_label: Contact Page Tutorial
sidebar_position: 7
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import {ContactPage} from "@site/src/components/Widgets/ContactPage";

# Contact Page Tutorial

The `Link` widget is a React component that displays a page based on its ENS or domain and shows different buttons for contacting through XMTP. This tutorial will guide you through the process of creating such a widget.

<div className="widget-container Link">
<ContactPage
  domain="shanemac.eth"
  walletAddress="0x7E0b0363404751346930AF92C80D1fef932Cc48a"
/>
</div>

### Props

- `domain`: (Required) The ENS domain name of the person or company.
- `walletAddress`: (Required) The wallet address associated with the domain.
- `deepLinkApps`: (Optional) An object specifying the messaging apps supported. Default values are provided.
- `theme`: (Optional) The appearance theme ("light" or "dark"). Defaults to "default".
- `size`: (Optional) Size of the component ("small", "medium", "large"). Defaults to "medium".

### Usage

```jsx
<ContactPage
  domain="shanemac.eth"
  walletAddress="0x7E0b0363404751346930AF92C80D1fef932Cc48a"
  theme="light"
  deepLinkApps={deepLinkApps}
  size="medium"
/>
```

### Installation

Install required dependencies

```bash
npm install @xmtp/xmtp-js react-router-dom @ensdomains/ens-avatar@0.2.5
```

Copy paste the component into your project

<Tabs >
<TabItem value="index" label="Link.js">

```jsx
// Import necessary libraries
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ethers } from "ethers";
import { Client } from "@xmtp/xmtp-js"; // XMTP library
import { AvatarResolver } from "@ensdomains/ens-avatar";

// Define the Link component
export function Link({
  walletAddress: initialWalletAddress,
  deepLinkApps = {
    xmtp: {
      // XMTP app configuration
      url: `https://xmtp.chat/dm/${initialWalletAddress}`, // XMTP chat URL
      icon: "https://xmtp.chat/favicon.ico", // XMTP icon
      device: ["All"], // Supported devices
      name: "xmtp.chat", // App name
    },
  },
  theme = "default",
  size = "medium",
  device = "All",
}) {
  // State variables
  const [walletAddress, setWalletAddress] = useState(initialWalletAddress);
  const [deviceSpecificApps, setDeviceSpecificApps] = useState([]);

  // Styles for the component
  const styles = {
    avatar: {
      borderRadius: "50%",
      width: "100px",
      cursor: "pointer",
    },
    LinkWrapper: {
      maxWidth: "800px",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    LinkContainer: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
      pointerEvents: "auto",
      margin: "0 auto",
      paddingTop: "30px",
      paddingBottom: "30px",
    },
    linkDomain: {
      fontSize: "3rem",
      fontWeight: "700",
      lineHeight: "1em",
      textAlign: "center",
      marginBottom: "0.5em",
      marginTop: "40px",
    },
    instructions: {
      marginBottom: "2rem",
      textAlign: "center",
      fontSize: "1.3rem",
      width: "90%",
    },
    listItemButton: {
      fontWeight: "bold",
      display: "inline-flex",
      width: "80%",
      alignItems: "center",
      justifyContent: "center",
      pointerEvents: "auto",
      padding: "12px 20px",
      borderRadius: "20px",
      border: "1px solid #333333",
      color: "#000",
      fontSize: "1.3rem",
      fontWeight: "500",
      transition: "color 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
      textDecoration: "none",
      backgroundColor: "white",
      marginBottom: "30px",
      cursor: "pointer",
    },
    LinkIcon: {
      width: "28px",
      height: "28px",
      marginRight: "8px",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "transform 0.5s ease",
    },
  };

  // Get the domain from the URL parameters
  let { domain } = useParams();
  domain = domain || "shanemac.eth";

  // On component mount, detect the device and filter the apps
  useEffect(() => {
    const devicep = detectDevice(device);
    const deepLinkAppsArray = Object.values(deepLinkApps);
    const filteredApps = filterAppsByDevice(deepLinkAppsArray, devicep);
    setDeviceSpecificApps(filteredApps);
  }, []);

  // State variable for the avatar
  const [avatar, setAvatar] = useState(null);

  // Function to resolve the domain to an address
  const resolveDomainToAddress = async () => {
    try {
      const provider = new ethers.providers.CloudflareProvider();
      const resolvedAddress = await provider.resolveName(domain);
      const isEthDomain = /\.eth$/.test(domain);
      const isValidEthereumAddress = /^0x[a-fA-F0-9]{40}$/.test(
        resolvedAddress,
      );

      // If the resolved address is valid, set the wallet address and avatar
      if (resolvedAddress && isEthDomain && isValidEthereumAddress) {
        setWalletAddress(resolvedAddress);
        const avt = new AvatarResolver(provider);
        const avatarURI = await avt.getAvatar(domain);
        setAvatar(avatarURI);
      } else {
        setWalletAddress(null);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // On domain change, resolve the domain to an address
  useEffect(() => {
    if (domain) {
      resolveDomainToAddress();
    }
  }, [domain]);

  // Function to detect the device
  const detectDevice = (device) => {
    const userAgent = window.navigator.userAgent;
    if (/Mobi|Android/i.test(userAgent)) return "Android";
    if (/iPhone|iPad|iPod/i.test(userAgent)) return "iOS";
    return device ? device : "Desktop";
  };

  // Function to filter apps by device
  const filterAppsByDevice = (apps, device) => {
    return apps.filter(
      (app) => app.device.includes(device) || app.device.includes("All"),
    );
  };

  // State variable for checking if the user can message
  const [canMessage, setCanMessage] = useState(null);
  // On wallet address change, check if the user can message
  useEffect(() => {
    const checkCanMessage = async () => {
      const result = await Client.canMessage(walletAddress); // XMTP function to check if the user can message
      setCanMessage(result);
    };

    checkCanMessage();
  }, [walletAddress]);

  // Render the component
  return (
    <>
      <style>
        {`
        .LinkContainer::before {
          content: "";
          position: absolute;
          top: 0px;
          left: 0;
          right: 0;
          height: 80px;
          background-color:#5284ff;
          z-index: -1;
          @media (max-width: 799px) {
            height: 80px;
          }
        }

       .instructions {
          @media (max-width: 800px) {
            font-size: 1rem !important;
            line-height: 1.5rem !important;
          }
        }
      `}
      </style>
      <div className="LinkContainer Link" style={styles.LinkContainer}>
        <style>
          {`
        
          .listItemButton:hover .logo {
            transform: rotate(360deg);
          }
        `}
        </style>
        {avatar ? (
          <img
            style={styles.avatar}
            src={avatar}
            alt="User Avatar"
            width={100}
          />
        ) : (
          <div> image here </div>
        )}
        <div style={styles.LinkWrapper}>
          <div style={styles.linkDomain}>{domain}</div>
          <div className="instructions" style={styles.instructions}>
            Just send a message to <b>{domain} </b>
            using your preferred XMTP inbox, and hit send!
          </div>
          {canMessage !== null && (
            <>
              {canMessage ? (
                deviceSpecificApps.map((app, index) => (
                  <a
                    style={styles.listItemButton}
                    key={index}
                    className="listItemButton"
                    target="_newtab"
                    href={app.url
                      .replace("{walletAddress}", walletAddress)
                      .replace("{domain}", domain)}
                    theme={theme}
                    size={size}>
                    <img
                      style={styles.LinkIcon}
                      src={app.icon}
                      alt={`${app.name} Icon`}
                      width="50px"
                      className="logo"
                    />
                    Message on {app.name}
                  </a>
                ))
              ) : (
                <p>
                  You cannot send a message because this wallet is not on the
                  xmtp network.
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
```

</TabItem>
</Tabs>

Import the component into your project

```jsx
import { Link } from "./Link";
```
