---
sidebar_label: Messages
sidebar_position: 4
description: Learn how to send and list messages
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# Send and list messages with XMTP

The message payload can be a plain string, but you can configure custom content types. To learn more, see [Content types](/docs/concepts/content-types).

## Send messages

To send a message, the recipient must have already started their client at least once and consequently advertised their key bundle on the network.

<Tabs groupId="sdk-langs">
<TabItem value="js" label="JavaScript"  attributes={{className: "js_tab"}}>

```ts
const conversation = await xmtp.conversations.newConversation(
  "0x3F11b27F323b62B159D2642964fa27C46C841897",
);
await conversation.send("Hello world");
```

You might want to consider [optimistically sending messages](/docs/tutorials/other/optimistic-sending). This way, the app will not have to wait for the network to process the message first. Optimistic sending is especially useful for mobile apps where the user might have a spotty connection, making the app continue to run with multiple threads.

```tsx
// standard (string) message
const preparedTextMessage = await conversation.prepareMessage(messageText);
//After preparing an optimistic message, use its `send` method to send it.
try {
  preparedMessage.send();
} catch (e) {
  // handle error, enable canceling and retries (see below)
}
```

</TabItem>
<TabItem value="react" label="React"  attributes={{className: "react_tab"}}>

```tsx
import { useSendMessage } from "@xmtp/react-sdk";
import type { Conversation } from "@xmtp/react-sdk";
import { useCallback, useState } from "react";

export const SendMessage: React.FC<{ conversation: CachedConversation }> = ({
  conversation,
}) => {
  const [peerAddress, setPeerAddress] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const { sendMessage } = useSendMessage();

  const handleAddressChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setPeerAddress(e.target.value);
    },
    [],
  );

  const handleMessageChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setMessage(e.target.value);
    },
    [],
  );

  const handleSendMessage = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (peerAddress && isValidAddress(peerAddress) && message) {
        setIsLoading(true);
        await sendMessage(conversation, message);
        setIsLoading(false);
      }
    },
    [message, peerAddress, sendMessage],
  );

  return (
    <form onSubmit={handleSendMessage}>
      <input
        name="addressInput"
        type="text"
        onChange={handleAddressChange}
        disabled={isSending}
      />
      <input
        name="messageInput"
        type="text"
        onChange={handleMessageChange}
        disabled={isSending}
      />
    </form>
  );
};
```

**Optimistic sending with React**

When a user sends a message with XMTP, they might experience a slight delay between sending the message and seeing their sent message display in their app UI.

Typically, the slight delay is caused by the app needing to wait for the XMTP network to finish processing the message before the app can display the message in its UI.

The local-first architecture of the React SDK automatically includes optimistic sending, which immediately displays the sent message in the sender’s UI while processing the message in the background. Optimistic sending provides the sender with immediate feedback and enables them to continue messaging without waiting for their previous message to finish processing.

Messages in the sending state have their `isSending` property set to `true`.

**Handle messages that fail to send with React**

If a message fails to complete the sending process, you must provide an error state that alerts the user and enables them to either resend the message or cancel sending the message.

While in this unsent state, the message remains in its original location in the user’s conversation flow, with any newer sent and received messages displaying after it.

If the user resends the message, the message moves into the most recently sent message position in the conversation. Once it successfully sends, it remains in that position.

If the user cancels sending the message, the message is removed from the conversation flow.

Messages that fail to send have their `hasSendError` property set to `true`.

**Resend a failed message**

Use the `resendMessage` function from the `useResendMessage` hook to resend a failed message.

```tsx
const { resendMessage } = useResendMessage();

// resend the message
resendMessage(failedMessage);
```

</TabItem>
<TabItem value="kotlin" label="Kotlin"  attributes={{className: "kotlin_tab"}}>

```kotlin
val conversation =
    client.conversations.newConversation("0x3F11b27F323b62B159D2642964fa27C46C841897")

conversation.send(text = "Hello world")
```

</TabItem>
<TabItem value="swift" label="Swift"  attributes={{className: "swift_tab"}}>

```swift
let conversation = try await client.conversations.newConversation(
  with: "0x3F11b27F323b62B159D2642964fa27C46C841897")
try await conversation.send(content: "Hello world")
```

</TabItem>
<TabItem value="dart" label="Dart"  attributes={{className: "dart_tab"}}>

