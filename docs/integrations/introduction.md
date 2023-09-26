---
sidebar_label: Introduction
sidebar_position: 1
---

import {UButton} from "@site/src/components/UWidgets/UButton";
import {UBroadcast} from "@site/src/components/UWidgets/UBroadcast";
import {UConnect} from "@site/src/components/UWidgets/UConnect";
import {UProfileCard} from "@site/src/components/UWidgets/UProfileCard";
import {ULink} from "@site/src/components/UWidgets/ULink";
import {UInbox} from "@site/src/components/UWidgets/UInbox";
import {USubscribe} from "@site/src/components/UWidgets/USubscribe";

# XMTP Integrations

UWidgets are a collection of React components that can be used to create interactive user interfaces. `U` stands for `Universal`. The following widgets are available:

## UConnect

The `UConnect` widget serves as a contact button, typically positioned in the header or footer of business websites for optimal visibility and accessibility.

<div className="widget-container">
 <UConnect
  domain="shanemac.eth"
  walletAddress="0x2c8f98078253Aa7FE0097DF64867A1EacDd6b26B"
  defaultApp="xmtp"
  theme={"light"}
  size={"default"}
/>
</div>

### Props

- `domain`: Domain name associated with the user (e.g., "xmtp.eth").
- `walletAddress`: Wallet address of the user.
- `defaultApp`: Messaging application name
- `theme`: Accepts values "default", "dark", or "light".
- `showText`: A boolean value determining whether to display the text.
- `defaultApp`: (Optional) Name of the messaging app for contact.
- `deepLinkApps`: (Optional) An object containing information about different messaging apps.

### Usage

```jsx
<UConnect
  domain="xmtp.eth"
  walletAddress="0xUserWalletAddress"
  theme="light"
  showText={true}
/>
```

## UButton

The `UButton` widget allows users to display buttons with different themes and sizes with links to apps of the ecosystem. You can use it as follows:

<div className="widget-container">
<UButton
domain="shanemac.eth"
walletAddress="0x7E0b0363404751346930AF92C80D1fef932Cc48a"
theme={"light"}
size={"medium"}
/></div>

### Props

- `domain`: Domain name associated with the user (e.g., "fabri.eth").
- `walletAddress`: Wallet address of the user (e.g., "0xUserWalletAddress").
- `theme`: Accepts values "default", "dark", or "light".
- `size`: Accepts values "small", "medium", or "large".
- `defaultApp`: (Optional) Name of the messaging app for contact.
- `deepLinkApps`: (Optional) An object containing information about different messaging apps.

### Usage

```jsx
<UButton
  domain="fabri.eth"
  walletAddress="0xUserWalletAddress"
  theme="dark"
  size="medium"
/>
```

## UProfileCard

The `UProfileCard` widget showcases a profile with an image, name, description, and a call-to-action button to contact the person or company through xmtp.

<div className="widget-container">
<UProfileCard
  image="https://pbs.twimg.com/profile_images/1561559544148500480/lBJtF9DK_400x400.jpg"
  description="Hi, I'm Shane, Co-Founder of XMTP."
  domain="shanemac.eth"
  theme="default"
  size="medium"
/>
</div>

### Props

- `domain`: (Required) Your Domain name.
- `walletAddress`: (Required) Your wallet address.
- `image`: (Required) URL or path to the image of the person or company.
- `name`: (Required) Name of the person or company.
- `description`: (Required) A short description.
- `defaultApp`: (Optional) Name of the messaging app for contact.
- `deepLinkApps`: (Optional) An object containing information about different messaging apps.

### Usage

```jsx
<UProfileCard
  image="https://pbs.twimg.com/profile_images/1561559544148500480/lBJtF9DK_400x400.jpg"
  description="Hi, I'm Shane, Co-Founder of XMTP."
  domain="shanemac.eth"
  theme="default"
  size="medium"
/>
```

## USubscribe

The `USubscribe` widget is allows users to subscribe to the Dapp through XMTP. Has callbacks for managing subscriers lists.

<div className="widget-container">
<USubscribe
  theme="default"
  size="medium"
  onSubscribe={(address) => console.log("New subscriber: " + address)}
  onUnsubscribe={(address) => console.log("Unsubscribed: " + address)}
  onError={(address) => console.log("Error subscribing: " + address)}
  env={"production"}
/>
</div>

### Props

