---
sidebar_label: Developer Quickstart
sidebar_position: 2
description: Build this quickstart app to learn some of the fundamental concepts involved in building with XMTP.
---

# Developer Quickstart

In this tutorial we are going to build a simple chat app using XMTP and NextJS. We are going to be chatting to a bot for simplicity. The bot is going to be a simple echo bot that will reply with the same message we send.

### Demo App

[<div class="div-header-github-link"></div> xmtp-quickstart-nextjs](https://github.com/fabriguespe/xmtp-quickstart-nextjs)

```bash
git clone git@github.com:fabriguespe/xmtp-quickstart-nextjs.git
cd xmtp-quickstart-nextjs
npm install
npm run dev
```

### Getting started

The first step involves creating and configuring the Next.js application.

To generate a new Next.js app, execute the following command in your terminal:

```bash
npx create-next-app my-app

✔ Would you like to use TypeScript with this project? Yes
✔ Would you like to use ESLint with this project? Yes
✔ Would you like to use Tailwind CSS with this project?  Yes
✔ Would you like to use `src/` directory with this project? Yes
✔ Would you like to use experimental `app/` directory with this project? No
✔ Would you like to customize the default import alias? No
```

### Learning Objectives:

- Connect wallet button
- Authenticate with XMTP
- Loading a conversation
- Sending a message

### Install dependencies

```bash
npm install @xmtp/xmtp-js @thirdweb-dev/react
```

### Configuring the client

First we need to initialize XMTP client using as signer our wallet connection of choice.

```tsx
import Home from "@/components/Home";
import { ThirdwebProvider } from "@thirdweb-dev/react";

export default function Index() {
  return (
    <ThirdwebProvider activeChain="goerli">
      <Home />
    </ThirdwebProvider>
  );
}
```

### Display connect with XMTP

Now that we have the wrapper we can add a button that will sign our user in with XMTP.

```tsx
{
  isConnected && !isOnNetwork && (
    <div className={styles.xmtp}>
      <ConnectWallet theme="light" />
      <button onClick={initXmtp} className={styles.btnXmtp}>
        Connect to XMTP
      </button>
    </div>
  );
}
```

```tsx
// Function to initialize the XMTP client
const initXmtp = async function () {
  // Create the XMTP client
  const xmtp = await Client.create(signer, { env: "production" });
  //Create or load conversation with Gm bot
  newConversation(xmtp, PEER_ADDRESS);
  // Set the XMTP client in state for later use
  setIsOnNetwork(!!xmtp.address);
  //Set the client in the ref
  clientRef.current = xmtp;
};
```

### Load conversation and messages

Now using our hooks we are going to use the state to listen when XMTP is connected.

Later we are going to load our conversations and we are going to simulate starting a conversation with one of our bots

```tsx
useEffect(() => {
  if (isOnNetwork && convRef.current) {
    // Function to stream new messages in the conversation
    const streamMessages = async () => {
      const newStream = await convRef.current.streamMessages();
      for await (const msg of newStream) {
        const exists = messages.find((m) => m.id === msg.id);
        if (!exists) {
          setMessages((prevMessages) => {
            const msgsnew = [...prevMessages, msg];
            return msgsnew;
          });
        }
      }
    };
    streamMessages();
  }
}, [messages, isOnNetwork]);
```

### Listen to conversations

In your component initialize the hook to listen to conversations

```tsx
const [history, setHistory] = useState(null);
const { messages } = useMessages(conversation);
// Stream messages
const onMessage = useCallback((message) => {
  setHistory((prevMessages) => {
    const msgsnew = [...prevMessages, message];
    return msgsnew;
  });
}, []);
useStreamMessages(conversation, onMessage);
```

### Quickstarts 🏁

- [NextJS](https://github.com/fabriguespe/xmtp-quickstart-nextjs)
- [ReactJS](https://github.com/fabriguespe/xmtp-quickstart-reactjs)
- [Dart](https://github.com/xmtp/xmtp-android)
- [Kotlin](https://github.com/xmtp/xmtp-flutter)
- [Swift](https://github.com/xmtp/xmtp-ios)
- [React Native](https://github.com/fabriguespe/xmtp-react-native-quickstart)
- [React Hooks](https://github.com/fabriguespe/xmtp-hooks-quickstart)
- [Firebase Functions](https://github.com/fabriguespe/xmtp-firebase-functions)
- [NodeJS](https://github.com/fabriguespe/xmtp-quickstart-node)

### Example apps

- [React web app](https://github.com/xmtp/xmtp-quickstart-react)
- [React Native app](https://github.com/xmtp/example-chat-react-native)

#### Need to send a test message?

Message this XMTP message bot to get an immediate automated reply:

- `gm.xmtp.eth` (`0x937C0d4a6294cdfa575de17382c7076b579DC176`)
