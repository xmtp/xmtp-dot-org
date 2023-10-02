import React, { useState, useRef, useEffect } from "react";
import { Client } from "@xmtp/xmtp-js";
import { ethers } from "ethers";

export function UInbox({ wallet, env }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOnNetwork, setIsOnNetwork] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [xmtpClient, setXmtpClient] = useState();
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [signer, setSigner] = useState();

  const styles = {
    floatingLogo: {
      position: "fixed",
      bottom: "20px",
      right: "20px",
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
    },
    uButton: {
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
    },
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
    window.uinbox = {
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
        style={styles.floatingLogo}
        onClick={isOpen ? closeWidget : openWidget}
        className={
          "uinbox floating-logo " +
          (isOpen ? "spin-clockwise" : "spin-counter-clockwise")
        }>
        <SVGLogo parentClass={"uinbox"} />
      </div>
      {isOpen && (
        <div
          style={styles.uButton}
          className={"uinbox" + (isOnNetwork ? "expanded" : "")}>
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
          <div style={styles.widgetFooter}>
            <span className="powered" style={styles.powered}>
              Powered by <SVGLogo width="12px" parentClass={"powered"} /> XMTP
            </span>
          </div>
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
    logo: `
    .${uniqueClassLogo} {
      transition: transform 0.5s ease, fill 0.5s ease;
    }

    .spin-clockwise .${uniqueClassLogo} {
      animation: spinClockwise 0.5s linear;
    }

    .spin-counter-clockwise .${uniqueClassLogo} {
      animation: spinCounterClockwise 0.5s linear;
    }
    .spin-clockwise .${uniqueClassLogo} path{
      fill: ${hoverColor};  // Add this line to change color while spinning
    }

    @keyframes spinClockwise {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    @keyframes spinCounterClockwise {
      0% { transform: rotate(360deg); }
      100% { transform: rotate(0deg); }
    }

    .powered .${uniqueClassLogo} {
      width: 12px !important;
      margin-left:2px;
      margin-right:2px;
      margin-top:1px;
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
