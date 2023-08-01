---
sidebar_label: Attachments
sidebar_position: 7
description: Support image, video, and document message attachments in your app
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# Remote Attachment Content Type

Remote attachments of any size can be sent using the `RemoteAttachmentCodec` and a storage provider.

### Install the package

<Tabs groupId="sdk-langs">
<TabItem value="js" label="JavaScript"  attributes={{className: "js_tab"}}>

```bash
npm i @xmtp/content-type-remote-attachment
```

</TabItem></Tabs>

### Import and register

<Tabs groupId="sdk-langs">
<TabItem value="js" label="JavaScript"  attributes={{className: "js_tab"}}>

```tsx
// Import the codecs we're going to use
import {
  AttachmentCodec,
  RemoteAttachmentCodec,
} from "@xmtp/content-type-remote-attachment";
// Create the XMTP client
const xmtp = await Client.create(signer, { env: "dev" });
// Register the codecs. AttachmentCodec is for local attachments (<1MB)
xmtp.registerCodec(new AttachmentCodec());
//RemoteAttachmentCodec is for remote attachments (>1MB) using thirdweb storage
xmtp.registerCodec(new RemoteAttachmentCodec());
```

</TabItem></Tabs>

### Create an attachment object

<Tabs>
<TabItem value="backend" label="Backend"  attributes={{className: "js_tab"}}>

```tsx
// Local file details
const fs = require("fs");
const path = require("path");

const filePath = "xmtp.png";
const data = fs.readFileSync(filePath);
const filename = path.basename(filePath);
const extname = path.extname(filePath);
console.log(`Filename: ${filename}`);
console.log(`Type: ${extname}`);
```

</TabItem>
<TabItem value="frontend" label="Frontend" attributes={{className: "react_tab"}}>

```tsx
// Local file details
const readAsArrayBuffer = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () =>
      reader.result instanceof ArrayBuffer
        ? resolve(reader.result)
        : reject(new Error("Not an ArrayBuffer"));
    reader.readAsArrayBuffer(file);
  });
const data = await readAsArrayBuffer(file);
```

</TabItem>
</Tabs>

```tsx
// Local file details
const attachment = {
  filename: filename,
  mimeType: extname,
  data: new Uint8Array(data),
};
```

### Encrypt the attachment

Use the `RemoteAttachmentCodec.encodeEncrypted` to encrypt the attachment:

<Tabs groupId="sdk-langs">
<TabItem value="js" label="JavaScript"  attributes={{className: "js_tab"}}>

```tsx
const encryptedEncoded = await RemoteAttachmentCodec.encodeEncrypted(
  attachment,
  new AttachmentCodec(),
);
```

</TabItem></Tabs>

### Upload the encrypted attachment

Upload the encrypted attachment anywhere where it will be accessible via an HTTPS GET request. For example, you can use web3.storage:

<Tabs>
<TabItem value="web3storage" label="Web3 Storage" attributes={{className: "web3storage_tab"}} >

