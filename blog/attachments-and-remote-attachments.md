---
slug: attachments-and-remote-attachments
hide_table_of_contents: true
title: "Introducing remote media attachments"
date: 2023-03-06
authors: eng
image: "https://user-images.githubusercontent.com/483/222857433-99b2b492-d316-4cd1-a38d-660247a7ca49.png"
description: "Introducing two new content types: Attachment and Remote Attachment."
tags:
  - Content Types
  - SDKs
  - Developers
---

import FeedbackWidget from '/src/components/FeedbackWidget'

:::warning Get the latest doc
This post may be out of date. See the [Attachments tutorial](/docs/build/attachments) for the latest guidance on how to build attachments.
:::

Let's talk about some new content types for XMTP.

What's a content type? A content type is a way to describe the _type_ of _content_ a message contains on XMTP. Out of the box, XMTP's SDKs support one content type: `text`.

Here's the thing though: messaging has been more than just text since way back in 2002, when your LG VX8100 was blowing up from MMS.

So we decided to propose some new content types: `Attachment` and `RemoteAttachment`. These new content types support rich media (images, videos, gifs, etc.) and will let you bring your messaging experience to the cutting edges of the early aughts.

![XMTP content types. Illustration of a hand holding a mobile phone with a chat app open with a soccer video and a photo of a mountain connected to and hovering above chat bubbles.](./media/XMTP-CONTENT-TYPES.jpg)

<!--truncate-->

### What's an Attachment?

Attachments are files! More specifically, attachments are objects that have:

- `filename` Most files have names. At least all the ones I can name off the top of my head.
- `mimeType` What kind of file is it? A lot of times you could sort of assume this from the file extension but it's nice to have a specific field for it. [Here's a list of common mime types.](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types)
- `data` What is this file's data? Most files have data. If the file doesn't have data then it's probably not the most interesting thing to send.

So now you can encode a file as an `Attachment`. "But hang on!" you say, "XMTP messages can only be up to 1MB in size." Well you got me there. Messages sent on the XMTP network can only be 1MB. That's an enormous amount of text. For reference, this is what 1MB of text looks like in TextEdit:

<img alt="screenshot of 1mb of text" src="https://user-images.githubusercontent.com/483/222857433-99b2b492-d316-4cd1-a38d-660247a7ca49.png" title="i ain’t reading all that. i'm happy for u tho or sorry that happened" />

That's a lot of text! Probably too much for one message. Meanwhile, the screenshot is a PNG file that's over 3MB in size. Too big to send on the network.

What if we could upload the message somewhere else, then send a link to that to a recipient. Well that would be great, except we'd lose E2E encryption... unless we encrypted it.

So let's do that.

### Sending Remote Attachments

Let's say we've got an Attachment object that looks like this:

```tsx
const attachment: Attachment = {
  filename: "screenshot.png",
  mimeType: "image/png",
  data: [the PNG data]
}
```

