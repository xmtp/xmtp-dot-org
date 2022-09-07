---
sidebar_label: Introduction
sidebar_position: 1
---

# Introduction to XMTP

<!--once we move to xmtp-dot-org, this page will move to be the first page in the dev-concepts section/doc instance-->

We’re excited you’re here!

## What is XMTP?

XMTP (Extensible Message Transport Protocol) is an open protocol and network for secure, private messaging between blockchain accounts (also known as crypto accounts).

XMTP's extensible design enables a diverse set of use cases for sending message data between web3 identities. Building with the [XMTP client SDK](https://github.com/xmtp/xmtp-js), developers can enhance their apps with **wallet-to-wallet** direct messages, **app-to-wallet** notifications, and **creator-to-community** announcements. Because the XMTP network persists messages, and those messages are tied to web3 identities as opposed to a specific client, each web3 identity has a **portable inbox** of that it can access using any client app built with XMTP.

Developers can also build tools for decentralized apps (dapps), decentralized autonomous organizations (DAOs), creators, and protocols to re-engage users with web3 messaging.

XMTP is chain-agnostic but currently works only with Ethereum accounts, as well as other web3 identities that client apps built with XMTP can derive from Ethereum accounts, such as ENS names and Lens profiles.

:::note

In web3, "wallet" is commonly used shorthand that refers to a blockchain "wallet address" or "crypto account." When this documentation needs to refer to a tool for managing blockchain accounts, we use "wallet apps."

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
| **Authentication** | An XMTP-specific key bundle derived from a wallet address signature is used to authenticate participant identities. <br /><br /> To learn more about authentication, see [Participant authentication and message encryption](/docs/dev-concepts/security). |
| **Message encryption** | AES-256-GCM and modified Diffie-Hellman key agreement. Messages are encrypted individually by default and are readable by message participants only. <br /><br /> To learn more about message encryption, see [Participant authentication and message encryption](/docs/dev-concepts/security). |
| **Message delivery** | Messages are immediately relayed by XMTP nodes, using the Waku protocol. <!--<br /><br /> To learn more about how XMTP uses Waku, see What is the relationship between Waku and XMTP?--> |
| **Message storage** | Messages are stored off-chain in the XMTP network, with all nodes currently hosted by XMTP Labs. <br /><br /> We will publish a phased decentralization roadmap in Fall 2022. |
| **Supported content types** | Plaintext messages as a standard content type, but custom content types are supported as well. <br /><br /> To learn more, see [Content types](/docs/dev-concepts/content-types). |
| **Adoption of standard content types** | Open, extensible, and community-governed via XIP-5 (XMTP Improvement Proposal-5). <br /><br /> To learn more, see [XIP-5 Message Content Types](https://github.com/xmtp/XIPs/blob/main/XIPs/xip-5-message-content-types.md). |
| **Implementation** | Any app built with the XMTP client SDK can send or receive messages. <br /><br /> To learn more, see [Client SDK](/docs/client-sdk/javascript/tutorials/quickstart). |
| **Receiving messages** | Any frontend built with the XMTP client SDK can receive messages. <br /><br /> To learn more, see [Client SDK](/docs/client-sdk/javascript/tutorials/quickstart). |
| **Environments** | JavaScript. Swift and React Native are on the roadmap. |
| **Message cost** | Most messaging incurs no fee. As XMTP decentralizes, messaging between participants that opt-in will remain free, while unsolicited messages will often incur fees or see token staking requirements. <!--<br /><br /> To learn more, see Will XMTP have gas fees?--> |
| **Decentralization** | XMTP network nodes are run by XMTP Labs at this time. In the future, network node software will be open sourced and anyone will be welcome to operate a node. <br /><br /> Client implementation is permissionless, nor is permission required to access and develop with the SDK. Permission isn't required to connect to the XMTP network to send/receive messages on behalf of users. <br /><br /> We will publish a phased decentralization roadmap in Fall 2022. |

## Protocol overview

A user can send and receive encrypted XMTP messages using an app with an embedded XMTP **client**, authenticating using a wallet signature. XMTP network **nodes** persist the user's messages

Clients and nodes are implemented as [Waku2](https://rfc.vac.dev/spec/10/) peers but with XMTP-specific functions and capabilities.

### Clients

XMTP clients have the following responsibilities:

- Encode and decode message formats using a [standard interface](https://github.com/xmtp/XIPs/blob/main/XIPs/xip-5-message-content-types.md)
- Encrypt and decrypt encoded message content
- Submit and retrieve encrypted messages to and from the XMTP Network
- Generate secure wallet-based identities capable of encrypting and decrypting messages
- Persist wallet-based identities locally or on the XMTP Network

### Nodes

XMTP nodes have the following responsibilities:

- Relay encrypted messages into replicated storage
- Retrieve encrypted messages from storage and deliver them to clients
- Persist and advertise wallet-based identities

## XMTP client SDK

The XMTP JavaScript SDK is a TypeScript implementation of an XMTP client for use with JavaScript and React apps.

Explore the [XMTP JavaScript SDK](https://github.com/xmtp/xmtp-js) on GitHub.

Have questions? Get help from the [XMTP Discord community](https://discord.gg/xmtp).

To learn more about how you can contribute to XMTP, see [Contribute](contributing).

## Example apps

- Explore the [`example-chat-react` repo](https://github.com/xmtp/example-chat-react) on GitHub. This example React app demonstrates the core capabilities of the XMTP JavaScript SDK. You can customize and deploy the app if you want to.
- XMTP Labs hosts deployments of the `example-chat-react` app to provide people with a way to try out a basic app built with XMTP.
  - [Try the app](https://xmtp.chat/) connected to the XMTP `production` network
  - [Try the app](https://xmtp.vercel.app/) connected to the XMTP `dev` network
