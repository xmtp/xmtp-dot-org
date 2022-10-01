---
sidebar_label: Intro to the XMTP JavaScript SDK
sidebar_position: 1
---

# Introduction to the XMTP JavaScript SDK

The [XMTP JavaScript SDK](https://github.com/xmtp/xmtp-js) is a TypeScript implementation of an XMTP client for use with JavaScript and React apps.

When you build an app with XMTP, you can use the following functions provided by the SDK:

| Function | Description |
| --- | --- |
| Key pair generation | Create XMTP keys used for message signing and encryption and advertising public keys to the network. |
| Key storage | Store XMTP keys securely. |
| Key signing | Sign XMTP keys using a connected wallet app. |
| Relationship initiation | Create a secure messaging relationship between two accounts. |
| Conversation initiation | Create a container of messages between two accounts. |
| Message sending | Capture plaintext and submit it to the network. |
| Message history retrieval | Retrieve the history of messages between two accounts, filterable by date range. |
| Message streaming | Receive new messages in real-time. |
| Message authentication | Validate messages are from their purported sender. |
| Message format validation | Ensure messages are properly formatted for the XMTP network. |

To learn how to build an app with the XMTP SDK, see [Quickstart for the XMTP JavaScript SDK](/docs/client-sdk/javascript/tutorials/quickstart).

To learn about XMTP SDK classes and interfaces, see [XMTP JavaScript SDK Reference](/docs/client-sdk/javascript/reference/classes/Client).
