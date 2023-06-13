---
sidebar_label: Introduction
sidebar_position: 1
description: "XMTP is an open protocol, network, and standards for secure, private web3 messaging."
---

# Introduction to XMTP

XMTP (Extensible Message Transport Protocol) is an open protocol, network, and standards for secure, private web3 messaging.

XMTP's extensible design enables a diverse set of use cases for sending message data between web3 identities. For example, building with an [XMTP client SDK](/docs/introduction#xmtp-sdks-and-example-apps), developers can enhance their apps with:

- **User-to-user** direct messages
- **App-to-user** notifications
- **Creator-to-community** announcements

Because the XMTP network persists messages, and those messages are tied to web3 identities as opposed to a specific client app, each web3 identity has an [**interoperable inbox**](/docs/concepts/interoperable-inbox) that it can access using any client app built with XMTP.

Developers can also build tools for decentralized apps (dapps), decentralized autonomous organizations (DAOs), creators, and protocols to re-engage users with web3 messaging.

XMTP has been implemented to work with Ethereum Virtual Machine (EVM)-compatible wallet apps and blockchain accounts (wallets), though XMTP itself does not use EVMs. XMTP also works with other web3 identities that apps built with XMTP can derive from Ethereum accounts, such as ENS names and Lens profiles.

To learn more, see [Works with XMTP](/docs/build/dev-faqs).

XMTP’s primary contributor, XMTP Labs, is funded by some of the industry’s top venture capital funds, including a16z Crypto and Coinbase Ventures.

## Protocol overview

A user can send and receive encrypted XMTP messages using an app with an embedded XMTP **client**, authenticating using a wallet signature. XMTP network **nodes** persist the user's messages

Clients and nodes are implemented as [Waku2](https://rfc.vac.dev/spec/10/) peers but with XMTP-specific functions and capabilities.

To learn more about clients, see [Client layer](/docs/concepts/architectural-overview#client-layer).

To learn more about nodes, see [Network layer](/docs/concepts/architectural-overview#network-layer).

## XMTP SDKs and example apps

### Client SDKs

XMTP client SDKs are available for:

- [JavaScript](/docs/sdks/js-quickstart)
- [Swift](/docs/sdks/swift-quickstart) (iOS)
- [Dart](/docs/sdks/dart-quickstart) (Flutter)
- [Kotlin](/docs/sdks/kotlin-quickstart) (Android)
- [React](/docs/sdks/react-quickstart)
- [React Native](/docs/sdks/rn-quickstart)

To learn about other SDKs in the works, see the [Roadmap](/roadmap).

### Example apps

Check out these example apps you can use for guidance and inspiration when building with XMTP:

- The [xmtp-quickstart-react repo](https://github.com/xmtp/xmtp-quickstart-react) provides the XMTP Quickstart React chat app, which demonstrates core capabilities of the XMTP client SDK. You can use the code in this repo to learn to build a basic messaging app.

  - [Try the app](https://xmtp-quickstart-react.vercel.app/) connected to the XMTP `dev` network

- The [xmtp-inbox-web repo](https://github.com/xmtp-labs/xmtp-inbox-web) provides the XMTP Inbox chat app, which demonstrates core and advanced capabilities of the XMTP client SDK and showcases innovative ways of building with XMTP.
  - [Try the app](https://dev.xmtp.chat/) connected to the XMTP `dev` network
  - [Try the app](https://xmtp.chat/) connected to the XMTP `production` network

### Ecosystem projects

For even more examples of apps built with XMTP, see these ecosystem projects:

- [Built with XMTP](built-with-xmtp)

## Learn more

Have more questions? See [FAQ about XMTP](/docs/concepts/faq)

Join and learn with the [XMTP Discord community](https://discord.gg/xmtp)

Ready to build with XMTP? [Start here](/start-building)

# Try messaging with XMTP

XMTP is an open protocol and network for secure web3 messaging.

Developers build with [XMTP client SDKs](/docs/introduction#xmtp-sdks-and-example-apps) to provide messaging in their apps. The XMTP messaging API client takes care of:

- [Authentication](/docs/concepts/account-signatures) using an **XMTP identity that you own and control**
- [End-to-end encryption](/docs/concepts/invitation-and-message-encryption) of **messages that you own and control**
- Providing an **[interoperable inbox](/docs/concepts/interoperable-inbox)** accessible across apps built with XMTP
- Relaying messages to the **progressively decentralized** [XMTP network](/docs/concepts/architectural-overview#network-layer)

A great way to start learning how to build an app with XMTP is to use one!

**To start messaging with XMTP:**

1. **Pick an identity** you want to use to message with XMTP.

   You can use an Ethereum address to start.

   If you have an [ENS name](https://ens.domains/) or [Lens handle](https://claim.lens.xyz/) associated with the address, you can tell people to use it to message you instead of using your full Ethereum address.

   Don’t have an Ethereum address? [Create a MetaMask wallet](https://metamask.io/) to get one.

2. **Pick an app.**

   - [Converse](https://getconverse.app/) (iOS): Works with Ethereum addresses, ENS names, and Lens handles
   - [XMTP Inbox](https://xmtp.chat/) (web): Works with Ethereum addresses and ENS names
   - [Buttrfly](https://buttrfly.app/) (iOS): Works with Lens handles
   - [Lenster](https://lenster.xyz/) (web): Works with Lens handles
   - [Orb](https://orb.ac/) (ios and Android): Works with Lens handles

3. **Send a message.**

   To send a message to an address, it must have an XMTP identity already created on the network. Share this page with someone you want to message to help them get on the network if they aren't already there.

   In the meantime, need someone to message with? Send a message to these addresses. Try using an ENS name to message one person (or bot) and an 0x Ethereum address to message another.

   - `gm.xmtp.eth` / `0x937C0d4a6294cdfa575de17382c7076b579DC176`  
      Get an immediate response from the XMTP message bot
   - `yashluna.eth` / `0xf220F05B4830095be149085041735F197ee3D5Aa`  
      Product manager at XMTP Labs
   - `prxshant.eth` / `0x4b70d04124c2996De29e0caa050A49822Faec6Cc`  
      Business development at XMTP Labs

4. **Want to see the [interoperable inbox](/docs/concepts/interoperable-inbox) in action?**

   Try a second app and see all your conversations in both apps, regardless of the app you used to start them. This also means you and a friend can each use your own preferred app to exchange messages.

   With XMTP, you own and control your messages and are always free to use the app that best suits your needs.

Ready to start building with XMTP? Check out some of these developer resources:

- [Start building with XMTP](/start-building)
- [SDKs and tools](/docs/introduction#xmtp-sdks-and-example-apps)
- [Built with XMTP](/built-with-xmtp/): Explore a showcase of apps built with XMTP
- [FAQ about XMTP](/docs/concepts/faq)
