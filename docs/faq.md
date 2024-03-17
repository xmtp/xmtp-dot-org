---
sidebar_label: FAQ
sidebar_position: 4
description: "Get answers to the most frequently asked questions about XMTP."
---

# FAQ about XMTP

Get answers to the most frequently asked questions about XMTP.

## **Build**

---

### What works with XMTP?

In the spirit of web3 composability, here are **just a few** of the building blocks that work well with XMTP. Building your app with these tools can help you deliver and distribute an app—faster and with quality.

:::tip

This list is not exhaustive and is just a starting point. A highly extensible protocol like XMTP can work with more tools than those listed in each section.

:::

#### Wallet connection

import arbitrum from '/docs/concepts/img/arbitrum-logo.png';
import avalanche from '/docs/concepts/img/avalanche-logo.png';
import base from '/docs/concepts/img/base-logo.png';
import bnbchain from '/docs/concepts/img/bnbchain-logo.png';
import ethereum from '/docs/concepts/img/ethereum-logo.png';
import hermez from '/docs/concepts/img/hermez-logo.png';
import linea from '/docs/concepts/img/linea-logo.png';
import optimism from '/docs/concepts/img/optimism-logo.png';
import polygon from '/docs/concepts/img/polygon-logo.png';
import scroll from '/docs/concepts/img/scroll-logo.png';
import activatedmsscreen from '/docs/concepts/img/activate-dms-screen.png';

To connect web3 wallets to your app:

