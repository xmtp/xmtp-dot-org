---
sidebar_label: Broadcast
sidebar_position: 5
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# Send a broadcast message

You can send a broadcast message (1:many message or announcement) with XMTP. The recipient sees the message as a DM from the sending wallet address. Be sure to follow these [best practices for broadcast messages](#best-practices-for-broadcast-messages).

1. Use the bulk query `canMessage` method to identify the wallet addresses that are activated on the XMTP network.
2. Send the message to all of the activated wallet addresses.

For example:

<Tabs groupId="sdk-langs">
<TabItem value="js" label="JavaScript"  attributes={{className: "js_tab"}}>

```js
const ethers = require("ethers");
const { Client } = require("@xmtp/xmtp-js");

async function main() {
  //Create a random wallet for example purposes. On the frontend you should replace it with the user's wallet (metamask, rainbow, etc)
  const wallet = ethers.Wallet.createRandom();
  //Initialize the xmtp client
  const xmtp = await Client.create(wallet, { env: "dev" });
  console.log("Broadcasting from: ", xmtp.address);

  //In this example we are going to broadcast to the GM_BOT wallet (already activated) and a random wallet (not activated)
  const GM_BOT = "0x937C0d4a6294cdfa575de17382c7076b579DC176";
  const test = ethers.Wallet.createRandom();
  const broadcasts_array = [GM_BOT, test.address];

  //Querying the activation status of the wallets
  const broadcasts_canMessage = await xmtp.canMessage(broadcasts_array);
  for (let i = 0; i < broadcasts_array.length; i++) {
    //Checking the activation status of each wallet
    const wallet = broadcasts_array[i];
    const canMessage = broadcasts_canMessage[i];
    console.log(wallet, canMessage);
    if (broadcasts_canMessage[i]) {
      //If activated, start
      const conversation = await xmtp.conversations.newConversation(wallet);
      // Send a message
      const sent = await conversation.send("gm");
    }
  }
}
main();
```

</TabItem>
<TabItem value="rn" label="React Native"  attributes={{className: "rn_tab"}}>

```tsx
const ethers = require("ethers");
const { Client } = require("@xmtp/xmtp-react-native");

async function main() {
  //Create a random wallet for example purposes. On the frontend you should replace it with the user's wallet (metamask, rainbow, etc)
  //Initialize the xmtp client
  const xmtp = await XMTP.Client.createRandom("dev");

  //In this example we are going to broadcast to the GM_BOT wallet (already activated) and a random wallet (not activated)
  const GM_BOT = "0x937C0d4a6294cdfa575de17382c7076b579DC176";
  const test = ethers.Wallet.createRandom();
  const broadcasts_array = [GM_BOT, test.address];

  //Querying the activation status of the wallets
  const broadcasts_canMessage = await Client.canMessage(broadcasts_array);
  for (let i = 0; i < broadcasts_array.length; i++) {
    //Checking the activation status of each wallet
    const wallet = broadcasts_array[i];
    const canMessage = broadcasts_canMessage[i];
    if (broadcasts_canMessage[i]) {
      //If activated, start
      const conversation = await xmtp.conversations.newConversation(wallet);
      // Send a message
      const sent = await conversation.send("gm");
    }
  }
}
main();
```

</TabItem>
</Tabs>

## Best practices for broadcast messages

- **Depending on where you’re based**, you could be subject to data privacy laws, including but not limited to GDPR and CCPA.

- **If your app sends broadcast messages to your users**, be sure to get user consent before sending them broadcast messages. For example, you can request this consent during onboarding. Here's some example text you can build upon:

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
