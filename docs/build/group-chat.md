---
sidebar_label: Group chat
sidebar_position: 4
description: Learn how to create, list, and manage group chats with XMTP
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# Build group chat with XMTP

![Status](https://img.shields.io/badge/Project_status-Alpha-orange)

:::caution

This project is in **Alpha** status and ready for you to experiment with. However, we do not recommend using **Alpha** software in production apps. Software in this status is likely to change based on feedback.

:::

Secure group chats are an important part of every messaging app. In this guide, we delve into the essentials of using XMTP for creating secure group chats. From the initial steps of starting a new group chat, listing and caching conversations for quick access, to advanced topics like managing group members and synchronizing message history data across devices.

## Create a group chat

Initiate a new group chat with a list of specified addresses. To create a group, the recipient must have already started their client at least once on the XMTP network.

<Tabs groupId="groupchats">
<TabItem value="rn" label="React Native" attributes={{className: "rn_tab "}}>

```jsx
const group = await client.conversations.newGroup(
  [walletAddress1, walletAddress2],
  // Set permissions for the group. Options include "creator_admin" where only the creator has admin rights, or "everyone_admin" where all members are admins.
  { permissions: "creator_admin" },
);
```

</TabItem>
<TabItem value="kotlin" label="Kotlin" attributes={{className: "kotlin_tab"}}>

```kotlin
val group = client.conversations.newGroup(listOf(walletAddress1, walletAddress2),
  // Set permissions for the group. Options include "creator_admin" where only the creator has admin rights, or "everyone_admin" where all members are admins.
  permissions = "creator_admin"
)
```

</TabItem>
<TabItem value="swift" label="Swift"  attributes={{className: "swift_tab"}}>

```swift
let group = try await client.conversations.newGroup(with: [walletAddress1, walletAddress2],
// Set permissions for the group. Options include "creator_admin" where only the creator has admin rights, or "everyone_admin" where all members are admins.
permissions: "creator_admin")
```

</TabItem>
<TabItem value="dart" label="Dart"  attributes={{className: "dart_tab"}}>

The [Flutter SDK](https://github.com/xmtp/xmtp-flutter) is being deprecated. For information about alternative solutions or how to contribute to maintaining this SDK, please join the XMTP Discord.

</TabItem>
<TabItem value="js" label="JavaScript"  attributes={{className: "js_tab "}}>

At present, the JavaScript SDK lacks support for Group Chat functionalities. Nevertheless, for those looking to integrate backend features, the CLI provides a viable solution, as detailed in [this repository](https://github.com/xmtp/libxmtp/tree/main/examples/cli). For practical application, an example implementation is available on [Replit](https://replit.com/@neekolas/Groups-Nodejs-Client#src/index.ts). To explore group functionalities further, refer to the comprehensive [Token Gated Group Chat Tutorial](/docs/tutorials/token-gated-group-chat).

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
//Get the updated group list
let groups = try await client.conversations.groups()
```

List all conversations for both group and individual conversations

```swift
let groups = try await client.conversations.list(includeGroups: true)
```

</TabItem>
<TabItem value="dart" label="Dart"  attributes={{className: "dart_tab"}}>

The [Flutter SDK](https://github.com/xmtp/xmtp-flutter) is being deprecated. For information about alternative solutions or how to contribute to maintaining this SDK, please join the XMTP Discord.

</TabItem>
<TabItem value="js" label="JavaScript"  attributes={{className: "js_tab "}}>

At present, the JavaScript SDK lacks support for Group Chat functionalities. Nevertheless, for those looking to integrate backend features, the CLI provides a viable solution, as detailed in [this repository](https://github.com/xmtp/libxmtp/tree/main/examples/cli). For practical application, an example implementation is available on [Replit](https://replit.com/@neekolas/Groups-Nodejs-Client#src/index.ts). To explore group functionalities further, refer to the comprehensive [Token Gated Group Chat Tutorial](/docs/tutorials/token-gated-group-chat).

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

The [Flutter SDK](https://github.com/xmtp/xmtp-flutter) is being deprecated. For information about alternative solutions or how to contribute to maintaining this SDK, please join the XMTP Discord.

</TabItem>
<TabItem value="js" label="JavaScript"  attributes={{className: "js_tab "}}>

At present, the JavaScript SDK lacks support for Group Chat functionalities. Nevertheless, for those looking to integrate backend features, the CLI provides a viable solution, as detailed in [this repository](https://github.com/xmtp/libxmtp/tree/main/examples/cli). For practical application, an example implementation is available on [Replit](https://replit.com/@neekolas/Groups-Nodejs-Client#src/index.ts). To explore group functionalities further, refer to the comprehensive [Token Gated Group Chat Tutorial](/docs/tutorials/token-gated-group-chat).

</TabItem>
</Tabs>

## Messages

To ensure your application has the latest group chat details, including member list and the most recent messages, it's crucial to periodically synchronize each group chat. This can be particularly important after joining a group, adding new members, or sending messages.

### Check if a user can message a group

Determine if a user has the permissions to message a specific group.

```jsx
const canMessage = await group.canGroupMessage([
  caro.address,
  alix.address,
  "0xNewAddress",
]);
```

### Send a message in a group chat

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

The [Flutter SDK](https://github.com/xmtp/xmtp-flutter) is being deprecated. For information about alternative solutions or how to contribute to maintaining this SDK, please join the XMTP Discord.

</TabItem>
<TabItem value="js" label="JavaScript"  attributes={{className: "js_tab "}}>

At present, the JavaScript SDK lacks support for Group Chat functionalities. Nevertheless, for those looking to integrate backend features, the CLI provides a viable solution, as detailed in [this repository](https://github.com/xmtp/libxmtp/tree/main/examples/cli). For practical application, an example implementation is available on [Replit](https://replit.com/@neekolas/Groups-Nodejs-Client#src/index.ts). To explore group functionalities further, refer to the comprehensive [Token Gated Group Chat Tutorial](/docs/tutorials/token-gated-group-chat).

</TabItem>
</Tabs>

### Load messages

Loading messages is done similarly to how the xmtp handles messages. If you want to learn more please visit [messages](/docs/build/messages/).

<Tabs groupId="groupchats">
<TabItem value="rn" label="React Native" attributes={{className: "rn_tab "}}>

```jsx
await group.messages();
```

</TabItem>
<TabItem value="kotlin" label="Kotlin" attributes={{className: "kotlin_tab"}}>

```kotlin
group.messages();
```

</TabItem>
<TabItem value="swift" label="Swift"  attributes={{className: "swift_tab"}}>

```swift
try await group.messages();
```

</TabItem>
<TabItem value="dart" label="Dart"  attributes={{className: "dart_tab"}}>

The [Flutter SDK](https://github.com/xmtp/xmtp-flutter) is being deprecated. For information about alternative solutions or how to contribute to maintaining this SDK, please join the XMTP Discord.

</TabItem>
<TabItem value="js" label="JavaScript"  attributes={{className: "js_tab "}}>

At present, the JavaScript SDK lacks support for Group Chat functionalities. Nevertheless, for those looking to integrate backend features, the CLI provides a viable solution, as detailed in [this repository](https://github.com/xmtp/libxmtp/tree/main/examples/cli). For practical application, an example implementation is available on [Replit](https://replit.com/@neekolas/Groups-Nodejs-Client#src/index.ts). To explore group functionalities further, refer to the comprehensive [Token Gated Group Chat Tutorial](/docs/tutorials/token-gated-group-chat).

</TabItem>
</Tabs>

:::caution Group chats are per installation
Group chats in XMTP are tied to each installation. This means that while you can access your group chats on multiple devices, the message history is specific to the device where the chat was started. Therefore, when you log in on a new device, you'll see ongoing conversations but only new messages will appear. We are working to improve this feature for better cross-device synchronization.
:::

## Manage group chat members

You can list, add and remove members from a group chat. Only the creator of the group chat has the permissions to add or remove members. This restriction ensures that only authorized individuals can modify the participant list.

<Tabs groupId="groupchats">
<TabItem value="rn" label="React Native" attributes={{className: "rn_tab "}}>

Retrieve a list of wallet addresses for all members in the group chat

```jsx
const members = await group.memberAddresses();
```

Add new members to an existing group chat using their wallet addresses.

```jsx
await group.addMembers([walletAddress]);
```

Determine which wallet address added the current user to a group.

```tsx
const addedByAddress = await group.addedByAddress();
```

Check if its admin

```tsx
const isAdmin = await group.isAdmin();
```

Remove members from an existing group chat using their wallet addresses.

```jsx
await group.removeMembers([walletAddress]);
```

</TabItem>
<TabItem value="kotlin" label="Kotlin" attributes={{className: "kotlin_tab"}}>

Retrieve a list of wallet addresses for all members in the group chat

```kotlin
val members = group.memberAddresses()
```

Add new members to an existing group chat using their wallet addresses.

```kotlin
group.addMembers(listOf(walletAddress))
```

This section explains how to determine which wallet address added the current user to a group.

```kotlin
val addedByAddress = group.addedByAddress();
```

Check if its admin

```kotlin
val isAdmin = group.isAdmin();
```

Remove members from an existing group chat using their wallet addresses.

```kotlin
group.removeMembers(listOf(walletAddress))
```

</TabItem>
<TabItem value="swift" label="Swift"  attributes={{className: "swift_tab"}}>

Retrieve a list of wallet addresses for all members in the group chat

```swift
let members = group.memberAddresses()
```

Add new members to an existing group chat using their wallet addresses.

```swift
try await group.addMembers(addresses: [walletAddress])
```

This section explains how to determine which wallet address added the current user to a group.

```swift
try await group.addedByAddress();
```

Check if its admin

```swift
try await group.isAdmin();
```

Remove members from an existing group chat using their wallet addresses.

```swift
try await group.removeMembers(addresses: [walletAddress])
```

</TabItem>
<TabItem value="dart" label="Dart"  attributes={{className: "dart_tab"}}>

The [Flutter SDK](https://github.com/xmtp/xmtp-flutter) is being deprecated. For information about alternative solutions or how to contribute to maintaining this SDK, please join the XMTP Discord.

</TabItem>
<TabItem value="js" label="JavaScript"  attributes={{className: "js_tab "}}>

At present, the JavaScript SDK lacks support for Group Chat functionalities. Nevertheless, for those looking to integrate backend features, the CLI provides a viable solution, as detailed in [this repository](https://github.com/xmtp/libxmtp/tree/main/examples/cli). For practical application, an example implementation is available on [Replit](https://replit.com/@neekolas/Groups-Nodejs-Client#src/index.ts). To explore group functionalities further, refer to the comprehensive [Token Gated Group Chat Tutorial](/docs/tutorials/token-gated-group-chat).

</TabItem>
</Tabs>

## Manage group chat names

Group chats in XMTP can have names to help users identify them easily. Here's how to manage these names:

<Tabs groupId="groupchats">
<TabItem value="rn" label="React Native" attributes={{className: "rn_tab "}}>

To get the current name of a group chat:

```jsx
const groupName = await group.groupName();
```

To update the name of a group chat:

```jsx
await group.updateGroupName("New Group Name");
```

</TabItem>
</Tabs>

_Remember to do `await group.sync()` synchronizing the group's data including the name_

## Listen for new messages and updates

Streams enable real-time monitoring of new messages in a group chat as well as member management activities like adding and removing members. Here's how you can set up a stream for message updates. Refer to this [section](/docs/build/streams.md) for more details on streams.

<Tabs groupId="groupchats">
<TabItem value="rn" label="React Native" attributes={{className: "rn_tab "}}>

List for messages specific to a group chat

```jsx
// Assuming `group` is an existing group chat object
const streamGroupMessages = async (group) => {
  const cancelGroupMessageStream = await group.streamGroupMessages(
    async (message) => {
      console.log(`New message: ${message.content}`);
      // Membership updates
      if (message.contentTypeId === ContentTypes.GroupMembershipChange) {
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

And for streaming all conversations, including individual and groups:

```jsx
const streamAllGroupMessages = async (client) => {
  const allConvos = [];
  const cancelStreamAllGroupMessages =
    await client.conversations.streamAllGroupMessages(async (message) => {
      console.log(`New message: ${message.content}`);
    });
  // Use cancelStreamAllGroupMessages() to stop listening to all conversation updates
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

The [Flutter SDK](https://github.com/xmtp/xmtp-flutter) is being deprecated. For information about alternative solutions or how to contribute to maintaining this SDK, please join the XMTP Discord.

</TabItem>
<TabItem value="js" label="JavaScript"  attributes={{className: "js_tab "}}>

At present, the JavaScript SDK lacks support for Group Chat functionalities. Nevertheless, for those looking to integrate backend features, the CLI provides a viable solution, as detailed in [this repository](https://github.com/xmtp/libxmtp/tree/main/examples/cli). For practical application, an example implementation is available on [Replit](https://replit.com/@neekolas/Groups-Nodejs-Client#src/index.ts). To explore group functionalities further, refer to the comprehensive [Token Gated Group Chat Tutorial](/docs/tutorials/token-gated-group-chat).

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

The [Flutter SDK](https://github.com/xmtp/xmtp-flutter) is being deprecated. For information about alternative solutions or how to contribute to maintaining this SDK, please join the XMTP Discord.

</TabItem>
<TabItem value="js" label="JavaScript"  attributes={{className: "js_tab "}}>

At present, the JavaScript SDK lacks support for Group Chat functionalities. Nevertheless, for those looking to integrate backend features, the CLI provides a viable solution, as detailed in [this repository](https://github.com/xmtp/libxmtp/tree/main/examples/cli). For practical application, an example implementation is available on [Replit](https://replit.com/@neekolas/Groups-Nodejs-Client#src/index.ts). To explore group functionalities further, refer to the comprehensive [Token Gated Group Chat Tutorial](/docs/tutorials/token-gated-group-chat).

</TabItem>
</Tabs>

## Manage group member consent

With XMTP, in addition to adding and removing members from a group chat, you can also manage permissions that control who is allowed or denied access to the group. Consent is crucial for maintaining control over group interactions and ensuring that only authorized members can participate. To learn more, see [Allow/block](/docs/build/user-consent).

### Allow and deny group access

You can explicitly allow or deny members' access to a group chat. This is particularly useful in scenarios where group membership needs to be tightly controlled.

<Tabs groupId="groupchats">
<TabItem value="rn" label="React Native" attributes={{className: "rn_tab "}}>

```jsx
// Allow a member to access a group
await group.allowMembers([walletAddress]);

// Deny a member's access to a group
await group.denyMembers([walletAddress]);
```

</TabItem>
</Tabs>

### Check if a group is allowed or denied

You can check if a group is allowed or denied for a member. This method helps manage user experiences and access based on their group status.

<Tabs groupId="groupchats">
<TabItem value="rn" label="React Native" attributes={{className: "rn_tab "}}>

```jsx
// Check if a group is allowed for a member
const isAllowed = await group.isGroupAllowed(walletAddress);

// Check if a group is denied for a member
const isDenied = await group.isGroupDenied(walletAddress);
```

</TabItem>
</Tabs>

## Synchronize group chats

XMTP's sync methods bring current data from the network and update the local database.

- **After signing in**: Immediately update group conversation data.
- **Periodically**: Keep data current based on your app's requirements.
- **After receiving a notification**: Reflect changes in group membership prompted by notifications.

### `syncGroups()`

<Tabs groupId="groupchats">
<TabItem value="rn" label="React Native" attributes={{className: "rn_tab "}}>

```jsx
// List groups without syncing with the network
let groups = await client.conversations.listGroups(true);
// groups length might be 0 if not synced after group creation
// Sync groups and list again
await client.conversations.syncGroups();
groups = await client.conversations.listGroups(true);
console.log(groups.length); // groups length reflects the actual number of groups
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

The [Flutter SDK](https://github.com/xmtp/xmtp-flutter) is being deprecated. For information about alternative solutions or how to contribute to maintaining this SDK, please join the XMTP Discord.

</TabItem>
<TabItem value="js" label="JavaScript"  attributes={{className: "js_tab "}}>

At present, the JavaScript SDK lacks support for Group Chat functionalities. Nevertheless, for those looking to integrate backend features, the CLI provides a viable solution, as detailed in [this repository](https://github.com/xmtp/libxmtp/tree/main/examples/cli). For practical application, an example implementation is available on [Replit](https://replit.com/@neekolas/Groups-Nodejs-Client#src/index.ts). To explore group functionalities further, refer to the comprehensive [Token Gated Group Chat Tutorial](/docs/tutorials/token-gated-group-chat).

</TabItem>
</Tabs>

### `sync()`

This method is used to synchronize specific data for a single group, such as new messages and membership changes. It ensures that the group's data is up to date with the latest changes from the network.

<Tabs groupId="groupchats">
<TabItem value="rn" label="React Native" attributes={{className: "rn_tab "}}>

```jsx
// Assume group is an existing group chat object
await group.sync(); // Synchronizes the group's messages and members
// Fetch messages without network sync
const messages = await group.messages(true);
console.log(messages.length); // Shows messages fetched from local data
```

</TabItem>
</Tabs>

## Note on conversations and messages in group chats

It's important to note that all the features and methods described in [Conversations](/docs/build/conversations) and [Messages](/docs/build/messages) are fully applicable to group chats as well. This includes starting new conversations, checking if an address is on the network, sending messages, and listing existing conversations. XMTP's API design ensures that you can manage group chats with the same ease and flexibility as one-on-one conversations.
