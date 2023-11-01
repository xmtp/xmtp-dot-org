---
sidebar_label: User consent
sidebar_position: 5.5
hide_table_of_contents: false
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import requeststab from '/docs/build/img/requests-tab.png';
import messagestab from '/docs/build/img/messages-tab.png';
import consentlogic from '/docs/build/img/consent-state-logic.png';

# Request and respect user consent

![Feature status](https://img.shields.io/badge/Feature_status-Alpha-orange)

:::caution This feature is in **alpha** status

This feature is in **alpha** status and ready for you to start experimenting with. However, we do not recommend using alpha features in production apps. Expect frequent changes as we iterate based on feedback.

:::

You can choose to implement user consent to enable your app to request and respect user consent preferences. With the user consent feature, a blockchain account address registered on the XMTP network can have one of three consent preference values:

- Unknown
- Allowed
- Denied

These values express a user's consent preferences for a contact. These consent preferences are stored in a consent list on the XMTP network. The consent list is accessible by all apps.

## Understand user consent preferences

Here are some of the ways user consent preferences are set:

### Unknown

Conversation created using an app **with** user consent implemented:

- For a new conversation that a peer contact wants to start with a user, the consent preference is set to `unknown`.

Conversation created using an app **without** user consent implemented:

- For an existing conversation created by a peer contact and that a user hasn't responded to, the consent preference is set to `unknown`.

### Allowed

Conversation created using an app **with** user consent implemented:

- For a new conversation that a user created with a peer contact, the SDK sets the consent preference to `allowed`.  

  The user’s creation of the conversation with the contact is considered consent.

- For an existing conversation created by a peer contact that hasn’t had its consent preference updated on the network (`unknown`) and that the user has responded to, the app must update the consent preference to `allowed`.  

  The user's response to the conversation is considered consent.

- For a peer contact that a user has taken the action to allow, subscribe to, or enable notifications from, for example, the app must update the consent preference to `allowed`.

Conversation created using an app **without** user consent implemented:

- For a new conversation that a user created with a peer contact, the SDK sets the consent preference to `allowed`.  

  The user’s creation of the conversation with the contact is considered consent.

- For an existing conversation created by a peer contact that the user has responded to, the SDK sets the consent preference to `allowed`.  

  The user's response to the conversation is considered consent.

### Denied

Conversation created using an app **with** user consent implemented:

- For a peer contact that a user has taken the action to block, unsubscribe from, or disable notifications from, for example, the app must update the consent preference to `denied`.

## Use consent preferences to respect user intent

Your app should aim to handle consent preferences appropriately because they are an expression of user intent.

For example, if a user blocked a contact, your app should respect the user's intent to not see messages from the blocked contact. Handling the consent preference incorrectly and showing the user messages from the blocked contact may cause the user to lose trust in your app.

Be sure to load the latest consent list from the network at appropriate steps in your app flow to ensure that your app can operate using the latest data.

Here are some suggestions for how your app might provide user experiences that respect user intent based on consent preferences:

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

## Enable user consent preferences

Use the following methods to enable user consent preferences in your app.

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

The user consent feature for Dart hasn't been implemented yet

</TabItem>
<TabItem value="rn" label="React Native"  attributes={{className: "rn_tab"}}>

```tsx
client.contacts.allow([wantedConvo.peerAddress, wantedConvo.peerAddress]);
client.contacts.deny([spamConvo.peerAddress, unwantedConvo.peerAddress]);
```

</TabItem>
</Tabs>

### Refresh the consent list

To ensure that you’re using the latest consent preferences, make sure to refresh the consent list from the network. Perform the refresh just in case the consent preference has changed on a different device, for example.

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

The user consent feature for Dart hasn't been implemented yet

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

The user consent feature for Dart hasn't been implemented yet

</TabItem>
<TabItem value="rn" label="React Native"  attributes={{className: "rn_tab"}}>

```tsx
client.contacts.isAllowed(wantedConvo.peerAddress);
client.contacts.isDenied(spamConvo.peerAddress);
```

</TabItem>
</Tabs>

### Get a conversation’s consent preference

When loading a list of conversations, take into account its consent preference. You can get the `consentState` directly from the conversation.

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

The user consent feature for Dart hasn't been implemented yet

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

## Synchronize user consent preferences

All apps that implement user consent preferences must adhere to the logic described in this section to keep the consent list on the network synchronized with local app consent preferences, and vice versa.

:::caution

Do not update the consent list on the network except in the scenarios described below.

:::

Update a consent preference in the consent list on the network in the following scenarios only:

- A user explicitly denies the contact. For example, the user blocks, unsubscribes from, or disables notifications for the contact. The app should update the consent preference in the consent list to `denied`.

- A user explicitly allows a contact. For example, the user allows, subscribes to, or enables notifications for the contact. The app should update the consent preference in the consent list to `allowed`.

- An existing conversation has an `unknown` consent preference, but a legacy consent preference in the local database exists. The app should update the consent preference in the consent list to match the legacy local content preference.

- An existing conversation has an `unknown` consent preference, but has an existing response from the user. The app should update the consent preference in the consent list to `allowed`.

The following diagram illustrates the detailed logic for how consent preferences are set in an app and in the consent list on the XMTP network. 

<img src={consentlogic} style={{width:"90%"}}/>
