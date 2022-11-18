---
sidebar_label: FAQ
sidebar_position: 3
---

# FAQ about XMTP

## The basics

### What is XMTP Labs?

XMTP Labs is a web3 software company that contributes to XMTP (Extensible Message Transport Protocol), an open network, protocol, and standards for secure messaging between blockchain accounts.

XMTP Labs employees work alongside other XMTP community members to build with and extend XMTP. Community contributions and participation are critical to the development and adoption of XMTP.

### Does XMTP Labs plan to build apps or are you focused 100% on the protocol?

XMTP Labs is focused on serving developers. We build [SDKs, UI components, and example apps](/sdks-and-tools) that help developers build great experiences with XMTP.

### Which wallet apps and blockchain accounts does XMTP work with?

XMTP has been implemented to work with Ethereum Virtual Machine (EVM)-compatible wallet apps and blockchain accounts, though XMTP itself does not use EVMs.

To learn more, see [Wallet apps and blockchains supported by XMTP](wallets).

## Network

### Is the XMTP network decentralized?

Currently, XMTP Labs (the company) operates all of the network nodes in the two available XMTP network environments: `dev` and `production`.

Decentralization of the XMTP network will be achieved by a diverse set of independent third parties operating nodes.

XMTP Labs is working toward a phased decentralization of the network and will share a roadmap in the coming months.

### Is XMTP a blockchain?

XMTP is not a blockchain. Nodes on the XMTP network run software to store and transfer messages between blockchain accounts. For secure and reliable delivery of messages, the nodes participate in a consensus mechanism.

XMTP Labs is researching various consensus protocols that would allow the network to operate in a decentralized fashion while maintaining its current emphasis on user privacy and low-latency message delivery.

### Will I be able to run my own XMTP node?

Yes, you will be able to run a node.

XMTP Labs is working toward a phased decentralization of the network and will share a roadmap in the coming months.

### What is the relationship between Waku and XMTP?

XMTP currently uses the Waku protocol to relay messages between user client and network nodes. <!--change this to "between network nodes" once the gRPC work is complete. At that time, the waku dependency will be removed from xmtp-js - the user client-->

Waku is an unopinionated transport layer built around the libp2p publish/subscribe model. Waku is intentionally open-ended when it comes to handling options like message encoding and encryption, which content topics to use, and how to create and manage encryption keys linked to blockchain account addresses.

XMTP provides a standardized approach to addressing these options, focusing on maximizing compatibility across apps and ensuring message security and deliverability, while also enabling as many developers as possible to use XMTP to build interoperable messaging apps.

### What is the expected network latency for message delivery and retrieval?

XMTP provides perceptibly real-time message delivery and retrieval. The network does not provide service level guarantees.

### How does network rate limiting work?

Currently, there’s no rate limiting on the XMTP network.

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

### How does XMTP establish a secure and fraud-proof relationship between two identities?

Blockchain accounts sign and advertise a set of keys that XMTP uses to establish a shared secret for encryption using another blockchain account’s keys. These keys attest to the authenticity of both accounts and are required to add messages to their conversation. No third-party apps or relayers are involved in this process.

To learn more about signatures, see [Sign to send and receive messages using apps built with XMTP](signatures).

### Does each blockchain account address have a corresponding XMTP identity?

Yes. Each blockchain account address is represented by an XMTP identity key. This identity key is a part of a key bundle that only that the address can use to authenticate messages.

To learn more about XMTP identities, see [Sign to send and receive messages using apps built with XMTP](signatures).

### Do apps built with XMTP need to decrypt messages with blockchain account private keys each time?

When a user starts a new messaging session with an app built with XMTP, the user must sign with their blockchain account private key to decrypt their XMTP key bundle, which is then used for message decryption. A one-time signature is also required to create that key bundle, which includes an XMTP identity.

To learn more about signatures, see [Sign to send and receive messages using apps built with XMTP](signatures).

## Storage

### Where are XMTP messages stored?

