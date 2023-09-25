import React, { useState, useEffect } from "react";
import { Client } from "@xmtp/react-sdk";
import "./UBroadcast.css";
import styled from "styled-components";
import Logo from "./Logo";

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
  wallet,
  walletAddresses = [],
  placeholderMessage = "Enter your marketing message here",
  env,
}) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [from, setFrom] = useState("");
  const [signer, setSigner] = useState();

  useEffect(() => {
    const fetchAddress = async () => {
      if (wallet) {
        setSigner(wallet);
        const address = await wallet.getAddress();
        setFrom(address);
      }
    };
    fetchAddress();
  }, [wallet]);

  const handleBroadcastClick = async () => {
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
          const sent = await conversation.send("gm");
          console.log("Sent", sent);
        }
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const [isOpen, setIsOpen] = useState(
    localStorage.getItem("UBroadcastOpen") === "true" || false,
  );

  useEffect(() => {
    window.ubroadcast = {
      open: () => {
        setIsOpen(true);
        localStorage.setItem("UBroadcastOpen", true);
      },
      close: () => {
        setIsOpen(false);
        localStorage.setItem("UBroadcastOpen", false);
      },
    };
    return () => delete window.ubroadcast;
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCloseClick = () => {
    setIsOpen(false);
    localStorage.setItem("UBroadcastOpen", false);
  };

  return (
    <div
      className={`ubroadcast-container ${theme} ${size} ${
        loading ? "loading" : ""
      }`}>
      <h4>Broadcast Message</h4>
      <button className="close-btn" onClick={handleCloseClick}>
        X
      </button>
      <div className="to-label">{`From: ${from}`}</div>
      <div className="to-label">
        To:
        {walletAddresses.map((address, index) => (
          <StyledBadge key={index} className="to-address">
            {address}
          </StyledBadge>
        ))}
      </div>
      <textarea
        placeholder={placeholderMessage}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        disabled={loading}
      />
      {loading ? (
        <button className="ubroadcast-button">
          <Logo className="logo" />
          Sending....
        </button>
      ) : (
        <button className="ubroadcast-button" onClick={handleBroadcastClick}>
          <Logo className="logo" />
          Send Broadcast
        </button>
      )}
    </div>
  );
}
