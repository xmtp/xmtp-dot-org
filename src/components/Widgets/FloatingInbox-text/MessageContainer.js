import React, { useState, useRef, useEffect } from "react";
import { MessageInput } from "./MessageInput";
import { MessageItem } from "./MessageItem";

export const MessageContainer = ({
  conversation,
  client,
  searchTerm,
  isContained = false,
  selectConversation,
  isConsent = false,
}) => {
  const isFirstLoad = useRef(true);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const [showPopup, setShowPopup] = useState(
    conversation.consentState === "unknown"
  );

  const styles = {
    loadingText: {
      textAlign: "center",
    },
    messagesContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      height: "100%",
    },
    messagesList: {
      paddingLeft: "5px",
      paddingRight: "5px",
      margin: "0px",
      alignItems: "flex-start",
      flexGrow: 1,
      display: "flex",
      flexDirection: "column",
      overflowY: "auto",
    },
    popup: {
      width: "100%",
      padding: "10px",
      backgroundColor: "rgba(211, 211, 211, 0.3)", // lightgrey with transparency
    },
    popupInner: {
      display: "flex",
      justifyContent: "space-evenly",
      width: "100%",
    },
    popupButton: {
      borderRadius: "12px", // Rounded corners
      paddingLeft: "10px", // Some padding on the left
      paddingRight: "10px", // Some padding on the right
    },
    acceptButton: {
      backgroundColor: "blue", // Blue background
      color: "white", // White text
    },
    blockButton: {
      backgroundColor: "red", // Red background
      color: "white", // White text
    },
    popupTitle: {
      textAlign: "center",
    },
  };

  const updateMessages = (prevMessages, newMessage) => {
    const doesMessageExist = prevMessages.some(
      (existingMessage) => existingMessage.id === newMessage.id
    );

    if (!doesMessageExist) {
      return [...prevMessages, newMessage];
    }

    return prevMessages;
  };

  useEffect(() => {
    const fetchMessages = async () => {
      if (conversation && conversation.peerAddress && isFirstLoad.current) {
        setIsLoading(true);
        const initialMessages = await conversation?.messages();

        let updatedMessages = [];
        initialMessages.forEach((message) => {
          updatedMessages = updateMessages(updatedMessages, message);
        });

        setMessages(updatedMessages);
        setIsLoading(false);
        isFirstLoad.current = false;
      }
    };

    fetchMessages();
  }, [conversation]);

  // Function to handle the acceptance of a contact
  const handleAccept = async () => {
    // Allow the contact
    await client.contacts.allow([conversation.peerAddress]);
    // Hide the popup
    setShowPopup(false);
    // Refresh the consent list
    await client.contacts.refreshConsentList();
    // Log the acceptance
    console.log("accepted", conversation.peerAddress);
  };

  // Function to handle the blocking of a contact
  const handleBlock = async () => {
    // Block the contact
    await client.contacts.block([conversation.peerAddress]);
    // Hide the popup
    setShowPopup(false);
    // Refresh the consent list
    await client.contacts.refreshConsentList();
    // Log the blocking
    console.log("blocked", conversation.peerAddress);
  };
  const startMessageStream = async () => {
    let stream = await conversation.streamMessages();
    for await (const message of stream) {
      setMessages((prevMessages) => {
        return updateMessages(prevMessages, message);
      });
    }
  };

  useEffect(() => {
    if (conversation && conversation.peerAddress) {
      startMessageStream();
    }
    return () => {};
  }, [conversation]);

  useEffect(() => {
    if (!isContained)
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async (newMessage) => {
    if (!newMessage.trim()) {
      alert("empty message");
      return;
    }
    if (conversation && conversation.peerAddress) {
      await conversation.send(newMessage);
    } else if (conversation) {
      const conv = await client.conversations.newConversation(searchTerm);
      selectConversation(conv);
      await conv.send(newMessage);
    }
  };

  return (
    <div style={styles.messagesContainer}>
      {isLoading ? (
        <div style={styles.loadingText}>Loading messages...</div>
      ) : (
        <>
          <ul style={styles.messagesList}>
            {messages.slice().map((message) => {
              return (
                <MessageItem
                  key={message.id}
                  message={message}
                  senderAddress={message.senderAddress}
                  client={client}
                />
              );
            })}
            <div ref={messagesEndRef} />
          </ul>
          {isConsent && showPopup ? (
            <div style={styles.popup}>
              <h4 style={styles.popupTitle}>Do you trust this contact?</h4>
              <div style={styles.popupInner}>
                <button
                  style={{ ...styles.popupButton, ...styles.acceptButton }}
                  onClick={handleAccept}
                >
                  Accept
                </button>
                <button
                  style={{ ...styles.popupButton, ...styles.blockButton }}
                  onClick={handleBlock}
                >
                  Block
                </button>
              </div>
            </div>
          ) : null}
          <MessageInput
            onSendMessage={(msg) => {
              handleSendMessage(msg);
            }}
          />
        </>
      )}
    </div>
  );
};
