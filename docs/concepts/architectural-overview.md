---
sidebar_label: Architecture
sidebar_position: 2
toc_max_heading_level: 4
description: "Learn about the architecture of XMTP and how it supports messaging between blockchain accounts."
---

# Architectural overview of XMTP

This topic introduces the architecture of XMTP (Extensible Message Transport Protocol) and how it supports messaging between blockchain accounts.

You can use this information to get an overview of how XMTP works and how building with XMTP can fit into your architecture and environment.

At the most basic level, the architecture of XMTP includes three layers:

- [Network layer](#network-layer)
- [Client layer](#client-layer)
- [App layer](#app-layer)

![Diagram showing three layers of the XMTP architecture: network, client, and app.](img/arch-layers.png)<!--Source file: [https://www.figma.com/file/77ToMB4T16NiLwJjIp7dU1/diagrams?node-id=0%3A1](https://www.figma.com/file/77ToMB4T16NiLwJjIp7dU1/diagrams?node-id=0%3A1)-->

## Network layer

The network layer provides the XMTP network, which is composed of **nodes** (computers) running XMTP node software.

The XMTP network enables any computer running XMTP node software to participate in the network. Currently, the node software is closed source and all nodes in the XMTP network are operated by XMTP Labs. XMTP Labs is working toward a phased decentralization of the network. To learn more, see [XMTP: The journey to decentralization](/blog/journey-to-decentralization).

This diagram shows the key components of an XMTP node. The nodes provide a **message API** that enables client apps built with the XMTP client SDK to communicate with the nodes in the XMTP network. The nodes use Waku node software to connect to other nodes and form a peer-to-peer network to relay and store envelopes submitted and requested by client apps.

<a name="xmtp-node-diagram"></a>

![Diagram showing three nodes connected in a peer-to-peer fashion to form the XMTP network. The diagram shows the key components of a node, including a message API and Waku node. The diagram also shows a client app connecting a message API client to the message API in a node.](img/xmtp-nodes.png)<!--Source file: [https://www.figma.com/file/77ToMB4T16NiLwJjIp7dU1/diagrams?type=design&node-id=16-502&mode=design)-->

Currently, nodes are configured to rate limit high-volume publishing from message API clients. A rate-limited message API client can expect to receive a 429 status code response from a node. Rate limits can change at any time in the interest of maintaining network health.

Every **envelope** contains a payload, often encrypted, that is not observable by nodes. The payload could be a public key bundle, private key bundle, or a message created by a client app, but this information is opaque to nodes. Meaning is assigned to these envelopes in the [Client layer](#client-layer).

Nodes can see envelope properties, which help the nodes understand how to handle envelopes, but the properties reveal nothing about message content. An example of an important envelope property is a **topic** name. A topic name is a required envelope property. A topic name helps a node understand where to relay and store the envelope. Each envelope belongs to exactly one topic.

The primary responsibilities of an XMTP node are to:

- Connect to other nodes, forming a peer-to-peer network
- Advertise information about all of the nodes it’s connected to, enabling newly joined nodes to connect to other nodes in the XMTP network
- Relay envelopes to other nodes
- Store envelopes in topics
- Make envelopes available for retrieval by client apps

<!--To learn more about the XMTP network layer, nodes, and topics, see Network Layer in The XMTP Protocol specifications.-->

Here’s a high-level view of how XMTP nodes relay and store envelopes containing payloads submitted and retrieved by client apps built with XMTP:

![Animation showing the flow of a user sending a message to another user, including how the sender's client app encrypts and submits the message to the XMTP network, how an XMTP node relays the message to other nodes, and how the recipient's client app retrieves the message from the network, decrypts it, and delivers it to the recipient.](img/xmtp-message-flow.gif)<!--Source file: [https://www.figma.com/file/77ToMB4T16NiLwJjIp7dU1/diagrams?node-id=1%3A169](https://www.figma.com/file/77ToMB4T16NiLwJjIp7dU1/diagrams?node-id=1%3A169)-->

## Client layer

The client layer consists of XMTP message API clients (clients) embedded in client apps built with the XMTP client SDK. A message API client connects to the message API in an arbitrary XMTP node to communicate with the network, as shown in the [XMTP node diagram](#xmtp-node-diagram).

The primary responsibilities of a client are to:

- Create blockchain account-based XMTP identities, including public and private key bundles.  
  To learn more, see [Key generation and usage](/docs/concepts/key-generation-and-usage).

- Encrypt and decrypt private key bundles, invitations, and messages.  
  To learn more, see [Invitation and message encryption](invitation-and-message-encryption).

- Submit and retrieve public key bundles, encrypted private key bundles, encrypted invitations, and encrypted messages to and from the XMTP network.

- Encode and decode message content types.  
  To learn more, see [Content types](/docs/concepts/content-types).

### XMTP V2 topics and message presentation flow

This section describes how topics and the message presentation flow work for the current version of the protocol, referred to as XMTP V2. Only client apps with XMTP client SDK >=v7.0.0 can use XMTP V2. To learn how topics and flows work in XMTP V1, see [XMTP V1 topics and message presentation flow](#xmtp-v1-topics-and-message-presentation-flow).

In XMTP V2, clients use the following topics to perform their primary responsibilities.

#### Contact topic V2

A client uses a contact topic to advertise a user’s public key bundle on the XMTP network. The network advertises this public key bundle to enable other users to contact the user.

The contact topic name uses this format: `contact-<account-address>`.

For example, `contact-0x458dd9C5bf4d4E8f80Ba88923E3b94FD028CEe38`.

To learn more, see [Contacts](https://github.com/xmtp/proto/blob/main/PROTOCOL.md#contacts) in the `xmtp/proto` repo.

#### Invite topic V2

Clients use invite topics to initiate conversations between participants.

The invite topic name uses this format: `invite-<account-address>`.

For example, `invite-0x458dd9C5bf4d4E8f80Ba88923E3b94FD028CEe38`.

The client sends an invitation to both the sender and recipient’s invite topic. The invitation includes no message content, but includes:

- A randomly generated conversation topic name, which tells clients which conversation topic to use to send and retrieve messages

- Encrypted key material, which includes a shared secret for message encryption

To learn more, see [Invitations](https://github.com/xmtp/proto/blob/main/PROTOCOL.md#invitations) in the `xmtp/proto` repo.

#### Conversation topic V2

Clients use conversation topics to store messages exchanged between a pair of addresses.

A conversation topic is created for a pair of addresses when the first message is sent between them.

The conversation topic name uses this format provided by the invitation: `m-<random-32-byte-alphanumeric-string>`.

For example, `m-XxBHrITqjd00nLMuTyaaGDvTLnviazU8`.

#### Private store topic V2

A client built with XMTP can choose to store its users' private key bundles locally or encrypted on the XMTP network. When required, a client uses a private store topic to store a user's private key bundle.

The private store topic name uses this format: `privatestore-<account-address>`.

For example, `privatestore-0x458dd9C5bf4d4E8f80Ba88923E3b94FD028CEe38`.

This diagram shows how a client app uses these topics to present Bola with a message sent by Amal:

![Diagram showing a client app interacting with XMTP V2 topics in the XMTP network with the goal of delivering messages to a user named Bola.](img/deliver-a-message-V2.png)<!--Source file: [https://www.figma.com/file/77ToMB4T16NiLwJjIp7dU1/diagrams?node-id=1%3A1591](https://www.figma.com/file/77ToMB4T16NiLwJjIp7dU1/diagrams?node-id=1%3A1591)-->

In this flow, the client app:

1. Retrieves Bola’s private key bundle from the network. If one doesn’t exist, it creates it and stores it encrypted on the network in a private store topic, or locally.

2. If one doesn't already exist, stores Bola’s public key bundle on the network in a contact topic so others can message Bola.

3. Retrieves Amal's encrypted invitation to Bola from Bola’s invite topic. Uses Bola's private key and Amal's public key from the invitation header to decrypt the invitation and get the conversation topic name and shared secret.

4. Uses the conversation topic name from the invitation to retrieve Amal's encrypted message to Bola.

5. Uses the shared secret from the invitation to create an encryption key to decrypt Amal’s message and present it to Bola.

To learn more, see [Key generation and usage](/docs/concepts/key-generation-and-usage) and [Invitation and message encryption](/docs/concepts/invitation-and-message-encryption).

### XMTP V1 topics and message presentation flow

This section describes how topics and the message presentation flow work for XMTP V1. To understand whether a client app will use XMTP V1 or V2, see [Determining whether to use XMTP V2 or V1 topics](#determining-whether-to-use-xmtp-v2-or-v1-topics).

In XMTP V1, client apps use the following topics to perform their primary responsibilities.

#### Contact topic V1

A client uses a contact topic to advertise a user’s public key bundle on the XMTP network. The network advertises this public key bundle to enable other users to contact the user.

The contact topic name uses this format: `contact-<account-address>`.

For example, `contact-0x458dd9C5bf4d4E8f80Ba88923E3b94FD028CEe38`.

#### Intro topic V1

Clients use intro topics to store the first message sent between two participants (blockchain accounts). This enables clients to know that messages exist in a given conversation topic.

The intro topic name uses this format: `intro-<participant-1-account-address>-<participant-2-account-address>`.

For example, `intro-0x458dd9C5bf4d4E8f80Ba88923E3b94FD028CEe38-0x357540a11BE08e9264c348b346d0C7dBB7df80d7`.

#### Conversation topic V1

Clients use conversation topics to store messages sent between two participants. Here are some characteristics of conversation topics:

- All messages between two participants are stored in a single conversation topic.

- The conversation topic name includes the blockchain account addresses of the participants, revealing some identifying information.

The conversation topic name uses this format: `dm-<participant-1-account-address>-<participant-2-account-address>`.

For example, `dm-0x458dd9C5bf4d4E8f80Ba88923E3b94FD028CEe38-0x357540a11BE08e9264c348b346d0C7dBB7df80d7`.

#### Private store V1

A client built with XMTP can choose to store its users' private key bundles locally or encrypted on the XMTP network. When required, a client uses a private store topic to store a user's private key bundle.

The private store topic name uses this format: `privatestore-<account-address>`.

For example, `privatestore-0x458dd9C5bf4d4E8f80Ba88923E3b94FD028CEe38`.

This diagram shows how a client app uses these XMTP V1 topics to present Bola with a message sent by Amal:

![Diagram showing a client app interacting with XMTP V1 topics in the XMTP network with the goal of delivering messages to a user named Bola.](img/deliver-a-message-V1.png)<!--Source file: [https://www.figma.com/file/77ToMB4T16NiLwJjIp7dU1/diagrams?node-id=1%3A1513](https://www.figma.com/file/77ToMB4T16NiLwJjIp7dU1/diagrams?node-id=1%3A1513)-->

In this flow, the client app:

1. Retrieves Bola’s private key bundle from the network. If one doesn’t exist, it creates it and stores it encrypted on the network in a private store topic, or locally.

2. If one doesn't already exist, stores Bola’s public key bundle on the network in a contact topic, so others can message Bola.

3. Retrieves Bola’s intro topic to see which conversations they have.

4. Retrieves the messages between Bola and Amal from their direct message topic.

5. Uses Bola’s private key and Amal’s public key to create a shared secret. Uses the shared secret to create an encryption key to decrypt Amal’s message and present it to Bola.

For more details, see [Invitation and message encryption](invitation-and-message-encryption).

### Determining whether to use XMTP V2 or V1 topics

The following diagram shows how a client app using XMTP client SDK >=v7.0.0 determines whether it can use [XMTP V2 topics and message presentation flow](#xmtp-v2-topics-and-message-presentation-flow) or if it must use [XMTP V1 topics and message presentation flow](#xmtp-v1-topics-and-message-presentation-flow) to communicate with another client app.

![Diagram showing a decision tree of how a client app using SDK >=v7.0.0 determines whether it can use XMTP V2 or V1 topics to communicate with another client app](img/v1-or-v2-decision-tree.png)<!--Source file: [https://www.figma.com/file/77ToMB4T16NiLwJjIp7dU1/diagrams?node-id=1%3A1657](https://www.figma.com/file/77ToMB4T16NiLwJjIp7dU1/diagrams?node-id=1%3A1657)-->

A contact topic may contain multiple versions of a public key bundle for a user. For example, `PublicKeyBundleV2` and `PublicKeyBundleV1`.

## App layer

The app layer consists of client apps built with the XMTP client SDK.

A developer can provide messaging between blockchain accounts in their app by building with the [XMTP client SDK](/docs/introduction#xmtp-sdks-and-example-apps). When a developer builds with the SDK, their app embeds an XMTP message API client, which communicates with a message API in an XMTP node to handle all XMTP network interactions required to enable their users to send and receive messages. To learn more, see [XMTP node diagram](#xmtp-node-diagram).

With XMTP network interactions handled by the message API client, developers can focus on the user-related aspects of building client apps, such as:

- User acquisition

- User interface

- User identity metadata

- Inbox filtering

- Custom content types  
  To learn more, see [Content types](/docs/concepts/content-types).

Developers can also help shape XMTP by participating in [XMTP Improvement Proposals](https://github.com/xmtp/XIPs/blob/main/XIPs/xip-0-purpose-process.md) (XIPs) and [contributing](/docs/contribute) to XMTP SDKs and tools.
