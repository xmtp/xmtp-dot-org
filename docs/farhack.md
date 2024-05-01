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

This prize goes to the best Frame compatible with messaging apps, utilizing the Open Frames [standard](https://github.com/open-frames/awesome-open-frames).

**Requirements:**

<details><summary>Integrate with Open Frames</summary>

**Frameworks**

Popular frameworks have already integrated Open Frames into their stacks:

- [OnChainKit](https://onchainkit.xyz/xmtp/introduction): Discover how OnchainKit seamlessly incorporates XMTP payloads.
  - [Quickstart](https://github.com/daria-github/a-frame-in-100-lines/): Onchainkit quickstart that integrates XMTP.
- [Frames.js](https://framesjs.org/reference/js/xmtp): Learn about the integration of XMTP payloads within FrameJS.
  - [Quickstart](https://github.com/framesjs/frames.js/tree/main/templates/next-starter-with-examples/): Onchainkit quickstart that integrates XMTP.
- [Frog](https://frog.fm/getting-started): There is an active [discussion](https://github.com/wevm/frog/discussions/51) to integrate Open Frames.

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
