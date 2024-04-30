---
sidebar_label: Chat frames
sidebar_position: 12
description: Making Frames Interoperable
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# Chat Frames with XMTP

The XMTP community has been actively discussing and implementing ways to enhance user experience by supporting frames within XMTP applications. An effort in this direction is detailed in a community post [Supporting Frames in XMTP](https://community.xmtp.org/t/supporting-frames-in-xmtp/535).

:::info Open Frames

XMTP contributes to the Open Frames standard, fostering interoperability and open standards.

- [**Open Frames Spec**](https://github.com/open-frames/standard/blob/v0.0.1/README.md): Make Farcaster Frames interoperable.
- [**Awesome Open Frames**](https://github.com/open-frames/awesome-open-frames.git): Curated list of Open Frames compatible Frames.

:::

### Frameworks

Popular frameworks have already integrated Open Frames into their stack:

- [**OnChainKit**](https://onchainkit.xyz/xmtp/introduction): Discover how OnchainKit seamlessly incorporates XMTP payloads.
- [**Frames.js**](https://framesjs.org/reference/js/xmtp): Learn about the integration of XMTP payloads within FrameJS.
- [**Frog**](https://frog.fm/getting-started): There is an active [**discussion**](https://github.com/wevm/frog/discussions/51) to integrate Open Frames.

### Clients

Some clients are fully XMTP compatible and can render Frames signing XMTP payloads:

- [**Converse**](https://converse.xyz): Converse is Frame compatible. Send your Frames through Converse.
- [**Dev Inbox**](https://github.com/xmtp/dev-inbox/): Engage with Frames firsthand by trying them on web.

## Libraries

These are the foundational tools that allow developers to create, sign, and manage Frames created by Open Frames & XMTP

- [**@xmtp/frames-client**](https://github.com/xmtp/xmtp-web/tree/main/packages/frames-client): Library that will help you render frames in your messaging app.
- [**@xmtp/frames-validator**](https://github.com/xmtp/xmtp-web/tree/main/packages/frames-client): A set of tools for validating POST payloads from XMTP Frames
