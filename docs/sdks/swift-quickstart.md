---
sidebar_label: Swift
sidebar_position: 2
toc_max_heading_level: 4
description: "xmtp-ios provides a Swift implementation of an XMTP message API client for use with iOS apps."
---

# Quickstart for the Swift XMTP client SDK

The [Swift XMTP client SDK](https://github.com/xmtp/xmtp-ios) (`xmtp-ios`) provides a Swift implementation of an XMTP message API client for use with iOS apps.

Build with this SDK to provide messaging between blockchain wallet addresses, including DMs, notifications, announcements, and more.

To keep up with the latest SDK developments, see the [Issues tab](https://github.com/xmtp/xmtp-ios/issues) in the `xmtp-ios` repo.

To learn more about XMTP and get answers to frequently asked questions, see [FAQ about XMTP](/docs/concepts/faq).

## Reference docs

:::tip View the reference

Access the [Swift client SDK reference documentation](https://xmtp.github.io/xmtp-ios/documentation/xmtp/).

:::

## Example app

For a basic demonstration of the core concepts and capabilities of the `xmtp-ios` client SDK, see the [Example app project](https://github.com/xmtp/xmtp-ios/tree/main/XMTPiOSExample/XMTPiOSExample).

## Install with Swift Package Manager

Use Xcode to add to the project (**File** > **Add Packages…**) or add this to your `Package.swift` file:

```swift
.package(url: "https://github.com/xmtp/xmtp-ios", branch: "main")
```

## Usage overview

The XMTP message API revolves around a message API client (client) that allows retrieving and sending messages to other XMTP network participants. A client must connect to a wallet app on startup. If this is the very first time the client is created, the client will generate a key bundle that is used to encrypt and authenticate messages. The key bundle persists encrypted in the network using an account signature. The public side of the key bundle is also regularly advertised on the network to allow parties to establish shared encryption keys. All of this happens transparently, without requiring any additional code.

```swift
import XMTP

// You'll want to replace this with a wallet from your application.
let account = try PrivateKey.generate()

// Create the client with your wallet. This will connect to the XMTP `dev` network by default.
// The account is anything that conforms to the `XMTP.SigningKey` protocol.
let client = try await Client.create(account: account)

// Start a conversation with XMTP
let conversation = try await client.conversations.newConversation(with: "0x3F11b27F323b62B159D2642964fa27C46C841897")

// Load all messages in the conversation
let messages = try await conversation.messages()
// Send a message
try await conversation.send(content: "gm")
// Listen for new messages in the conversation
for try await message in conversation.streamMessages() {
  print("\(message.senderAddress): \(message.body)")
}
```

## Configure content types

You can use custom content types by calling `Client.register`. The SDK comes with two commonly used content type codecs, `AttachmentCodec` and `RemoteAttachmentCodec`:

```swift
Client.register(AttachmentCodec())
Client.register(RemoteAttachmentCodec())
```

To learn more about using `AttachmentCodec` and `RemoteAttachmentCodec`, see [Handle different content types](#handle-different-content-types).

## Handle different content types

All of the send functions support `SendOptions` as an optional parameter. The `contentType` option allows specifying different types of content other than the default simple string standard content type, which is identified with content type identifier `ContentTypeText`.

To learn more about content types, see [Content types with XMTP](/docs/concepts/content-types).

Support for other content types can be added by registering additional `ContentCodec`s with the client. Every codec is associated with a content type identifier, `ContentTypeID`, which is used to signal to the client which codec should be used to process the content that is being sent or received.

For example, see the [Codecs](https://github.com/xmtp/xmtp-ios/tree/main/Sources/XMTP/Codecs) available in `xmtp-ios`.

### Send a remote attachment

Use the [RemoteAttachmentCodec](https://github.com/xmtp/xmtp-ios/blob/main/Sources/XMTP/Codecs/RemoteAttachmentCodec.swift) package to enable your app to send and receive message attachments.

Message attachments are files. More specifically, attachments are objects that have:

- `filename` Most files have names, at least the most common file types.
- `mimeType` What kind of file is it? You can often assume this from the file extension, but it's nice to have a specific field for it. [Here's a list of common mime types.](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types)
- `data` What is this file's data? Most files have data. If the file doesn't have data then it's probably not the most interesting thing to send.

Because XMTP messages can only be up to 1MB in size, we need to store the attachment somewhere other than the XMTP network. In other words, we need to store it in a remote location.

End-to-end encryption must apply not only to XMTP messages, but to message attachments as well. For this reason, we need to encrypt the attachment before we store it.

#### Create an attachment object

```swift
let attachment = Attachment(
  filename: "screenshot.png",
  mimeType: "image/png",
  data: Data(somePNGData)
)
```

#### Encrypt the attachment

Use the `RemoteAttachmentCodec.encodeEncrypted` to encrypt the attachment:

```swift
// Encode the attachment and encrypt that encoded content
const encryptedAttachment = try RemoteAttachment.encodeEncrypted(
	content: attachment,
	codec: AttachmentCodec()
)
```

#### Upload the encrypted attachment

Upload the encrypted attachment anywhere where it will be accessible via an HTTPS GET request. For example, you can use web3.storage:

```swift
func upload(data: Data, token: String): String {
  let url = URL(string: "https://api.web3.storage/upload")!
  var request = URLRequest(url: url)
  request.addValue("Bearer \(token)", forHTTPHeaderField: "Authorization")
  request.addValue("XMTP", forHTTPHeaderField: "X-NAME")
  request.httpMethod = "POST"

  let responseData = try await URLSession.shared.upload(for: request, from: data).0
  let response = try JSONDecoder().decode(Web3Storage.Response.self, from: responseData)

  return "https://\(response.cid).ipfs.w3s.link"
}

let url = upload(data: encryptedAttachment.payload, token: YOUR_WEB3_STORAGE_TOKEN)
```

#### Create a remote attachment

Now that you have a `url`, you can create a `RemoteAttachment`.

```swift
let remoteAttachment = try RemoteAttachment(
  url: url,
  encryptedEncodedContent: encryptedEncodedContent
)
```

#### Send a remote attachment

Now that you have a remote attachment, you can send it:

```swift
try await conversation.send(
	content: remoteAttachment,
	options: .init(
		contentType: ContentTypeRemoteAttachment,
		contentFallback: "a description of the image"
	)
)
```

Note that we’re using `contentFallback` to enable clients that don't support these content types to still display something. For cases where clients _do_ support these types, they can use the content fallback as alt text for accessibility purposes.

#### Receive a remote attachment

Now that you can send a remote attachment, you need a way to receive a remote attachment. For example:

```swift
let messages = try await conversation.messages()
let message = messages[0]

guard message.encodedContent.contentType == ContentTypeRemoteAttachment else {
	return
}

const remoteAttachment: RemoteAttachment = try message.content()
```

#### Download, decrypt, and decode the attachment

Now that you can receive a remote attachment, you need to download, decrypt, and decode it so your app can display it. For example:

```swift
let attachment: Attachment = try await remoteAttachment.content()
```

You now have the original attachment:

```swift
attachment.filename // => "screenshot.png"
attachment.mimeType // => "image/png",
attachment.data // => [the PNG data]
```

#### Display the attachment

Display the attachment in your app as you please. For example, you can display it as an image:

```swift
import UIKIt
import SwiftUI

struct ContentView: View {
	var body: some View {
		Image(uiImage: UIImage(data: attachment.data))
	}
}

```

#### Handle custom content types

Beyond this, custom codecs and content types may be proposed as interoperable standards through XRCs. To learn more about the custom content type proposal process, see [XIP-5](https://github.com/xmtp/XIPs/blob/main/XIPs/xip-5-message-content-types.md).

## Breaking revisions

Because `xmtp-ios` is in active development, you should expect breaking revisions that might require you to adopt the latest SDK release to enable your app to continue working as expected.

XMTP communicates about breaking revisions in the [XMTP Discord community](https://discord.gg/xmtp), providing as much advance notice as possible. Additionally, breaking revisions in an `xmtp-ios` release are described on the [Releases page](https://github.com/xmtp/xmtp-ios/releases).

## Deprecation

Older versions of the SDK will eventually be deprecated, which means:

1. The network will not support and eventually actively reject connections from clients using deprecated versions.
2. Bugs will not be fixed in deprecated versions.

The following table provides the deprecation schedule.

| Announced                                                        | Effective | Minimum Version | Rationale |
| ---------------------------------------------------------------- | --------- | --------------- | --------- |
| There are no deprecations scheduled for `xmtp-ios` at this time. |           |                 |           |

Bug reports, feature requests, and PRs are welcome in accordance with these [contribution guidelines](https://github.com/xmtp/xmtp-ios/blob/main/CONTRIBUTING.md).
