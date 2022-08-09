---
sidebar_label: Authentication and encryption
sidebar_position: 2
---

# Participant authentication and message encryption with XMTP

<!--from https://github.com/xmtp/docs/blob/main/docs/client-sdk/security.md-->

The XMTP SDK enables clients to establish secure, unfalsifiable relationships between identities in which only the sender and recipient can decrypt messages sent between them. The protocol design also accommodates asynchronous offline communication and secure storage of messages.

These relationships between identities are established using a set of keys. When a user connects their wallet to their client, the wallet signs with its public and private key. This enables the client SDK to generate the following keys:

- `IdentityPrivateKey`
- `IdentityPublicKey`
- `PreKeys`

You can think of the `IdentityPrivateKey` and `IdentityPublicKey` as proxies for a user's wallet keys.

Because XMTP cannot access the actual wallet keys, XMTP generates `IdentityPrivateKey` and `IdentityPublicKey` and asks the user to vouch for them by signing them with their wallet keys.

Anyone can verify the user's wallet signature and consider it as an attestation that the `IdentityPrivateKey` and `IdentityPublicKey` are the user's true proxy keys since only the user's wallet keys could have created the signature.

The client publishes the user's `IdentityPublicKey` and `PreKeys` to the XMTP Network in a `PublicKeyBundle`. The `PublicKeyBundle` contains all of the information needed for someone to contact the user.

The `IdentityPrivateKey` (and a copy of the other keys, for good measure) are encrypted and stored locally on the client or on the XMTP Network. Only clients authorized by the user can access these encrypted keys. By design, XMTP and the XMTP Network cannot access these encrypted keys.

## Algorithms

XMTP is designed to be able to replace algorithms or expand the set of supported algorithms in a backward-compatible manner.

Our initial choice of algorithms was driven by fairly pragmatic criteria. For example, the algorithms we chose are:

- Tried and true and in widespread use
- Well-supported in client languages, such as JavaScript
- Available in standard browser APIs, rather than third-party dependencies

We also aimed to reuse existing algorithms, looking to well-known and standard algorithms with trustworthy implementations.

As such, we built the cryptographic primitives around the standard [Web Crypto API](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto) and the [@noble libraries](https://www.npmjs.com/package/@noble/secp256k1), using components of Signal's X3DH protocol for secure offline communication.

Specifically, our algorithm choices include:

- EC Public/Private Keys (secp256k1)
- ECDSA signatures and signing of public keys (ECDSA and EIP-191)
- Shared secret derivation (ECDH/X3DH)
- Authenticated symmetric encryption (AEAD: AES-256-GCM)
- Symmetric key derivation (HKDF-SHA-256)
- X3DH-style key bundles ([X3DH Key Agreement Protocol](https://signal.org/docs/specifications/x3dh/))
