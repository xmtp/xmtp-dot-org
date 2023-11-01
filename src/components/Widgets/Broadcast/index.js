import React, { useState } from "react";
import { Client } from "@xmtp/xmtp-js";
import { ethers } from "ethers";

export function Broadcast({
  title = "Broadcast Message",
  wallet,
  walletAddresses = [],
  placeholderMessage = "Enter your marketing message here",
  message = "Welcome to XMTP!",
  env,
  onMessageSuccess,
}) {
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [broadcastMessage, setBroadcastMessage] = useState(message);
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
      textDecoration: "none",
      color: "black",
      textAlign: "center",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
      color: "#333333",
      backgroundColor: "#ededed",
      border: "none",
      fontSize: "12px",
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
    textArea2: {
      width: "100%",
      display: "block",
      fontSize: "12px",
      textAlign: "center",
      marginTop: "20px",
      marginBottom: "20px",
      rows: "10",
    },
    styledBadged: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "10px",
      width: "50%",
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
    if (!broadcastMessage) {
      alert("Please enter a message");
      return;
    }
    setLoading(true);

    try {
      // Create a new XMTP client with the signer and environment
      const xmtp = await Client.create(signer, { env: env });
      await xmtp.contacts.refreshConsentList();

      // Check if the client can message the provided wallet addresses
      const broadcasts_canMessage = await xmtp.canMessage(walletAddresses);
      // Loop through the wallet addresses
      for (let i = 0; i < walletAddresses.length; i++) {
        const wallet = walletAddresses[i];
        const canMessage = broadcasts_canMessage[i];
        // If the address can receive messages and has allowed consent
        if (canMessage && xmtp.contacts.isAllowed(wallet)) {
          // Create a new conversation with the wallet address
          const conversation = await xmtp.conversations.newConversation(wallet);
          // Send the broadcast message to the conversation
          const sent = await conversation.send(broadcastMessage);
          console.log("Sent", sent);
          // If a callback function is provided, call it with the sent message
          if (onMessageSuccess) {
            onMessageSuccess(sent);
          }
        } else {
          // If the address cannot receive messages, log it
          if (!canMessage) console.log(wallet, " is not on the network");
          // If the address has not allowed consent, log it
          if (!xmtp.contacts.isAllowed(wallet))
            console.log(wallet, " has not allowed consent yet");
        }
      }
      setMessageSent(true);
      setLoading(false);

      setTimeout(() => {
        setMessageSent(false);
      }, 3000);
    } catch (error) {
      console.log(error);
      alert(error);
      setLoading(false);
    }
  };

  const [walletAddressesInput, setWalletAddressesInput] = useState(
    walletAddresses.join("\n "),
  );
  const [walletAddressesState, setWalletAddressesState] = useState(
    walletAddressesInput.split(", "),
  );
  const handleOpenPopup = () => {
    setWalletAddressesState(walletAddressesInput.split(", "));
    setShowPopup(!showPopup);
  };
  const handleWalletAddressesInputChange = (event) => {
    const newAddresses = event.target.value;
    setWalletAddressesInput(newAddresses);
    setWalletAddressesState(newAddresses.split(", "));
  };

  return (
    <>
      <div style={styles.styledBadged}>
        <small>Addresses:</small>
        <textarea
          style={styles.textArea2}
          rows="5"
          value={walletAddressesInput}
          onChange={handleWalletAddressesInputChange}
          placeholder="Enter wallet addresses here, separated by commas"
        />
        <button
          className="Broadcast"
          style={styles.ubButton}
          onClick={handleOpenPopup}>
          Send Message
        </button>
      </div>
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
            {walletAddressesState.map((address, index) => (
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
