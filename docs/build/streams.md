---
sidebar_label: Streams
sidebar_position: 5
description: Learn how to stream new conversations and messages
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# Stream conversations and messages with XMTP

XMTP supports real-time message delivery and retrieval. Once you initially retrieve existing conversations, you can listen for a real-time stream of new conversations and messages.

## Listen for new conversations

You can code your app to listen for new conversations in real time. Listening for new conversations lets your app display incoming messages from new contacts.

<Tabs groupId="sdk-langs">
<TabItem value="js" label="JavaScript"  attributes={{className: "js_tab"}}>

```ts
const stream = await xmtp.conversations.stream();
for await (const conversation of stream) {
  console.log(`New conversation started with ${conversation.peerAddress}`);
  // Say hello to your new friend
  await conversation.send("Hi there!");
  // Break from the loop to stop listening
  //This stream will continue infinitely. To end the stream,
  //You can either break from the loop, or call `await stream.return()`.
  break;
}
```

</TabItem>
<TabItem value="react" label="React"  attributes={{className: "react_tab"}}>

```tsx
import { useCallback, useState } from "react";
import { useStreamConversations } from "@xmtp/react-sdk";
import type { Conversation } from "@xmtp/react-sdk";

export const NewConversations: React.FC = () => {
  // track streamed conversations
  const [streamedConversations, setStreamedConversations] = useState<
    Conversation[]
  >([]);

  // callback to handle incoming conversations
  const onConversation = useCallback(
    (conversation: Conversation) => {
      setStreamedConversations((prev) => [...prev, conversation]);
    },
    [],
  );
  const { error } = useStreamConversations(onConversation);

  if (error) {
    return "An error occurred while streaming conversations";
  }

  return (
    ...
  );
};
```

</TabItem>
<TabItem value="kotlin" label="Kotlin"  attributes={{className: "kotlin_tab"}}>

```kotlin
client.conversations.stream().collect {
    print("New conversation started with ${it.peerAddress}")
    // Say hello to your new friend
    it.send(text = "Hi there!")
}
```

</TabItem>
<TabItem value="swift" label="Swift"  attributes={{className: "swift_tab"}}>

```swift
for try await conversation in client.conversations.stream() {
  print("New conversation started with \(conversation.peerAddress)")

  // Say hello to your new friend
  try await conversation.send(content: "Hi there!")

  // Break from the loop to stop listening
  //This stream will continue infinitely
  break
}
```

</TabItem>
<TabItem value="dart" label="Dart"  attributes={{className: "dart_tab"}}>

```dart
var listening = client.streamConversations().listen((convo) {
  debugPrint('Got a new conversation with ${convo.peer}');
});
// When you want to stop listening:
await listening.cancel();
```

</TabItem>
<TabItem value="rn" label="React Native"  attributes={{className: "rn_tab"}}>

```tsx
const stream = await xmtp.conversations.stream();
for await (const conversation of stream) {
  console.log(`New conversation started with ${conversation.peerAddress}`);
  // Say hello to your new friend
  await conversation.send("Hi there!");
  // Break from the loop to stop listening
  break;
}
```

</TabItem>
</Tabs>

## Listen for new messages in a conversation

You can code your app to listen for new incoming and outgoing messages in a conversation by calling `conversation.streamMessages()`.

_The stream returned by the `stream` methods is an asynchronous iterator. This means that the stream can be used by a for-await-of loop. However, note that by its nature, the stream is infinite. Therefore, any looping construct used with the stream won't terminate unless you explicitly initiate the termination. You can initiate the termination by breaking the loop or by making an external call to `return`._

<Tabs groupId="sdk-langs">
<TabItem value="js" label="JavaScript"  attributes={{className: "js_tab"}}>

```ts
const conversation = await xmtp.conversations.newConversation(
  "0x3F11b27F323b62B159D2642964fa27C46C841897",
);
for await (const message of await conversation.streamMessages()) {
  if (message.senderAddress === xmtp.address) {
    // This message was sent from me
    continue;
  }
  console.log(`New message from ${message.senderAddress}: ${message.content}`);
}
```

</TabItem>
<TabItem value="react" label="React"  attributes={{className: "react_tab"}}>

