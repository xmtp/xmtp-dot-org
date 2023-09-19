---
sidebar_label: Local-first cache
sidebar_position: 1.5
description: "If you're building a production-grade app, be sure to use a local-first architecture to help you build a performant app."
---

# Use local-first architecture

If you're building a production-grade app, be sure to use a local-first architecture to help you build a performant app. Using this local-first architecture, the client prioritizes using the local cache on the device where it’s running.

For example, use the XMTP SDK to initially retrieve existing message data from the XMTP network and place it in the local cache. Asynchronously load new and updated message data as needed. Build your app to get message data from the local cache.

Here’s an overview of how your app frontend, local cache, client SDK, and the XMTP network work together in this local-first approach:

import localfirst from '/docs/build/img/local-first-arch.jpeg';

<img src={localfirst} style={{width:"450px"}}/>

- When building a web app with the [React SDK](https://github.com/xmtp/xmtp-web/tree/main/packages/react-sdk), the local-first architecture is automatically provided by the SDK.

- When building a web app with the [xmtp-js SDK](https://github.com/xmtp/xmtp-js), you can use the browser `localStorage` as the local cache to store encrypted data, decrypting data each time before display. You might also consider [using Dexie to manage your web app's local data](#manage-local-data-with-dexie-in-a-web-app-built-with-xmtp-js).

- When building native iOS and Android mobile apps, you can use the device's encrypted container as the local cache to store decrypted data.

For more performance best practices, see [Optimize performance of your app](/docs/get-featured)

## Manage local data with Dexie in a web app built with xmtp-js

You can significantly improve your web app's performance by leveraging local data storage. Particularly in the context of loading messages, using a local cache can result in a 10x performance increase compared to solely relying on a network-based data source.

This guide provides a walkthrough on managing local data storage using the Dexie.js library in a web app built with the [xmtp-js SDK](https://github.com/xmtp/xmtp-js). Dexie.js is a minimalistic wrapper for IndexedDB, a low-level API for client-side storage of significant amounts of structured data.

import ReactPlayer from 'react-player'

#### Experimental playground 🎲

For a hands-on experience, check out the React Playground, built with the xmtp-js SDK:

[GitHub repo](https://github.com/xmtp/xmtp-react-playground) | [Live version](https://xmtp.github.io/xmtp-react-playground/#/new)

<div className='wrapper'>
  <ReactPlayer
    className='player'    
     width='100%'
    height='100%'  
    controls 
    muted  
    playing="true" url='/img/localdb.mp4' 
  />
</div>

<br/>

### Step 1: Install libraries

To start, install the necessary libraries:

```bash
npm install dexie dexie-react-hooks
```

### Step 2: Define the database schema

Create a `DB.ts` file and define your database schema. Here's an example of a potential database schema:

:::tip

This file defines the local database schema for our app. Any time we show any
data in the UI, it should come from the database.

:::

```tsx
import Dexie from "dexie";

// Define a conversation interface
export interface Conversation {
  id?: number;
  topic: string;
  title: string | undefined;
  createdAt: Date;
  updatedAt: Date;
}

// Define a message interface
export interface Message {
  id?: number;
  inReplyToID: string;
  conversationTopic: string;
  xmtpID: string;
  senderAddress: string;
  sentByMe: boolean;
  sentAt: Date;
  contentType: {
    authorityId: string;
    typeId: string;
    versionMajor: number;
    versionMinor: number;
  };
  content: any;
  metadata?: { [key: string]: [value: string] };
  isSending: boolean;
}

// Define a message attachment interface
export interface MessageAttachment {
  id?: number;
  messageID: number;
  filename: string;
  mimeType: string;
  data: Uint8Array;
}

// Define a message reaction interface
export interface MessageReaction {
  id?: number;
  reactor: string;
  messageXMTPID: string;
  name: string;
}

// Create a class for the database
class DB extends Dexie {
  // Define tables for the database
  conversations!: Dexie.Table<Conversation, number>;
  messages!: Dexie.Table<Message, number>;
  attachments!: Dexie.Table<MessageAttachment, number>;
  reactions!: Dexie.Table<MessageReaction, number>;

  constructor() {
    super("DB");
    this.version(2).stores({
      // Define the structure and indexes for each table
      conversations: `
      ++id,
      topic,
      title,
      createdAt,
      updatedAt,
      `,
      messages: `
      ++id,
      [conversationTopic+inReplyToID],
      inReplyToID,
      conversationTopic,
      xmtpID,
      senderAddress,
      sentByMe,
      sentAt,
      contentType,
      content
      `,
      attachments: `
      ++id,
      messageID,
      filename,
      mimeType,
      data
    `,
      reactions: `
      ++id,
      [messageXMTPID+reactor+name],
      messageXMTPID,
      reactor,
      name
    `,
    });
  }
}

// Initialize the database and export it
const db = new DB();
export default db;
```

In this schema, we define interfaces for different types of data we want to store: conversations, messages, message attachments, and message reactions. We then create a class for the database that extends Dexie, and within that class, we define the tables and their structure.

### Step 3: Perform database operations

After defining the schema, you can perform various database operations such as adding, updating, and retrieving data.

#### Add messages

When a new message is sent, it's first saved to the local database before being sent to the network.

```jsx
// Create a new message
const message: Message = {
  //Properties
  conversationTopic: stripTopicName(conversation.topic),
  inReplyToID: "",
  xmtpID: "PENDING-" + new Date().toString(),
  senderAddress: client.address,
  sentByMe: true,
  sentAt: new Date(),
  contentType: { ...contentType },
  content: content,
  isSending: true,
};

// Save the message to the database and get its ID
message.id = await db.messages.add(message);
```

#### Update messages

After a message is sent to the network and you receive the decoded message back, update the original message in the database with the ID of the message on the network and set `isSending` to false.

```jsx
// Update the message in the database
await db.messages.update(message.id!, {
  xmtpID: decodedMessage.id,
  sentAt: decodedMessage.sent,
  isSending: false,
});
```

#### Check for existing messages

Before saving a received message, check if it already exists in the database. If the message doesn't exist, save it; otherwise, skip the saving process.

```jsx
// Check if the message already exists in the database
const existing = await db.messages
  .where("xmtpID")
  .equals(decodedMessage.id)
  .first();
```

#### Find a conversation

When you need to find a specific conversation in the `conversations` table, search by the `topic` field.

```jsx
// Find a conversation by topic
return await db.conversations
  .where("topic")
  .equals(stripTopicName(topic))
  .first();
```

#### Update a conversation

When a new message is received, update the `updatedAt` timestamp of the related conversation.

```jsx
// Check if the conversation needs to be updated
if (conversation && conversation.updatedAt < updatedAt) {
  // If it does, update the updatedAt timestamp
  await db.conversations.update(conversation, { updatedAt });
}
```

#### Add conversations

When a new conversation is started, it's first saved to the local database.

```jsx
// Create a new conversation
const conversation: Conversation = {
  /* conversation properties */
  topic: stripTopicName(xmtpConversation.topic),
  title: undefined,
  createdAt: xmtpConversation.createdAt,
  updatedAt: xmtpConversation.createdAt,
};

// Save the conversation to the database and get its ID
conversation.id = await db.conversations.add(conversation);
```

#### Check for existing conversations

Before saving a new conversation, check if it already exists in the database. If the conversation doesn't exist, save it; otherwise, return the existing one.

```jsx
// Check if the conversation already exists in the database
const existing = await db.conversations
  .where("topic")
  .equals(stripTopicName(xmtpConversation.topic))
  .first();
```

### Step 4: Load initial data

To load initial data when the application starts, use the `useConversations` function. This function fetches conversations from an XMTP client, saves these conversations to the local database (if they're not already stored), and returns an array of all conversations.

#### Define functions to save conversations and messages

Next, define two functions: `saveConversation` and `saveMessage`. These functions should take an XMTP conversation or message as an argument, check if it already exists in the local database, and if it doesn't, save it to the database:

```jsx
async function saveConversation(xmtpConversation: ConversationType) {
  const existing = await db.conversations
    .where("topic")
    .equals(stripTopicName(xmtpConversation.topic))
    .first();
  if (!existing) {
    const conversation: Conversation = {
      /* conversation properties */
    };
    conversation.id = await db.conversations.add(conversation);
    return conversation;
  }
  return existing;
}

async function saveMessage(
  client: XMTP.Client,
  conversation: Conversation,
  xmtpMessage: XMTP.Message,
) {
  const decodedMessage = await client.messages.decode(xmtpMessage);
  const existing = await db.messages
    .where("xmtpID")
    .equals(decodedMessage.id)
    .first();
  if (!existing) {
    const message: Message = {
      /* message properties */
    };
    message.id = await db.messages.add(message);
    return message;
  }
  return existing;
}
```

### Conclusion

Managing local data storage in a web app can be complex. However, it can be much more manageable with Dexie.js and the right strategies for handling database operations. Always remember to handle potential errors and race conditions to ensure the integrity of your data. Now that you've learned these steps, consider trying them out in your own projects. Happy coding!

To learn more about Dexie.js, see [Getting Started with Dexie.js](https://dexie.org/docs/Tutorial/Getting-started).
