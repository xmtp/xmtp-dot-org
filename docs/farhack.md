---
sidebar_label: FarHack
sidebar_position: 4
---

# FarHack 🟣

![](/img/farhack.png)

## Bounties

---

### 🤖 **Best Use of a Farcaster Bot with XMTP** - $500

This prize goes to the team that most effectively creates a Bot that uses Farcaster in a meaninful way.

**Qualification Requirements:**

- Develop a Farcaster bot that utilizes XMTP tooling

**Resources**:

- [BotKit](https://github.com/xmtp/botkit)

### 🖼️ **Best Open Frame Compatible Frame** - $500

This prize will be awarded to the developer or team that creates the most innovative and engaging frame compatible with the Open Frame.

**Qualification Requirements:**

- Develop a frame that adheres to Open Frame [specifications](https://github.com/open-frames/awesome-open-frames)
- Send your Frame through [Converse](https://converse.xyz/dm/hi.xmtp.eth) to `hi.xmtp.eth`

**Resources**:

- [Onchain Kit](https://github.com/xmtp/botkit)
- [FramesJS](https://github.com/xmtp/botkit)
- [Frog](https://onchainkit.xyz/xmtp/introduction)

<details className="fguespe"><summary>🔔 Best Use of XMTP to Send Notifications - $500</summary>

Implement a Frame or Bot that sends notifications through XMTP.

**Qualification Requirements:**

<details><summary>Send notifications with XMTP</summary>

```jsx
import { ethers } from "ethers";
import { Client } from "@xmtp/xmtp-js";

// Function to send a broadcast message to a list of recipients
async function sendNotification(recipient, message) {
  // In a real application, use the user's wallet
  const signer = ethers.Wallet.createRandom();
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
sendNotification("Hello from Farcaster!", ["0x123..."]);
```

</details>
</details>

### More Resources

- [Awesome XMTP ✨](https://github.com/xmtp/awesome-xmtp)
- [Bot Kit](https://github.com/fabriguespe/botkit)
- [Awesome Open Frames✨](https://github.com/open-frames/awesome-open-frames)
