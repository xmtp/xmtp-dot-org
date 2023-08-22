---
sidebar_label: React SDK
sidebar_position: 1.5
---

# Handle content types with the React SDK

As the ecosystem of apps built with XMTP grows exponentially, so will the number of available content types.

All apps built with an XMTP client SDK automatically support the plain text standard content type. However, there are other content types that you can choose to support.

These include standards-track content types and custom content types.

To learn more about content types, see [Content types with XMTP](https://xmtp.org/docs/concepts/content-types).

## Standards-track content types

Standards-track content types are proposals being actively reviewed for adoption as standard content types through the XMTP Improvement Proposal (XIP) process. Once a content type has been adopted as a standard, it is included in the XMTP client SDKs. Apps can use an SDK to automatically handle the new standard content types.

Here are some examples of standards-track content types that you can review, test, and adopt in your app today:

### Remote attachments

This content type supports sending file attachments that are stored off-network. Use it to enable your app to send and receive message attachments.

- [XIP proposal discussion](https://github.com/xmtp/XIPs/blob/main/XIPs/xip-17-remote-attachment-content-type-proposal.md)

- [Source code](https://github.com/xmtp/xmtp-js-content-types/tree/main/packages/content-type-remote-attachment)

### Replies

This content type supports direct replies to messages.

- [XIP idea discussion](https://github.com/orgs/xmtp/discussions/35)

- [Source code](https://github.com/xmtp/xmtp-js-content-types/tree/main/packages/content-type-reply)

### Reactions

This content type supports reactions to messages.

- [XIP idea discussion](https://github.com/orgs/xmtp/discussions/36)

- [Source code](https://github.com/xmtp/xmtp-js-content-types/tree/main/packages/content-type-reaction)

### Read receipts

This content type supports read receipts to messages

- [XIP idea discussion](https://github.com/orgs/xmtp/discussions/43)

- [Source code](https://github.com/xmtp/xmtp-js-content-types/tree/main/packages/content-type-read-receipt)

## Integrate standards-track content types with the React SDK

The React SDK supports all current standards-track content types, but only text messages are enabled out of the box. Adding support for other standards-track content types requires a bit of configuration.

```tsx
import {
  XMTPProvider,
  attachmentContentTypeConfig,
  reactionContentTypeConfig,
  readReceiptContentTypeConfig,
  replyContentTypeConfig,
} from "@xmtp/react-sdk";

const contentTypeConfigs = [
  attachmentContentTypeConfig,
  reactionContentTypeConfig,
  readReceiptContentTypeConfig,
  replyContentTypeConfig,
];

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <XMTPProvider contentTypeConfigs={contentTypeConfigs}>
      <App />
    </XMTPProvider>
  </StrictMode>,
);
```

## Custom content types

On the other hand, custom content types are those that an app chooses to use in its implementation, but which are not standards and are not being actively reviewed as standards-track content types.

When your app encounters a custom content type, you can:

- Choose to adopt the custom content type if you think it is a good fit for your app.
- Update your app to gracefully handle the unsupported content type.
- Ignore it

### Integrate custom content types with the React SDK

:::caution

This part of the React SDK is still under active development and may change in the future.

:::

To support a custom content type, you must create a content type configuration to integrate with the [local-first architecture](https://github.com/xmtp/xmtp-web/blob/main/packages/react-sdk/README.md#local-first-architecture). There are five possible options in a content type configuration, and two are required. They are outlined below.

**Namespace (required)**

This must be specified and unique to all other content type namespaces.

**Message processors (required)**

Processing a message as it arrives from the XMTP network is a key aspect of the local-first architecture. It determines if and how a message is cached locally.

**Codecs (required)**

All custom content types require at least one codec.

**Schema (optional)**

When working with some content types, you may want to cache data in a separate table. This option allows you to specify a new Dexie table schema.

**Validators (optional)**

Content validators help to ensure that custom content type messages are in the correct format and can be processed properly.

**Example configuration**

```tsx
import type { ContentCodec } from "@xmtp/xmtp-js";

const MyContentType = new ContentTypeId({
  authorityId: "mydomain.com",
  typeId: "myContentType",
  versionMajor: 1,
  versionMinor: 0,
});

class MyContentTypeCodec implements ContentCodec { ... };

export const myCustomContentTypeConfiguration = {
  namespace: "MyContentType",
  codecs: [new MyContentTypeCodec()],
  processors: {
    [MyContentType.toString()]: [processMyContentType],
  },
  validators: {
    [MyContentType.toString()]: validateMyContentType,
  },
};
```

### Send custom content type messages

The `useSendMessage` hook supports custom content types. Pass in the content type as the third parameter as shown in the example below.

```tsx
import { useCallback, useState } from "react";
import { useSendMessage } from "@xmtp/react-sdk";
import type { Conversation } from "@xmtp/react-sdk";
import type { Reaction } from "@xmtp/content-type-reaction";
import { ContentTypeReaction } from "@xmtp/content-type-reaction";

export const SendCustomContentTypeMessage: React.FC<{
  conversation: CachedConversation;
}> = ({ conversation }) => {
  const [isSending, setIsSending] = useState(false);
  const sendMessage = useSendMessage();

  const handleSendMessage = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setIsLoading(true);
      // send custom content type
      await sendMessage(
        conversation,
        {
          action: "added",
          content: "👍",
          reference: "<XMTP message ID>",
          schema: "unicode",
        } as Reaction,
        ContentTypeReaction,
      );
      setIsLoading(false);
    },
    [message, peerAddress, sendMessage],
  );

  return (
    <form onSubmit={handleSendMessage}>
      <button type="submit" disabled={isSending}>
        Send custom content type message
      </button>
    </form>
  );
};
```

## Handle unsupported content types

Messages that contain unsupported content types are stored in the local cache, but are not processed. The `content` property of an unsupported message will be `undefined`. Each time a client is initialized, any messages that were previously unprocessed because their content type was unsupported at the time, will attempt to be reprocessed.

If you wish to display an unsupported content type, there’s a `contentFallback` property that may include a useful string. However, it is recommended that you manually process unsupported content types.

**Example**

```ts
import { ContentTypeId } from "@xmtp/xmtp-js";
import { ContentTypeAttachment } from "@xmtp/content-type-remote-attachment";

const MessageContent = ({ message }) => {
  if (
    message.content === undefined &&
    ContentTypeId.fromString(message.contentType).sameAs(ContentTypeAttachment)
  ) {
    return "This message contains an attachment, which is not supported by this client.";
  }
};
```
