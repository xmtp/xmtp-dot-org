---
sidebar_label: Local-first cache
sidebar_position: 1.5
description: "Get started building apps with XMTP."
---

# Use local-first architecture

If you're building a production-grade app, be sure to use a local-first architecture to help you build a performant app. Using this local-first architecture, the client prioritizes using the local cache on the device where it’s running.

For example, use the XMTP SDK to initially retrieve existing message data from the XMTP network and place it in the local cache. Asynchronously load new and updated message data as needed. Build your app to get message data from the local cache.

Here’s an overview of how your app frontend, local cache, client SDK, and the XMTP network work together in this local-first approach:

import localfirst from '/docs/build/img/local-first-arch.jpeg';

<img src={localfirst} style={{width:"450px"}}/>

- When building a web app with the [React SDK](https://github.com/xmtp/xmtp-web/tree/main/packages/react-sdk), the local-first architecture is automatically provided by the SDK.

- When building a web app with the [xmtp-js SDK](https://github.com/xmtp/xmtp-js), you can use the browser `localStorage` as the local cache to store encrypted data, decrypting data each time before display.

- When building native iOS and Android mobile apps, you can use the device's encrypted container as the local cache to store decrypted data.

For more performance best practices, see [Optimize performance of your app](/docs/launch/performance)
