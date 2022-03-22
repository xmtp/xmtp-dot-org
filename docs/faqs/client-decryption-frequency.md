# Do XMTP clients need to decrypt messages with blockchain-specific private keys each time?

When clients start, the user must sign with their blockchain-specific private key to decrypt their XMTP key bundle, which is then used for message decryption. A one-time signature is also required to create that key bundle.
