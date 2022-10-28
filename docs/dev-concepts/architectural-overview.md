---
sidebar_label: Architectural overview
sidebar_position: 2
toc_max_heading_level: 4
---

# Architectural overview of XMTP

This topic provides an introduction to the architecture of XMTP (Extensible Message Transport Protocol) and how it supports messaging between blockchain accounts.

You can use this information to get an overview of how XMTP works and how building with XMTP can fit into your architecture and environment.

At the most basic level, the architecture of XMTP includes three layers:

- [Network layer](#network-layer)
- [Client layer](#client-layer)
- [App layer](#app-layer)

![Diagram showing three layers of the XMTP architecture: network, client, and app.](./img/arch-layers.png) <!--source file: https://www.figma.com/file/1jasKMIn5sAL4855eTwgIm/xmtp-architectural-overview?node-id=407%3A1774-->


## Network layer

The network layer provides the XMTP network which is comprised of nodes (computers) running network client software. The primary responsibilities of the XMTP network and nodes are to:

- Relay messages to other nodes and to storage
- Make messages available for retrieval by client apps built with XMTP
- Store and advertise public key bundles for XMTP identities
- Store encrypted private key bundles for XMTP identities
- Bootstrap newly joined XMTP nodes


### Network topology

Diving a bit deeper into the XMTP network, this diagram illustrates key components of the network topology:

![Diagram showing five XMTP nodes connected in a peer-to-peer network. Each node contains a bootstrap service and connects to its own data store.](./img/network-topology.png) <!--source file: https://www.figma.com/file/1jasKMIn5sAL4855eTwgIm/xmtp-architectural-overview?node-id=534%3A1663-->

:::info

At this time, XMTP Labs runs all nodes in the XMTP network. XMTP Labs aims to publish a phased decentralization roadmap in Fall 2022.

:::

The XMTP network has no security perimeter, enabling any node running XMTP network client software to participate in the network. Currently, the network client software is closed source and all nodes are operated by XMTP Labs.

Every XMTP node:

- Has a bootstrapping service that advertises information about all of the nodes it’s connected to, enabling newly joined nodes to connect to every other node in the network
- Connects to every other node, forming a peer-to-peer network
- Connects to a data store <!--To learn more about the vision for pre- and post-delivery storage, see the XMTP litepaper.-->
- Relays messages and key bundles to other nodes
- Stores and advertises public key bundles for XMTP identities
- Stores encrypted private key bundles for XMTP identities
- Stores messages created by XMTP identities
- Has a private load balancer and connects to a single public load balancer

Here’s a high-level view of how client apps built with XMTP submit and retrieve messages using the XMTP network:

![Animation showing the flow of a user sending a message to another user, including how the sender's client app encrypts and submits the message to the XMTP network, how an XMTP node relays the message to other nodes, and how the recipient's client app retrieves the message from the network, decrypts it, and delivers it to the recipient.](./img/xmtp-message-flow.gif) <!--source file: https://www.figma.com/file/1jasKMIn5sAL4855eTwgIm/xmtp-architectural-overview?node-id=291%3A2607-->


### Network storage and message relay

The XMTP network uses pub/sub topics to relay and store conversations, messages, invites, and key bundles within the network. This section describes XMTP V1 and V2 topics and flows.

:::info

To enable your client app to support V2 topics and flows, upgrade your client app to use >=v7.0.0 of the XMTP client SDK for JavaScript (xmtp-js).

:::

<!--Provide link to release. What should we say about client apps that don't upgrade? Client apps that don't upgrade may eventually be unable to communicate with the network?-->

#### V1 topics and flow

With XMTP V1, the network uses the following topics:

<!--add more details about specific values in v1 - so we can call out the changes in v2-->

| V1 topic | Description |
|-------|-------------|
| Private store | A developer building an app with XMTP can choose to store their users' private key bundles locally or encrypted on the XMTP network. When required by a client app, the XMTP network uses a private store topic to store a user's private key bundle. |
| Contact | The XMTP network uses a contact topic to store a user’s public key bundle. The network advertises this public key bundle to enable other users to contact the user. |
| Intro     | The XMTP network uses an intro topic to store the first message sent between two participants (blockchain accounts). This enables client apps to know that messages exist in a given direct message topic. |
| Conversation | The XMTP network uses a conversation topic to store all messages sent between two participants. The conversation topic is shared by the two participants. |

This diagram illustrates how these XMTP V1 network topics are created and work together to enable a client app to deliver messages to a user:

![Diagram showing a client app interacting with topics in the XMTP V1 network with the goal of delivering messages to a user named Bola.](./img/deliver-a-message.png) <!--source file: https://www.figma.com/file/1jasKMIn5sAL4855eTwgIm/xmtp-architectural-overview?node-id=535%3A1664-->

In this flow, the client app:

1. Retrieves Bola’s private key bundle from the network. If one doesn’t exist, it creates it and stores it encrypted on the network in a private store topic, or locally.
2. If one doesn't already exist, stores Bola’s public key bundle on the network in a contact topic, so others can message Bola.
3. Retrieves Bola’s intro topic to see which conversations they have.
4. Retrieves the messages between Bola and Amal from their direct message topic.
5. Uses Bola’s private key and Amal’s public key to create a shared secret. Uses the shared secret to create an encryption key to decrypt Amal’s message and present it to Bola.

For more details, see [Message encryption and decryption](#message-encryption-and-decryption).


#### V2 topics and flow

With XMTP V2, the network uses the following topics:

<!--add more details about specific values in v2 - so we can call out the changes from v1-->

| V2 topic | Description |
|-------|-------------|
| Private store | A developer building an app with XMTP can choose to store their users' private key bundles locally or encrypted on the XMTP network. When required by a client app, the XMTP network uses a private store topic to store a user's private key bundle. |
| Contact | The XMTP network uses a contact topic to store a user’s public key bundle. The network advertises this public key bundle to enable other users to contact the user. |
| Invite | XMTP V2 uses an invite topic instead of an intro topic, as in V1. The invite topic stores a conversation topic name and key material and no message content. <ul><li>The invite topic is sent to both the invitee and sender.</li><li>The conversation topic name tells the client app which conversation topic to send messages to.</li><li>The key material is what the client app uses for message encryption.</li></ul> |
| Conversation | The XMTP network uses a conversation topic to store messages sent between two participants. A conversation topic is shared by the two participants. Here are some key differences between conversations topics with XMTP V1 and V2. With XMTP V2: <ul><li>Two participants can have multiple ongoing conversations. With XMTP V1, all messages between two participants are stored in a single conversation topic.</li><li>Conversation topics support `conversationId`s and other metadata. You can use these IDs and metadata to filter and organize conversations, which can be more manageable than filtering individual messages in a single large conversation topic.</li><li>The conversation topic name format is `m-XxBHrITqjd00nLMuTyaaGDvTLnviazU8`, for example. The conversation topic name uses a random 32-byte alphanumeric string. With XMTP V1, the conversation topic name format is `dm-walletaddress1-walletaddress2`, which reveals some identifying information about participants in the conversation.</li></ul> |

<!--conversationId is required - is there a default value if the dev doesn't define a custom value? or does the dev always need to provide the value/pattern?-->

This diagram illustrates how these XMTP V2 network topics are created and work together to enable a client app to deliver messages to a user:

![Diagram showing a client app interacting with topics in the XMTP V2 network with the goal of delivering messages to a user named Bola.](./img/deliver-a-message-v2.png) <!--source file: https://www.figma.com/file/1jasKMIn5sAL4855eTwgIm/xmtp-architectural-overview?node-id=535%3A1664-->

In this flow, the client app:

<!--do we need to say more about invite encryption?-->

1. Retrieves Bola’s private key bundle from the network. If one doesn’t exist, it creates it and stores it encrypted on the network in a private store topic, or locally.
2. If one doesn't already exist, stores Bola’s public key bundle on the network in a contact topic, so others can message Bola.
3. Retrieves Bola’s invite topic to get the conversation topic name where the messages are stored, as well as the key material needed for message encryption.
4. Retrieves the message from the conversation topic.
5. Uses the shared secret from the key material to create an encryption key to decrypt Amal’s message and present it to Bola.


#### Rules for using V1 or V2 topics and flows

Here's a diagram that shows how a client app supporting XMTP V2 determines whether it must use V2 or V1 topics and flows to send a message:

![Diagram showing a client app interacting with topics in the XMTP V2 network with the goal of delivering messages to a user named Bola.](./img/v1-or-v2-flow.png) <!--source file: https://www.figma.com/file/1jasKMIn5sAL4855eTwgIm/xmtp-architectural-overview?node-id=738%3A2120-->

Next, let’s look at the client layer and how apps connect to the XMTP network and send and receive encrypted messages.


## Client layer

The client layer consists of XMTP user clients embedded in client apps built with the XMTP SDK. The client layer’s main responsibilities are to:

- Create blockchain account-based XMTP identities, including public and private key bundles, and submit them to the network for storage  
  To learn more, see [Participant authentication](#).
- Encrypt and decrypt invites and messages  
  To learn more, see [Message encryption](#).
- Submit and retrieve messages from the XMTP network
- Encode and decode message content types
  To learn more, see [Content types](/docs/dev-concepts/content-types).


## App layer

The app layer consists of client apps built with the XMTP SDK.

A developer can provide messaging between blockchain accounts in their app by building with the [XMTP SDK](https://github.com/xmtp/xmtp-js). When a developer builds with the XMTP SDK, their app embeds an XMTP user client, which handles XMTP network interactions required to enable their users to send and receive messages.

With XMTP network interactions handled by an XMTP client, developers can focus on the user-related aspects of building client apps, such as:

- User acquisition
- User interface
- User identity metadata
- Inbox filtering  
To learn about one developer's approach, see [Truths Not Spoofs](https://blog.xmtp.com/truths-not-spoofs/).
- Custom content types  
To learn more, see [Content types](/docs/dev-concepts/content-types).

Developers can also help shape XMTP by participating in [XMTP Improvement Proposals (XIPs)](https://github.com/xmtp/XIPs/blob/main/XIPs/xip-0-purpose-process.md) and [contributing](/docs/dev-concepts/contributing) to XMTP SDKs and tools.
