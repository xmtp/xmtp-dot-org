---
sidebar_label: Content types
sidebar_position: 7
---

# Content types with XMTP

When you build an app with XMTP, all messages are encoded with a content type to ensure that an XMTP client knows how to encode and decode messages, ensuring interoperability and consistent display of messages across apps.

In addition, message payloads are transported as a set of bytes. This means that payloads can carry any content type that a client supports, such as plain text, JSON, or even non-text binary or media content.

At a high level, there are three categories of content types with XMTP:

- Standard
- Standards-track
- Custom

#### Experimental playground 🎲

To explore an implementation of all standard and standards-track content types, see the XMTP React playground app:

[GitHub repo](https://github.com/xmtp/xmtp-react-playground) | [Web app](https://xmtp.github.io/xmtp-react-playground/#/new)

## Standard content types

A standard content type is one that has undergone the XMTP Request for Comment (XRC) process and has been adopted as an [XMTP Improvement Proposal](https://github.com/xmtp/XIPs#readme) (XIP).

Once adopted, a standard content type is bundled in XMTP client SDKs. A developer can then import the standard content type from an SDK for use in their app.

Here are the current standard content types:

- [**Text content type**](/docs/content-types/plain-text)

  An app built with XMTP uses the `TextCodec` (plain text) standard content type by default. This means that if your app is sending plain text messages only, you don’t need to perform any additional steps related to content types.

- [**Composite content type**](/docs/content-types/composite)

  If you want your app to be able to send multiple content types; such as any combination of plain text, images, audio, and video; in a single message, you must set up your app to use the `CompositeCodec` standard content type.

## Standards-track content types

A standards-track content type is one that is being actively reviewed for adoption as a standard content type through the XIP process.

Here are some standards-track content types that you can review, test, and adopt in your app today:

- [**Attachment content type**](/docs/content-types/attachment)

  Use to send an attachment smaller than 1MB using the `AttachmentCodec`. The codec automatically encrypts the attachment and uploads it to the XMTP network.

- [**Remote attachment content type**](/docs/content-types/remote-attachment)

  Use to send a remote attachment of any size using the `RemoteAttachmentCodec` and a storage provider.

- [**Read receipt content type**](/docs/content-types/read-receipt)

  Use to send a read receipt, which is a `timestamp` that indicates when a message was read. The read receipt is sent as a message and you can use it to calculate the time since the last message was read.

- [**Reaction content type**](/docs/content-types/reaction)

  Use a reaction to send a quick and often emoji-based way to respond to a message. Reactions are usually limited to a predefined set of emojis or symbols provided by the messaging app.

- [**Reply content type**](/docs/content-types/reply)

  Use a reply to send a direct response to a specific message in a conversation. Users can select and reply to a particular message instead of sending a new one.

- [**On-chain transaction reference content type**](https://github.com/orgs/xmtp/discussions/37)

  Review and comment on the [XIP idea](https://github.com/orgs/xmtp/discussions/37) for this conten type.

### App implementations

Here are apps that have implemented some of these standards-track content types:

- Attachment
  - Converse
  - Lenster

- On-chain transaction references (Payment receipts)
  - Coinbase Wallet

- Reactions
  - Converse

## Create a custom content type

Any developer building with XMTP can create a custom content type and immediately start using it in their app. Unlike a standard content type, use of a custom content type doesn't require prerequisite formal adoption through the XRC and XIP processes.

For example, if you need a content type that isn't covered by a standard or standards-track content type, you can create a custom content type and begin using it immediately in your app.

:::caution

Your custom content type WILL NOT automatically be supported by other apps and will display fallback text in them instead.

:::

If another app wants to display your custom content type, they must implement your custom content type in their code exactly as it's defined in your code.

Fallback plain text is "alt text"-like description text that you can associate with a custom content type if you are concerned that a receiving app might not be able to handle the content. If the receiving app is unable to handle the custom content, it displays the fallback plain text instead.

Here are tutorials you can use to learn how to create custom content types:

- [**Basic: Multiply a number**](/docs/content-types/custom)

  Create a custom content type used to multiplying numbers.
  
- [**Advanced: Send a Polygon transaction**](/docs/content-types/custom-advanced)

  Create a custom content type used to send transaction hashes on the Polygon blockchain.

## Handle unsupported content types

```jsx
const codec = xmtp.codecFor(content.contentType);
if (!codec) {
  const fallback = `missing codec for content type "${content.contentType.toString()}"`;
  throw new Error(fallback);
}
```
