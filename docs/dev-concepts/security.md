---
sidebar_label: Authentication and encryption
sidebar_position: 5
---

# Participant authentication and message encryption with XMTP

The XMTP SDK enables client apps to establish secure, unfalsifiable relationships between XMTP identities in which only the sender and recipient can decrypt messages sent between them. The protocol design also accommodates asynchronous offline communication and secure storage of messages.

These relationships between XMTP identities are established using a set of keys. When a user connects their blockchain account to their client app, their wallet app signs with the account's public and private key. This enables the XMTP SDK to generate the following keys:

- `IdentityPrivateKey`
- `IdentityPublicKey`
- `PreKeys`

You can think of the `IdentityPrivateKey` and `IdentityPublicKey` as proxies for a user's blockchain account keys.

Because XMTP cannot access the actual blockchain account keys, XMTP generates `IdentityPrivateKey` and `IdentityPublicKey` and asks the user to vouch for them by signing them with their blockchain account keys.

Anyone can verify the user's signature and consider it as an attestation that the `IdentityPrivateKey` and `IdentityPublicKey` are the user's true proxy keys since only the user's keys could have created the signature.

To learn more about signatures, see [Signatures](signatures).

The client app publishes the user's `IdentityPublicKey` and `PreKeys` to the XMTP network in a `PublicKeyBundle`. The `PublicKeyBundle` contains all of the information needed for someone to contact the user.

The `IdentityPrivateKey` (and a copy of the other keys, for good measure) are encrypted and stored locally by the client app or on the XMTP network. Only client apps authorized by the user can access these encrypted keys. By design, XMTP and the XMTP network cannot access these encrypted keys.

To learn more, see [Message encryption and decryption](architectural-overview#message-encryption-and-decryption).

## Algorithms in use

XMTP supports the replacement and expansion of supported algorithms in a backward-compatible manner.

Supported algorithms are selected based on fairly pragmatic criteria. For example, the algorithm must be:

- Tried and true and in widespread use
- Well-supported in desirable XMTP client app languages, such as JavaScript
- Available in standard browser APIs, rather than via third-party dependencies

XMTP also aims to reuse existing algorithms, looking to well-known and standard algorithms with trustworthy implementations.

As such, XMTP's cryptographic primitives are built around the standard [Web Crypto API](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto) and the [@noble libraries](https://www.npmjs.com/package/@noble/secp256k1), using components of Signal's X3DH protocol for secure offline communication.

Specifically, XMTP's participant authentication and message encryption algorithm choices include:

- EC Public/Private Keys (secp256k1)
- ECDSA signatures and signing of public keys (ECDSA and EIP-191)
- Shared secret derivation (ECDH/X3DH)
- Authenticated symmetric encryption (AEAD: AES-256-GCM)
- Symmetric key derivation (HKDF-SHA-256)
- X3DH-style key bundles ([X3DH Key Agreement Protocol](https://signal.org/docs/specifications/x3dh/))
