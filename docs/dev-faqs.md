---
sidebar_label: Developer FAQ
title: Developer FAQ
sidebar_position: 3
description: "Here are just a few of the composable building blocks of web3 that work well with XMTP."
---

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

# Developer FAQ

In the spirit of web3 composability, here are **just a few** of the building blocks that work well with XMTP. Building your app with these tools can help you deliver and distribute an app—faster and with quality.

## What wallet connection tools work with XMTP?

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

## Storage

To store encrypted and encoded message payload content:

- [IPFS](https://ipfs.io/)
- [web3.storage](https://web3.storage/)

  - Example implementation in [`xmtp-js` remote content types](https://github.com/xmtp/xmtp-js-content-types)
  - Tutorial: [Introducing remote media attachments](/blog/attachments-and-remote-attachments)

- [ThirdwebStorage](https://portal.thirdweb.com/storage)
  - Tutorial: [How to send remote attachments with XMTP & Thirdweb SDKs](/blog/thirdbweb-wallet-remote-attachments)

## Does XTMP works with Social

- [Lens](https://www.lens.xyz/)
  - Example implementation in [Lenster](https://github.com/lensterxyz/lenster)
  - Tutorial: [Integrating Multiple Profiles with Lens](/blog/Integrating-Multiple-Profiles-with-Lens)
- [CyberConnect](https://link3.to/cyberconnect)
  - Example implementation in the [CyberConnect & XMTP Integration Demo App](https://github.com/cyberconnecthq/cc-xmtp-chatapp)
  - Tutorial: [Build messaging for CyberConnect profiles](https://cyberconnect.hashnode.dev/integrating-xmtp-into-cyberconnect-a-guide)

## Wallet apps

XMTP can be used with EVM-compatible wallet apps that support ECDSA signing on the secp256k1 elliptic curve. These include common wallet apps such as:

- [Coinbase Wallet](https://www.coinbase.com/wallet)
- [MetaMask](https://metamask.io/)
- [Rainbow Wallet](https://rainbow.me/)
- Most wallets in the [WalletConnect network](https://explorer.walletconnect.com/?type=wallet)

The XMTP SDK **does not** include a wallet app abstraction, as XMTP assumes that developers have a way to obtain a wallet app connection.

XMTP uses a signature from the blockchain account to [create and enable the XMTP identity](/docs/concepts/account-signatures). Specifically, XMTP identities must be generated from and associated with an Ethereum account's public address and private key. As such, a connected wallet app must be present to generate the signature and initialize the API client in the client app.

A user can generate multiple XMTP identities from the same wallet app by changing to a different blockchain account.

## Chains

XMTP works with externally owned accounts (EOAs) on Ethereum and Ethereum side-chains and L2s.

Because all Ethereum Virtual Machine (EVM) chains share the same Ethereum wallet and address format and XMTP messages are stored off-chain, XMTP is interoperable across EVM chains, including testnets. (XMTP itself does not use EVMs.)

For example, whether a user has their wallet app connected to Ethereum or an Ethereum side-chain or L2, their private key can generate and retrieve their XMTP key pair to give them access to XMTP.

XMTP is also chain-agnostic, so multi-chain support is possible.

Here are **just a few** of the chains supported by XMTP:

<div class="chain-list" >
  <a href="https://arbitrum.foundation/"  class="chain-item">
      <img src={arbitrum} />
      <a >Arbitrum</a>
  </a>
    <a href="https://www.avax.com/" class="chain-item">
      <img src={avalanche} />
      <a >Avalanche</a>
  </a>
    <a href="https://base.org/" class="chain-item">
      <img src={base} />
      <a >Base</a>
  </a>
    <a href="https://www.bnbchain.org/" class="chain-item">
      <img src={bnbchain}/>
      <a >(BNB) Chain</a>
  </a>
    <a href="https://ethereum.org//" class="chain-item">
      <img src={ethereum} />
      <a >Ethereum</a>
  </a>
    <a href="https://docs.hermez.io/Hermez_1.0/about/scalability/" class="chain-item">
      <img src={hermez} />
      <a >Hermez</a>
  </a>
    <a href="https://linea.build/" class="chain-item">
      <img src={linea}/>
      <a >zk-EVM</a>
  </a>
    <a href="https://www.optimism.io/" class="chain-item">
      <img src={optimism} />
      <a >Optimism</a>
  </a>
    <a href="https://polygon.technology/" class="chain-item">
      <img src={polygon} />
      <a >Polygon</a>
  </a>
    <a href="https://www.scroll.io/" class="chain-item">
      <img src={scroll} />
      <a >Scroll</a>
  </a>
</div>

## SDK

### Which languages and environments does the XMTP SDK support?

The XMTP SDK is [available for multiple languages](/docs/introduction#xmtp-sdks-and-example-apps#sdks), including JavaScript, Kotlin, Swift, and Dart.

Have other questions or ideas for future language or environment support? Post to the [XMTP discussion forum](https://github.com/orgs/xmtp/discussions).

### Which web3 libraries does the XMTP SDK require?

The XMTP SDK currently requires you to use [ethers](https://ethers.org/) or another web3 library capable of supplying an [ethers Signer](https://docs.ethers.io/v5/api/signer/), such as [wagmi](https://wagmi.sh/).
