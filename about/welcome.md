---
sidebar_label: Welcome
sidebar_position: 1
---

# Welcome to XMTP

We’re excited you’re here!

## What is XMTP?

XMTP (Extensible Message Transport Protocol) is an open protocol and network for secure, private messaging between blockchain accounts. XMTP is chain-agnostic but currently requires an Ethereum Virtual Machine (EVM) blockchain account.

Building with the [XMTP client SDK](https://github.com/xmtp/xmtp-js), developers can enhance their apps with a portable inbox for direct messages, alerts, and announcements.

Developers can also build tools for decentralized apps (dapps), decentralized autonomous organizations (DAOs), creators, and protocols to re-engage users with web3 messaging.

XMTP’s primary contributor, XMTP Labs, is funded by some of the industry’s top venture capital funds, including a16z Crypto and Coinbase Ventures.

## XMTP at a glance

Here are some key considerations as you explore building with XMTP for secure web3 messaging:

| Consideration | Description |
|:---|:---|
| **Message direction** | Bidirectional |
| **Participant identities** | Any EVM blockchain EOA (externally owned account) can send a message to any other EVM blockchain EOA that has advertised its XMTP identity on the network. |
| **Chain focus** | Chain-agnostic, but currently requires an EVM blockchain account. |
| **Wallet app compatibility** | EVM-compatible wallets capable of signing with private keys, such as MetaMask, Coinbase Wallet, and Rainbow Wallet. |
| **Authentication** | An XMTP-specific key bundle derived from a wallet address signature is used to authenticate participant identities. <br /><br /> To learn more about authentication, see [Participant authentication and message encryption](/docs/client-sdk/javascript/concepts/authentication-and-encryption). |
| **Message encryption** | AES-256-GCM and modified Diffie-Hellman key agreement. Messages are encrypted individually by default and are readable by message participants only. <br /><br /> To learn more about message encryption, see [Participant authentication and message encryption](/docs/client-sdk/javascript/concepts/authentication-and-encryption). |
| **Message delivery** | Messages are immediately relayed by XMTP nodes, using the Waku protocol. <!--<br /><br /> To learn more about how XMTP uses Waku, see What is the relationship between Waku and XMTP?--> |
| **Message storage** | Messages are stored off-chain in the XMTP network, with all nodes currently hosted by XMTP Labs. <br /><br /> We will publish a phased decentralization roadmap in Fall 2022. |
| **Supported content types** | Plaintext messages as a standard content type, but custom content types are supported as well. <br /><br /> To learn more, see [Content types](/docs/client-sdk/javascript/concepts/content-types). |
| **Adoption of standard content types** | Open, extensible, and community-governed via XIP-5 (XMTP Improvement Proposal-5). <br /><br /> To learn more, see [XIP-5 Message Content Types](https://github.com/xmtp/XIPs/blob/main/XIPs/xip-5-message-content-types.md). |
| **Implementation** | Any app built with the XMTP client SDK can send or receive messages. <br /><br /> To learn more, see [Client SDK](/docs/client-sdk/javascript/tutorials/quickstart). |
| **Receiving messages** | Any frontend built with the XMTP client SDK can receive messages. <br /><br /> To learn more, see [Client SDK](/docs/client-sdk/javascript/tutorials/quickstart). |
| **Environments** | JavaScript. Swift and React Native are on the roadmap. |
| **Message cost** | Most messaging incurs no fee. As XMTP decentralizes, messaging between participants that opt-in will remain free, while unsolicited messages will often incur fees or see token staking requirements. <!--<br /><br /> To learn more, see Will XMTP have gas fees?--> |
| **Decentralization** | XMTP network nodes are run by XMTP Labs at this time. In the future, network node software will be open sourced and anyone will be welcome to operate a node. <br /><br /> Client implementation is permissionless, nor is permission required to access and develop with the SDK. Permission isn't required to connect to the XMTP network to send/receive messages on behalf of users. <br /><br /> We will publish a phased decentralization roadmap in Fall 2022. |
