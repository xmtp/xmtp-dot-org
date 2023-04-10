---
sidebar_label: Chain and wallet app support
sidebar_position: 8
---
import arbitrum from '/docs/dev-concepts/img/arbitrum-logo.png';
import avalanche from '/docs/dev-concepts/img/avalanche-logo.png';
import optimism from '/docs/dev-concepts/img/optimism-logo.png';
import base from '/docs/dev-concepts/img/base-logo.png';
import polygon from '/docs/dev-concepts/img/polygon-logo.png';
import scroll from '/docs/dev-concepts/img/scroll-logo.png';
import hermez from '/docs/dev-concepts/img/hermez-logo.png';
import linea from '/docs/dev-concepts/img/linea-logo.png';

# Chains and wallet apps supported by XMTP

XMTP has been implemented to work with Ethereum Virtual Machine (EVM)-compatible blockchain accounts and wallet apps, though XMTP itself does not use EVMs.

## Chains

XMTP works with externally owned accounts (EOAs) on Ethereum and Ethereum side-chains and L2s. Because all Ethereum Virtual Machine (EVM) chains share the same Ethereum wallet and address format and XMTP messages are stored off-chain, XMTP is interoperable across EVM chains, including testnets.

For example, whether a user has their wallet app connected to Ethereum or an Ethereum side-chain or L2, their private key can generate and retrieve their XMTP key pair to give them access to XMTP.

Here are just some of the chains supported by XMTP:

<img src={arbitrum} style={{width:"100px"}}/>

[Arbitrum](https://arbitrum.foundation/) from OffChain Labs 

<img src={avalanche} style={{width:"100px"}}/>

[Avalanche](https://www.avax.com/) 

<img src={base} style={{width:"100px"}}/>

[Base](https://base.org/) (Optimistic L2) from Coinbase

<img src={hermez} style={{width:"100px"}}/>

[Hermez](https://docs.hermez.io/Hermez_1.0/about/scalability/) zk-EVM from ConsenSys

<img src={linea} style={{width:"100px"}}/>

[Linea](https://linea.build/) zk-EVM from ConsenSys

<img src={optimism} style={{width:"100px"}}/>

[Optimism](https://www.optimism.io/)

<img src={polygon} style={{width:"100px"}}/> 

[Polygon](https://polygon.technology/)

<img src={scroll} style={{width:"100px"}}/> 

[Scroll](https://scroll.io/)


## Wallet apps

XMTP can be used with EVM-compatible wallet apps that support ECDSA signing on the secp256k1 elliptic curve. These include common wallet apps such as MetaMask, Coinbase Wallet, and Rainbow Wallet, as well as most wallet apps in the WalletConnect network.

The XMTP SDK **does not** include a wallet app abstraction, as XMTP assumes that developers have a way to obtain a wallet app connection.

XMTP uses a signature from the blockchain account to create and enable the XMTP identity. Specifically, XMTP identities must be generated from and associated with an Ethereum account's public address and private key. As such, a connected wallet app must be present to generate the signature and initialize the API client in the client app.

:::info Info

The `xmtp-js` client is initialized using an `ethers.Signer` instance.

:::

:::info Info

You can generate multiple XMTP identities from the same wallet app by changing to a different blockchain account.

:::

To learn more about signatures, see [Sign to send and receive messages using apps built with XMTP](account-signatures).