```tsx
const { Web3Storage } = require("web3.storage");

class Upload {
  constructor(name, data) {
    this.name = name;
    this.data = data;
  }

  stream() {
    const self = this;
    return new ReadableStream({
      start(controller) {
        controller.enqueue(Buffer.from(self.data));
        controller.close();
      },
    });
  }
}

const upload = new Upload("uploadIdOfYourChoice", encryptedEncoded.payload);

const web3Storage = new Web3Storage({
  token: "YOURTOKENHERE",
});

const cid = await web3Storage.put([upload]);
const url = `https://${cid}.ipfs.w3s.link/uploadIdOfYourChoice`;
```

</TabItem>
<TabItem value="thirdweb" label="Thirdweb" attributes={{className: "thirdweb_tab"}}>

```tsx
import { useStorageUpload } from "@thirdweb-dev/react";
const { mutateAsync: upload } = useStorageUpload();
const uploadUrl = await upload({
  //encryptedEncoded.payload.buffer is a Uint8Array
  //We need to convert it to a File to upload it to the IPFS network
  data: [new File([encryptedEncoded.payload.buffer], file.name)], // Convert Uint8Array back to File
  options: { uploadWithGatewayUrl: true, uploadWithoutDirectory: true },
});
const url = uploadUrl[0];
```

</TabItem>
</Tabs>

### Create a remote attachment

Now that you have a `url`, you can create a `RemoteAttachment`.

<Tabs groupId="sdk-langs">
<TabItem value="js" label="JavaScript"  attributes={{className: "js_tab"}}>

```jsx
const remoteAttachment = {
  url: url,
  contentDigest: encryptedEncoded.digest,
  salt: encryptedEncoded.salt,
  nonce: encryptedEncoded.nonce,
  secret: encryptedEncoded.secret,
  scheme: "https://",
  filename: attachment.filename,
  contentLength: attachment.data.byteLength,
};
```

</TabItem></Tabs>

### Send a remote attachment

Now that you have a remote attachment, you can send it:

<Tabs groupId="sdk-langs">
<TabItem value="js" label="JavaScript"  attributes={{className: "js_tab"}}>

```tsx
await conversation.send(remoteAttachment, {
  contentType: ContentTypeRemoteAttachment,
});
```

</TabItem></Tabs>

## Download, decrypt, and decode the attachment

Now that you can receive a remote attachment, you need a way to receive a remote attachment. For example:

<Tabs groupId="sdk-langs">
<TabItem value="js" label="JavaScript"  attributes={{className: "js_tab"}}>

```tsx
if (message.contentType.sameAs(RemoteAttachmentContentType)) {
  const attachment = await RemoteAttachmentCodec.load(message.content, client);
}
```

</TabItem></Tabs>

- You now have the original attachment:

```bash
attachment.filename // => "screenshot.png"
attachment.mimeType // => "image/png",
attachment.data // => [the PNG data]
```

## Create a preview attachment object

Once you have the attachment object created, you can also create a preview for what to show in a message input before sending:

<Tabs groupId="sdk-langs">
<TabItem value="js" label="JavaScript"  attributes={{className: "js_tab"}}>

```tsx
URL.createObjectURL(
    new Blob([Buffer.from(attachment.data)], {
    type: attachment.mimeType,
  }),
),
```

</TabItem></Tabs>

## Storage considerations

XMTP messages have a size limit of 1 MB and most attachment types will exceed this size. As a result, you must store attachments in a remote location outside of the XMTP network.

You can use storage options such as Web3 Storage, ThirdWeb Storage, S3 buckets, and others. Another option is to allow your users to provide their own storage credentials for one of these services.

The [xmtp.chat](https://xmtp.chat) reference implementation uses Web3 Storage, with XMTP Labs hosting with our own token. We wanted to use a decentralized solution, which made Web3 Storage a good choice. Hosting with our own token reduces user friction, but we cap uploads at 5 MB. In the future, [xmtp.chat](https://xmtp.chat) might give users the option to provide their own token if they want to upload larger file sizes or keep their images beyond a certain timeframe.

## Security considerations

:::caution

Automatically loading attachments from untrusted users can have negative security implications. Be sure to consider this before enabling attachments to autoload in your app.

:::

A more secure pattern you might want to use is to require the user to click a “Click to load” CTA before loading an attachment. After the attachment has been loaded, it can be pulled from a cache. This pattern requires one more click for the user, but provides greater security.

The [xmtp.chat](https://xmtp.chat) reference implementation intentionally demonstrates both patterns for your reference:

- Less secure: Attachments under 5 MB autoload
- More secure: Attachments over 5 MB require a "Click to load" on first load

## Privacy considerations

:::caution

Automatically loading attachments from untrusted users can have negative privacy implications. Be sure to consider this before enabling attachments to autoload in your app.

:::

Specifically, autoloading attachments enables the owner of the server where the attachment is stored to see user information such as IP address, user agent, and so forth.

When you require a user to click a CTA to load the attachment, the server doesn't need to know any user-related information. Instead, the user is in control of the process and can retrieve the attachment without revealing any personal information.

## UI considerations

There are a few considerations worth mentioning on the UI side:

- Provide drag-and-drop functionality for users if you’re building a web app.
- Provide zoom capability for images.
- Provide a loading state, as attachments can be slower to send than a message with just text. You might choose to optimistically send attachments or display a loading state.
- Provide fallback text that displays for the recipient if they are using an app that doesn't yet support attachments.

The [xmtp.chat](https://xmtp.chat) reference implementation includes the following error handling states, which you might want to consider for your app as well:

- File size limit exceeded  
   If your app enforces a file size limit, provide error handling when the size limit is exceeded.
- Unsupported file type  
   Provide error handling when a user attempts to attach an unsupported file type.
- Error sending an attachment  
   Provide this general error handling to cover other errors when sending an attachment.

To help users avoid these error states in the first place, consider providing UI text that proactively lets users know about file size limits and supported file types.

## Performance considerations

To make your app more performant when loading attachments, consider caching these image URLs after the first load.

The [xmtp.chat](https://xmtp.chat) reference implementation does this using Dexie, but there are other options as well.

Note that when caching attachments, you must reset the cache after the client changes.
