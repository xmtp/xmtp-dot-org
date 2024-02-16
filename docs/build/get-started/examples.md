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
  <li><a href="https://github.com/fabriguespe/xmtp-quickstart-reactjs" class="bold plausible-event-name=Quickstart">Floating Inbox</a><br/><small>Floating inbox quickstart app in JS. Use it to help you build your own app with XMTP.</small></li>
  <li><a href="https://github.com/fabriguespe/xmtp-quickstart-pwa" class="bold plausible-event-name=Quickstart">Progressive web app</a><br/><small>Quickstart app for building a PWA, which is a way to provide an app without requiring separate bundling or distribution</small></li>
  <li><a href="https://replit.com/@FabrizioGuespe/XMTP-Developer-Quickstart?v=1#index.ts" class="bold plausible-event-name=Replit">JavaScript live example</a><br/><small>A Repl of a full flow for sending and streaming messages in JavaScript</small></li>
  <li><a href="https://github.com/fabriguespe/xmtp-nodebooks" class="bold plausible-event-name=Quickstart">Node.js Notebooks</a><br/><small>Interactive Node.js notebooks (similar to Jupyter) for learning about and experimenting with XMTP</small></li>
  <li><a href="https://github.com/fabriguespe/xmtp-ppp-request-inbox" class="bold plausible-event-name=Quickstart">Portable consent request inbox</a><br/><small>How to build consent, like Allowed/Requested tabs and Accept/Block buttons</small></li>
  <li><a href="https://github.com/fabriguespe/xmtp-ppp-subscribe" class="bold plausible-event-name=Quickstart">Portable consent subscribe</a><br/><small>How to build a Subscribe button to record broadcast message user consent</small></li>
  <li><a href="https://github.com/fabriguespe/xmtp-ppp-broadcast" class="bold plausible-event-name=Quickstart">Portable consent broadcast</a><br/><small>How to build broadcast messaging that checks for user consent</small></li>
</ul>

</div>

</TabItem>
<TabItem value="react" label="React"  attributes={{className: "react_tab "}}>

<div className="quickstarts-tabs">

<ul>
  <li><a href="https://github.com/fabriguespe/xmtp-quickstart-hooks" class="bold plausible-event-name=Quickstart">React hooks</a><br/><small>Floating inbox quickstart app built using React. Use it to help you build your own app with XMTP</small></li>
</ul>

</div>

</TabItem>

<TabItem value="rn" label="React Native" attributes={{className: "rn_tab "}}>

<div className="quickstarts-tabs">

<ul>
  <li><a href="https://github.com/fabriguespe/xmtp-rn-quickstart" class="bold plausible-event-name=Quickstart">React Native</a><br/><small>Quickstart React Native app. Use it to help you build your own app with XMTP.</small></li>
  <li><a href="https://github.com/fabriguespe/xmtp-rn-request-inbox" class="bold plausible-event-name=Quickstart">Portable consent request inbox</a><br/><small>How to build consent, like Allowed/Requested tabs and Accept/Block buttons</small></li>
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
  <li><a href="https://github.com/xmtp/xmtp-react-playground/" class="bold plausible-event-name=Example">React Playground app</a><br/><small>A tool to help you build your own app with XMTP, including reactions, replies, read receipts, and attachments</small></li>
  <li><a href="https://github.com/xmtp-labs/xmtp-inbox-web/" class="bold plausible-event-name=Example">Inbox Web</a><br/><small>XMTP official client, aiming to showcase effective and innovative ways of building with XMTP.</small></li>
</ul>
</div>

</TabItem>

<TabItem value="kotlin" label="Kotlin" attributes={{className: "kotlin_tab "}}>

<div className="quickstarts-tabs">

<ul>
  <li><a href="https://github.com/xmtp/xmtp-android" class="bold plausible-event-name=Quickstart">Android</a><br/><small>Quickstart Android app in Kotlin</small></li>
</ul>

</div>

</TabItem>
<TabItem value="swift" label="Swift" attributes={{className: "swift_tab "}}>

<div className="quickstarts-tabs">

