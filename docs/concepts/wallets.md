---
sidebar_label: Wallet app and chain support
sidebar_position: 8
---

# Wallet apps and blockchains supported by XMTP

XMTP has been implemented to work with Ethereum Virtual Machine (EVM)-compatible wallet apps and blockchain accounts, though XMTP itself does not use EVMs.

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

## Chains

XMTP works with externally owned accounts (EOAs) on Ethereum and Ethereum side-chains and L2s, including Polygon, Avalanche, and Optimism.

Because all Ethereum Virtual Machine (EVM) chains share the same Ethereum wallet and address format and XMTP messages are stored off-chain, XMTP is interoperable across EVM chains, including testnets.

For example, whether a user has their wallet app connected to Ethereum or an Ethereum side-chain or L2, their private key can generate and retrieve their XMTP key pair to give them access to XMTP.
