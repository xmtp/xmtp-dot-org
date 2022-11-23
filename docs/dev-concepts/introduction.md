---
sidebar_label: Introduction
sidebar_position: 1
---

# Introduction to XMTP

XMTP (Extensible Message Transport Protocol) is an open protocol, network, and standards for secure, private web3 messaging.

XMTP's extensible design enables a diverse set of use cases for sending message data between web3 identities. For example, building with the XMTP client SDK for [Flutter](/docs/client-sdk/flutter/concepts/intro-to-sdk), [JavaScript](/docs/client-sdk/javascript/concepts/intro-to-sdk), or [Swift](/docs/client-sdk/swift/concepts/intro-to-sdk), developers can enhance their apps with:

- **User-to-user** direct messages
- **App-to-user** notifications
- **Creator-to-community** announcements

Because the XMTP network persists messages, and those messages are tied to web3 identities as opposed to a specific client app, each web3 identity has a **portable inbox** of that it can access using any client app built with XMTP.

Developers can also build tools for decentralized apps (dapps), decentralized autonomous organizations (DAOs), creators, and protocols to re-engage users with web3 messaging.

XMTP has been implemented to work with Ethereum Virtual Machine (EVM)-compatible wallet apps and blockchain accounts (wallets), though XMTP itself does not use EVMs. XMTP also works with other web3 identities that apps built with XMTP can derive from Ethereum accounts, such as ENS names and Lens profiles.

To learn more, see [Wallet apps and blockchains supported by XMTP](wallets).

:::tip Blockchain account versus wallet app

In web3, people commonly use _wallet_ as shorthand to refer to a _blockchain account_, _crypto account_, or _wallet address_. This documentation uses **blockchain account** to refer to this concept of a unique identifier for a blockchain wallet held by a user. This documentation uses **wallet app** to refer to a tool for managing blockchain accounts.

:::

XMTP’s primary contributor, XMTP Labs, is funded by some of the industry’s top venture capital funds, including a16z Crypto and Coinbase Ventures.

## XMTP at a glance

Here are some key considerations as you explore building with XMTP for secure web3 messaging:

| Consideration | Description |
|:---|:---|
| **Message direction** | Bidirectional |
| **Participant identities** | Any EVM blockchain EOA (externally owned account) can send a message to any other EVM blockchain EOA that has advertised its XMTP identity on the network. |
| **Chain focus** | Chain-agnostic, but currently requires an EVM blockchain account. |
| **Wallet app compatibility** | EVM-compatible wallets capable of signing with private keys, such as MetaMask, Coinbase Wallet, and Rainbow Wallet. |
| **Authentication** | An XMTP-specific key bundle derived from a blockchain account address signature is used to authenticate a user identity. <br /><br /> To learn more about these key bundles, see [Key generation and usage](/docs/dev-concepts/key-generation-and-usage). |
| **Message encryption** | Messages are encrypted individually by default and are readable by message participants only. <br /><br /> To learn more about message encryption, see [Invitation and message encryption](invitation-and-message-encryption). |
| **Message delivery** | Messages are immediately relayed by XMTP nodes, using the Waku protocol. <!--<br /><br /> To learn more about how XMTP uses Waku, see What is the relationship between Waku and XMTP?--> |
| **Message storage** | Messages are stored off-chain in the XMTP network, with all nodes currently hosted by XMTP Labs. <br /><br /> XMTP Labs is working toward a phased decentralization of the network and will share a roadmap in the coming months. |
| **Supported content types** | Plaintext messages as a standard content type, but custom content types are supported as well. <br /><br /> To learn more, see [Content types](/docs/dev-concepts/content-types). |
| **Adoption of standard content types** | Open, extensible, and community-governed via XIP-5 (XMTP Improvement Proposal-5). <br /><br /> To learn more, see [XIP-5 Message Content Types](https://github.com/xmtp/XIPs/blob/main/XIPs/xip-5-message-content-types.md). |
| **Implementation** | Any app built with the XMTP client SDK can send or receive messages. <br /><br /> To learn more, see [XMTP client SDKs](/sdks-and-tools). |
| **Receiving messages** | Any frontend built with the XMTP client SDK can receive messages. <br /><br /> To learn more, see [XMTP client SDKs](/sdks-and-tools). |
| **Environments** | JavaScript. Swift and React Native are on the roadmap. |
| **Message cost** | Most messaging incurs no fee. As XMTP decentralizes, messaging between participants that opt-in will remain free, while unsolicited messages will often incur fees or see token staking requirements. <!--<br /><br /> To learn more, see Will XMTP have gas fees?--> |
| **Decentralization** | XMTP network nodes are run by XMTP Labs at this time. In the future, network node software will be open sourced and anyone will be welcome to operate a node. <br /><br /> Client implementation is permissionless, nor is permission required to access and develop with the SDK. Permission isn't required to connect to the XMTP network to send/receive messages on behalf of users. <br /><br /> XMTP Labs is working toward a phased decentralization of the network and will share a roadmap in the coming months. |

## Protocol overview

A user can send and receive encrypted XMTP messages using an app with an embedded XMTP **client**, authenticating using a wallet signature. XMTP network **nodes** persist the user's messages

Clients and nodes are implemented as [Waku2](https://rfc.vac.dev/spec/10/) peers but with XMTP-specific functions and capabilities.

To learn more about clients, see [Client layer](architectural-overview#client-layer).

To learn more about nodes, see [Network layer](architectural-overview#network-layer).

## Example apps

- Explore the [`example-chat-react` repo](https://github.com/xmtp/example-chat-react) on GitHub. This example React app demonstrates the core capabilities of the XMTP JavaScript SDK. You can customize and deploy the app if you want to.
- XMTP Labs hosts deployments of the `example-chat-react` app to provide people with a way to try out a basic app built with XMTP.
  - [Try the app](https://xmtp.chat/) connected to the XMTP `production` network
  - [Try the app](https://xmtp.vercel.app/) connected to the XMTP `dev` network
