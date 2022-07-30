---
sidebar_label: Supported wallets
sidebar_position: 2
---

<!--from https://github.com/xmtp/docs/blob/main/docs/client-sdk/wallets.md-->
<!--need to figure out of this belongs in the client-sdk section or here in general dev concepts. Is this content of interest only to devs building apps that embed an xmtp client? consider that what goes into the client-sdk section is language-specific and versioned. for example, there will be one Supported wallets file for javascript and one for swift. will there be enough language- and version-specific content to warrant this? It is okay to version as such if the content is truly targeted to the app devs-->

# Supported wallets

Because XMTP identities are [securely tied to wallets](/client-sdk/javascript/concepts/authentication-and-encryption), a connected wallet must be present to initialize the client. The XMTP SDK **does not** include a wallet abstraction as XMTP assumes that developers have a way to obtain a wallet connection.

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
