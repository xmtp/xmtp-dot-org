---
slug: unstoppableweb
hide_table_of_contents: true
title: "XMTP apps can reach Unstoppable Domains"
date: 2023-06-15
authors: fabri
image: "/img/uc-uns.png"
description: "XMTP Apps Can Reach Unstoppable Domains"
---

![thirdweb.jpg](/img/uc-uns.png)

:::danger GIVEAWAY ALERT
The first 100 people who message 'xmtp-discount.x' on @converseapp will get 20% off their Unstoppable Domain 😎 We'll also give one lucky winner a $500 USDC prize on Friday! Stay tuned on Converse for updates.

[**Download Converse Here**](https://getconverse.app/)
:::

—

Our goal at XMTP is to enable apps to message any identity. Support already exists for ENS and Lens: just by inputting someone’s web3 username, the inbox will find the wallet address it’s connected to and connect you to that person.

Today we’re excited to be adding support for Unstoppable Domains as well, thereby growing the XMTP network by more than two million new IDs. Owning our conversations is directly tied to owning our digital identities, and our partnership with Unstoppable Domains enables just that.

<!--truncate-->

Creating seamless user experiences in decentralized applications (dApps) is vital for the growth and widespread adoption of Web3. [Unstoppable Domains](https://unstoppabledomains.com/) is one such solution that greatly improves the user experience by offering blockchain-based domains. These domains simplify cryptocurrency transactions, enable easy user logins for dApps, games, and metaverses, and even offer a way to create and host censorship-resistant websites.

Best of all, once an Unstoppable Domain is minted on the blockchain, it belongs to the user forever without any renewal fees.Today, we'll walk you through the process of adding Unstoppable Domain support to your XMTP app.

## Prerequisites

This tutorial requires that you have the following prerequisites in place:

- An XMTP empowered app built with the [XMTP client SDK for JavaScript](https://github.com/xmtp/xmtp-js)
- Add the Unstoppable Domains SDK

```bash
npm i  @unstoppabledomains/resolution
```

Instantiate the library using your own RPC, such as Infura. Create a `resolution` variable that we are going to use many times across the app.

```jsx
// Importing the Resolution library from @unstoppabledomains/resolution
// This library allows you to interact with blockchain domains
import Resolution from "@unstoppabledomains/resolution";

// Create a new instance of the Resolution class
// It is configured to work with two Ethereum networks: Mainnet and Polygon Mainnet.
// The URLs for connecting to these networks are provided by Infura and are secured using the infuraKey.
const resolution = new Resolution({
  sourceConfig: {
    uns: {
      locations: {
        Layer1: {
          url: `https://mainnet.infura.io/v3/${infuraKey}`,
          network: "mainnet",
        },
        Layer2: {
          url: `https://polygon-mainnet.infura.io/v3/${infuraKey}`,
          network: "polygon-mainnet",
        },
      },
    },
  },
});
```

## Resolve user inputs

When building with XMTP, you need to provide a way to initiate a conversation between the sender and the recipient's wallet addresses. As suggested above, include an "Enter a Wallet Address" field. It's important to validate user input to check if it's a valid Unstoppable Domain. If it is, you can resolve it.

To check if the input is a Valid Unstoppable Domain, we can use the `.isSupportedDomain` function within the library.

```jsx
const valid = await resolution.isSupportedDomain(name);
```

If an async call is not possible in the current implementation, hardcoded values can be used but must be kept updated. Using the supported Unstoppable Domains at the time of writing, an example could look like this:

```jsx
// This is a list of allowed Unstoppable Domains (UNS) domain suffixes.
// A domain is only considered valid if it ends with one of these suffixes.
export const ALLOWED_UNS_SUFFIXES = [
  ".crypto",
  ".bitcoin",
  ".blockchain",
  ".dao",
  ".nft",
  ".888",
  ".wallet",
  ".x",
  ".klever",
  ".zil",
  ".hi",
  ".kresus",
  ".polygon",
  ".anime",
  ".manga",
  ".binanceus",
];