XMTP stores messages in the XMTP network before and after retrieval. Application-specific message storage policies may vary.

### What are the XMTP message retention policies?

XMTP provides both `production` and `dev` network environments to support the development phases of your project.

The `production` network is configured to store messages indefinitely.

XMTP may occasionally delete messages and keys from the `dev` network and will provide advance notice in the [XMTP Discord community](https://discord.gg/xmtp) and [XMTP Announcements discussion forum](https://github.com/orgs/xmtp/discussions/categories/announcements).

Different approaches to long-term message storage are currently being researched.

Have other questions or ideas about message storage? Post to the [XMTP discussion forum](https://github.com/orgs/xmtp/discussions).

## Message formats

### Which message formats and metadata does XMTP support?

XMTP transports a message payload as a set of bytes that can represent any format that a developer wants to support, such as plaintext, JSON, or even non-text binary or media content. Currently, there are two basic content types available. These content types aim to establish broad compatibility among apps built with XMTP.

To learn more about content types, see [Content types](/docs/dev-concepts/content-types).

The XMTP community can propose and adopt standards for other content types, either informally or through a governance process.

To learn more about the XMTP improvement proposals governance process, see [What is an XIP?](https://github.com/xmtp/XIPs/blob/main/XIPs/xip-0-purpose-process.md).

Message payloads also include references to the sender and recipient identities and timestamps. However, timestamps are not currently independently verified and can be set to any value by the sending app.

Have other questions or ideas about message formats and metadata? Post to the [XMTP discussion forum](https://github.com/orgs/xmtp/discussions).

### Does XMTP support message attachments?

No. However, the XMTP community can propose and adopt standards for a new content type that can support this use case and others.

To learn more about the XMTP improvement proposals governance process, see [What is an XIP?](https://github.com/xmtp/XIPs/blob/main/XIPs/xip-0-purpose-process.md).

Have other questions or ideas about message attachments? Post to the [XMTP discussion forum](https://github.com/orgs/xmtp/discussions).

## Message patterns

### Is XMTP more like email or chat?

XMTP enables developers to implement messaging features and UX paradigms that best fit their needs. As a result, messages sent using apps built with XMTP might resemble many typical forms of communication, such as email, chat, text messaging, push notifications, and more.

### Does XMTP support real-time conversations?

Real-time chat is a core use case for XMTP and is demonstrated by the XMTP Chat app.

[Try the app](https://xmtp.chat/) connected to the XMTP `production` network

To learn more about how the XMTP Chat app is built, see the [example-chat-react repo](https://github.com/xmtp/example-chat-react).

### Does XMTP support group messaging?

XMTP natively supports one-to-one messaging. One-to-many and group messaging can be constructed using the XMTP SDK. Based on developer and community feedback, we are researching native support for these use cases.

Have other questions or ideas about group messaging? Post to the [XMTP discussion forum](https://github.com/orgs/xmtp/discussions).

## SDK

### Which languages and environments does the XMTP SDK support?

The XMTP SDK is written in TypeScript for JavaScript and TypeScript projects. It can be used with browser-based frontend frameworks like React and in Node.js.

Have other questions or ideas for future language or environment support? Post to the [XMTP discussion forum](https://github.com/orgs/xmtp/discussions).

### Which web3 libraries does the XMTP SDK require?

The XMTP SDK currently requires you to use [ethers](https://ethers.org/) or another web3 library capable of supplying an [ethers Signer](https://docs.ethers.io/v5/api/signer/), such as [wagmi](https://wagmi.sh/).

### Why does my app request a new signature for XMTP when I refresh my browser?

The XMTP client provided by the SDK requires a user's signature in order to decrypt their XMTP message encryption keys. This process must be repeated when starting a new session since there is no secure place in the browser to persist decrypted keys. Based on developer and community feedback, we are researching more robust approaches to secure key management.

To learn more about signatures, see [Sign to send and receive messages using apps built with XMTP](signatures).
