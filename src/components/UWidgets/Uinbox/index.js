import React, { useState, useRef, useEffect } from "react";
import { Client } from "@xmtp/react-sdk";
import { ethers } from "ethers";
import styled, { keyframes } from "styled-components";
import axios from "axios";

export function UInbox({ wallet, env, relative = false }) {
  const initialIsOpen =
    localStorage.getItem("isWidgetOpen") === "true" || false;
  const initialIsOnNetwork =
    localStorage.getItem("isOnNetwork") === "true" || false;
  const initialIsConnected =
    (localStorage.getItem("isConnected") && wallet === "true") || false;

  const [isOpen, setIsOpen] = useState(initialIsOpen);
  const [isOnNetwork, setIsOnNetwork] = useState(initialIsOnNetwork);
  const [isConnected, setIsConnected] = useState(initialIsConnected);
  const [xmtpClient, setXmtpClient] = useState();
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [signer, setSigner] = useState();

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
    // Get address from the signer
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
        // we don't need to publish the contact here since it
        // will happen when we create the client later
        skipContactPublishing: true,
        // we can skip persistence on the keystore for this short-lived
        // instance
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
  // Define uinbox object for global access
  window.uinbox = {
    open: openWidget,
    close: closeWidget,
  };
  // Logout function to reset all states and clear local storage
  const handleLogout = async () => {
    setIsConnected(false);
    setIsOnNetwork(false);

    const address = await getAddress(signer);
    wipeKeys(address);
    setSigner(null);
    setSelectedConversation(null);
    localStorage.removeItem("isOnNetwork");
    localStorage.removeItem("isConnected");
    // Optionally, you can also reset other states and clear other local storage items
  };
  return (
    <>
      <FloatingLogo
        relative={relative}
        onClick={isOpen ? closeWidget : openWidget}
        className={isOpen ? "spin-clockwise" : "spin-counter-clockwise"}>
        <SVGLogo />
      </FloatingLogo>
      {isOpen && (
        <UInboxContainer className={isOnNetwork ? "expanded" : ""}>
          {isConnected && <LogoutBtn onClick={handleLogout}>Logout</LogoutBtn>}
          {isConnected && isOnNetwork && (
            <WidgetHeader>
              <ConversationHeader>
                {isOnNetwork && selectedConversation && (
                  <BackButton
                    onClick={() => {
                      setSelectedConversation(null);
                    }}>
                    ←
                  </BackButton>
                )}
                <h4>Conversations</h4>
              </ConversationHeader>
            </WidgetHeader>
          )}
          <WidgetContent>
            {!isConnected && (
              <XmtpContainer>
                <BtnXmtp onClick={connectWallet}>Connect Wallet</BtnXmtp>
              </XmtpContainer>
            )}
            {isConnected && !isOnNetwork && (
              <XmtpContainer>
                <BtnXmtp onClick={initXmtpWithKeys}>Connect to XMTP</BtnXmtp>
              </XmtpContainer>
            )}
            {isConnected && isOnNetwork && xmtpClient && (
              <ConversationContainer
                client={xmtpClient}
                selectedConversation={selectedConversation}
                setSelectedConversation={setSelectedConversation}
              />
            )}
          </WidgetContent>
          <WidgetFooter>
            <Powered>
              Powered by <PoweredLogo fill="#fc4f37" width="12px" /> XMTP{" "}
            </Powered>
          </WidgetFooter>
        </UInboxContainer>
      )}
    </>
  );
}

const spinCounterClockwise = keyframes`
  0% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0deg);
}`;

