import React, { useEffect, useState } from "react";
import { Client } from "@xmtp/xmtp-js";
import { ethers } from "ethers";

export function Subscribe({
  senderAddress,
  onSubscribe,
  onUnsubscribe,
  onError,
  env,
  label = "Subscribe with your wallet",
}) {
  // State for loading status
  const [loading, setLoading] = useState(false);
  // State for subscription status
  const [subscriptionStatus, setSubscriptionStatus] = useState(label);
  // State for consent log
  const [consentLog, setConsentLog] = useState("");
  // State for sender address

  const styles = {
    SubscribeButtonContainer: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      borderRadius: "5px",
      textAlign: "center",
      alignItems: "center",
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
      color: "#333333",
      backgroundColor: "#ededed",
      border: "none",
      fontSize: "12px",
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

  // Define the handleClick function
  const handleClick = async () => {
    try {
      // Set loading to true
      setLoading(true);
      // Get the subscriber
      let wallet = await connectWallet();
      let client = await Client.create(wallet, { env: env });
      // Refresh content list
      await client.contacts.refreshConsentList();
      // Get the consent state of the subscriber
      let state = client.contacts.consentState(client.address);
      // If the state is unknown or blocked, allow the subscriber
      if (state == "unknown" || state == "denied") {
        await client.contacts.allow([client.address]);
        if (typeof onSubscribe === "function") onSubscribe(client.address);
      } else if (state == "allowed") {
        // If the state is allowed, block the subscriber
        if (typeof onUnsubscribe === "function") onUnsubscribe(client.address);
      }
      // Create a log message
      let log = "Address " + client.address + " subscribed to " + senderAddress;
      setConsentLog(log);
      console.log(log);

      // Set the subscription label
      setSubscriptionStatus("Consent State: " + state);

      // Set loading to false
      setLoading(false);
    } catch (error) {
      // If onError function exists, call it with the error
      if (typeof onError === "function") onError(error);
      // Log the error
      console.log(error);
    }
  };

  return (
    <div
      style={styles.SubscribeButtonContainer}
      className={`Subscribe ${loading ? "loading" : ""}`}>
      <small>Sender address: {senderAddress}</small>
      <button style={styles.SubscribeButton} onClick={handleClick}>
        {loading ? "Loading... " : subscriptionStatus}
      </button>
    </div>
  );
}
