---
sidebar_label: Group chat
sidebar_position: 4
description: Learn how to create, list, and manage group chats with XMTP
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# Build group chat with XMTP

![Status](https://img.shields.io/badge/Project_status-Alpha-orange)

:::info
🚀 Explore our [ETH Denver tutorial](/docs/tutorials/token-gated-group-chat) on setting up token-gated group chats with XMTP. 🚀
:::

Secure group chats are an important part of every messaging app. In this guide, we delve into the essentials of using XMTP for creating secure group chats. From the initial steps of starting a new group chat, listing and caching conversations for quick access, to advanced topics like managing group members and synchronizing message history data across devices.

:::caution

This project is in **Alpha** status and ready for you to experiment with.

However, we do not recommend using **Alpha** software in production apps. Software in this status is likely to change based on feedback.

:::

## Create a group chat

Initiate a new group chat with a list of specified addresses. To create a group, the recipient must have already started their client at least once on the XMTP network.

<Tabs groupId="groupchats">
<TabItem value="rn" label="React Native" attributes={{className: "rn_tab "}}>

```jsx
const group = await client.conversations.newGroup(
  [walletAddress1, walletAddress2],
  // Set permissions for the group. Options include "creator_is_admin" where only the creator has admin rights, or "everyone_is_admin" where all members are admins.
  { permissions: "creator_is_admin" },
);
```

</TabItem>
<TabItem value="kotlin" label="Kotlin" attributes={{className: "kotlin_tab"}}>

```kotlin
val group = client.conversations.newGroup(listOf(walletAddress1, walletAddress2),
  // Set permissions for the group. Options include "creator_is_admin" where only the creator has admin rights, or "everyone_is_admin" where all members are admins.
  permissions = "creator_is_admin"
)
```

</TabItem>
<TabItem value="swift" label="Swift"  attributes={{className: "swift_tab"}}>

```swift
let group = try await client.conversations.newGroup(with: [walletAddress1, walletAddress2],
// Set permissions for the group. Options include "creator_is_admin" where only the creator has admin rights, or "everyone_is_admin" where all members are admins.
permissions: "creator_is_admin")
```

</TabItem>
<TabItem value="dart" label="Dart"  attributes={{className: "dart_tab"}}>

Code sample coming soon

</TabItem>
<TabItem value="js" label="JavaScript"  attributes={{className: "js_tab "}}>

Code sample coming soon

</TabItem>
<TabItem value="react" label="React"  attributes={{className: "react_tab "}}>

Code sample coming soon

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

Code sample coming soon

</TabItem>
<TabItem value="js" label="JavaScript"  attributes={{className: "js_tab "}}>

Code sample coming soon

</TabItem>
<TabItem value="react" label="React"  attributes={{className: "react_tab "}}>

Code sample coming soon

</TabItem>
</Tabs>

## Synchronizing group conversations

XMTP's `syncGroups` brings the current data from the network and updates local DB, reflecting new groups or membership changes. Use `syncGroups` to:

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

List all conversations for both group and individual conversations.

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

Code sample coming soon

</TabItem>
<TabItem value="js" label="JavaScript"  attributes={{className: "js_tab "}}>

Code sample coming soon

</TabItem>
<TabItem value="react" label="React"  attributes={{className: "react_tab "}}>

Code sample coming soon

</TabItem>
</Tabs>

## List group chat conversations

Retrieve all existing group chat conversations associated with the current XMTP client. Refer to the [Conversations](/docs/build/conversations.md) section for more details.

<Tabs groupId="groupchats">
<TabItem value="rn" label="React Native" attributes={{className: "rn_tab "}}>

```jsx
//First fetch new data from the network
await client.conversations.syncGroups();
//Get the updated group list
const groups = await client.conversations.listGroups();
```

</TabItem>
<TabItem value="kotlin" label="Kotlin" attributes={{className: "kotlin_tab"}}>

```kotlin
//First fetch new data from the network
client.conversations.syncGroups()
//Get the updated group list
val groups = client.conversations.listGroups()
```

List all conversations for both group and individual conversations.

```kotlin
// List all conversations, including both group and individual
val conversations = client.conversations.list(includeGroups = true)
```

</TabItem>
<TabItem value="swift" label="Swift"  attributes={{className: "swift_tab"}}>

```swift
//First fetch new data from the network
try await client.conversations.sync()
//Get the updated group list
let groups = try await client.conversations.groups()
```

List all conversations for both group and individual conversations

```swift
let groups = try await client.conversations.list(includeGroups: true)
```

</TabItem>
<TabItem value="dart" label="Dart"  attributes={{className: "dart_tab"}}>

Code sample coming soon

</TabItem>
<TabItem value="js" label="JavaScript"  attributes={{className: "js_tab "}}>

Code sample coming soon

</TabItem>
<TabItem value="react" label="React"  attributes={{className: "react_tab "}}>

Code sample coming soon

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

Code sample coming soon

</TabItem>
<TabItem value="js" label="JavaScript"  attributes={{className: "js_tab "}}>

Code sample coming soon

</TabItem>
<TabItem value="react" label="React"  attributes={{className: "react_tab "}}>

Code sample coming soon

</TabItem>
</Tabs>

## Synchronizing group details and messages

To ensure your application has the latest group chat details, including member list and the most recent messages, it's crucial to periodically synchronize each group chat. This can be particularly important after joining a group, adding new members, or sending messages. Use the `sync()` method on a group chat object to update its state with the latest information from the XMTP network.

:::caution Group chats are currently per installation
As of now, group chats in XMTP are specific to each installation. This means that while you can access your group chat conversations across different devices, the historical messages within those chats might not automatically appear. Currently, each group chat's message history is tied to the device where it was initiated. As a result, there is no automatic syncing of message history across devices. When you sign in on a new device, you will see existing group chat conversations but will only receive new messages from that point forward. We are actively working on enhancing this feature to improve your experience with group conversations.
:::

<Tabs groupId="groupchats">
<TabItem value="rn" label="React Native" attributes={{className: "rn_tab "}}>

```jsx
// Assuming `group` is an existing group chat object
await group.sync();
// Get group messages
await group.messages();
```

</TabItem>
<TabItem value="kotlin" label="Kotlin" attributes={{className: "kotlin_tab"}}>

```kotlin
// Assuming `group` is an existing group chat object
group.sync()
// Get group messages
group.messages();
```

</TabItem>
<TabItem value="swift" label="Swift"  attributes={{className: "swift_tab"}}>

```swift
try await client.conversations.sync()
// Get group messages
try await group.messages();
```

</TabItem>
<TabItem value="dart" label="Dart"  attributes={{className: "dart_tab"}}>

Code sample coming soon

</TabItem>
<TabItem value="js" label="JavaScript"  attributes={{className: "js_tab "}}>

Code sample coming soon

</TabItem>
<TabItem value="react" label="React"  attributes={{className: "react_tab "}}>

Code sample coming soon

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
let members = group.memberAddresses()
```

</TabItem>
<TabItem value="dart" label="Dart"  attributes={{className: "dart_tab"}}>

Code sample coming soon

</TabItem>
<TabItem value="js" label="JavaScript"  attributes={{className: "js_tab "}}>

Code sample coming soon

</TabItem>
<TabItem value="react" label="React"  attributes={{className: "react_tab "}}>

Code sample coming soon

</TabItem>
</Tabs>

### Add group members

Add new members to an existing group chat using their wallet addresses.

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

Code sample coming soon

</TabItem>
<TabItem value="js" label="JavaScript"  attributes={{className: "js_tab "}}>

Code sample coming soon

</TabItem>
<TabItem value="react" label="React"  attributes={{className: "react_tab "}}>

Code sample coming soon

</TabItem>
</Tabs>

### Remove group members

Remove members from an existing group chat using their wallet addresses.

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

Code sample coming soon

</TabItem>
<TabItem value="js" label="JavaScript"  attributes={{className: "js_tab "}}>

Code sample coming soon

</TabItem>
<TabItem value="react" label="React"  attributes={{className: "react_tab "}}>

Code sample coming soon

</TabItem>
</Tabs>

## Listen for new messages and updates in a group chat

Streams enable real-time monitoring of new messages in a group chat as well as member management activities like adding and removing members. Here's how you can set up a stream for message updates. Refer to this [section](/docs/build/streams.md) for more details on streams.

<Tabs groupId="groupchats">
<TabItem value="rn" label="React Native" attributes={{className: "rn_tab "}}>

```jsx
// Assuming `group` is an existing group chat object
const streamGroupMessages = async (group) => {
  const cancelGroupMessageStream = await group.streamGroupMessages(
    async (message) => {
      console.log(`New message: ${message.content}`);
      // Membership updates
      if (message.contentTypeId === ContentTypes.GroupMembershipChange) {
        await group.sync();
        const addresses = await group.memberAddresses();
        // Get new members
        console.log(addresses); // Example usage of addresses
      }
    },
  );

  // Use cancelGroupMessageStream() to stop listening to group updates
  return cancelGroupMessageStream;
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

Code sample coming soon

</TabItem>
<TabItem value="js" label="JavaScript"  attributes={{className: "js_tab "}}>

Code sample coming soon

</TabItem>
<TabItem value="react" label="React"  attributes={{className: "react_tab "}}>

Code sample coming soon

</TabItem>
</Tabs>

## Listen for new group chats

Monitor the creation of new group chats.

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
    (conversation) => {
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

Keep your conversation list current by streaming updates for both group and individual conversations.

```kotlin
// Stream updates for all conversations, including individual and groups
val conversationsAndGroupsStream = client.conversations.streamAll()

allConversationsStream.collect { grouporconv ->
    println("New or updated group or conversation: ${grouporconv.id}")
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

Code sample coming soon

</TabItem>
<TabItem value="js" label="JavaScript"  attributes={{className: "js_tab "}}>

Code sample coming soon

</TabItem>
<TabItem value="react" label="React"  attributes={{className: "react_tab "}}>

Code sample coming soon

</TabItem>
</Tabs>

## Note on conversations and messages in group chats

It's important to note that all the features and methods described in the [Conversations](/docs/build/conversations) and [Messages](/docs/build/messages) documentation are fully applicable to group chats as well. This includes starting new conversations, checking if an address is on the network, sending messages, and listing existing conversations. XMTP's API design ensures that you can manage group chats with the same ease and flexibility as one-on-one conversations.

This means that whether you're working with individual conversations or group chats, the process for managing them remains consistent, allowing for a unified and streamlined development experience across different types of communication within XMTP.
