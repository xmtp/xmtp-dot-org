---
sidebar_label: Chain and wallet app support
sidebar_position: 8
---
import aptos from '/docs/dev-concepts/img/aptos-logo.png';
import arbitrum from '/docs/dev-concepts/img/arbitrum-logo.png';
import avalanche from '/docs/dev-concepts/img/avalanche-logo.png';
import base from '/docs/dev-concepts/img/base-logo.png';
import bnbchain from '/docs/dev-concepts/img/bnbchain-logo.png';
import cosmos from '/docs/dev-concepts/img/cosmos-logo.png';
import ethereum from '/docs/dev-concepts/img/ethereum-logo.png';
import hermez from '/docs/dev-concepts/img/hermez-logo.png';
import linea from '/docs/dev-concepts/img/linea-logo.png';
import near from '/docs/dev-concepts/img/near-logo.png';
import optimism from '/docs/dev-concepts/img/optimism-logo.png';
import polygon from '/docs/dev-concepts/img/polygon-logo.png';
import scroll from '/docs/dev-concepts/img/scroll-logo.png';
import solana from '/docs/dev-concepts/img/solana-logo.png';

# Chains and wallet apps supported by XMTP

XMTP has been implemented to work with Ethereum Virtual Machine (EVM)-compatible blockchain accounts and wallet apps, though XMTP itself does not use EVMs.

## Chains

XMTP works with externally owned accounts (EOAs) on Ethereum and Ethereum side-chains and L2s. Because all Ethereum Virtual Machine (EVM) chains share the same Ethereum wallet and address format and XMTP messages are stored off-chain, XMTP is interoperable across EVM chains, including testnets.

For example, whether a user has their wallet app connected to Ethereum or an Ethereum side-chain or L2, their private key can generate and retrieve their XMTP key pair to give them access to XMTP.

Here are just a few of the chains supported by XMTP:

:::tip

XMTP is compatible with all EVM chains so this list isn't exhaustive. 

In addition, XMTP is chain-agnostic so multi-chain support is possible. Want to propose a path to compatibility for other popular chains such as Bitcoin, Solana, or Tezos? Do it via an [XMTP grant](/grants)!

:::

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


## Wallet apps

XMTP can be used with EVM-compatible wallet apps that support ECDSA signing on the secp256k1 elliptic curve. These include common wallet apps such as MetaMask, Coinbase Wallet, and Rainbow Wallet, as well as most wallet apps in the WalletConnect network.

The XMTP SDK **does not** include a wallet app abstraction, as XMTP assumes that developers have a way to obtain a wallet app connection.

XMTP uses a signature from the blockchain account to create and enable the XMTP identity. Specifically, XMTP identities must be generated from and associated with an Ethereum account's public address and private key. As such, a connected wallet app must be present to generate the signature and initialize the API client in the client app.

:::info Info

XMTP client SDKs currently require you to use [ethers](https://ethers.org/) or another web3 library capable of supplying an [ethers Signer](https://docs.ethers.io/v5/api/signer/), such as [wagmi](https://wagmi.sh/).

:::

:::info Info

You can generate multiple XMTP identities from the same wallet app by changing to a different blockchain account.

:::

To learn more about account signatures, see [Sign to send and receive messages using apps built with XMTP](account-signatures).
