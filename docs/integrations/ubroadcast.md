---
sidebar_label: Broadcast
sidebar_position: 5
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import {UBroadcast} from "@site/src/components/UWidgets/UBroadcast";

# Broadcast Widget

The `UBroadcast` widget enables the user to broadcast messages to 1 or many specified Ethereum addresses.

<div className="widget-container">
 <UBroadcast
  env={"production"}
  placeholderMessage="Enter a broadcast message here"
  onMessageSuccess={(message) => console.log("Message sent"+message.content)}
/>
</div>

### Props

- `theme`: Accepts values "default", "dark", or "light".
- `size`: Accepts values "small", "medium", or "large".
- `placeholderMessage`: (Optional)A string for placeholder text in the message input (e.g., "Enter your marketing message here").
- `walletAddresses`: (Optional)Wallet addresses that you want to send a broascast message.
- `wallet`: (Optional) Sends the current signer of the wallet.
- `env`: XMTP developer environment. Read more [here](https://xmtp.org/docs/build/authentication#environments)

## Usage

```jsx
<UBroadcast
  theme="dark"
  size="medium"
  wallet={signer}
  walletAddresses={array}
  placeholderMessage="Enter a broadcast message here"
  env={"production"}
  onMessageSuccess={(message) => console.log("Message sent" + message.content)}
/>
```

### Installation

Install required dependencies

```bash
npm install @xmtp/xmtp-js ethers
```

Copy paste the component into your project

<Tabs >
<TabItem value="index" label="UBroadcast.js">

```jsx
import React, { useState, useEffect } from "react";
import { Client } from "@xmtp/react-sdk";
import { ethers } from "ethers";

export function UBroadcast({
  theme = "default",
  size = "medium",
  title = "Broadcast Message",
  wallet,
  walletAddresses = [
    "0x93E2fc3e99dFb1238eB9e0eF2580EFC5809C7204",
    "0xa64af7F78DE39A238Ecd4ffF7D6D410DBACe2dF0",
  ],
  placeholderMessage = "Enter your marketing message here",
  message = "Welcome to XMTP!",
  env,
  onMessageSuccess,
}) {
  if (walletAddresses.length === 0 || walletAddresses.includes("")) {
    walletAddresses = [
      "0x93E2fc3e99dFb1238eB9e0eF2580EFC5809C7204",
      "0xa64af7F78DE39A238Ecd4ffF7D6D410DBACe2dF0",
    ];
  }
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [broadcastMessage, setBroadcastMessage] = useState("");
  const [messageSent, setMessageSent] = useState(false);

  const styles = {
    styledBadge: {
      padding: "0.225rem",
      backgroundColor: "lightgrey",
      fontSize: "12px",
      borderRadius: "5px",
      display: "inline-block",
      margin: "auto",
      marginRight: "10px",
    },
    ubContainer: {
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      background: "white",
      border: "1px solid #ccc",
      borderRadius: "5px",
      padding: "20px",
      width: "auto",
      boxSizing: "border-box",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
    ubHeader: {
      margin: "0px",
      marginBottom: "10px",
      textAlign: "center",
    },
    toLabel: {
      display: "flex",
      flexWrap: "wrap",
      fontSize: "12px",
      padding: "3px",
    },
    toAddress: {
      marginRight: "5px",
      backgroundColor: "lightgrey",
      fontSize: "12px",
      padding: "3px",
      color: "white",
      borderRadius: "5px",
    },
    ubButton: {
      fontWeight: "bold",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "10px 20px",
      borderRadius: "5px",
      marginBottom: "2px",
      border: "none",
      textDecoration: "none",
      color: "black",
      textAlign: "center",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
      backgroundColor: loading ? "#ccc" : "",
      cursor: loading ? "not-allowed" : "pointer",
    },
    textArea: {
      width: "100%",
      padding: "10px",
      margin: "5px 0",
      border: "1px solid #ccc",
      borderRadius: "4px",
      boxSizing: "border-box",
      resize: "vertical",
      minHeight: "100px",
    },
    closeButton: {
      position: "absolute",
      top: "5px",
      right: "5px",
      background: "transparent",
      border: "none",
      fontSize: "12px",
      cursor: "pointer",
    },
  };
  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        return provider.getSigner();
      } catch (error) {
        console.error("User rejected request", error);
      }
    } else {
      console.error("Metamask not found");
    }
  };

  const handleBroadcastClick = async () => {
    let signer = wallet || (await connectWallet());

    if (!signer) {
      alert("Please connect to XMTP network first.");
      return;
    }
    if (walletAddresses.length === 0) {
      alert("Please provide wallet addresses as parameters");
      return;
    }
    if (!message) {
      alert("Please enter a message");
      return;
    }

    setLoading(true);

    try {
      const xmtp = await Client.create(signer, { env: env });
      const broadcasts_canMessage = await xmtp.canMessage(walletAddresses);
      for (let i = 0; i < walletAddresses.length; i++) {
        const wallet = walletAddresses[i];
        const canMessage = broadcasts_canMessage[i];
        if (canMessage) {
          const conversation = await xmtp.conversations.newConversation(wallet);
          const sent = await conversation.send(broadcastMessage);
          console.log("Sent", sent);
          if (onMessageSuccess) {
            onMessageSuccess(sent); // Call the callback function here
          }
        }
      }
      setMessageSent(true);
      setLoading(false);

      setTimeout(() => {
        setMessageSent(false);
      }, 3000);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleOpenPopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <button
        className="ubroadcast"
        style={styles.ubButton}
        onClick={handleOpenPopup}>
        <SVGLogo parentClass="ubroadcast" size={size} theme={theme} />
        Send Message
      </button>
      {showPopup && (
        <div
          style={styles.ubContainer}
          className={`ubroadcast ${loading ? "loading" : ""}`}>
          <h4 style={styles.ubHeader}>{title}</h4>
          <button style={styles.closeButton} onClick={handleOpenPopup}>
            X
          </button>
          <div style={styles.toLabel}>
            To:
            {walletAddresses.map((address, index) => (
              <span key={index} style={styles.toAddress}>
                {address}
              </span>
            ))}
          </div>
          <textarea
            style={styles.textArea}
            placeholder={placeholderMessage}
            value={message}
            onChange={(e) => setBroadcastMessage(e.target.value)}
            disabled={loading}
          />
          {loading ? (
            <button style={styles.ubButton} className="loading">
              <SVGLogo />
              Sending...
            </button>
          ) : messageSent ? (
            <button style={styles.ubButton}>
              <SVGLogo />
              Message sent!
            </button>
          ) : (
            <button style={styles.ubButton} onClick={handleBroadcastClick}>
              <SVGLogo />
              Send Broadcast
            </button>
          )}
        </div>
      )}
    </>
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
```

</TabItem>
</Tabs>

Import the component into your project

```jsx
import { UBroadcast } from "./UBroadcast";
```
