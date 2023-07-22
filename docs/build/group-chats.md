---
sidebar_label: Groups
sidebar_position: 8
description: Follow these guidelines to create group chats
---

# Build group chat with XMTP

import Experimental from "@site/src/components/Experimental/index.md";

:::caution Important
This feature is in **alpha** status and ready for you to start experimenting with. However, we do **not** recommend using alpha software in production apps. The feature is available on the `beta` branch only, but we're excited to share it with you and get your feedback.

:::

```bash
npm i --save @xmtp/xmtp-js@9.4.0-beta.1
```

- `GroupConversation` is similar to `ConversationV1` or `ConversationV2` provided by the SDK. These conversations are just a way to send and receive messages.
- `GroupChat` is a wrapper around `GroupConversation` that knows about things like group chat titles, keeping the group chat member list in sync, and basically handling any richer features beyond just sending and receiving messages.

<Experimental />

### Enable group chat for your Client

The first step is to enable group chat for your Client:

```jsx
// You'll want to replace this with a wallet from your application
const signer = Wallet.createRandom(); //wallet implements signer interface
// Create the client with your wallet. This will connect to the XMTP development network by default
const xmtp = await Client.create(signer, { env: "dev" });
xmtp.enableGroupChat();
```

This enables the following capabilities required for group chat:

- The client will be able to create group chats
- Group chats will be present in `client.conversations.list()`
- The client will understand group chat codecs such as `GroupChatMemberAdded` and `GroupChatTitleChanged`

### Create a group chat

Enable a user to create a group chat using `newGroupConversation` and adding member addresses to it:

```jsx
const memberAddresses = [
  "0x194c31cAe1418D5256E8c58e0d08Aee1046C6Ed0",
  "0x937C0d4a6294cdfa575de17382c7076b579DC176",
];
const groupConversation =
  xmtp.conversations.newGroupConversation(memberAddresses);
```

Assuming the other members of the group chat have clients with group chat enabled, they'll see the group chat in their conversation list.

### Send a message to a group chat

Enable a user to send a message to a group chat the same way you send messages to a 1:1 conversation:

```jsx
await groupConversation.send("hello everyone");
```

### Load group chats

When you enabled group chat for your Client, you enabled group chats to be returned in `conversations.list()`:

```jsx
const conversations = await xmtp.conversations.list();
const conversation = conversations[0];

console.log(conversation.isGroup); // => true when it's a group conversation
```

### Enable a member to change the group chat title

Enable a member of a group chat to change the group chat title by sending a message with the `GroupChatTitleChanged` content type:

```jsx
import { ContentTypeGroupChatTitleChanged } from '@xmtp/xmtp-js'

const
```

### Manage group state with the `GroupChat` class

Use the `GroupChat` class to keep track of group state, such as the group chat title and member list:

```jsx
const conversations = await xmtp.conversations.list();
const conversation = conversations[0]; // assume this conversation is a group conversation

const groupChat = new GroupChat(xmtp, conversation);
```

You can also use the `GroupChat` class to change the group chat title and member list.

### Change a group chat title

To change a group chat title, call `changeTitle` on a `GroupChat` instance:

```jsx
await groupChat.changeTitle("The fun group");
```

This sends a message with the `GroupChatTitleChanged` content type to the group chat that clients can display. Clients can also use the message to update the group chat title on their end.

### Add a group chat member

To add a group chat member, call `addMember` on a `GroupChat` instance:

`await groupChat.addMember('0x194c31cAe1418D5256E8c58e0d08Aee1046C6Ed0')`

This sends an invitation to the recipient address. It also sends a `GroupChatMemberAdded` message to the group chat that clients can display and use to update their group chat member lists.

### Rebuild the group state

To rebuild the group state by replaying all messages in a group chat, call `rebuild()` on an instance of `GroupChat`:

```jsx
const rebuiltAt = new Date();
await groupChat.rebuild();

// You can pass a date to rebuild to only rebuild state since that time
await groupChat.rebuild({ since: rebuiltAt });
```

For example, you'd do this the first time you load the group chat to make sure everything is up to date.

Group state update messages, like `GroupChatTitleChanged` and `GroupChatMemberAdded`, are sent alongside the actual messages sent by group members. This means that to load the current group state, you must traverse the entire group chat history at least once. This is one of the reasons why persisting messages locally is a performance best practice.

FAQ

- Max 32 members (soft constraint, could theoretically be unlimited)
- Hidden members possible (i.e. members can be added without other existing members’ knowledge)
- Members cannot be removed
- No way to leave a group or ignore unwanted conversations
- ContentTypes used to send ‘metamessages’ for setting group chat title (Group title set to ‘Best friends’) and showing changes in membership (e.g. Pol has joined the chat)
- All members can act as admin
