---
sidebar_label: Works with XMTP
sidebar_position: 9
---
import arbitrum from '/docs/dev-concepts/img/arbitrum-logo.png';
import avalanche from '/docs/dev-concepts/img/avalanche-logo.png';
import base from '/docs/dev-concepts/img/base-logo.png';
import bnbchain from '/docs/dev-concepts/img/bnbchain-logo.png';
import ethereum from '/docs/dev-concepts/img/ethereum-logo.png';
import hermez from '/docs/dev-concepts/img/hermez-logo.png';
import linea from '/docs/dev-concepts/img/linea-logo.png';
import optimism from '/docs/dev-concepts/img/optimism-logo.png';
import polygon from '/docs/dev-concepts/img/polygon-logo.png';
import scroll from '/docs/dev-concepts/img/scroll-logo.png';

# Works with XMTP

In the spirit of web3 composability, here are **just a few** of the building blocks that work well with XMTP. Building your app with these tools can help you deliver and distribute an app—faster and with quality.

:::tip

**This list is not exhaustive** and is just a starting point. A highly extensible protocol like XMTP can work with more tools than those listed in each section.

:::


## Wallet connection

To connect web3 wallets to your app:

- [Thirdweb](https://thirdweb.com/)
    - Example implementation in the [XMTP React Native example app](https://github.com/xmtp/xmtp-react-native/blob/main/example/src/AuthView.tsx#L7)
- [WalletConnect](https://walletconnect.com/)
    - Example implementation in the [XMTP Inbox Web app](https://github.com/xmtp-labs/xmtp-inbox-web)
- [wagmi](https://wagmi.sh/)

XMTP client SDKs require you to use [ethers](https://ethers.org/) or another web3 library capable of supplying an [ethers Signer](https://docs.ethers.io/v5/api/signer/). These wallet connection tools, as well as others, provide this capability.


## Message bots

To build message bots to help with testing and user onboarding experiences:

- [XMTP Bot Starter](https://github.com/xmtp/xmtp-bot-starter)


## Storage

To store encrypted and encoded message payload content:

- [web3.storage](https://web3.storage/)
    - Example implementation in [`xmtp-js` remote content types](https://github.com/xmtp/xmtp-js-content-types)
    - Tutorial: [Introducing remote media attachments](/blog/attachments-and-remote-attachments)


## Decentralized identifiers

To support decentralized identity management:

- [Ethereum Name Service](https://ens.domains/) (ENS)
    - Example implementation in [xmtp-inbox-web](https://github.com/xmtp-labs/xmtp-inbox-web)
- [Coinbase cb.id](https://help.coinbase.com/en/wallet/managing-account/coinbase-ens-support)
- [Lens](https://www.lens.xyz/)


## Decentralized social

- [Lens](https://www.lens.xyz/)
    - Example implementation in [Lenster](https://github.com/lensterxyz/lenster)
    - Tutorial: [Build key XMTP chat features in a Lens app](/docs/client-sdk/javascript/tutorials/build-key-xmtp-chat-features-in-a-lens-app)
- [CyberConnect](https://link3.to/cyberconnect)
    - Example implementation in the [CyberConnect & XMTP Integration Demo App](https://github.com/cyberconnecthq/cc-xmtp-chatapp)
    - Tutorial: [Build messaging for CyberConnect profiles](/docs/client-sdk/javascript/tutorials/build-messaging-for-cyberconnect-profiles)


## Decentralized app store

To launch your own dApp stores and list any dApp, including your own:

- Polygon [dApp Store Kit](https://docs.dappstorekit.io/docs/how%20to%20use%20the%20dapp%20store%20kit/dapp-registry-management/)


## Wallet apps

XMTP can be used with EVM-compatible wallet apps that support ECDSA signing on the secp256k1 elliptic curve. These include common wallet apps such as:

- [Coinbase Wallet](https://www.coinbase.com/wallet)
- [MetaMask](https://metamask.io/)
- [Rainbow Wallet](https://rainbow.me/)
- Most wallets in the [WalletConnect network](https://explorer.walletconnect.com/?type=wallet)

The XMTP SDK **does not** include a wallet app abstraction, as XMTP assumes that developers have a way to obtain a wallet app connection.

XMTP uses a signature from the blockchain account to [create and enable the XMTP identity](account-signatures). Specifically, XMTP identities must be generated from and associated with an Ethereum account's public address and private key. As such, a connected wallet app must be present to generate the signature and initialize the API client in the client app.

A user can generate multiple XMTP identities from the same wallet app by changing to a different blockchain account.


## Chains

XMTP works with externally owned accounts (EOAs) on Ethereum and Ethereum side-chains and L2s. 

Because all Ethereum Virtual Machine (EVM) chains share the same Ethereum wallet and address format and XMTP messages are stored off-chain, XMTP is interoperable across EVM chains, including testnets. (XMTP itself does not use EVMs.) 

For example, whether a user has their wallet app connected to Ethereum or an Ethereum side-chain or L2, their private key can generate and retrieve their XMTP key pair to give them access to XMTP.

XMTP is also chain-agnostic, so multi-chain support is possible. 

Here are **just a few** of the chains supported by XMTP:

<img src={arbitrum} style={{width:"100px"}} alt="Arbitrum logo"/>

[Arbitrum](https://arbitrum.foundation/)

<img src={avalanche} style={{width:"100px"}} alt="Avalanche logo"/>

[Avalanche: Contract Chain (C-Chain)](https://www.avax.com/)

<img src={base} style={{width:"100px"}} alt="Base logo"/>

[Base](https://base.org/) (Optimistic L2)

<img src={bnbchain} style={{width:"100px"}}/>

[Build N Build (BNB) Chain](https://www.bnbchain.org/)

<img src={ethereum} style={{width:"100px"}} alt="Ethereum logo"/>

[Ethereum](https://ethereum.org/)

<img src={hermez} style={{width:"100px"}} alt="Hermez logo"/>

[Hermez](https://docs.hermez.io/Hermez_1.0/about/scalability/) zk-EVM

<img src={linea} style={{width:"100px"}} alt="Linea logo"/>

[Linea](https://linea.build/) zk-EVM

<img src={optimism} style={{width:"100px"}} alt="Optimism logo"/>

[Optimism](https://www.optimism.io/)

<img src={polygon} style={{width:"100px"}} alt="Polygon logo"/> 

[Polygon](https://polygon.technology/)

<img src={scroll} style={{width:"100px"}} alt="Scroll logo"/> 

[Scroll](https://scroll.io/)


:::tip

Want to propose a path to compatibility for other popular chains such as Aptos, Bitcoin, Cosmos, Flow, Hedera Hashgraph, Polkadot, Solana, Starkware, Stellar, Sui, and Tezos? Do it via an [XMTP grant](/grants)!

Have you built with a tool that works well with XMTP? Let's add it to this page. Share your experience with `prxshant.eth` on [xmtp.chat](https://xmtp.chat/inbox) or using the feedback widget at the bottom of this page.

:::
