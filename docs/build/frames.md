---
sidebar_label: Chat frames
sidebar_position: 12
description: Making Frames Interoperable
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# Render Chat Frames with XMTP

The XMTP community has been actively discussing and implementing ways to enhance user experience by supporting frames within XMTP applications. An effort in this direction is detailed in a community post [Supporting Frames in XMTP](https://community.xmtp.org/t/supporting-frames-in-xmtp/535).

<video controls src="https://github.com/fabriguespe/xmtp-quickstart-frames/assets/1447073/48c305e8-0212-450b-9a00-b57acb8d14af" width="100%" type="video/mp4">
Your browser does not support the video tag.
</video>

_This video shows how its implemented in [xmtp.chat](https://xmtp.chat/inbox)_

## Introduction

These are the foundational tools that allow developers to create, sign, and manage Frames. The protocol libraries are essential for interacting with the XMTP network at a lower level, handling the creation of frames, signing payloads, and managing frame actions. Key aspects include:

- [**Install Required Packages**](#install-required-packages): To begin, add the necessary XMTP packages to your project.
- [**Declare Protocol Compatibility**](#declare-protocol-compatibility): Ensure your application can interact with Frames by declaring protocol compatibility.
- [**Validate Incoming Messages**](#Validate-Incoming-Messages): Checks if a URL in message content is suitable for frame processing.
- [**Enable Secure Communication**](#enable-secure-communication): Implements security measures to authenticate and secure frame actions, ensuring the integrity and origin of frame interactions.
- [**Rendering Chat Frames in your application**](/docs/tutorials/render-frames): This tutorial covers the practical aspects of rendering these frames within an application.
- [**Exploring Chat Frames Use Cases**](/docs/use-cases/frames): Dive into a comprehensive exploration of how Frames can be innovatively applied across different sectors for inspiration.
- [**OnChainKit Documentation**](https://onchainkit.xyz/xmtp/introduction): Discover how OnchainKit seamlessly incorporates XMTP payloads.
- [**Frames.js Documentation**](https://framesjs.org/reference/js/xmtp): Learn about the integration of XMTP payloads within FrameJS.
- [**Experience XMTP on xmtp.chat**](https://xmtp.chat/): Engage with Frames firsthand by trying them on the official XMTP client platform.
- [**Open Frames Initiative**](https://github.com/open-frames/standard/blob/v0.0.1/README.md): XMTP contributes to the Open Frames standard, fostering interoperability and open standards.

These are the foundational tools that allow developers to create, sign, and manage Chat frames. The protocol libraries are essential for interacting with the XMTP network at a lower level, handling the creation of frames, signing payloads, and managing frame actions. Key aspects include:

### Protocol compatibility

In compliance with [Open Frames](https://github.com/open-frames/standard/blob/v0.0.1/README.md), Use a meta tag in your frame's HTML to declare the client protocols your frame supports.

```html
<meta property="of:accepts:xmtp" content="2024-02-01" />
```

This informs client applications about the protocols your frame can interact with.

### Manage requests

These packages enable your frame to send, receive requests across different protocols.

<Tabs >
<TabItem value="npm" label="npm" >

```bash
npm install @xmtp/frames-client
```

</TabItem>
<TabItem value="yarn" label="Yarn" >

```bash
yarn add @xmtp/frames-client
```

</TabItem>
<TabItem value="bun" label="bun" >

```bash
bun install @xmtp/frames-client
```

</TabItem>
</Tabs>

### Validate incoming messages

To start, add the necessary XMTP packages to your project:

<Tabs >
<TabItem value="npm" label="npm" >

```bash
npm install @xmtp/frames-validator
```

</TabItem>
<TabItem value="yarn" label="Yarn" >

```bash
yarn add @xmtp/frames-validator
```

</TabItem>
<TabItem value="bun" label="bun" >

```bash
bun install @xmtp/frames-validator
```

</TabItem>
</Tabs>

Implement message validation using `@xmtp/frames-validator` to ensure the authenticity of incoming POST requests. This step is crucial for security, especially when dealing with multiple protocols.

```tsx
import { validateFramesPost } from "@xmtp/frames-validator";

export function handler(requestBody: any) {
  if (requestBody.clientProtocol.startsWith("xmtp")) {
    const { verifiedWalletAddress } = await validateFramesPost(requestBody);
    // Handle verified XMTP payload
  } else {
    // Handle Farcaster or other protocol payloads
  }
}
```

Chat Frames are also supported in [`onchainkit`](https://onchainkit.xyz/xmtp/introduction).
