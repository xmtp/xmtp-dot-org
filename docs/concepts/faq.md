---
sidebar_label: FAQ
sidebar_position: 15
description: "Get answers to the most frequently asked questions about XMTP."
---

# FAQ about XMTP

## The basics

### What is XMTP Labs?

XMTP Labs is a web3 software company that contributes to XMTP (Extensible Message Transport Protocol), an open network, protocol, and standards for secure messaging between blockchain accounts.

XMTP Labs employees work alongside other XMTP community members to build with and extend XMTP. Community contributions and participation are critical to the development and adoption of XMTP.

### Does XMTP Labs plan to build apps or are you focused 100% on the protocol?

XMTP Labs is focused on serving developers. We build [SDKs, UI components, and example apps](/docs/introduction#xmtp-sdks-and-example-apps) that help developers build great experiences with XMTP.

### Which wallet apps and blockchain accounts does XMTP work with?

XMTP has been implemented to work with Ethereum Virtual Machine (EVM)-compatible wallet apps and blockchain accounts, though XMTP itself does not use EVMs.

To learn more, see [Wallet apps](/docs/build/dev-faqs#wallet-apps).

## Network

### Is the XMTP network decentralized?

Currently, XMTP Labs (the company) operates all of the network nodes in the two available XMTP network environments: `dev` and `production`.

Decentralization of the XMTP network will be achieved by a diverse set of independent third parties operating nodes.

XMTP Labs is working toward a phased decentralization of the network. To learn more see, [XMTP: The journey to decentralization](/blog/journey-to-decentralization).

### Is XMTP a blockchain?

XMTP is not a blockchain. Nodes on the XMTP network run software to store and transfer messages between blockchain accounts. For secure and reliable delivery of messages, the nodes participate in a consensus mechanism.

XMTP Labs is researching various consensus protocols that would allow the network to operate in a decentralized fashion while maintaining its current emphasis on user privacy and low-latency message delivery.

### Will I be able to run my own XMTP node?

Yes, you will be able to run a node.

XMTP Labs is working toward a phased decentralization of the network. To learn more see, [XMTP: The journey to decentralization](/blog/journey-to-decentralization).

### What is the relationship between Waku and XMTP?

XMTP currently uses the Waku protocol to relay messages between network nodes.

Waku is an unopinionated transport layer built around the libp2p publish/subscribe model. Waku is intentionally open-ended when it comes to handling options like message encoding and encryption, which content topics to use, and how to create and manage encryption keys linked to blockchain account addresses.

XMTP provides a standardized approach to addressing these options, focusing on maximizing compatibility across apps and ensuring message security and deliverability, while also enabling as many developers as possible to use XMTP to build interoperable messaging apps.

### What is the expected network latency for message delivery and retrieval?

XMTP provides perceptibly real-time message delivery and retrieval. The network does not provide service level guarantees.

### How does network rate limiting work?

Currently, XMTP network nodes are configured to rate limit high-volume publishing from clients. A rate-limited client can expect to receive a 429 status code response from a node.

XMTP Labs is capable of rate limiting the network while we are the only node operators. Rate limiting is a consideration in our research into economic spam controls. Ultimately, rate limiting decisions will be made based on maintaining network quality and reducing the potential for malicious attacks by senders and nodes.

### Who pays to keep the network running?

XMTP Labs is committed to keeping the network running. Future incentive mechanisms will enable the network to run autonomously of XMTP Labs.

## Fees

### Will XMTP charge messaging fees?

Most messaging incurs no fee. As XMTP decentralizes, messaging between participants that opt-in will remain free, while unsolicited messages will often incur fees or see token staking requirements.

There are no messaging-related fees incurred by developers for building with the XMTP SDK.

Have other questions or ideas about message-related fees? Post to the [XMTP discussion forum](https://github.com/orgs/xmtp/discussions).

### What are the costs of XMTP message storage and retrieval?

Messages are stored off-chain on the XMTP network, with all nodes currently hosted by XMTP Labs. XMTP Labs currently absorbs all message storage and retrieval costs.

There are no message storage and retrieval-related fees incurred by developers for building with the XMTP SDK.

## Security

### Has XMTP undergone a security audit?

Yes, read the comprehensive [XMTP security assessment](img/REP-final-20230207T000355Z.pdf) prepared by [CertiK](https://www.certik.com/company/about).

### How does XMTP establish a secure and fraud-proof relationship between two identities?

Blockchain accounts sign and advertise a set of keys to start using XMTP. XMTP uses these keys to establish a shared secret between the blockchain accounts. It then uses the shared secret to generate a key used to encrypt an invitation that allows the blockchain accounts to start exchanging messages. No third-party apps or relayers are involved in this process.

To learn more about these keys, see [Key generation and usage in XMTP](key-generation-and-usage).

To learn more about invitation and message encryption, see [Invitation and message encryption with XMTP](invitation-and-message-encryption).

### Does each blockchain account address have a corresponding XMTP identity?

Yes. Each blockchain account address is represented by an XMTP identity key. This identity key is a part of a key bundle that only the address that generated it can use to authenticate messages.

To learn more about XMTP identity keys, see [Key generation and usage in XMTP](key-generation-and-usage).

### Why do apps built with XMTP require a user to sign with their blockchain account private keys each time they start a new messaging session?

When a user starts a new messaging session, they must sign with their blockchain account private key to decrypt their XMTP key bundle. The key bundle is then used for invitation and message decryption.

Because there is no secure place in the browser to persist a decrypted key bundle, the app can use the bundle for the current session only. Once the user starts a new session, such as after refreshing their browser, they must sign again to decrypt their key bundle.

If you are using the JavaScript client SDK, you might consider [manually handling private key storage](/docs/sdks/js-quickstart#manually-handling-private-key-storage), but only with the understanding that this approach **requires the utmost care**.

Based on developer and community feedback, we are researching more robust approaches to secure key management.

To learn more about these keys, see [Key generation and usage in XMTP](key-generation-and-usage).

## Storage

### Where are XMTP messages stored?

XMTP stores messages in the XMTP network before and after retrieval. Application-specific message storage policies may vary.

### What are the XMTP message retention policies?

XMTP provides both `production` and `dev` network environments to support the development phases of your project.

The `production` network is configured to store messages indefinitely.

XMTP may occasionally delete messages and keys from the `dev` network and will provide advance notice in the [XMTP Discord community](https://discord.gg/xmtp) and [XMTP Announcements discussion forum](https://github.com/orgs/xmtp/discussions/categories/announcements).

Different approaches to long-term message storage are currently being researched.

Have other questions or ideas about message storage? Post to the [XMTP discussion forum](https://github.com/orgs/xmtp/discussions).

## Messages

### Which message formats and metadata does XMTP support?

XMTP transports a message payload as a set of bytes that can represent any format that a developer wants to support, such as plain text, JSON, or even non-text binary or media content.

With XMTP, these message formats are called content types. Currently, there are two basic content types available. These content types aim to establish broad compatibility among apps built with XMTP.

The XMTP community can propose and adopt standards for other content types, either informally or through a governance process.

Message payloads also include references to timestamps. However, timestamps are not currently independently verified and can be set to any value by the sending app.

To learn more about content types, see [Content types](content-types).

To learn more about the XMTP improvement proposals governance process, see [What is an XIP?](https://github.com/xmtp/XIPs/blob/main/XIPs/xip-0-purpose-process.md)

Have other questions or ideas about message formats and metadata? Post to the [XMTP discussion forum](https://github.com/orgs/xmtp/discussions).

### Does XMTP support message attachments?

Yes, via two XMTP improvement proposals that are currently in review status:

- [XIP-15](https://github.com/xmtp/XIPs/blob/main/XIPs/xip-15-attachment-content-type.md): Attachment content type
- [XIP-17](https://github.com/xmtp/XIPs/blob/main/XIPs/xip-17-remote-attachment-content-type-proposal.md): Remote attachment content type

To learn more about how to implement message attachments in your app, see:

- For apps using the JavaScript client SDK (`xmtp-js`), see [Introducing remote media attachments](/blog/attachments-and-remote-attachments).

- For apps using the Swift client SDK (`xmtp-ios`), see [Send a remote attachment](https://github.com/xmtp/xmtp-ios#configure-content-types).

### Does XMTP support deleting and editing messages?

Not currently. However, XMTP Labs is exploring ways to support message deletion and editing.

Have other questions or ideas about support for message deletion and editing? Post to the [XMTP discussion forum](https://github.com/orgs/xmtp/discussions).

## Message patterns

### Is XMTP more like email or chat?

XMTP enables developers to implement messaging features and UX paradigms that best fit their needs. As a result, messages sent using apps built with XMTP might resemble many typical forms of communication, such as email, chat, text messaging, push notifications, and more.

### Does XMTP support real-time conversations?

Real-time chat is a core use case for XMTP and is demonstrated by the XMTP Inbox chat app.

- [Try the app](https://dev.xmtp.chat/) connected to the XMTP `dev` network
- [Try the app](https://xmtp.chat/) connected to the XMTP `production` network

To learn more about how the XMTP Inbox chat app is built, see the [xmtp-inbox-web repo](https://github.com/xmtp-labs/xmtp-inbox-web).

### Does XMTP support broadcast messaging?

XMTP natively supports one-to-one messaging. One-to-many broadcast messages, or announcements, can be constructed using the XMTP SDK.

To learn more, see [Send a broadcast message](/tutorials/broadcast).
