---
sidebar_label: Floating Inbox
sidebar_position: 6
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import {Inbox} from "@site/src/components/Widgets/Inbox";

# Floating Inbox

The `Inbox` widget is a floating messaging component designed to allow for integrating web3 messaging in any website.

<div className="widget-container">
<Inbox env="production" />
</div>

### Props

Integrating the Inbox component into your application is simple. Here's an example of how to include it in your component tree:

- `wallet`: (Optional) Sends the current signer of the wallet.
- `env`: XMTP developer environment. Read more [here](https://xmtp.org/docs/build/authentication#environments)

### Usage

```jsx
<Inbox wallet={signer} env="production" />
```

#### Programmatic Control

The Inbox widget can be controlled programmatically using global methods to open or close it. These methods provide flexibility in interacting with the Inbox across different components.

Use the following command to open or close the Inbox:

```jsx
window.Inbox.open();
window.Inbox.close();
```

#### Example Integration

Here's an example of how you can create buttons to open and close the Inbox within a section of your application:

```jsx
<section >
  <button onClick={() => window.Inbox.open()}>Open Inbox</button>
  <button onClick={() => window.Inbox.close()}>Close Inbox</button>
</section>

<Inbox />
```

### Installation

Install required dependencies

```bash
npm install @xmtp/xmtp-js ethers
```

Copy paste the component into your project

<Tabs >
<TabItem value="index" label="Inbox.js">

```jsx
import React, { useState, useRef, useEffect } from "react";
import { Client } from "@xmtp/xmtp-js";
import { ethers } from "ethers";

export function Inbox({ wallet, env, relative = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOnNetwork, setIsOnNetwork] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [xmtpClient, setXmtpClient] = useState();
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [signer, setSigner] = useState();

  const styles = {
    floatingLogo: (relative, isOpen) => ({
      position: relative ? "relative" : "fixed",
      bottom: relative ? "auto" : "20px",
      right: relative ? "auto" : "20px",
      width: "30px",
      height: "30px",
      borderRadius: "50%",
      backgroundColor: "white",
      display: "flex",
      alignItems: "center",
      border: "1px solid #ccc",
      justifyContent: "center",
      boxShadow: "0 2px 10px #ccc",
      cursor: "pointer",
      transition: "transform 0.3s ease",
      padding: "5px",
    }),
    Button: (isOnNetwork) => ({
      position: "fixed",
      bottom: "70px",
      right: "20px",
      width: "300px",
      height: "400px",
      border: "1px solid #ccc",
      backgroundColor: "#f9f9f9",
      borderRadius: "10px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      zIndex: "1000",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
    }),
    logoutBtn: {
      position: "absolute",
      top: "10px",
      left: "5px",
      background: "transparent",
      border: "none",
      fontSize: "10px",
      cursor: "pointer",
    },
    widgetHeader: {
      padding: "5px",
    },
    conversationHeader: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "none",
      border: "none",
      width: "auto",
      margin: "0px",
    },
    conversationHeaderH4: {
      margin: "0px",
      padding: "4px",
    },
    backButton: {
      border: "0px",
      background: "transparent",
      cursor: "pointer",
    },
    widgetContent: {
      flexGrow: 1,
      overflowY: "auto",
    },
    xmtpContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
    },
    btnXmtp: {
      backgroundColor: "#f0f0f0",
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      color: "#000",
      justifyContent: "center",
      border: "1px solid grey",
      padding: "10px",
      borderRadius: "5px",
    },
    widgetFooter: {
      padding: "5px",
      fontSize: "12px",
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    powered: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  };

  useEffect(() => {
    const initialIsOpen =
      localStorage.getItem("isWidgetOpen") === "true" || false;
    const initialIsOnNetwork =
      localStorage.getItem("isOnNetwork") === "true" || false;
    const initialIsConnected =
      (localStorage.getItem("isConnected") && wallet === "true") || false;

    setIsOpen(initialIsOpen);
    setIsOnNetwork(initialIsOnNetwork);
    setIsConnected(initialIsConnected);
  }, []);

  useEffect(() => {
    if (wallet) {
      setSigner(wallet);
      setIsConnected(true);
    }
  }, [wallet]);

  useEffect(() => {
    localStorage.setItem("isOnNetwork", isOnNetwork.toString());
    localStorage.setItem("isWidgetOpen", isOpen.toString());
    localStorage.setItem("isConnected", isConnected.toString());
  }, [isOpen, isConnected, isOnNetwork]);

  useEffect(() => {
    if (signer && isOnNetwork) {
      initXmtpWithKeys();
    }
  }, [signer, isOnNetwork]);

  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        await window.ethereum.enable();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        setSigner(provider.getSigner());
        setIsConnected(true);
      } catch (error) {
        console.error("User rejected request", error);
      }
    } else {
      console.error("Metamask not found");
    }
  };

  const getAddress = async (signer) => {
    try {
      return await signer?.getAddress();
    } catch (e) {
      console.log(e);
      console.log("entra3");
    }
  };

  const initXmtpWithKeys = async function () {
    if (!signer) {
      handleLogout();
      return;
    }
    console.log("entra7");
    let address = await getAddress(signer);
    let keys = loadKeys(address);
    const clientOptions = {
      env: env ? env : getEnv(),
    };
    if (!keys) {
      keys = await Client.getKeys(signer, {
        ...clientOptions,
        skipContactPublishing: true,
        persistConversations: false,
      });
      storeKeys(address, keys);
    }
    const xmtp = await Client.create(null, {
      ...clientOptions,
      privateKeyOverride: keys,
    });

    setIsOnNetwork(!!xmtp.address);
    setXmtpClient(xmtp);
  };

  const openWidget = () => {
    setIsOpen(true);
  };

  const closeWidget = () => {
    setIsOpen(false);
  };

  if (typeof window !== "undefined") {
    window.Inbox = {
      open: openWidget,
      close: closeWidget,
    };
  }
  const handleLogout = async () => {
    setIsConnected(false);
    setIsOnNetwork(false);

    const address = await getAddress(signer);
    wipeKeys(address);
    setSigner(null);
    setSelectedConversation(null);
    localStorage.removeItem("isOnNetwork");
    localStorage.removeItem("isConnected");
  };
  return (
    <>
      <div
        style={styles.floatingLogo(relative, isOpen)}
        onClick={isOpen ? closeWidget : openWidget}
        className={
          "inbox " + (isOpen ? "spin-clockwise" : "spin-counter-clockwise")
        }>
        💬
      </div>
      {isOpen && (
        <div
          style={styles.Button(isOnNetwork)}
          className={"Inbox" + (isOnNetwork ? "expanded" : "")}>
          {isConnected && (
            <button style={styles.logoutBtn} onClick={handleLogout}>
              Logout
            </button>
          )}
          {isConnected && isOnNetwork && (
            <div style={styles.widgetHeader}>
              <div style={styles.conversationHeader}>
                {isOnNetwork && selectedConversation && (
                  <button
                    style={styles.backButton}
                    onClick={() => {
                      setSelectedConversation(null);
                    }}>
                    ←
                  </button>
                )}
                <h4 style={styles.conversationHeaderH4}>Conversations</h4>
              </div>
            </div>
          )}
          <div style={styles.widgetContent}>
            {!isConnected && (
              <div style={styles.xmtpContainer}>
                <button style={styles.btnXmtp} onClick={connectWallet}>
                  Connect Wallet
                </button>
              </div>
            )}
            {isConnected && !isOnNetwork && (
              <div style={styles.xmtpContainer}>
                <button style={styles.btnXmtp} onClick={initXmtpWithKeys}>
                  Connect to XMTP
                </button>
              </div>
            )}
            {isConnected && isOnNetwork && xmtpClient && (
              <ConversationContainer
                client={xmtpClient}
                selectedConversation={selectedConversation}
                setSelectedConversation={setSelectedConversation}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}

const ENCODING = "binary";

export const getEnv = () => {
  // "dev" | "production" | "local"
  return typeof process !== "undefined" && process.env.REACT_APP_XMTP_ENV
    ? process.env.REACT_APP_XMTP_ENV
    : "production";
};
export const buildLocalStorageKey = (walletAddress) => {
  return walletAddress ? `xmtp:${getEnv()}:keys:${walletAddress}` : "";
};

export const loadKeys = (walletAddress) => {
  const val = localStorage.getItem(buildLocalStorageKey(walletAddress));
  return val ? Buffer.from(val, ENCODING) : null;
};

export const storeKeys = (walletAddress, keys) => {
  localStorage.setItem(
    buildLocalStorageKey(walletAddress),
    Buffer.from(keys).toString(ENCODING),
  );
};

export const wipeKeys = (walletAddress) => {
  localStorage.removeItem(buildLocalStorageKey(walletAddress));
};

export const ConversationContainer = ({
  client,
  selectedConversation,
  setSelectedConversation,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [peerAddress, setPeerAddress] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingResolve, setLoadingResolve] = useState(false);

  const [canMessage, setCanMessage] = useState(false);
  const [conversations, setConversations] = useState([]);
  const styles = {
    conversations: {
      height: "100%",
    },
    conversationList: {
      overflowY: "auto",
      padding: "0px",
      margin: "0",
      listStyle: "none",
      overflowY: "scroll",
    },
    conversationListItem: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderBottom: "1px solid #e0e0e0",
      cursor: "pointer",
      backgroundColor: "#f0f0f0",
      padding: "10px",
      marginTop: "0px",
      transition: "background-color 0.3s ease",
    },
    conversationDetails: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      width: "75%",
      marginLeft: "10px",
      overflow: "hidden",
    },
    conversationName: {
      fontSize: "16px",
      fontWeight: "bold",
    },
    messagePreview: {
      fontSize: "14px",
      color: "#666",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    conversationTimestamp: {
      fontSize: "12px",
      color: "#999",
      width: "25%",
      textAlign: "right",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      justifyContent: "space-between",
    },
    createNewButton: {
      border: "1px",
      padding: "5px",
      borderRadius: "5px",
      marginTop: "10px",
    },
    peerAddressInput: {
      width: "100%",
      padding: "10px",
      boxSizing: "border-box",
      border: "0px solid #ccc",
    },
  };

  useEffect(() => {
    let isMounted = true;
    let stream;
    const fetchAndStreamConversations = async () => {
      setLoading(true);
      const allConversations = await client.conversations.list();

      const sortedConversations = allConversations.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
      );
      if (isMounted) {
        setConversations(sortedConversations);
      }
      setLoading(false);

      const conv2 = await client.conversations.newConversation(
        "0xa64af7F78DE39A238Ecd4ffF7D6D410DBACe2dF0",
      );
      console.log("conv2 messages", await conv2.messages());

      stream = await client.conversations.stream();
      for await (const conversation of stream) {
        console.log(
          `New conversation started with ${conversation.peerAddress}`,
        );
        if (isMounted) {
          setConversations((prevConversations) => {
            const newConversations = [...prevConversations, conversation];
            return newConversations.sort(
              (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
            );
          });
        }
        break;
      }
    };

    fetchAndStreamConversations();

    return () => {
      isMounted = false;
      if (stream) {
        stream.return();
      }
    };
  }, []);
  const filteredConversations = conversations.filter(
    (conversation) =>
      conversation?.peerAddress
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) &&
      conversation?.peerAddress !== client.address,
  );
  const selectConversation = async (conversation) => {
    setSelectedConversation(conversation);
  };

  const getRelativeTimeLabel = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();

    const diff = now.getTime() - date.getTime();
    const diffSeconds = Math.floor(diff / 1000);
    const diffMinutes = Math.floor(diff / 1000 / 60);
    const diffHours = Math.floor(diff / 1000 / 60 / 60);
    const diffDays = Math.floor(diff / 1000 / 60 / 60 / 24);
    const diffWeeks = Math.floor(diff / 1000 / 60 / 60 / 24 / 7);

    if (diffSeconds < 60) {
      return "now";
    } else if (diffMinutes < 60) {
      return `${diffMinutes} minute${diffMinutes > 1 ? "s" : ""} ago`;
    } else if (diffHours < 24) {
      return `${diffHours} hour${diffHours > 1 ? "s" : ""} ago`;
    } else if (diffDays < 7) {
      return `${diffDays} day${diffDays > 1 ? "s" : ""} ago`;
    } else {
      return `${diffWeeks} week${diffWeeks > 1 ? "s" : ""} ago`;
    }
  };
  const isValidEthereumAddress = (address) => {
    return /^0x[a-fA-F0-9]{40}$/.test(address);
  };

  const handleSearchChange = async (e) => {
    setSearchTerm(e.target.value);
    setMessage("Searching...");
    const addressInput = e.target.value;
    const isEthDomain = /\.eth$/.test(addressInput);
    console.log(isEthDomain, addressInput);
    if (!isEthDomain) {
      return;
    }
    setLoadingResolve(true);
    try {
      const provider = new ethers.providers.CloudflareProvider();
      const resolvedAddress = await provider.resolveName(addressInput);

      if (resolvedAddress && isValidEthereumAddress(resolvedAddress)) {
        processEthereumAddress(resolvedAddress);
        setSearchTerm(resolvedAddress); // <-- Add this line
      } else {
        setMessage("Invalid Ethereum address");
        setPeerAddress(null);
        setCanMessage(false);
      }
    } catch (error) {
      console.log(error);
      setMessage("Error resolving address");
    } finally {
      setLoadingResolve(false);
    }
  };

  const processEthereumAddress = async (address) => {
    setPeerAddress(address);
    if (address === client.address) {
      setMessage("No self messaging allowed");
      setCanMessage(false);
    } else {
      const canMessageStatus = await client?.canMessage(address);
      if (canMessageStatus) {
        setPeerAddress(address);
        setCanMessage(true);
        setMessage("Address is on the network ✅");
      } else {
        setCanMessage(false);
        setMessage("Address is not on the network ❌");
      }
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div style={styles.conversations}>
      {!selectedConversation && (
        <ul style={styles.conversationList}>
          <input
            type="text"
            placeholder="Enter a 0x wallet, ENS, or UNS address"
            value={searchTerm}
            onChange={handleSearchChange}
            style={styles.peerAddressInput}
          />
          {loadingResolve && searchTerm && <small>Resolving address...</small>}
          {filteredConversations.length > 0 ? (
            filteredConversations.map((conversation, index) => (
              <li
                key={index}
                style={styles.conversationListItem}
                onClick={() => {
                  selectConversation(conversation);
                }}>
                <div style={styles.conversationDetails}>
                  <span style={styles.conversationName}>
                    {conversation.peerAddress.substring(0, 6) +
                      "..." +
                      conversation.peerAddress.substring(
                        conversation.peerAddress.length - 4,
                      )}
                  </span>
                  <span style={styles.messagePreview}>...</span>
                </div>
                <div style={styles.conversationTimestamp}>
                  {getRelativeTimeLabel(conversation.createdAt)}
                </div>
              </li>
            ))
          ) : (
            <>
              {message && <small>{message}</small>}
              {peerAddress && canMessage && (
                <button
                  style={styles.createNewButton}
                  onClick={() => {
                    setSelectedConversation({ messages: [] });
                  }}>
                  Create new conversation
                </button>
              )}
            </>
          )}
        </ul>
      )}
      {selectedConversation && (
        <MessageContainer
          client={client}
          conversation={selectedConversation}
          searchTerm={searchTerm}
          selectConversation={selectConversation}
        />
      )}
    </div>
  );
};

export const MessageContainer = ({
  conversation,
  client,
  searchTerm,
  selectConversation,
}) => {
  const isFirstLoad = useRef(true);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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
      paddingLeft: "10px",
      paddingRight: "10px",
      margin: "0px",
      alignItems: "flex-start",
      flexGrow: 1,
      display: "flex",
      flexDirection: "column-reverse",
      overflowY: "auto",
    },
  };

  const updateMessages = (prevMessages, newMessage) => {
    const doesMessageExist = prevMessages.some(
      (existingMessage) => existingMessage.id === newMessage.id,
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

  const startMessageStream = async () => {
    let stream = await conversation.streamMessages();
    for await (const message of stream) {
      console.log("Received new message", message);
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
            {messages
              .slice()
              .reverse()
              .map((message) => {
                return (
                  <MessageItem
                    key={message.id}
                    message={message}
                    senderAddress={message.senderAddress}
                    client={client}
                  />
                );
              })}
          </ul>
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

export const MessageInput = ({ onSendMessage, replyingToMessage }) => {
  const [newMessage, setNewMessage] = useState("");
  const styles = {
    newMessageContainer: {
      display: "flex",
      alignItems: "center",
      paddingLeft: "10px",
      paddingRight: "10px",
      flexWrap: "wrap",
    },
    messageInputField: {
      flexGrow: 1,
      padding: "5px",
      border: "1px solid #ccc",
      borderRadius: "5px",
    },
    sendButton: {
      padding: "5px 10px",
      marginLeft: "5px",
      border: "1px solid #ccc",
      cursor: "pointer",
      borderRadius: "5px",
      display: "flex",
      alignItems: "center",
      textAlign: "center",
      textDecoration: "none",
      ":hover": {
        textDecoration: "underline",
      },
    },
  };
  const handleInputChange = (event) => {
    if (event.key === "Enter") {
      onSendMessage(newMessage);
      setNewMessage("");
    } else {
      setNewMessage(event.target.value);
    }
  };

  return (
    <div style={styles.newMessageContainer}>
      <input
        type="text"
        value={newMessage}
        onKeyPress={handleInputChange}
        onChange={handleInputChange}
        placeholder="Type your message..."
        style={styles.messageInputField}
      />
      <button
        onClick={() => {
          onSendMessage(newMessage);
          setNewMessage("");
        }}
        style={styles.sendButton}>
        Send
      </button>
    </div>
  );
};

export const MessageItem = ({ message, senderAddress, client }) => {
  const renderMessage = (message) => {
    try {
      if (message?.content.length > 0) {
        return <div style={styles.renderedMessage}>{message?.content}</div>;
      }
    } catch {
      return message?.fallbackContent ? (
        message?.fallbackContent
      ) : message?.contentFallback ? (
        message?.contentFallback
      ) : (
        <div style={styles.renderedMessage}>{message?.content}</div>
      );
    }
  };

  const isSender = senderAddress === client?.address;

  const MessageComponent = isSender ? "li" : "li";

  return (
    <MessageComponent
      style={isSender ? styles.senderMessage : styles.receiverMessage}
      key={message.id}>
      <div style={styles.messageContent}>
        {renderMessage(message)}
        <div style={styles.footer}>
          <span style={styles.timeStamp}>
            {`${new Date(message.sent).getHours()}:${String(
              new Date(message.sent).getMinutes(),
            ).padStart(2, "0")}`}
          </span>
        </div>
      </div>
    </MessageComponent>
  );
};

const styles = {
  messageContent: {
    backgroundColor: "lightblue",
    padding: "5px 10px",
    alignSelf: "flex-start",
    textAlign: "left",
    display: "inline-block",
    margin: "5px",
    borderRadius: "5px",
    maxWidth: "80%",
    wordBreak: "break-word",
    cursor: "pointer",
    listStyle: "none",
  },
  renderedMessage: {
    fontSize: "12px",
    wordBreak: "break-word",
    padding: "0px",
  },
  senderMessage: {
    alignSelf: "flex-start",
    textAlign: "left",
    listStyle: "none",
    width: "100%",
  },
  receiverMessage: {
    alignSelf: "flex-end",
    listStyle: "none",
    textAlign: "right",
    width: "100%",
  },
  footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  timeStamp: {
    fontSize: "8px",
    color: "grey",
  },
};
```

</TabItem>
</Tabs>

Import the component into your project

```jsx
import { Inbox } from "./Inbox";
```

#### Wallet Signer

Please note that all widgets in this library that require a wallet signer only accept an instance of the `ethers.js` signer. Other types of signers are not supported at this time.

The signer is optional. If the signer is not detected, the widgets have a built-in mechanism to establish a connection.

For example, when using the `Subscribe` or `Inbox` widgets, you should provide an `ethers.js` signer instance like so:

```jsx
<Subscribe
  // Other props
  wallet={signer}
/>
```

```jsx
<Inbox
  // Other props
  wallet={signer}
/>
```

Ensure that you have properly initialized the `ethers.js` signer instance before passing it to the widget.
