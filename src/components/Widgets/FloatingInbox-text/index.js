import React, { useState, useEffect } from "react";
import { Client } from "@xmtp/xmtp-js";
import { ethers } from "ethers";
import { ConversationContainer } from "./ConversationContainer";

export function FloatingInbox({
  wallet,
  env,
  isPWA = false,
  onLogout,
  isContained = false,
  isConsent = false,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOnNetwork, setIsOnNetwork] = useState(false);
  const [client, setClient] = useState();
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const initialIsOpen =
      isPWA ||
      isContained ||
      localStorage.getItem("isWidgetOpen") === "true" ||
      false;
    const initialIsOnNetwork =
      localStorage.getItem("isOnNetwork") === "true" || false;
    const initialIsConnected =
      (localStorage.getItem("isConnected") && wallet === "true") || false;

    setIsOpen(initialIsOpen);
    setIsOnNetwork(initialIsOnNetwork);
    setIsConnected(initialIsConnected);
  }, []);

  const [selectedConversation, setSelectedConversation] = useState(null);
  const [signer, setSigner] = useState();

  const styles = {
    FloatingLogo: {
      position: "fixed",
      bottom: "20px",
      right: "20px",
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      backgroundColor: "white",
      display: "flex",
      alignItems: "center",
      border: "1px solid #ccc",
      justifyContent: "center",
      cursor: "pointer",
      transition: "transform 0.3s ease",
      padding: "5px",
    },
    uContainer: {
      position: isContained ? "relative" : isPWA ? "relative" : "fixed",
      bottom: isContained ? "0px" : isPWA ? "0px" : "70px",
      right: isContained ? "0px" : isPWA ? "0px" : "20px",
      width: isContained ? "100%" : isPWA ? "100%" : "300px",
      height: isContained ? "100%" : isPWA ? "100vh" : "400px",
      border: isContained ? "0px" : isPWA ? "0px" : "1px solid #ccc",
      backgroundColor: "#f9f9f9",
      borderRadius: isContained ? "0px" : isPWA ? "0px" : "10px",
      zIndex: "1000",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
    },
    logoutBtn: {
      position: "absolute",
      top: "10px",
      textDecoration: "none",
      color: "#000",
      left: "5px",
      background: "transparent",
      border: "none",
      fontSize: isPWA == true ? "12px" : "10px",
      cursor: "pointer",
    },
    widgetHeader: {
      padding: "2px",
    },
    label: {
      fontSize: "10px",
      textAlign: "center",
      marginTop: "5px",
      cursor: "pointer",
      display: "block",
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
      fontSize: isPWA == true ? "20px" : "14px", // Increased font size
    },
    backButton: {
      border: "0px",
      background: "transparent",
      cursor: "pointer",
      fontSize: isPWA == true ? "20px" : "14px", // Increased font size
    },
    widgetContent: {
      flexGrow: 1,
      overflowY: "auto",
    },
    xmtpContainer: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
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
      padding: isPWA == true ? "20px" : "10px",
      borderRadius: "5px",
      fontSize: isPWA == true ? "20px" : "14px",
    },
  };

  useEffect(() => {
    if (wallet) {
      setSigner(wallet);
      setIsConnected(true);
    }
    if (client && !isOnNetwork) {
      setIsOnNetwork(true);
    }
    if (signer && isOnNetwork && isConnected) {
      initXmtpWithKeys();
    }
  }, [wallet, isOnNetwork, isConnected]);

  useEffect(() => {
    localStorage.setItem("isOnNetwork", isOnNetwork.toString());
    localStorage.setItem("isWidgetOpen", isOpen.toString());
    localStorage.setItem("isConnected", isConnected.toString());
  }, [isOpen, isConnected, isOnNetwork]);

  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        await window.ethereum.enable();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        setSigner(signer);
        console.log("Your address", await getAddress(signer));
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
      if (signer && typeof signer.getAddress === "function") {
        return await signer.getAddress();
      }
      if (signer && typeof signer.getAddresses === "function") {
        //viem
        const [address] = await signer.getAddresses();
        return address;
      }
      return null;
    } catch (e) {
      console.log(e);
    }
  };
  const [isWalletCreated, setIsWalletCreated] = useState(false);

  const createNewWallet = async () => {
    const newWallet = ethers.Wallet.createRandom();
    console.log("Your address", newWallet.address);
    setSigner(newWallet);
    setIsConnected(true);
    setIsWalletCreated(true); // Set isWalletCreated to true when a new wallet is created
  };

  const openWidget = () => {
    setIsOpen(true);
  };

  const closeWidget = () => {
    setIsOpen(false);
  };

  if (typeof window !== "undefined") {
    window.FloatingInbox = {
      open: openWidget,
      close: closeWidget,
    };
  }
  const handleLogout = async () => {
    setIsConnected(false);
    const address = await getAddress(signer);
    wipeKeys(address);
    console.log("wipe", address);
    setSigner(null);
    setIsOnNetwork(false);
    setClient(null);
    setSelectedConversation(null);
    localStorage.removeItem("isOnNetwork");
    localStorage.removeItem("isConnected");
    if (typeof onLogout === "function") {
      onLogout();
    }
  };

  const initXmtpWithKeys = async function () {
    if (!signer) {
      handleLogout();
      return;
    }
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
      useSnap: true,
      //Cosent enabled by default
    });
    setClient(xmtp);
    setIsOnNetwork(!!xmtp.address);
    if (isConsent) {
      //Refresh consent
      await xmtp.contacts.refreshConsentList();
    }
  };

  return (
    <>
      {!isPWA && !isContained && (
        <div
          onClick={isOpen ? closeWidget : openWidget}
          className={
            "FloatingInbox " +
            (isOpen ? "spin-clockwise" : "spin-counter-clockwise")
          }
          style={styles.FloatingLogo}
        >
          💬
        </div>
      )}
      {isOpen && (
        <div
          style={styles.uContainer}
          className={" " + (isOnNetwork ? "expanded" : "")}
        >
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
                    }}
                  >
                    ←
                  </button>
                )}
                <h4 style={styles.conversationHeaderH4}>Conversations</h4>
              </div>
            </div>
          )}
          {isConnected}
          <div style={styles.widgetContent}>
            {!isConnected && (
              <div style={styles.xmtpContainer}>
                <button style={styles.btnXmtp} onClick={connectWallet}>
                  Connect Wallet
                </button>
                <div style={styles.label} onClick={createNewWallet}>
                  or create new one
                </div>
              </div>
            )}
            {isConnected && !isOnNetwork && (
              <div style={styles.xmtpContainer}>
                <button style={styles.btnXmtp} onClick={initXmtpWithKeys}>
                  Connect to XMTP
                </button>
                {isWalletCreated && (
                  <button style={styles.label}>
                    Your addess: {signer.address}
                  </button>
                )}
              </div>
            )}
            {isConnected && isOnNetwork && client && (
              <ConversationContainer
                isPWA={isPWA}
                client={client}
                isConsent={isConsent}
                isContained={isContained}
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
    Buffer.from(keys).toString(ENCODING)
  );
};

export const wipeKeys = (walletAddress) => {
  localStorage.removeItem(buildLocalStorageKey(walletAddress));
};
