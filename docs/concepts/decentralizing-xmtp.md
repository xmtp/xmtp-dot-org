---
sidebar_label: Decentralization
sidebar_position: 4
---

# Decentralizing XMTP

Today we're announcing a new chapter for XMTP: a decentralized messaging network powered by the [Messaging Layer Security standard](https://messaginglayersecurity.rocks/) - the most secure and private messaging protocol available to developers. Our entire protocol is open source, from the [node software](https://github.com/xmtp/xmtp-node-go) to the [SDKs](https://github.com/xmtp) to the [Converse app](https://github.com/ephemerahq/converse-app).

Until now, the backend of the network has been centralized. All the nodes are run by [Ephemera](https://ephemerahq.com/). It’s time to change that.

## Why decentralization matters

1. Devs are tired of getting rugged by platforms who can change the rules any time it suits their business interests.
2. Devs want to be owners of the network and share in the economic value that they are creating.
3. Devs should feel confident that the platform they are building on will not live or die with a single company.

## How does the network work?

In this decentralized network there are three types of actors. Each plays a distinct role in delivering a reliable, high-performance, end-to-end encrypted messaging service for users.

1. **Clients** will protect message confidentiality and integrity by using end-to-end encryption and signing message ordering metadata.
2. **Node operators** will deliver encrypted messages as directed by clients and temporarily store them for recipients who are offline.
3. **Payers** will fairly compensate node operators for the cost of delivering and storing messages.

Two distributed systems will coordinate these interactions.

1. The **XMTP broadcast network:** a small, permissioned set of node operators replicating messages across [diverse organizations and geographies](https://community.xmtp.org/t/xip-54-xmtp-network-node-operator-qualification-criteria/868) to ensure availability.
2. The **XMTP appchain:** an L3 blockchain securing all metadata that require strict ordering. Four smart contracts will manage this data:
    - The `Nodes` [contract](https://community.xmtp.org/t/xip-49-decentralized-backend-for-mls-messages/856#p-2045-h-221-node-registry-21) manages the list of broadcast network nodes, ensuring that only authorized nodes participate in the network.
    - The `Payers` contract manages the payment of messaging fees to node operators, allowing applications and organizations to cover network costs without requiring users to pay directly.
    - The `IdentityUpdates` [contract](https://github.com/xmtp/xmtpd/blob/main/contracts/src/IdentityUpdates.sol) manages the list of wallet addresses associated with each XMTP inbox, enabling users to use multiple authorized wallet addresses to send and receive messages from a single inbox.
    - The `GroupMessages` [contract](https://github.com/xmtp/xmtpd/blob/main/contracts/src/GroupMessages.sol) manages group membership changes, ensuring that all clients have an identical view of group additions and removals in the correct order.

For more specifics, review [XIP-49](https://community.xmtp.org/t/xip-49-decentralized-backend-for-mls-messages/856) and follow the team's progress in the [xmtpd repo](https://github.com/xmtp/xmtpd/issues/118).

![Diagram of actors in the XMTP decentralized network](../../static/img/decentralizing-xmtp-1.png)

### Timeline and key milestones

We launched a testnet in February, 2025. The testnet is currently unincentivized, with no fees charged to payers and no rewards distributed to node operators.

We expect to add incentives to the testnet later in Q1 2025 and to be ready for final audits and mainnet in H2 2025.

## FAQ

**1. I have an inbox app powered by XMTP. What does this mean for me?**

Most changes to support the new decentralized network will happen under the hood and not require any changes to your application code beyond updating to a newer SDK version and providing a payer service URL or signer.

Today, the XMTP network is free to use. The decentralized network will have a cost associated with each message sent. We are designing the network architecture to minimize these costs, with the goal of making them practical for application developers to sponsor on behalf of their users. Mainnet cost estimates will be published in February 2025 after completing load testing of the testnet and fee mechanisms.

To sponsor transactions on behalf of your users, client applications will need to pass in the URL to a payer service as part of client creation. The payer service is a small, stateless, backend service that holds a set of keys used to sponsor transactions and signs messages using the application’s account. While this may sound similar to a smart wallet paymaster, the payer service serves additional crucial functions: it enables off-chain bookkeeping and enhances user privacy by preventing the linking of senders to their messages. The service can be self hosted by developers and will be responsible for deciding which messages should be subsidized by the application.

If you are interested in building a “payer-as-a-service” platform that can be used by many applications you should [reach out to us](mailto://hi@xmtp.org). We’d love to help support the development of a platform that helps app developers avoid running their own payer backend service.

Complete guides for setting up a payer service and funding your account for sponsoring messages will be provided at least 3 months before the launch of mainnet.

**2. I have a bot or broadcast app powered by XMTP? What does this mean for me?**

If you have a backend application that sends messages to users, you will need to have a funded wallet associated with your application that can be used to pay messaging fees. Backend applications do not require a separate payer service and instead can directly sign messages with their wallet.

We will have more details to share on cost estimates by February 2025, once we have completed load testing of the testnet and implemented the fee mechanisms. We are working hard to keep messaging fees as low as possible at launch, and to push them even further down over time. We intend to offer messaging as close to the underlying hard costs of running the infrastructure as we can without jeopardizing the sustainability of the network.

**3. What is the XMTP appchain?**

The XMTP appchain is an L3 blockchain built as an Arbitrum Orbit rollup that settles onto Base, an Optimism L2 that has traction both with developers and consumers. It handles critical metadata that needs strict ordering with higher latency tolerance. This setup offers a balance of scalability, security, and cost-effectiveness, making it ideal for coordinating clients, node operators, and payers.

**4. What is the XMTP broadcast network?**

![Diagram of XMTP broadcast network](../../static/img/decentralizing-xmtp-2.png)

The XMTP broadcast network is a small group of 5–20 nodes, each run by a separate organization. It replicates messages across diverse geographies to ensure availability, control latency, and enhance performance using scalable infrastructure.

[XIP-54](https://community.xmtp.org/t/xip-54-xmtp-network-node-operator-qualification-criteria/868) discusses the selection criteria for node operators.

**5. Why can’t just anyone run a node?**

It’s helpful to go back to the design goals for the decentralization of XMTP.

1. Have a network with the performance and latency of web2 messaging services
2. Have extremely low messaging costs
3. Be credibly neutral and censorship resistant

A smaller network of nodes is better for achieving these goals. For a message to be distributed to all node operators requires less bandwidth and fewer hops with a smaller network, and there are “less mouths to feed” to reach economic sustainability for node operators. This allows XMTP to deliver high performance at a relatively low cost.

A network of 20 node operators can still be credibly neutral and censorship resistant so long as the group of operators is sufficiently diverse to prevent collusion between operators. And the network is designed to achieve its censorship resistance so long as there is a single honest node.

This architecture reflects the blockchain trilemma of balancing security, scalability, and decentralization. Security is non-negotiable for a messaging protocol, and we believe this design strikes the right balance between scalability and decentralization for our use case. Messaging demands higher throughput and lower latency than financial applications, while having different trust requirements.

The security of the network extends beyond the node operators themselves. Just as optimistic rollups use fault proofs, the XMTP network allows any participant to submit cryptographically verifiable `MisbehaviorReports` when nodes violate protocol rules. Looking ahead, we are developing an automated node selection process (likely involving staking mechanisms) to ensure long-term sustainability and decentralization.

**6. What are the messaging fees and who pays them?**

Messaging fees are small payments made to node operators to cover infrastructure costs for message delivery. The broadcast network architecture is designed with the goal of reducing node operator costs to a comparable level to running a traditional centralized service, which in turn minimizes payer costs. Payers, typically app developers or organizations, register through the `Payers` smart contract which distributes funds to node operators. Users can also choose to self-pay if they prefer more direct control over their messaging costs.

**7. How does the XMTP network achieve scalability?**

The broadcast network permits each node to scale internally using traditional infrastructure techniques, ensuring that increased demand can be met efficiently. We will continue to increase the gas limit of the L3 blockchain over time as EVM rollups become more efficient and scalable.

**8. How is the network resilient to node failures?**

The broadcast network is resilient to node failures as any functioning node can distribute payloads to others, ensuring continuous operation. Nodes themselves can be high-availability (HA) and an operator can use standard devops practices to minimize downtime and increase SLAs. Misbehaving nodes can be identified by cryptographically verifiable `MisbehaviorReports` and removed by a credibly neutral governing body.

**9. How are nodes selected?**

During the testnet, nodes are chosen by Ephemera, prioritizing neutrality, geographic diversity, and infrastructure quality. Node selection is managed through the `Nodes` smart contract, which maintains the list of authorized broadcast network nodes. For mainnet, node selection will be automated through staking and delegation mechanisms. This document will be updated as the details of these mechanisms become available.

[XIP-54](https://community.xmtp.org/t/xip-54-xmtp-network-node-operator-qualification-criteria/868) discusses the selection criteria for node operators in greater detail.

**10. How do clients ensure confidentiality and integrity?**

Clients use end-to-end encryption based on the IETF [**Messaging Layer Security (MLS)**](https://messaginglayersecurity.rocks/) standard. MLS provides a high level of confidentiality, integrity, and authenticity for messages, similar to protocols used by secure messaging apps like Signal. Additionally, clients sign causal ordering metadata to maintain the correct order of messages.

**11. What is causal ordering metadata, and how does it ensure correct message sequencing?**

Causal ordering metadata is information that clients attach to each message to preserve the correct sequence of messages as intended by their senders. It includes references to previous messages, enabling the reconstruction of the order of events without relying on clocks. In the distributed systems literature these are often referred to as [Vector Clocks](https://en.wikipedia.org/wiki/Vector_clock).

**12. How and why does the XMTP appchain support multiple wallet addresses per inbox?**

The XMTP appchain supports multiple wallet addresses per inbox through the `IdentityUpdates` smart contract, which allows users to associate both externally owned accounts (EOAs) and smart contract wallets with a single XMTP inbox. This flexibility enables users to manage their messaging identities across different types of wallets, allowing them to send and receive messages from one inbox without needing separate accounts for each wallet.

**13. How is group membership managed in XMTP?**

Group membership is managed through the `GroupMessages` smart contract, which records MLS commit messages on the XMTP appchain. These MLS commit messages securely update group membership by logging additions and removals in strict order, ensuring all clients have a consistent and synchronized view of group changes.

**14. What user data is published on the XMTP appchain or visible to node operators?**

The XMTP appchain exposes a list of authorized wallets and anonymized app/device identifiers for each inbox. It also displays escrow amounts and paid-for payloads per payer. While conversation content and participants remain private, conversation activity levels are visible. To enhance privacy, users can distribute requests across multiple operators or use proxying services, as node operators and payers can correlate IP addresses with payloads.

**15. How does XMTP handle misbehaving nodes?**

Any node or client can issue `MisbehaviorReports` to identify and prove non-compliant node behavior. These cryptographically verifiable reports enable the network to identify nodes that tamper with messages, reorder them, or fail to deliver them properly. Upon verification, misbehaving nodes can be removed and replaced by a governing body, maintaining the network's integrity.

**16. How does the XMTP network operate without a single point of control?**

XMTP's distributed architecture, use of smart contracts, and participation from multiple nodes and clients ensure that the network operates independently even if any single organization - including Ephemera - ceases to exist.

**17. What metadata is visible on the network?**

| Content | Is visible |
| --- | --- |
| When you joined the network | ✅ |
| When you add a new wallet or device to your account | ✅ |
| What time you have been invited to a conversation | ✅ |
| How many devices and wallets you have added to your account | ✅ |
| Who invited you to the conversation | ❌ |
| What conversations you have been invited to | ❌* |
| Who is in any group | ❌* |
| When you sent a message in a conversation | ❌ |
| The contents of the messages you send | ❌ |
| How many messages you have sent | ❌ |
| When you consent to join a conversation | ❌ |
| The name and description of any group | ❌ |
| The permissions and admin roles of any group | ❌ |

**There is a risk that an attacker reading all messages on the network could draw statistical correlations between otherwise unrelated messages to reveal that members were invited to a group at the same time, and which group ID they were added to, by looking at messages sent at similar times. We plan to address this risk by adding jitter to message timing before the release of XMTP mainnet.*

**18. What are the risks of all payloads on the network being public?**

Messages on the XMTP network are end-to-end encrypted, so only the sender and recipient have the keys required to read their contents or sensitive metadata. These encrypted payloads are visible to node operators and anyone using public APIs to query a node. 

We believe the only true protection for your messages is strong encryption. Other messaging services may claim to have an additional layer of protection by limiting who can access the encrypted payloads and keeping them private, but this protection is prone to failure. Even the most trusted providers routinely get hacked and find the contents of their databases on the dark web. Government agencies find backdoors into supposedly closed networks. And when this happens, the hackers often find that there is lots of useful metadata - even in end-to-end encrypted systems - worth stealing. 

By keeping all the data in the network public, the model is simple and transparent. Rather than hoping XMTP systems will never get compromised, the goal is to make sure your private information stays private even if every node on the network has already been hacked. Anyone can inspect what data is available on the network, and security researchers can try their hardest to find vulnerabilities that compromise user security or privacy in the open. 

**19. Will XMTP support post quantum encryption?**

Yes. Today there are no known quantum computers capable of decrypting messages encrypted with elliptic curves as large as the ones used in XMTP today, but we need to be prepared for the possibility that those computers are in development and will likely exist in the next decade. Given how cheap it is to store data, a well-funded adversary like a government may decide to keep a copy of some messages stored on the network today and wait for a computer capable of decrypting them. This is referred to as “Harvest Now Decrypt Later”. Other messaging services have recently started to roll out hybrid encryption schemes that include post quantum algorithms to protect against this threat.

We expect to complete the work needed to roll out Post Quantum encryption in 2025. MLS itself is very flexible with encryption schemes and makes it straightforward to migrate the ciphersuites used by XMTP to one that offers post-quantum protection such as ML-KEM. The challenge lies in the payload sizes. Keys that are 32 bytes today can become multiple kilobytes. Ciphertext and signatures can double in size. 

For centralized services owned by trillion-dollar tech companies, this increase in size is a small line item. But for a decentralized network that needs to become economically self-sufficient these increases can be substantial. Before rolling out these changes we need to ensure that the XMTP economic model can support them (by continuing to drive down messaging costs), and that we have thoroughly studied the cryptographic risks today.

Our friends at Cryspen have a great write-up about the path to Post Quantum MLS, and the risks, that you can read [here](https://cryspen.com/post/pq-mls/).

**20. Does this mean there is a token I can buy?**

At this time there is no XMTP token and anyone who is trying to sell you one is trying to scam you.

If this changes we will update this post with more details and share an update on our [official X account](https://x.com/xmtp_). Do not trust any announcements from other channels.
