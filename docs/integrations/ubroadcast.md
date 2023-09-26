---
sidebar_label: UBroadcast
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
/>
```

### Installation

Install required dependencies

```bash
npm install @xmtp/xmtp-js styled-components ethers
```

Copy paste the component into your project

<Tabs >
<TabItem value="index" label="UBroadcast.js">

```jsx
import React, { useState } from "react";
import { Client } from "@xmtp/xmtp-js";
import styled from "styled-components";
import { ethers } from "ethers";

const StyledBadge = styled.span`
  padding: 0.225rem;
  background-color: #fff;
  font-size: 12px;
  background-color: lightgrey;
  border-radius: 5px;
  display: inline-block;
  margin: auto;
  margin-right: 10px;
`;
export function UBroadcast({
  theme = "default",
  size = "medium",
  title = "Broadcast Message",
  wallet,
  walletAddresses = ["0x93E2fc3e99dFb1238eB9e0eF2580EFC5809C7204"],
  placeholderMessage = "Enter your marketing message here",
  message = "Welcome to XMTP!",
  env,
}) {
  if (walletAddresses.length === 0 || walletAddresses.includes("")) {
    walletAddresses = ["0x93E2fc3e99dFb1238eB9e0eF2580EFC5809C7204"];
  }
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [broadcastMessage, setBroadcastMessage] = useState("");
  const [messageSent, setMessageSent] = useState(false);

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
        }
      }
      setMessageSent(true);
      setLoading(false);

      // Set a timeout to revert messageSent back to false after 5 seconds
      setTimeout(() => {
        setMessageSent(false);
      }, 3000);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // Function to open the popup
  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  // Function to close the popup
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      {/* Button to open the popup */}
      <UBButton onClick={handleOpenPopup}>
        <SVGLogo className="logo" />
        Send Message
      </UBButton>
      {showPopup && (
        <UBContainer className={`${theme} ${size} ${loading ? "loading" : ""}`}>
          <UBHeader>{title}</UBHeader>
          <CloseButton onClick={handleClosePopup}>X</CloseButton>
          <ToLabel>
            To:
            {walletAddresses.map((address, index) => (
              <ToAddress key={index}>{address}</ToAddress>
            ))}
          </ToLabel>
          <TextArea
            placeholder={placeholderMessage}
            value={message}
            onChange={(e) => setBroadcastMessage(e.target.value)}
            disabled={loading}
          />
          {loading ? (
            <UBButton className="loading">
              <SVGLogo className="logo" />
              Sending...
            </UBButton>
          ) : messageSent ? (
            <UBButton>
              <SVGLogo className="logo" />
              Message sent!
            </UBButton>
          ) : (
            <UBButton onClick={handleBroadcastClick}>
              <SVGLogo className="logo" />
              Send Broadcast
            </UBButton>
          )}
        </UBContainer>
      )}
    </>
  );
}
const UBContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  width: auto;
  box-sizing: border-box;
  display: flex; // Add this line
  justify-content: center; // Add this line
  align-items: center; // Add this line
  flex-direction: column; // Add this line if you want to stack child elements vertically
`;

const UBHeader = styled.h4`
  margin: 0px;
  margin-bottom: 10px;
  text-align: center;
`;

const ToLabel = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 12px;
  padding: 3px;
`;

const ToAddress = styled.span`
  margin-right: 5px;
  background-color: lightgrey;
  font-size: 12px;
  padding: 3px;
  color: white;
  border-radius: 5px;
`;

const UBButton = styled.button`
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  justify-content: center; // Add this line
  padding: 10px 20px;
  border-radius: 5px;
  margin-bottom: 2px;
  border: none;
  text-align: center; // Add this line
  cursor: pointer;
  transition: background-color 0.3s ease;

  &.loading {
    background-color: #ccc;
    cursor: not-allowed;
  }

  &:hover .logo path {
    transform: rotate(360deg);
    fill: ${({ theme }) => (theme === "dark" ? "#fff" : "#000")};
  }

  &:hover .logo {
    transform: rotate(360deg);
  }
`;
const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  resize: vertical;
  min-height: 100px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background: transparent;
  border: none;
  font-size: 12px;
  cursor: pointer;
`;

// You can continue with the rest of the styled components in a similar fashion.

const LogoIcon = styled.svg`
  width: ${({ size }) => {
    if (size === "medium") return "12px";
    if (size === "large") return "16px";
    return "10px"; // medium and small
  }};
  height: ${({ size }) => {
    if (size === "medium") return "12px";
    if (size === "large") return "16px";
    return "10px"; // medium and small
  }};

  margin-right: 5px;
  transition: all 0.5s ease;
`;

function SVGLogo({ theme, size }) {
  // Use theme to conditionally set fill color
  const determineFill = () => {
    if (theme === "dark") {
      return "#fc4f37";
    }
    if (theme === "light") {
      return "#fc4f37";
    }
    return "#fc4f37";
  };

  return (
    <LogoIcon
      className="logo"
      size={size}
      viewBox="0 0 462 462"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fill={determineFill()}
        d="M1 231C1 103.422 104.422 0 232 0C359.495 0 458 101.5 461 230C461 271 447 305.5 412 338C382.424 365.464 332 369.5 295.003 349C268.597 333.767 248.246 301.326 231 277.5L199 326.5H130L195 229.997L132 135H203L231.5 184L259.5 135H331L266 230C266 230 297 277.5 314 296C331 314.5 362 315 382 295C403.989 273.011 408.912 255.502 409 230C409.343 131.294 330.941 52 232 52C133.141 52 53 132.141 53 231C53 329.859 133.141 410 232 410C245.674 410 258.781 408.851 271.5 406L283.5 456.5C265.401 460.558 249.778 462 232 462C104.422 462 1 358.578 1 231Z"
      />
    </LogoIcon>
  );
}
```

</TabItem>
</Tabs>

Import the component into your project

```jsx
import { UBroadcast } from "./UBroadcast";
```
