---
sidebar_label: Subscribe in Open Frames
sidebar_position: 6.3
---

# Subscribe in Open Frames

:::info Prerequisite
This guide assumes your app already supports non-subscribe Open Frames. If necessary, see [Protocol compatibility](https://xmtp.org/docs/build/frames#protocol-compatibility) to set this up first.
:::

### Sections:

1. **How to render a subscribe Open Frame**: Learn the steps to display subscribe frames within your application.
2. **Building a subscribe frame**: Implement the method to construct and manage subscribe frames.

---

## Support a subscribe Open Frame in an app built with XMTP

In this guide, we will walk through the process of supporting subscribe Open Frames in your application using XMTP. Each section provides step-by-step instructions to integrate this functionality.

### Determine if an Open Frame is a subscribe frame

Subscriptions via a frame are triggered using button-click events and are a type of transactional frame. Therefore, the best way to determine if an Open Frame is a subscribe frame begins with the same first step as a typical transactional frame: looking for a button `action` set to `tx` in the frame metadata. For example:

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

### Post to the target URL to fetch data

This next step is also the same as a regular transaction frame: make a POST request to the `target` URL to fetch transaction data. The difference is that the payload that gets returned will return an eth_personalSign method if in the subscribe flow, and this is how you know you're dealing with a subscription frame.

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

Prepare a new payload with the signature passed as transactionId to pass to the final step.

```jsx
const payload = await framesClient.signFrameAction({
  ...prevPayload,
  transactionId: signature,
});
```

### Complete the subscription and show success screen

Pass the postUrl from the button as well as the payload with the signature from the previous step to complete the subscription flow and return metadata of a new success frame.

```jsx
const completeTransaction = await framesClient.proxy.post(
  buttonPostUrl,
  payloadWithTxId,
);
// Finally, set the current frame state to this new metadata/success screen
```

### Try an example subscribe Open Frame

Use the example [Open Frames Subscribe Frame](https://subscribe-boilerplate-frame.vercel.app/) to try these steps out in your app. Or check the code of the [open source repo](https://github.com/xmtp-labs/subscribe-boilerplate-frame).

This example Frame uses a randomly generated wallet in the XMTP dev network to automatically send a "Thank you for subscribing!" message to your main inbox upon subscribing.

---

## Build a subscribe Open Frame

Follow these steps to build a subscribe Open Frame that can be displayed in an app built with XMTP.

**To build a subscribe Open Frame:**

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
      label: "Subscribe to receive messages from this user!",
      // Required 'tx' action for a transaction frame
      action: "tx",
      // Below buttons are 2 route urls that will be added in the next steps.
      // Target will send back info about the subscribe frame
      target: `${process.env.NEXT_PUBLIC_BASE_URL}/api/transaction`,
      // postUrl will send back a subscription success screen
      postUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/api/transaction-success`,
    },
  ],

  // This is the image shown on the default screen
  // Add whatever path is needed for your starting image
  // In this case, using an Open Graph image
  image: `${process.env.NEXT_PUBLIC_BASE_URL}/api/og?subscribed=false`,
});

export const metadata: Metadata = {
  title: "Subscribe Frame",
  description: "A frame to demonstrate subscribing from a frame",
  other: {
    ...frameMetadata,
  },
};

export default function Home() {
  return (
    <>
      <h1>Open Frames Subscribe Frame</h1>
    </>
  );
}
```

5. Add the route to `/api/transaction/route.tsx`. The route is used to get information about the frame that is sent to the target URL.

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

  const xmtpClient = // Your client instance; in the boilerplate frame, we're using a randomly generated wallet
  const walletAddress = xmtpClient?.address || "";
  const timestamp = Date.now();
  // Store the timestamp however you'd like, in this case as an env variable, to cross-check at a later step.
  process.env.TIMESTAMP = JSON.stringify(timestamp);
  // Create the original consent message.
  const message = createConsentMessage(walletAddress, timestamp);

  const txData = {
    // Sepolia or whichever chain id
    chainId: `eip155:11155111`,
    method: "eth_personalSign",
    params: {
      // This is the message the user will consent to, generated above
      value: message
      // These are required fields, but aren't utilized in this flow
      abi: [],
      to: walletAddress as `0x${string}`,
    },
  };
  return NextResponse.json(txData);
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}
```

6. Get the confirmation frame screen HTML via the `@coinbase/onchainkit` helper to the success image and the success button action — in this case a redirect outside of the frame. (The redirect logic is outside the scope of this tutorial.) We recommend having a separate confirmation screen for users who subscribe and are not activated on XMTP, as they won't yet be able to receive messages.

```jsx
const confirmationFrameHtmlWithXmtp = getFrameHtmlResponse({
  accepts: {
    xmtp: "2024-02-09",
  },
  isOpenFrame: true,
  buttons: [
    {
      action: "post_redirect",
      label: "Subscribed! Read more about Subscribe Frames",
    },
  ],
  postUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/api/end`,
  image: `${process.env.NEXT_PUBLIC_BASE_URL}/api/og?subscribed=true&hasXmtp=true`,
});

const confirmationFrameHtmlNoXmtp = getFrameHtmlResponse({
  accepts: {
    xmtp: "2024-02-09",
  },
  isOpenFrame: true,
  buttons: [
    {
      action: "post_redirect",
      label: "Activate on XMTP to Receive Messages",
    },
  ],
  postUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/api/endWithoutXmtp`,
  image: `${process.env.NEXT_PUBLIC_BASE_URL}/api/og?subscribed=true&hasXmtp=false`,
});
```

7. Add the route to return the success frame HTML with the new meta tags at `api/transaction-success/route.ts`.

```jsx
import { confirmationFrameHtml } from "@/app/page";
import { getXmtpFrameMessage } from "@coinbase/onchainkit/xmtp";
import { NextRequest, NextResponse } from "next/server";
import { createConsentProofPayload } from "@xmtp/consent-proof-signature";

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const body = await req.json();
  const { isValid } = await getXmtpFrameMessage(body);

if (!isValid) {
  return new NextResponse("Message not valid", { status: 500 });
}

const xmtpClient = // Your client
const signature = body.untrustedData.transactionId;

// Create the consent proof payload
const payloadBytes = createConsentProofPayload(signature, Date.now());
const consentProof = invitation.ConsentProofPayload.decode(
  consentProofUint8Array
);

  const payloadWithTimestamp = {
    ...consentProof,
    timestamp: new Long(
      consentProof?.timestamp?.low,
      consentProof?.timestamp?.high,
      consentProof?.timestamp?.unsigned
    ),
  };

  // Do whatever you want with the payload, in the below case we're immediately starting a new conversation
    const newConvo = await xmtpClient?.conversations.newConversation(
    body.untrustedData.address,
    undefined,
    payloadWithTimestamp
  );
  await newConvo?.send("Thank you for being a subscriber!");

  // Determine if user is on XMTP or not and return the corresponding frame
  const hasXmtp = await xmtpClient?.canMessage(body.untrustedData.address);

  return new NextResponse(
    hasXmtp ? confirmationFrameHtmlWithXmtp : confirmationFrameHtmlNoXmtp
  );
}
export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}
```

8. Send your subscription Frame in an XMTP message and try interacting with it!

### Resources

If you need an XMTP messaging app to use, try one of these:

- https://app-preview.converse.xyz/
- https://xmtp-frames-quickstart.vercel.app/
