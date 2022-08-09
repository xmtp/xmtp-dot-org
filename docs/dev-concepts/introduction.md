---
sidebar_label: Introduction
sidebar_position: 1
---

# Introduction to building with XMTP

**XMTP** (Extensible Message Transport Protocol) is a **messaging protocol** and **decentralized communication network** that enables blockchain wallet addresses (also known as crypto accounts) to send messages to other wallet addresses.

XMTP's extensible design enables a diverse set of use cases for sending message data between web3 identities, such as **wallet-to-wallet** messaging, **app-to-wallet** notifications, and **creator-to-community** announcements. XMTP works with Ethereum accounts and other web3 identities that clients built with XMTP can derive from Ethereum accounts, such as ENS names and Lens profiles.

Because the XMTP network persists messages, and those messages are tied to web3 identities as opposed to a specific client, each web3 identity has a **portable inbox** that it can access using any client built with XMTP.

:::tip

In web3, "wallet" is commonly used shorthand that refers to a blockchain "wallet address" or "crypto account." When this documentation needs to refer to a tool for managing blockchain accounts, we use "wallet apps."

:::

## Protocol overview

A user can send and receive encrypted XMTP messages using an app with an embedded an XMTP **client**, authenticating using a wallet signature. XMTP network **nodes** persist the user's messages

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

Have questions? Get help from the XMTP community on Discord. [Request access](https://xmtp.typeform.com/to/yojTJarb?utm_source=docs_home)

To learn more about how you can contribute to XMTP, see [Community](community).

## Roadmap

Here are just a few details about what's in store for XMTP.

### Future support for progressive decentralization

In v1, the XMTP Network will be comprised of nodes operated by XMTP Labs.

This version of the XMTP Network will include a temporary security layer that XMTP Labs will use to control which wallets can:

- Register identities with the network layer
- Submit messages to the network layer

Future versions of the protocol will replace these temporary security controls with a series of controls intended to:

- Manage spam
- Reduce the surface area for malicious behavior
- Ensure network reliability

One such control is an economic model aimed at providing network resistance against Sybil attacks. Proposed as "Postage" in the forthcoming XMTP whitepaper, this model specifies:

- Free message delivery between a sender and recipient who offer proof of a relationship
- Paid message delivery for a sender to reach a recipient who the sender cannot prove a relationship with

Postage will fund incentives for community-operated nodes, enabling decentralized operation of the XMTP Network.

We also envision a configurable long-term storage layer, aimed at improving network scalability, message security, and user data portability.

### Future support for additional platforms

- XMTP JavaScript SDK support for React Native
- Swift and Kotlin client implementations
- Server-side client implementations

:::note Reminder

Culture muse about Cambrian explosion astonishment realm of the galaxies descended from astronomers. Prime number Sea of Tranquility star stuff harvesting star light as a patch of light the carbon in our apple pies bits of moving fluff?

:::

:::info

Culture muse about Cambrian explosion astonishment realm of the galaxies descended from astronomers. Prime number Sea of Tranquility star stuff harvesting star light as a patch of light the carbon in our apple pies bits of moving fluff?

:::

:::tip

Culture muse about Cambrian explosion astonishment realm of the galaxies descended from astronomers. Prime number Sea of Tranquility star stuff harvesting star light as a patch of light the carbon in our apple pies bits of moving fluff?

:::

:::caution

Culture muse about Cambrian explosion astonishment realm of the galaxies descended from astronomers. Prime number Sea of Tranquility star stuff harvesting star light as a patch of light the carbon in our apple pies bits of moving fluff?

:::

:::danger

Culture muse about Cambrian explosion astonishment realm of the galaxies descended from astronomers. Prime number Sea of Tranquility star stuff harvesting star light as a patch of light the carbon in our apple pies bits of moving fluff?

:::
