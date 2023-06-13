---
sidebar_label: Conversations
sidebar_position: 3
description: Learn how to start, list, and cache conversations with XMTP
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# Start, list, and cache conversations with XMTP

Most of the time, when interacting with the network, you'll want to do it through conversations. Conversations are between two wallets addresses.

<Tabs groupId="sdk-langs">
<TabItem value="js" label="JavaScript" default>

```ts
import { Client } from "@xmtp/xmtp-js";
// Create the client with a `Signer` from your application
const xmtp = await Client.create(wallet);
const conversations = xmtp.conversations;
```

</TabItem>
<TabItem value="swift" label="Swift" default>

```swift
import XMTP
// Create the client with a wallet from your app
let client = try await Client.create(account: account)
let conversations = try await client.conversations.list()
```

</TabItem>
<TabItem value="kotlin" label="Kotlin - beta" default>

```kotlin
// Create the client with a wallet from your app
val client = Client().create(account = account)
val conversations = client.conversations.list()
```

</TabItem>
</Tabs>

## Start a new conversation

You can create a new conversation with any address activated on the XMTP network. To learn more about supported addresses, see [Chains](/docs/build/dev-faqs#chains).

<Tabs groupId="sdk-langs">
<TabItem value="js" label="JavaScript" default>

```ts
const newConversation = await xmtp.conversations.newConversation(
  "0x3F11b27F323b62B159D2642964fa27C46C841897"
);
```

</TabItem>
<TabItem value="swift" label="Swift" default>

```swift
let newConversation = try await client.conversations.newConversation(
  with: "0x3F11b27F323b62B159D2642964fa27C46C841897")
```

</TabItem>
<TabItem value="dart" label="Dart" default>

```dart
var convo = await client.newConversation("0x...");
```

</TabItem>
<TabItem value="kotlin" label="Kotlin - beta" default>

```kotlin
val newConversation =
    client.conversations.newConversation("0x3F11b27F323b62B159D2642964fa27C46C841897")
```

</TabItem>
<TabItem value="react" label="React - beta" default>

The `useStartConversation` hook starts a new conversation and sends an initial message to it.

**Type**

```ts
import type {
  Conversation,
  InvitationContext,
  SendOptions,
} from "@xmtp/react-sdk";

const useStartConversation: <T = string>(
  options?: InvitationContext
) => (
  peerAddress: string,
  message: T,
  sendOptions?: SendOptions
) => Promise<Conversation | undefined>;
```

**Example**

```tsx
import { isValidAddress, useStartConversation } from "@xmtp/react-sdk";
import { useCallback, useState } from "react";

export const StartConversation: React.FC = () => {
  const [peerAddress, setPeerAddress] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const startConversation = useStartConversation();

  const handleAddressChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setPeerAddress(e.target.value);
    },
    []
  );

  const handleMessageChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setMessage(e.target.value);
    },
    []
  );

  const handleStartConversation = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (peerAddress && message) {
        setIsLoading(true);
        const conversation = await startConversation(peerAddress, message);
        setIsLoading(false);
      }
    },
    [message, peerAddress, startConversation]
  );

  return (
    <form onSubmit={handleStartConversation}>
      <input
        name="addressInput"
        type="text"
        onChange={handleAddressChange}
        disabled={isLoading}
      />
      <input
        name="messageInput"
        type="text"
        onChange={handleMessageChange}
        disabled={isLoading || !isValidAddress(peerAddress)}
      />
    </form>
  );
};
```

</TabItem>
</Tabs>

## List existing conversations

You can get a list of all conversations that have one or more messages. 

These conversations include all conversations for a user **regardless of which app created the conversation.** This functionality provides the concept of an [interoperable inbox](/docs/concepts/interoperable-inbox), which enables a user to access all of their conversations in any app built with XMTP.

<Tabs groupId="sdk-langs">
<TabItem value="js" label="JavaScript" default>

```ts
const allConversations = await xmtp.conversations.list();
// Say gm to everyone you've been chatting with
for (const conversation of allConversations) {
  console.log(`Saying GM to ${conversation.peerAddress}`);
  await conversation.send("gm");
}
```

</TabItem>
<TabItem value="swift" label="Swift" default>

```swift
let allConversations = try await client.conversations.list()

for conversation in allConversations {
  print("Saying GM to \(conversation.peerAddress)")
  try await conversation.send(content: "gm")
}
```

</TabItem>
<TabItem value="dart" label="Dart" default>

```dart
var conversations = await client.listConversations();
for (var convo in conversations) {
  debugPrint('Saying GM to ${convo.peer}');
  await client.sendMessage(convo, 'gm');
}
```

</TabItem>
<TabItem value="kotlin" label="Kotlin - beta" default>

```kotlin
val allConversations = client.conversations.list()

for (conversation in allConversations) {
    print("Saying GM to ${conversation.peerAddress}")
    conversation.send(text = "gm")
}
```
</TabItem>
<TabItem value="react" label="React - beta" default>

The `useConversations` hook fetches all conversations with the current wallet on mount. It also exposes error and loading states.

**Type**

```ts
import type { Conversation } from "@xmtp/react-sdk";

const useConversations: () => {
  conversations: Conversation[];
  error: unknown;
  isLoading: boolean;
};
```

**Example**

```tsx
export const ListConversations: React.FC = () => {
  const { conversations, error, isLoading } = useConversations();

  if (error) {
    return "An error occurred while loading conversations";
  }

  if (isLoading) {
    return "Loading conversations...";
  }

  return (
    ...
  );
};
```

</TabItem>
</Tabs>

## Cache the conversation list

Caching the conversation list can improve performance of `client.conversations.list()` by up to 90%.

<Tabs groupId="sdk-langs">
<TabItem value="js" label="JavaScript" default>

When running in a browser, conversations are cached in `LocalStorage` by default. Running `client.conversations.list()` will update that cache and persist the results to the browser's `LocalStorage`. The data stored in `LocalStorage` is encrypted and signed using the Keystore's identity key so that attackers cannot read the sensitive contents or tamper with them.

To disable this behavior, set the `persistConversations` client option to `false`.

```ts
const clientWithNoCache = await Client.create(wallet, {
  persistConversations: false,
});
```

</TabItem>
<TabItem value="kotlin" label="Kotlin - beta" default>

As a performance optimization, you may want to persist the list of conversations in your application outside of the SDK to speed up the first call to `client.conversations.list()`.

The exported conversation list contains encryption keys for any V2 conversations included in the list. As such, you should treat it with the same care that you treat private keys.

You can get a JSON serializable list of conversations by calling:

```kotlin
val client = Client().create(wallet)
val conversations = client.conversations.export()
saveConversationsSomewhere(JSON.stringify(conversations))
// To load the conversations in a new SDK instance you can run:

val client = Client.create(wallet)
val conversations = JSON.parse(loadConversationsFromSomewhere())
val client.importConversation(conversations)
```

</TabItem>
<TabItem value="react" label="React - beta" default>

With the React client SDK (`react-sdk`), enable the conversation cache when initializing the client

</TabItem>
</Tabs>

## Serialize/Deserialize conversations

You can save a conversation object locally using its `encodedContainer` property. This returns a `ConversationContainer` object which conforms to `Codable`.

<Tabs groupId="sdk-langs">
<TabItem value="swift" label="Swift" default>

```swift
// Get a conversation
let conversation = try await client.conversations.newConversation(
  with: "0x3F11b27F323b62B159D2642964fa27C46C841897")

// Get a container.
let container = conversation.encodedContainer

// Dump it to JSON
let encoder = JSONEncoder()
let data = try encoder.encode(container)

// Get it back from JSON
let decoder = JSONDecoder()
let containerAgain = try decoder.decode(ConversationContainer.self, from: data)

// Get an actual Conversation object like we had above
let decodedConversation = containerAgain.decode(with: client)
try await decodedConversation.send(text: "hi")
```

</TabItem>
<TabItem value="kotlin" label="Kotlin - beta" default>

```kotlin
// Get a conversation
val conversation =
    client.conversations.newConversation("0x3F11b27F323b62B159D2642964fa27C46C841897")

// Dump it to JSON
val gson = GsonBuilder().create()
val data = gson.toJson(conversation)

// Get it back from JSON
val containerAgain =
    gson.fromJson(data.toString(StandardCharsets.UTF_8), ConversationV2Export::class.java)

// Get an actual Conversation object like we had above
val decodedConversation = containerAgain.decode(client)

decodedConversation.send(text = "hi")
```

</TabItem>
</Tabs>
