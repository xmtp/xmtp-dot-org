---
sidebar_label: SDK overview
sidebar_position: 1
---

# Overview of XMTP JavaScript SDK functions

<!--from https://github.com/xmtp/docs/blob/main/docs/client-sdk/xmtp-js.md. Need to understand the context for this info - where in the flow is this used? It would be great to link from this "plain English" list to code that provides these functions. This may be more appropriate in the Reference section. Is there more info like this that we want to provide about the SDK?-->

The XMTP JavaScript SDK is a TypeScript implementation of an XMTP client for use with JavaScript and React apps.

When you build an app with XMTP, you can use the following functions provided by the SDK:

| Function | Description |
| --- | --- |
| Wallet-based authentication  | Connect to a user's wallet to get the wallet address, sign keys used for message signing and encryption, and authenticate incoming messages. |
| Wallet connection management | Manage changes in wallet addresses or chain IDs. Manage connection issues. |
| Key pair generation | Create keys used for message signing and encryption and advertising public keys to the network. |
| Key storage | Store keys securely. |
| Key signing | Sign keys with a connected wallet. |
| Relationship initiation | Create a secure messaging relationship between two wallets. |
| Conversation initiation | Create a container of messages between two wallets. |
| Message sending | Capture plaintext and submit it to the network. |
| Message history retrieval | Retrieve the history of messages between two wallets, filterable by date range. |
| Message streaming | Receive new messages in real-time. |
| Message content validation | Ensure message security using this middleware. |
| Message format validation | Ensure messages are properly formatted for the XMTP network using this middleware. |
