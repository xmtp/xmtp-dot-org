---
sidebar_label: Render chat frames
sidebar_position: 5
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# Render Chat Frames in Your Application

This part of the guide focuses on how to render Frames within your application, making the frames interactive and visually integrated. It includes:

<div class=" rabbit  p-5 ">⌛️ <b>Want to race ahead?</b> Jump to the quick setup <a href="https://github.com/xmtp/xmtp-quickstart-chat-frames">xmtp-quickstart-chat-frames</a></div>

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

The guide combines these two aspects to provide a comprehensive overview of both the backend (protocol libraries) and frontend (rendering and interaction) components necessary for integrating Frames into an application.
