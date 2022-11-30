---
sidebar_label: Client layer
sidebar_position: 4
---

# Client layer of XMTP

At the most basic level, the architecture of XMTP (Extensible Message Transport Protocol) includes three layers:

* Network layer
* Client layer
* App layer

![Diagram showing three layers of the XMTP architecture: network, client, and app.](img/arch-layers.png)<!--Source file: [https://www.figma.com/file/77ToMB4T16NiLwJjIp7dU1/diagrams?node-id=0%3A1](https://www.figma.com/file/77ToMB4T16NiLwJjIp7dU1/diagrams?node-id=0%3A1)-->

This topic provides an overview of the client layer of XMTP.

The client layer consists of XMTP message API clients (clients) embedded in client apps built with the XMTP client SDK. A message API client connects to the message API in an arbitrary XMTP node to communicate with the network, as shown in the [XMTP node diagram](#xmtp-node-diagram).

The primary responsibilities of a client are to:

* Create blockchain account-based XMTP identities, including public and private key bundles.  
To learn more, see [Key generation and usage](key-generation-and-usage).

* Encrypt and decrypt private key bundles, invitations, and messages.  
To learn more, see [Invitation and message encryption](invitation-and-message-encryption).

* Submit and retrieve public key bundles, encrypted private key bundles, encrypted invitations, and encrypted messages to and from the XMTP network.

* Encode and decode message content types.  
To learn more, see [Content types](content-types).


## XMTP V2 topics and message presentation flow

This section describes how topics and the message presentation flow work for the current version of the protocol, referred to as XMTP V2. Only client apps with XMTP client SDK >=v7.0.0 can use XMTP V2. To learn about how topics and flows work in XMTP V1, see [XMTP V1 topics and message presentation flow](#xmtp-v1-topics-and-message-presentation-flow).

In XMTP V2, clients use the following topics to perform their primary responsibilities:
<!--update invite row to link to conversation filtering section in SDK readme once releases-->
<table>
   <tr>
      <td><strong>Topic</strong>
      </td>
      <td><strong>Description</strong>
      </td>
      <td><strong>Example name</strong>
      </td>
   </tr>
   <tr>
      <td><strong>Contact</strong>
      </td>
      <td>A client uses a contact topic to advertise a user’s public key bundle on the XMTP network. The network advertises this public key bundle to enable other users to contact the user.
      </td>
      <td><code>contact-0x458dd9C5bf4d4E8f80Ba88923E3b94FD028CEe38</code>
      </td>
   </tr>
   <tr>
      <td><strong>Invite</strong>
      </td>
      <td>
         Clients use invite topics to initiate conversations between participants. The client sends an invitation to both the sender and recipient. The invitation includes no message content, but includes:
         <ul>
            <li>A randomly generated conversation topic name, which tells the client which conversation topic to use to send and retrieve messages.</li>
            <li>Encrypted key material, which includes a shared secret for message encryption.</li>
            <li>Invitations support custom <code>conversationIds</code> and other metadata. Clients can use these IDs and metadata to filter and organize conversations.</li>
         </ul>
      </td>
      <td><code>invite-0x458dd9C5bf4d4E8f80Ba88923E3b94FD028CEe38</code>
      </td>
   </tr>
   <tr>
      <td><strong>Conversation</strong>
      </td>
      <td>
         Clients use conversation topics to store messages sent between two participants. Here are some key features of conversation topics:
         <ul>
            <li>Two participants can have multiple ongoing conversations using separate and multiple conversation topics.</li>
            <li>The conversation topic name uses a random 32-byte alphanumeric string.</li>
         </ul>
      </td>
      <td><code>m-XxBHrITqjd00nLMuTyaaGDvTLnviazU8</code>
      </td>
   </tr>
   <tr>
      <td><strong>Private store</strong>
      </td>
      <td>A client built with XMTP can choose to store its users' private key bundles locally or encrypted on the XMTP network. When required, a client uses a private store topic to store a user's private key bundle.
      </td>
      <td><code>privatestore-0x458dd9C5bf4d4E8f80Ba88923E3b94FD028CEe38</code>
      </td>
   </tr>
</table>

This diagram shows how a client app uses these topics to present Bola with a message sent by Amal:

![Diagram showing a client app interacting with XMTP V2 topics in the XMTP network with the goal of delivering messages to a user named Bola.](img/deliver-a-message-V2.png)<!--Source file: [https://www.figma.com/file/77ToMB4T16NiLwJjIp7dU1/diagrams?node-id=1%3A1591](https://www.figma.com/file/77ToMB4T16NiLwJjIp7dU1/diagrams?node-id=1%3A1591)-->

In this flow, the client app:

1. Retrieves Bola’s private key bundle from the network. If one doesn’t exist, it creates it and stores it encrypted on the network in a private store topic, or locally.
2. If one doesn't already exist, stores Bola’s public key bundle on the network in a contact topic, so others can message Bola.
3. Retrieves Amal's encrypted invitation to Bola from Bola’s invite topic. Uses Bola's private key and Amal's public key from the invitation header to decrypt the invitation and get the conversation topic name and shared secret.
4. Uses the conversation topic name from the invitation to retrieve Amal's encrypted message to Bola.
5. Uses the shared secret from the invitation to create an encryption key to decrypt Amal’s message and present it to Bola.

<!--To learn more about keys, contacts, invitations, and messages, see Client Layer in The XMTP Protocol specifications.-->


## XMTP V1 topics and message presentation flow

This section describes how topics and the message presentation flow work for XMTP V1. To understand whether a client app will use XMTP V1 or V2, see [Determining whether to use XMTP V2 or V1 topics](#determining-whether-to-use-xmtp-v2-or-v1-topics).

In XMTP V1, client apps use the following topics to perform their primary responsibilities:

<table>
   <tr>
      <td><strong>Topic</strong>
      </td>
      <td><strong>Description</strong>
      </td>
      <td><strong>Example name</strong>
      </td>
   </tr>
   <tr>
      <td><strong>Contact</strong>
      </td>
      <td>A client uses a contact topic to advertise a user’s public key bundle on the XMTP network. The network advertises this public key bundle to enable other users to contact the user.
      </td>
      <td><code>contact-0x458dd9C5bf4d4E8f80Ba88923E3b94FD028CEe38</code>
      </td>
   </tr>
   <tr>
      <td><strong>Intro</strong>
      </td>
      <td>Clients use intro topics to store the first message sent between two participants (blockchain accounts). This enables clients to know that messages exist in a given conversation topic.
      </td>
      <td><code>intro-0x458dd9C5bf4d4E8f80Ba88923E3b94FD028CEe38-0x357540a11BE08e9264c348b346d0C7dBB7df80d7</code>
      </td>
   </tr>
   <tr>
      <td><strong>Conversation</strong>
      </td>
      <td>
         Clients use conversation topics to store messages sent between two participants. Here are some key features of conversation topics:
         <ul>
            <li>All messages between two participants are stored in a single conversation topic.</li>
            <li>No support for conversation IDs or other conversation metadata.</li>
            <li>The conversation topic name includes the blockchain account addresses of the participants, revealing some identifying information.</li>
         </ul>
      </td>
      <td><code>dm-0x458dd9C5bf4d4E8f80Ba88923E3b94FD028CEe38-0x357540a11BE08e9264c348b346d0C7dBB7df80d7</code>
      </td>
   </tr>
   <tr>
      <td><strong>Private store</strong>
      </td>
      <td>A client built with XMTP can choose to store its users' private key bundles locally or encrypted on the XMTP network. When required, a client uses a private store topic to store a user's private key bundle.
      </td>
      <td><code>privatestore-0x458dd9C5bf4d4E8f80Ba88923E3b94FD028CEe38</code>
      </td>
   </tr>
</table>

This diagram shows how a client app uses these XMTP V1 topics to present Bola with a message sent by Amal:

![Diagram showing a client app interacting with XMTP V1 topics in the XMTP network with the goal of delivering messages to a user named Bola.](img/deliver-a-message-V1.png)<!--Source file: [https://www.figma.com/file/77ToMB4T16NiLwJjIp7dU1/diagrams?node-id=1%3A1513](https://www.figma.com/file/77ToMB4T16NiLwJjIp7dU1/diagrams?node-id=1%3A1513)-->

In this flow, the client app:

1. Retrieves Bola’s private key bundle from the network. If one doesn’t exist, it creates it and stores it encrypted on the network in a private store topic, or locally.
2. If one doesn't already exist, stores Bola’s public key bundle on the network in a contact topic, so others can message Bola.
3. Retrieves Bola’s intro topic to see which conversations they have.
4. Retrieves the messages between Bola and Amal from their direct message topic.
5. Uses Bola’s private key and Amal’s public key to create a shared secret. Uses the shared secret to create an encryption key to decrypt Amal’s message and present it to Bola.

For more details, see [Invitation and message encryption](invitation-and-message-encryption).


## Determining whether to use XMTP V2 or V1 topics

The following diagram shows how a client app using XMTP client SDK >=v7.0.0 determines whether it can use [XMTP V2 topics and message presentation flow](#xmtp-v2-topics-and-message-presentation-flow) or if it must use [XMTP V1 topics and message presentation flow](#xmtp-v1-topics-and-message-presentation-flow) to communicate with another client app.

![Diagram showing a decision tree of how a client app using SDK >=v7.0.0 determines whether it can use XMTP V2 or V1 topics to communicate with another client app](img/v1-or-v2-decision-tree.png)<!--Source file: [https://www.figma.com/file/77ToMB4T16NiLwJjIp7dU1/diagrams?node-id=1%3A1657](https://www.figma.com/file/77ToMB4T16NiLwJjIp7dU1/diagrams?node-id=1%3A1657)-->

A contact topic may contain multiple versions of a public key bundle for a user. For example, `PublicKeyBundleV2` and `PublicKeyBundleV1`.

## Learn more

* [Network layer](network-layer)
* [App layer](app-layer)