const spinClockwise = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
}`;

const FloatingLogo = styled.div`
  position: ${(props) => (props.relative ? "relative" : "fixed")};
  bottom: ${(props) => (props.relative ? "0px" : "20px")};
  right: ${(props) => (props.relative ? "0px" : "20px")};

  width: 30px;
  height: 30px;
  z-index: 1000;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  justify-content: center;
  box-shadow: 0 2px 10px #ccc;
  cursor: pointer;
  transition: transform 0.3s ease;
  padding: 5px;

  :active {
    transform: scale(0.9);
  }

  :active {
    transform: scale(0.95);
  }

  :hover {
    transform: scale(1.05); /* This makes it grow a little (5%) when hovered */
  }

  :hover path {
    transform: rotate(360deg); /* 360-degree spin */
    fill: #ef4444; /* new color (red in this example) */
  }

  &.spin-clockwise path {
    animation: ${spinClockwise} 0.5s linear;
    transform-origin: center;
  }

  &.spin-counter-clockwise path {
    animation: ${spinCounterClockwise} 0.5s linear;
    transform-origin: center;
  }
`;

const UInboxContainer = styled.div`
  position: fixed;
  bottom: 70px;
  right: 20px;
  width: 300px;
  height: 400px;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1000 !important;
  display: flex;
  flex-direction: column;

  &.expanded {
    height: 400px;
  }
