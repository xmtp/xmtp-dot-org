# **USubscribe Widget**

<img src="USubscribe.png"/>

The USubscribe widget is a React component that allows users to subscribe using various XMTP options. It's customizable, supporting different themes and sizes, and returns the wallet address upon successful subscription.

## **Installation**

Include the USubscribe component in your project by importing it:

```jsx
import { USubscribe } from "./UWidgets/USubscribe"; // Update the path based on your folder structure
```

## **Usage**

Here's a simple example of how to use the USubscribe component:

```jsx
<USubscribe
  theme="default"
  size="medium"
  wallet={signer}
  checkSubscriptionStatus={(address) => checkSubscriptionStatus(address)}
  onSubscribe={(address) => console.log("New subscriber: " + address)}
  onUnsubscribe={(address) => console.log("Unsubscribed: " + address)}
  onError={(address) => console.log("Error subscribing: " + address)}
/>
```

## **Props**

- `theme`: (Optional) Set the theme. Available options: 'default', 'dark', 'light'. Default is 'default'.
- `size`: (Optional) Set the button size. Available options: 'small', 'medium', 'large'. Default is 'medium'.
- `wallet`: (Required) An instance of ethers.js signer.
- `checkSubscriptionStatus`: (Required) A function that checks the subscription status of a given address.
- `onSubscribe`: (Required) A callback function that is called when a new subscription is made.
- `onUnsubscribe`: (Required) A callback function that is called when a subscription is cancelled.
- `onError`: (Required) A callback function that is called when an error occurs during subscription or unsubscription.
- **`env`**: XMTP developer environment. Read more [here](https://xmtp.org/docs/build/authentication#environments)

## **Themes and Sizes**

You can customize the appearance of the USubscribe by setting the theme and size props:

```jsx
<USubscribe theme="dark" size="large" env={"production"} />
```

## **Error Handling**

You can customize the appearance of the USubscribe by setting the theme and size props:

```jsx
<USubscribe onError={(error) => console.log("Error subscribing: " + error)} />
```

## **Labels**

This section explains what the `labels` prop is, what its structure should be, and how to use it. It also provides an example of how to override the default labels.

- `labels`: (Optional) An object that contains the labels for different states of the component. The object should have the following structure:

```jsx
labels = {
  loading: "Loading...",
  subscribed: "Subscribed",
  unsubscribed: "Unsubscribed",
  default: "Subscribe with your wallet",
};
```
