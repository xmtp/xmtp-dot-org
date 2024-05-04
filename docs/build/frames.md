---
sidebar_label: Chat frames
sidebar_position: 12
description: Making Frames Interoperable
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# Chat Frames with XMTP

The XMTP community has implemeted ways to enhance user experience by supporting frames within XMTP applications. More details in this community post [Supporting Frames in XMTP](https://community.xmtp.org/t/supporting-frames-in-xmtp/535).

## Libraries

These are the foundational tools that allow developers to create, sign, and manage Frames created by Open Frames & XMTP

- [**@xmtp/frames-validator**](https://github.com/xmtp/xmtp-node-js-tools/blob/main/packages/frames-validator/): A set of tools for validating POST payloads from XMTP Frames
- [**@xmtp/frames-client**](https://github.com/xmtp/xmtp-web/tree/main/packages/frames-client): Library used by messaging apps to render xmtp frames.

### Frameworks

Popular frameworks have already integrated Open Frames into their stack:

<details><summary><b>OnChainKit</b></summary>

Discover how OnchainKit seamlessly incorporates XMTP payloads

**Metadata:**

```jsx
const frameMetadata = getFrameMetadata({
  /**
   * Frame metadata like Image, Buttons, Input, etc.
   */
  isOpenFrame: true,
  accepts: { xmtp: "vNext" },
});

export const metadata: Metadata = {
  /**
   * ...other metadata
   */
  other: {
    ...frameMetadata,
  },
};
```

**Validate incoming messages**

```jsx
import {
  isXmtpFrameRequest,
  getXmtpFrameMessage,
} from "@coinbase/onchainkit/xmtp";
/* ... */
async function getResponse(req: any): Promise<NextResponse> {
  const body: FrameRequest = await req.json();
  if (isXmtpFrameRequest(body)) {
    const { isValid, message } = await getXmtpFrameMessage(body);
    // ... do something with the message if isValid is true
    if (isValid) {
      const { verifiedWalletAddress } = message;
      // ... do something with the verifiedWalletAddress
    }
  } else {
    // ...
  }
}
```

- [OnChainKit](https://onchainkit.xyz/xmtp/introduction): Official OnchainKit documentation.
- [Quickstart](https://github.com/daria-github/a-frame-in-100-lines/): Onchainkit quickstart that integrates XMTP.

</details>

<details><summary><b>Frames.js</b></summary>

Learn more about the integration of XMTP payloads within FrameJS

**Metadata**

```jsx
const acceptedProtocols: ClientProtocolId[] = [
  {
    id: "xmtp",
    version: "vNext",
  },
  {
    id: "farcaster",
    version: "vNext",
  },
];
```

**Validate incoming messages**:

```jsx
let fid: number | undefined;
let walletAddress: string | undefined;

import {
  isXmtpFrameRequest,
  getXmtpFrameMessage,
} from "@coinbase/onchainkit/xmtp";
import { NextResponse } from "next/server";
import type { FrameRequest } from "@coinbase/onchainkit";

async function getResponse(req: any): Promise<NextResponse> {
  const body: FrameRequest = await req.json();
  if (isXmtpFrameRequest(body)) {
    const { isValid, message } = await getXmtpFrameMessage(body);
    walletAddress = frameMessage?.verifiedWalletAddress;
  } else {
    // ...
  }
}
```

- [Frames.js](https://framesjs.org/reference/js/xmtp): Official Framesjs Documentation.
- [Quickstart](https://github.com/framesjs/frames.js/tree/main/templates/next-starter-with-examples/): Onchainkit quickstart that integrates XMTP.

</details>

<details><summary><b>Frog</b></summary>

**Metadata**

To build a Frame with XMTP, you must first add XMTP metadata. This is done following the specifications of [OpenFrames](https://www.openframes.xy).

```jsx
const addMetaTags = (client: string, version?: string) => {
  // Follow the OpenFrames meta tags spec
  return {
    unstable_metaTags: [
      { property: `of:accepts`, content: version || "vNext" },
      { property: `of:accepts:${client}`, content: version || "vNext" },
    ],
  };
};

export const app = new Frog(addMetaTags("xmtp"));
```

**Validate incoming messages**:

Install the `@xmtp/frames-validator` package to validate incoming messages.

:::code-group

```bash [npm]
npm install @xmtp/frames-validator
```

```bash [yarn]
yarn add @xmtp/frames-validator
```

:::

Add the middleware to validate incoming messages.

```jsx
import { validateFramesPost } from "@xmtp/frames-validator";

const xmtpSupport = async (c: Context, next: Next) => {
  // Check if the request is a POST and relevant for XMTP processing
  if (c.req.method === "POST") {
    const requestBody = (await c.req.json().catch(() => {})) || {};
    if (requestBody?.clientProtocol?.includes("xmtp")) {
      c.set("client", "xmtp");
      const { verifiedWalletAddress } = await validateFramesPost(requestBody);
      c.set("verifiedWalletAddress", verifiedWalletAddress);
      console.log("verifiedWalletAddress", verifiedWalletAddress);
    } else {
      // Add farcaster check
      c.set("client", "farcaster");
    }
  }
  await next();
};

app.use(xmtpSupport);
```

**Access verified wallet address**:

```jsx
app.frame("/", (c) => {
  /* Get Frame variables */
  const { buttonValue, inputText, status } = c;

  // XMTP verified address
  const { verifiedWalletAddress } = c?.var || {};

  /* return */
});
```

- [Frog](https://frog.fm/concepts/middleware#xmtp-frames-middleware): Officia Frog XMTP documentation
- [Quickstart](https://github.com/fabriguespe/frog-starter): Frog open frame XMTP quickstart

</details>

### Tutorials

- [**Transaction Frames**](/docs/tutorials/transaction-frames.md): Create transactional frames compatible with messaging apps

### Clients

Some clients are fully XMTP compatible and can render Frames signing XMTP payloads:

- [**Converse**](https://converse.xyz): Converse is Frame compatible. Send your Frames through Converse.
- [**Dev Inbox**](https://github.com/xmtp/dev-inbox/): Engage with Frames firsthand by trying them on web.

:::info

### Open Frames

XMTP contributes to the Open Frames [standard](https://www.openframes.xyz/), fostering interoperability and open standards.

:::
