---
sidebar_label: Local DB
sidebar_position: 15
description: Managing Local Data with Dexie in a React Application
---

# Managing Local Data with Dexie in a React Application

The performance of a web application can be significantly improved by leveraging local data storage. Particularly in the context of loading messages, using a local database can result in a 10x performance increase compared to solely relying on a network-based data source. This is because local storage allows for quicker data retrieval, reducing load times and improving the overall user experience.

This guide provides a walkthrough on managing local data storage in a React application using the Dexie.js library. Dexie.js is a minimalistic wrapper for IndexedDB, which is a low-level API for client-side storage of significant amounts of structured data.

import ReactPlayer from 'react-player'

#### Experimental Playground 🎲

For hands-on experience, check out the React Playground.

[GitHub repo](https://github.com/xmtp/xmtp-react-playground) | [Live Version](https://xmtp.github.io/xmtp-react-playground/#/new).

<ReactPlayer width="auto"  url='/img/localdb.mp4' muted playing="true" />

## Step 1: Installing Libraries

To start, install the necessary libraries:

```bash
npm install dexie dexie-react-hooks
```

## Step 2: Defining the Database Schema

Create a **`DB.ts`** file and define your database schema. Here's an example of a potential database schema:

:::success

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
  isGroup: boolean;
  peerAddress: string;
  groupMembers?: string[] | undefined;
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
      isGroup,
      groupMembers,
      peerAddress
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

## Step 3: Database Operations

After defining the schema, you can perform various database operations such as adding, updating, and retrieving data.

### Adding Messages

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

### Updating Messages

After a message is sent to the network and you receive the decoded message back, update the original message in the database with the ID of the message on the network and set **`isSending`** to false.

```jsx
// Update the message in the database
await db.messages.update(message.id!, {
  xmtpID: decodedMessage.id,
  sentAt: decodedMessage.sent,
  isSending: false,
});
```

### Checking for Existing Messages

Before saving a received message, check if it already exists in the database. If the message doesn't exist, save it; otherwise, skip the saving process.

```jsx
// Check if the message already exists in the database
const existing = await db.messages
  .where("xmtpID")
  .equals(decodedMessage.id)
  .first();
```

### Finding a Conversation

When you need to find a specific conversation in the **`conversations`** table, search by the `topic` field.

```jsx
// Find a conversation by topic
return await db.conversations
  .where("topic")
  .equals(stripTopicName(topic))
  .first();
```

### Updating a Conversation

When a new message is received, update the `updatedAt` timestamp of the related conversation.

```jsx
// Check if the conversation needs to be updated
if (conversation && conversation.updatedAt < updatedAt) {
  // If it does, update the updatedAt timestamp
  await conversationMutex.runExclusive(async () => {
    await db.conversations.update(conversation, { updatedAt });
  });
}
```

### Adding Conversations

When a new conversation is started, it's first saved to the local database.

```jsx
// Create a new conversation
const conversation: Conversation = {
  /* conversation properties */
  topic: stripTopicName(xmtpConversation.topic),
  title: undefined,
  createdAt: xmtpConversation.createdAt,
  updatedAt: xmtpConversation.createdAt,
  isGroup: xmtpConversation.isGroup,
  peerAddress: xmtpConversation.peerAddress,
};

// Save the conversation to the database and get its ID
conversation.id = await db.conversations.add(conversation);
```

### Checking for Existing Conversations

Before saving a new conversation, check if it already exists in the database. If the conversation doesn't exist, save it; otherwise, return the existing one.

```jsx
// Check if the conversation already exists in the database
const existing = await db.conversations
  .where("topic")
  .equals(stripTopicName(xmtpConversation.topic))
  .first();
```

## Step 4: Load Initial Data

To load initial data when the application starts, use the **`useConversations`** function. This function fetches conversations from an XMTP client, saves these conversations to the local database (if they're not already stored), and returns an array of all conversations.

### Use Effect Hook to Fetch and Save Conversations

Start by using React's **`useEffect`** hook to run an asynchronous operation when the component mounts. This operation should fetch the list of conversations from the client, and for each conversation, save it to the local database and fetch and save the latest message for the conversation:

```jsx
useEffect(() => {
  (async () => {
    if (!client) return;
    for (const xmtpConversation of await client.conversations.list()) {
      const conversation = await saveConversation(xmtpConversation);
      const latestMessage = (
        await xmtpConversation.messages({
          direction: XMTP.SortDirection.SORT_DIRECTION_DESCENDING,
          limit: 1,
        })
      )[0];
      if (latestMessage) {
        await saveMessage(client, conversation, latestMessage);
      }
    }
  })();
}, []);
```

### Define Functions to Save Conversations and Messages

Next, define two functions: **`saveConversation`** and **`saveMessage`**. These functions should take an XMTP conversation or message as an argument, check if it already exists in the local database, and if it doesn't, save it to the database:

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

### Use Effect Hook to Stream Conversations

Use another **`useEffect`** hook to listen for new conversations in real-time. As new conversations come in, save them to the local database:

```jsx
useEffect(() => {
  (async () => {
    if (!client) return;
    for await (const conversation of await client.conversations.stream()) {
      await saveConversation(conversation);
    }
  })();
}, []);
```

### Fetch Conversations from Local DB

Finally, return the conversations from the local database:

```jsx
return (
  useLiveQuery(async () => {
    return await db.conversations.reverse().sortBy("updatedAt");
  }) || []
);
```

This hook, **`useLiveQuery`**, automatically re-renders the component whenever the data in the local database changes. It is used to fetch all conversations from the database, sort them in reverse order by their updated time, and return the result. If the query returns nothing, an empty array is returned by default.

By loading initial data, you ensure that your application loads instantly on each refresh without crashes and slow loading spinners.

## Step 5: Preventing Race Conditions

Race conditions can occur when multiple operations that read from and write to the same database area are executed in close sequence, leading to inconsistent data. To prevent race conditions, use a mutex (short for "mutual exclusion object"), which ensures that only one operation can happen at a time.

First, install the necessary library:

```bash
npm install async-mutex
```

Then, import and initialize a mutex in your script:

```jsx
// Import the Mutex class from the async-mutex library
import { Mutex } from "async-mutex";

// Initialize a mutex for messages and conversations
const messageMutex = new Mutex();
const conversationMutex = new Mutex();
```

Now, we can use these mutexes to ensure that only one operation happens at a time. Here are some examples of how to use a mutex:

### When Updating a Conversation

Wrap the database operation within the **`runExclusive`** method of the mutex instance. This guarantees that no other operation can happen until the current operation is finished:

```jsx
// Check if the conversation needs to be updated
if (conversation && conversation.updatedAt < updatedAt) {
  // If it does, update the updatedAt timestamp
  await conversationMutex.runExclusive(async () => {
    await db.conversations.update(conversation, { updatedAt });
  });
}
```

### When Saving a Conversation

The same applies when saving a new conversation. The operation is wrapped in the **`runExclusive`** method:

```jsx
// Save the conversation to the database
return await conversationMutex.runExclusive(async () => {
  // Check if the conversation already exists in the database
  const existing = await db.conversations
    .where("topic")
    .equals(stripTopicName(xmtpConversation.topic))
    .first();

  // If it doesn't exist, create a new conversation and save it to the database
  if (!existing) {
    const conversation: Conversation = {
      /* conversation properties */
    };
    conversation.id = await db.conversations.add(conversation);
  }

  return existing || conversation;
});
```

Using a mutex in this way helps prevent race conditions and maintain the integrity of your data.

## Conclusion

Managing local data storage in a React application can be complex. However, with Dexie.js and the right strategies for handling database operations, it can be much more manageable. Always remember to handle potential errors and race conditions to ensure the integrity of your data. Now that you've learned these steps, consider trying them out in your own projects. Happy coding!

- For more information on using Dexie.js, check out the **[official documentation](https://dexie.org/docs/Tutorial/Getting-started)**.
