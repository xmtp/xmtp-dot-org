---
sidebar_label: Frames
sidebar_position: 12
description: Rendering Frames in a chat application
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# XMTP Frames Quickstart

The XMTP community has been actively discussing and implementing ways to enhance user experience by supporting frames within XMTP applications. An effort in this direction is detailed in a community post [Supporting Frames in XMTP](https://community.xmtp.org/t/supporting-frames-in-xmtp/535).

https://github.com/open-frames/open-frames-quickstart/assets/1447073/9e01e560-af69-4aec-bdbd-db486d7e432f

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
