---
sidebar_position: 2
---

# 📚 XMTP-JS

The `xmtp-js` library is written in Typescript for use with Javascript applications. It will be available as an `npm` package or can be downloaded directly from its GitHub repository.

:::info

The roadmap for future language support and functionality will be developed in collaboration with the community.

:::

## Functionality includes

| Function | Description |
| --- | --- |
| Wallet-based authentication  | Connecting to a user's wallet in order to get the wallet address, to sign keys used for message signing and encryption, and to authenticate incoming messages |
| Wallet connection management | Managing changes in wallet addresses or chain ids; managing connection issues |
| Key pair generation | Creating keys used for message signing and encryption, and advertising them to the network |
| Key storage | Storing keys securely |
| Key signing | Signing keys with a connected wallet |
| Relationship initiation | Creating a secure messaging relationship between two wallets |
| Conversation initiation | Creating a container of messages between two wallets |
| Message sending | Capturing plaintext and submitting it to the network |
| Message history retrieval | Retrieving the history of messages between two wallets |
| Message history filtering | Filtering message history by date or by address |
| Message streaming | Receiving new messages in real-time |
| Message content validation | Middleware for ensuring security of messages |
| Message format validation | Middleware for ensuring messages are properly formatted for the network |

[Signal's X3DH protocol](https://signal.org/docs/specifications/x3dh) is used for key agreement between the sender and the receiver. IdentityKeys serve as proxies for wallet identity. The public IdentityKeys are signed by the wallets to prove their authenticity. Public keys in their uncompressed format are signed using Keccak/SHA3 and ECDSA.

The shared secret produced by X3DH is processed through [HKDF](http://www.ietf.org/rfc/rfc5869.txt) with SHA256 to derive the symmetric encryption key. The messages are encrypted with AES-256-GCM to provide confidentiality and message authentication.
