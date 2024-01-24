---
sidebar_label: Consent Management
sidebar_position: 10
---

# Consent Management with XMTP

This guide will walk you through the creation of a consent management system. This system will allow users to control their consent preferences for your messages or notifications. By leveraging XMTP, this tutorial offers tools to build a consent management system that respects user preferences and protects their privacy.

<div class=" rabbit  p-5 ">
📥 <b>Need a quick reference?</b> Check out this GitHub repo: <a href="https://github.com/fabriguespe/xmtp-ppp-consent-management">xmtp-subscribe</a>

</div>

## Considerations

Before diving into the code let's consider important aspects while integrating consent features. For example, before making an allow or block action you should synchronize the updated consent list in order to **prevent overwriting network** consent from another app. For more details head to these sections of our docs:

- [Understand user consent preferences](https://xmtp.org/docs/build/user-consent#understand-user-consent-preferences): This section provides a comprehensive understanding of how user consent preferences are set, including but not limited to, direct actions within the app, settings adjustments, and responses to prompts.
- [Use consent preferences to respect user intent](https://xmtp.org/docs/build/user-consent#use-consent-preferences-to-respect-user-intent): Your app should aim to handle consent preferences appropriately because they are an expression of user intent.
- [Synchronize user consent preferences](https://xmtp.org/docs/build/user-consent#synchronize-user-consent-preferences):All apps that use the user consent feature must adhere to the logic described in this section to keep the consent list on the network synchronized with local app user consent preferences, and vice versa.

## Tutorial

---

### Import Libraries

Start by importing the necessary libraries. This includes React for the UI, XMTP for messaging, and ethers for Ethereum blockchain interaction.

```jsx
import React, { useState } from "react";
import { Client } from "@xmtp/xmtp-js"; // XMTP client for messaging
import { ethers } from "ethers"; // Ethers for Ethereum interaction
```

### Connect the wallet

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

### Get consent List

This function is triggered when the user wants to view their subscriptions. It connects to the wallet and fetches the consent list. The consent list is a log with all consent actions, ordered by date. To get the list we need to filter unique actions by address.

```jsx
// Function to refresh the consent list
const refreshConsentList = async (client) => {
  // Fetch the consent list from the client
  let consentList = await client.contacts.refreshConsentList();

  // Create a unique consent list by removing duplicates
  let uniqueConsentList = consentList
    .slice() // Create a copy of the consent list
    .reverse() // Reverse the list to keep the latest consent
    .filter(
      // Filter out duplicates by checking if the current index is the first occurrence of the consent value
      (consent, index, self) =>
        index === self.findIndex((t) => t.value === consent.value),
    )
    .reverse(); // Reverse the list back to the original order

  // Sort the unique consent list based on the permission type
  uniqueConsentList = uniqueConsentList.sort((a, b) => {
    // If 'a' is allowed and 'b' is not, 'a' should come first
    if (a.permissionType === "allowed" && b.permissionType !== "allowed")
      return -1;
    // If 'a' is unknown and 'b' is not, 'b' should come first
    if (a.permissionType === "unknown" && b.permissionType !== "unknown")
      return 1;
    // If 'a' is denied and 'b' is not, 'b' should come first
    if (a.permissionType === "denied" && b.permissionType !== "denied")
      return 1;
    // If none of the above conditions are met, keep the original order
    return 0;
  });

  // Update the state with the unique and sorted consent list.
  setConsentList(uniqueConsentList);

  // Return the unique and sorted consent list
  return uniqueConsentList;
};
```

### Render consent table

Render the consent list in a table format, allowing users to see their current consents.

```jsx
// Container for displaying the consent list
<div style={styles.ConsentContainer}>
  // Table for displaying allowed consents
  <div style={styles.ConsentTable}>
    // Conditionally render the 'Allowed' header if there are any allowed
    consents
    {consentList.length > 0 && <h2>Allowed</h2>}
    // Filter and map through the consentList to display allowed consents
    {consentList
      .filter((consent) => consent.permissionType === "allowed")
      .map((consent, index) => (
        // Display each allowed consent in a row with a deny option
        <div
          key={index}
          style={{ display: "flex", justifyContent: "space-between" }}>
          // Index of the consent in the list
          <span style={{ textAlign: "left" }}>{index + 1}.</span>
          // Value of the consent
          <span style={{ textAlign: "left" }}>{consent.value}</span>
          // Button to deny the consent
          <span
            style={{ color: "red", cursor: "pointer" }}
            onClick={() => handleDeny(consent.value)}>
            Deny
          </span>
        </div>
      ))}
  </div>
  // Table for displaying denied consents
  <div style={styles.ConsentTable}>
    // Conditionally render the 'Denied' header if there are any denied consents
    {consentList.length > 0 && <h2>Denied</h2>}
    // Filter and map through the consentList to display denied consents
    {consentList
      .filter((consent) => consent.permissionType === "denied")
      .map((consent, index) => (
        // Display each denied consent in a row with an allow option
        <div
          key={index}
          style={{ display: "flex", justifyContent: "space-between" }}>
          // Index of the consent in the list
          <span style={{ textAlign: "left" }}>{index + 1}.</span>
          // Value of the consent
          <span style={{ textAlign: "left" }}>{consent.value}</span>
          // Button to allow the consent
          <span
            style={{ color: "green", cursor: "pointer" }}
            onClick={() => handleAllow(consent.value)}>
            Allow
          </span>
        </div>
      ))}
  </div>
</div>
```

### Handle consent change

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

### Download the consent list as a CSV file

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

You can find a complete example of this tutorial in the [xmtp-subscribe-consent-management](https://github.com/fabriguespe/xmtp-ppp-consent-management) repo.
