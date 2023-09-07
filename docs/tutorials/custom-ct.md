---
sidebar_label: Custom content type
sidebar_position: 10
toc_max_heading_level: 4
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# Build custom content types

In these tutorials, we are going to learn how to build custom content types for the XMTP framework. 

We will start with a basic example of a custom content type that multiplies two numbers and then we will move on to a more advanced example of a custom content type that sends transaction hashes on the polygon blockchain. The advanced example will also show how to use the custom content type to render the transaction hash.

## Basic: Multiply numbers

This tutorial will walk you through the process of building a custom content type dedicated to multiplying numbers. For demonstration purposes, we'll create a `MultiplyCodec` custom content type.

### Step 1: Create the MultiplyCodec content type

Let's start by creating a new file `xmtp-content-type-multiply-number.tsx`. This file will host the `MultiplyCodec` class which is responsible for encoding and decoding our custom content type.

<Tabs groupId="sdk-langs">
<TabItem value="js" label="JavaScript"  attributes={{className: "js_tab"}}>

```jsx
import { ContentTypeId } from "@xmtp/xmtp-js";

// Create a unique identifier for your content type
const ContentTypeMultiplyNumbers = new ContentTypeId({
  authorityId: "your.domain",
  typeId: "multiply-number",
  versionMajor: 1,
  versionMinor: 0,
});

// Define the MultiplyCodec class
class ContentTypeMultiplyNumberCodec {
  get contentType() {
    return ContentTypeMultiplyNumbers;
  }

  // The encode method accepts an object with two numbers (a, b) and encodes it as a byte array
  encode({ a, b }) {
    return {
      type: ContentTypeMultiplyNumbers,
      parameters: {},
      content: new TextEncoder().encode(JSON.stringify({ a, b })),
    };
  }

  // The decode method decodes the byte array, parses the string into numbers (a, b), and returns their product
  decode(content: { content: any }) {
    const uint8Array = content.content;
    const { a, b } = JSON.parse(new TextDecoder().decode(uint8Array));
    return a * b;
  }
}
```

</TabItem></Tabs>

### Step 2: Use the custom content type

Once the `MultiplyCodec` content type is defined, it's time to put it to use.

#### Import and register the custom content type

Begin by importing and registering the `MultiplyCodec` content type.

<Tabs groupId="sdk-langs">
<TabItem value="js" label="JavaScript"  attributes={{className: "js_tab"}}>

```jsx
import {
  ContentTypeMultiplyNumber,
  ContentTypeMultiplyNumberCodec,
} from "./xmtp-content-type-multiply-number";

const xmtp = await Client.create(wallet, {
  env: "dev",
});
xmtp.registerCodec(new ContentTypeMultiplyNumberCodec());
```

</TabItem></Tabs>

#### Send a message using the custom content type

With your custom content type registered, you can now use it to send messages. This code snippet shows how to use the `MultiplyCodec` content type to perform multiplication operations.

<Tabs groupId="sdk-langs">
<TabItem value="js" label="JavaScript"  attributes={{className: "js_tab"}}>

```jsx
const numbersToMultiply = { a: 3, b: 7 };

conversation.send(numbersToMultiply, {
  contentType: ContentTypeMultiplyNumbers,
});
```

</TabItem></Tabs>

#### Render the custom content type

To make use of the result of the multiplication operation, you need to add a renderer for your custom content type.

<Tabs groupId="sdk-langs">
<TabItem value="js" label="JavaScript"  attributes={{className: "js_tab"}}>

```jsx
if (message.contentType.sameAs(ContentTypeMultiplyNumber)) {
  return message.content; // 21
}
```

</TabItem></Tabs>

Keep in mind that any other application that intends to use your custom content type must implement it as per your definition.

If your `MultiplyCodec` content type generates interest within the developer community, consider proposing it as a standard through the [XIP process](/docs/concepts/xips).

To sum up, creating a custom content type opens up new avenues for handling data within the XMTP framework, giving you the power to manage data in a more personalized or specialized way.

## Advanced: Send token transaction hashes

This tutorial will walk you through the process of building a custom content type dedicated to send transaction hashes on the Polygon blockchain.

### Step 1: Create the TransactionHash content type

Let's start by creating a new file `xmtp-content-type-transaction-hash.tsx`. This file will host the `TransactionHash` class which is responsible for encoding and decoding our custom content type.

<Tabs groupId="sdk-langs">
<TabItem value="js" label="JavaScript"  attributes={{className: "js_tab"}}>

