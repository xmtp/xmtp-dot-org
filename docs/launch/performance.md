---
sidebar_label: Performance
sidebar_position: 3
description: Follow these guidelines to optimize your app’s performance.
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import perfArchitecture from '/docs/tutorials/img/performance-architecture.jpeg';

# Optimize performance of your app

Follow these guidelines to optimize your app’s performance. To learn about testing your app's performance, see [Test your app](test-your-app).

## Use a local cache

To learn more, see [Use local-first architecture](/docs/build/local-first).

## Cache the conversation list

Caching the conversation list can improve performance of `client.conversations.list()` by up to 90%.

To learn more, see [Cache the conversation list](/docs/build/conversations#cache-the-conversation-list).

## Cache message histories

Serialize securely stored `DecodedMessage` histories, avoiding the need to download and decrypt the same message on every session.

- Use the JavaScript client SDK (`xmtp-js`) to [serialize securely stored decoded message histories](https://github.com/xmtp/xmtp-js/releases/tag/v8.0.0)

## Page through messages

Page through messages in a conversation instead of fetching them all at the same time.

To learn more, see [List messages in a conversation with pagination](/docs/build/messages#list-messages-in-a-conversation-with-pagination).

## Compress message content

Compress message content using a supported compression algorithm. To learn more, see [Compress message content](/docs/build/messages#compress-message-content).

## Optimize web rendering

To optimize rendering performance on the web, render only what the user can see, instead of rendering everything. For example, if you are building with the React client SDK (`react-sdk`), use virtualized lists for conversations and messages (e.g. `react-virtuoso`).
