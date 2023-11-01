---
sidebar_label: Request Inbox
sidebar_position: 6
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import {FloatingInbox} from "@site/src/components/Widgets/FloatingInbox-text";

# How to Add Consent to an Existing XMTP App

Managing user consent is essential for enhancing privacy and user experience. If you already have an XMTP application, integrating portable consent features becomes crucial. This guide walks you through adding the consent logic to your existing XMTP app.

<div
  style={{
    display: "flex",
    justifyContent: "space-evenly",
    textAlign: "center",
    marginTop: "20px",
  }}
>
  <h3 style={{ width: "50%" }}>Without Consent</h3>
  <h3 style={{ width: "50%" }}>With Consent</h3>
</div>

<div className="widget-container" style={{ padding: "0px", height: "400px" }}>
  <FloatingInbox env="production" isContained={true} isConsent={false} />
  <FloatingInbox env="production" isContained={true} isConsent={true} />
</div>

#### Initialize XMTP Client with Consent

Here's your existing `initXmtp` function, updated to include the consent refresh logic.

```jsx
const initXmtpWithKeys = async function () {
  // ... previous code
  const xmtp = await Client.create(wallet);

  // Add these lines to refresh the consent list
  if (isConsent) {
    await xmtp.contacts.refreshConsentList();
  }
};
```

#### Add Consent Logic to the Conversations List

Modify your existing `ListConversations` component to incorporate the consent logic. This involves some additional state variables, filtering mechanisms, and UI elements.

```jsx
// Initialize state variables for consent
const [allowedConversations, setAllowedConversations] = useState([]);
const [requestConversations, setRequestConversations] = useState([]);

// ...existing code

useEffect(() => {
  // ...existing code

  // Filtering based on consent state
  const allowed = filteredConversations.filter(
    (conversation) => conversation.consentState === "allowed",
  );
  const requests = filteredConversations.filter(
    (conversation) => conversation.consentState === "unknown",
  );

  setAllowedConversations(allowed);
  setRequestConversations(requests);

  // ...existing code
}, [conversations]);

// Toggle tabs for allowed and requests
const [activeTab, setActiveTab] = useState("allowed");
```

#### Rendering Conversations Based on Consent

To render the conversations according to the active tab (allowed or request), include the following code block within your existing component.

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

#### Integrate Popup, Allow and Block Actions

Implement the popup actions like allow and block.

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
  await client.contacts.block([conversation.peerAddress]);
  // Hide the popup
  setShowPopup(false);
  // Refresh the consent list
  await client.contacts.refreshConsentList();
  // Log the blocking
  console.log("blocked", conversation.peerAddress);
};
```

Render the popup

```jsx
// Add the following inside your component's return statement
{
  isConsent && showPopup ? (
    <div style={styles.popup}>
      <h4 style={styles.popupTitle}>Do you trust this contact?</h4>
      <div style={styles.popupInner}>
        <button
          style={{ ...styles.popupButton, ...styles.acceptButton }}
          onClick={handleAccept}>
          Accept
        </button>
        <button
          style={{ ...styles.popupButton, ...styles.blockButton }}
          onClick={handleBlock}>
          Block
        </button>
      </div>
    </div>
  ) : null;
}
```

#### Conclusion

By following these steps, you'll successfully integrate portable consent into your existing XMTP application. This enables users to have better control over who can send them messages, enhancing user privacy and experience.
