---
tags:
- Privacy & Security
- " Protocol"
- Announcements
hide_table_of_contents: true
title: XMTP v2 Is Here
description: The latest version brings conversation filtering and improvements to
  privacy.
slug: xmtp-v2-is-here
authors: mg
image: "/blog/media/2023-01-03-v2-blog2-1.png"
date: 2022-12-06T06:00

---
import ReactPlayer from 'react-player'

### The latest version brings conversation filtering and improvements to privacy

<ReactPlayer width="100%" controls url='[https://www.youtube.com/watch?v=8_ufTvYBdLo](https://www.youtube.com/watch?v=8_ufTvYBdLo "https://www.youtube.com/watch?v=8_ufTvYBdLo")' />

Over the past 12 months, we’ve met with hundreds of development teams using the XMTP protocol to build native web3 messaging.

Whether it has been 2-person teams at a hackathon or the largest companies in web3, the feedback was unanimous: _deliver the highest standard in messaging security, while allowing me to build powerful end-user experiences in my app._

After 12 months of work, **we are excited to announce XMTP Protocol v2**.

“With XMTP v2, we’ve doubled down on our commitment to building the most secure, privacy-preserving communications protocol,” said Matt Galligan, CEO of XMTP Labs. “These enhancements deliver on XMTP’s promise of interoperability and help to ensure users fully own and control their communications.”

But building an interoperable messaging network has its own set of challenges for app developers. Users like to be able to access messages from anywhere across the network, but want messaging experiences tailored to the app they are currently using.

## Introducing conversation and metadata filtering

With XMTP v2, app developers now have protocol-native support to filter messages using conversation IDs and metadata. This opens up scenarios such as:

* Displaying only conversations created by a specific app
* Filtering for a message type, such as notifications or alerts for example
* Searching for conversations with a specific subject line, as in email
* Scoping the conversation to a specific NFT, such as price negotiations

Conversation filtering not only makes message retrieval dramatically more efficient, but also greatly reduces the complexity for developers in handling messaging payloads.

"Before conversation IDs, developers were "hacking" content types to create a way to filter messages that necessitated filtering ALL messages within a conversation. Now, with support for multiple conversations, a dev can create a conversation between two addresses for messages created in their app and assign an app-specific conversation ID to the conversation." said Nicholas Molnar, Staff Software Engineer for XMTP Labs.

Conversation IDs are embedded within the encrypted payload of an XMTP envelope, meaning that adding a conversation ID does not affect privacy at the network layer at all—and is only visible to clients that can decrypt the messages.

## Increased participant privacy

By embedding conversation IDs within the encrypted payload and anonymizing wallet addresses, XMTP v2 strips messages of any public metadata that might identify the participants in a conversation.

“This important change protects users by preventing third parties from using public data to observe who is talking to whom in the network and mapping out a graph of conversations taking place over XMTP,” said Saul Carlin, Head of Product at XMTP Labs.

You can go deep in[ the supporting documentation](https://xmtp.org/docs/dev-concepts/architectural-overview#client-layer) for more technical details about the XMTP V2 negotiated topics that enable this improvement.

## Improved developer transparency

Beyond the features that XMTP protocol v2 introduces, we have also improved the transparency of how the XMTP protocol, SDKs and applications work together.

### XMTP Protocol & Network Overview

We have published a [Protocol and Network Overview](https://github.com/xmtp/proto/blob/main/PROTOCOL.md) document on GitHub to help developers understand the core architecture of XMTP v2.

### Platform Roadmap

We have published our [platform roadmap](https://xmtp.org/vision/roadmap) to give developers more transparency on upcoming SDK support and features like push notifications and decentralization milestones.

### Deprecation date for pre-v7 versions of the SDK

Update your app to use >=v7.0.0 of the [XMTP client SDK for JavaScript](https://github.com/xmtp/xmtp-js) by Jan 8, 2023 to start exploring the new XMTP v2 use cases for your app. v7.0.0 clients are fully compatible with pre-v7.0.0 clients. Conversations established using XMTP v1 can continue as before. However, conversations using XMTP v2 will not be visible to pre-v7.0.0 clients. To learn more, see [Determining whether to use XMTP v2 or v1 topics](https://xmtp.org/docs/dev-concepts/architectural-overview#determining-whether-to-use-xmtp-v2-or-v1-topics).

To learn more about and discuss important deprecation details, see this [GitHub discussion](https://github.com/orgs/xmtp/discussions/17).

## Building web3 messaging together

XMTP v2 came together after thousands of interactions with developers. It is incredibly inspiring to meet so many developers who share our values and vision for web3. As we continue to work hand in hand, we’re looking forward to learning from you, testing ideas, and challenging ourselves.

Come build with XMTP at:

Developer portal: [https://xmtp.org/](https://xmtp.org/ "https://xmtp.org/")

GitHub repo: [https://github.com/xmtp](https://github.com/xmtp "https://github.com/xmtp")

Discord: [https://discord.gg/xmtp](https://discord.gg/xmtp "https://discord.gg/xmtp")

Jobs: [https://blog.xmtp.com/careers/](https://blog.xmtp.com/careers/ "https://blog.xmtp.com/careers/")