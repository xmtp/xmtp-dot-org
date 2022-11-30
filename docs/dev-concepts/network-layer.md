---
sidebar_label: Network layer
sidebar_position: 3
---

# Network layer of XMTP

At the most basic level, the architecture of XMTP (Extensible Message Transport Protocol) includes three layers:

* Network layer
* Client layer
* App layer

![Diagram showing three layers of the XMTP architecture: network, client, and app.](img/arch-layers.png)<!--Source file: [https://www.figma.com/file/77ToMB4T16NiLwJjIp7dU1/diagrams?node-id=0%3A1](https://www.figma.com/file/77ToMB4T16NiLwJjIp7dU1/diagrams?node-id=0%3A1)-->

This topic provides an overview of the network layer of XMTP.

The network layer provides the XMTP network which is comprised of **nodes** (computers) running XMTP node software.

The XMTP network enables any computer running XMTP node software to participate in the network. Currently, the node software is closed source and all nodes in the XMTP network are operated by XMTP Labs. XMTP Labs is working toward a phased decentralization of the network and will share a roadmap in the coming months.

This diagram shows the key components of an XMTP node:

<a name="xmtp-node-diagram"></a>

![Diagram showing three nodes connected in a peer-to-peer fashion to form the XMTP network. The diagram shows the key components of a node, including a message API and Waku node. The diagram also shows a client app connecting a message API client to the message API in a node.](img/xmtp-nodes.png)<!--Source file: [https://www.figma.com/file/77ToMB4T16NiLwJjIp7dU1/diagrams?node-id=16%3A502](https://www.figma.com/file/77ToMB4T16NiLwJjIp7dU1/diagrams?node-id=16%3A502)-->

The nodes provide a **message API** that enables client apps built with the XMTP client SDK to communicate with the XMTP network.

The nodes use Waku node software to connect to other nodes and form a peer-to-peer network to relay and store envelopes submitted and requested by client apps.

Currently, nodes are configured to rate limit high-volume publishing from message API clients. Rate limits can change at any time. The message API returns a 429 status code to a rate-limited message API client.

In the network layer, an **envelope** contains a payload, often encrypted, that is not observable by nodes. The payload could be a public key bundle, private key bundle, or a message created by a client app, but this information is opaque to nodes. Meaning is assigned to these envelopes in the [Client layer](#client-layer).

Nodes can see envelope properties which help the nodes understand how to handle envelopes but the properties reveal nothing about message content. An example of an important envelope property is a **topic** name. A topic name is a required envelope property. A topic name helps a node understand where to relay and store the envelope. Each envelope belongs to exactly one topic.

The primary responsibilities of an XMTP node are to:

* Connect to other nodes, forming a peer-to-peer network
* Advertise information about all of the nodes it’s connected to, enabling newly joined nodes to connect to other nodes in the XMTP network
* Relay envelopes to other nodes
* Store envelopes in topics
* Make envelopes available for retrieval by client apps

<!--To learn more about the XMTP network layer, nodes, and topics, see Network Layer in The XMTP Protocol specifications.-->

Here’s a high-level view of how XMTP nodes relay and store envelopes containing payloads submitted and retrieved by client apps built with XMTP:

![Animation showing the flow of a user sending a message to another user, including how the sender's client app encrypts and submits the message to the XMTP network, how an XMTP node relays the message to other nodes, and how the recipient's client app retrieves the message from the network, decrypts it, and delivers it to the recipient.](img/xmtp-message-flow.gif)<!--Source file: [https://www.figma.com/file/77ToMB4T16NiLwJjIp7dU1/diagrams?node-id=1%3A169](https://www.figma.com/file/77ToMB4T16NiLwJjIp7dU1/diagrams?node-id=1%3A169)--><!--change paper icons to open vs closed envelopes-->

## Learn more

* [Client layer](client-layer)
* [App layer](app-layer)
