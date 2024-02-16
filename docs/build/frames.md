---
sidebar_label: Frames
sidebar_position: 12
description: Making Frames Interoperable
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# XMTP Frames Integration Guide

The XMTP community has been actively discussing and implementing ways to enhance user experience by supporting frames within XMTP applications. An effort in this direction is detailed in a community post [Supporting Frames in XMTP](https://community.xmtp.org/t/supporting-frames-in-xmtp/535).

<video controls src="https://github.com/fabriguespe/xmtp-quickstart-frames/assets/1447073/48c305e8-0212-450b-9a00-b57acb8d14af" width="100%" type="video/mp4">
Your browser does not support the video tag.
</video>

_This video shows how its implemented in [xmtp.chat](https://xmtp.chat/inbox)_

## Introduction

The XMTP Frames guide you're looking at is designed to help developers integrate XMTP frames into their applications. It covers both the use of protocol libraries, which enable the creation and handling of XMTP frames, and the practical aspects of rendering these frames within an application. Here's a breakdown to clarify the separation:

### Protocol Libraries

These are the foundational tools that allow developers to create, sign, and manage XMTP frames. The protocol libraries are essential for interacting with the XMTP network at a lower level, handling the creation of frames, signing payloads, and managing frame actions. Key aspects include:

- [**Validating Frame URL**](#validating-frame-url): Checks if a URL in message content is suitable for frame processing.
- [**Getting Frame Metadata**](#getting-frame-metadata): Retrieves metadata from frames like images, titles, buttons, and post URLs.
- [**Sign XMTP Payload**](#sign-xmtp-payload): Signs the XMTP payload for frame actions, ensuring authenticity and integrity.
- [**Handle Frame Actions**](#handle-frame-actions): Manages user interactions with a frame, including posting back to a frame's URL or handling redirects.

### Rendering Frames in Your Application

<div class=" rabbit  p-5 ">

📥 <b>Need a quick reference?</b> Check out this GitHub repo: <a href="https://github.com/fabriguespe/xmtp-quickstart-frames">xmtp-quickstart-frames</a>

</div>

This part of the guide focuses on how to render XMTP frames within your application, making the frames interactive and visually integrated. It includes:

- [**Validating Frame URL**](#validating-frame-url): Ensuring the URL embedded within the message content is appropriate for frame processing and meets XMTP standards.
- [**Getting Frame Metadata**](#getting-frame-metadata): Extracting and processing metadata from frames, including images, titles, buttons, and URLs, to facilitate rendering and interaction.
- [**Rendering Frames**](#rendering-frames): Dynamically generating a `Frame` component using the extracted metadata to visually present the frame content within your application.
- [**Handling Clicks in the Frames**](#handling-clicks-in-the-frames): Interpreting user interactions within a frame to determine and execute the corresponding action, such as navigating to a link or updating frame content.
- [**Sign XMTP Payload**](#sign-xmtp-payload): Authenticating and securing frame actions by signing XMTP payloads, ensuring the integrity and origin of frame interactions.

---

## Protocol Libraries

These are the foundational tools that allow developers to create, sign, and manage XMTP frames. The protocol libraries are essential for interacting with the XMTP network at a lower level, handling the creation of frames, signing payloads, and managing frame actions. Key aspects include:

### Install Required Packages

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

### Declare Protocol Compatibility

Use a meta tag in your frame's HTML to declare the client protocols your frame supports:

```html
<meta
  property="of:frame:minimum_client_protocol"
  content="farcaster@VNext,xmtp@2024-02-01,lens@2024-02-02" />
```

This informs client applications about the protocols your frame can interact with.

### Validate Incoming Messages

Implement message validation using `@xmtp/frames-validator` to ensure the authenticity of incoming POST requests. This step is crucial for security, especially when dealing with multiple protocols.

```tsx
import { validateFramesPost } from "@xmtp/frames-validator";

export function handler(requestBody: any) {
  if (requestBody.untrustedData?.clientType === "xmtp") {
    const { verifiedWalletAddress } = await validateFramesPost(requestBody);
    // Handle verified XMTP payload
  } else {
    // Handle Farcaster or other protocol payloads
  }
}
```

### Enable Secure Communication

Use `@xmtp/frames-client` to sign and send frame actions securely. This package facilitates interoperable communication by ensuring that messages are securely signed and verifiable.

```tsx
const xmtpClient = await Client.create(wallet);
const framesClient = new FramesClient(xmtpClient);

const frameUrl = "https://www.myframe.xyz";

// Read data from a frame
const frameMetadata = await framesClient.proxy.readMetadata(frameUrl);

// Get a proxied image URL, which you can use directly in an <image> tag
const imageUrl = framesClient.proxy.mediaUrl(
  frameMetadata.metaTags["fc:frame:image"],
);

// Handle a click to button 2 from a conversation with topic "/xmtp/0/123" and participant addresses "abc" and "xyz"
const payload = await signFrameAction({
  frameUrl,
  buttonIndex: 2,
  conversationTopic: "/xmtp/0/123",
  participantAccountAddresses: ["abc", "xyz"],
});

// If the button action type was `post`
const updatedFrameMetadata = await framesClient.proxy.post(frameUrl, payload);
// If the button action type was `post_redirect`
const { redirectedTo } = await framesClient.proxy.postRedirect(
  frameUrl,
  payload,
);
```

---

## Rendering Frames in Your Application

This part of the guide focuses on how to render XMTP frames within your application, making the frames interactive and visually integrated. It includes:

### Validating Frame URL

The validation of frame URLs is performed using a regular expression to identify URLs within the message content. Once a URL is identified, it's processed to extract metadata, including frame information.

```jsx
const words = message.content?.split(/(\r?\n|\s+)/);
const urlRegex =
  /^(http[s]?:\/\/)?([a-z0-9.-]+\.[a-z0-9]{1,}\/.*|[a-z0-9.-]+\.[a-z0-9]{1,})$/i;

// Split potential concatenated URLs based on "http" appearing in the middle of the string
const splitUrls = (word) => {
  const splitPattern = /(?=http)/g;
  return word.split(splitPattern);
};

// Then, in your Promise.all block, adjust the logic to first split words that could be concatenated URLs
void Promise.all(
  words.flatMap(splitUrls).map(async (word) => {
    // Use flatMap with the splitUrls function
    const isUrl = !!word.match(urlRegex)?.[0];
    if (isUrl) {
      //Get frame info
    }
  }),
);
```

### Getting Frame Metadata

Frame metadata is retrieved using the `FramesClient.readMetadata` method. This metadata includes essential frame details such as image, title, buttons, and post URL.

```jsx
const BUTTON_PREFIX = "fc:frame:button:";
const IMAGE_PREFIX = "fc:frame:image";
const POST_URL_PREFIX = "fc:frame:post_url";
const TITLE_PREFIX = "og:title";

const buttons = [];
let image = "";
let postUrl = "";
let title = "";
for (const key in extractedTags) {
  if (key.startsWith(BUTTON_PREFIX)) {
    if (!key.includes(":action")) {
      const buttonIndex = parseInt(key.replace(BUTTON_PREFIX, ""), 10) - 1;
      // Initialize the button object if it doesn't exist
      buttons[buttonIndex] = buttons[buttonIndex] || {};
      // Set the label for the button
      buttons[buttonIndex].label = extractedTags[key];
    }
  } else if (key.startsWith(IMAGE_PREFIX)) {
    image = extractedTags[key];
  } else if (key.startsWith(POST_URL_PREFIX)) {
    postUrl = extractedTags[key];
  } else if (key.startsWith(TITLE_PREFIX)) {
    title = extractedTags[key];
  }

  // Separately handle action tags to fill the actions object and directly assign to buttons
  if (key.includes(":action")) {
    const actionIndex = parseInt(key.split(":")[3], 10) - 1; // Adjusted to match buttonIndex calculation
    // Initialize the button object if it doesn't exist
    buttons[actionIndex] = buttons[actionIndex] || {};
    // Set the action for the button
    buttons[actionIndex].action = extractedTags[key];
  }
}
```

### Rendering Frames

Frames are rendered by dynamically creating a `Frame` component based on the extracted frame information. This component is responsible for displaying the frame's content, including images, titles, and interactive buttons.

```jsx
//word is the extracted frame url
const framesClient = new FramesClient(client);
const metadata = await framesClient.proxy.readMetadata(word);
if (metadata) {
  const info = getFrameInfo(metadata.extractedTags);
  console.log("Frame info: ", info);
  info.url = metadata.url;
  setFrameInfo(info);
}
```

Once we have the frame metadata we can render them visually

```jsx
{
  !isLoading && frameInfo && (
    <Frame
      info={frameInfo}
      handleClick={handleFrameButtonClick}
      frameButtonUpdating={frameButtonUpdating}
      frameUrl={frameInfo.url} // Passing the new prop
    />
  );
}
```

Finally, we render the buttons dynaically

```jsx
{buttons?.map((button, index) => {
if (!button) {
    return null;
    }
    const handlePress = () => handleClick(index + 1);
        const buttonStyle = {
        ...styles.button,
        ...(index === 0 ? styles.firstButton : {}),
        ...(index === buttons.length - 1 ? styles.lastButton : {}),
        };
        return (
        <button
            key={`${button}-${index}`}
            onClick={handlePress}
            disabled={frameButtonUpdating === index + 1}
            style={buttonStyle}>
            {button.label}{" "}
            {button.action === "post_redirect" && (
            <span style={styles.redirectIcon}>↪</span>
            )}
        </button>
);
```

### Handling Clicks in the Frames

Clicks within the frame are handled by the `handleFrameButtonClick` function. This function determines the action to be taken based on the button clicked within the frame.

```jsx
  const handleFrameButtonClick = async (buttonNumber) => {
    if (!frameInfo) {
      return;
    }
    const actionType = frameInfo.buttons[buttonNumber - 1].action;
    console.log("Action type: ", actionType);
    console.log(frameInfo);

    const conversationTopic = message.conversationTopic;

    //Continue with Frames logic
    ...
```

### Sign XMTP Payload

To sign the XMTP payload for frame actions, the `FramesClient.signFrameAction` method is used. This method signs the action to be taken with the frame, such as posting back to the frame's URL.

```jsx
const xmtpClient = await Client.create(wallet);
const framesClient = new FramesClient(xmtpClient);
const payload = await framesClient.signFrameAction({
  frameUrl,
  buttonIndex: buttonNumber,
  conversationTopic,
  participantAccountAddresses: [peerAddress, xmtpClient.address],
});
console.log("Payload: ", payload);
```

### Handle Frame actions

If the frame action involves a redirect, the `framesClient.proxy.postRedirect` method is used to handle the redirection to the specified URL after the frame action is executed.

```jsx
if (actionType === "post") {
  const updatedFrameMetadata = await framesClient.proxy.post(
    frameInfo.postUrl,
    payload,
  );
  const updatedFrameInfo = getFrameInfo(updatedFrameMetadata.extractedTags);
  setFrameInfo(updatedFrameInfo);
} else if (actionType === "post_redirect") {
  // If the button action type was `post_redirect`
  console.log("Redirecting to: ", frameUrl);
  const { redirectedTo } = await framesClient.proxy.postRedirect(
    frameInfo.postUrl,
    payload,
  );
  console.log("Redirected to: ", redirectedTo);
  window.open(redirectedTo, "_blank").focus();
}
```

The guide combines these two aspects to provide a comprehensive overview of both the backend (protocol libraries) and frontend (rendering and interaction) components necessary for integrating XMTP frames into an application.
