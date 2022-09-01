---
sidebar_label: Supported wallets
sidebar_position: 6
---

# Wallets supported by XMTP

Because XMTP identities are [securely tied to wallets](./security/#key-generation), a connected wallet must be present to initialize the client. The XMTP SDK **does not** include a wallet abstraction as XMTP assumes that developers have a way to obtain a wallet connection.

Identities must be generated from and associated with an Ethereum wallet's public address and private key.

:::info Info

The `xmtp-js` client is initialized using an `ethers.Signer` instance.

:::

:::info Info

You can generate multiple identities from the same wallet by changing to a different address.

:::

## Chains

XMTP messages are stored off-chain. This means that the messages are interoperable across different blockchains. This is particularly relevant if XMTP extends wallet support beyond Ethereum.

Because all Ethereum Virtual Machine (EVM) chains share the same Ethereum wallet and address format, XMTP is interoperable across EVM chains, including testnets. For example, whether a user has their wallet set to Ethereum or any other EVM chain, such as Polygon, Avalanche, or Optimism, their private key will work for generating or retrieving their XMTP key pair.