```dart
var convo = await client.newConversation("0x...");
await client.sendMessage(convo, 'gm');
```

</TabItem>
<TabItem value="rn" label="React Native"  attributes={{className: "rn_tab"}}>

```tsx
const conversation = await xmtp.conversations.newConversation(
  "0x3F11b27F323b62B159D2642964fa27C46C841897",
);
await conversation.send("Hello world");
```

</TabItem>
</Tabs>

## List messages in a conversation

You can receive the complete message history in a conversation.

<Tabs groupId="sdk-langs">
<TabItem value="js" label="JavaScript"  attributes={{className: "js_tab"}}>

```ts
for (const conversation of await xmtp.conversations.list()) {
  // All parameters are optional and can be omitted
  const opts = {
    // Only show messages from last 24 hours
    startTime: new Date(new Date().setDate(new Date().getDate() - 1)),
    endTime: new Date(),
  };
  const messagesInConversation = await conversation.messages(opts);
}
```

</TabItem>
<TabItem value="react" label="React"  attributes={{className: "react_tab"}}>

```tsx
import { useCallback } from "react";
import { useMessages } from "@xmtp/react-sdk";
import type { CachedConversation } from "@xmtp/react-sdk";

export const Messages: React.FC<{
  conversation: CachedConversation;
}> = ({ conversation }) => {
  // error callback
  const onError = useCallback((err: Error) => {
    // handle error
  }, []);

  // messages callback
  const onMessages = useCallback((msgs: DecodedMessage[]) => {
    // do something with messages
  }, []);

  const { error, messages, isLoading } = useMessages(conversation, {
    onError,
    onMessages,
  });

  if (error) {
    return "An error occurred while loading messages";
  }

  if (isLoading) {
    return "Loading messages...";
  }

  return (
    ...
  );
};
```

</TabItem>
<TabItem value="kotlin" label="Kotlin"  attributes={{className: "kotlin_tab"}}>

```kotlin
for (conversation in client.conversations.list()) {
    val messagesInConversation = conversation.messages()
}
```

</TabItem>
<TabItem value="swift" label="Swift"  attributes={{className: "swift_tab"}}>

```swift
for conversation in client.conversations.list() {
  let messagesInConversation = try await conversation.messages()
}
```

</TabItem>
<TabItem value="dart" label="Dart"  attributes={{className: "dart_tab"}}>

```dart
// Only show messages from the last 24 hours.
var messages = await alice.listMessages(convo,
    start: DateTime.now().subtract(const Duration(hours: 24)));
```

</TabItem>
<TabItem value="rn" label="React Native"  attributes={{className: "rn_tab"}}>

```tsx
for (const conversation of await xmtp.conversations.list()) {
  const messagesInConversation = await conversation.messages(before: new Date(
    new Date().setDate(new Date().getDate() - 1)), after: new Date())
}
```

</TabItem>
</Tabs>

## List messages in a conversation with pagination

If a conversation has a lot of messages, it's more performant to retrieve and process the messages page by page instead of handling all of the messages at once.

<Tabs groupId="sdk-langs">
<TabItem value="js" label="JavaScript"  attributes={{className: "js_tab"}}>

Automatically handled by the SDK

</TabItem>
<TabItem value="react" label="React"  attributes={{className: "react_tab"}}>

Automatically handled by the SDK

</TabItem>
<TabItem value="kotlin" label="Kotlin"  attributes={{className: "kotlin_tab"}}>

Call `conversation.messages(limit: Int, before: Date)` to return the specified number of messages sent before that time.

```kotlin
val conversation =
    client.conversations.newConversation("0x3F11b27F323b62B159D2642964fa27C46C841897")

val messages = conversation.messages(limit = 25)
val nextPage = conversation.messages(limit = 25, before = messages[0].sent)
```

</TabItem>
<TabItem value="swift" label="Swift"  attributes={{className: "swift_tab"}}>

Call `conversation.messages(limit: Int, before: Date)`, which will return the specified number of messages sent before that time.

```swift
let conversation = try await client.conversations.newConversation(
  with: "0x3F11b27F323b62B159D2642964fa27C46C841897")

let messages = try await conversation.messages(limit: 25)
let nextPage = try await conversation.messages(limit: 25, before: messages[0].sent)
```

</TabItem>
<TabItem value="dart" label="Dart"  attributes={{className: "dart_tab"}}>