The first thing we need to do is encrypt it. The new [xmtp-content-type-remote-attachment](https://github.com/xmtp/xmtp-js-content-types/tree/main/remote-attachment) package provides a utility for us to do that:

```tsx
// Import the codecs we're going to use
import {
  AttachmentCodec,
  RemoteAttachmentCodec,
} from "xmtp-content-type-remote-attachment";

// Encode the attachment and encrypt that encoded content
const encryptedAttachment = await RemoteAttachmentCodec.encodeEncrypted(
  attachment,
  new AttachmentCodec(),
);
```

So now we have some encrypted encoded content. You can upload this payload anywhere where it will be accessible via an HTTPS GET request. Let's use web3.storage:

```tsx
const web3Storage = new Web3Storage({
  token: "your token here, not one i accidentally committed and had to revoke",
});

const upload = new Upload("XMTPEncryptedContent", encryptedEncoded.payload);
const cid = await web3Storage.put([upload]);
const url = `https://${cid}.ipfs.w3s.link/XMTPEncryptedContent`;
```

_([Upload](https://github.com/xmtp-labs/xmtp-inbox-web/blob/5b45e05efbe0b0f49c17d66d7547be2c13a51eab/hooks/useSendMessage.ts#L15-L33) is a small class that implements Web3Storage's `Filelike` interface for uploading)_

Ok rad, now we have a `url`. Now we can make a `RemoteAttachment`:

```tsx
const remoteAttachment: RemoteAttachment = {
  // This is the URL string where clients can download the encrypted
  // encoded content
  url: url,

  // We hash the encrypted encoded payload and send that along with the
  // remote attachment. On the recipient side, clients can verify that the
  // encrypted encoded payload they've downloaded matches what was uploaded.
  // This is to prevent tampering with the content once it's been uploaded.
  contentDigest: encryptedAttachment.digest,

  // These are the encryption keys that will be used by the recipient to
  // decrypt the remote payload
  salt: encryptedAttachment.salt,
  nonce: encryptedAttachment.nonce,
  secret: encryptedAttachment.secret,

  // For now, all remote attachments MUST be fetchable via HTTPS GET requests.
  // We're investigating IPFS here among other options.
  scheme: "https://",

  // These fields are used by clients to display some information about
  // the remote attachment before it is downloaded and decrypted.
  filename: attachment.filename,
  contentLength: attachment.data.byteLength,
};
```

Awesome. We have a `RemoteAttachment`! Let's send that to our best friend.

```tsx
await conversation.send(remoteAttachment, {
  contentType: ContentTypeRemoteAttachment,
});
```

### Receiving Remote Attachments

> "Wow, I just got a remote attachment sent to me! Now what?" - you, probably

```tsx
// Assume `loadLastMessage` is a thing you have
const message: DecodedMessage = await loadLastMessage();

if (!message.contentType.sameAs(ContentTypeRemoteAttachment)) {
  // We do not have a remote attachment. A topic for another blog post.
  return;
}

// We've got a remote attachment.
const remoteAttachment: RemoteAttachment = message.content;
```

Ok great, we've got a remote attachment object. Let's download, decrypt, and decode that attachment:

```tsx
const attachment: Attachment = await RemoteAttachmentCodec.load(
  remoteAttachment,
  client, // <- Your XMTP Client instance
);
```

Now we've got our original attachment we made a hundred lines ago:

```tsx
attachment.filename; // => "screenshot.png"
attachment.mimeType; // => "image/png",
attachment.data; // => [the PNG data]
```

We can now do with this attachment as we please. Maybe we want to display it as an image.

```tsx
const objectURL = URL.createObjectURL(
  new Blob([Buffer.from(attachment.data)], {
    type: attachment.mimeType,
  }),
);

const img = document.createElement("img");
img.src = objectURL;
img.title = attachment.filename;
```

### Some questions

### Ok, but what about an `Image` content type? A `Video` content type?

`Attachment` and `RemoteAttachment` cover both of those cases. You just need to look at the attachment's `mimeType` and decide how to best display that in your app.

Our hope is to also improve tooling in and around our SDKs to make working with common media types even easier, so devs can spend less time learning and more time building.

### When would I want a new content type instead of just using an attachment?

The `Attachment` content type works well for a message that consists of a file being shared. For things that alter how a message should behave or have a more sophisticated presentation, you might want to propose a new content type.

For example, in iMessage, stickers are basically images, so you think “great, I could send them as attachments.” But stickers can also be placed spatially in the message timeline. They also might have associated information like where to download them. With all this extra information, it might make sense to introduce a more structured content type. The same goes for things like replies/reactions/[insert great idea you have for a new messaging experience].

### I have a great idea for a new content type everybody would love!

Let us know about it in the [XIPs](https://github.com/xmtp/xips) repository! Proposals that have been accepted there can start being implemented in XMTP SDKs and adopted more widely by the community.

**Wrap up**

So that's a quick introduction to the new `Attachment` and `RemoteAttachment` content types. If you're curious to see more, you can check out how they were introduced into the XMTP SDKs:

- [iOS SDK PR](https://github.com/xmtp/xmtp-ios/pull/68)
- [JS SDK repo](https://github.com/xmtp/xmtp-js-content-types/tree/main/remote-attachment) You can add this package if you want to support these types.
- [Android SDK PR](https://github.com/xmtp/xmtp-android/pull/45)

If you’d like to see what it looks like to integrate these SDKs:

- [Integration into our Inbox iOS app](https://github.com/xmtp-labs/xmtp-inbox-ios/pull/104)
- [Integrating into our Inbox React app](https://github.com/xmtp-labs/xmtp-inbox-web/pull/99)

Additional reading:

- [The introduction of Content Types in XIP 5](https://github.com/xmtp/XIPs/blob/main/XIPs/xip-5-message-content-types.md)
- [The introduction of the Remote Attachment content type](https://github.com/xmtp/XIPs/pull/18)
- [The introduction of filename/contentLength to remote attachments](https://github.com/xmtp/XIPs/pull/19)

<br/>
<FeedbackWidget />
