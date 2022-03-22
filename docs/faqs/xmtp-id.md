# Will each blockchain wallet have a corresponding identity in XMTP?

Full context of the question:

> In the litepaper you mention “wallet-to-wallet messaging between users of blockchain networks (such as Ethereum, Bitcoin, Solana, and more)” : will I have one “XMTP id” per blockchain wallet?

Yes. Each blockchain wallet is represented by an identity key, which is part of a key bundle that can only be used by that wallet to authenticate messages.
