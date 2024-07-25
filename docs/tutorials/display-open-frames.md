---
sidebar_label: Display Open Frames
sidebar_position: 6.3
---

# Display Open Frames in an app built with XMTP

This tutorial provides step-by-step instructions to:

- Display a transactional Open Frame in an app built with XMTP  
A transaction Open Frame is [built to enable users to trigger onchain transactions](https://message-kit.vercel.app/frames/tutorials/transactions).
- Display a subscription Open Frame in an app built with XMTP  
A subscription Open Frame is [built to enable users to subscribe to content](https://message-kit.vercel.app/frames/tutorials/subscribe).

An Open Frame is a Frame built according to the [Open Frames standard](https://framesjs.org/guides/open-frames). This standard enables you to build a Frame that works in multiple ecosystems, including Farcaster, XMTP, Lens, and others.

## Display a transactional Open Frame in an app built with XMTP

This tutorial assumes your app already supports non-transactional Open Frames. If not, see [Introduction to Open Frames](https://message-kit.vercel.app/frames) to set this up first.

:::tip

A minting Open Frame is a type of transactional Open Frame. Where applicable, we'll specify steps for minting Open Frames in this tutorial.

:::

### Example transactional Open Frame

Use this example [transactional Open Frame](https://tx-boilerplate-frame.vercel.app/) with this tutorial to try out the steps in your app. This example uses the Sepolia network to make a 0.0000032ETH (~1 cent) transaction to the address associated with `hi.xmtp.eth`, or `0x194c31cAe1418D5256E8c58e0d08Aee1046C6Ed0`.

You can explore the Open Frame's code in the [tx-boilerplate-frame](https://github.com/xmtp-labs/tx-boilerplate-frame) repo.

### Identify a transactional Open Frame

Open Frame transactions are triggered using button-click events. Therefore, the best way to determine if an Open Frame is transactional is to look for a button `action` set to `tx` in the Open Frame metadata. For example:

```jsx
import { OpenFramesProxy } from "@xmtp/frames-client";

const proxy = new OpenFramesProxy();
const frameMetadata = proxy.readMetadata("url_of_frame");

// Get correct button index from click handler
const button = frameMetadata.frameInfo.buttons[`${buttonIndex}`];

const isTransactionFrame = button.action === "tx";
```

### Identify the transaction target and postUrl

If the button action indicates the Open Frame is transactional, get the `target` and `postUrl` from the button. To learn more, see Open Frame Metadata [Optional Properties](https://www.openframes.xyz/#optional-properties).

```jsx
if (isTransactionFrame) {
  const { target, postUrl } = button;

  // Rest of logic in this guide
}
```

### Post to the target URL to fetch transaction data

Make a POST request to the `target` URL to fetch transaction data. Make this request from the Open Frame with a signed Open Frame action payload in the POST body. In the `address` field, include the address of the connected wallet.

```jsx
import { FramesClient } from "@xmtp/frames-client";

const framesClient = new FramesClient(client);

 const payload = await framesClient.signFrameAction({
			// Same payload as for other frames, + an address field
			// Address should be the 0x address of the connected account
      address,
    });

const transactionInfo: {
	chainId: string;
	method: 'eth_sendTransaction';
	params: {
		abi: Abi | [];
		to: `0x${string}`;
		value?: string;
    // Needed if you are interacting with a smart contract in this transaction, e.g. in a mint scenario
		data?: `0x${string}`;
	};
} = await framesClient.proxy.postTransaction(
        target,
        payload,
      );
```

### Process transaction data and receive a hash

Pull the address and value from the returned transaction data and use them to process the transaction using your preferred tools, such as Infura. Documenting this step in detail is out of the scope of this tutorial.

```jsx
const address = transactionInfo.params.to;
// Returned as wei in a string
const value = Number(transactionInfo.params.value);


// Pass the address, value, and any other information needed
// Process the payment via your preferred tools and receive a hash.
const transactionHash = <<returned_hash>>
```

### Ensure the processed transaction matches the request

Use the hash to gather information about the processed transaction using your preferred tools. Ensure that the details match the requested transaction.

```jsx
// Pass the hash to your provider of choice
// Receive the processed transaction details
const transactionReceipt = <<returned_details_from_hash>>

if (
    transactionReceipt.to !== address || transactionReceipt.value !== value
  ) {
    // Error handle, shouldn't show frame success screen
  } else {
    // Pass the hash as an optional transactionId to the signFrameAction payload if you plan to use it
    // Complete the transaction, which returns metadata of a new success frame
    const completeTransaction = await framesClient.proxy.post(
      postUrl,
      payload,
    );
    // Set the current frame state to this new metadata/success screen
  }
}
```

### Transaction Open Frame security considerations

When rendering transactional Open Frames in your app, consider following these security best practices to keep your users safe:

- Include allowlists that enable your app to interact with known “safe” transactional Open Frames only
- For unknown Open Frames, inform the user that they are about to interact with an unknown Open Frame and to proceed at their own risk
- Use simulation services in cases where you want to allow access to unverified transaction Open Frames. These services enable you to submit transaction information to a simulator first, which tests the process without financial risk and retrieves debit amount details.

For more transactional Open Frame security considerations and mitigation strategies, see the Frame Transactions [Security Consideration](https://www.notion.so/warpcast/Frame-Transactions-Public-9d9f9f4f527249519a41bd8d16165f73?pvs=4#03962a8da2574f9ea6ce093359f8235a).

## Display a subscription Open Frame in an app built with XMTP

This tutorial assumes your app already supports non-subscription Open Frames. If not, see [Introduction to Open Frames](https://message-kit.vercel.app/frames) to set this up first.

### Identify a subscription Open Frame

Subscriptions via an Open Frame are triggered using button-click events. Subscription Open Frames are a type of transactional Open Frame. Therefore, the best way to identify that an Open Frame supports subscription transactions is to look for a button `action` set to `tx` in the Open Frame metadata. For example:

```jsx
import { OpenFramesProxy } from "@xmtp/frames-client";

const proxy = new OpenFramesProxy();
const frameMetadata = proxy.readMetadata("url_of_frame");

// Get correct button index from click handler
const button = frameMetadata.frameInfo.buttons[`${buttonIndex}`];

const isTransactionFrame = button.action === "tx";
```

### Identify the transaction target and postUrl

If the button action indicates the Open Frame transactional, get the `target` and `postUrl` from the button.  To learn more, see Open Frame Metadata [Optional Properties](https://www.openframes.xyz/#optional-properties).

```jsx
if (isTransactionFrame) {
  const { target, postUrl } = button;

  // Rest of logic in this guide
}
```

### Post to the target URL to fetch data

Make a POST request to the `target` URL to fetch transaction data. The payload that gets returned will return an `eth_personalSign` method if in the subscribe flow, and this is how you know you're dealing with a subscription Open Frame.

Make this request from the Open Frame with a signed Frame action payload in the POST body. In the `address` field, include the address of the connected wallet.

```jsx
import { FramesClient } from "@xmtp/frames-client";

const framesClient = new FramesClient(client);

 const payload = await framesClient.signFrameAction({
			// Same payload as for other frames, + an address field
			// Address should be the 0x address of the connected account
      address,
    });

const transactionInfo: {
	chainId: string;
	method: 'eth_personalSign';
	params: {
		abi: [];
		to: `0x${string}`;
		value?: string; // In the case of a subscribe frame, this will be the message that the user will consent to
	};
} = await framesClient.proxy.postTransaction(
        target,
        payload,
      );
```

### Process transaction data and receive a signature

Pull the consent message from the value of the returned transaction data and use this to get a signature using your preferred tools, such as Viem. Documenting this step in detail is out of the scope of this tutorial.

```jsx
const value = transactionInfo.params.value;

// Pass the value and account to your preferred tools and receive a signature
const signature = <<returned_signature>>
```

### Pass this signature to the signFrameAction

Prepare a new payload with the signature passed as `transactionId` to pass to the final step.

```jsx
const payload = await framesClient.signFrameAction({
  ...prevPayload,
  transactionId: signature,
});
```

### Complete the subscription and show a success screen

To complete the subscription flow and return metadata of a new success frame, pass the `postUrl` from the button and the payload with the signature from the previous step.

```jsx
const completeTransaction = await framesClient.proxy.post(
  buttonPostUrl,
  payloadWithTxId,
);
// Finally, set the current frame state to this new metadata/success screen
```

### Try an example subscription Open Frame

Use this example [subscription Open Frame](https://subscribe-boilerplate-frame.vercel.app/) with this tutorial to try out the steps in your app. 

This example Open Frame uses a randomly generated wallet on the XMTP `dev` network to automatically send a "Thank you for subscribing!" message to your main inbox upon subscribing.

You can explore the Open Frame's code in the [subscribe-boilerplate-frame](https://github.com/xmtp-labs/subscribe-boilerplate-frame).
