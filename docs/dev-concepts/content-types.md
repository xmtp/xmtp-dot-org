---
sidebar_label: Content types
sidebar_position: 4
---

# Content types with XMTP

All messages in XMTP are encoded with a **content type** to ensure interoperability and consistency of experience across the XMTP network.

Message **payloads** are transported as a set of bytes. This means that payloads can carry any content type that a client supports, such as plain text, JSON, or even non-text binary or media content.

The XMTP SDK allows developers to adopt new content types and put them to immediate use without going through a formal process. Client apps might choose to adopt those content types if they want to render those message types, but they can also rely on fall-back plain text.

Fall-back plain text is "alt text"-like description text that you can associate with original content if you are concerned that the receiving client app might not be able to handle the original content. If the receiving client app is unable to handle the original content, it displays the fall-back plain text instead.

Two predefined content types come bundled with the XMTP client SDK:

1. `xmtp.org/text:1.0`, which defines a **default** `TextCodec` for plaintext content
2. `xtmp.org/composite:1.0`, which defines an **optional** `CompositeCodec` for multiple content types in a single message

The client SDK adopted these content types through the [XMTP Improvement Proposal](https://github.com/xmtp/XIPs/blob/main/XIPs/xip-0-purpose-process.md) process, which enables a [framework](https://github.com/xmtp/XIPs/blob/main/XIPs/xip-5-message-content-types.md) for community members to propose standards and achieve consensus about their adoption.

To learn more about content types, see [Different types of content](https://github.com/xmtp/xmtp-js/tree/0ec6b344cb69823e5c4c924f35d1262b51fa636e#different-types-of-content).

To learn how to use content types when developing a client app, see [Use content types](/docs/client-sdk/javascript/tutorials/use-content-types).
