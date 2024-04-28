---
sidebar_label: Examples
sidebar_position: 2
description: "Example code, projects, and apps to help you start building apps with XMTP"
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# Examples

Welcome to the XMTP examples page. Here, you'll find a variety of code examples, projects, and apps to help you get started with building your own applications using XMTP.

## Quickstarts

A quickstart is a brief guide or repo aimed at helping XMTP developers to understand core build primitives from the network.

<Tabs groupId="quickstarts-tabs" >
<TabItem value="js" label="JavaScript"  attributes={{className: "js_tab "}}>

<div className="quickstarts-tabs">

<ul>
  <li><a href="/docs/tutorials/token-gated-group-chat" class="plausible-event-name=Quickstart">Token Gates Group Chat</a><br/><small>How to build a token-gated group chat with Converse and XMTP.</small></li>
  <li><a href="/docs/tutorials/render-frames" class="plausible-event-name=Quickstart">Render Frames</a><br/><small>Learn how to render interoperable Frames in your messaging apps</small></li>
  <li><a href="/docs/tutorials/portable-consent/subscribe" class="plausible-event-name=Quickstart">Subscribe</a><br/><small>How to build a Subscribe button to record broadcast message user consent</small></li>
  <li><a href="/docs/tutorials/portable-consent/request-inbox" class="plausible-event-name=Quickstart">Request inbox</a><br/><small>How to build consent, like Allowed/Requested tabs and Accept/Block buttons</small></li>
  <li><a href="https://github.com/xmtp/xmtp-quickstart-reactjs" class="plausible-event-name=Quickstart">Floating Inbox</a><br/><small>Floating inbox quickstart app in JS. Use it to help you build your own app with XMTP.</small></li>
  <li><a href="https://github.com/xmtp/xmtp-quickstart-pwa" class="plausible-event-name=Quickstart">Progressive web app</a><br/><small>Quickstart app for building an app, which is a way to provide an app without requiring separate bundling or distribution</small></li>
  <li><a href="https://replit.com/@FabrizioGuespe/XMTP-Developer-Quickstart?v=1#index.ts" class="plausible-event-name=Replit">JavaScript live example</a><br/><small>A Repl of a full flow for sending and streaming messages in JavaScript</small></li>

</ul>

</div>

</TabItem>
<TabItem value="react" label="React"  attributes={{className: "react_tab "}}>

<div className="quickstarts-tabs">

<ul>
  <li><a href="https://github.com/xmtp/xmtp-quickstart-hooks" class="plausible-event-name=Quickstart">React hooks</a><br/><small>Floating Inbox Quickstart app built using React. Use it to help you build your own app with XMTP</small></li>
</ul>

</div>

</TabItem>

<TabItem value="rn" label="React Native" attributes={{className: "rn_tab "}}>

<div className="quickstarts-tabs">

<ul>
  <li><a href="https://github.com/xmtp/xmtp-quickstart-reactnative" class="plausible-event-name=Quickstart">React Native</a><br/><small>Quickstart React Native app. Use it to help you build your own app with XMTP.</small></li>
  <li><a href="/docs/tutorials/portable-consent/request-inbox-rn" class="plausible-event-name=Quickstart">Request inbox</a><br/><small>How to build consent, like Allowed/Requested tabs and Accept/Block buttons</small></li>
  <li><a href="/docs/tutorials/group-chat-rn" class="plausible-event-name=Quickstart">Group Chat</a><br/><small>Quickstart React Native app. Use it to help you build your own group chat with XMTP.</small></li>
</ul>

</div>

</TabItem>
</Tabs>

## Example apps

Example apps are more comprehensive than quickstarts. They are fully functional applications built with XMTP that showcase a broader range of features and use-cases.

<Tabs>
<TabItem value="react" label="React" attributes={{className: "react_tab "}}>

<div className="quickstarts-tabs">

<ul>
  <li><a href="https://github.com/xmtp/xmtp-react-playground/" class="plausible-event-name=Example">React Playground app</a><br/><small>A tool to help you build your own app with XMTP, including reactions, replies, read receipts, and attachments</small></li>
  <li><a href="https://github.com/xmtp/dev-inbox/" class="plausible-event-name=Example">Dev Inbox</a><br/><small>XMTP official client, aiming to showcase effective and innovative ways of building with XMTP.</small></li>
</ul>
</div>

</TabItem>

<TabItem value="kotlin" label="Kotlin" attributes={{className: "kotlin_tab "}}>

<div className="quickstarts-tabs">

<ul>
  <li><a href="https://github.com/xmtp/xmtp-android" class="plausible-event-name=Quickstart">Android</a><br/><small>Quickstart Android app in Kotlin</small></li>
</ul>

</div>

</TabItem>
<TabItem value="swift" label="Swift" attributes={{className: "swift_tab "}}>

<div className="quickstarts-tabs">

<ul>
  <li><a href="https://github.com/xmtp/xmtp-ios" class="plausible-event-name=Quickstart">iOS</a><br/><small>Quickstart iOS app in Swift</small></li>
