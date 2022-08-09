---
sidebar_label: Content types
sidebar_position: 3
---

# Content types with XMTP

<!--from https://github.com/xmtp/docs/blob/main/docs/client-sdk/content-types.md-->

All messages in XMTP are encoded with a **content type** to ensure interoperability and consistency of experience across the XMTP Network.

Message **payloads** are transported as a set of bytes. This means that payloads can carry any content type that a client supports, such as plaintext, JSON, or even non-text binary or media content.

The client interface allows developers to adopt new content types and put them to immediate use without going through a formal process. Other clients might choose to adopt those content types if they want to render those message types, but they can also rely on fall-back plaintext.

Fall-back plaintext is "alt text"-like description text that you can associate with original content if you are concerned that the receiving client might not be able to handle the original content. If the receiving client is unable to handle the original content, the receiving client displays the fall-back plaintext instead.

Two predefined content types come bundled with the client SDK:

1. `xmtp.org/text:1.0`, which defines a **default** `TextCodec` for plaintext content
2. `xtmp.org/composite:1.0`, which defines an **optional** `CompositeCodec` for multiple content types in a single message

The client SDK adopted these content types through the [XMTP Improvement Proposal](https://github.com/xmtp/XIPs/blob/main/XIPs/xip-0-purpose-process.md) process, which enables a [framework](https://github.com/xmtp/XIPs/blob/main/XIPs/xip-5-message-content-types.md) for community members to propose standards and achieve consensus about their adoption.

To learn more about content types, see [Different types of content](https://github.com/xmtp/xmtp-js/tree/0ec6b344cb69823e5c4c924f35d1262b51fa636e#different-types-of-content))

## Usage

You can use `xmtp-js` to specify and send a custom content type beyond the predefined `TextCodec` and `CompositeCodec` content types.

1. Specify a custom content type to enable during client initialization.

    ```typescript
    // Adding support for a fictional `xmtp.org/number` content type
    import { NumberCodec } from '@xmtp/xmtp-js'
    const xmtp = Client.create(wallet, { codecs: [new NumberCodec()] })
    ```

    This example enables a fictional "number" custom content type in the form of `NumberCodec`.

    The predefined `TextCodec` content type supports numbers in a text string, such as `"Pi is the number 3.14."` However, `TextCodec` doesn't support a number outside a text string, such as `3.14`. To handle this number, you can specify this "number" custom content type.

    This snippet registers the `NumberCodec` custom content type with the sending client. During the registration process, the sending client automatically associates the codec with the content type it says it supports. For example, `NumberCodec` might say that it supports the `ContentTypeNumber` content type.

2. Send a message using the specified custom content type and fall-back plaintext.

    ```typescript
    // Assuming NumberCodec can be used to encode numbers and is
    // identified with ContentTypeNumber, you can use it as follows.
    conversation.send(3.14, {
      contentType: ContentTypeNumber,
      contentFallback: '3.14'
    })
    ```

    This example sends a message using the fictional "number" custom content type, including fall-back plaintext.

    The receiving client uses the `contentType` value of `ContentTypeNumber` to identify the content type of the `3.14` message sent through the `send` API. If the receiving client supports the content type, it displays the message. If it doesn't support the content type, it displays the fall-back plaintext.

    To learn more about the `send` API, see [sendMessage](https://xmtp-js.pages.dev/classes/Client#sendMessage).

To learn more about sending new content types, see [Different content types](https://github.com/xmtp/xmtp-js/blob/4157fadd80bce80c8094135f3e47d3856515468f/README.md#different-types-of-content).
