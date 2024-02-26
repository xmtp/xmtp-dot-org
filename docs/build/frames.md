---
sidebar_label: Frames
sidebar_position: 12
description: Making Frames Interoperable
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# XMTP Chat Frames

The XMTP community has been actively discussing and implementing ways to enhance user experience by supporting frames within XMTP applications. An effort in this direction is detailed in a community post [Supporting Frames in XMTP](https://community.xmtp.org/t/supporting-frames-in-xmtp/535).

<video controls src="https://github.com/fabriguespe/xmtp-quickstart-frames/assets/1447073/48c305e8-0212-450b-9a00-b57acb8d14af" width="100%" type="video/mp4">
Your browser does not support the video tag.
</video>

_This video shows how its implemented in [xmtp.chat](https://xmtp.chat/inbox)_

## Introduction

The XMTP Frames guide you're looking at is designed to help developers integrate XMTP frames into their applications. It covers both the use of protocol libraries, which enable the creation and handling of XMTP frames, and the practical aspects of rendering these frames within an application. Here's a breakdown to clarify the separation:

### Protocol libraries

These are the foundational tools that allow developers to create, sign, and manage XMTP frames. The protocol libraries are essential for interacting with the XMTP network at a lower level, handling the creation of frames, signing payloads, and managing frame actions. Key aspects include:

- [**Install Required Packages**](#install-required-packages): To begin, add the necessary XMTP packages to your project.
- [**Declare Protocol Compatibility**](#declare-protocol-compatibility): Ensure your application can interact with XMTP frames by declaring protocol compatibility.
- [**Validate Incoming Messages**](#Validate-Incoming-Messages): Checks if a URL in message content is suitable for frame processing.
- [**Enable Secure Communication**](#enable-secure-communication): Implements security measures to authenticate and secure frame actions, ensuring the integrity and origin of frame interactions.

### Rendering frames in your application

<div class=" rabbit  p-5 ">

📥 <b>Need a quick reference?</b> Check out this GitHub repo: <a href="https://github.com/fabriguespe/xmtp-quickstart-frames">xmtp-quickstart-frames</a>

</div>

This part of the guide focuses on how to render XMTP frames within your application, making the frames interactive and visually integrated. It includes:

- [**Validating frame URL**](#validating-frame-url): Ensuring the URL embedded within the message content is appropriate for frame processing and meets XMTP standards.
- [**Getting frame metadata**](#getting-frame-metadata): Extracting and processing metadata from frames, including images, titles, buttons, and URLs, to facilitate rendering and interaction.
- [**Rendering frames**](#rendering-frames): Dynamically generating a `Frame` component using the extracted metadata to visually present the frame content within your application.
- [**Handling clicks in the frames**](#handling-clicks-in-the-frames): Interpreting user interactions within a frame to determine and execute the corresponding action, such as navigating to a link or updating frame content.
- [**Sign XMTP payload**](#sign-xmtp-payload): Authenticating and securing frame actions by signing XMTP payloads, ensuring the integrity and origin of frame interactions.

### Use cases

For inspiration and a deeper dive into how XMTP Frames can work across various domains, refer to the **[XMTP Frames Use Cases](/docs/use-cases/frames)** section below.

---

## Protocol libraries

These are the foundational tools that allow developers to create, sign, and manage XMTP frames. The protocol libraries are essential for interacting with the XMTP network at a lower level, handling the creation of frames, signing payloads, and managing frame actions. Key aspects include:

### Install required packages

To start, add the necessary XMTP packages to your project:

<Tabs >
<TabItem value="npm" label="npm" >

```bash
npm install @xmtp/frames-client @xmtp/frames-validator
```

</TabItem>
<TabItem value="yarn" label="Yarn" >

```bash
yarn add @xmtp/frames-client @xmtp/frames-validator
```

</TabItem>
<TabItem value="bun" label="bun" >

```bash
bun install @xmtp/frames-client @xmtp/frames-validator
```

</TabItem>
</Tabs>

These packages enable your frame to send, receive, and validate messages across different protocols.

### Declare protocol compatibility

Use a meta tag in your frame's HTML to declare the client protocols your frame supports:

```html
<meta property="of:accepts:xmtp" content="2024-02-01" />
```

This informs client applications about the protocols your frame can interact with.

### Validate incoming messages

Implement message validation using `@xmtp/frames-validator` to ensure the authenticity of incoming POST requests. This step is crucial for security, especially when dealing with multiple protocols.

```tsx
import { validateFramesPost } from "@xmtp/frames-validator";

export function handler(requestBody: any) {
  if (requestBody.clientProtocol.startsWith("xmtp")) {
    const { verifiedWalletAddress } = await validateFramesPost(requestBody);
    // Handle verified XMTP payload
  } else {
    // Handle Farcaster or other protocol payloads
  }
}
```

XMTP Frames are also supported in [`onchainkit`](https://onchainkit.xyz/xmtp/introduction).

## Rendering Frames in Your Application

This part of the guide focuses on how to render XMTP frames within your application, making the frames interactive and visually integrated. It includes:

<video controls src="https://github.com/fabriguespe/xmtp-quickstart-frames/assets/1447073/adf38f79-703c-4759-8523-4feb0ebb2d0e" width="100%" type="video/mp4">
Your browser does not support the video tag.
</video>

### Validating frame URL

The validation of frame URLs is performed using a regular expression to identify URLs within the message content. Once a URL is identified, it's processed to extract metadata, including frame information.

```jsx
const words = message.content.split(/(\r?\n|\s+)/);
const urlRegex =
  /^(http[s]?:\/\/)?([a-z0-9.-]+\.[a-z0-9]{1,}\/.*|[a-z0-9.-]+\.[a-z0-9]{1,})$/i;

void Promise.all(
  words.map(async (word) => {
    const isUrl = !!word.match(urlRegex)?.[0];
    if (isUrl) {
      const metadata = await readMetadata(word); // Ensure you have implemented this function
      if (metadata) {
        setFrameMetadata(metadata);
      }
    }
  }),
);
```

### Rendering Frames

Frames are rendered by dynamically creating a `Frame` component based on the extracted frame information. This component is responsible for displaying the frame's content, including images, titles, and interactive buttons.

```jsx
import { readMetadata } from "../Frames/openFrames"; // Ensure you have this helper or implement it
//word is the extracted frame url
const metadata = await readMetadata(word); // Ensure you have implemented this function
if (metadata) {
  setFrameMetadata(metadata);
}
```

Once we have the frame metadata we can render them visually with its buttons

```jsx
//Check if Frame has propper structure and images
const showFrame = isValidFrame(frameMetadata);
//Renders the frame
{
  showFrame && !isLoading && frameMetadata?.frameInfo && (
    <Frame
      image={frameMetadata?.frameInfo?.image.content}
      title={getFrameTitle(frameMetadata)}
      buttons={getOrderedButtons(frameMetadata)}
      handleClick={handleFrameButtonClick}
      frameButtonUpdating={frameButtonUpdating}
      interactionsEnabled={isXmtpFrame(frameMetadata)}
      textInput={frameMetadata?.frameInfo?.textInput?.content}
      onTextInputChange={setTextInputValue}
    />
  );
}
```

Finally, we render the buttons dynaically

```jsx
{
  buttons.length <= 2 && (
    <div style={styles.buttonRow}>
      {buttons.map((button, index) => renderButton(button, index))}
    </div>
  );
}
{
  buttons.length === 3 && (
    <>
      <div style={styles.buttonRow}>
        {buttons
          .slice(0, 2)
          .map((button, index) => renderButton(button, index))}
      </div>
      <div style={styles.buttonRow}>{renderButton(buttons[2], 2)}</div>
    </>
  );
}
{
  buttons.length >= 4 && (
    <>
      <div style={styles.buttonRow}>
        {buttons
          .slice(0, 2)
          .map((button, index) => renderButton(button, index))}
      </div>
      <div style={styles.buttonRow}>
        {buttons
          .slice(2, 4)
          .map((button, index) => renderButton(button, index + 2))}
      </div>
    </>
  );
}
```

### Handling clicks in the frames

First lets do important metadata checkks to ensure Frames are compatible.

```tsx
// Check if frameMetadata, client, or frameInfo.buttons is not available, then return early to avoid errors
if (!frameMetadata || !client || !frameMetadata?.frameInfo?.buttons) {
  return;
}
// Destructure frameInfo and frameUrl from frameMetadata for easier access
const { frameInfo, url: frameUrl } = frameMetadata;
// Additional check for frameInfo.buttons to ensure it's available before proceeding
if (!frameInfo.buttons) {
  return;
}
```

Use `@xmtp/frames-client` to sign and send frame actions securely. This package facilitates interoperable communication by ensuring that messages are securely signed and verifiable.

```jsx
// Initialize FramesClient with the current client
const framesClient = new FramesClient(client);
// Access the specific button based on buttonIndex
const button = frameInfo.buttons[buttonIndex];
// Determine the postUrl by checking button.target, frameInfo.postUrl, or defaulting to frameUrl
const postUrl = button.target || frameInfo.postUrl || frameUrl;
// Prepare the payload by signing the frame action with necessary details
```

### Sign XMTP Payload

To sign the XMTP payload for frame actions, the `FramesClient.signFrameAction` method is used. This method signs the action to be taken with the frame, such as posting back to the frame's URL.

```jsx
// Prepare the payload by signing the frame action with necessary details
const payload = await framesClient.signFrameAction({
  frameUrl,
  inputText: textInputValue || undefined, // Use textInputValue if available, otherwise undefined
  buttonIndex,
  conversationTopic,
  participantAccountAddresses: [peerAddress, client.address], // Include both peer and client addresses
});
```

### Handling actions

```jsx
// Handle different actions based on the button's action type
if (action === "post") {
  // For "post" action, send the payload to the determined postUrl
  const updatedFrameMetadata = await framesClient.proxy.post(postUrl, payload);
} else if (action === "post_redirect") {
  // For "post_redirect" action, send the payload and handle redirection
  const { redirectedTo } = await framesClient.proxy.postRedirect(
    postUrl,
    payload,
  );
  // Open the redirected URL in a new tab
  window.open(redirectedTo, "_blank");
} else if (action === "link" && button?.target) {
  // For "link" action, directly open the button's target URL in a new tab if available
  window.open(button.target, "_blank");
}
```

The guide combines these two aspects to provide a comprehensive overview of both the backend (protocol libraries) and frontend (rendering and interaction) components necessary for integrating XMTP frames into an application.
