---
sidebar_label: Request Inbox JS
sidebar_position: 6
---

# Add consent to an existing XMTP inbox

Managing user consent is essential for enhancing privacy and the user experience. Providing user consent features in your app gives your users better control over who can send them messages.

If you already have an XMTP app, integrating universal allow/block features becomes crucial. This guide walks you through adding consent logic to your app.

<div class=" rabbit  p-5 ">

📥 <b>Need a quick reference?</b> Check out this GitHub repo: <a href="https://github.com/fabriguespe/xmtp-inbox-portable-consent">inbox-portable-consent</a>

</div>

## Considerations

Before diving into the code let's consider important aspects while integrating consent features. For example, before making an allow or block action you should synchronize the updated consent list in order to **prevent overwriting network** consent from another app. For more details head to these sections of our docs:

- [Understand user consent preferences](https://xmtp.org/docs/build/user-consent#understand-user-consent-preferences): This section provides a comprehensive understanding of how user consent preferences are set, including but not limited to, direct actions within the app, settings adjustments, and responses to prompts.
- [Use consent preferences to respect user intent](https://xmtp.org/docs/build/user-consent#use-consent-preferences-to-respect-user-intent): Your app should aim to handle consent preferences appropriately because they are an expression of user intent.
- [Synchronize user consent preferences](https://xmtp.org/docs/build/user-consent#synchronize-user-consent-preferences):All apps that use the user consent feature must adhere to the logic described in this section to keep the consent list on the network synchronized with local app user consent preferences, and vice versa.

## Tutorial

---

### Initialize XMTP client with consent

Here's your existing `initXmtpWithKeys` function, updated to include the consent refresh logic.

```jsx
const initXmtpWithKeys = async function () {
  // ... previous code
  const xmtp = await Client.create(wallet);
  // Refresh the consent list to make sure your application is up-to-date with the network
  await xmtp.contacts.refreshConsentList();
};
```

### Filtering conversations based on consent

Using the `consentState` property of the conversation object, you can filter the conversations based on consent.

```jsx
// Filtering based on consent state
const allowed = conversations.filter(
  (conversation) => conversation.consentState === "allowed",
);
const requests = conversations.filter(
  (conversation) => conversation.consentState === "unknown",
);
```

### Request inbox

You can now create a separate inbox for requests. This inbox will only show the conversations that have not been allowed yet.

```jsx
{
  activeTab === "requests" ? (
    <button
      style={styles.conversationListItem}
      onClick={() => setActiveTab("allowed")}>
      ← Allowed
    </button>
  ) : (
    <button
      style={styles.conversationListItem}
      onClick={() => setActiveTab("requests")}>
      Requests →
    </button>
  );
}
```

### Refresh consent when opening a conversation

To ensure that your application respects the latest user consent preferences, it's important to refresh the consent state every time a conversation is opened. This can be done by calling the `refreshConsentList` method of the XMTP client before any interaction within a conversation occurs.

```jsx
// Function to select and open a conversation
const openConversation = async (conversation) => {
  // Refresh the consent list to make sure your application is up-to-date with the network
  await client.contacts.refreshConsentList();
  // Now it's safe to open the conversation
  setSelectedConversation(conversation);
};
```

### Allow and deny actions

When you open a conversation on the request tab, you can show a popup with the allow and deny actions. You can use the `consentState` property of the conversation object to show the popup only when the consent state is `unknown`.

```jsx
// Inside your MessageContainer component
const [showPopup, setShowPopup] = useState(
  conversation.consentState === "unknown",
);

// Function to handle the acceptance of a contact
const handleAccept = async () => {
  // Refresh the consent list first
  await client.contacts.refreshConsentList();
  // Allow the contact
  await client.contacts.allow([conversation.peerAddress]);
  // Hide the popup
  setShowPopup(false);
  // Refresh the consent list to make sure your application is up-to-date with the network
  await client.contacts.refreshConsentList();
  // Log the acceptance
  console.log("accepted", conversation.peerAddress);
};

// Function to handle the blocking of a contact
const handleBlock = async () => {
  // Refresh the consent list first
  await client.contacts.refreshConsentList();
  // Block the contact
  await client.contacts.deny([conversation.peerAddress]);
  // Hide the popup
  setShowPopup(false);
  // Refresh the consent list
  await client.contacts.refreshConsentList();
  // Log the blocking
  console.log("denied", conversation.peerAddress);
};
```

### Updating consent on message send

A user's response to the conversation is considered consent. Previously to send a message we need to ensure the consent state is correctly set to "allowed".

```jsx
const handleSendMessage = async (newMessage) => {
  if (!newMessage.trim()) {
    alert("empty message");
    return;
  }
  if (conversation && conversation.peerAddress) {
    // Refresh the consent list first
    await client.contacts.refreshConsentList();
    // Update the consent state to "allowed"
    await client.contacts.allow([conversation.peerAddress]);
    // Send the message
    await conversation.send(newMessage);
  } else if (conversation) {
    // Crearting a new conversation also sets the consent state to "allowed"
    const conv = await client.conversations.newConversation(searchTerm);
    selectConversation(conv);
    await conv.send(newMessage);
  }
};
```

Include this step in your message sending workflow to maintain proper consent practices within your XMTP application.

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

### Example repos

JS example repo [xmtp-inbox-portable-consent](https://github.com/fabriguespe/xmtp-inbox-portable-consent)