`;
const WidgetHeader = styled.div`
  padding: 5px;
  h4 {
    margin: 5px;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const WidgetContent = styled.div`
  flex-grow: 1;
  z-index: 1000;
  overflow-y: auto;
`;

const BtnXmtp = styled.button`
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid grey;
  padding: 10px;
  border-radius: 5px;
`;

const WidgetFooter = styled.div`
  padding: 5px;
  font-size: 12px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const XmtpContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  z-index: 1000;
`;

const LogoutBtn = styled.button`
  position: absolute;
  top: 10px;
  left: 5px;
  background: transparent;
  border: none;
  font-size: 10px;
  cursor: pointer;
`;

const ConversationHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  width: auto;
  margin: 0 auto;
`;

const BackButton = styled.button`
  border: 0px;
  background: transparent;
  cursor: pointer;
`;
function SVGLogo({ width, fill }) {
  return (
    <svg
      viewBox="0 0 462 462"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width }}>
      <path
        fill={fill}
        d="M1 231C1 103.422 104.422 0 232 0C359.495 0 458 101.5 461 230C461 271 447 305.5 412 338C382.424 365.464 332 369.5 295.003 349C268.597 333.767 248.246 301.326 231 277.5L199 326.5H130L195 229.997L132 135H203L231.5 184L259.5 135H331L266 230C266 230 297 277.5 314 296C331 314.5 362 315 382 295C403.989 273.011 408.912 255.502 409 230C409.343 131.294 330.941 52 232 52C133.141 52 53 132.141 53 231C53 329.859 133.141 410 232 410C245.674 410 258.781 408.851 271.5 406L283.5 456.5C265.401 460.558 249.778 462 232 462C104.422 462 1 358.578 1 231Z"
      />
    </svg>
  );
}
const Powered = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between; // Add this line
  width: 40%;
`;

const PoweredLogo = styled(SVGLogo)`
  width: ${(props) => props.width || "50px"};
  fill: ${(props) => props.fillColor || "#000"};
`;

/* Conversation Container*/

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
  const isValidEthereumAddress = (address) => {
    return /^0x[a-fA-F0-9]{40}$/.test(address);
  };

  useEffect(() => {
    let isMounted = true; // This flag is used to prevent state updates on an unmounted component
    let stream; // Define stream here

    const fetchAndStreamConversations = async () => {
      // Fetch the conversations
      setLoading(true);
      const allConversations = await client.conversations.list();

      const sortedConversations = allConversations.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
      );
      if (isMounted) {
        setConversations(sortedConversations);
      }
      setLoading(false);

      // Start the stream
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
      isMounted = false; // Prevent state updates after the component has unmounted
      if (stream) {
        stream.return(); // End the stream when the component unmounts
      }
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleanup runs on unmount

  const filteredConversations = conversations.filter(
    (conversation) =>
      conversation?.peerAddress
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) &&
      conversation?.peerAddress !== client.address,
  );
  const selectConversation = async (conversation) => {
    console.log(conversation);
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
  const handleSearchChange = async (e) => {
    setSearchTerm(e.target.value);
    const addressInput = e.target.value;

    // Check if it's already a valid Ethereum address first
    if (isValidEthereumAddress(addressInput)) {
      processEthereumAddress(addressInput);
      return;
    }
    setLoadingResolve(true); // Set loading to true here

    try {
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `https://api.everyname.xyz/forward?domain=${addressInput}`,
        headers: {
          Accept: "application/json",
          "api-key": process.env.REACT_APP_EVERYNAME_KEY,
        },
      };

      const response = await axios.request(config);
      const resolvedAddress = response.data.address; // Assuming the API returns the address with key "address"

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
      setLoadingResolve(false); // Set loading to false whether it's successful or there's an error
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
    <Conversations>
      {!selectedConversation && (
        <ConversationList>
          <PeerAddressInput
            type="text"
            placeholder="Enter a 0x wallet, ENS, or UNS address"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          {loadingResolve && searchTerm && <small>Resolving address...</small>}{" "}
          {filteredConversations.length > 0 ? (
            filteredConversations.map((conversation, index) => (
              <ConversationListItem
                key={index}
                onClick={() => {
                  selectConversation(conversation);
                }}>
                <ConversationDetails>
                  <ConversationName>
                    {conversation.peerAddress.substring(0, 6) +
                      "..." +
                      conversation.peerAddress.substring(
                        conversation.peerAddress.length - 4,
                      )}
                  </ConversationName>
                  <MessagePreview>...</MessagePreview>
                </ConversationDetails>
                <ConversationTimestamp>
                  {getRelativeTimeLabel(conversation.createdAt)}
                </ConversationTimestamp>
              </ConversationListItem>
            ))
          ) : (
            <>
              {message && <small>{message}</small>}
              {peerAddress && canMessage && (
                <CreateNewButton
                  onClick={() => {
                    setSelectedConversation({ messages: [] });
                  }}>
                  Create new conversation
                </CreateNewButton>
              )}
            </>
          )}
        </ConversationList>
      )}
      {selectedConversation && (
        <MessageContainer
          client={client}
          conversation={selectedConversation}
          searchTerm={searchTerm}
          selectConversation={selectConversation}
        />
      )}
    </Conversations>
  );
};

const Conversations = styled.div`
  height: 100% !important;
`;

const ConversationList = styled.ul`
  overflow-y: auto;
  padding: 0px;
  margin: 0;
  list-style: none;
  overflow-y: scroll;
`;

const ConversationListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e0e0e0;
  cursor: pointer;
  background-color: #f0f0f0;
  padding: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: lightblue;
  }
`;

const ConversationDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 75%;
  margin-left: 10px;
  overflow: hidden;
`;

const ConversationName = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

const MessagePreview = styled.span`
  font-size: 14px;
  color: #666;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ConversationTimestamp = styled.div`
  font-size: 12px;
  color: #999;
  width: 25%;
  text-align: right;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;

const CreateNewButton = styled.button`
  border: 1px;
  padding: 5px;
  border-radius: 5px;
  margin-top: 10px;
`;

const PeerAddressInput = styled.input`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border: 0px solid #ccc;
`;
/*MessageContainer*/
export const MessageContainer = ({
  conversation,
  client,
  searchTerm,
  selectConversation,
}) => {
  const messagesEndRef = useRef(null);
  const isFirstLoad = useRef(true);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const updateMessages = (prevMessages, newMessage) => {
    // Check if the new message already exists
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
    return () => {
      // Cleanup code if needed
    };
  }, [conversation]);

  const handleSendMessage = async (newMessage) => {
    if (!newMessage.trim()) {
      alert("empty message");
      return;
    }
    if (conversation && conversation.peerAddress) {
      await conversation.send(newMessage);
    } else if (conversation) {
      console.log(searchTerm);
      const conv = await client.conversations.newConversation(searchTerm);
      selectConversation(conv);
      await conv.send(newMessage);
    }
  };

  const scrollToLatestMessage = () => {
    const element = messagesEndRef.current;
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(scrollToLatestMessage, [messages]);

  return (
    <MessagesContainer>
      {isLoading ? (
        <small className="loading">Loading messages...</small>
      ) : (
        <>
          <MessagesList>
            {messages.map((message) => {
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
          </MessagesList>
          <MessageInput
            onSendMessage={(msg) => {
              handleSendMessage(msg);
            }}
          />
        </>
      )}
    </MessagesContainer>
  );
};

const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const MessagesList = styled.ul`
  padding-left: 10px;
  padding-right: 10px;
  margin: 0px;
  align-items: flex-start;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

/*MessageInput*/

const NewMessageContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  flex-wrap: wrap; // Add this line
`;

const MessageInputField = styled.input`
  flex-grow: 1;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SendButton = styled.button`
  padding: 5px 10px;
  margin-left: 5px;
  border: 1px solid #ccc;
  cursor: pointer;
  border-radius: 5px;
  display: flex;
  align-items: center;
  text-align: center;

  &:hover {
    text-decoration: underline;
  }
`;

export const MessageInput = ({ onSendMessage, replyingToMessage }) => {
  const [newMessage, setNewMessage] = useState("");

  const handleDragOver = (event) => {
    event.preventDefault();
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
    <NewMessageContainer>
      <MessageInputField
        type="text"
        value={newMessage}
        onKeyPress={handleInputChange}
        onChange={handleInputChange}
        placeholder="Type your message..."
      />
      <SendButton
        onClick={() => {
          onSendMessage(newMessage);
          setNewMessage("");
        }}>
        Send
      </SendButton>
    </NewMessageContainer>
  );
};

/*MessageItem*/
const MessageItem = ({ message, senderAddress, client }) => {
  const renderMessage = (message) => {
    try {
      if (message?.content.length > 0) {
        return <RenderedMessage>{message?.content}</RenderedMessage>;
      }
    } catch {
      return message?.fallbackContent
        ? message?.fallbackContent
        : message?.contentFallback
        ? message?.contentFallback
        : "No fallback";
    }
  };

  const isSender = senderAddress === client?.address;

  const MessageComponent = isSender ? SenderMessage : ReceiverMessage;

  return (
    <MessageComponent key={message.id}>
      <MessageContent>
        {renderMessage(message)}
        <Footer>
          <TimeStamp>
            {`${new Date(message.sent).getHours()}:${String(
              new Date(message.sent).getMinutes(),
            ).padStart(2, "0")}`}
          </TimeStamp>
        </Footer>
      </MessageContent>
    </MessageComponent>
  );
};
export default MessageItem;

const RenderedMessage = styled.div`
  font-size: 12px;
  word-break: break-word;
  padding: 0px;
`;
const MessageContent = styled.div`
  background-color: lightblue;
  padding: 5px 10px;

  align-self: flex-start;
  text-align: left;
  display: inline-block;
  margin: 5px;
  padding: 5px 10px;
  border-radius: 5px;
  max-width: 80%;
  word-break: break-word;
  cursor: pointer;
  list-style: none;
`;

const SenderMessage = styled.li`
  align-self: flex-start;
  text-align: right;
  list-style: none;
`;

const ReceiverMessage = styled.li`
  align-self: flex-end;
  list-style: none;
  text-align: right;
`;

// Styled-components
const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const TimeStamp = styled.span`
  font-size: 8px;
  color: grey;
`;

/* Helpers*/
const ENCODING = "binary";

export const getEnv = () => {
  // "dev" | "production" | "local"
  return process.env.REACT_APP_XMTP_ENV;
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

export const deloadFile = async (attachment, client, RemoteAttachmentCodec) => {
  return RemoteAttachmentCodec.load(attachment, client)
    .then((decryptedAttachment) => {
      const blob = new Blob([decryptedAttachment.data], {
        type: decryptedAttachment.mimeType,
      });
      return URL.createObjectURL(blob);
    })
    .catch((error) => {
      console.error("Failed to load and decrypt remote attachment:", error);
    });
};

export const loadFile = async (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.result instanceof ArrayBuffer) {
        resolve(new Uint8Array(reader.result));
      } else {
        reject(new Error("Not an ArrayBuffer"));
      }
    };
    reader.readAsArrayBuffer(file);
  });
};
