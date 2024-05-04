---
sidebar_label: FarHack
sidebar_position: 4
description: Making Frames Interoperable
---

# FarHack

Welcome to the ultimate Farcaster hackathon to learn how to build innovative Frames and Bots with XMTP. Happy coding 🫡

![](./build/img/farhack/farhack.png)

## Prizes 🏆

<details><summary>🤖 <b>Best use of an XMTP Bot with Farcaster</b> - $500</summary>

This prize goes to the team that most effectively creates a Bot that uses Farcaster in a meaningful way.

**Requirements:**

<details><summary>Develop a Farcaster Bot using XMTP libraries</summary>

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

  // Read or write to Farcaster

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

</details>

<details><summary>🖼️ <b>Best Chat Frame</b> - $500</summary>

This prize goes to the best Frame compatible with messaging apps.

**Requirements:**

<details><summary>Integrate your Frame with XMTP</summary>

**Metadata**

In compliance with [Open Frames](https://www.openframes.xyz/), Use a meta tag in your frame's HTML to declare the client protocols your frame supports.

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
import { getXmtpFrameMessage, isXmtpFrameActionPayload } from "frames.js/xmtp";

let fid: number | undefined;
let walletAddress: string | undefined;

if (isXmtpFrameActionPayload(previousFrame.postBody)) {
  const frameMessage = await getXmtpFrameMessage(previousFrame.postBody);
  const { verifiedWalletAddress } = frameMessage;
  // Do something with xmtp wallet address
} else {
  // Do something else
}
```

- [Frames.js](https://framesjs.org/reference/js/xmtp): Official Framesjs Documentation.
- [Quickstart](https://github.com/framesjs/frames.js/tree/main/templates/next-starter-with-examples/): Frames.js example that integrates XMTP.

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

- Send your Frame through [Converse](https://converse.xyz/dm/hi.xmtp.eth) to `hi.xmtp.eth`.

</details>

<details><summary>🔔 <b>Best Use of XMTP to Send Notifications</b> - $500</summary>

Implement a Frame or Bot that sends notifications through XMTP.

**Requirements:**

<details><summary>Send notifications using XMTP libraries</summary>

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
sendNotification("Hello from Farcaster!", "0x123...");
```

</details>

</details>

---

## Messaging apps 💬

Test the bots in messaging apps

- [Converse](https://getconverse.app/): Own your conversations. Works with Frames (Frame Transactions TBA).
- [Coinbase Wallet](https://www.coinbase.com/wallet): Your key to the world of crypto. (Frame support TBA).
- [dev-inbox](https://dev-dev-inbox.vercel.app/): Web messaging client (Frame Transactions TBA).

## Identities 🥷🏻

![](https://github.com/xmtp/awesome-xmtp/assets/1447073/9bb4f8c2-321e-4b6d-b52e-2105d69c4d47)

Learn about the 2 million identities part of XMTP by visiting the [Dune dashboard](https://dune.com/xmtp_team/dash).

## Examples 🔥

See live examples in the [Awesome XMTP ⭐️](https://github.com/xmtp/awesome-xmtp) repo.
