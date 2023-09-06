---
sidebar_label: Content Types
sidebar_position: 7
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# Content Types with XMTP

When you build an app with XMTP, all messages are encoded with a content type to ensure that an XMTP client knows how to encode and decode messages, ensuring interoperability and consistent display of messages across apps.

In addition, message payloads are transported as a set of bytes. This means that payloads can carry any content type that a client supports, such as plain text, JSON, or even non-text binary or media content.

At a high level, there are three categories of content types with XMTP:

- Standard
- Standards-track
- Custom

#### Experimental playground 🎲

To explore implementations of standard and standards-track content types, see the XMTP React playground:

[GitHub repo](https://github.com/xmtp/xmtp-react-playground) | [Web app](https://xmtp.github.io/xmtp-react-playground/#/new)

## Standard content types

A standard content type is one that has undergone the XMTP Request for Comment (XRC) process and has been adopted as an [XMTP Improvement Proposal](https://github.com/xmtp/XIPs#readme) (XIP).

Once adopted, a standard content type is bundled in XMTP client SDKs. A developer can then import the standard content type from an SDK for use in their app.

Here are the current standard content types:

### Text content type

An app built with XMTP uses the `TextCodec` (plain text) standard content type by default. This means that if your app is sending plain text messages only, you don’t need to perform any additional steps related to content types.

<Tabs groupId="sdk-langs">
<TabItem value="js" label="JavaScript"  attributes={{className: "js_tab"}}>

```jsx
await conversation.send("gm");
```

</TabItem>
<TabItem value="react" label="React"  attributes={{className: "react_tab"}}>

```jsx
await sendMessage(conversation, "gm");
```

</TabItem>
<TabItem value="swift" label="Swift"  attributes={{className: "swift_tab"}}>

```swift
try await conversation.send(content: "gm")
```

</TabItem>
<TabItem value="dart" label="Dart"  attributes={{className: "dart_tab"}}>

```dart
var convo = await client.newConversation("0x...");
await client.sendMessage(convo, 'gm');
```

</TabItem>
<TabItem value="kotlin" label="Kotlin"  attributes={{className: "kotlin_tab"}}>

```kotlin
conversation.send(text = "gm")
```

</TabItem>
<TabItem value="rn" label="React Native"  attributes={{className: "rn_tab"}}>

```jsx
await conversation.send("gm");
```

</TabItem>
</Tabs>

### Composite content type

If you want your app to be able to send multiple content types; such as any combination of plain text, images, audio, and video; in a single message, you must set up your app to use the `CompositeCodec` standard content type.

<Tabs groupId="sdk-langs">
<TabItem value="js" label="JavaScript"  attributes={{className: "js_tab"}}>

```jsx
import { CompositeCodec } from "@xmtp/xmtp-js";
//xmtp = await Client.create(signer, { env: "dev" });
xmtp.registerCodec(new CompositeCodec());
```

</TabItem></Tabs>

## Standards-track content types

A standards-track content type is one that is being actively reviewed for adoption as a standard content type through the XIP process.

Here are standards-track content types that you can review, test, and adopt in your app today:

### Attachment content type

Use to send an attachment smaller than 1MB using the `AttachmentCodec`. The codec automatically encrypts the attachment and uploads it to the XMTP network.

<!-- - [Read the doc](/docs/content-types/attachment)-->

- [Comment on the XIP](https://github.com/xmtp/XIPs/blob/main/XIPs/xip-15-attachment-content-type.md)
- SDK support: [React](https://github.com/xmtp/xmtp-web/tree/8a248eab168eba494909d7215cffba9d50c1f87c/packages/react-sdk/src/helpers/caching/contentTypes), [Kotlin](https://github.com/xmtp/xmtp-android/tree/main/library/src/main/java/org/xmtp/android/library/codecs), [Swift](https://github.com/xmtp/xmtp-ios/tree/main/Sources/XMTP/Codecs)

### Remote attachment content type

Use to send a remote attachment of any size using the `RemoteAttachmentCodec` and a storage provider.

- [Read the doc](/docs/build/messages/remote-attachment)
- [Comment on the XIP](https://github.com/xmtp/XIPs/blob/main/XIPs/xip-17-remote-attachment-content-type-proposal.md)
- SDK support: [React](https://github.com/xmtp/xmtp-web/tree/8a248eab168eba494909d7215cffba9d50c1f87c/packages/react-sdk/src/helpers/caching/contentTypes), [JavaScript](https://github.com/xmtp/xmtp-js-content-types/tree/363e82c894f5a4436c5617b1c0424bab574b27c0/packages), [Kotlin](https://github.com/xmtp/xmtp-android/tree/main/library/src/main/java/org/xmtp/android/library/codecs), [Swift](https://github.com/xmtp/xmtp-ios/tree/main/Sources/XMTP/Codecs)
- Implemented in: Converse, Lenster

### Read receipt content type

Use to send a read receipt, which is a `timestamp` that indicates when a message was read. The read receipt is sent as a message and you can use it to calculate the time since the last message was read.

- [Read the doc](/docs/build/messages/read-receipt)
- [Comment on the XIP idea](https://github.com/orgs/xmtp/discussions/43)
- SDK support: [React](https://github.com/xmtp/xmtp-web/tree/8a248eab168eba494909d7215cffba9d50c1f87c/packages/react-sdk/src/helpers/caching/contentTypes), [JavaScript](https://github.com/xmtp/xmtp-js-content-types/tree/363e82c894f5a4436c5617b1c0424bab574b27c0/packages), [Kotlin](https://github.com/xmtp/xmtp-android/tree/main/library/src/main/java/org/xmtp/android/library/codecs), [Swift](https://github.com/xmtp/xmtp-ios/tree/main/Sources/XMTP/Codecs)

### Reaction content type

Use a reaction to send a quick and often emoji-based way to respond to a message. Reactions are usually limited to a predefined set of emojis or symbols provided by the messaging app.

- [Read the doc](/docs/build/messages/reaction)
- [Comment on the XIP idea](https://github.com/orgs/xmtp/discussions/36)
- SDK support: [React](https://github.com/xmtp/xmtp-web/tree/8a248eab168eba494909d7215cffba9d50c1f87c/packages/react-sdk/src/helpers/caching/contentTypes), [JavaScript](https://github.com/xmtp/xmtp-js-content-types/tree/363e82c894f5a4436c5617b1c0424bab574b27c0/packages), [Kotlin](https://github.com/xmtp/xmtp-android/tree/main/library/src/main/java/org/xmtp/android/library/codecs), [Swift](https://github.com/xmtp/xmtp-ios/tree/main/Sources/XMTP/Codecs)
- Implemented in: Converse

### Reply content type

Use a reply to send a direct response to a specific message in a conversation. Users can select and reply to a particular message instead of sending a new one.

- [Read the doc](/docs/build/messages/reply)
- [Comment on the XIP idea](https://github.com/orgs/xmtp/discussions/35)
- SDK support: [React](https://github.com/xmtp/xmtp-web/tree/8a248eab168eba494909d7215cffba9d50c1f87c/packages/react-sdk/src/helpers/caching/contentTypes), [JavaScript](https://github.com/xmtp/xmtp-js-content-types/tree/363e82c894f5a4436c5617b1c0424bab574b27c0/packages), [Kotlin](https://github.com/xmtp/xmtp-android/tree/main/library/src/main/java/org/xmtp/android/library/codecs), [Swift](https://github.com/xmtp/xmtp-ios/tree/main/Sources/XMTP/Codecs)

### On-chain transaction reference content type

Use to send references to on-chain transactions, such as crypto payments.

- [Comment on the XIP idea](https://github.com/orgs/xmtp/discussions/37)
- Implemented in: Coinbase Wallet

## Create a custom content type

Any developer building with XMTP can create a custom content type and immediately start using it in their app. Unlike a standard content type, use of a custom content type doesn't require prerequisite formal adoption through the XRC and XIP processes.

For example, if you need a content type that isn't covered by a standard or standards-track content type, you can create a custom content type and begin using it immediately in your app.

:::caution

Your custom content type WILL NOT automatically be supported by other apps and will display fallback text in them instead.

:::

If another app wants to display your custom content type, they must implement your custom content type in their code exactly as it's defined in your code.

Fallback plain text is "alt text"-like description text that you can associate with a custom content type if you are concerned that a receiving app might not be able to handle the content. If the receiving app is unable to handle the custom content, it displays the fallback plain text instead.

Here are tutorials you can use to learn how to create custom content types:

### [Basic: Multiply a number](/docs/tutorials/custom-ct)

Create a custom content type used to multiply numbers.

### [Advanced: Send a Polygon transaction](/docs/tutorials/custom-ct)

Create a custom content type used to send transaction hashes on the Polygon blockchain.
