---
sidebar_label: Subscription
sidebar_position: 4
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import {Subscribe} from "@site/src/components/Widgets/Subscribe";

# Subscription Tutorial

This tutorial will guide you through the creation of a `Subscribe` component. This component allows users to subscribe to a Dapp through XMTP. It includes callbacks for managing subscribers lists.

<div className="widget-container">
<Subscribe
theme="default"
size="medium"
onSubscribe={(address) => console.log("New subscriber: " + address)}
onUnsubscribe={(address) => console.log("Unsubscribed: " + address)}
onError={(address) => console.log("Error subscribing: " + address)}
env="production"
/>
</div>

### Props

- `theme`: (Optional) Set the theme. Available options: 'default', 'dark', 'light'. Default is 'default'.
- `size`: (Optional) Set the button size. Available options: 'small', 'medium', 'large'. Default is 'medium'.
- `wallet`: (Optional) An instance of ethers.js signer.
- `checkSubscriptionStatus`: (Required) A function that checks the subscription status of a given address.
- `onSubscribe`: (Required) A callback function that is called when a new subscription is made.
- `onUnsubscribe`: (Required) A callback function that is called when a subscription is cancelled.
- `onError`: (Required) A callback function that is called when an error occurs during subscription or unsubscription.
- `env`: XMTP developer environment. Read more [here](https://xmtp.org/docs/build/authentication#environments)
- `labels`: (Optional) An object that contains the labels for different states of the component.

### Usage

```jsx
<Subscribe
  theme="default"
  size="medium"
  wallet={signer}
  checkSubscriptionStatus={(address) => checkSubscriptionStatus(address)}
  onSubscribe={(address) => console.log("New subscriber: " + address)}
  onUnsubscribe={(address) => console.log("Unsubscribed: " + address)}
  onError={(address) => console.log("Error subscribing: " + address)}
  labels = {
    loading: "Loading...",
    subscribed: "Subscribed",
    unsubscribed: "Unsubscribed",
    default: "Subscribe with your wallet",
  };
/>
```

### Installation

Install required dependencies

```bash
npm install @xmtp/xmtp-js ethers
```

Copy paste the component into your project

<Tabs >
<TabItem value="index" label="Subscribe.js">

```jsx
// Import necessary libraries for React and state management
import React, { useEffect, useState } from "react";
// Import the XMTP SDK for subscription management
import { Client } from "@xmtp/react-sdk";
// Import ethers library for Ethereum wallet interaction
import { ethers } from "ethers";

// Define the Subscribe component
export function Subscribe({
  theme = "default",
  size = "medium",
  wallet,
  onSubscribe,
  onUnsubscribe,
  checkSubscriptionStatus,
  onError,
  env,
  labels = {
    loading: "Loading...",
    subscribed: "Subscribed",
    unsubscribed: "Unsubscribed",
    default: "Subscribe with your wallet",
  },
}) {
  // Initialize state variables
  const [loading, setLoading] = useState(false); // Indicates if the component is in a loading state
  const [subscriptionStatus, setSubscriptionStatus] = useState("none"); // Tracks the subscription status

  // Define CSS for animations and button styling
  const spin = `
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
  const styles = {
    SubscribeButtonContainer: {
      position: "relative",
      display: "inline-block",
      borderRadius: "5px",
      animation: `${loading ? spin : ""} 0.5s linear infinite`,
    },
    SubscribeButton: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "10px 20px",
      borderRadius: "5px",
      marginBottom: "2px",
      textAlign: "left",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
      fontWeight: "bold",
      color: theme === "dark" ? "#ffffff" : "#333333",
      backgroundColor:
        theme === "dark" ? "#333333" : theme === "light" ? "#fff" : "#ededed",
      border: theme === "light" ? "1px solid #333333" : "none",
      fontSize: size === "large" ? "16px" : "12px",
    },
    logoIcon: {
      width: size === "medium" ? "12px" : size === "large" ? "16px" : "10px",
      height: size === "medium" ? "12px" : size === "large" ? "16px" : "10px",
      marginRight: "5px",
      transition: "all 0.5s ease",
    },
  };

  // Helper function to get the Ethereum address from the signer object
  const getAddress = async (signer) => {
    try {
      return await signer?.getAddress();
    } catch (e) {
      console.log(e);
    }
  };

  // Helper function to connect to the user's Ethereum wallet
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

  // Function executed when the user clicks the subscribe button
  const handleClick = async () => {
    setLoading(true);
    let currentSigner = wallet || (await connectWallet());
    if (currentSigner) {
      await connect(currentSigner);
    }
    setLoading(false);
  };

  // Function to connect to XMTP and manage subscription
  const connect = async (signer) => {
    try {
      const address = await getAddress(signer);
      let isSubscribed = false;
      // Use the provided function to check if the user is already subscribed
      if (checkSubscriptionStatus)
        isSubscribed = await checkSubscriptionStatus(address);
      // If subscribed, unsubscribe; otherwise, subscribe
      if (isSubscribed) {
        await unsubscribe(signer);
      } else {
        await subscribe(signer);
      }
    } catch (error) {
      // Handle errors
      if (typeof onError === "function") onError(error);
      console.log(error);
    }
  };

  // Function to unsubscribe the user using XMTP
  async function unsubscribe(signer) {
    const address = await getAddress(signer);
    // Update the subscription status to 'unsubscribed'
    setSubscriptionStatus("unsubscribed");
    // Execute the onUnsubscribe callback, if provided
    if (onUnsubscribe) onUnsubscribe(address);
    // Reset the subscription status after 5 seconds
    setTimeout(() => {
      setSubscriptionStatus("none");
    }, 5000);
  }

  // Function to subscribe the user using XMTP
  async function subscribe(signer) {
    // Create a new XMTP client using the signer and environment
    const xmtp = await Client.create(signer, { env: env });
    // Update the subscription status to 'subscribed'
    setSubscriptionStatus("subscribed");
    // Execute the onSubscribe callback, if provided
    if (onSubscribe) onSubscribe(xmtp.address);
    // Reset the subscription status after 5 seconds
    setTimeout(() => {
      setSubscriptionStatus("none");
    }, 5000);
  }

  // Use effect to check the initial subscription status
  useEffect(() => {
    let isMounted = true;
    const init = async () => {
      setLoading(true);
      if (checkSubscriptionStatus && wallet) {
        const address = await getAddress(wallet);
        const isSubscribed = await checkSubscriptionStatus(address);
        if (isMounted) {
          setSubscriptionStatus(isSubscribed ? "subscribed" : "unsubscribed");
        }
      }
      setLoading(false);
    };
    init();
    return () => {
      isMounted = false;
    };
  }, [checkSubscriptionStatus, wallet]);

  // Render the component
  return (
    <div
      style={styles.SubscribeButtonContainer}
      className={`Subscribe ${loading ? "loading" : ""}`}>
      <button style={styles.SubscribeButton} onClick={handleClick}>
        {loading
          ? labels.loading
          : subscriptionStatus === "subscribed"
          ? labels.subscribed
          : subscriptionStatus === "unsubscribed"
          ? labels.unsubscribed
          : labels.default}
      </button>
    </div>
  );
}
```

</TabItem>
</Tabs>

Import the component into your project

```jsx
import { Subscribe } from "./Subscribe";
```
