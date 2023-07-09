---
sidebar_label: Developer Quickstart
sidebar_position: 2
description: Build this quickstart app to learn some of the fundamental concepts involved in building with XMTP.
---

# Developer Quickstart

In this tutorial we are going to build a simple chat app using XMTP and NextJS. We are going to be chatting to a bot for simplicity. The bot is going to be a simple echo bot that will reply with the same message we send.

### NextJS Example

If you want to just clone the repo and get it working follow this commands. If you want to do it from scratch jump to the [#getting-started](#getting-started) section below.

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
- Listen for messages

### Install dependencies

```bash
npm install  @thirdweb-dev/react @xmtp/xmtp-js
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
// Function to initialize the XMTP clients
const initXmtp = async function () {
  // Create the XMTP client
  const xmtp = await Client.create(signer, { env: "dev" });
  //Create or load conversation with Gm bot
  newConversation(xmtp, PEER_ADDRESS);
  // Set the XMTP client in state for later use
  setIsOnNetwork(!!xmtp.address);
  //Set the client in the ref
  clientRef.current = xmtp;
};
```

```jsx
// Function to load the existing messages in a conversation
const newConversation = async function (xmtp_client, addressTo) {
  //Creates a new conversation with the address
  if (await xmtp_client?.canMessage(addressTo)) {
    //if you try with a non-enabled wallet is going to fail 0x1234567890123456789012345678901234567890
    const conversation = await xmtp_client.conversations.newConversation(
      addressTo,
    );
    convRef.current = conversation;
    //Loads the messages of the conversation
    const messages = await conversation.messages();
    setMessages(messages);
  } else {
    console.log("cant message because is not on the network.");
    //cant message because is not on the network.
  }
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

import Quickstarts from "@site/src/components/Quickstarts/index.md";

<Quickstarts />

### Example apps

- [React web app](https://github.com/xmtp/xmtp-quickstart-react)
- [React Native app](https://github.com/xmtp/example-chat-react-native)

#### Need to send a test message?

Message this XMTP message bot to get an immediate automated reply:

- `gm.xmtp.eth` (`0x937C0d4a6294cdfa575de17382c7076b579DC176`)

#### Troubleshooting

If you get into issues with `Buffer` and `polyfills` check out our fix below:

1. Install buffer dependency

```bash
npm i buffer
```

2. Create a new file `polyfills.js` in the root of your project

```tsx
import { Buffer } from "buffer";

window.Buffer = window.Buffer ?? Buffer;
```

3. Import it into your main file on the first line

- ReacJS: `index.js` or `index.tsx`
- VueJS: `main.js`
- NuxtJS: `app.vue`

```tsx
import "./polyfills";
```

4. Update config files

- Webpack: `vue.config.js` or `webpack.config.js`:

```jsx
const webpack = require("webpack");

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        Buffer: ["buffer", "Buffer"],
      }),
    ],
  },
  transpileDependencies: true,
};
```

- Vite: `vite.config.js`:

```jsx
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { Buffer } from "buffer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  define: {
    global: {
      Buffer: Buffer,
    },
  },
});
```

- NuxtJS: `nuxt.config.js`:

```tsx
export default {
  build: {
    extend(config, { isClient }) {
      if (isClient) {
        config.node = {
          Buffer: true,
        };
      }
    },
  },
};
```
