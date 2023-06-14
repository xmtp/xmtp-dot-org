---
sidebar_label: Performance
sidebar_position: 1
description: Follow these guidelines to optimize your app’s performance.
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import perfArchitecture from '/docs/tutorials/img/performance-architecture.jpeg';

# Optimize performance of your app

Follow these guidelines to optimize your app’s performance. To learn about testing your app's performance, see [Test your app](test-your-app).

## Use a local cache

If you're building a production-grade app, be sure to use an architecture that includes a local cache backed by an XMTP SDK.

<img src={perfArchitecture} style={{width:"500px"}}/>

Use the XMTP SDK to initially retrieve existing message data from the XMTP network and place it in the local cache. Asynchronously load new and updated message data as needed.

Build your app to get message data from the local cache.

For example, use the XMTP SDK to get conversation lists from the XMTP network. Store the conversation lists in the local cache. Build your app to get conversation lists from the local cache.

When building native iOS and Android mobile apps, you can use the device's encrypted container as the local cache to store decrypted data.

When building web apps, you can use the browser `localStorage` as the local cache to store **encrypted** data, decrypting data each time before display.

## Cache the conversation list

Caching the conversation list can improve performance of `client.conversations.list()` by up to 90%.

To learn more, see [Cache the conversation list](/docs/build/conversations#cache-the-conversation-list).

## Cache message histories

Serialize securely stored `DecodedMessage` histories, avoiding the need to download and decrypt the same message on every session.

- Use the JavaScript client SDK (`xmtp-js`) to [serialize securely stored decoded message histories](https://github.com/xmtp/xmtp-js/releases/tag/v8.0.0)
- With the React client SDK (`react-sdk`), use message caching with the `useCachedMessages` hook

## Page through messages

Page through messages in a conversation instead of fetching them all at the same time.

To learn more, see [List messages in a conversation with pagination](/docs/build/messages#list-messages-in-a-conversation-with-pagination).

## Compress message content

Compress message content using a supported compression algorithm.

<Tabs groupId="sdk-langs">
<TabItem value="js" label="JavaScript" default>

Message content can be optionally compressed using the `compression` option. The value of the option is the name of the compression algorithm to use. Currently supported are `gzip` and `deflate`. Compression is applied to the bytes produced by the content codec.

Content will be decompressed transparently on the receiving end. Note that `Client` enforces maximum content size. The default limit can be overridden through the `ClientOptions`. Consequently a message that would expand beyond that limit on the receiving end will fail to decode.

```ts
import { Compression } from "@xmtp/xmtp-js";

conversation.send("#".repeat(1000), {
  compression: Compression.COMPRESSION_DEFLATE,
});
```

</TabItem>
<TabItem value="swift" label="Swift" default>

Message content can be optionally compressed using the compression option. The value of the option is the name of the compression algorithm to use. Currently supported are gzip and deflate. Compression is applied to the bytes produced by the content codec.

Content will be decompressed transparently on the receiving end. Note that Client enforces maximum content size. The default limit can be overridden through the ClientOptions. Consequently, a message that would expand beyond that limit on the receiving end will fail to decode.

```swift
try await conversation.send(text: '#'.repeat(1000), options: .init(compression: .gzip))
```

</TabItem>
<TabItem value="kotlin" label="Kotlin - beta" default>

Message content can be optionally compressed using the compression option. The value of the option is the name of the compression algorithm to use. Currently supported are gzip and deflate. Compression is applied to the bytes produced by the content codec.

Content will be decompressed transparently on the receiving end. Note that `Client` enforces maximum content size. The default limit can be overridden through the `ClientOptions`. Consequently, a message that would expand beyond that limit on the receiving end will fail to decode.

```kotlin
conversation.send(
    text = '#'.repeat(1000),
    options = ClientOptions.Api(compression = EncodedContentCompression.GZIP)
)
```

</TabItem>
</Tabs>
