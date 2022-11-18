---
sidebar_label: Filter and label conversations in your app
sidebar_position: 3
---

# Filter and label conversations in your app using conversation IDs and metadata

With XMTP, a conversation is a set of messages sent between two blockchain account addresses (addresses). Two addresses can have multiple ongoing conversations.

You can assign an ID and other metadata to a conversation to use as conversation filters and labels in your app.

For example, you can use conversation IDs and metadata to filter conversations by:

* An app  
Filter to display only conversations created by an app.

* A message type<!--added this one because it matches the example we show in the code snippets - okay?-->  
Filter to display only conversations that are direct messages or notifications, for example

* A subject line  
Filter to display only conversations with a specific subject line, as in email

* An NFT  
Filter to display only conversations associated with a specific NFT

You can also use conversation IDs and metadata to display conversation labels to provide users with useful information about their conversations.

Use this tutorial to learn how to use conversation IDs and metadata to filter and label conversations in your app.


## Set a conversation ID

Set the `conversationId` when creating a conversation.

:::tip

As a best practice, start your `conversationId` with a domain to help avoid collisions between your app and other apps on the XMTP network.

:::

<!--Regarding this tip, do we want to emphasize that the domain should be unique to and/or meaningful in the context of your app? Or is that too prescriptive? Is there a way they can query the network to see which conversationIds are in use?-->

<!--In the Lens tutorial, we call mydomain.xyz/alert the "domain prefix" and then the conversationId appears to be a string composed of the two profiles in the conversation, or does the concatenation of domain prefix and the profile IDs form the conversationId? Maybe I'm taking the format "mydomain.xyz/notif" too literally? Can a conversationId just be any string you want it to be?-->

This example sets `mydomain.xyz/notif` as the `conversationID`, indicating that these conversations are notification messages created by `mydomain.xyz`.

You can then use the `mydomain.xyz/notif` conversation ID to display only notification messages created by your app, for example. <!--made this up - is this a valid use case? I was thinking that you could use this filter to show only notif messages in a notification panel, for example.-->

```js showLineNumbers
// Start a scoped conversation with ID mydomain.xyz/notif
const conversation1 = await xmtp.conversations.newConversation(
  '0x3F11b27F323b62B159D2642964fa27C46C841897',
  {
    conversationId: 'mydomain.xyz/notif',
  }
)
```

<!--In the code snippet above - 0x3F11b27F323b62B159D2642964fa27C46C841897 - whose address is this? the sender or the recipient? I was thinking that this would include both addresses? Another part of me is thinking that no address should show at all? For example, if the conversation topic name doesn't include the user addresses - are those addresses obscured everywhere? Not sure if this question makes sense.-->


## Set conversation metadata

In addition to setting a conversation ID when creating a conversation, you can set metadata to use as an additional filter.

<!--You can just use metadata without a conversationId if you want, correct? Any guidance or best practices here?-->

This example sets `mydomain.xyz/dm` as the `conversationId`, indicating that these conversations are direct messages. In addition, the example sets a conversation metadata `title` value to `following`.

You can then use this conversation ID and metadata to display only DMs created by your app that are also between the user and a user they are following, for example. <!--Is this use case valid? Too complicated? We don't shown the code that tells the app how to tell if the user is following the user ... but maybe it's okay as a conceptual example of what's possible?-->

```js showLineNumbers
// Start a scoped conversation with ID mydomain.xyz/dm and add some metadata
const conversation2 = await xmtp.conversations.newConversation(
  '0x3F11b27F323b62B159D2642964fa27C46C841897',
  {
    conversationId: 'mydomain.xyz/dm',
    metadata: {
      title: 'following',
    },
  }
)
```


## Filter conversations by IDs and metadata

Now that you've set conversation IDs and metadata, you can use them to filter conversations in your app.

<!--I move between using conversation ID and conversationId - maybe just stick to conversationId? Any preferences? JHA to look up dev doc style guidelines.-->

1. Get all of the conversations, as shown in lines 1-2.

2. Filter by the domain value in your `conversationId`, `mydomain.xyz/` for example, to return only conversations created by your app, as shown in lines 3-8.

3. Further filter by the rest of the `conversationId` and metadata. For example, filter by `notif` to display only notification messages, as shown in lines 10-14. And separately filter by `dm` and the metadata `title` value of `following` to display only DMs with users a user follows, as shown in lines 15-18.

<!--If mydomain.xyz/ is the domain value in the conversationId, what do we want to call the "rest of the conversationid" - notif or dm - for example? Does it need a name? In an actual URL, this would be the subdirectory - but I don't know if that works in this context?-->

4. You can also use metadata values to display useful information in the UI, as shown in line X.

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
  if (conversationId === 'mydomain.xyz/dm') {
    await conversation.send('dm')
    console.log(conversation.context?.metadata.title)
  }
}
```

<!--With "console.log(conversation.context?.metadata.title)" - it seems like this metadata is not being used as a filter - but rather as a way to display information about the conversation in the UI - is that right? Might we add a metadata filter to this code sample and ALSO use the metadata to display information in the UI? Do we want to call this out as another use for the metadata?-->


## Display labels to differentiate multiple conversations between a pair of addresses

With XMTP, a pair of blockchain account addresses can have multiple ongoing conversations. To help illustrate this scenario, let's use `amal.eth` and `bola.eth` as example addresses.

`amal.eth` and `bola.eth` can have an ongoing conversation in App ABC. Let's say that App ABC sets a `conversationId` of `abc.dev/dm` and uses it to filter conversations to display only conversations users created using App ABC.

![Mockup of App ABC setting a conversation ID of abc.dev/dm and filtering conversations by it. The app displays amal.eth's inbox with a "Hey..." conversation from bola.eth](img/app-abc.png)

`amal.eth` and `bola.eth` can also have a separate and ongoing conversation in App XYZ. Let's say that App XYZ sets a `conversationId` of `xyz.dev/dm` and uses it to filter conversations to display only conversations users created using App XYZ.

![Mockup of App XYZ setting a conversation ID of xyz.dev/dm and filtering conversations by it. The app displays amal.eth's inbox with a "Yes..." conversation from bola.eth](img/app-xyz.png)

Let's then take a look at App 123, which doesn't filter conversations and displays all conversations for a user regardless of where the conversations were created. In this case, the inbox for `amal.eth` might look something like this:

![Mockup of App 123 with no conversation ID or filtering. The app displays amal.eth's inbox with two conversations with bola.eth: One "Hey..." and one "Yes..."](img/app-123.png)

`amal.eth` may be confused by seeing two separate conversations they are having with the same address, `bola.eth`.

To help distinguish the multiple conversations `amal.eth` is having with the same address, you can implement a `conversationId`-based label that you display for each conversation.

![Mockup of App 123 with no conversation ID or filtering, but with conversationId-based labels implemented. The app displays amal.eth's inbox with two conversations with bola.eth: One labeled as ABC: "Hey..." and one labeled as XYZ: "Yes..."](img/app-123-convoid-labels.png)

This can help `amal.eth` recognize the source of each conversation with `bola.eth` and understand why multiple conversations are displaying.

For example:

```js

<code sample>

```


## Learn more

To learn about how a Lens app uses and filters by a conversation ID, see [Build key XMTP chat features in a Lens app](build-key-xmtp-chat-features-in-a-lens-app).

To learn more about conversation topics, see [XMTP V2 topics and message presentation flow](/docs/dev-concepts/architectural-overview#xmtp-v2-topics-and-message-presentation-flow).
