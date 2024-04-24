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

---

## Third Party Tools

These tools already provide integration support interoperable Frames.

### Tooling

Third party frameworks and tooling who have already integrated XMTP signing into their offerings:

- [**OnChainKit**](https://onchainkit.xyz/xmtp/introduction): Discover how OnchainKit seamlessly incorporates XMTP payloads.
- [**Frames.js**](https://framesjs.org/reference/js/xmtp): Learn about the integration of XMTP payloads within FrameJS.

### Clients

Some clients are fully XMTP compatible and can render Frames signing XMTP payloads:

- [**XMTP.chat**](https://xmtp.chat/): Engage with Frames firsthand by trying them on web.
- [**Converse**](https://converse.xyz): Converse is Frame compatible. Send your Frames through Converse.

## Getting started

These are the foundational tools that allow developers to create, sign, and manage Frames. The protocol libraries are essential for interacting with the XMTP network at a lower level, handling the creation of frames, signing payloads, and managing frame actions. Key aspects include:

- [**Declare Protocol Compatibility**](#protocol-compatibility): Ensure your application can interact with Frames by declaring protocol compatibility.
- [**Manage requests**](#manage-requests): Checks if a URL in message content is suitable for frame processing.
- [**Validate incoming messages**](#validate-incoming-messages): Implements security measures to authenticate and secure frame actions, ensuring the integrity and origin of frame interactions.

### Protocol compatibility

In compliance with [Open Frames](https://github.com/open-frames/standard/blob/v0.0.1/README.md), Use a meta tag in your frame's HTML to declare the client protocols your frame supports.

```html
<meta property="of:accepts:xmtp" content="vNext" />
```

This informs client applications about the protocols your frame can interact with.

### Manage requests

These packages enable your frame to send, receive requests across different protocols.

<Tabs >
<TabItem value="npm" label="npm" >

```bash
yarn install @xmtp/frames-client
```

</TabItem>
<TabItem value="yarn" label="Yarn" >

```bash
yarn add @xmtp/frames-client
```

</TabItem>
<TabItem value="bun" label="bun" >

Currently, Bun does not offer full compatibility with XMTP. It is recommended to use Yarn 4 as an alternative to prevent any unforeseen issues.

</TabItem>
</Tabs>

```jsx
const xmtpClient = await Client.create(wallet);
const framesClient = new FramesClient(xmtpClient);

const frameUrl = "https://www.myframe.xyz";

// Read data from a frame
const frameMetadata = await framesClient.proxy.readMetadata(frameUrl);

// Get a proxied image URL, which you can use directly in an <image> tag
const imageUrl = framesClient.proxy.mediaUrl(
  frameMetadata.metaTags["fc:frame:image"],
);

// Handle a click to button 2 from a conversation with topic "/xmtp/0/123" and participant addresses "abc" and "xyz"
const payload = await signFrameAction({
  frameUrl,
  buttonIndex: 2,
  conversationTopic: "/xmtp/0/123",
  participantAccountAddresses: ["abc", "xyz"],
});

// If the button action type was `post`
const updatedFrameMetadata = await framesClient.proxy.post(frameUrl, payload);
// If the button action type was `post_redirect`
const { redirectedTo } = await framesClient.proxy.postRedirect(
  frameUrl,
  payload,
);
```

### Validate incoming messages

To start, add the necessary XMTP packages to your project:

<Tabs >
<TabItem value="npm" label="npm" >

```bash
yarn install @xmtp/frames-validator
```

</TabItem>
<TabItem value="yarn" label="Yarn" >

```bash
yarn add @xmtp/frames-validator
```

</TabItem>
<TabItem value="bun" label="bun" >

Currently, Bun does not offer full compatibility with XMTP. It is recommended to use Yarn 4 as an alternative to prevent any unforeseen issues.

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
