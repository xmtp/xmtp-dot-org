---
sidebar_label: Portable consent
sidebar_position: 4
hide_table_of_contents: false
---

import requeststab from '/docs/tutorials/img/requests-tab.png';
import messagestab from '/docs/tutorials/img/messages-tab.png';
import allowblock from '/docs/tutorials/img/allow-block.png';
import consentlogic from '/docs/tutorials/img/consent-state-logic.png';

# Use portable consent for XMTP

![Feature status](https://img.shields.io/badge/Feature_status-Alpha-orange)

:::caution This feature is in **alpha** status

This feature is in **alpha** status and ready for you to start experimenting with. However, we do not recommend using alpha features in production apps. Expect frequent changes as we iterate based on feedback.

:::

As an inbox safety best practice, enable your users to accept or block a contact in an app built with XMTP.

For example, when your user receives a message from a new contact, you can display the conversation on a **Requests** tab.

<img src={requeststab} style={{width:"375px"}}/>

You can then give your user the option to block or allow the contact.

<img src={allowblock} style={{width:"375px"}}/>

If your user selects **Allow**, display the conversation with the contact in your user’s main inbox view, such as on a **Messages** tab.

<img src={messagestab} style={{width:"375px"}}/>

If your user selects **Block**, remove the conversation with the contact from all views in your user’s inbox. This ensures that your user’s main inbox view is populated with only conversations with contacts they want to message with. Meanwhile, conversations with potential new contacts are accessible in a secondary view, and conversations with contacts they’ve blocked stay out of view completely.

You can also enable your users to block a contact in a previously accepted conversation. Likewise, you can enable your users to allow (unblock) a previously blocked contact.

To ensure that your users’ consent settings are consistently applied in any app built with XMTP, contact consent states are stored and accessible to apps in a consent list on the XMTP network.

For example, if your user blocked a contact on a different device or in another app and then uses your app, you can load the latest consent list to be sure to not mistakenly display conversations with the blocked contact.

## Understand contact consent states

A contact can have one of three consent states:

- Unknown
- Allowed
- Blocked

Here are some of the ways contact consent states are set:

**Unknown**

- For a new conversation that a new contact wants to start with your user, the contact consent state is set to `unknown`.
    
    For example, you can consider displaying a conversation with an `unknown` contact on a **Requests** tab and give your user the option to block or allow the contact.
    
- For a preexisting conversation with only messages from a contact that hasn’t had its consent state updated on the network, the contact consent state is set to `unknown` by default.
    
    For example, you can consider displaying a conversation with an `unknown` contact on a **Requests** tab and give your user the option to block or allow the contact.
    
**Allowed**

- For a new conversation that your user requests with a contact, the contact consent state is set to `allowed`. Your user’s creation of the conversation with the contact is considered as consenting to the conversation with the contact.
    
    For example, you can consider displaying the conversation with the `allowed` contact on the **Messages** tab.
    
- For a preexisting conversation with one or more messages from a contact that hasn’t had its consent state updated on the network (`unknown`) and your user has taken the action to send a message in response, update the contact consent state to `allowed`. You can consider the response from your user as consenting to the conversation with the contact.
    
    For example, you can consider moving the conversation with the contact from the **Requests** tab to the **Messages** tab.
    
- For a contact that your user has taken the action to allow, update the contact consent state to `allowed`.

    For example, you can consider displaying the conversation with the allowed contact on the **Messages** tab in your user’s inbox.

**Blocked**

- For a contact that your user has taken the action to block, update the contact consent state to `blocked`.
    
    For example, you can consider removing a conversation with the blocked contact from your user’s inbox completely.
    
## Build portable consent

Use the following methods to build portable consent in your app.

### Block or allow contacts

To enable your user to block or allow a contact, call the following methods. Note that these functions accept lists, so you can do batch requests.

```tsx
client.contacts.allow([wantedConvo.peerAddress, wantedConvo.peerAddress]);
client.contacts.block([spamConvo.peerAddress, unwantedConvo.peerAddress]);
```

### Refresh the contact consent list

To ensure that you’re using the latest contact consent state, make sure to refresh the consent list from the network. Perform the refresh just in case the consent state has changed on a different device, for example.

```tsx
client.contacts.refreshConsentList();
```

### Check if a contact is blocked or allowed

Call the following methods to check if a contact is blocked or allowed.

```tsx
client.contacts.isAllowed(wantedConvo.peerAddress);
client.contacts.isBlocked(spamConvo.peerAddress);
```

### Get a conversation’s consent state

When loading a list of conversations, take into account its current consent state. You can get the `consentState` directly from the conversation.

For example, you might want to display only allowed conversations (conversations with allowed contacts) on a **Messages** tab and “unknown” conversations (conversations with unknown contacts) on a **Requests** tab. For blocked conversations (conversations with blocked contacts), you might want to not display them at all.

```tsx
const state = await conversation.consentState();
if (state === "blocked) {
	// hide the conversation
}
```

## Synchronize portable consent

This diagram illustrates the logic for how contact consent states are set in an app and the consent list on the XMTP network. 

Your app must not overwrite a contact consent state in the consent list on the network except if your user performs one of the following explicit actions:

- Blocks a contact. Update the contact consent state to `blocked`.
- Allows a contact. Update the contact consent state to `allowed`.
- Sends their first response message to a preexisting conversation requested by an unknown contact. Update the contact consent state from `unknown` to `allowed`.

<img src={consentlogic} style={{width:"90%"}}/>