- `theme`: (Optional) Set the theme. Available options: 'default', 'dark', 'light'. Default is 'default'.
- `size`: (Optional) Set the button size. Available options: 'small', 'medium', 'large'. Default is 'medium'.
- `wallet`: (Required) An instance of ethers.js signer.
- `checkSubscriptionStatus`: (Required) A function that checks the subscription status of a given address.
- `onSubscribe`: (Required) A callback function that is called when a new subscription is made.
- `onUnsubscribe`: (Required) A callback function that is called when a subscription is cancelled.
- `onError`: (Required) A callback function that is called when an error occurs during subscription or unsubscription.
- `env`: XMTP developer environment. Read more [here](https://xmtp.org/docs/build/authentication#environments)

### Usage

```jsx
<USubscribe
  theme="default"
  size="medium"
  onSubscribe={(address) => console.log("New subscriber: " + address)}
  onUnsubscribe={(address) => console.log("Unsubscribed: " + address)}
  onError={(address) => console.log("Error subscribing: " + address)}
  env={"production"}
/>
```

## UBroadcast

The `UBroadcast` widget enables the user to broadcast messages to 1 or many specified Ethereum addresses.

<div className="widget-container">
<UBroadcast
  theme="dark"
  size="medium"
  walletAddresses={["0x93E2fc3e99dFb1238eB9e0eF2580EFC5809C7204","0x2c8f98078253Aa7FE0097DF64867A1EacDd6b26B"]}
  placeholderMessage="Enter a broadcast message here"
  env={"production"}
/>
</div>

### Props

- `theme`: Accepts values "default", "dark", or "light".
- `size`: Accepts values "small", "medium", or "large".
- `placeholderMessage`: A string for placeholder text in the message input (e.g., "Enter your marketing message here").
- `walletAddresses`: Wallet addresses that you want to send a broascast message.
- `env`: XMTP developer environment. Read more [here](https://xmtp.org/docs/build/authentication#environments)

### Usage

```jsx
<UBroadcast
  theme="dark"
  size="medium"
  walletAddresses={array}
  placeholderMessage="Enter a broadcast message here"
  env={"production"}
/>
```

## UInbox

The `UInbox` widget is a floating messaging component designed to allow for integrating web3 messaging in any website.

<div className="widget-container">
<UInbox env={"production"} relative="true" />
</div>

### Props

- `wallet`: (Required) An instance of ethers.js signer.
- `env`: XMTP developer environment. Read more [here](https://xmtp.org/docs/build/authentication#environments)

### Usage

```jsx
<UInbox wallet={signer} env={"production"} />
```

# Link Landing

The `Ulink` widget is a React component that displays a page based on its ENS or domain and shows different buttons for contacting through XMTP.

<div className="widget-container ulink">
<ULink
      domain="shanemac.eth"
      walletAddress="0x7E0b0363404751346930AF92C80D1fef932Cc48a"
    />
</div>

### Props

- `domain`: (Required) The ENS domain name of the person or company.
- `walletAddress`: (Required) The wallet address associated with the domain.
- `deepLinkApps`: (Optional) An object specifying the messaging apps supported. Default values are provided.
- `theme`: (Optional) The appearance theme ("light" or "dark"). Defaults to "default".
- `size`: (Optional) Size of the component ("small", "medium", "large"). Defaults to "medium".

### Usage

```jsx
<ULink
  domain="shanemac.eth"
  walletAddress="0x7E0b0363404751346930AF92C80D1fef932Cc48a"
  theme={"light"}
  deepLinkApps={deepLinkApps}
  size={"medium"}
/>
```

---

#### Deep Link Apps

In the `src/deepLinkApps.js` file, we have a `deepLinkApps` object that contains information about different messaging apps. This object is structured as follows:

```jsx
//Alphabetical order
export const deepLinkApps = {
  xmtp: {
    url: `https://xmtp.chat/dm/{walletAddress}`,
    icon: "https://xmtp.chat/favicon.ico",
    device: ["Desktop"],
    name: "xmtp",
  },
  CustomApp: {
    url: `https://xmtp.chat/dm/{walletAddress}`,
    icon: "https://xmtp.chat/favicon.ico",
    device: ["All"],
    name: "Custom App",
  },
};
```

**Props**

- `url`: The URL for direct messaging in the app. The `{walletAddress}` placeholder will be replaced with the actual wallet address.
- `name`: The descriptive name of the app.
- `icon`: The URL of the app's favicon.
- `device`: An array of operating systems where the app is available. "All" means the app is available on all operating systems.

**Usage**

This custom configuration works with `UButton`, `UConnect` and `UProfileCard`. All widgets that have deeplinking use case.

```jsx
<UButton
 /*Other props*/
defaultApp = "CustomApp";
deepLinkApps = { deepLinkApps };
/>
```

This way, contributors can easily add new apps by modifying the `deepLinkApps.js` file through PR's.

#### Wallet Signer

Please note that all widgets in this library that require a wallet signer only accept an instance of the `ethers.js` signer. Other types of signers are not supported at this time.

The signer is optional. If the signer is not detected, the widgets have a built-in mechanism to establish a connection.

For example, when using the `USubscribe` or `UInbox` widgets, you should provide an `ethers.js` signer instance like so:

```jsx
<USubscribe
  // Other props
  wallet={signer}
/>
```

```jsx
<UInbox
  // Other props
  wallet={signer}
/>
```

Ensure that you have properly initialized the `ethers.js` signer instance before passing it to the widget.
