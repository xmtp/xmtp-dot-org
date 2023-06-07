---
sidebar_label: Developer Quickstart
sidebar_position: 3
description: Build this quickstart app to learn some of the fundamental concepts involved in building with XMTP.
---

# Developer Quickstart

XMTP (Extensible Message Transport Protocol) is an open protocol and network for secure and private web3 messaging. For example, you can build an app with XMTP to send messages between blockchain accounts, including chat/DMs, alerts, announcements, and more.

### Demo app

This repository demonstrates the implementation of these concepts within a simple chat app.

[GitHub repo](https://github.com/fabriguespe/xmtp-thirdweb-js)

```tsx
git clone git@github.com:fabriguespe/xmtp-thirdweb-js.git
cd xmtp-thirdweb-js
npm install
npm run dev
```

### Learning objectives:

- Setting up the ConnectWallet button
- Signing in with XMTP
- Loading a conversation
- Sending a message

### Install dependencies

```bash
npm install @xmtp/js @thirdweb-dev/react
```

### Configure the client

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

Now using our hooks we are going to use the state to listen whan XMTP is connected.

Later we are going to load our conversations and we are going to simulate starting a conversation with one of our bots

```tsx
useEffect(() => {
  async function loadConversation() {
    if (await client?.canMessage(PEER_ADDRESS)) {
      const convv = await startConversation(PEER_ADDRESS, "hi");
      setConversation(convv);
      const history = await convv.messages();
      console.log("history", history.length);
      setHistory(history);
    } else {
      console.log("cant message because is not on the network.");
      //cant message because is not on the network.
    }
  }
  if (!conversation && client) loadConversation();
}, [conversation, client, messages]);
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

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

### Optional: Save keys

We are going to use a help file to storage our keys and save from re-signing to xmtp each time

Then in our main app we can use them for initiating the client

<Tabs>
<TabItem value="js" label="JavaScript" default>

```tsx
//options
const clientOptions = {
  env: "production",
};
//Initialize XMTP
const initXmtpWithKeys = async () => {
  // create a client using keys returned from getKeys
  //Use signer wallet from ThirdWeb hook `useSigner`
  const address = await signer.getAddress();
  let keys = loadKeys(address);
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
  await initialize({ keys, options: clientOptions, signer });
};
```

</TabItem>
<TabItem value="helper" label="Helpers" default>

```tsx
// Filter for Lens conversations
const allConversations = await client.conversations.list();
const lensConversations = allConversations.filter((conversation) =>
  conversation.context?.conversationId.startsWith("lens.dev/dm/")
);
// Optionally filter for only conversations including your currently selected profile
const myProfileConversations = lensConversations.filter((conversation) =>
  conversation.context?.conversationId.includes(myProfile.id)
);
```

</TabItem>
</Tabs>
