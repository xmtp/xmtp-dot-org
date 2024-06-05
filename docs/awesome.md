---
sidebar_label: Onchain Summer ☀️
sidebar_position: 4
description: Making Frames Interoperable
---

# Onchain Summer ☀️

🚀 XMTP is offering $4500 in bounties for the Onchain Summer buildathon!

🏆 **Best XMTP Bot - $1500**

🖼️ **Best Chat Frame - $1500**

🔔 **Best Use of XMTP for Notifications - $1500**

![](./img/onchaimsummer.jpeg)

> Enhance your messaging experience this summer by integrating bots with frames, and see them in action in the Coinbase Wallet! 😎

Here are some examples to get you inspired:

<div className="apparelbot">

- `apparelbot.eth`: Allows users to browse and purchase limited edition digital apparel as NFTs. Each item is a unique collectible with proof of ownership.

```plaintext
User: Show me the latest apparel.
Bot: Here are the latest items: [Frame] NFT Jacket - 0.02 ETH
User: Buy NFT Jacket.
Bot: Transaction complete! Your NFT Jacket is now in your wallet.
```

- `fantasysports.eth`: Users can create fantasy sports teams, submit selections, and receive real-time onchain updates and scores.

```plaintext
User: Show my team.
Bot: Your team: Player 1, Player 2, Player 3.
User: Update Player 1 to Player 5.
Bot: Your team is now updated: Player 5, Player 2, Player 3.
User: Show latest scores [Frame]
Bot: Latest scores: Team A - 3, Team B - 1.
```

- `retrogames.eth` Users can play classic retro games with blockchain-based scoring and achievements.

```plaintext
User: Start Pac-Man.
Bot: [Frame] Use the controls to play Pac-Man.
User: [Plays Game]
Bot: Your score: 1500. New high score!
```

- `musicdrop.eth`: Artists can drop exclusive tracks onchain, ensuring unique access for fans.

```plaintext
User: Show latest drops.
Bot: Latest drops: [Frame] New Song by Artist - 0.01 ETH.
User: Buy New Song.
Bot: Transaction complete! Your exclusive track is now in your wallet.
```

</div>

---

### Awesome ✨

> 💬 **Try it:** Message `awesome.hi.xmtp.eth`

See live examples in the [Awesome XMTP ⭐️](https://github.com/xmtp/awesome-xmtp) repo.

<details><summary>🤖 <b>Bots</b></summary>

To create a new XMTP bot using [BotKit](https://github.com/xmtp/botkit) cli tool:

```bash
npx create-xmtp-bot <bot-name>
cd <bot-name>
```

This is a code example of a bot that replies `gm` :

```tsx
import { run, HandlerContext } from "@xmtp/botkit";

run(async (context: HandlerContext) => {
  // Get the message and the address from the sender
  const { content, senderAddress } = context.message;

  // Show a frame or talk to the user

  // To reply, just call `reply` on the HandlerContext.
  await context.reply("gm");
});
```

#### Resources

- [BotKit](https://github.com/xmtp/botkit): Tooling for creating bots with XMTP.
- [Tutorial](/docs/tutorials/bots.md): Learn how to build and deploy a bot.
- [Conversational](https://github.com/xmtp/botkit/tree/main/examples/conversational): Drive retention with conversations and subscriptions.
- [GPT](https://github.com/xmtp/botkit/tree/main/examples/gpt): Relay messages through Open AI APIs.

</details>

<details><summary>🖼️ <b>Frames</b></summary>

**Metadata**

In compliance with [Open Frames](https://github.com/open-frames/standard/blob/v0.0.1/README.md), use a meta tag in your frame's HTML to declare the client protocols your frame supports.

```html
<meta property="of:accepts:xmtp" content="vNext" />
```

**Validate incoming messages**

Implement message validation using `@xmtp/frames-validator` to ensure the authenticity of incoming POST requests.

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

**Frameworks**

Popular frameworks have already integrated Open Frames into their stacks:

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
- [Quickstart](https://github.com/daria-github/a-frame-in-100-lines/): OnchainKit quickstart that integrates XMTP.

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
- [Quickstart](https://github.com/framesjs/frames.js/tree/main/templates/next-starter-with-examples/): OnchainKit quickstart that integrates XMTP.

</details>

<details><summary><b>Frog</b></summary>

**Metadata**

To build a Frame with XMTP, you must first add XMTP metadata.

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

```bash
npm install @xmtp/frames-validator
```

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

- [Frog](https://frog.fm/concepts/middleware#xmtp-frames-middleware): XMTP Frog official middleware
- [Quickstart](https://github.com/fabriguespe/frog-starter): Frog open frame XMTP quickstart

</details>

</details>

<details><summary>🔔 <b>Notifications</b></summary>

Implement a Frame or Bot that sends notifications through XMTP.

**Install the js sdk:**

```tsx
yarn add @xmtp/xmtp-js ethers
```

**Send notification:**

```tsx
import { Wallet } from "ethers";
import { Client } from "@xmtp/xmtp-js";

// Function to send a broadcast message to a list of recipients
async function sendNotification(recipient, message) {
  // In a real application, use your wallet
  const signer = new Wallet("private key");
  const xmtp = await Client.create(signer);

  // Check if the recipient is activated on the XMTP network
  if (await xmtp.canMessage(recipient)) {
    const conversation = await xmtp.conversations.newConversation(recipient);
    await conversation.send(message);
    console.log(`Message successfully sent to ${recipient}`);
  } else {
    console.log(`Recipient ${recipient} is not activated on the XMTP network.`);
  }
}
// Example usage
sendNotification("Hello from XMTP!", "0x123...");
```

</details>

---

### Clients

Some clients are fully XMTP compatible and can render Frames signing XMTP payloads:

- [**Converse**](https://converse.xyz): Converse is Frame compatible. Send your Frames through Converse.
- [**Frames Quickstart**](https://github.com/xmtp/dev-inbox/): Engage with Frames firsthand by trying them on web.

## Identities 🥷🏻

![](https://github.com/xmtp/awesome-xmtp/assets/1447073/9bb4f8c2-321e-4b6d-b52e-2105d69c4d47)

Learn about the 2 million identities part of XMTP by visiting the [Dune dashboard](https://dune.com/xmtp_team/dash).
