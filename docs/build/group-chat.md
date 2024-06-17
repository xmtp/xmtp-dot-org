---
sidebar_label: Group chat
sidebar_position: 4
description: Learn how to build group chat with XMTP
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# Build group chat with XMTP

Secure group chat is an important part of every messaging app. In this guide, we cover the essentials of building group chat using XMTP, from the initial steps of ensuring that potential members have v3 identities and starting a new group chat to managing membership and synchronizing group chat details.

XMTP group chat is based on the [MLS specification](https://www.rfc-editor.org/rfc/rfc9420.html) and can include anywhere from 1 to 400 members.

To learn about group chat security and encryption, see [Group Chat](/docs/concepts/v3/group-chat.md) concepts.

## Overview

Here are some key points to understand before building group chat with XMTP.

### Group chat keys work per app installation

An app installation is registered to a user. Group chat messages a user sends using an app installation are encrypted so only that app installation can decrypt them. This is because keys are generated to work per app installation. App installations do not share the same keys.

To learn more, see [Installations](/docs/concepts/v3/identity#installations).

### ⚠️ Important: Actions that make a local database inaccessible

Because group chat keys work per app installation, there are user actions that can make an app installation’s local database inaccessible to other app installations.

Here are the actions:

- A user logs out of an installation of your app and logs into a different app installation on their device.
- A user deletes an installation of your app from their device.

As a result of either of these actions, the user will lose access to the local database for the app installation, which includes all group chat messages they sent using the installation of your app on their device.

As an app developer, this concept is important to understand and clearly communicate to your users. For example, you might consider using this language:

> If you log out of &lt;app name&gt; and log into a different app on this device, or delete &lt;app name&gt; from this device, you will lose access to all group chat messages you sent using this installation of &lt;app name&gt; on this device.

### Web support for group chat

The XMTP [JavaScript SDK](https://github.com/xmtp/xmtp-js) and [React SDK](https://github.com/xmtp/xmtp-web/tree/main/packages/react-sdk) don’t yet provide web support for group chat. However, if you want to integrate group chat backend support, you can use the [**experimental** Node SDK](https://www.npmjs.com/package/@xmtp/mls-client).

Web support for group chat is lagging due to technical challenges related to integrating WebAssembly (WASM) and its extensions. WASM sandbox cannot access the operating system directly, which is necessary for tasks like file reads. WASI extends WASM to allow operating system interaction, but it comes with its own set of challenges. For example, current WASI 0.2 has no built-in way to handle asynchronous operations effectively. The team is working toward solutions. 

### Push notifications

Group chat supports push notifications. To learn more, see the [Notifications with XMTP](/docs/build/notifications/notifications.md) section.
 
## XMTP V3 SDK example apps

If you’d like to dive right into exploring the code, check out the example apps in these XMTP V3 SDKs that support group chat:

- XMTP React Native SDK [Example](https://github.com/xmtp/xmtp-react-native/tree/main/example)
- XMTP Android SDK [Example](https://github.com/xmtp/xmtp-android/tree/main/example)
- XMTP iOS SDK [Example](https://github.com/xmtp/xmtp-ios/tree/main/XMTPiOSExample)

## Create a client that supports group chat

By default, XMTP V3 clients support XMTP V2 messages, which include direct messages only. 

If you want your app to support group chat offered by V3, you must explicitly configure your client to support group chat.

`appContext` is used for Android only. It is required if `enableV3` is `true`.

`dbEncryptionKey` is optional. For Android, if not provided, a key is created and stored for you. For iOS, if not provided, the database remains unencrypted.

<Tabs groupId="groupchats">
<TabItem value="rn" label="React Native" attributes={{className: "rn_tab"}}>

```jsx
XMTP.Client.create(signer, {
  env: "production,
  enableV3: true', DEFAULT false
  dbDirectory: "mydbdir", OPTIONAL pass in any dir otherwise, default is `xmtp_db`
  dbEncryptionKey: 32bytearray,
})
```

</TabItem>
<TabItem value="kotlin" label="Kotlin" attributes={{className: "kotlin_tab"}}>

```kotlin
val client =
    Client().create(
        account = wallet (that implements a SigningKey),
        options = ClientOptions(
            ClientOptions.Api(XMTPEnvironment.PRODUCTION, true),
            enableV3 = true, DEFAULT false
            appContext = context, REQUIRED if enableV3 is true, so it can access the DB
            dbDirectory = "mydbdir", OPTIONAL pass in any dir otherwise, default is `xmtp_db`
            dbEncryptionKey = 32bytearray, OPTIONAL If not provided, we create and store one for you
        )
    )
```

</TabItem>
<TabItem value="swift" label="Swift"  attributes={{className: "swift_tab"}}>

```swift
let client = try await Client.create(
				account: wallet (that implements a SigningKey),
				options: .init(
					api: .init(env: .production, isSecure: true),
					enableV3: true, DEFAULT false
					dbDirectory: "mydir", OPTIONAL Otherwise default is the documents directory as `xmtp_db`
					dbEncryptionKey: key, OPTIONAL Otherwise null
				)
			)
```

</TabItem>
<TabItem value="node" label="Node"  attributes={{className: "node_tab"}}>

```tsx
Code sample coming soon
```

</TabItem>
</Tabs>

## Check if a user has a V3 identity

Only users with V3 identities can participate in a group chat. For this reason, the first step to creating a group chat is to check if a potential group member has a V3 identity.

To learn more about V3 identities, see [Multi-wallet Identity in V3](/docs/concepts/v3/identity.md).

<Tabs groupId="groupchats">
<TabItem value="rn" label="React Native" attributes={{className: "rn_tab"}}>

```jsx
const canMessageV3 = await client.canGroupMessage([
  alix.address,
  bo.address,
]);
```

</TabItem>
<TabItem value="kotlin" label="Kotlin" attributes={{className: "kotlin_tab"}}>

```kotlin
val canMessage = client.canMessageV3(listOf(alix.address, bo.address))
```

</TabItem>
<TabItem value="swift" label="Swift"  attributes={{className: "swift_tab"}}>

```swift
let canMessageV3 = try await alixClient.canMessageV3(addresses: [alix.address, bo.address])
```

</TabItem>
<TabItem value="node" label="Node"  attributes={{className: "node_tab"}}>

```tsx
const canMessage = await client.canMessage([
  caro.address,
  alix.address,
  "0xNewAddress",
]);
```

</TabItem>
</Tabs>

## Create a group chat

To create a group chat, each of the specified member addresses must have a V3 identity and have used the identity to start up an app installation that supports group chat.

<Tabs groupId="groupchats">
<TabItem value="rn" label="React Native" attributes={{className: "rn_tab"}}>

```jsx
const group = await client.conversations.newGroup(
    [anotherClient.address],
    // set the permission level for the group. Options include "admin_only", where only the creator is an admin, or "all_members" to make everyone an admin.
    { 
	    permissionLevel: 'admin_only',
	    name: 'Group Name',
	    imageUrlSquare: '<URL>'
    }
  )
```

</TabItem>
<TabItem value="kotlin" label="Kotlin" attributes={{className: "kotlin_tab"}}>

```kotlin
val group = client.conversations.newGroup(listOf(walletAddress1, walletAddress2),
  // Set permissions for the group. Options include "ADMIN_ONLY" where only the creator has admin rights, or "ALL_MEMBERS" where all members are admins.
  permissions = GroupPermissions.ADMIN_ONLY,
  name = "Group Name",
  imageUrlSquare = "<URL>",
)
```

</TabItem>
<TabItem value="swift" label="Swift"  attributes={{className: "swift_tab"}}>

```swift
let group = try await client.conversations.newGroup(with: [walletAddress1, walletAddress2],
// Set permissions for the group. Options include ".adminOnly" where only the creator has admin rights, or ".allMembers" where all members are admins.
permissions: .adminOnly, name: "Group Name", imageUrlSquare: "<URL>")
```

</TabItem>
<TabItem value="node" label="Node"  attributes={{className: "node_tab"}}>

```tsx
const group = await client.conversations.newConversation(
  [walletAddress1, walletAddress2],
  GroupPermissions.GroupCreatorIsAdmin
);
```

</TabItem>
</Tabs>

:::tip
If a member is using an app installation that doesn’t support group chat, consider sending them a message from your app to let them know how to join the group chat. For example:

>&lt;sender address&gt; added you to a group chat, but you aren't using an app that supports group chat. To join the group chat, use an app that supports group chat, such as &lt;your app name&gt;.
:::

## Get group chats

Get group chats associated with the current client.

:::tip
In this documentation, “group chat” refers to "group chat conversations." As with XMTP direct message conversations, conversations do not include the messages in the conversation.
:::

<Tabs groupId="groupchats">
<TabItem value="rn" label="React Native" attributes={{className: "rn_tab"}}>

```jsx
//First fetch new data from the network
await client.conversations.syncGroups();
//Get the updated group list
const groups =await client.conversations.listGroups();
```

Get group chats and direct message conversations:

```jsx
// List all conversations, including both group and individual
val conversations = client.conversations.listAll()
```

</TabItem>
<TabItem value="kotlin" label="Kotlin" attributes={{className: "kotlin_tab"}}>

```kotlin
//First fetch new data from the network
client.conversations.syncGroups()
//Get the updated group list
val groups = client.conversations.listGroups()
```

Get group chats and direct message conversations:

```kotlin
// List all conversations, including both group and individual
val conversations = client.conversations.list(includeGroups = true)
```

</TabItem>
<TabItem value="swift" label="Swift"  attributes={{className: "swift_tab"}}>

```swift
//Get the updated group list
let groups =try await client.conversations.groups()
```

Get group chats and direct message conversations:

```swift
let groups = try await client.conversations.list(includeGroups: true)
```

</TabItem>
<TabItem value="node" label="Node"  attributes={{className: "node_tab"}}>

```tsx
// sync groups first
await client.conversations.sync();
const groups = await client.conversations.list(options);
```

</TabItem>
</Tabs>

## Check if a user is active in a group chat

Use the `isActive` property to check if the current user is still a participant in a group chat. For example, if a user is removed from a group chat, the group chat will not be active for the user. Use this status to adjust the user’s interface accordingly, such as removing the user’s ability to send messages in the group chat.

<Tabs groupId="groupchats">
<TabItem value="rn" label="React Native" attributes={{className: "rn_tab"}}>

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
let isActive = try group.isActive()
```

</TabItem>
<TabItem value="node" label="Node"  attributes={{className: "node_tab"}}>

```tsx
const isActive = group.isActive;
```

</TabItem>
</Tabs>

## Send a message in a group chat

Group chat supports all message types you can send using direct message conversations, including [Subscription Frames](/docs/tutorials/subscribe-frames), [replies](/docs/build/messages/reply), [reactions](/docs/build/messages/reaction), [attachments](/docs/build/messages/remote-attachment), and [read receipts](/docs/build/messages/read-receipt).

<Tabs groupId="groupchats">
<TabItem value="rn" label="React Native" attributes={{className: "rn_tab"}}>

```jsx
const group =await client.conversations.newGroup([
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
<TabItem value="node" label="Node"  attributes={{className: "node_tab"}}>

```tsx
const group = await client.conversations.newConversation(
  [walletAddress1, walletAddress2],
  GroupPermissions.GroupCreatorIsAdmin
);
await group.send("Hello, group!", ContentTypeText);
```

</TabItem>
</Tabs>

## Get group chat messages

<Tabs groupId="groupchats">
<TabItem value="rn" label="React Native" attributes={{className: "rn_tab"}}>

```jsx
await group.messages();
```

</TabItem>
<TabItem value="kotlin" label="Kotlin" attributes={{className: "kotlin_tab"}}>

```kotlin
val messages = group.messages()
```

</TabItem>
<TabItem value="swift" label="Swift"  attributes={{className: "swift_tab"}}>

```swift
try await group.messages();
```

</TabItem>
<TabItem value="node" label="Node"  attributes={{className: "node_tab"}}>

```tsx
// sync group first
await group.sync();
const messages = group.messages(options);
```

</TabItem>
</Tabs>

## Synchronize group chat details

Calling `sync()` for a group or groups gets any updates since the last sync and adds them to the local database. Be sure to periodically synchronize each group chat to ensure your app has the latest group chat details, including the most recent messages, member list, and group chat details, for example.

Updates are also retrieved and added to the local database when streaming and when the user takes an action.

When your user sends a message, you don’t need to sync with the network for them to see their own message. The message gets written to their local database, and it shows up immediately for them. The same applies when your user creates a group. 

See [⚠️ Important: Actions that make a local database inaccessible](#️important-actions-that-make-a-local-database-inaccessible).

This means that everything XMTP gets from the network for the user is stored in this local database and never needs to be fetched again. Extra syncing isn’t costly as the process won’t fetch data it already has, but this is just an explanation of why syncing isn’t necessary for data created by a user’s own actions.

To learn more, see [Local Database and Syncing](/docs/concepts/v3/group-chat#local-database-and-syncing). 

However, you must sync (or use streaming) to enable **other** users to see the group chats and messages your user created and sent.

### Synchronize group chats

<Tabs groupId="groupchats">
<TabItem value="rn" label="React Native" attributes={{className: "rn_tab"}}>

```jsx
// List groups without syncing with the network
let groups = await client.conversations.listGroups();
// groups length might be 0 if not synced after group creation
// Sync groups and list again
await client.conversations.syncGroups();
groups = await client.conversations.listGroups();
console.log(groups.length); // groups length reflects the actual number of groups
```

Synchronize group chats and direct message conversations:

```jsx
let conversations = await client.conversations.listAll();
```

</TabItem>
<TabItem value="kotlin" label="Kotlin" attributes={{className: "kotlin_tab"}}>

```kotlin
client.conversations.syncGroups()
```

Synchronize group chats and direct message conversations:

```kotlin
// List all conversations, including both group and individual
val conversations = client.conversations.list(includeGroups = true)
```

</TabItem>
<TabItem value="swift" label="Swift"  attributes={{className: "swift_tab"}}>

```swift
try await client.conversations.sync()
```

Synchronize group chats and direct message conversations:

```swift
try await client.conversations.list(includeGroups: true)
```

</TabItem>
<TabItem value="node" label="Node"  attributes={{className: "node_tab"}}>

```tsx
await client.conversations.sync();
```

</TabItem>
</Tabs>

### Synchronize group chat data

Use **`sync()`** to synchronize group chat data, such as new messages or membership changes.

<Tabs groupId="groupchats">
<TabItem value="rn" label="React Native" attributes={{className: "rn_tab"}}>

```jsx
// Assume group is an existing group chat object
await group.sync(); // Synchronizes the group's messages and members
// Fetch messages without network sync
const messages =await group.messages(true);
console.log(messages.length); // Shows messages fetched from local data
```

</TabItem>
<TabItem value="kotlin" label="Kotlin" attributes={{className: "kotlin_tab"}}>

```kotlin
// Assume group is an existing group chat object
group.sync() // Synchronizes the group's messages and members
// Fetch messages without network sync
val messages = group.messages()
println("Messages fetched from local: ${messages}") // Shows messages fetched from local data 
```

</TabItem>
<TabItem value="swift" label="Swift"  attributes={{className: "swift_tab"}}>

```swift
// Assume group is an existing object
try await group.send(content: "sup gang")
try await group.sync // Synchronizes the group's messages and members
// Fetch messages without network sync
try await group.messages() 
// verify contents
print("Test message content: \(testMessage.content())"
```

</TabItem>
<TabItem value="node" label="Node"  attributes={{className: "node_tab"}}>

```tsx
await group.sync();
```

</TabItem>
</Tabs>

## Stream group chats

<Tabs groupId="groupchats">
<TabItem value="rn" label="React Native" attributes={{className: "rn_tab"}}>

```jsx
// Listen for group chat updates
const streamGroups =async (client) => {
const groups = [];
const cancelStreamGroups =await client.conversations.streamGroups(
(group) => {
groups.push(group);
	},
);

// Use cancelStreamGroups() to stop listening to group updates
};
```

Stream group chats and direct message conversations:

```jsx
const streamAllConversations =async (client) => {
const allConvos = [];
const cancelStreamAll =await client.conversations.streamAll(
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

Stream group chats and direct message conversations:

```kotlin
// Stream updates for all conversations, including individual and groups
val conversationsAndGroupsStream = conversations.streamAllMessages(includeGroups = true)

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

Stream group chats and direct message conversations:

```swift
// Stream updates for all conversations, including individual and groups
for try await conversation in client.conversations.streamAll() {
    print("New or updated group or conversation: \(conversations.id)")
}
```

</TabItem>
<TabItem value="node" label="Node"  attributes={{className: "node_tab"}}>

```tsx
const stream = client.conversations.stream()

for await (const group of stream) {
  console.log('New group created', group);
}

// stop stream
stream.stop();
```

</TabItem>
</Tabs>

## Stream messages and updates in group chats

Stream messages and member management updates in group chats, such as adding and removing members:

<Tabs groupId="groupchats">
<TabItem value="rn" label="React Native" attributes={{className: "rn_tab"}}>

```jsx
// Assuming `group` is an existing group chat object
const streamGroupMessages =async (group) => {
const cancelGroupMessageStream =await group.streamGroupMessages(
async (message) => {
      console.log(`New message: ${message.content}`);
      // Membership updates
if (message.contentTypeId === ContentTypes.GroupMembershipChange) {
const addresses =await group.memberAddresses();
        // Get new members
        console.log(addresses); // Example usage of addresses
      }
    },
  );

  // Use cancelGroupMessageStream() to stop listening to group updates
return cancelGroupMessageStream;
};
```

Stream messages in group chats and direct message conversations:

```jsx
const streamAllGroupMessages =async (client) => {
const allConvos = [];
const cancelStreamAllGroupMessages =
await client.conversations.streamAllMessages(
			async (message) => {
      console.log(`New message: ${message.content}`);
    });
  // Use cancelStreamAllGroupMessages() to stop listening to all conversation updates
};
```

</TabItem>
<TabItem value="kotlin" label="Kotlin" attributes={{className: "kotlin_tab"}}>

```kotlin
//First fetch new data from the network
client.conversations.syncGroups()
//Get the updated group list
val groups = client.conversations.streamAllMessages(includeGroups = true)
```

</TabItem>
<TabItem value="swift" label="Swift"  attributes={{className: "swift_tab"}}>

```swift
//Get the updated group list
let groups = try await client.conversations.streamAllMessages(includeGroups: true)
```

</TabItem>
<TabItem value="node" label="Node"  attributes={{className: "node_tab"}}>

Stream messages in group chats, current and future:

```tsx
const stream = client.conversations.streamAllMessages();

for await (const message of stream) {
  console.log('New message received ', message);
}

// stop the stream
stream.stop()
```

Stream messages in a group chat:

```tsx
const stream = group.stream()

for await (const message of stream) {
  console.log('New message received ', message);
}

// stop the stream
stream.stop()
```

</TabItem>
</Tabs>

## Manage group chat metadata

Group chats can have metadata, like names and images. Metadata can help users more easily identify their group chats.

### Get a group chat name

<Tabs groupId="groupchats">
<TabItem value="rn" label="React Native" attributes={{className: "rn_tab"}}>

```jsx
const groupName =await group.groupName();
```

</TabItem>
<TabItem value="kotlin" label="Kotlin" attributes={{className: "kotlin_tab"}}>

```kotlin
Code sample coming soon
```

</TabItem>
<TabItem value="swift" label="Swift"  attributes={{className: "swift_tab"}}>

```swift
Code sample coming soon
```

</TabItem>
<TabItem value="node" label="Node"  attributes={{className: "node_tab"}}>

```tsx
const groupName = group.name;
```

</TabItem>
</Tabs>

### Update a group chat name

<Tabs groupId="groupchats">
<TabItem value="rn" label="React Native" attributes={{className: "rn_tab"}}>

```jsx
await group.updateGroupName("New Group Name");
```

</TabItem>
<TabItem value="kotlin" label="Kotlin" attributes={{className: "kotlin_tab"}}>

```kotlin
Code sample coming soon
```

</TabItem>
<TabItem value="swift" label="Swift"  attributes={{className: "swift_tab"}}>

```swift
Code sample coming soon
```

</TabItem>
<TabItem value="node" label="Node"  attributes={{className: "node_tab"}}>

```tsx
await group.updateName("New Group Name");
```

</TabItem>
</Tabs>