</ul>

</div>

</TabItem>
<TabItem value="dart" label="Dart"  attributes={{className: "dart_tab "}}>

<div className="quickstarts-tabs">

<ul>
  <li><a href="https://github.com/xmtp/xmtp-flutter" class="plausible-event-name=Quickstart">Flutter</a><br/><small>Quickstart Flutter app in Dart</small></li>
</ul>

</div>

</TabItem>
<TabItem value="rn" label="React Native"  attributes={{className: "rn_tab "}}>

<div className="quickstarts-tabs">

<ul>
  <li><a href="https://github.com/xmtp-labs/xmtp-inbox-mobile/" class="plausible-event-name=Example">Inbox Web</a><br/><small>XMTP official client, aiming to showcase effective and innovative ways of building with XMTP.</small></li>
  <li><a href="https://github.com/xmtp/xmtp-react-native" class="plausible-event-name=Quickstart">React Native</a><br/><small>Quickstart Example SDK app. Learn react native with XMTP with this example inbox.</small></li>
</ul>

</div>

</TabItem>
</Tabs>

## Wallet connectors

Wallet connectors are essential components in decentralized applications (dApps). They allow users to connect their cryptocurrency wallets to the dApp, enabling them to sign transactions and interact with the blockchain. Different wallet connectors support different wallets and XMTP works out of the box with most of them.

<Tabs>
<TabItem value="wallet" label="Wallet connectors" attributes={{className: "wallet_tab "}}>

<div className="quickstarts-tabs">

<ul>
  <li><a href="https://github.com/xmtp-labs/xmtp-quickstart-dynamic" class="plausible-event-name=Quickstart">Dynamic</a><br/><small>Quickstart app for building an app with a Dynamic wallet connector</small></li>
  <li><a href="https://github.com/xmtp-labs/xmtp-quickstart-metamask" class="plausible-event-name=Quickstart">MetaMask</a><br/><small>Quickstart app for building an app with a MetaMask wallet connector</small></li>
  <li><a href="https://github.com/xmtp-labs/xmtp-quickstart-privy" class="plausible-event-name=Quickstart">Privy</a><br/><small>Quickstart app for building an app with a Privy wallet connector</small></li>
  <li><a href="https://github.com/xmtp-labs/xmtp-quickstart-thirdweb" class="plausible-event-name=Quickstart">ThirdWeb</a><br/><small>Quickstart app for building an app with a Thirdweb wallet connector</small></li>
  <li><a href="https://github.com/xmtp-labs/xmtp-quickstart-walletconnect" class="plausible-event-name=Quickstart">WalletConnect</a><br/><small>Quickstart app for building an app with a WalletConnect wallet connector</small></li>
  <li><a href="https://github.com/xmtp-labs/xmtp-quickstart-walletconnect" class="plausible-event-name=Quickstart">RainbowKit</a><br/><small>Quickstart app for building with a RainbowKit and Viem wallet connector</small></li>
</ul>

</div>

</TabItem>
</Tabs>

## Other integrations

These projects provide a robust foundation for building your own applications using XMTP. They are designed to demonstrate XMTP compatibility and include pre-configured setups for ease of use.

<Tabs groupId="quickstarts-tabs" >
<TabItem value="js" label="JavaScript"  attributes={{className: "js_tab "}}>

<div className="quickstarts-tabs">

<ul>
  <li><a href="https://github.com/xmtp/xmtp-quickstart-reactjs-next" class="plausible-event-name=Quickstart">Next.js</a><br/><small>Floating Inbox Quickstart app in Next.js. Use it to help you build your own app with XMTP.</small></li>  
  <li><a href="https://github.com/xmtp/xmtp-quickstart-vuejs" class="plausible-event-name=Quickstart">Vue.js</a><br/><small>A tutorial and quickstart app for building a chatbot in VueJS. Use them to help you build your own app with XMTP.</small></li>
  <li><a href="https://github.com/xmtp/xmtp-quickstart-node" class="plausible-event-name=Quickstart">Node.js</a><br/><small>Quickstart code for creating a new XMTP client, initiating a conversation, and sending a message in Node.js</small></li>
  <li><a href="https://github.com/xmtp/xmtp-quickstart-firebase-functions" class="plausible-event-name=Quickstart">Firebase Functions</a><br/><small>Quickstart code for integrating an XMTP app with Firebase functions</small></li>
</ul>

</div>

</TabItem>

<TabItem value="react" label="React" attributes={{className: "react_tab "}}>

<div className="quickstarts-tabs">

<ul>
  <li><a href="https://github.com/xmtp/xmtp-quickstart-hooks-next" class="plausible-event-name=Quickstart">Next.js hooks</a><br/><small>Floating inbox quickstart app built using Next.js hooks. Use it to help you build your own app with XMTP.</small></li>
</ul>

</div>

</TabItem>
</Tabs>
