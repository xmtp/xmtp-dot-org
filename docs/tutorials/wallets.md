---
sidebar_label: Wallet connectors
sidebar_position: 6
---

# Wallet connectors with XMTP

In this tutorial, we will explore how to integrate different wallets into XMTP, allowing users to securely interact with the XMTP ecosystem. We will cover the integration process using various wallet connectors, including Dynamic, ThirdWeb, and Rainbow. By following this tutorial, you will be able to offer a seamless and user-friendly wallet integration experience within your XMTP applications.

### Ethers

#### Random wallet

```jsx
//Import librarie
const { Wallet } = require("ethers");
const wallet = Wallet.createRandom();

console.log("Wallet address: " + wallet.address);
//eg. Wallet address 0xd8dA6BF26964aF9D7eEd9e03E53415D37
const xmtp = await Client.create(wallet, { env: "dev" });
```

#### From private key

```jsx
//Import librarie
const ethers = require("ethers");
const wallet = new ethers.Wallet(privateKey);
console.log("Wallet address: " + wallet.address);
//eg. Wallet address 0xd8dA6BF26964aF9D7eEd9e03E53415D37
const xmtp = await Client.create(wallet, { env: "dev" });
```

### Thirdweb

Install the necessary dependencies for using XMTP and Thirdweb:

```bash
npm install @thirdweb-dev/react @thirdweb-dev/sdk
```

Begin by wrapping the app with `ThirdwebProvider`, then use the `ConnectWallet` component to establish wallet connectivity.

```tsx
<ThirdwebProvider activeChain="goerli">
  <Home />
</ThirdwebProvider>
```

```tsx
//Just one line of code to connect to wallet
<ConnectWallet theme="light" />
```

```tsx
//After logging in, we can use thirweb hooks to see the wallet
const address = useAddress();
const signer = useSigner();
```

That’s it! Next, proceed with signing in to XMTP. Create a new XMTP instance and register the content types your chat app will utilize.

```tsx
// Create the XMTP client
const xmtp = await Client.create(signer, { env: "dev" });
```
