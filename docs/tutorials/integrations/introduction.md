---
sidebar_label: Introduction
sidebar_position: 1
---

import {Button} from "@site/src/components/Widgets/Button";
import {Broadcast} from "@site/src/components/Widgets/Broadcast";
import {Connect} from "@site/src/components/Widgets/Connect";
import {ProfileCard} from "@site/src/components/Widgets/ProfileCard";
import {ContactPage} from "@site/src/components/Widgets/ContactPage";
import {Inbox} from "@site/src/components/Widgets/Inbox";
import {Subscribe} from "@site/src/components/Widgets/Subscribe";

# Integration Tutorials

Here is a collection of React components that can be used to create interactive user interfaces. The following tutorials are available:

- [**Buttons**](#buttons): This tutorial shows how to display XMTP's ecosystem apps deeplink buttons in a dropdown with different themes and sizes. Fully customizable.

- [**Profile Card**](#profile-card): This tutorial showcases how to create a profile card with an image, name, description, and a call-to-action button to contact the person or company through xmtp.

- [**Subscribe Button**](#subscribe-button): This tutorial allows users to learn how to create a subscription button for a Dapp through XMTP. Has callbacks for managing subscribers lists.

- [**Broadcast**](#broadcast): This tutorial enables the user to learn how to broadcast messages to 1 or many specified Ethereum addresses.

- [**Floating Inbox**](#floating-inbox): This tutorial is a guide to create a floating messaging component designed to allow for integrating web3 messaging in any website.

- [**Contact Page**](#contact-page): This tutorial is a guide to create a React component that displays a page based on its ENS or domain and shows different buttons for contacting through XMTP.

---

## Buttons

This tutorial allows users to learn how to display XMTP's ecosystem apps deeplink buttons with different themes and sizes.

<div className="widget-container">
<Button
domain="shanemac.eth"
walletAddress="0x7E0b0363404751346930AF92C80D1fef932Cc48a"
theme="light"
size="medium"
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
<Button
  domain="fabri.eth"
  walletAddress="0xUserWalletAddress"
  theme="dark"
  size="medium"
/>
```

### Tutorial

- [Go to Tutorial](/docs/tutorials/integrations/button)

## Profile Card

This tutorial showcases how to create a profile with an image, name, description, and a call-to-action button to contact the person or company through xmtp.

<div className="widget-container">
<ProfileCard
  domain="shanemac.eth"
  walletAddress="0x7E0b0363404751346930AF92C80D1fef932Cc48a"
  description="Hi, I'm Shane, Co-Founder of XMTP."
  image="https://pbs.twimg.com/profile_images/1561559544148500480/lBJtF9DK_400x400.jpg"
  theme="default"
  size="medium"
/>
</div>

### Props

- `domain`: (Required) Your Domain name.
- `walletAddress`: (Required) Your wallet address.
- `image`: (Required) URL or path to the image of the person or company.
- `description`: (Required) A short description.
- `theme`: Accepts values "default", "dark", or "light".
- `size`: Accepts values "small", "medium", or "large".
- `defaultApp`: (Optional) Name of the messaging app for contact.
- `deepLinkApps`: (Optional) An object containing information about different messaging apps.

### Usage

```jsx
<ProfileCard
  domain="shanemac.eth"
  walletAddress="0x7E0b0363404751346930AF92C80D1fef932Cc48a"
  description="Hi, I'm Shane, Co-Founder of XMTP."
  image="https://pbs.twimg.com/profile_images/1561559544148500480/lBJtF9DK_400x400.jpg"
  theme="default"
  size="medium"
/>
```

### Tutorial

- [Go to Tutorial](/docs/tutorials/integrations/profilecard)

## Subscribe Button

This tutorial allows users to learn how to create a subscription button for a Dapp through XMTP. Has callbacks for managing subscribers lists.

<div className="widget-container">
<Subscribe
  theme="default"
  size="medium"
  onSubscribe={(address) => console.log("New subscriber: " + address)}
  onUnsubscribe={(address) => console.log("Unsubscribed: " + address)}
  onError={(address) => console.log("Error subscribing: " + address)}
  env="production"
/>
</div>

### Props

- `theme`: (Optional) Set the theme. Available options: 'default', 'dark', 'light'. Default is 'default'.
- `size`: (Optional) Set the button size. Available options: 'small', 'medium', 'large'. Default is 'medium'.
- `wallet`: (Optional) An instance of ethers.js signer.
- `checkSubscriptionStatus`: (Required) A function that checks the subscription status of a given address.
- `onSubscribe`: (Required) A callback function that is called when a new subscription is made.
- `onUnsubscribe`: (Required) A callback function that is called when a subscription is cancelled.
- `onError`: (Required) A callback function that is called when an error occurs during subscription or unsubscription.
- `env`: XMTP developer environment. Read more [here](https://xmtp.org/docs/build/authentication#environments)

### Usage

```jsx
<Subscribe
  theme="default"
  size="medium"
  onSubscribe={(address) => console.log("New subscriber: " + address)}
  onUnsubscribe={(address) => console.log("Unsubscribed: " + address)}
  checkSubscriptionStatus={(address) => {
    return checkSubscriptionStatus(address);
  }}
  onError={(address) => console.log("Error subscribing: " + address)}
  env="production"
/>
```

### Tutorial

- [Go to Tutorial](/docs/tutorials/integrations/subscribe)

## Broadcast

This tutorial enables the user to learn how to broadcast messages to 1 or many specified Ethereum addresses.

<div className="widget-container">
 <Broadcast
  env="production"
  walletAddresses={[
      "0x93E2fc3e99dFb1238eB9e0eF2580EFC5809C7204",
      "0xa64af7F78DE39A238Ecd4ffF7D6D410DBACe2dF0",
  ]}
  placeholderMessage="Enter a broadcast message here"
  onMessageSuccess={(message) => console.log("Message sent"+message.content)}
/>
</div>

### Props

- `theme`: Accepts values "default", "dark", or "light".
- `size`: Accepts values "small", "medium", or "large".
- `placeholderMessage`: (Optional)A string for placeholder text in the message input (e.g., "Enter your marketing message here").
- `walletAddresses`: (Optional)Wallet addresses to which you want to send a broascast message.
- `wallet`: (Optional) Sends the current signer of the wallet.
- `env`: XMTP developer environment. Read more [here](https://xmtp.org/docs/build/authentication#environments)
- `onMessageSuccess`: (Optional) Callback to run after sending a succesfull message.

## Usage

```jsx
<Broadcast
  theme="dark"
  size="medium"
  wallet={signer}
  walletAddresses={[
    "0x93E2fc3e99dFb1238eB9e0eF2580EFC5809C7204",
    "0xa64af7F78DE39A238Ecd4ffF7D6D410DBACe2dF0",
  ]}
  placeholderMessage="Enter a broadcast message here"
  env="production"
  onMessageSuccess={(message) => console.log("Message sent" + message.content)}
/>
```

### Tutorial

- [Go to Tutorial](/docs/tutorials/integrations/broadcast)

## Floating Inbox

This tutorial is a guide to create a floating messaging component designed to allow for integrating web3 messaging in any website.

<div className="widget-container">
<Inbox env="production"  />
</div>

### Props

- `wallet`: (Optional) An instance of ethers.js signer.
- `env`: XMTP developer environment. Read more [here](https://xmtp.org/docs/build/authentication#environments)

### Usage

```jsx
<Inbox env="production" />
```

### Tutorial

- [Go to Tutorial](/docs/tutorials/integrations/inbox)

## Contact Page

The tutorial is a guide to create a React component that displays a page based on its ENS or domain and shows different buttons for contacting through XMTP.

<div className="widget-container link">
<ContactPage
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
<ContactPage
  domain="shanemac.eth"
  walletAddress="0x7E0b0363404751346930AF92C80D1fef932Cc48a"
  theme="light"
  deepLinkApps={deepLinkApps}
  size="medium"
/>
```

### Tutorial

- [Go to Tutorial](/docs/tutorials/integrations/contactpage)

---

#### Wallet Signer

Please note that all widgets in this library that require a wallet signer only accept an instance of the `ethers.js` signer. Other types of signers are not supported at this time.

The signer is optional. If the signer is not detected, the widgets have a built-in mechanism to establish a connection.

For example, when using the `Subscribe` or `Inbox` widgets, you should provide an `ethers.js` signer instance like so:

```jsx
<Subscribe
  // Other props
  wallet={signer}
/>
```

```jsx
<Inbox
  // Other props
  wallet={signer}
/>
```

Ensure that you have properly initialized the `ethers.js` signer instance before passing it to the widget.
