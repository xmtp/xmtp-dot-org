# **UBroadcast Widget**

<img src="UBroadcast.png"/>

The UBroadcast widget is a React component designed to provide a user interface for sending broadcast messages to multiple Ethereum wallet addresses. It offers functionalities to send messages, validate Ethereum addresses, and send messages through an array of wallets.

## **Usage**

The **`UBroadcast`** widget enables the user to broadcast messages to specified Ethereum addresses.

**Properties:**

- **`theme`**: Accepts values "default", "dark", or "light".
- **`size`**: Accepts values "small", "medium", or "large".
- **`placeholderMessage`**: (Optional)A string for placeholder text in the message input (e.g., "Enter your marketing message here").
- **`walletAddresses`**: (Optional)Wallet addresses that you want to send a broascast message.
- **`wallet`**: (Optional) Sends the current signer of the wallet.
- **`env`**: XMTP developer environment. Read more [here](https://xmtp.org/docs/build/authentication#environments)

- **Example Usage:**

```jsx
<UBroadcast
  theme="dark"
  size="medium"
  wallet={signer}
  walletAddresses={array}
  placeholderMessage="Enter a broadcast message here"
  env={"production"}
/>
```

### **Open UBroadcast**

Use the following command to open the UBroadcast:

```jsx
window.ubroadcast.open();
```

### **Close UBroadcast**

Use the following command to close the UBroadcast:

```jsx
window.ubroadcast.close();
```
