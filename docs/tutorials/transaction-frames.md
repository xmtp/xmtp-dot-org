---
sidebar_label: Transactions and Mints in Open Frames
sidebar_position: 6.3
---

# Transactions and Mints in Open Frames

:::info Prerequisite
This guide assumes your app already supports non-transaction Open Frames. If necessary, see [Protocol compatibility](https://xmtp.org/docs/build/frames#protocol-compatibility) to set this up first.
:::

Note: A mint is a form of a transaction frame. Where applicable, steps for mint frames will be specified through this tutorial.

### Sections:

1. **How to render a transactional Open Frame**: Learn the steps to display transactional frames within your application.
2. **Security considerations for transactional frames**: Understand the security measures needed when dealing with transactional frames.
3. **Building a transactional frame**: Implement the method to construct and manage transactional frames.

---

## Support a transactional Open Frame in an app built with XMTP

In this guide, we will walk through the process of supporting transactional Open Frames in your application using XMTP. Each section provides step-by-step instructions to integrate this functionality.

### Determine if an Open Frame is transactional

Frame transactions are triggered using button-click events.

Therefore, the best way to determine if an Open Frame is transactional is to look for a button `action` set to `tx` in the frame metadata. For example:

```jsx
import { OpenFramesProxy } from "@xmtp/frames-client";

const proxy = new OpenFramesProxy();
const frameMetadata = proxy.readMetadata("url_of_frame");

// Get correct button index from click handler
const button = frameMetadata.frameInfo.buttons[`${buttonIndex}`];

const isTransactionFrame = button.action === "tx";
```

### Determine the transaction target and post URL

If the button action indicates the Frame is transactional, get the `target` and `postUrl` from the button. To learn more, see Frame Metadata [Optional Properties](https://www.openframes.xyz/#optional-properties).

```jsx
if (isTransactionFrame) {
  const { target, postUrl } = button;

  // Rest of logic in this guide
}
```

### Post to the target URL to fetch transaction data

Make a POST request to the `target` URL to fetch transaction data.

Make this request from the Frame with a signed Frame action payload in the POST body. In the `address` field, include the address of the connected wallet.

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

### Try an example transaction Open Frame

Use the example [Open Frames Tx Frame](https://tx-boilerplate-frame.vercel.app/) to try these steps out in your app. Or check the code of the [open source repo](https://github.com/xmtp-labs/tx-boilerplate-frame).

This example Frame uses the Sepolia network to make a 0.0000032ETH (~1 cent) transaction to the address associated with hi.xmtp.eth.

### Try an example mint Open Frame with a transaction

Use the example [Open Frames Mint Tx Frame](https://mint-tx-boilerplate-frame.vercel.app/) to try these steps out in your app. Or check the code of the [open source repo](https://github.com/xmtp-labs/mint-tx-boilerplate-frame).

This example Frame uses the Sepolia network to make a 0.0000032ETH (~1 cent) transaction and mint an NFT of an AI dog.

---

## Security considerations

When rendering transaction Frames in your app, consider providing these security best practices to keep your users safe:

- Include allow lists that enable your app to interact with known “safe” transaction frames only
- For unknown frames, inform the user that they are about to interact with an unknown Frame and to proceed at their own risk.
- Use simulation services in cases where you want to allow access to unverified transaction Frames. These services enable you to submit transaction information to a simulator first, which enables you to test the process without financial risk and retrieve debit amount details.

For more transaction Frame security considerations as well as mitigation strategies, see the [Farcaster transaction Frame security documentation](https://www.notion.so/Frame-Transactions-Public-9d9f9f4f527249519a41bd8d16165f73?pvs=21).

---

## Build a transaction Open Frame

Follow these steps to build a transaction Open Frame that can be displayed in an app built with XMTP.

**To build a transaction Open Frame:**

1. Create a boilerplate Next.js app.

```bash
npx create-next-app my-next-app
```

2. Install `@coinbase/onchainkit` as a dependency.

```bash
npm install @coinbase/onchainkit
```

3. Add the base URL in `.env.local` as a `NEXT_PUBLIC_BASE_URL` environment variable.
4. In `app/page.tsx`, replace the boilerplate with the following code — this is what will be rendered as the initial frame:

```jsx
import { getFrameMetadata } from "@coinbase/onchainkit/frame";
import { Metadata } from "next";

const frameMetadata = getFrameMetadata({
  // Accepts and isOpenFrame keys are required for Open Frame compatibility
  accepts: { xmtp: "2024-02-09" },
  isOpenFrame: true,

  buttons: [
    {
      // Whatever label you want your first button to have
      label: "Make transaction",
      // Required 'tx' action for a transaction frame
      action: "tx",
      // Below buttons are 2 route urls that will be added in the next steps.
      // Target will send back info about the transaction
      target: `${process.env.NEXT_PUBLIC_BASE_URL}/api/transaction`,
      // postUrl will send back a transaction success screen
      postUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/api/transaction-success`,
    },
  ],

  // This is the image shown on the default screen
  // Add whatever path is needed for your starting image
  // In this case, using an Open Graph image
  image: `${process.env.NEXT_PUBLIC_BASE_URL}/api/og?transaction=null`,
});

export const metadata: Metadata = {
  title: "Transaction Frame",
  description: "A frame to demonstrate transactions",
  other: {
    ...frameMetadata,
  },
};

export default function Home() {
  return (
    <>
      <h1>Open Frames Tx Frame</h1>
    </>
  );
}
```

5. Add the route to `/api/transaction/route.tsx`. The route is used to get information about the transaction that is sent to the target URL.

```jsx
import { NextRequest, NextResponse } from "next/server";
import { parseEther, encodeFunctionData } from "viem";
import type { FrameTransactionResponse } from "@coinbase/onchainkit/frame";
import { getXmtpFrameMessage } from "@coinbase/onchainkit/xmtp";

async function getResponse(req: NextRequest): Promise<NextResponse | Response> {
  const body = await req.json();
  const { isValid } = await getXmtpFrameMessage(body);
  if (!isValid) {
    return new NextResponse("Message not valid", { status: 500 });
  }

  // This optional param is needed in scenarios where you're interacting with a smart contract
  // The values passed will depend on the implementation details of your contract; this is just an example
  const data = encodeFunctionData({
    abi: JSON.parse(contractAbi),
    functionName: "publicMint",
    args: [],
  });

  const txData: FrameTransactionResponse = {
    // Sepolia or whichever chain id; we suggest avoiding mainnet for now
    chainId: `eip155:11155111`,
    method: "eth_sendTransaction",
    params: {
      abi: [],
      // Address receiving the transaction — in this case, hi.xmtp.eth
      to: "0x194c31cAe1418D5256E8c58e0d08Aee1046C6Ed0",
      // Transaction value in eth sent back as wei — in this case, ~1 cent.
      value: parseEther("0.0000032", "wei").toString(),
      data, // If applicable
    },
  };
  return NextResponse.json(txData);
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}
```

6. Get the confirmation frame screen HTML via the `@coinbase/onchainkit` helper to the success image and the success button action — in this case a redirect outside of the frame. (The redirect logic is outside the scope of this tutorial.)

```jsx
export const confirmationFrameHtml = getFrameHtmlResponse({
  accepts: {
    xmtp: "2024-02-09",
  },
  isOpenFrame: true,
  buttons: [
    {
      action: "post_redirect",
      label: "Learn more about transaction frames",
    },
  ],
  postUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/api/end`,
  image: `${process.env.NEXT_PUBLIC_BASE_URL}/api/og?transaction=0.0000032`,
});
```

7. Add the route to return the success frame HTML with the new meta tags at `api/transaction-success/route.ts`.

```jsx
import { confirmationFrameHtml } from "@/app/page";
import { getXmtpFrameMessage } from "@coinbase/onchainkit/xmtp";
import { NextRequest, NextResponse } from "next/server";

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const body = await req.json();
  const { isValid } = await getXmtpFrameMessage(body);

  if (!isValid) {
    return new NextResponse("Message not valid", { status: 500 });
  }

  return new NextResponse(confirmationFrameHtml);
}
export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}
```

8. Send your transaction Frame in an XMTP message and try interacting with it!

:::info

🧪 If you’re using a boilerplate Frame we just built, be sure you’re on the `Sepolia` network.

:::

### Resources

If you need an XMTP messaging app to use, try one of these:

- https://app-preview.converse.xyz/
- https://xmtp-frames-quickstart.vercel.app/
