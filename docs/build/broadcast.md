---
sidebar_label: Broadcast
sidebar_position: 9
---

# Send a broadcast message with XMTP

You can send a broadcast message (1:many message or announcement) with XMTP. The recipient sees the message as a DM from the sending wallet address.

:::tip

If your app stores a signature to read and send XMTP messages on behalf of a user, be sure to let users know. As a best practice, your app should also provide a way for a user to delete their signature. For example disclosure text and UI patterns, see [Disclose signature storage](/docs/build/start-building#disclose-signature-storage).

:::

1. Use the bulk query `canMessage` method to identify the wallet addresses that are activated on the XMTP network.
2. Send the message to all of the activated wallet addresses.

For example:

```js
const ethers = require("ethers");
const { Client } = require("@xmtp/xmtp-js");

async function main() {
  //Create a random wallet for example purposes. On the frontend you should replace it with the user's wallet (metamask, rainbow, etc)
  const wallet = ethers.Wallet.createRandom();
  //Initialize the xmtp client
  const xmtp = await Client.create(wallet);
  console.log("Broadcasting from: ", xmtp.address);

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
