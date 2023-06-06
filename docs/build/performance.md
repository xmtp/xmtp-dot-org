---
sidebar_label: Performance
sidebar_position: 8
description: Follow these guidelines to optimize your app’s performance.
---

# Performance and XMTP

Follow these guidelines to optimize your app’s performance.

## Use a local cache

If you're building a production-grade app, be sure to use an architecture that includes a local cache backed by an XMTP SDK.

![](img/performance-architecture.jpeg)

Use the XMTP SDK to initially retrieve existing message data from the XMTP network and place it in the local cache. Asynchronously load new and updated message data as needed.

Build your app to get message data from the local cache.

For example, use the XMTP SDK to get conversation lists from the XMTP network. Store the conversation lists in the local cache. Build your app to get conversation lists from the local cache.

When building native iOS and Android mobile apps, you can use the device's encrypted container as the local cache to store decrypted data.

When building web apps, you can use the browser `localStorage` as the local cache to store **encrypted** data, decrypting data each time before display.

## Cache the conversation list

Caching the conversation list can improve performance of `client.conversations.list()` by up to 90%.

- Use the JavaScript client SDK (`xmtp-js`) to [cache the conversation list](/docs/sdks/js-quickstart#cache-conversations)
- Use the Kotlin client SDK (`xmtp-android`) to [cache the conversation list](/docs/sdks/kotlin-quickstart#cache-conversations)
- With the React client SDK (`react-sdk`), enable the conversation cache when initializing the client

## Cache message histories

Serialize securely stored `DecodedMessage` histories, avoiding the need to download and decrypt the same message on every session.

- Use the JavaScript client SDK (`xmtp-js`) to [serialize securely stored decoded message histories](https://github.com/xmtp/xmtp-js/releases/tag/v8.0.0)
- With the React client SDK (`react-sdk`), use message caching with the `useCachedMessages` hook

## Page through messages

Page through messages in a conversation instead of fetching them all at the same time.

- Use the JavaScript client SDK (`xmtp-js`) to [page through messages](/docs/sdks/js-quickstart#list-messages-in-a-conversation-with-pagination)
- Use the Kotlin client SDK (`xmtp-android`) to [page through messages](/docs/sdks/kotlin-quickstart#list-messages-in-a-conversation-with-pagination)
- Use the Swift client SDK (`xmtp-ios`) to [page through messages](/docs/sdks/swift-quickstart#list-messages-in-a-conversation-with-pagination)
- Use the React client SDK (`react-sdk`) to [page through messages](/docs/sdks/react-quickstart#page-through-messages)
- Use the Dart client SDK (`xmtp-flutter`) to [page through messages](/docs/sdks/dart-quickstart#list-messages-in-a-conversation-with-pagination)

## Compress message content

Compress message content using a supported compression algorithm.

- Use the JavaScript client SDK (`xmtp-js`) to [compress messages](/docs/sdks/js-quickstart#compression)
- Use the Kotlin client SDK (`xmtp-android`) to [compress messages](/docs/sdks/kotlin-quickstart#compression)
- Use the Swift client SDK (`xmtp-ios`) to [compress messages](/docs/sdks/swift-quickstart#compression)
- Use the Dart client SDK (`xmtp-flutter`) to [compress messages](/docs/sdks/dart-quickstart#compression)

## Check performance benchmarks

Consider how your app performs against these performance benchmarks:

- Time to load conversation list: 8-15ms to decrypt invites per conversation
- Sender UX: Time between sending a message and displaying the message in the conversation thread: ≤1 second
- Recipient UX: Time between sending a message and displaying the message in the conversation thread: ≤1 second
