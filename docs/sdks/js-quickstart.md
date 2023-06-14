---
sidebar_label: JavaScript
sidebar_position: 1
toc_max_heading_level: 4
description: "The XMTP client SDK for JavaScript (xmtp-js) provides a TypeScript implementation of an XMTP message API client (client) for use with JavaScript and React applications."
---

# JavaScript SDK

The [JavaScript XMTP client SDK](https://github.com/xmtp/xmtp-js) (`xmtp-js`) provides a TypeScript implementation of an XMTP message API client (client) for use with JavaScript and React applications.

Build with this SDK to provide messaging between blockchain wallet addresses, including DMs, notifications, announcements, and more.

`xmtp-js` was included in a [security assessment](https://xmtp.org/assets/files/REP-final-20230207T000355Z-3825cbc68c115f4ec81f3b1d53a24fce.pdf) prepared by [Certik](https://www.certik.com/company/about).

To learn more about XMTP and get answers to frequently asked questions, see [FAQ about XMTP](/docs/concepts/faq).

### Example apps built with `xmtp-js`

- **XMTP Quickstart React app**: Provides a basic messaging app demonstrating core capabilities of the SDK. The app is intentionally built with lightweight code to help make it easier to parse and start learning to build with XMTP.

  - [Try the app](https://xmtp-quickstart-react.vercel.app/)
  - [View the repo](https://github.com/xmtp/xmtp-quickstart-react)

- **XMTP Inbox app**: Provides a messaging app demonstrating core and advanced capabilities of the SDK. The app aims to showcase innovative ways of building with XMTP.
  - [Try the app](https://xmtp.chat/inbox)
  - [View the repo](https://github.com/xmtp-labs/xmtp-inbox-web)

## Reference docs

:::tip View the reference

Access the `xmtp-js` client SDK [reference documentation](https://xmtp-js.pages.dev/modules).

:::

## Install

```bash
npm install @xmtp/xmtp-js
```

## Handle different types of content

All send functions support `SendOptions` as an optional parameter. The `contentType` option allows specifying different types of content than the default simple string standard content type, which is identified with content type identifier `ContentTypeText`.

To learn more about content types, see [Content types with XMTP](/docs/concepts/content-types).

Support for other types of content can be added by registering additional `ContentCodecs` with the `Client`. Every codec is associated with a content type identifier, `ContentTypeId`, which is used to signal to the client which codec should be used to process the content that is being sent or received.

For example, see the [Codecs](https://github.com/xmtp/xmtp-js/tree/main/src/codecs) available in `xmtp-js`.

If there is a concern that the recipient may not be able to handle a non-standard content type, the sender can use the `contentFallback` option to provide a string that describes the content being sent. If the recipient fails to decode the original content, the fallback will replace it and can be used to inform the recipient what the original content was.

```ts
// Assuming we've loaded a fictional NumberCodec that can be used to encode numbers,
// and is identified with ContentTypeNumber, we can use it as follows.
xmtp.registerCodec:(new NumberCodec())
conversation.send(3.14, {
  contentType: ContentTypeNumber,
  contentFallback: 'sending you a pie'
})
```

Additional codecs can be configured through the `ClientOptions` parameter of `Client.create`. The `codecs` option is a list of codec instances that should be added to the default set of codecs (currently only the `TextCodec`). If a codec is added for a content type that is already in the default set, it will replace the original codec.

```ts
// Adding support for `xmtp.org/composite` content type
import { CompositeCodec } from "@xmtp/xmtp-js";
const xmtp = Client.create(wallet, { codecs: [new CompositeCodec()] });
```

To learn more about how to build a custom content type, see [Build a custom content type](/docs/concepts/content-types#build-a-custom-content-type).

Custom codecs and content types may be proposed as interoperable standards through XRCs. To learn about the custom content type proposal process, see [XIP-5](https://github.com/xmtp/XIPs/blob/main/XIPs/xip-5-message-content-types.md).

## Breaking revisions

Because `xmtp-js` is in active development, you should expect breaking revisions that might require you to adopt the latest SDK release to enable your app to continue working as expected.

XMTP communicates about breaking revisions in the [XMTP Discord community](https://discord.gg/xmtp), providing as much advance notice as possible. Additionally, breaking revisions in an `xmtp-js` release are described on the [Releases page](https://github.com/xmtp/xmtp-js/releases).

### Deprecation schedule

Older versions of the SDK will eventually be deprecated, which means:

1. The network will not support and will eventually actively reject connections from clients using deprecated versions.
2. Bugs will not be fixed in deprecated versions.

The following table provides the deprecation schedule:

| Announced &nbsp; | Effective &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; | Minimum version | Rationale                                                                                                              |
| ---------------- | ------------------------------------------------------------------------------- | --------------- | ---------------------------------------------------------------------------------------------------------------------- |
| 2022-08-18       | 2022-11-08                                                                      | v6.0.0          | The XMTP network will stop supporting the Waku/libp2p-based client interface in favor of the new GRPC-based interface. |

Issues and PRs are welcome in accordance with XMTP [contribution guidelines](https://github.com/xmtp/xmtp-js/blob/main/CONTRIBUTING.md).
