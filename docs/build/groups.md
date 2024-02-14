---
sidebar_label: Group chats
sidebar_position: 4
description: Learn how to start, list, and cache conversations with XMTP
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# Manage group chats with XMTP

![Status](https://img.shields.io/badge/Reference_implementation_status-Alpha-orange)

Secure group chats are an important part of every messaging app. Learn how to create and manage them with XMTP. Discover how XMTP can enhance your group communication experience.

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
// Use existing list() method
val conversations = client.conversations.list(includeGroups = true)
```

</TabItem>
<TabItem value="swift" label="Swift"  attributes={{className: "swift_tab"}}>

```swift
// List all group chats for the current user
let groups = try await client.conversations.groups()
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

The `isActive` property indicates whether the current user is still a participant in the group chat. If the group chat is not active for the user, it typically means the user has been removed from the group. Developers should use this status to adjust the user interface accordingly. If a group chat is not active for a user, the application should hide or disable functionalities such as sending messages, adding, or removing members. This ensures a a good user experience and prevents actions that are not permissible due to the user's status in the group chat.

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
let isActive = group.isActive
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

Here are the ways that you manage group chat members with XMTP.

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

Code sample expected for Q2 2024

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

Code sample expected for Q2 2024

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
const group = await client.conversations.newGroup([
  walletAddress1,
  walletAddress2,
]);
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
val conversationStream = client.conversations.stream(includeGroups = true)

conversationStream.collect { conversation ->
    println("New or updated conversation: ${conversation.id}")
}
```

</TabItem>
<TabItem value="swift" label="Swift"  attributes={{className: "swift_tab"}}>

Code sample expected for Q2 2024

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
