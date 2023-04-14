---
sidebar_label: Introduction
sidebar_position: 1
---

# Introduction to XMTP

XMTP (Extensible Message Transport Protocol) is an open protocol, network, and standards for secure, private web3 messaging.

XMTP's extensible design enables a diverse set of use cases for sending message data between web3 identities. For example, building with an [XMTP client SDK](/sdks-and-tools), developers can enhance their apps with:

- **User-to-user** direct messages
- **App-to-user** notifications
- **Creator-to-community** announcements

Because the XMTP network persists messages, and those messages are tied to web3 identities as opposed to a specific client app, each web3 identity has an [**interoperable inbox**](interoperable-inbox) that it can access using any client app built with XMTP.

Developers can also build tools for decentralized apps (dapps), decentralized autonomous organizations (DAOs), creators, and protocols to re-engage users with web3 messaging.

XMTP has been implemented to work with Ethereum Virtual Machine (EVM)-compatible wallet apps and blockchain accounts (wallets), though XMTP itself does not use EVMs. XMTP also works with other web3 identities that apps built with XMTP can derive from Ethereum accounts, such as ENS names and Lens profiles.

To learn more, see [Chains and wallet apps supported by XMTP](wallets).

XMTP’s primary contributor, XMTP Labs, is funded by some of the industry’s top venture capital funds, including a16z Crypto and Coinbase Ventures.

## XMTP at a glance

Here are some key considerations as you explore building with XMTP for secure web3 messaging:

| Consideration | Description |
|:---|:---|
| **Message direction** | Bidirectional |
| **Participant identities** | Any EVM blockchain EOA (externally owned account) can send a message to any other EVM blockchain EOA that has advertised its XMTP identity on the network. |
| **Chain focus** | Chain-agnostic, but currently requires an EVM blockchain account. <br /><br /> To learn more, see [Chains and wallet apps supported by XMTP](wallets). |
| **Wallet app compatibility** | EVM-compatible wallets capable of signing with private keys, such as MetaMask, Coinbase Wallet, and Rainbow Wallet. <br /><br /> To learn more, see [Chains and wallet apps supported by XMTP](wallets). |
| **Authentication** | An XMTP-specific key bundle derived from a blockchain account address signature is used to authenticate a user identity. <br /><br /> To learn more about these key bundles, see [Key generation and usage](/docs/dev-concepts/key-generation-and-usage). |
| **Message encryption** | Messages are encrypted individually by default and are readable by message participants only. <br /><br /> To learn more about message encryption, see [Invitation and message encryption](invitation-and-message-encryption). |
| **Message delivery** | Messages are immediately relayed by XMTP nodes, using the Waku protocol. <br /><br /> To learn more, see [Network layer](architectural-overview#network-layer). |
| **Message storage** | Messages are stored off-chain in the XMTP network, with all nodes currently hosted by XMTP Labs. <br /><br /> XMTP Labs is working toward a phased decentralization of the network and will share a roadmap in the coming months. |
| **Supported content types** | Plaintext messages as a standard content type, but custom content types are supported as well. <br /><br /> To learn more, see [Content types](/docs/dev-concepts/content-types). |
| **Adoption of standard content types** | Open, extensible, and community-governed via XIP-5 (XMTP Improvement Proposal-5). <br /><br /> To learn more, see [XIP-5 Message Content Types](https://github.com/xmtp/XIPs/blob/main/XIPs/xip-5-message-content-types.md). |
| **Implementation** | Any app built with the XMTP client SDK can send or receive messages. <br /><br /> To learn more, see [XMTP SDKs and developer tools](/sdks-and-tools). |
| **Receiving messages** | Any frontend built with the XMTP client SDK can receive messages. <br /><br /> To learn more, see [XMTP SDKs and developer tools](/sdks-and-tools). |
| **Environments** | XMTP client SDKs are available for [JavaScript and React](/docs/client-sdk/javascript/concepts/intro-to-sdk), [Kotlin](/docs/client-sdk/kotlin/tutorials/quickstart) (Android), [Swift](/docs/client-sdk/swift/tutorials/quickstart) (iOS), and [Dart](/docs/client-sdk/dart/tutorials/quickstart) (Flutter). <br /><br /> To learn about other SDKs in the works, see the [Roadmap](/vision/roadmap). |
| **Message cost** | Most messaging incurs no fee. As XMTP decentralizes, messaging between participants that opt-in will remain free, while unsolicited messages will often incur fees or see token staking requirements. <!--<br /><br /> To learn more, see Will XMTP have gas fees?--> |
| **Decentralization** | XMTP network nodes are run by XMTP Labs at this time. In the future, network node software will be open sourced and anyone will be welcome to operate a node. <br /><br /> Client implementation is permissionless, nor is permission required to access and develop with the SDK. Permission isn't required to connect to the XMTP network to send/receive messages on behalf of users. <br /><br /> XMTP Labs is working toward a phased decentralization of the network and will share a roadmap in the coming months. |

## Protocol overview

A user can send and receive encrypted XMTP messages using an app with an embedded XMTP **client**, authenticating using a wallet signature. XMTP network **nodes** persist the user's messages

Clients and nodes are implemented as [Waku2](https://rfc.vac.dev/spec/10/) peers but with XMTP-specific functions and capabilities.

To learn more about clients, see [Client layer](architectural-overview#client-layer).

To learn more about nodes, see [Network layer](architectural-overview#network-layer).

## Example apps

Check out these app repos you can use for guidance and inspiration when building with XMTP:

- The [xmtp-quickstart-react repo](https://github.com/xmtp/xmtp-quickstart-react) provides the XMTP Quickstart React chat app, which demonstrates core capabilities of the XMTP client SDK. You can use the code in this repo to learn to build a basic messaging app.
  - [Try the app](https://xmtp-quickstart-react.vercel.app/) connected to the XMTP `dev` network

- The [xmtp-inbox-web repo](https://github.com/xmtp-labs/xmtp-inbox-web) provides the XMTP Inbox chat app, which demonstrates core and advanced capabilities of the XMTP client SDK and showcases innovative ways of building with XMTP.
  - [Try the app](https://dev.xmtp.chat/) connected to the XMTP `dev` network
  - [Try the app](https://xmtp.chat/) connected to the XMTP `production` network

For even more examples of apps built with XMTP, see:

- [Awesome XMTP](https://github.com/xmtp/awesome-xmtp)
- [Built with XMTP](built-with-xmtp)

## Learn more

Have more questions? See [FAQ about XMTP](faq)

Join and learn with the [XMTP Discord community](https://discord.gg/xmtp)

Ready to build with XMTP? [Start here](start-building)