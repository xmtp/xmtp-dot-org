---
sidebar_label: Get started
sidebar_position: 1
description: "Get started building apps with XMTP."
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# Get started with XMTP

The [XMTP message API](/docs/concepts/architectural-overview#network-layer) revolves around a network client that allows retrieving and sending messages to other network participants. 

A client must be connected to a wallet on startup. If this is the very first time the client is created, the client will generate a [key bundle](/docs/concepts/key-generation-and-usage) that is used to [encrypt and authenticate messages](/docs/concepts/invitation-and-message-encryption). 

The key bundle persists encrypted in the network using a [wallet signature](/docs/concepts/account-signatures). The public side of the key bundle is also regularly advertised on the network to allow parties to establish shared encryption keys. 

All this happens transparently, without requiring any additional code.

## Usage

<Tabs groupId="sdk-langs">
<TabItem value="js" label="JavaScript" default>

```tsx
import { Client } from '@xmtp/xmtp-js'
import { Wallet } from 'ethers'

// You'll want to replace this with a wallet from your application
const wallet = Wallet.createRandom()
// Create the client with your wallet. This will connect to the XMTP development network by default
const xmtp = await Client.create(wallet)
// Start a conversation with XMTP
const conversation = await xmtp.conversations.newConversation(
  '0x3F11b27F323b62B159D2642964fa27C46C841897'
)
// Load all messages in the conversation
const messages = await conversation.messages()
// Send a message
await conversation.send('gm')
// Listen for new messages in the conversation
for await (const message of await conversation.streamMessages()) {
  console.log(`[${message.senderAddress}]: ${message.content}`)
}
```

</TabItem>
<TabItem value="swift" label="Swift" default>

```swift
import XMTP

// You'll want to replace this with a wallet from your application.
let account = try PrivateKey.generate()

// Create the client with your wallet. This will connect to the XMTP `dev` network by default.
// The account is anything that conforms to the `XMTP.SigningKey` protocol.
let client = try await Client.create(account: account)

// Start a conversation with XMTP
let conversation = try await client.conversations.newConversation(
  with: "0x3F11b27F323b62B159D2642964fa27C46C841897")

// Load all messages in the conversation
let messages = try await conversation.messages()
// Send a message
try await conversation.send(content: "gm")
// Listen for new messages in the conversation
for try await message in conversation.streamMessages() {
  print("\(message.senderAddress): \(message.body)")
}
```

</TabItem>
<TabItem value="dart" label="Dart" default>

```dart
import 'package:xmtp/xmtp.dart' as xmtp;
import 'package:web3dart/credentials.dart';
import 'dart:math';

var wallet = EthPrivateKey.createRandom(Random.secure());
var api = xmtp.Api.create();
var client = await xmtp.Client.createFromWallet(api, wallet);

//List conversations
var conversations = await client.listConversations();
for (var convo in conversations) {
  debugPrint('Saying GM to ${convo.peer}');
  await client.sendMessage(convo, 'gm');
}

//Listen for new conversations
var listening = client.streamConversations().listen((convo) {
  debugPrint('Got a new conversation with ${convo.peer}');
});
// When you want to stop listening:
await listening.cancel();

//Send messages
var convo = await client.newConversation("0x...");
await client.sendMessage(convo, 'gm');

//Listen for new messages
var listening = client.streamMessages(convo).listen((message) {
  debugPrint('${message.sender}> ${message.content}');
});
// When you want to stop listening:
await listening.cancel();
```

</TabItem>
<TabItem value="kotlin" label="Kotlin - beta" default>

```kotlin
// You'll want to replace this with a wallet from your application.
val account = PrivateKeyBuilder()

// Create the client with your wallet. This will connect to the XMTP `dev` network by default.
// The account is anything that conforms to the `XMTP.SigningKey` protocol.
val client = Client().create(account = account)

// Start a conversation with XMTP
val conversation =
    client.conversations.newConversation("0x3F11b27F323b62B159D2642964fa27C46C841897")

// Load all messages in the conversation
val messages = conversation.messages()
// Send a message
conversation.send(text = "gm")
// Listen for new messages in the conversation
conversation.streamMessages().collect { print("${message.senderAddress}: ${message.body}") }
```

</TabItem>
<TabItem value="react" label="React - beta" default>

```tsx
import {
  Client,
  useStreamMessages,
  useClient,
  useMessages,
  useConversations,
  useCanMessage,
  useStartConversation,
} from "@xmtp/react-sdk";

const { client, initialize } = useClient();
const { conversations } = useConversations();
const startConversation = useStartConversation();
const { canMessage } = useCanMessage();


//Initialize
{
  !isConnected && (
    <button onClick={initXmtp}>
      Connect to XMTP
    </button>
  );
}

const initXmtp = async () => {
  await initialize({ signer });
};

// Start a conversation with XMTP
const add='0x3F11b27F323b62B159D2642964fa27C46C841897'
if (await canMessage(add)) {
      const conversation = await startConversation(add, "hi");
}

//Stream messages
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

</TabItem>
<TabItem value="rn" label="React Native - alpha" default>

```js
import { Client, Conversation, DecodedMessage } from '@xmtp/react-native-sdk';
return (
    <SafeAreaView >
      <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}>
        <Text selectable={true} style={{ marginTop: 32, width: '100%', textAlign: 'center' }}>{addressText}</Text>
      </View>
      { connected ? <Button title="Refresh Conversations" onPress={getConversations()} /> : <Button title="Connect Random Wallet" onPress={connectRandomWallet()} /> }
      { connected ? <ConversationList /> : null }
      { messages ? <ConversationModal onClose={() => setMessages(null)} /> : null }
    </SafeAreaView>
  );
}
```

</TabItem>
</Tabs>

## Install

To start with XMTP, install the XMTP client SDK:

<Tabs groupId="sdk-langs">
<TabItem value="js" label="JavaScript" default>

```bash
npm install @xmtp/js
```

</TabItem>
<TabItem value="swift" label="Swift" default>

Use Xcode to add to the project (**File** > **Add Packages…**) or add this to your `Package.swift file`: 

```
.package(url: "https://github.com/xmtp/xmtp-ios", branch: "main")
```

</TabItem>
<TabItem value="dart" label="Dart" default>

```bash
flutter pub add xmtp
```

</TabItem>
<TabItem value="kotlin" label="Kotlin - beta" default>

You can find the latest package version on [Maven Central](https://central.sonatype.com/artifact/org.xmtp/android/0.0.5/versions).

```
implementation 'org.xmtp:android:X.X.X'
```

</TabItem>
<TabItem value="react" label="React - beta" default>

```bash
npm i @xmtp/react-sdk
```

</TabItem>
<TabItem value="rn" label="React Native - alpha" default>

```bash
npm i @xmtp/react-native-sdk
```

</TabItem>
</Tabs>

## Example apps

- [Swift](https://github.com/xmtp/xmtp-ios/tree/main/XMTPiOSExample/XMTPiOSExample)
- [JavaScript](https://github.com/fabriguespe/xmtp-js-quickstart)
- [Dart](https://github.com/xmtp/xmtp-flutter/tree/main/example)
- [React hooks](https://github.com/fabriguespe/xmtp-hooks-quickstart) - beta
- [Kotlin](https://github.com/xmtp/xmtp-android/tree/main/example) - beta
- [React Native](https://github.com/fabriguespe/xmtp-react-native-quickstart) - alpha
- [Remote attachments](https://github.com/fabriguespe/xmtp-thirdweb-js)

## Need to send a test message?
    
Message this XMTP message bot to get an immediate automated reply: `gm.xmtp.eth` (`0x937C0d4a6294cdfa575de17382c7076b579DC176`)
