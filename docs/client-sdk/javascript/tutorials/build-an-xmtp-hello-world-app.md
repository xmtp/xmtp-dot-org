---
sidebar_label: Build an XMTP hello world app
sidebar_position: 3
---

# Build an XMTP "hello world" app

XMTP (Extensible Message Transport Protocol) is an open protocol and network for secure and private web3 messaging. For example, you can build with XMTP to send messages between blockchain accounts, including chat/DMs, alerts, announcements, and more.

Use this tutorial to build an XMTP "hello world" messaging app based on resources available in the [vehidtr/xmtp-chat-tutorial repo](https://github.com/vehidtr/xmtp-chat-tutorial). Building this app can help you learn some of the fundamental concepts behind building with XMTP.

As its name implies, the XMTP "hello world" app is intentionally barebones. Here's what the app enables you to do:

1. Connect your wallet app to the "hello world" app:

   ![alt_text](img/connect-wallet.png "image_tooltip")

2. Connect your blockchain account to the XMTP network using your wallet app:

   ![alt_text](img/connect-to-xmtp.png "image_tooltip")

3. Send a preconfigured "gm" message to your connected blockchain account address.

   ![alt_text](img/send-gm.png "image_tooltip")

The app includes only the code required to accomplish these steps, and nothing more. This helps keep the code bite-sized so that developers of all skill levels can ease into learning the basics of building a messaging app with XMTP.


## Prerequisites

This tutorial requires that you have the following prerequisites in place:

* [Node](https://nodejs.org/en/download/) (LTS version) and npm to install app requirements and dependencies

* An Ethereum blockchain account accessible in a wallet app browser extension.  

  For example, to learn how to install the [MetaMask](https://metamask.io/) cryptocurrency wallet and use it to create an Ethereum account you can use to send and receive XMTP messages, see [How to create a MetaMask Wallet](https://myterablock.medium.com/how-to-create-or-import-a-metamask-wallet-a551fc2f5a6b).

  Completing this tutorial doesn't cost you any Ether.

* A code editor of your choice that you'll use to build the app.


## Step 1. Create a vanilla React app

In this step, you'll create a React app using the Create React App tool to easily set up your developer environment and provide the foundation of your "hello world" app.

The command you run generates all of the folders and files you need to create a vanilla React application and run it in your browser.

All subsequent steps in this tutorial add code to this vanilla React app to build each feature of the "hello world" app.

**To create and run a vanilla React app:**

1. To create the React app, run:

   ```bash
   npx create-react-app my-app --scripts-version 4.0.2
   ```

   This creates the React app in a `my-app` directory.

2. To run the vanilla React app, in the root of your newly created my-app directory, run:

   ```bash
	 npm start
   ```

   The app opens at `localhost:3000` in your default browser.

   ![Screenshot showing a vanilla React app running in a browser at localhost:3000. Displays the React logo and the following text: Edit src/App.js and save to reload.](img/vanilla-cra.png "image_tooltip")


## Step 2. Build a **Connect wallet** button

The XMTP hello world app needs a **Connect wallet** button to enable the user to connect a wallet app, such as MetaMask.

The XMTP hello world app uses [Web3Modal](https://web3modal.com/) and [Ethers](https://docs.ethers.io/v5/single-page/) for connecting to commonly used wallet apps.

1. Install Web3Modal. In the root directory of your React app, run:

   ```bash
   npm i web3modal
   ```

   This adds the Web3Modal dependency to your `package.json`.

2. Install Ethers. In the root directory of your React app, run:

   ```bash
   npm i ethers
   ```

   This adds the Ethers dependency to your `package.json`.

3. In the existing `src` directory, create a `contexts` folder. In the `contexts` folder, create a file named `WalletContext.js`. This code provides the Web3Modal and Ethers functionality the hello world app needs to enable a user to connect their wallet app. Copy this code and paste it into the file:

    ```js showLineNumbers
    import { createContext, useState } from "react";
    import Web3Modal from "web3modal";
    import { ethers } from "ethers";

    export const WalletContext = createContext();

    export const WalletContextProvider = ({ children }) => {
    const [walletAddress, setWalletAddress] = useState(null);
    const [signer, setSigner] = useState(null);

    const connectWallet = async () => {
     const instance = await web3Modal.connect();
     const web3Provider = new ethers.providers.Web3Provider(instance, "any");
     const newSigner = await web3Provider.getSigner();

     setSigner(newSigner);
     setWalletAddress(await newSigner.getAddress());
     instance.on("accountsChanged", () => {
       disconnectWallet();
     });

     instance.on("connect", () => {
       connectWallet();
     });

     instance.on("disconnect", () => {
       disconnectWallet();
     });
    };

    const disconnectWallet = () => {
     setWalletAddress(null);
     setSigner(null);
    };

    const providerOptions = {};

    // Redirect User to Install MetaMask if not already installed
    if (!window.ethereum || !window.ethereum.isMetaMask) {
     providerOptions["custom-metamask"] = {
       display: {},
       package: {},
       connector: async () => {
         window.open("https://metamask.io");
       },
     };
    }

    const web3Modal = new Web3Modal({
     cacheProvider: true, // optional
     providerOptions, // required
    });

    return (
     <WalletContext.Provider
       value={{
         connectWallet,
         disconnectWallet,
         walletAddress,
         signer,
       }}
     >
       {children}
     </WalletContext.Provider>
    );
    };
    ```

    <!--saul: not sure if "await" in line 14 is needed? const newSigner = await web3Provider.getSigner();-->

    <!--not sure about this comment in line 38: // Redirect User to Install MetaMask if not already installed. I think this is from the Quickstart app? This hello world app appears to work with more than MetaMask. Specifically, for me, it works with Coinbase Wallet and MetaMask. What is the purpose of this code and do we need it here? Do we need it for every supported wallet? Or should we update the hello world app to support MetaMask only?-->

    To learn more about Context in React, see [Context](https://reactjs.org/docs/context.html).

4. In the `src` directory, update the existing `App.js` file to use the `WalletContext` you just created and add the **Connect wallet** button UI element, as shown in the highlighted code. You can copy this code and paste it into the file, replacing all existing code.<!--diff: https://github.com/vehidtr/xmtp-chat-tutorial/commit/e81d4b36b87c63c94cc33801cfbb0f91970b8940-->

    ```js {1,3,6,9} showLineNumbers
    import { useContext } from 'react';
    import './App.css';
    import { WalletContext } from './contexts/WalletContext';

    function App() {
      const { connectWallet } = useContext(WalletContext);
      return (
        <div className="App">
          <button onClick={connectWallet}>Connect wallet</button>
        </div>
      );
    }

    export default App;
    ```

5. In the `src` directory, update the existing `index.js` file to import the `WalletContextProvider` you created in a previous step and wrap it around your app, as shown in the highlighted code. This enables your app to access information provided by the wallet app context. <!--information? functionality? both?--> You can copy this code and paste it into the file, replacing all existing code.<!--diff: https://github.com/vehidtr/xmtp-chat-tutorial/commit/e81d4b36b87c63c94cc33801cfbb0f91970b8940#diff-bfe9874d239014961b1ae4e89875a6155667db834a410aaaa2ebe3cf89820556-->

    ```js {7,14-16} showLineNumbers
    import React from "react";
    import ReactDOM from "react-dom/client";
    import { Buffer } from "buffer";
    import "./index.css";
    import App from "./App";
    import reportWebVitals from "./reportWebVitals";
    import { WalletContextProvider } from "./contexts/WalletContext";

    window.Buffer = Buffer;

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <React.StrictMode>
        <WalletContextProvider>
          <App />
        </WalletContextProvider>
      </React.StrictMode>
    );

    // If you want to start measuring performance in your app, pass a function
    // to log results (for example: reportWebVitals(console.log))
    // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
    reportWebVitals();
    ```

4. In the root directory of your React app, run `npm start` to start your app. The vanilla **Learn React** UI should be replaced by a **Connect wallet** button.

   ![Screenshot of the hello world app running in a browser at localhost:3000 with a Connect wallet button located at the top and center of the screen](img/connect-wallet-running.png "image_tooltip")

5. Click the **Connect wallet** button to open your wallet app browser extension and connect a blockchain account address to the app. The hello world app UI doesn't change, but in your wallet app you can see that your address is now connected to your app running at `localhost:3000`:

  ![Screenshot of the MetaMask wallet app browser extension showing an account named Amal with an Ethereum account address with the last 4 characters 80d7 connected to localhost:3000](img/connect-wallet-prompt.png "image_tooltip")


## Step 3. Build the **Connect to XMTP** button

To send and receive XMTP messages, a user must create an XMTP identity associated with their blockchain account. An app built with XMTP must give the user a way to create this identity and use it to connect to the XMTP network. Specifically, the user must:

1. Sign to create an XMTP identity the first time they use an app built with XMTP (like creating an account).

2. Sign to enable their XMTP identity the first and any subsequent time they start a new messaging session (like providing an account password).

To learn more about creating and enabling an XMTP identity, see [Sign to send and receive messages using apps built with XMTP](https://xmtp.org/docs/dev-concepts/signatures).

The XMTP hello world app enables users to provide these signatures and connect their app to the XMTP network using a **Connect to XMTP** button.

**To build the Connect to XMTP button:**

1. Install the XMTP client SDK for JavaScript. In the root directory of your React app, run:

    ```bash
    npm i --save @xmtp/xmtp-js
    ```

    The SDK provides an XMTP messaging API client that enables your app to communicate with the XMTP network. This adds the `@xmtp/xmtp-js` dependency to your `package.json`.

2. In the existing `src`/`contexts` directory, create a file named `XmtpContext.js`. This code provides the XMTP functionality the hello world app needs to create the XMTP messaging API client and use it to communicate with the XMTP network to send and retrieve messages. Copy this code and paste it into the file:<!--diff: https://github.com/vehidtr/xmtp-chat-tutorial/commit/35c8cded3d20816cd06248f2d05c62d79a82c2f3-->

    ```js showLineNumbers
    import React, { useState, createContext, useEffect, useContext } from "react";
    import { Client } from "@xmtp/xmtp-js";
    import { WalletContext } from "./WalletContext";

    export const XmtpContext = createContext();

    export const XmtpContextProvider = ({ children }) => {
      const { signer, walletAddress } = useContext(WalletContext);
      const [providerState, setProviderState] = useState({
        client: null,
        initClient: () => {},
        loadingConversations: true,
        conversations: new Map(),
        convoMessages: new Map(),
      });

      const initClient = async (wallet) => {
        if (wallet && !providerState.client) {
          try {
            const client = await Client.create(wallet, { env: "dev" });
            setProviderState({
              ...providerState,
              client,
            });
          } catch (e) {
            console.error(e);
            setProviderState({
              ...providerState,
              client: null,
            });
          }
        }
      };

      const disconnect = () => {
        setProviderState({
          ...providerState,
          client: null,
          conversations: new Map(),
          convoMessages: new Map(),
        });
      };

      useEffect(() => {
        signer ? setProviderState({ ...providerState, initClient }) : disconnect();
        // eslint-disable-next-line
      }, [signer]);

      useEffect(() => {
        if (!providerState.client) return;

        const listConversations = async () => {
          console.log("Listing conversations");
          setProviderState({ ...providerState, loadingConversations: true });
          const { client, convoMessages, conversations } = providerState;
          const convos = await client.conversations.list();
          Promise.all(
            convos.map(async (convo) => {
              if (convo.peerAddress !== walletAddress) {
                const messages = await convo.messages();
                convoMessages.set(convo.peerAddress, messages);
                conversations.set(convo.peerAddress, convo);
                setProviderState({
                  ...providerState,
                  convoMessages,
                  conversations,
                });
              }
            })
          ).then(() => {
            setProviderState({ ...providerState, loadingConversations: false });
          });
        };


        listConversations();
        // eslint-disable-next-line
      }, [providerState.client]);

      return (
        <XmtpContext.Provider value={[providerState, setProviderState]}>
          {children}
        </XmtpContext.Provider>
      );
    };
    ```

3. In the `src` directory, update the existing `App.js` file to use the `XmtpContext` you just created and add the **Connect to XMTP** button UI element, as shown in the highlighted code. You can copy this copy and paste it into the file, replacing all existing code. <!--diff: https://github.com/vehidtr/xmtp-chat-tutorial/commit/35c8cded3d20816cd06248f2d05c62d79a82c2f3-->

    ```js {4,7,12-25} showLineNumbers
    import { useContext } from "react";
    import "./App.css";
    import { WalletContext } from "./contexts/WalletContext";
    import { XmtpContext } from "./contexts/XmtpContext";

    function App() {
      const { connectWallet, walletAddress, signer } = useContext(WalletContext);
      const [providerState] = useContext(XmtpContext);


      return (
        <div className="App">
          {walletAddress ? (
            <div className="wrapper">
              {!providerState.client ? (
                <button
                  className="btn"
                  onClick={() => providerState.initClient(signer)}
                >
                  Connect to XMTP
                </button>
              ) : (
                <p>Connected: {walletAddress}</p>
              )}
            </div>
          ) : (
            <button onClick={connectWallet}>Connect wallet</button>
          )}
        </div>
      );
    }

    export default App;
    ```

4. In the `src` directory, update the existing `index.js` file to import the `XmtpContextProvider` you created in a previous step and wrap it around your app, as shown in the highlighted code. This enables your app to access information provided by the XMTP context. Note that `XmtpContextProvider` is nested in `WalletContextProvider` because it needs access to the information provided by the wallet app context. You can copy this code and paste it into the file, replacing all existing code. <!--diff: https://github.com/vehidtr/xmtp-chat-tutorial/commit/35c8cded3d20816cd06248f2d05c62d79a82c2f3#diff-bfe9874d239014961b1ae4e89875a6155667db834a410aaaa2ebe3cf89820556-->

    ```js {8,16,18} showLineNumbers
    import React from "react";
    import ReactDOM from "react-dom/client";
    import { Buffer } from "buffer";
    import "./index.css";
    import App from "./App";
    import reportWebVitals from "./reportWebVitals";
    import { WalletContextProvider } from "./contexts/WalletContext";
    import { XmtpContextProvider } from "./contexts/XmtpContext";

    window.Buffer = Buffer;

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <React.StrictMode>
        <WalletContextProvider>
          <XmtpContextProvider>
            <App />
          </XmtpContextProvider>
        </WalletContextProvider>
      </React.StrictMode>
    );

    // If you want to start measuring performance in your app, pass a function
    // to log results (for example: reportWebVitals(console.log))
    // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
    reportWebVitals();
    ```

5. In the root directory of your React app, run `npm start` to start your app. Click **Connect wallet** to connect your wallet app. The following UI appears:

   ![Screenshot of the hello world app running in a browser at localhost:3000 with a Connect to XMTP button located at the top and center of the screen](img/connect-to-xmtp-running.png)

6. Click **Connect to XMTP** to use your desired wallet app to create an XMTP identity (if you don't already have one) and enable your XMTP identity.

   ![alt_text](img/connect-to-xmtp-prompt.png)

<!--jha add screenshot of both Create Identity and Enable Identity prompts-->

7. The XMTP hello world app now shows your blockchain account address connected to the XMTP network:

   ![Screenshot of the hello world app running in a browser at localhost:3000 showing a connected Ethereum account address and a Send gm button](img/connected.png)


## Step 4. Build the **Send gm** button and display messages

Now that your XMTP identity associated with your blockchain account address is connected to the XMTP network, you can send and receive messages from other XMTP identities connected to the network.

For simplicity, the XMTP hello world app enables you to send a preconfigured "gm" message to your own already connected address. This makes it easy to see the immediate effects of sending a message.

1. In the `src` directory, update the existing `App.js` file to add a `sendMessage` constant, which sends the message **gm** to the connected wallet address. Then create the **Send gm** button UI element that when clicked uses `sendMessage` to send the **gm** message. You can see these changes in the highlighted code. You can copy this code and paste it into the file, replacing all existing code. <!--what is `sendMessage`? I called it a constant - but is there something more accurate? And does the button "use" `sendMessage` - is the wording correct?--> <!--diff: https://github.com/vehidtr/xmtp-chat-tutorial/commit/7e2ea197d9516fa93f75b5e866734cd06bf51cdc-->

    ```js {9-22,35-40} showLineNumbers
    import { useContext } from "react";
    import "./App.css";
    import { WalletContext } from "./contexts/WalletContext";
    import { XmtpContext } from "./contexts/XmtpContext";

    function App() {
      const { connectWallet, walletAddress, signer } = useContext(WalletContext);
      const [providerState] = useContext(XmtpContext);
      const { client } = providerState;

      const sendMessage = async () => {
        const message = "gm";
        if (!client || !walletAddress) {
          return;
        }
        const conversation = await client.conversations.newConversation(
          walletAddress
        );
        if (!conversation) return;
        await conversation.send(message);
      };

      return (
        <div className="App">
          {walletAddress ? (
            <div className="wrapper">
              {!providerState.client ? (
                <button
                  className="btn"
                  onClick={() => providerState.initClient(signer)}
                >
                  Connect to XMTP
                </button>
              ) : (
                <>
                  <p>Connected: {walletAddress}</p>
                  <button className="btn" onClick={sendMessage}>
                    Send gm
                  </button>
                </>
              )}
            </div>
          ) : (
            <button onClick={connectWallet}>Connect wallet</button>
          )}
        </div>
      );
    }

    export default App;
    ```

2. In the `src`/`contexts` directory, update the existing `XmtpContext.js` file to enable the app to display the list of messages your address sends to itself, as shown in the highlighted code. With XMTP, a group of messages sent between two addresses is called a conversation. You can copy this code and paste it into the file, replacing all existing code.<!--I think this is already there at this point? I think this diff is just removing the code that disables the app from displaying conversations the connected wallet address has with itself. jha verify this...https://github.com/vehidtr/xmtp-chat-tutorial/commit/454c4065b0f2b505780834b55908e2bdf0b2756d. We can probably just call out 56-75 to show how the app displays messages in the conversation?-->

    ```js showLineNumbers
    import React, { useState, createContext, useEffect, useContext } from "react";
    import { Client } from "@xmtp/xmtp-js";
    import { WalletContext } from "./WalletContext";

    export const XmtpContext = createContext();

    export const XmtpContextProvider = ({ children }) => {
      const { signer, walletAddress } = useContext(WalletContext);
      const [providerState, setProviderState] = useState({
        client: null,
        initClient: () => {},
        loadingConversations: true,
        conversations: new Map(),
        convoMessages: new Map(),
      });

      const initClient = async (wallet) => {
        if (wallet && !providerState.client) {
          try {
            const client = await Client.create(wallet, { env: "dev" });
            setProviderState({
              ...providerState,
              client,
            });
          } catch (e) {
            console.error(e);
            setProviderState({
              ...providerState,
              client: null,
            });
          }
        }
      };

      const disconnect = () => {
        setProviderState({
          ...providerState,
          client: null,
          conversations: new Map(),
          convoMessages: new Map(),
        });
      };

      useEffect(() => {
        signer ? setProviderState({ ...providerState, initClient }) : disconnect();
        // eslint-disable-next-line
      }, [signer]);

      useEffect(() => {
        if (!providerState.client) return;

        const listConversations = async () => {
          console.log("Listing conversations");
          setProviderState({ ...providerState, loadingConversations: true });
          const { client, convoMessages, conversations } = providerState;
          const convos = await client.conversations.list();
          Promise.all(
            convos.map(async (convo) => {
                const messages = await convo.messages();
                convoMessages.set(convo.peerAddress, messages);
                conversations.set(convo.peerAddress, convo);
                setProviderState({
                  ...providerState,
                  convoMessages,
                  conversations,
                });
            })
          ).then(() => {
            setProviderState({ ...providerState, loadingConversations: false });
          });
        };

        listConversations();
        // eslint-disable-next-line
      }, [providerState.client]);

      return (
        <XmtpContext.Provider value={[providerState, setProviderState]}>
          {children}
        </XmtpContext.Provider>
      );
    };
    ```

3. In the existing `src` directory, create a `hooks` folder. In the `hooks` folder, create a file named `useStreamMessages.js`. Copy this code and paste it into the file: <!--diff: https://github.com/vehidtr/xmtp-chat-tutorial/commit/cf9f028b18aa2ac825aeeb0b8877bbb6bbcbbdc5-->

    ```js showLineNumbers
    import { useContext, useEffect, useState } from "react";
    import { WalletContext } from "../contexts/WalletContext";
    import { XmtpContext } from "../contexts/XmtpContext";

    const useStreamMessages = (peerAddress) => {
      const { walletAddress } = useContext(WalletContext);
      const [providerState, setProviderState] = useContext(XmtpContext);
      const { client, convoMessages } = providerState;
      const [stream, setStream] = useState("");
      const [conversation, setConversation] = useState(null);

      useEffect(() => {
        const getConvo = async () => {
          if (!client || !peerAddress) {
            return;
          }
          setConversation(await client.conversations.newConversation(peerAddress));
        };
        getConvo();
      }, [client, peerAddress]);

      useEffect(() => {
        if (!conversation) return;

        const streamMessages = async () => {
          const newStream = await conversation.streamMessages();
          setStream(newStream);
          for await (const msg of newStream) {
            if (setProviderState) {
              const newMessages = convoMessages.get(conversation.peerAddress) ?? [];
              newMessages.push(msg);
              const uniqueMessages = [
                ...Array.from(
                  new Map(newMessages.map((item) => [item["id"], item])).values()
                ),
              ];
              convoMessages.set(conversation.peerAddress, uniqueMessages);
              setProviderState({
                ...providerState,
                convoMessages: new Map(convoMessages),
              });
            }
          }
        };
        streamMessages();

        return () => {
          const closeStream = async () => {
            if (!stream) return;
            await stream.return();
          };
          closeStream();
        };
        // eslint-disable-next-line
      }, [convoMessages, walletAddress, conversation]);
    };

    export default useStreamMessages;
    ```

    The purpose of the `useStreamMessages` hook is to enable your app to listen for and display (stream) new messages as they become available. Without using message streaming, you would need to refresh the app to see if any new messages are available.

4. In the `src` directory, update the existing `App.js` file to use the `useStreamMessages` hook you just created, as shown in the highlighted code. Copy this code and paste it into the file, replacing all existing code. <!--diff: https://github.com/vehidtr/xmtp-chat-tutorial/commit/cf9f028b18aa2ac825aeeb0b8877bbb6bbcbbdc5#diff-3d74dddefb6e35fbffe3c76ec0712d5c416352d9449e2fcc8210a9dee57dff67-->

    ```js {5,10-11,42-51} showLineNumbers
    import { useContext } from "react";
    import "./App.css";
    import { WalletContext } from "./contexts/WalletContext";
    import { XmtpContext } from "./contexts/XmtpContext";
    import useStreamMessages from "./hooks/useStreamMessages";

    function App() {
      const { connectWallet, walletAddress, signer } = useContext(WalletContext);
      const [providerState] = useContext(XmtpContext);
      const { convoMessages,client } = providerState;
      useStreamMessages(walletAddress);

      const sendMessage = async () => {
        const message = "gm";
        if (!client || !walletAddress) {
          return;
        }
        const conversation = await client.conversations.newConversation(
          walletAddress
        );
        if (!conversation) return;
        await conversation.send(message);
      };

      return (
        <div className="App">
          {walletAddress ? (
            <div className="wrapper">
              {!providerState.client ? (
                <button
                  className="btn"
                  onClick={() => providerState.initClient(signer)}
                >
                  Connect to XMTP
                </button>
              ) : (
                <>
                  <p>Connected: {walletAddress}</p>
                  <button className="btn" onClick={sendMessage}>
                    Send gm
                  </button>
                  <div className="msg-container">
                    {convoMessages &&
                      convoMessages.get(walletAddress)?.map((msg) => {
                        return (
                          <div className="msg" key={msg.id}>
                            {msg.content}
                          </div>
                        );
                      })}
                  </div>
                </>
              )}
            </div>
          ) : (
            <button onClick={connectWallet}>Connect wallet</button>
          )}
        </div>
      );
    }

    export default App;
    ```

5. In the root directory of your React app, run `npm start` to start your app. Click **Connect wallet** to connect your wallet app. Click** Connect to XMTP** and sign to enable your XMTP identity. The following UI appears:

   ![Screenshot of the hello world app running in a browser at localhost:3000 showing a connected Ethereum account address and a Send gm button](img/connected.png)

   :::note

   If you've sent XMTP messages to your own address on the XMTP `dev` network in the past, the messages display.

   :::

<!--jha: I think this notes needs to come at the end of the previous section... once you enable your identity - any existing messages you've sent to yourself will come through.-->

<!--Saul: So I get some messages flickering in and out. I think there might be some conflict in how the state is being updated.-->

6. Click **Send gm**. The **gm** message displays.

   ![Screenshot of the hello world app running in a browser at localhost:3000 showing a connected Ethereum account address, a Send gm button, and a gm message below the button](img/send-gm.png)

Congratulations on building your own XMTP hello world app and sending and receiving your first message with it!


## Learn more

Now that you've had a "hello world" introduction to building with XMTP, here are some resources to help you continue building with XMTP:

<!--link to apps connected to dev and production - calling out that your messages will only display on the dev network. However, I think both of these apps don't display messages you send to your own wallet address-->

* Explore other XMTP chat apps with even more features:

  * XMTP Quickstart Chat app

  * XMTP Chat app

* Learn more about the [XMTP client SDK for Javascript](.)

* Learn more about [XMTP development concepts](.)

<!--Link to step 4 of the repo where you can add CSS, create an Enter a wallet address field, and create a Write a message field-->
