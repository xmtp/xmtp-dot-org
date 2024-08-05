---
description: "XMTP is an open protocol, network, and standards for secure, private web3 messaging."
sidebar_position: 1
---

# Introduction to XMTP

XMTP (Extensible Message Transport Protocol) is an open protocol, network, and standards for secure, private web3 messaging.

## Why XMTP?

Developers build with XMTP SDKs to provide messaging between blockchain accounts in their apps. The XMTP messaging API client takes care of:

- [Authentication](/protocol/signatures) using an **XMTP identity that the user owns and controls**

- [End-to-end encryption](/protocol/v2/invitation-and-message-encryption) of **messages that the user owns and controls**

- Providing an **[interoperable inbox](/protocol/portable-inbox)** accessible across apps built with XMTP

- Relaying messages to the **progressively decentralized** [XMTP network](/protocol/v2/architectural-overview#network-layer)

## Find your XMTP client SDK

- [JavaScript](https://github.com/xmtp/xmtp-js)
- [React](https://github.com/xmtp/xmtp-web/tree/main/packages/react-sdk)
- [React Native](https://github.com/xmtp/xmtp-react-native)
- [Kotlin](https://github.com/xmtp/xmtp-android)
- [Swift](https://github.com/xmtp/xmtp-ios)

XMTP client SDKs require you to use [ethers](https://ethers.org/) or another web3 library capable of supplying an [ethers Signer](https://docs.ethers.io/v5/api/signer/). These [wallet connection tools](faq#wallet-connectors), as well as others, provide this capability.

## Try messaging with XMTP

A great way to start learning how to build an app with XMTP is to use one!

:::::steps

### Pick an identity you want to use to message with XMTP

You can use an Ethereum address to start.

If you have an [ENS name](https://ens.domains/), [UNS name](https://unstoppabledomains.com/), or [Lens handle](https://claim.lens.xyz/) associated with the address, you can tell people to use it to message you instead of using your full Ethereum address.

Don’t have an Ethereum address? Create one using a [compatible wallet app](/get-started/faq#wallet-apps) of your choice. For example:

- [Coinbase Wallet](https://www.coinbase.com/wallet): When you create an Ethereum account, you can claim a free `cb.id` web3 username

- [MetaMask wallet](https://metamask.io/)

### Pick an app

Explore apps on [https://xmtp.org/](https://xmtp.org/).

### Send a message

To send a message to an address it must have an XMTP identity already created on the network. Share this page with someone you want to message to help them get on the network if they aren't already there.

In the meantime, need someone to message with? Send a message to the following address and get an immediate response from the XMTP message bot: `gm.xmtp.eth` / `0x937C0d4a6294cdfa575de17382c7076b579DC176`. You can message the ENS name or the raw 0x address.

### See the [interoperable inbox](/protocol/portable-inbox) in action

Try a second app and see all of your conversations in both apps, regardless of the app you used to start them. This also means you and a friend can each use your own preferred app to exchange messages.

With XMTP, you own and control your messages and are always free to use the app that best suits your needs.

:::::

## Understand what works with XMTP

XMTP has been implemented to work with Ethereum Virtual Machine (EVM)-compatible wallet apps and blockchain accounts (wallets), though XMTP itself does not use EVMs. XMTP also works with other web3 identities that apps built with XMTP can derive from Ethereum accounts, such as ENS names and Lens profiles.

To learn more, see [Works with XMTP]/get-started/faq#what-works-with-xmtp).

## Understand XMTP concepts

The [XMTP message API](/protocol/v2/architectural-overview#network-layer) revolves around a network client that allows retrieving and sending messages to other network participants.

A client must be connected to a wallet on startup. If this is the very first time the client is created, the client will generate a [key bundle](/protocol/v2/key-generation-and-usage) that is used to [encrypt and authenticate messages](/protocol/v2/invitation-and-message-encryption).

The key bundle persists encrypted in the network using a [wallet signature](/protocol/signatures). The public side of the key bundle is also regularly advertised on the network to allow parties to establish shared encryption keys.

A user can send and receive encrypted XMTP messages using an app with an embedded XMTP messaging API [client](/protocol/v2/architectural-overview#client-layer). XMTP network [nodes](/protocol/v2/architectural-overview#network-layer) transport and persist the user's messages.

For the protocol specification, see [The XMTP Protocol](https://github.com/xmtp/proto/blob/main/PROTOCOL.md) in the `proto` GitHub repo.