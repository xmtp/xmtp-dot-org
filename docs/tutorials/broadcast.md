---
sidebar_label: Broadcast
sidebar_position: 5
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# Send a broadcast message

Broadcasting with XMTP allows you to send a single message to multiple recipients, treating each message as a direct message (DM) from the sender's wallet address to each recipient's wallet address. This method is particularly useful for announcements or updates. However, it's important to note that each recipient wallet must be activated on the XMTP network to receive messages.

- **Network Activation**: Before sending a broadcast message, verify that each recipient's wallet is activated on the XMTP network with `canMessage`. Only activated wallets can receive and view messages.
- **Rate Limiting**: XMTP imposes rate limits to maintain network health and prevent spam. Familiarize yourself with these limits and design your message sending strategy to comply with them. [FAQ](/faq#rate-limiting).
- **User Consent**: In accordance with data privacy laws such as GDPR and CCPA, obtain explicit consent from users before sending them broadcast messages. Read more [allow/block](/docs/build/user-consent).

Here's a simplified example for sending a broadcast message with XMTP:

```jsx
import { ethers } from "ethers";
import { Client } from "@xmtp/xmtp-js";

// Function to send a broadcast message to a list of recipients
async function sendBroadcastMessage(recipients, message) {
  // In a real application, use the user's wallet
  const signer = ethers.Wallet.createRandom();
  const xmtp = await Client.create(signer);

  // Iterate over each recipient to send the message
  for (const recipient of recipients) {
    // Check if the recipient is activated on the XMTP network
    if (await xmtp.canMessage(recipient)) {
      const conversation = await xmtp.conversations.newConversation(recipient);
      await conversation.send(message);
      console.log(`Message successfully sent to ${recipient}`);
    } else {
      console.log(
        `Recipient ${recipient} is not activated on the XMTP network.`,
      );
    }
  }
}

// Example usage
const recipients = ["0x123...", "0x456..."]; // Replace with actual recipient addresses
const message = "Hello from XMTP!"; // Your broadcast message
sendBroadcastMessage(recipients, message);
```

### Managing high volume broadcasts

When planning to send broadcast messages at a high volume, it's crucial to consider XMTP's rate limits to ensure efficient and responsible use of the network. High volume broadcasts require careful strategy to avoid rate limiting issues and to maintain network health.

- **Adherence to Rate Limits**: Understand and respect XMTP's rate limits to prevent network overload and ensure your messages are delivered smoothly.
- **Batch Processing**: Sending messages in batches can help manage rate limits effectively. Consider the timing and size of each batch to optimize delivery.
- **Error Handling**: Implement robust error handling to manage rate limiting responses from the network. This may include adjusting send rates or retrying failed messages.
- **User Consent**: Ensure compliance with data privacy laws by obtaining explicit consent from users for broadcast messages, especially at high volumes.

:::info Handling rate-limiting
Explore our [repository](https://github.com/alexrisch/broadcaster-app) for concise strategies and code samples on high volume broadcast management, including batch processing, error handling, and rate limit adherence:
:::

### Best practices

- When sending broadcast messages, it's crucial to adhere to data privacy laws such as GDPR and CCPA. Ensure you have user consent before sending broadcast messages. This can be requested during onboarding with clear options for the user to opt-in or opt-out.

- For apps allowing customers to send broadcast messages, advise your customers to obtain consent from their users before sending messages. Provide clear guidelines on how to request this consent and how to unsubscribe from messages.

- If your app uses signatures to send XMTP messages on behalf of a customer, inform your customer about this. The app should auto-delete signatures periodically and allow manual revocation. Provide clear instructions and UI for users to understand and manage their consent and signature.