// Function to check if a given address is a valid Unstoppable Domain (UNS) address.
// A valid UNS address must contain a dot and must end with one of the allowed suffixes.
export const isUnsAddress = (address: string): boolean => {
  // If the address is an empty string or does not contain any dots, return false immediately.
  if (!address || !address.includes(".")) {
    return false;
  }
  // Check if the address ends with any of the allowed suffixes.
  // If it does, return true; otherwise, return false.
  return ALLOWED_UNS_SUFFIXes.some((suffix) => address.endsWith(suffix));
};
```

If the input is valid, we can resolve the name for the associated ETH address using the example `fetchUnsAddress` function below.

```jsx
const domain = await resolution.addr(name, "ETH");
//If there is no address associated with the domain or the domain is not valid, the above functions will return null or false respectively.
```

![CleanShot 2023-06-04 at 19.29.24@2x.png](./media/uns-img1.png)

### Reverse resolve wallet addresses

To complete the Unstoppable Domains integration, it’s important to convert the wallet addresses on the page into their respective domains. Using the [XMTP.chat](https://xmtp.chat/inbox) inbox as an example, we’ll want to reverse resolve the connected wallet address as well as the message previews.

![CleanShot 2023-06-04 at 19.30.56@2x.png](./media/uns-img2.png)

To do this, we’ll want to implement a function similar to the one below which will attempt to resolve the wallet address to a domain. Display the wallet address if the function returns null, otherwise display the domain.

```jsx
const domain = await resolution.reverse(address);
```

To achieve this for the message previews, we can iterate through the existing list of conversations and resolve each one individually.

### Performance

An optional step to limit calls to your RPC is to cache the above results into local storage. To do this, we’ll want to implement a function similar to the below hook, which will both set and get a storage item based on their respective key. On error, it will fallback to the default value we set during the function call.

Here is an example of tying everything together for a **react app** message preview:

```jsx
// Importing hooks from React
import { useEffect, useState } from "react";

// This is a custom React hook that wraps around LocalStorage functionalities
// It allows you to store, retrieve and manipulate a piece of data in LocalStorage
// in a react way (i.e., using state and effects)
export const useLocalStorage = (
  key: string | undefined, // The key of the item to be saved in the LocalStorage
  defaultValue: string | null, // The default value to be used when the value of the given key is not found
) => {
  // Initializing the state with the value from LocalStorage or the default value
  const [value, setValue] = useState(() => {
    let currentValue;

    try {
      // Trying to parse the JSON value of the item in the LocalStorage
      currentValue = JSON.parse(
        localStorage.getItem(key || "") || String(defaultValue),
      );
    } catch (error) {
      // If an error occurred (probably due to invalid JSON), the default value is used
      currentValue = defaultValue;
    }

    return currentValue;
  });

  // This useEffect hook saves the current value to LocalStorage every time it changes
  useEffect(() => {
    localStorage.setItem(key || "", JSON.stringify(value));
  }, [value, key]);

  // The state and the setter function are returned so they can be used by the caller
  return [value, setValue];
};

// Using the custom hook to manage the username preview
// The key is the peer address and the default value is an empty string
const [previewUnsName, setPreviewUnsName] = useLocalStorage(
  convo?.peerAddress,
  "",
);

// This effect hook checks whether the peer address is valid and the username preview is empty
// If both conditions are met, it fetches the username from the UNS and sets it
useEffect(() => {
  const getUns = async () => {
    if (isValidWalletAddress(convo?.peerAddress) && previewUnsName === "") {
      const name = await fetchUnsName(convo?.peerAddress);
      // If a name was fetched successfully, it is used; otherwise, null is set
      name ? setPreviewUnsName(name) : setPreviewUnsName(null);
    }
  };

  // The function is called immediately
  getUns();
}, [convo?.peerAddress]); // This effect runs every time the peer address changes
```

**Learn more**

To learn more about building with Unstoppable Domains, see the [Developer Portal](https://docs.unstoppabledomains.com/) on the Unstoppable Domains website.

### Join us on Discord

We're excited to be partnering with Unstoppable Domains to bring you better solutions for serving and reaching your end users. [Stay tuned](https://discord.com/invite/xmtp) for more guides coming soon!