<ul>
  <li><a href="https://github.com/xmtp/xmtp-ios" class="bold plausible-event-name=Quickstart">iOS</a><br/><small>Quickstart iOS app in Swift</small></li>
</ul>

</div>

</TabItem>
<TabItem value="dart" label="Dart"  attributes={{className: "dart_tab "}}>

<div className="quickstarts-tabs">

<ul>
  <li><a href="https://github.com/xmtp/xmtp-flutter" class="bold plausible-event-name=Quickstart">Flutter</a><br/><small>Quickstart Flutter app in Dart</small></li>
</ul>

</div>

</TabItem>
<TabItem value="rn" label="React Native"  attributes={{className: "rn_tab "}}>

<div className="quickstarts-tabs">

<ul>
  <li><a href="https://github.com/xmtp/xmtp-react-native" class="bold plausible-event-name=Quickstart">React Native</a><br/><small>Quickstart Example SDK app</small></li>
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
  <li><a href="https://github.com/fabriguespe/xmtp-quickstart-pwa-0xpass" class="bold plausible-event-name=Quickstart">0xPass</a><br/><small>Quickstart app for building a progressive web app (PWA) with a 0xPass wallet connector</small></li>
  <li><a href="https://github.com/fabriguespe/xmtp-quickstart-pwa-dynamic" class="bold plausible-event-name=Quickstart">Dynamic</a><br/><small>Quickstart app for building a PWA with a Dynamic wallet connector</small></li>
  <li><a href="https://github.com/fabriguespe/xmtp-quickstart-pwa-metamask" class="bold plausible-event-name=Quickstart">MetaMask</a><br/><small>Quickstart app for building a PWA with a MetaMask wallet connector</small></li>
  <li><a href="https://github.com/fabriguespe/xmtp-quickstart-pwa-privy" class="bold plausible-event-name=Quickstart">Privy</a><br/><small>Quickstart app for building a PWA with a Privy wallet connector</small></li>
  <li><a href="https://github.com/fabriguespe/xmtp-quickstart-pwa-thirdweb" class="bold plausible-event-name=Quickstart">ThirdWeb</a><br/><small>Quickstart app for building a PWA with a Thirdweb wallet connector</small></li>
  <li><a href="https://github.com/fabriguespe/xmtp-quickstart-pwa-walletconnect" class="bold plausible-event-name=Quickstart">WalletConnect</a><br/><small>Quickstart app for building a PWA with a WalletConnect wallet connector</small></li>
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
  <li><a href="https://github.com/fabriguespe/xmtp-quickstart-reactjs-next" class="bold plausible-event-name=Quickstart">Next.js</a><br/><small>Floating inbox quickstart app in Next.js. Use it to help you build your own app with XMTP.</small></li>  
  <li><a href="https://github.com/fabriguespe/xmtp-quickstart-vuejs" class="bold plausible-event-name=Quickstart">Vue.js</a><br/><small>A tutorial and quickstart app for building a chatbot in VueJS. Use them to help you build your own app with XMTP.</small></li>
  <li><a href="https://github.com/fabriguespe/xmtp-quickstart-node" class="bold plausible-event-name=Quickstart">Node.js</a><br/><small>Quickstart code for creating a new XMTP client, initiating a conversation, and sending a message in Node.js</small></li>
  <li><a href="https://github.com/fabriguespe/xmtp-firebase-functions" class="bold plausible-event-name=Quickstart">Firebase Functions</a><br/><small>Quickstart code for integrating an XMTP app with Firebase functions</small></li>
</ul>

</div>

</TabItem>

<TabItem value="react" label="React" attributes={{className: "react_tab "}}>

<div className="quickstarts-tabs">

<ul>
  <li><a href="https://github.com/fabriguespe/xmtp-quickstart-hooks-next" class="bold plausible-event-name=Quickstart">Next.js hooks</a><br/><small>Floating inbox quickstart app built using Next.js hooks. Use it to help you build your own app with XMTP.</small></li>
</ul>

</div>

</TabItem>
</Tabs>