```jsx
import { ContentTypeId } from "@xmtp/xmtp-js";

export const ContentTypeTransactionHash = new ContentTypeId({
  authorityId: "your.domain",
  typeId: "transaction-hash",
  versionMajor: 1,
  versionMinor: 0,
});

export class ContentTypeTransactionHashCodec {
  get contentType() {
    return ContentTypeTransactionHash;
  }

  encode(hash) {
    return {
      type: ContentTypeTransactionHash,
      parameters: {},
      content: new TextEncoder().encode(hash),
    };
  }

  decode(content: { content: any }) {
    const uint8Array = content.content;
    const hash = new TextDecoder().decode(uint8Array);
    return hash;
  }
}
```

</TabItem></Tabs>

### Step 2: Use the custom content type

Once the `TransactionHash` content type is defined, it's time to put it to use.

#### Import and register the custom content type

Begin by importing and registering the `TransactionHash` content type.

<Tabs groupId="sdk-langs">
<TabItem value="js" label="JavaScript"  attributes={{className: "js_tab"}}>

```jsx
import {
  ContentTypeTransactionHash,
  ContentTypeTransactionHashCodec,
} from "./xmtp-content-type-transaction-hash";

const xmtp = await Client.create(wallet, {
  env: "dev",
});
xmtp.registerCodec(new ContentTypeTransactionHashCodec());
```

</TabItem></Tabs>

#### Send a transaction hash

With your custom content type registered, you can now utilize it to send hashes. This code snippet shows how to use the `TransactionHash` content type to send a transaction.

<Tabs groupId="sdk-langs">
<TabItem value="js" label="JavaScript"  attributes={{className: "js_tab"}}>

```jsx
// Create a wallet from a known private key
const wallet = new ethers.Wallet(privateKey);
console.log(`Wallet address: ${wallet.address}`);

//im using a burner wallet with MATIC from a faucet
//https://faucet.polygon.technology/

// Set up provider for Polygon Testnet (Mumbai)
const provider = new ethers.providers.JsonRpcProvider(
  "https://rpc-mumbai.maticvigil.com",
);

// Connect the wallet to the provider
const signer = wallet.connect(provider);

// Define the recipient address and amount
const amount = ethers.utils.parseEther("0.01"); // Amount in ETH (0.01 in this case)

// Create a transaction
const transaction = {
  to: recipientAddress,
  value: amount,
};

// Sign and send the transaction
const tx = await signer.sendTransaction(transaction);
console.log(`Transaction hash: ${tx.hash}`);

const conversation = await xmtp.conversations.newConversation(WALLET_TO);
await conversation
  .send(tx.hash, {
    contentType: ContentTypeTransactionHash,
  })
  .then(() => {
    console.log("Transaction data sent", tx.hash);
  })
  .catch((error) => {
    console.log("Error sending transaction data: ", error);
  });
```

</TabItem></Tabs>

#### Render the custom content type

To make use of the result of the hash, you need to add an async renderer for your custom content type.

<Tabs groupId="sdk-langs">
<TabItem value="js" label="JavaScript"  attributes={{className: "js_tab"}}>

```jsx
if (message.contentType.sameAs(ContentTypeTransactionHash)) {
  // Handle ContentTypeAttachment
  return (
    <TransactionMonitor key={message.id} encodedContent={message.content} />
  );
}

const TransactionMonitor = ({ encodedContent }) => {
  const [retryCount, setRetryCount] = useState(0);

  const [transactionValue, setTransactionValue] = useState(null);

  useEffect(() => {
    const fetchTransactionReceipt = async () => {
      console.log(encodedContent);
      const provider = new ethers.providers.JsonRpcProvider(
        "https://rpc-mumbai.maticvigil.com",
      );
      const receipt = await provider.getTransactionReceipt(encodedContent);
      const tx = await provider.getTransaction(encodedContent);
      if (tx && tx.value) {
        setTransactionValue(ethers.utils.formatEther(tx.value));
      }
    };
    fetchTransactionReceipt();
  }, [encodedContent, retryCount]);

  return transactionValue ? (
    <div>Transaction value: {transactionValue} ETH</div>
  ) : (
    <div>
      Waiting for transaction to be mined...
      <button onClick={() => setRetryCount(retryCount + 1)}>
        Refresh Status 🔄
      </button>
    </div>
  );
};
```

</TabItem></Tabs>

Keep in mind that any other application that intends to use your custom content type must implement it as per your definition.

If your `TransactionHash` content type generates interest within the developer community, consider proposing it as a standard through the [XIP process](/docs/concepts/xips).

To sum up, creating a custom content type opens up new avenues for handling data within the XMTP framework, giving you the power to manage data in a more personalized or specialized way.
