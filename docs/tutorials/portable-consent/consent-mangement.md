---
sidebar_label: Consent Management
sidebar_position: 10
---

# Consent Management with XMTP

This tutorial provides a comprehensive guide on constructing a consent management system with XMTP, empowering users to manage their preferences, safeguard their privacy, and uphold their rights.

<div class=" rabbit  p-5 ">

📥 <b>Need a quick reference?</b> Check out this GitHub repo: <a href="https://github.com/fabriguespe/xmtp-subscribe-portable-consent">xmtp-subscribe</a>

</div>

## Considerations

Before diving into the code let's consider important aspects while integrating consent features. For example, before making an allow or block action you should synchronize the updated consent list in order to **prevent overwriting network** consent from another app. For more details head to these sections of our docs:

- [Understand user consent preferences](https://xmtp.org/docs/build/user-consent#understand-user-consent-preferences): This section provides a comprehensive understanding of how user consent preferences are set, including but not limited to, direct actions within the app, settings adjustments, and responses to prompts.
- [Use consent preferences to respect user intent](https://xmtp.org/docs/build/user-consent#use-consent-preferences-to-respect-user-intent): Your app should aim to handle consent preferences appropriately because they are an expression of user intent.
- [Synchronize user consent preferences](https://xmtp.org/docs/build/user-consent#synchronize-user-consent-preferences):All apps that use the user consent feature must adhere to the logic described in this section to keep the consent list on the network synchronized with local app user consent preferences, and vice versa.

## Tutorial

---

Certainly! Below is a detailed tutorial with full code and comments for each section. This tutorial will guide you through creating a `ConsentManagement` component in React, which allows users to manage XMTP consent lists and download them as a CSV file.

### Tutorial: Consent Management with XMTP and Ethereum in React

---

### Import Libraries

Start by importing the necessary libraries. This includes React for the UI, XMTP for messaging, and ethers for Ethereum blockchain interaction.

```jsx
import React, { useState } from "react";
import { Client } from "@xmtp/xmtp-js"; // XMTP client for messaging
import { ethers } from "ethers"; // Ethers for Ethereum interaction
```

### Connect to the Wallet

This function handles the connection to the user's Ethereum wallet using MetaMask or a similar wallet provider.

```jsx
const connectWallet = async () => {
  if (typeof window.ethereum !== "undefined") {
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      return provider.getSigner();
    } catch (error) {
      console.error("User rejected request", error);
    }
  } else {
    console.error("Metamask not found");
  }
};
```

### Show Subscriptions Button (Get Consent List)

This function is triggered when the user wants to view their subscriptions. It connects to the wallet and fetches the consent list.

```jsx
const handleClick = async () => {
  try {
    setLoading(true);
    const wallet = await connectWallet();
    const client = await Client.create(wallet, { env: env });
    setClient(client);
    await refreshConsentList(client);
    setLoading(false);
  } catch (error) {
    if (typeof onError === "function") onError(error);
    console.error(error);
  }
};
```

### Table Rendering

Render the consent list in a table format, allowing users to see their current consents.

```jsx
// This would be part of the render function or a separate component
{
  consentList.map((consent, index) => (
    <div key={index}>
      <span>{consent.address}</span>
      <span>{consent.state}</span>
      // Add buttons or links for allow/deny actions
    </div>
  ));
}
```

### Handle Allowing and Denying Addresses

These functions manage the consent states by allowing or denying addresses.

```jsx
const handleAllow = async (address) => {
  if (client) {
    await client.contacts.allow([address]);
    await refreshConsentList(client);
  }
};

const handleDeny = async (address) => {
  if (client) {
    await client.contacts.deny([address]);
    await refreshConsentList(client);
  }
};
```

### Download the Consent List as a CSV File

This function generates and downloads the consent list as a CSV file.

```jsx
const downloadCSV = async () => {
  const csvRows = ["Address,State"];
  consentList.forEach((consent) => {
    csvRows.push(`${consent.address},${consent.state}`);
  });

  const blob = new Blob([csvRows.join("\n")], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "consent_list.csv";
  link.click();
};
```

### Render the Component

Finally, combine all the parts to render the `ConsentManagement` component.

```jsx
export function ConsentManagement({ env, onError }) {
  // State and other functions go here

  return (
    <div>
      <button onClick={handleClick}>Show Subscriptions</button>
      // Render the consent list table // Render Allow/Deny buttons
      <button onClick={downloadCSV}>Download CSV</button>
    </div>
  );
}
```

:::caution Caution

**Always synchronize consent states:** Before updating consent preferences on the network, ensure you refresh the consent list with `refreshConsentList`. Update the network's consent list only in these scenarios:

- **User Denies Contact:** Set to `denied` if a user blocks or unsubscribes.
- **User Allows Contact:** Set to `allowed` if a user subscribes or enables notifications.
- **Legacy Preferences:** Align the network with any existing local preferences.
- **User Response:** Set to `allowed` if the user has engaged in conversation.

Neglecting these guidelines can result in consent state conflicts and compromise user privacy.

:::

## Conclusion

Consent has really evolved through the years. It started with email, then email marketing, and was the wild west until laws like GPDR stepped in. This is new chapter in the history of consent in a new era for privacy, portability, and ownership.

### Example repo

You can find a complete example of this tutorial in the [xmtp-subscribe-portable-consent](https://github.com/fabriguespe/xmtp-subscribe-portable-consent) repo.
