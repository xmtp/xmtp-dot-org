---
sidebar_label: App layer
sidebar_position: 5
---

# App layer of XMTP

At the most basic level, the architecture of XMTP (Extensible Message Transport Protocol) includes three layers:

* Network layer
* Client layer
* App layer

![Diagram showing three layers of the XMTP architecture: network, client, and app.](img/arch-layers.png)<!--Source file: [https://www.figma.com/file/77ToMB4T16NiLwJjIp7dU1/diagrams?node-id=0%3A1](https://www.figma.com/file/77ToMB4T16NiLwJjIp7dU1/diagrams?node-id=0%3A1)-->

This topic provides an overview of the app layer of XMTP.

The app layer consists of client apps built with the XMTP client SDK.

A developer can provide messaging between blockchain accounts in their app by building with the [XMTP client SDK](https://github.com/xmtp/xmtp-js). When a developer builds with the SDK, their app embeds an XMTP message API client, which communicates with a message API in an XMTP node to handle all XMTP network interactions required to enable their users to send and receive messages. To learn more, see [XMTP node diagram](network-layer#xmtp-node-diagram).

With XMTP network interactions handled by the message API client, developers can focus on the user-related aspects of building client apps, such as:

* User acquisition
* User interface
* User identity metadata
* Inbox filtering  
To learn about one developer's approach, see [Truths Not Spoofs](https://blog.xmtp.com/truths-not-spoofs/).
* Custom content types  
To learn more, see [Content types](content-types).

Developers can also help shape XMTP by participating in [XMTP Improvement Proposals (XIPs)](https://github.com/xmtp/XIPs/blob/main/XIPs/xip-0-purpose-process.md) and [contributing](contributing) to XMTP SDKs and tools.

## Learn more

* [Network layer](network-layer)
* [Client layer](client-layer)