- [Thirdweb](https://thirdweb.com/)
  - Example implementation in the [XMTP React Native example app](https://github.com/xmtp/xmtp-react-native/blob/main/example/src/AuthView.tsx#L7)
  - Example implementation in the [XMTP React JS example app](/blog/thirdbweb-wallet-remote-attachments)
- [RainbowKit](https://www.rainbowkit.com/)
  - Example implementation in the [XMTP Inbox Web app](https://github.com/xmtp-labs/xmtp-inbox-web)
  - Support for WalletConnect v2 is now standard in RainbowKit. To learn how to upgrade, see [Migrating to WalletConnect v2](https://www.rainbowkit.com/guides/walletconnect-v2).
- [WalletConnect](https://walletconnect.com/)
- [wagmi](https://wagmi.sh/)

XMTP client SDKs require you to use [ethers](https://ethers.org/) or another web3 library capable of supplying an [ethers Signer](https://docs.ethers.io/v5/api/signer/). These wallet connection tools, as well as others, provide this capability.

#### Storage

To store encrypted and encoded message payload content:

- [IPFS](https://ipfs.io/)
- [web3.storage](https://web3.storage/)

  - Example implementation in [`xmtp-js` remote content types](https://github.com/xmtp/xmtp-js-content-types)
  - Tutorial: [Introducing remote media attachments](/blog/attachments-and-remote-attachments)

- [ThirdwebStorage](https://portal.thirdweb.com/storage)
  - Tutorial: [How to send remote attachments with XMTP & Thirdweb SDKs](/blog/thirdbweb-wallet-remote-attachments)

#### Decentralized social

- [Lens](https://www.lens.xyz/)
  - Example implementation in [Lenster](https://github.com/lensterxyz/lenster)
- [CyberConnect](https://link3.to/cyberconnect)
  - Example implementation in the [CyberConnect & XMTP Integration Demo App](https://github.com/cyberconnecthq/cc-xmtp-chatapp)
  - Tutorial: [Build messaging for CyberConnect profiles](https://cyberconnect.hashnode.dev/integrating-xmtp-into-cyberconnect-a-guide)

#### Decentralized app store

To launch your own dApp stores and list any dApp, including your own:

- Polygon [dApp Store Kit](https://docs.dappstorekit.io/docs/how%20to%20use%20the%20dapp%20store%20kit/dapp-registry-management/)

#### Wallet apps

XMTP can be used with EVM-compatible wallet apps that support ECDSA signing on the secp256k1 elliptic curve. These include common wallet apps such as:

- [Coinbase Wallet](https://www.coinbase.com/wallet)
- [MetaMask](https://metamask.io/)
- [Rainbow Wallet](https://rainbow.me/)
- Most wallets in the [WalletConnect network](https://explorer.walletconnect.com/?type=wallet)

The XMTP SDK **does not** include a wallet app abstraction, as XMTP assumes that developers have a way to obtain a wallet app connection.

XMTP uses a signature from the blockchain account to [create and enable the XMTP identity](/docs/concepts/account-signatures). Specifically, XMTP identities must be generated from and associated with an Ethereum account's public address and private key. As such, a connected wallet app must be present to generate the signature and initialize the API client in the client app.

A user can generate multiple XMTP identities from the same wallet app by changing to a different blockchain account.

#### Chains

XMTP works with externally owned accounts (EOAs) on Ethereum and Ethereum side-chains and L2s.

Because all Ethereum Virtual Machine (EVM) chains share the same Ethereum wallet and address format and XMTP messages are stored off-chain, XMTP is interoperable across EVM chains, including testnets. (XMTP itself does not use EVMs.)

For example, whether a user has their wallet app connected to Ethereum or an Ethereum side-chain or L2, their private key can generate and retrieve their XMTP key pair to give them access to XMTP.

XMTP is also chain-agnostic, so multi-chain support is possible.

Here are **just a few** of the chains supported by XMTP:

<div class="chain-list" >
  <a href="https://arbitrum.foundation/"  class="chain-item">
      <img src={arbitrum} />
      <span>Arbitrum</span>
  </a>
    <a href="https://www.avax.com/" class="chain-item">
      <img src={avalanche} />
      <span>Avalanche</span>
  </a>
    <a href="https://base.org/" class="chain-item">
      <img src={base} />
      <span>Base</span>
  </a>
    <a href="https://www.bnbchain.org/" class="chain-item">
      <img src={bnbchain}/>
      <span>(BNB) Chain</span>
  </a>
    <a href="https://ethereum.org//" class="chain-item">
      <img src={ethereum} />
      <span>Ethereum</span>
  </a>
    <a href="https://docs.hermez.io/Hermez_1.0/about/scalability/" class="chain-item">
      <img src={hermez} />
      <span>Hermez</span>
  </a>
    <a href="https://linea.build/" class="chain-item">
      <img src={linea}/>
      <span>zk-EVM</span>
  </a>
    <a href="https://www.optimism.io/" class="chain-item">
      <img src={optimism} />
      <span>Optimism</span>
  </a>
    <a href="https://polygon.technology/" class="chain-item">
      <img src={polygon} />
      <span>Polygon</span>
  </a>
    <a href="https://www.scroll.io/" class="chain-item">
      <img src={scroll} />
      <span>Scroll</span>
  </a>
</div>

### Does XMTP work with smart contract wallets?

XMTP doesn't currently support smart contract wallets. XMTP has been implemented to work with Ethereum Virtual Machine (EVM)-compatible wallet apps and blockchain accounts (wallets). It also works with externally owned accounts (EOAs) on Ethereum and Ethereum side-chains and L2s.

### Which languages and environments does the XMTP SDK support?

The XMTP SDK is [available for multiple languages](/docs/introduction#xmtp-sdks-and-example-apps#sdks), including JavaScript, Kotlin, Swift, and Dart.

Have other questions or ideas for future language or environment support? Post to the [XMTP Community Forums](https://community.xmtp.org/).

### Which web3 libraries does the XMTP SDK require?

The XMTP SDK currently requires you to use [ethers](https://ethers.org/) or another web3 library capable of supplying an [ethers Signer](https://docs.ethers.io/v5/api/signer/), such as [wagmi](https://wagmi.sh/).

### Where can I get official XMTP brand assets?

See the [XMTP brand guidelines](https://github.com/xmtp/brand) GitHub repo.

### How should I handle the XMTP onboarding flow in my app?

In your app onboarding flow, enable your users to activate XMTP DMs. User access to DMs can help with app engagement and re-engagement. For example, here is a prompt to activate XMTP DMs in the onboarding flow to [claim a Lens handle](https://claim.lens.xyz/):

<img src={activatedmsscreen} style={{width:"500px"}}/>

In your app onboarding flow, request user permission to display app-specific push notifications to reach users outside of an app session.

## Network

---

### Is the XMTP network decentralized?

Currently, XMTP Labs (the company) operates all of the network nodes in the two available XMTP network environments: `dev` and `production`.

These network nodes operate in US jurisdiction in compliance with Office of Foreign Assets Control (OFAC) sanctions and Committee on Foreign Investment in the United States (CFIUS) export compliance regulations. Accordingly, IP-based geoblocking is in place for the following countries/territories:

- Cuba
- Iran
- North Korea
- Syria
- The Crimea, Donetsk People’s Republic, and Luhansk People’s Republic regions of Ukraine

To explore the software for the nodes that currently form the XMTP network, see the [xmtp-node-go repo](https://github.com/xmtp/xmtp-node-go).

XMTP Labs is working toward a phased decentralization of the network. To learn more, see [Decentralizing XMTP, a minimum viable proposal ](https://community.xmtp.org/t/decentralizing-xmtp-a-minimum-viable-proposal/510).

Decentralization of the XMTP network will be achieved by a diverse set of independent third parties operating nodes all over the world. Decentralization is a top priority and is required to ensure that XMTP is able to serve everyone on the planet.

### Is XMTP a blockchain?

XMTP is not a blockchain. Nodes on the XMTP network run software to store and transfer messages between blockchain accounts. For secure and reliable delivery of messages, the nodes participate in a consensus mechanism.

XMTP Labs is researching various consensus protocols that would allow the network to operate in a decentralized fashion while maintaining its current emphasis on user privacy and low-latency message delivery.

### Will I be able to run my own XMTP node?

Yes, you will be able to run a node.

XMTP Labs is working toward a phased decentralization of the network. To learn more, see [Decentralizing XMTP, a minimum viable proposal](https://community.xmtp.org/t/decentralizing-xmtp-a-minimum-viable-proposal/510).

### What is the relationship between Waku and XMTP?

XMTP currently uses the Waku protocol to relay messages between network nodes.

Waku is an unopinionated transport layer built around the libp2p publish/subscribe model. Waku is intentionally open-ended when it comes to handling options like message encoding and encryption, which content topics to use, and how to create and manage encryption keys linked to blockchain account addresses.

XMTP provides a standardized approach to addressing these options, focusing on maximizing compatibility across apps and ensuring message security and deliverability, while also enabling as many developers as possible to use XMTP to build interoperable messaging apps.

### How do XMTP clients communicate with XMTP nodes?

Clients communicate with XMTP nodes through a gRPC (or JSON/HTTP) [message API](https://github.com/xmtp/proto/blob/main/proto/message_api/v1/message_api.proto).

### What is the expected network latency for message delivery and retrieval?

XMTP provides perceptibly real-time message delivery and retrieval. The network does not provide service level guarantees.

### Is there a way to get a list of all current XMTP-enabled wallets?

XMTP doesn't provide a direct method to fetch all XMTP-enabled wallet addresses in bulk. You might consider using a third-party service to do so instead of building the functionality yourself.

For example, services like [Airstack](https://www.airstack.xyz/) and [Blaze](https://www.withblaze.app/) have compiled extensive lists of XMTP addresses by querying the XMTP `canMessage` API over time at a rate that avoids hitting the limits.

### Does XMTP support group chat?

Yes! XMTP v3 alpha supports group chats in React Native, Android, and IOS SDks. However, the JavaScript SDK currently lacks support for group chat functionalities. If you want to integrate backend features, you can use the CLI, which provides a viable solution as described in this [repository](https://github.com/xmtp/libxmtp/tree/main/examples/cli). You can also check out a practical implementation example available on [Replit](https://replit.com/@neekolas/Groups-Nodejs-Client#src/index.ts).

## Rate-limiting

---

### How does network rate-limiting work?

Currently, XMTP network nodes are configured to rate-limit high-volume publishing from clients. A rate-limited client can expect to receive a 429 status code response from a node.

XMTP Labs is capable of rate-limiting the network while we are the only node operators. Rate-limiting is a consideration in our research into economic spam controls. Ultimately, rate-limiting decisions will be made based on maintaining network quality and reducing the potential for malicious attacks by senders and nodes.

### What are the API rate-limits?

- 1,000 publish requests per 5 minutes.
- 10,000 general requests per 5 minutes.
- Nodes allow 40,000 reads per 5 minutes.

If your requirements exceed these limits, [submit this form](https://docs.google.com/forms/d/e/1FAIpQLSftr558wsYD2X_0c1Jsz6rTxua1f1DDJidAn7iphJVc48l7Fw/viewform) to share more details with the XMTP Labs team.

### What happens if I exceed the limits?

You'll get an HTTP 429 error and must wait for the next 5-minute window.

Tips for staying within limits:

- Spread your requests over 5 minutes.
- Use smaller batches for large queries.
- Introduce a brief delay between calls.
- Use multiple IPs to make requests.
- Bulk `canMessage` makes API calls in 50-address batches.

By being aware of these limits and planning accordingly, you can avoid rate-limiting issues.

## Fees

---

### Who pays to keep the network running?

XMTP Labs is committed to keeping the network running. Future incentive mechanisms will enable the network to run autonomously of XMTP Labs.

### Will XMTP charge messaging fees?

Most messaging incurs no fee. As XMTP decentralizes, messaging between participants that opt-in will remain free, while unsolicited messages will often incur fees or see token staking requirements.

There are no messaging-related fees incurred by developers for building with the XMTP SDK.

Have other questions or ideas about message-related fees? Post to the [XMTP Community Forums](https://community.xmtp.org/).

### What are the costs of XMTP message storage and retrieval?

Messages are stored off-chain on the XMTP network, with all nodes currently hosted by XMTP Labs. XMTP Labs currently absorbs all message storage and retrieval costs.

There are no message storage and retrieval-related fees incurred by developers for building with the XMTP SDK.

## Security

---

### Has XMTP undergone a security audit?

Yes, read the comprehensive [XMTP security assessment](/img/REP-final-20230207T000355Z.pdf) prepared by [CertiK](https://www.certik.com/company/about).

### How does XMTP establish a secure and fraud-proof relationship between two identities?

Blockchain accounts sign and advertise a set of keys to start using XMTP. XMTP uses these keys to establish a shared secret between the blockchain accounts. It then uses the shared secret to generate a key used to encrypt an invitation that allows the blockchain accounts to start exchanging messages. No third-party apps or relayers are involved in this process.

To learn more about these keys, see [Key generation and usage in XMTP](/docs/concepts/key-generation-and-usage).

To learn more about invitation and message encryption, see [Invitation and message encryption with XMTP](/docs/concepts/invitation-and-message-encryption).

### Does each blockchain account address have a corresponding XMTP identity?

Yes. Each blockchain account address is represented by an XMTP identity key. This identity key is a part of a key bundle that only the address that generated it can use to authenticate messages.

To learn more about XMTP identity keys, see [Key generation and usage in XMTP](/docs/concepts/key-generation-and-usage).

### Why do apps built with XMTP require a user to sign with their blockchain account private keys each time they start a new messaging session?

When a user starts a new messaging session, they must sign with their blockchain account private key to decrypt their XMTP key bundle. The key bundle is then used for invitation and message decryption.

Because there is no secure place in the browser to persist a decrypted key bundle, the app can use the bundle for the current session only. Once the user starts a new session, such as after refreshing their browser, they must sign again to decrypt their key bundle.

If you are using the JavaScript client SDK, you might consider [manually handling private key storage](/docs/build/authentication), but only with the understanding that this approach **requires the utmost care**.

Based on developer and community feedback, we are researching more robust approaches to secure key management.

To learn more about these keys, see [Key generation and usage in XMTP](/docs/concepts/key-generation-and-usage).

## Storage

---

### Where are XMTP messages stored?

XMTP stores messages in the XMTP network before and after retrieval. Application-specific message storage policies may vary.

### What are the XMTP message retention policies?

XMTP provides both `production` and `dev` network environments to support the development phases of your project.

The `production` network is configured to store messages indefinitely.

XMTP may occasionally delete messages and keys from the `dev` network and will provide advance notice in the [XMTP Discord community](https://discord.gg/xmtp) and [XMTP Announcements forum](https://community.xmtp.org/c/start-here/announcements/7).

Different approaches to long-term message storage are currently being researched.

Have other questions or ideas about message storage? Post to the [XMTP Community Forums](https://community.xmtp.org/).

## Messages

---

### Which message formats and metadata does XMTP support?

XMTP transports a message payload as a set of bytes that can represent any format that a developer wants to support, such as plain text, JSON, or even non-text binary or media content.

With XMTP, these message formats are called content types. Currently, there are two basic content types available. These content types aim to establish broad compatibility among apps built with XMTP.

The XMTP community can propose and adopt standards for other content types, either informally or through a governance process.

Message payloads also include references to timestamps. However, timestamps are not currently independently verified and can be set to any value by the sending app.

To learn more about content types, see [Content types](/docs/concepts/content-types).

To learn more about the XMTP improvement proposals governance process, see [What is an XIP?](https://github.com/xmtp/XIPs/blob/main/XIPs/xip-0-purpose-process.md)

Have other questions or ideas about message formats and metadata? Post to the [XMTP Community Forums](https://community.xmtp.org/).

### Does XMTP have a maximum message size?

Yes. Messages sent on the XMTP network are limited to just short of 1MB (1048214 bytes).

For this reason, XMTP supports [message attachments](#does-xmtp-support-message-attachments).

### Does XMTP support message attachments?

Yes, via two XMTP improvement proposals that are currently in review status:

- [XIP-15](https://github.com/xmtp/XIPs/blob/main/XIPs/xip-15-attachment-content-type.md): Attachment content type  
  Attachment size is limited to just short of 1MB (1048214 bytes). To support larger attachments, use the remote attachment content type.

- [XIP-17](https://github.com/xmtp/XIPs/blob/main/XIPs/xip-17-remote-attachment-content-type-proposal.md): Remote attachment content type

To learn how to implement message attachments in your app, see [Support attachments in your app](/docs/build/messages/remote-attachment).

### Does XMTP support deleting and editing messages?

Not currently. However, XMTP Labs is exploring ways to support message deletion and editing.

Have other questions or ideas about support for message deletion and editing? Post to the [XMTP Community Forums](https://community.xmtp.org/).

## Message patterns

---

### Is XMTP more like email or chat?

XMTP enables developers to implement messaging features and UX paradigms that best fit their needs. As a result, messages sent using apps built with XMTP might resemble many typical forms of communication, such as email, chat, text messaging, push notifications, and more.

### Does XMTP support real-time conversations?

Real-time chat is a core use case for XMTP and is demonstrated by the XMTP Inbox chat app.

- [Try the app](https://dev.xmtp.chat/) connected to the XMTP `dev` network
- [Try the app](https://xmtp.chat/) connected to the XMTP `production` network

To learn more about how the XMTP Inbox chat app is built, see the [xmtp-inbox-web repo](https://github.com/xmtp-labs/xmtp-inbox-web).

### Does XMTP support broadcast messaging?

XMTP natively supports one-to-one messaging. One-to-many broadcast messages, or announcements, can be constructed using the XMTP SDK.

To learn more, see [Send a broadcast message](/docs/tutorials/broadcast).

## XMTP Labs

---

### What is XMTP Labs?

XMTP Labs is a web3 software company that contributes to XMTP, an open network, protocol, and standards for secure messaging between blockchain accounts.

XMTP Labs employees work alongside other XMTP community members to build with and extend XMTP. Community [contributions and participation](/docs/contribute) are critical to the development and adoption of XMTP.

### Does XMTP Labs plan to build apps or are you focused 100% on the protocol?

XMTP Labs is focused on serving developers. We build [SDKs, UI components, and example apps](/docs/introduction#xmtp-sdks-and-example-apps) that help developers build great experiences with XMTP.

## Developers

---

### Does xmtp is compatible with `viem`

Yes, not by default but you can create a wrapper around it. Like [Lenster](https://github.com/lensterxyz/lenster/blob/19e5911cd3b0d4f2c391d1a1180a7ea5d9335bf3/apps/web/src/hooks/useEthersWalletClient.tsx#L6)

```js
import { ZERO_ADDRESS } from "@lenster/data/constants";
import { CHAIN_ID } from "src/constants";
import type { Address } from "viem";
import { useWalletClient } from "wagmi";

const useEthersWalletClient = (): ({
  data: {
    getAddress: () => Promise<Address>,
    signMessage: (message: string) => Promise<string>,
  },
  isLoading: boolean,
}) => {
  const { data, isLoading } = useWalletClient({ chainId: CHAIN_ID });

  const ethersWalletClient = {
    getAddress: async (): Promise<Address> => {
      return (await data?.account.address) ?? ZERO_ADDRESS;
    },
    signMessage: async (message: string): Promise<string> => {
      const signature = await data?.signMessage({ message });
      return signature ?? null; //lenster uses empty string which could be risky
    },
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { signMessage, ...rest } = data ?? {};

  const mergedWalletClient = {
    data: {
      ...ethersWalletClient,
      ...{ ...rest },
    },
  };

  return { data: mergedWalletClient.data, isLoading };
};

export default useEthersWalletClient;
```

Then you can call it like this, like [Lenster](https://github.com/lensterxyz/lenster/blob/19e5911cd3b0d4f2c391d1a1180a7ea5d9335bf3/apps/web/src/hooks/useXmtpClient.tsx#L12)

```
const { data: walletClient, isLoading } = useEthersWalletClient();
```

### Why my app is failing saying Buffer is not found

If you run into issues with `Buffer` and `polyfills`, see these solutions:

1. Install the buffer dependency.

```bash
npm i buffer
```

2. Create a new file, `polyfills.js`, in the root of your project.

```tsx
import { Buffer } from "buffer";

window.Buffer = window.Buffer ?? Buffer;
```

3. Import it into your main file on the first line.

- ReacJS: `index.js` or `index.tsx`
- VueJS: `main.js`
- NuxtJS: `app.vue`

```tsx
//has to be on the first line of the file for it to work
import "./polyfills";
```

#### Using config files

<details><summary>React Scripts 5</summary>

- **CRACO**: (Create React App Configuration Override) is a community solution for adding custom configurations to Create React App. It allows you to customize your configuration without ejecting from the default setup provided by Create React App.

  **Install react-app-rewired**:

  ```bash
  npm install craco
  ```

  Create the `craco.config.js` in your root directory:

  ```jsx
  const webpack = require("webpack");
  module.exports = {
    webpack: {
      plugins: [
        new webpack.ProvidePlugin({
          Buffer: ["buffer", "Buffer"],
        }),
      ],
      resolve: {
        fallback: {
          buffer: require.resolve("buffer/"),
        },
      },
    },
  };
  ```

- **React-App-Rewired**: `react-app-rewired` is a tool to tweak the Create React App (CRA) configuration without ejecting, similar to CRACO. Here's how you can use it:

  **Install react-app-rewired**:

  ```
  npm install react-app-rewired
  ```

  **Modify the `scripts` in your `package.json`**:
  Replace `react-scripts` with `react-app-rewired`. For example:

  ```json
  "scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-app-rewired eject"
  }
  ```

  **Create a `config-overrides.js` file**:
  In the root of your project, create a `config-overrides.js` file. This file will be used to modify the webpack config.

  ```javascript
  const webpack = require("webpack");

  module.exports = function override(config, env) {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      buffer: require.resolve("buffer/"),
    };
    config.plugins = (config.plugins || []).concat([
      new webpack.ProvidePlugin({
        Buffer: ["buffer", "Buffer"],
      }),
    ]);
    return config;
  };
  ```

- **Eject Method**: Ejecting from CRA gives you full control over the configuration, but it's a one-way operation. Once you eject, you can't go back to the abstracted CRA setup.

  **Eject the application**:

  ```
  npm run eject
  ```

  **Modify the Webpack Configuration**:
  After ejecting, you'll have access to the `config` folder. Modify the `webpack.config.js` file:

  ```javascript
  const webpack = require("webpack");

  // Inside the module.exports object
  module.exports = {
    // ... other configurations

    resolve: {
      // ... other resolve options
      fallback: {
        // ... other fallback options
        buffer: require.resolve("buffer/"),
      },
    },
    plugins: [
      // ... other plugins
      new webpack.ProvidePlugin({
        Buffer: ["buffer", "Buffer"],
      }),
    ],
  };
  ```

</details>

<details><summary>WEBPACK</summary>

- Webpack: `vue.config.js` or `webpack.config.js`:

```jsx
const webpack = require("webpack");

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        Buffer: ["buffer", "Buffer"],
      }),
    ],
  },
  transpileDependencies: true,
};
```

</details>

<details><summary>VITE</summary>

- Vite: `vite.config.js`:

```jsx
import { defineConfig } from "vite";
import { Buffer } from "buffer";

export default defineConfig({
  /**/
  define: {
    global: {
      Buffer: Buffer,
    },
  },
  /**/
});
```

</details>

<details><summary>WEBPACK</summary>

- NuxtJS: `nuxt.config.js`:

```tsx
export default {
  build: {
    extend(config, { isClient }) {
      if (isClient) {
        config.node = {
          Buffer: true,
        };
      }
    },
  },
};
```

</details>
