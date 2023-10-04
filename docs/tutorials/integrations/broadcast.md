---
sidebar_label: Broadcast
sidebar_position: 5
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import {Broadcast} from "@site/src/components/Widgets/Broadcast";

# Broadcast Tutorial

This tutorial will guide you on how to create a simple `Broadcast` component that enables the user to broadcast messages to one or many specified Ethereum addresses.

<div className="widget-container">
 <Broadcast
  env="production"
  walletAddresses={[
      "0x93E2fc3e99dFb1238eB9e0eF2580EFC5809C7204",
      "0xa64af7F78DE39A238Ecd4ffF7D6D410DBACe2dF0",
  ]}
  placeholderMessage="Enter a broadcast message here"
  onMessageSuccess={(message) => console.log("Message sent"+message.content)}
/>
</div>

### Props

Here are the properties that you can pass to the `Broadcast` component:

- `theme`: Accepts values "default", "dark", or "light". This will set the theme of the broadcast component.
- `size`: Accepts values "small", "medium", or "large". This will set the size of the broadcast component.
- `placeholderMessage`: (Optional) A string for placeholder text in the message input (e.g., "Enter your marketing message here").
- `walletAddresses`: (Optional) Wallet addresses to which you want to send a broadcast message.
- `wallet`: (Optional) Sends the current signer of the wallet. This is the wallet that will be used to send the broadcast message.
- `env`: XMTP developer environment. This is the environment in which the XMTP client will operate. Read more [here](https://xmtp.org/docs/build/authentication#environments)
- `onMessageSuccess`: (Optional) Callback to run after sending a successful message. This function will be called with the sent message as its argument.

## Usage

Here is an example of how to use the `Broadcast` component:

```jsx
<Broadcast
  theme="dark"
  size="medium"
  wallet={signer}
  walletAddresses={[
    "0x93E2fc3e99dFb1238eB9e0eF2580EFC5809C7204",
    "0xa64af7F78DE39A238Ecd4ffF7D6D410DBACe2dF0",
  ]}
  placeholderMessage="Enter a broadcast message here"
  env="production"
  onMessageSuccess={(message) => console.log("Message sent" + message.content)}
/>
```

### Installation

To use the `Broadcast` component, you need to install the following dependencies:

```bash
npm install @xmtp/xmtp-js ethers
```

After installing the dependencies, you can copy and paste the `Broadcast` component into your project:

<Tabs >
<TabItem value="index" label="Broadcast.js">

```jsx
// Import necessary libraries
import React, { useState, useEffect } from "react";
import { Client } from "@xmtp/react-sdk"; // XMTP SDK
import { ethers } from "ethers"; // Ethereum library

// Define the Broadcast component
export function Broadcast({
  theme = "default",
  size = "medium",
  title = "Broadcast Message",
  wallet,
  walletAddresses = [],
  placeholderMessage = "Enter your marketing message here",
  message = "Welcome to XMTP!",
  env,
  onMessageSuccess,
}) {
  // Define state variables
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [broadcastMessage, setBroadcastMessage] = useState(message);
  const [messageSent, setMessageSent] = useState(false);

  // Define styles for the component
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
      maxWidth: "400px",
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
      color: theme === "dark" ? "#ffffff" : "#333333",
      backgroundColor:
        theme === "dark" ? "#333333" : theme === "light" ? "#fff" : "#ededed",
      border: theme === "light" ? "1px solid #333333" : "none",
      fontSize: size === "large" ? "16px" : "12px",
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

  // Function to connect to the user's wallet
  const connectWallet = async () => {
    // Check if the user has a web3 provider installed
    if (typeof window.ethereum !== "undefined") {
      try {
        // Request access to the user's accounts
        await window.ethereum.request({ method: "eth_requestAccounts" });
        // Create a new ethers provider using the user's web3 provider
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        // Return the signer from the provider
        return provider.getSigner();
      } catch (error) {
        console.error("User rejected request", error);
      }
    } else {
      console.error("Metamask not found");
    }
  };

  // Function to handle the broadcast click
  const handleBroadcastClick = async () => {
    // Get the signer from the wallet prop or connect to the user's wallet
    let signer = wallet || (await connectWallet());

    // Check if a signer was obtained
    if (!signer) {
      alert("Please connect to XMTP network first.");
      return;
    }
    // Check if wallet addresses were provided
    if (walletAddresses.length === 0) {
      alert("Please provide wallet addresses as parameters");
      return;
    }
    // Check if a message was entered
    if (!broadcastMessage) {
      alert("Please enter a message");
      return;
    }

    // Set loading to true
    setLoading(true);

    try {
      // Create a new XMTP client with the signer and environment
      const xmtp = await Client.create(signer, { env: env });
      // Check if the client can message the provided wallet addresses
      const broadcasts_canMessage = await xmtp.canMessage(walletAddresses);
      // Loop through the wallet addresses
      for (let i = 0; i < walletAddresses.length; i++) {
        const wallet = walletAddresses[i];
        const canMessage = broadcasts_canMessage[i];
        // If the client can message the wallet address
        if (canMessage) {
          // Create a new conversation with the wallet address
          const conversation = await xmtp.conversations.newConversation(wallet);
          // Send the broadcast message
          const sent = await conversation.send(broadcastMessage);
          console.log("Sent", sent);
          // If a success callback was provided, call it with the sent message
          if (onMessageSuccess) {
            onMessageSuccess(sent);
          }
        }
      }
      // Set message sent to true and loading to false
      setMessageSent(true);
      setLoading(false);

      // Reset message sent to false after 3 seconds
      setTimeout(() => {
        setMessageSent(false);
      }, 3000);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // Function to handle opening and closing the popup
  const handleOpenPopup = () => {
    setShowPopup(!showPopup);
  };

  // Render the Broadcast component
  return (
    <>
      <button
        className="Broadcast"
        style={styles.ubButton}
        onClick={handleOpenPopup}>
        Send Message
      </button>
      {showPopup && (
        <div
          style={styles.ubContainer}
          className={`Broadcast ${loading ? "loading" : ""}`}>
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
            value={broadcastMessage}
            onChange={(e) => setBroadcastMessage(e.target.value)}
            disabled={loading}
          />
          {loading ? (
            <button style={styles.ubButton} className="loading">
              Sending...
            </button>
          ) : messageSent ? (
            <button style={styles.ubButton}>Message sent!</button>
          ) : (
            <button style={styles.ubButton} onClick={handleBroadcastClick}>
              Send Broadcast
            </button>
          )}
        </div>
      )}
    </>
  );
}
```

</TabItem>
</Tabs>

After copying the `Broadcast` component, you can import it into your project like this:

```jsx
import { Broadcast } from "./Broadcast";
```
