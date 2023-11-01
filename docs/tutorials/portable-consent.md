---
sidebar_label: Portable consent
sidebar_position: 5.5
hide_table_of_contents: false
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import requeststab from '/docs/tutorials/img/requests-tab.png';
import messagestab from '/docs/tutorials/img/messages-tab.png';
import consentlogic from '/docs/tutorials/img/consent-state-logic.png';

# Use portable consent for XMTP

![Feature status](https://img.shields.io/badge/Feature_status-Alpha-orange)

:::caution This feature is in **alpha** status

This feature is in **alpha** status and ready for you to start experimenting with. However, we do not recommend using alpha features in production apps. Expect frequent changes as we iterate based on feedback.

:::

When you build an app with XMTP, you can choose to implement portable consent. 

With portable consent, a blockchain account address registered on the XMTP network can have one of three contact consent states:

- Unknown
- Allowed
- Denied

Contact consent states are stored in a consent list on the XMTP network. The consent list is accessible by all apps.

## Understand contact consent states

Here are some of the ways contact consent states are set:

### Unknown

Conversation created using an app **with** portable consent implemented:

- For a new conversation that a peer contact wants to start with a user, the contact consent state is set to `unknown`.

Conversation created using an app **without** portable consent implemented:

- For an existing conversation created by a peer contact and that a user hasn't responded to, the contact consent state is set to `unknown`.

### Allowed

Conversation created using an app **with** portable consent implemented:

- For a new conversation that a user created with a peer contact, the SDK sets the contact consent state to `allowed`.  

  The user’s creation of the conversation with the contact is considered consent.

- For an existing conversation created by a peer contact that hasn’t had its consent state updated on the network (`unknown`) and that the user has responded to, the app must update the contact consent state to `allowed`.  

  The user's response to the conversation is considered consent.

- For a peer contact that a user has taken the action to allow, subscribe to, or enable notifications from, for example, the app must update the contact consent state to `allowed`.

Conversation created using an app **without** portable consent implemented:

- For a new conversation that a user created with a peer contact, the SDK sets the contact consent state to `allowed`.  

  The user’s creation of the conversation with the contact is considered consent.

- For an existing conversation created by a peer contact that the user has responded to, the SDK sets the contact consent state is set to `allowed`.  

  The user's response to the conversation is considered consent.

### Denied

Conversation created using an app **with** portable consent implemented:

- For a peer contact that a user has taken the action to block, unsubscribe from, or disable notifications from, for example, the app must update the contact consent state to `denied`.

## Handle consent states to respect user intent

Your app should aim to handle contact consent states appropriately because they are an expression of user intent.

For example, if a user blocked a contact, your app should respect the user's intent to not see messages from the blocked contact. Handling the contact consent state incorrectly and showing the user messages from the blocked contact may cause the user to lose trust in your app.

Be sure to load the latest consent list from the network at appropriate steps in your app flow to ensure that your app can operate using the latest data.

Here are some suggestions for how your app might provide user experiences that respect user intent based on contact consent states:

**Unknown**

Consider displaying a conversation with an `unknown` contact on a **Requests** tab and give the user the option to block or allow the contact.  

<img src={requeststab} style={{width:"375px"}}/>
<p/>

**Allowed**

Consider displaying a conversation with an `allowed` contact on a **Messages** tab and give the user the option to block the contact.  

<img src={messagestab} style={{width:"375px"}}/>
<p/>

**Denied**

Consider removing a conversation with a `denied` contact from the user’s inbox completely. In an appropriate location in your app, give the user the option to unblock the contact.

## Build portable consent

Use the following methods to build portable consent in your app.

### Deny or allow a contact

To enable your user to deny or allow a contact, call the following methods. Note that these functions accept lists, so you can do batch requests.

<Tabs groupId="sdk-langs">
<TabItem value="js" label="JavaScript"  attributes={{className: "js_tab"}}>

```jsx
<Placeholder for JS from Fabri>
```

</TabItem>
<TabItem value="react" label="React"  attributes={{className: "react_tab"}}>

```tsx
<Placeholder for React>
```

</TabItem>
<TabItem value="kotlin" label="Kotlin"  attributes={{className: "kotlin_tab"}}>

```kotlin
<Placeholder for Kotlin>
```

</TabItem>
<TabItem value="swift" label="Swift"  attributes={{className: "swift_tab"}}>

```swift
<Placeholder for swift>
```

</TabItem>
<TabItem value="dart" label="Dart"  attributes={{className: "dart_tab"}}>

Portable consent for Dart hasn't been implemented yet

</TabItem>
<TabItem value="rn" label="React Native"  attributes={{className: "rn_tab"}}>

```tsx
client.contacts.allow([wantedConvo.peerAddress, wantedConvo.peerAddress]);
client.contacts.deny([spamConvo.peerAddress, unwantedConvo.peerAddress]);
```

</TabItem>
</Tabs>

### Refresh the contact consent list

To ensure that you’re using the latest contact consent state, make sure to refresh the consent list from the network. Perform the refresh just in case the consent state has changed on a different device, for example.

<Tabs groupId="sdk-langs">
<TabItem value="js" label="JavaScript"  attributes={{className: "js_tab"}}>

```js
<Placeholder for JS from Fabri>
```

</TabItem>
<TabItem value="react" label="React"  attributes={{className: "react_tab"}}>

```tsx
<Placeholder for React>
```

</TabItem>
<TabItem value="kotlin" label="Kotlin"  attributes={{className: "kotlin_tab"}}>

```kotlin
<Placeholder for Kotlin>
```

</TabItem>
<TabItem value="swift" label="Swift"  attributes={{className: "swift_tab"}}>

```swift
<Placeholder for swift>
```

</TabItem>
<TabItem value="dart" label="Dart"  attributes={{className: "dart_tab"}}>

Portable consent for Dart hasn't been implemented yet

</TabItem>
<TabItem value="rn" label="React Native"  attributes={{className: "rn_tab"}}>

```tsx
client.contacts.refreshConsentList();
```

</TabItem>
</Tabs>

### Check if a contact is denied or allowed

Call the following methods to check if a contact is denied or allowed.

<Tabs groupId="sdk-langs">
<TabItem value="js" label="JavaScript"  attributes={{className: "js_tab"}}>

```js
<Placeholder for JS from Fabri>
```

</TabItem>
<TabItem value="react" label="React"  attributes={{className: "react_tab"}}>

```tsx
<Placeholder for React>
```

</TabItem>
<TabItem value="kotlin" label="Kotlin"  attributes={{className: "kotlin_tab"}}>

```kotlin
<Placeholder for Kotlin>
```

</TabItem>
<TabItem value="swift" label="Swift"  attributes={{className: "swift_tab"}}>

```swift
<Placeholder for swift>
```

</TabItem>
<TabItem value="dart" label="Dart"  attributes={{className: "dart_tab"}}>

Portable consent for Dart hasn't been implemented yet

</TabItem>
<TabItem value="rn" label="React Native"  attributes={{className: "rn_tab"}}>

```tsx
client.contacts.isAllowed(wantedConvo.peerAddress);
client.contacts.isDenied(spamConvo.peerAddress);
```

</TabItem>
</Tabs>

### Get a conversation’s consent state

When loading a list of conversations, take into account its current consent state. You can get the `consentState` directly from the conversation.

<Tabs groupId="sdk-langs">
<TabItem value="js" label="JavaScript"  attributes={{className: "js_tab"}}>

```js
<Placeholder for JS from Fabri>
```

</TabItem>
<TabItem value="react" label="React"  attributes={{className: "react_tab"}}>

```tsx
<Placeholder for React>
```

</TabItem>
<TabItem value="kotlin" label="Kotlin"  attributes={{className: "kotlin_tab"}}>

```kotlin
<Placeholder for Kotlin>
```

</TabItem>
<TabItem value="swift" label="Swift"  attributes={{className: "swift_tab"}}>

```swift
<Placeholder for swift>
```

</TabItem>
<TabItem value="dart" label="Dart"  attributes={{className: "dart_tab"}}>

Portable consent for Dart hasn't been implemented yet

</TabItem>
<TabItem value="rn" label="React Native"  attributes={{className: "rn_tab"}}>

```tsx
const state = await conversation.consentState();
if (state === "denied) {
	// hide the conversation
}
```

</TabItem>
</Tabs>

## Synchronize portable consent

All apps that implement portable consent must adhere to the logic described in this section to keep the consent list on the network synchronized with local app contact content states, and vice versa.

:::caution

Do not update the consent list on the network except in the scenarios described below.

:::

Update a contact consent state in the consent list on the network in the following scenarios only:

- A user explicitly denies the contact. For example, the user blocks, unsubscribes from, or disables notifications for the contact. The app should update the consent state in the consent list to `denied`.

- A user explicitly allows a contact. For example, the user allows, subscribes to, or enables notifications for the contact. The app should update the consent state in the consent list to `allowed`.

- An existing conversation has an `unknown` contact consent state, but a legacy consent state in the local database exists. The app should update the consent state in the consent list to match the legacy local state.

- An existing conversation has an `unknown` contact consent state, but has an existing response from the user. The app should update the consent state in the consent list to `allowed`.

The following diagram illustrates the detailed logic for how contact consent states are set in an app and in the consent list on the XMTP network. 

<img src={consentlogic} style={{width:"90%"}}/>
