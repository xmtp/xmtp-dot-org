---
sidebar_label: Group chats
sidebar_position: 4
description: Learn how to start, list, and cache conversations with XMTP
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# Manage group chats with XMTP

![Status](https://img.shields.io/badge/Reference_implementation_status-Alpha-orange)

Secure group chats are an important part of every messaging app. In this comprehensive guide, we delve into the essentials of leveraging XMTP for creating secure group chats. From the initial steps of starting a new group chat, listing and caching conversations for quick access, to advanced topics like managing group members and synchronizing message history data across devices, we cover it all. Whether you're a seasoned developer or new to XMTP, this documentation provides you with the knowledge to integrate group chat functionalities into your applications effectively.

:::caution Group Chats are Per Installation
Group chats in XMTP are specific to each installation. This means that while you will see your group chat conversations across different devices, you will not see the historical messages within those chats automatically. Each group chat's message history is tied to the device where it was started. Consequently, there is no message history synced across devices. When you sign in on a new device, you will be able to see existing group chat conversations but will only receive new messages going forward. This behavior is specific to group conversations.
:::

## Create a group chat

Initiate a new group chat with a list of specified addresses. To create a group, the recipient must have already started their client at least once on the XMTP network.

<Tabs groupId="groupchats">
<TabItem value="rn" label="React Native" attributes={{className: "rn_tab "}}>

```jsx
const group = await client.conversations.newGroup([
  walletAddress1,
  walletAddress2,
]);
```

</TabItem>
<TabItem value="kotlin" label="Kotlin" attributes={{className: "kotlin_tab"}}>

```kotlin
val group = client.conversations.newGroup(listOf(walletAddress1,walletAddress2))
```

</TabItem>
<TabItem value="swift" label="Swift"  attributes={{className: "swift_tab"}}>

```swift
let group = try await client.conversations.newGroup(with: [walletAddress1, walletAddress2])
```

</TabItem>
<TabItem value="dart" label="Dart"  attributes={{className: "dart_tab"}}>

Code sample expected for Q2 2024

</TabItem>
<TabItem value="js" label="JavaScript"  attributes={{className: "js_tab "}}>

Code sample expected for Q2 2024

</TabItem>
<TabItem value="react" label="React"  attributes={{className: "react_tab "}}>

Code sample expected for Q2 2024

</TabItem>
</Tabs>

_The maximum amount of addresses allowed is 250._

## List group chat conversations

Retrieve all existing group chat conversations associated with the current XMTP client. Refer to the [Conversations](/docs/build/conversations.md) section for more details.

<Tabs groupId="groupchats">
<TabItem value="rn" label="React Native" attributes={{className: "rn_tab "}}>

```jsx
const groups = await client.conversations.listGroups();
```

</TabItem>
<TabItem value="kotlin" label="Kotlin" attributes={{className: "kotlin_tab"}}>

```kotlin
// List all group chats for the current user
val groups = client.conversations.listGroups()
```

List all you conversation for both group and individual conversations using `includeGroups`

```kotlin
// List all conversations, including both group and individual
val conversations = client.conversations.list(includeGroups = true)
```

</TabItem>
<TabItem value="swift" label="Swift"  attributes={{className: "swift_tab"}}>

```swift
// List all group chats for the current user
let groups = try await client.conversations.groups()
```

List all you conversation for both group and individual conversations using `includeGroups`

```swift
let groups = try await client.conversations.list(includeGroups: true)
```

</TabItem>
<TabItem value="dart" label="Dart"  attributes={{className: "dart_tab"}}>

Code sample expected for Q2 2024

</TabItem>
<TabItem value="js" label="JavaScript"  attributes={{className: "js_tab "}}>

Code sample expected for Q2 2024

</TabItem>
<TabItem value="react" label="React"  attributes={{className: "react_tab "}}>

Code sample expected for Q2 2024

</TabItem>
</Tabs>

## Send a message in a group chat

Send a message to an existing group chat. Refer to the [Messages](/docs/build/messages) section for more details.

<Tabs groupId="groupchats">
<TabItem value="rn" label="React Native" attributes={{className: "rn_tab "}}>

```jsx
const group = await client.conversations.newGroup([
  walletAddress1,
  walletAddress2,
]);
// Send a message
await group.send("Hello, group!");
```

</TabItem>
<TabItem value="kotlin" label="Kotlin" attributes={{className: "kotlin_tab"}}>

```kotlin
val group = client.conversations.newGroup(listOf(walletAddress1,walletAddress2))
//Send a message
group.send("Hello, group!")
```

</TabItem>
<TabItem value="swift" label="Swift"  attributes={{className: "swift_tab"}}>

```swift
let group = try await client.conversations.newGroup(with: [walletAddress1, walletAddress2])
//Send a message
try await group.send(content: "Hello, group!")
```

</TabItem>
<TabItem value="dart" label="Dart"  attributes={{className: "dart_tab"}}>

Code sample expected for Q2 2024

</TabItem>
<TabItem value="js" label="JavaScript"  attributes={{className: "js_tab "}}>

Code sample expected for Q2 2024

</TabItem>
<TabItem value="react" label="React"  attributes={{className: "react_tab "}}>

Code sample expected for Q2 2024

</TabItem>
</Tabs>

## Check if a group chat is active

The `isActive` property indicates whether the current user is still a participant in the group chat. If the group chat is not active for the user, it typically means the user has been removed from the group. Developers should use this status to adjust the user interface accordingly. If a group chat is not active for a user, the application should hide or disable functionalities such as sending messages, adding, or removing members. This ensures a good user experience and prevents actions that are not permissible due to the user's status in the group chat.

<Tabs groupId="groupchats">
<TabItem value="rn" label="React Native" attributes={{className: "rn_tab "}}>

```jsx
const isActive = await group.isActive();
```

</TabItem>
<TabItem value="kotlin" label="Kotlin" attributes={{className: "kotlin_tab"}}>

```kotlin
val isActive = group.isActive()
```

</TabItem>
<TabItem value="swift" label="Swift"  attributes={{className: "swift_tab"}}>

```swift
var isActive = try group.isActive()
```

</TabItem>
<TabItem value="dart" label="Dart"  attributes={{className: "dart_tab"}}>

Code sample expected for Q2 2024

</TabItem>
<TabItem value="js" label="JavaScript"  attributes={{className: "js_tab "}}>

Code sample expected for Q2 2024

</TabItem>
<TabItem value="react" label="React"  attributes={{className: "react_tab "}}>

Code sample expected for Q2 2024

</TabItem>
</Tabs>

## Synchronizing Group Conversations

XMTP's `syncGroups` method ensures your application's group conversations are current, reflecting new groups or membership changes. Use `syncGroups` to:

- **After Signing In:** Immediately update group conversation data.
- **Periodically:** Keep data current based on your app's requirements.
- **After Receiving a Notification:** Reflect changes in group membership prompted by notifications.

<Tabs groupId="groupchats">
<TabItem value="rn" label="React Native" attributes={{className: "rn_tab "}}>

```jsx
await client.conversations.syncGroups();
```

</TabItem>
<TabItem value="kotlin" label="Kotlin" attributes={{className: "kotlin_tab"}}>

```kotlin
client.conversations.syncGroups()
```

List all you conversation for both group and individual conversations using `includeGroups`

```kotlin
// List all conversations, including both group and individual
val conversations = client.conversations.list(includeGroups = true)
```

</TabItem>
<TabItem value="swift" label="Swift"  attributes={{className: "swift_tab"}}>

```swift
try await client.conversations.sync()
```

</TabItem>
<TabItem value="dart" label="Dart"  attributes={{className: "dart_tab"}}>

Code sample expected for Q2 2024

</TabItem>
<TabItem value="js" label="JavaScript"  attributes={{className: "js_tab "}}>

Code sample expected for Q2 2024

</TabItem>
<TabItem value="react" label="React"  attributes={{className: "react_tab "}}>

Code sample expected for Q2 2024

</TabItem>
</Tabs>

## Manage group chat members

You can list, add and remove members from a group chat. The current limit is 250. Only the creator of the group chat has the permissions to add or remove members. This restriction ensures that only authorized individuals can modify the participant list. Developers should design their application's user interface and functionality with this consideration in mind, ensuring that options to add or remove members are only available to the group's creator.

### List group members

Retrieve a list of wallet addresses for all members in the group chat

<Tabs groupId="groupchats">
<TabItem value="rn" label="React Native" attributes={{className: "rn_tab "}}>

```jsx
await group.sync();
const members = await group.memberAddresses();
```

</TabItem>
<TabItem value="kotlin" label="Kotlin" attributes={{className: "kotlin_tab"}}>

```kotlin
group.sync()
val members = group.memberAddresses()
```

</TabItem>
<TabItem value="swift" label="Swift"  attributes={{className: "swift_tab"}}>

```swift
try await group.sync()
let members = group.members()
```

</TabItem>
<TabItem value="dart" label="Dart"  attributes={{className: "dart_tab"}}>

Code sample expected for Q2 2024

</TabItem>
<TabItem value="js" label="JavaScript"  attributes={{className: "js_tab "}}>

Code sample expected for Q2 2024

</TabItem>
<TabItem value="react" label="React"  attributes={{className: "react_tab "}}>

Code sample expected for Q2 2024

</TabItem>
</Tabs>

### Add group members

Add new members to an existing group chat using its wallet address.

<Tabs groupId="groupchats">
<TabItem value="rn" label="React Native" attributes={{className: "rn_tab "}}>

```jsx
await group.addMembers([walletAddress]);
```

</TabItem>
<TabItem value="kotlin" label="Kotlin" attributes={{className: "kotlin_tab"}}>

```kotlin
group.addMembers(listOf(walletAddress))
```

</TabItem>
<TabItem value="swift" label="Swift"  attributes={{className: "swift_tab"}}>

```swift
try await group.addMembers(addresses: [walletAddress])
```

</TabItem>
<TabItem value="dart" label="Dart"  attributes={{className: "dart_tab"}}>

Code sample expected for Q2 2024

</TabItem>
<TabItem value="js" label="JavaScript"  attributes={{className: "js_tab "}}>

Code sample expected for Q2 2024

</TabItem>
<TabItem value="react" label="React"  attributes={{className: "react_tab "}}>

Code sample expected for Q2 2024

</TabItem>
</Tabs>

### Remove group members

Remove a member from an existing group chat using its wallet address

<Tabs groupId="groupchats">
<TabItem value="rn" label="React Native" attributes={{className: "rn_tab "}}>

```jsx
await group.removeMembers([walletAddress]);
```

</TabItem>
<TabItem value="kotlin" label="Kotlin" attributes={{className: "kotlin_tab"}}>

```kotlin
group.removeMembers(listOf(walletAddress))
```

</TabItem>
<TabItem value="swift" label="Swift"  attributes={{className: "swift_tab"}}>

```swift
try await group.removeMembers(addresses: [walletAddress])
```

</TabItem>
<TabItem value="dart" label="Dart"  attributes={{className: "dart_tab"}}>

Code sample expected for Q2 2024

</TabItem>
<TabItem value="js" label="JavaScript"  attributes={{className: "js_tab "}}>

Code sample expected for Q2 2024

</TabItem>
<TabItem value="react" label="React"  attributes={{className: "react_tab "}}>

Code sample expected for Q2 2024

</TabItem>
</Tabs>

## Listen for new messages in a group chat

Streams allow real-time monitoring of new messages in a group chat. Here's how you can set up a stream for message updates. Refer to the [Streams](/docs/build/streams.md) section for more details.

<Tabs groupId="groupchats">
<TabItem value="rn" label="React Native" attributes={{className: "rn_tab "}}>

```jsx
// Assuming `group` is an existing group chat object
const streamGroupMessages = async (group) => {
  const cancelGroupMessageStream = await aliceGroup.streamGroupMessages(
    console.log(`New message: ${message.content}`);
  });

  // Use cancelGroupMessageStream() to stop listening to group updates
};
```

</TabItem>
<TabItem value="kotlin" label="Kotlin" attributes={{className: "kotlin_tab"}}>

```kotlin
// Stream new messages in a group chat
val group = client.conversations.newGroup(listOf(walletAddress1, walletAddress2))
val messageStream = group.streamMessages()

// Collect from the Flow to receive messages
messageStream.collect { message ->
    print("New message from ${message.senderAddress}: ${message.body}")
}
```

</TabItem>
<TabItem value="swift" label="Swift"  attributes={{className: "swift_tab"}}>

```swift
// Assuming `group` is an existing group chat object
for try await message in group.streamMessages() {
    print("New message: \(message.content)")
}
```

</TabItem>
<TabItem value="dart" label="Dart"  attributes={{className: "dart_tab"}}>

Code sample expected for Q2 2024

</TabItem>
<TabItem value="js" label="JavaScript"  attributes={{className: "js_tab "}}>

Code sample expected for Q2 2024

</TabItem>
<TabItem value="react" label="React"  attributes={{className: "react_tab "}}>

Code sample expected for Q2 2024

</TabItem>
</Tabs>

## Listen for group chat updates

Monitor updates in group chats, including member management activities like adding and removing members as well as the creation of new group chats.

<Tabs groupId="groupchats">
<TabItem value="rn" label="React Native" attributes={{className: "rn_tab "}}>

```jsx
// Listen for group chat updates
const streamGroups = async (client) => {
  const groups = [];
  const cancelStreamGroups = await client.conversations.streamGroups(
    (group) => {
      groups.push(group);
    },
  );

  // Use cancelStreamGroups() to stop listening to group updates
};
```

And for streaming all conversations, including individual and groups:

```jsx
const streamAllConversations = async (client) => {
  const allConvos = [];
  const cancelStreamAll = await client.conversations.streamAll(
    (conversationContainer) => {
      allConvos.push(conversation);
    },
  );

  // Use cancelStreamAll() to stop listening to all conversation updates
};
```

</TabItem>
<TabItem value="kotlin" label="Kotlin" attributes={{className: "kotlin_tab"}}>

```kotlin
// Stream updates for all group conversations
val groupsStream = client.conversations.streamGroups()

groupsStream.collect { group ->
    println("New or updated group: ${group.id}")
}
```

Keep your conversation list current by streaming updates for both group and individual conversations using `includeGroups`.

```kotlin
// Stream updates for all conversations, including individual and groups
val conversationsAndGroupsStream = client.conversations.streamAll()

allConversationsStream.collect { grouporconv ->
    println("New or updated group of grouporconv: ${grouporconv.id}")
}
```

</TabItem>
<TabItem value="swift" label="Swift"  attributes={{className: "swift_tab"}}>

```swift
// Stream updates for all group conversations
for try await group in client.conversations.streamGroups() {
    print("New or updated group: \(group.id)")
}
```

And for streaming all conversations, including individual and groups:

```swift
// Stream updates for all conversations, including individual and groups
for try await conversation in client.conversations.streamAll() {
    print("New or updated conversation: \(conversation.id)")
}
```

</TabItem>
<TabItem value="dart" label="Dart"  attributes={{className: "dart_tab"}}>

Code sample expected for Q2 2024

</TabItem>
<TabItem value="js" label="JavaScript"  attributes={{className: "js_tab "}}>

Code sample expected for Q2 2024

</TabItem>
<TabItem value="react" label="React"  attributes={{className: "react_tab "}}>

Code sample expected for Q2 2024

</TabItem>
</Tabs>

## Note on Conversations and Messages in Group Chats

It's important to note that all the features and methods described in the [Conversations](/docs/build/conversations) and [Messages](/docs/build/messages) documentation are fully applicable to group chats as well. This includes starting new conversations, checking if an address is on the network, sending messages, and listing existing conversations. XMTP's API design ensures that you can manage group chats with the same ease and flexibility as one-on-one conversations.

This means that whether you're working with individual conversations or group chats, the process for managing them remains consistent, allowing for a unified and streamlined development experience across different types of communication within XMTP.
