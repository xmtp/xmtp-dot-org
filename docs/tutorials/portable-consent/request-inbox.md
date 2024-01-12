---
sidebar_label: Request inbox
sidebar_position: 6
---

# Add consent to an existing XMTP inbox

![Feature status](https://img.shields.io/badge/Feature_status-Alpha-orange)

:::caution This feature is in **alpha** status

This feature is in **alpha** status and ready for you to start experimenting with. However, we do not recommend using alpha features in production apps. Expect frequent changes as we iterate based on feedback. Want to provide feedback? Comment on [Proposal: Portable consent state for v2 SDKs](https://github.com/orgs/xmtp/discussions/49).

:::

<div class=" rabbit  p-5 ">

📥 <b>Need a quick reference?</b> Check out this GitHub repo: <a href="https://github.com/fabriguespe/xmtp-inbox-portable-consent">inbox-portable-consent</a>

</div>

Managing user consent is essential for enhancing privacy and the user experience. Providing user consent features in your app gives your users better control over who can send them messages.

If you already have an XMTP app, integrating portable consent features becomes crucial. This guide walks you through adding consent logic to your app.

## Initialize XMTP client with consent

Here's your existing `initXmtp` function, updated to include the consent refresh logic.

```jsx
const initXmtpWithKeys = async function () {
  // ... previous code
  const xmtp = await Client.create(wallet);
  // Add these lines to refresh the consent list
  await xmtp.contacts.refreshConsentList();
};
```

## Filtering conversations based on consent

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

## Request inbox

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

## Allow and deny actions

When you open a conversation on the request tab, you can show a popup with the allow and deny actions. You can use the `consentState` property of the conversation object to show the popup only when the consent state is `unknown`.

```jsx
// Inside your MessageContainer component
const [showPopup, setShowPopup] = useState(
  conversation.consentState === "unknown",
);

// Function to handle the acceptance of a contact
const handleAccept = async () => {
  // Allow the contact
  await client.contacts.allow([conversation.peerAddress]);
  // Hide the popup
  setShowPopup(false);
  // Refresh the consent list
  await client.contacts.refreshConsentList();
  // Log the acceptance
  console.log("accepted", conversation.peerAddress);
};

// Function to handle the blocking of a contact
const handleBlock = async () => {
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

## Example repos

- JS example repo: [xmtp-inbox-portable-consent](https://github.com/fabriguespe/xmtp-inbox-portable-consent)
- React Native example repo [xmtp-inbox-portable-consent](https://github.com/fabriguespe/xmtp-rn-request-inbox)
