---
sidebar_label: Broadcast
sidebar_position: 5
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# Send a broadcast message

Broadcasting with XMTP allows you to send a single message to multiple recipients, treating each message as a direct message (DM) from the sender's wallet address to each recipient's wallet address. This method is particularly useful for announcements or updates. However, it's important to note that each recipient wallet must be activated on the XMTP network to receive messages.

- **Network Activation**: Before sending a broadcast message, verify that each recipient's wallet is activated on the XMTP network with `canMessage`. Only activated wallets can receive and view messages.
- **Rate Limiting**: XMTP imposes rate limits to maintain network health and prevent spam. Familiarize yourself with these limits and design your message sending strategy to comply with them. [FAQ](/docs/faq#rate-limiting).
- **User Consent**: In accordance with data privacy laws, obtain explicit consent from users before sending them broadcast messages. [Read more](/docs/build/user-consent).

:::caution
Without explicit consent from the recipients, broadcast messages are more likely to be flagged as spam, significantly reducing their deliverability. [Read more](/docs/build/user-consent).
:::

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

- **Adherence to Rate Limits**: Understand and respect XMTP's [rate limits](/docs/faq#rate-limiting) to prevent network overload and ensure your messages are delivered smoothly.
- **Batch Processing**: Sending messages in batches can help manage rate limits effectively. Consider the timing and size of each batch to optimize delivery.
- **Error Handling**: Implement robust error handling to manage rate limiting responses from the network. This may include adjusting send rates or retrying failed messages.

:::info Handling rate-limiting
Explore our [repository](https://github.com/alexrisch/broadcaster-app) for concise strategies and code samples on high volume broadcast management, including batch processing, error handling, and rate limit adherence.
:::

---

### Best practices

- **Depending on where you’re based**, you could be subject to data privacy laws, including but not limited to GDPR and CCPA.

- **If your app sends broadcast messages to your users**, get user consent before sending them broadcast messages. For example, you can request this consent during onboarding. Here's some example text you can build upon:

  > (&nbsp;&nbsp;) **Yes**, I want to receive broadcast messages from &lt;app name&gt;.
  >
  > These messages may include updates, promotions, and other relevant information.
  >
  > You can unsubscribe at any time by adjusting your notification settings within the app or by replying “STOP” to a broadcast message.
  >
  > We value your privacy and will use your contact information only to send these broadcast messages.
  >
  > By clicking **Continue**, you confirm that you agree to receive broadcast messages from &lt;app name&gt;.
  >
  > (&nbsp;&nbsp;) **No**, I don’t want to receive broadcast messages from &lt;app name&gt;.
  >
  > [Cancel]&nbsp;&nbsp;&nbsp;[**Continue**]

- **If your app allows your customers to send broadcast messages to their users**, be sure to advise your customers to get their users' consent before sending them broadcast messages. For example, you can provide this guidance during onboarding. Here's some example text you can build upon:

  > By signing up to use this app, you agree to get consent from your users before sending them broadcast messages using this platform. When requesting user consent, let users know what kinds of message content they can expect to receive and how you'll use their contact information.
  >
  > Also be sure to provide users with a way to unsubscribe from your broadcast messages, such as via notification settings or by replying "STOP" to a broadcast message.

- **If your app stores a signature on a server to read and send XMTP messages on behalf of your customer**, such as automated broadcast messages, be sure to let your customer know. Ideally, your app should also periodically auto-delete signatures and provide a way for a customer to manually revoke their signature. For example, you can provide this guidance as a part of the XMTP connection flow. Here's some example text and UX you can build upon:

  For example:

  - Before connection:

    > You’ll be prompted to provide a signature that gives this app permission to read and send XMTP messages on your behalf. The signature will be securely stored and accessed only to execute your workflows. You’ll be able to revoke permission at any time using the Delete signature option that will appear here.

    ![Signature storage disclosure before connection](/img/sig-store-disclosure-connect.png)

  - After connection:

    > The signature you provided gives this app permission to read and send XMTP messages on your behalf. The signature is securely stored and accessed only to execute your workflows. Click **Delete signature** to revoke this permission and delete the signature from storage.

    ![Signature storage disclosure and delete after connection](/img/sig-store-disclosure-delete.png)
