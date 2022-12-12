---
sidebar_label: Filter conversations
sidebar_position: 3
---

# Filter conversations using conversation IDs and metadata

With XMTP, a conversation is a set of messages sent between two blockchain account addresses (addresses). Two addresses can have multiple ongoing conversations.

**Optionally**, you can assign an ID and metadata to a conversation to use as conversation filters in your app.

For example, you can use conversation IDs and metadata to filter conversations by:

* An app  
Filter to display only conversations created by a specific app

* A message type  
Filter to display only conversations that are notifications or alerts, for example.

* A subject line  
Filter to display only conversations with a specific subject line, as in email

* An NFT  
Filter to display only conversations about an NFT, such as price negotiations or shipping instructions

Conversation IDs are different from [content types](/docs/dev-concepts/content-types). Using a custom content type does not require that you use conversation IDs.

Use this tutorial to learn how to use conversation IDs and metadata to filter conversations in your app.

Conversation IDs and metadata are **not required**. Using conversation IDs affects the user experience in certain apps built with XMTP, so implement them only if you have a strategic need to filter conversations.

For example, when you set an ID for a conversation between two users, if they are messaging using multiple apps built with XMTP, they may see multiple conversations between their addresses. To learn how to address this scenario, see [Label conversations](label-conversations).


## Set a conversation ID

Set the `conversationId` when creating a conversation. `conversationId` values are private and encrypted.

:::caution Use a unique conversation ID

As a best practice, start your `conversationId` with a domain that is unique to your app to help avoid collisions between your app and other apps on the XMTP network.

:::

This example sets `mydomain.xyz/notif` as the `conversationId` when creating a conversation with recipient address `0x3F11b27F323b62B159D2642964fa27C46C841897`:

```js showLineNumbers
// Start a scoped conversation with ID mydomain.xyz/notif
const conversation1 = await xmtp.conversations.newConversation(
  '0x3F11b27F323b62B159D2642964fa27C46C841897',
  {
    conversationId: 'mydomain.xyz/notif',
  }
)
```

This `conversationId` indicates that these conversations are notification messages created by `mydomain.xyz`, for example. The `mydomain.xyz/notif` conversation ID can then be used to display only notification messages created by the app.


## Set conversation metadata

In addition to setting a conversation ID when creating a conversation, you can set metadata to use as an additional filter or to assign useful context to the conversation. Conversation metadata is private and encrypted.

This example sets `mydomain.xyz/message` as the `conversationId`, indicating that these conversations are messages. In addition, the example sets a conversation metadata `nickname` value to `example`.

You can then use this conversation ID and metadata to display only messages created by your app and surface a conversation label based on the `nickname` value, for example.

```js showLineNumbers
// Start a scoped conversation with ID mydomain.xyz/message and add some metadata
const conversation2 = await xmtp.conversations.newConversation(
  '0x3F11b27F323b62B159D2642964fa27C46C841897',
  {
    conversationId: 'mydomain.xyz/message',
    metadata: {
      nickname: 'example',
    },
  }
)
```


## Filter conversations by ID and metadata

Now that you've set a conversation ID and metadata, you can use them to filter conversations in your app.

1. Get all of the conversations, as shown in lines 1-2.

2. Filter by the domain value in your `conversationId`, `mydomain.xyz/` for example, to return only conversations created by your app, as shown in lines 3-8.

3. You can further filter by the rest of the `conversationId` and metadata. For example, filter by `notif` to display only notification messages, as shown in lines 10-14.

4. You can also separately filter by `message` and use the metadata `nickname` value as needed in your app, as shown in lines 15-18.

```js showLineNumbers
// Get all the conversations
const conversations = await xmtp.conversations.list()
// Filter for conversations from your application
const myAppConversations = conversations.filter(
  (convo) =>
    convo.context?.conversationId &&
    convo.context.conversationId.startsWith('mydomain.xyz/')
)

for (const conversation of myAppConversations) {
  const conversationId = conversation.context?.conversationId
  if (conversationId === 'mydomain.xyz/notif') {
    await conversation.send('notif')
  }
  if (conversationId === 'mydomain.xyz/message') {
    await conversation.send('message')
    console.log(conversation.context?.metadata.nickname)
  }
}
```


## Learn more

To learn about how a Lens app uses and filters by a conversation ID, see [Build key XMTP chat features in a Lens app](build-key-xmtp-chat-features-in-a-lens-app).

To learn more about conversation topics, see [XMTP V2 topics and message presentation flow](/docs/dev-concepts/architectural-overview#xmtp-v2-topics-and-message-presentation-flow).