Specify `limit` and `end`, which will return the specified number
of messages sent before that time.

```dart
var messages = await alice.listMessages(convo, limit: 10);
var nextPage = await alice.listMessages(
    convo, limit: 10, end: messages.last.sentAt);
```

</TabItem>
<TabItem value="rn" label="React Native"  attributes={{className: "rn_tab"}}>

```tsx
const conversation = await xmtp.conversations.newConversation(
  '0x3F11b27F323b62B159D2642964fa27C46C841897'
)

for await (const page of conversation.messages(limit: 25)) {
  for (const msg of page) {
    // Breaking from the outer loop will stop the client from requesting any further pages
    if (msg.content === 'gm') {
      return
    }
    console.log(msg.content)
  }
}
```

</TabItem>
</Tabs>

## Handle unsupported content types

As more [custom](/docs/concepts/content-types#create-a-custom-content-type) and [standards-track](/docs/concepts/content-types#standards-track-content-types) content types are introduced into the XMTP ecosystem, your app may encounter content types it does not support. This situation, if not handled properly, could lead to app crashes.

Each content type includes a `contentFallback` property. This property provides a string that describes the expected value of the content type. Note that content fallbacks are immutable and are set by default in the protocol. If you are creating custom content types, you have the option to include a custom fallback. For more information on this, please visit the [Custom Content Type Tutorial](/docs/tutorials/custom-ct).

<Tabs groupId="sdk-langs">
<TabItem value="js" label="JavaScript"  attributes={{className: "js_tab"}}>

```jsx
const codec = client.codecFor(content.contentType);
if (!codec) {
  /*Not supported content type*/
  if (message?.contentFallback !== undefined) {
    return message?.contentFallback;
  }
  // Handle other types like ReadReceipts which are not mean to be displayed
}
```

</TabItem>
<TabItem value="react" label="React"  attributes={{className: "react_tab"}}>

```tsx
const codec = client.codecFor(content.contentType);
if (!codec) {
  /*Not supported content type*/
  if (message?.contentFallback !== undefined) {
    return message?.contentFallback;
  }
  // Handle other types like ReadReceipts which are not mean to be displayed
}
```

</TabItem>
<TabItem value="kotlin" label="Kotlin"  attributes={{className: "kotlin_tab"}}>

```kotlin
val codec = client.codecRegistry.find(options?.contentType)
if (!codec) {
  /*Not supported content type*/
  if (message?.contentFallback != null) {
    return message?.contentFallback
  }
  // Handle other types like ReadReceipts which are not meant to be displayed
}
```

</TabItem>
<TabItem value="swift" label="Swift"  attributes={{className: "swift_tab"}}>

```swift
let codec = client.codecRegistry.find(for: contentType)
if(!codec){
  /*Not supported content type*/
  if (message?.contentFallback != null) {
    return message?.contentFallback
  }
  // Handle other types like ReadReceipts which are not meant to be displayed
}
```

</TabItem>
<TabItem value="dart" label="Dart"  attributes={{className: "dart_tab"}}>

Dart doesnt have a public method for checking if the content type is registered. Instead the decode function uses this method internally and returns the `encoded.fallback` if exists.

```dart
import 'package:xmtp_proto/xmtp_proto.dart' as xmtp;
import 'package:xmtp/src/content/codec_registry.dart';
import 'package:xmtp/src/content/text_codec.dart';

// Create a CodecRegistry and register a TextCodec
var registry = CodecRegistry();
registry.registerCodec(TextCodec());
// Use the registry to decode the content
var decoded = await registry.decode(encoded);
//if the content type doesn't exists. will return `encoded.fallback`
if(decoded == null){
  // Handle other types like ReadReceipts which are not meant to be displayed
}
```

</TabItem>
<TabItem value="rn" label="React Native"  attributes={{className: "rn_tab"}}>

```jsx
const contentTypeID = `${contentType.authorityId}/${contentType.typeId}:${contentType.versionMajor}.${contentType.versionMinor}`;
const isRegistered = contentTypeID in client.codecRegistry;
if (!isRegistered) {
  // Not supported content type
  if (message?.fallback != null) {
    return message?.fallback;
  }
  // Handle other types like ReadReceipts which are not meant to be displayed
}
```

</TabItem>
</Tabs >

_Note: `ReadReceipts` have an `undefined` or `nil` fallback, indicating the message is not expected to be displayed._
