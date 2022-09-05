---
sidebar_label: Use content types
sidebar_position: 1
---

# Use content types

All messages in XMTP are encoded with a **content type** to ensure interoperability and consistency of experience across the XMTP network.

To learn more about content types, see [Content types with XMTP](/docs/dev-concepts/content-types).

Two predefined content types come bundled with the XMTP client SDK:

1. `xmtp.org/text:1.0`, which defines a **default** `TextCodec` for plaintext content
2. `xtmp.org/composite:1.0`, which defines an **optional** `CompositeCodec` for multiple content types in a single message

You can use `xmtp-js` to specify and send a custom content type beyond the predefined `TextCodec` and `CompositeCodec` content types.

**To send a custom content type:**

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