```tsx
// The useStreamMessages hook streams new conversation messages on mount
// and exposes an error state.
import { useStreamMessages } from "@xmtp/react-sdk";
import type { CachedConversation, DecodedMessage } from "@xmtp/react-sdk";
import { useCallback, useEffect, useState } from "react";

export const StreamMessages: React.FC<{
  conversation: CachedConversation;
}> = ({
  conversation,
}) => {
  // track streamed messages
  const [streamedMessages, setStreamedMessages] = useState<DecodedMessage[]>(
    [],
  );

  // callback to handle incoming messages
  const onMessage = useCallback(
    (message: DecodedMessage) => {
      setStreamedMessages((prev) => [...prev, message]);
    },
    [streamedMessages],
  );

  useStreamMessages(conversation, {onMessage});

  useEffect(() => {
    setStreamedMessages([]);
  }, [conversation]);

  return (
    ...
  );
};
```

</TabItem>
<TabItem value="kotlin" label="Kotlin"  attributes={{className: "kotlin_tab"}}>

```kotlin
val conversation =
    client.conversations.newConversation("0x3F11b27F323b62B159D2642964fa27C46C841897")

conversation.streamMessages().collect {
    if (it.senderAddress == client.address) {
        // This message was sent from me
    }

    print("New message from ${it.senderAddress}: ${it.body}")
}
```

</TabItem>
<TabItem value="swift" label="Swift"  attributes={{className: "swift_tab"}}>

```swift
let conversation = try await client.conversations.newConversation(
  with: "0x3F11b27F323b62B159D2642964fa27C46C841897")

for try await message in conversation.streamMessages() {
  if message.senderAddress == client.address {
    // This message was sent from me
    continue
  }

  print("New message from \(message.senderAddress): \(message.body)")
}
```

</TabItem>
<TabItem value="dart" label="Dart"  attributes={{className: "dart_tab"}}>

```dart
var listening = client.streamMessages(convo).listen((message) {
  debugPrint('${message.sender}> ${message.content}');
});
// When you want to stop listening:
await listening.cancel();
```

</TabItem>
<TabItem value="rn" label="React Native"  attributes={{className: "rn_tab"}}>

```tsx
const conversation = await xmtp.conversations.newConversation(
  "0x3F11b27F323b62B159D2642964fa27C46C841897",
);
for await (const message of await conversation.streamMessages()) {
  if (message.senderAddress === xmtp.address) {
    // This message was sent from me
    continue;
  }
  console.log(`New message from ${message.senderAddress}: ${message.content}`);
}
```

</TabItem>
</Tabs>

## Listen for new messages in all conversations

:::info

There is a chance that the stream can miss messages if multiple new conversations are received while the stream is being updated to include a new conversation.

:::

<Tabs groupId="sdk-langs">
<TabItem value="js" label="JavaScript"  attributes={{className: "js_tab"}}>

```jsx
for await (const message of await xmtp.conversations.streamAllMessages()) {
  if (message.senderAddress === xmtp.address) {
    // This message was sent from me
    continue;
  }
  console.log(`New message from ${message.senderAddress}: ${message.content}`);
}
```

</TabItem>
<TabItem value="react" label="React"  attributes={{className: "react_tab"}}>

```tsx
// The useStreamAllMessages hook streams new messages from all conversations
// on mount and exposes an error state.
import { useStreamAllMessages } from "@xmtp/react-sdk";
import type { DecodedMessage } from "@xmtp/react-sdk";
import { useCallback, useState } from "react";

export const StreamAllMessages: React.FC = () => {
  // track streamed messages
  const [streamedMessages, setStreamedMessages] = useState<DecodedMessage[]>(
    [],
  );

  // callback to handle incoming messages
  const onMessage = useCallback(
    (message: DecodedMessage) => {
      setStreamedMessages((prev) => [...prev, message]);
    },
    [streamedMessages],
  );

  useStreamAllMessages(onMessage);

  return (
    ...
  );
};
```

</TabItem>
<TabItem value="kotlin" label="Kotlin"  attributes={{className: "kotlin_tab"}}>

Code sample not available

</TabItem>
<TabItem value="swift" label="Swift"  attributes={{className: "swift_tab"}}>

Code sample not available

</TabItem>
<TabItem value="dart" label="Dart"  attributes={{className: "dart_tab"}}>

Code sample not available

</TabItem>
<TabItem value="rn" label="React Native"  attributes={{className: "rn_tab"}}>

```tsx
for await (const message of await xmtp.conversations.streamAllMessages()) {
  if (message.senderAddress === xmtp.address) {
    // This message was sent from me
    continue;
  }
  console.log(`New message from ${message.senderAddress}: ${message.content}`);
}
```

</TabItem>
</Tabs>
