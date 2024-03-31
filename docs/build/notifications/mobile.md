---
sidebar_label: Mobile
sidebar_position: 22
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import pushnotifsettings from '/docs/concepts/img/push-notif-settings.png';
import pushnotifsdecrypted from '/docs/concepts/img/push-notifs-decrypted.jpg';
import badgingorb from '/docs/concepts/img/badging-orb.jpg';
import unreadbadge from '/docs/concepts/img/unread-badge.png';

# Build push notifications in Mobile

Push notifications can be a highly effective way to engage your users and increase app retention. In addition to providing push notifications for new messages, provide them for new conversations.

## Firebase Cloud Messaging

You can use a Firebase Cloud Messaging server and an example push notification server to enable the `xmtp-react-native` example app to send push notifications.

Perform this setup to understand how you might want to enable push notifications for your own app built with the `xmtp-react-native` SDK.

1. Create an FCM project.

2. Generate FCM credentials, which you need to run the example notification server. To do this, from the FCM dashboard, click the gear icon next to **Project Overview** and select **Project settings**. Select **Service accounts**. Select **Go** and click **Generate new private key**.

3. This will download a JSON file containing your service account credentials. e.g. `xmtp-web-firebase-adminsdk-sd34dsd-d34dcdf3.json`

4. Get the FCM project ID and FCM credentials you created earlier and run:

   ```bash
     YOURFCMJSON=`cat YOURFIREBASEADMINFROMSTEP4.json`
   ```

   ```bash
   dev/run \
   --xmtp-listener-tls \
   --xmtp-listener \
   --api \
   -x "production.xmtp.network:5556" \
   -d "postgres://postgres:xmtp@localhost:25432/postgres?sslmode=disable" \
   --fcm-enabled \
   --fcm-credentials-json=$YOURFCMJSON \
   --fcm-project-id="YOURFCMPROJECTID"
   ```

5. You should now be able to see push notifications coming across the local network.

## Decode a notification envelope

You can decode a single `Envelope` from XMTP using the `decode` method:

<Tabs groupId="sdk-langs">
<TabItem value="js" label="JavaScript"  attributes={{className: "js_tab"}}>

Not applicable

</TabItem>
<TabItem value="react" label="React"  attributes={{className: "react_tab"}}>

Not applicable

</TabItem>
<TabItem value="kotlin" label="Kotlin"  attributes={{className: "kotlin_tab"}}>

```kotlin
val conversation =
    client.conversations.newConversation("0x3F11b27F323b62B159D2642964fa27C46C841897")

// Assume this function returns an Envelope that contains a message for the above conversation
val envelope = getEnvelopeFromXMTP()

val decodedMessage = conversation.decode(envelope)
```

</TabItem>
<TabItem value="swift" label="Swift"  attributes={{className: "swift_tab"}}>

```swift
let conversation = try await client.conversations.newConversation(
  with: "0x3F11b27F323b62B159D2642964fa27C46C841897")

// Assume this function returns an Envelope that contains a message for the above conversation
let envelope = getEnvelopeFromXMTP()

let decodedMessage = try conversation.decode(envelope)
```

</TabItem>
<TabItem value="dart" label="Dart"  attributes={{className: "dart_tab"}}>

Code sample coming soon

</TabItem>
<TabItem value="rn" label="React Native"  attributes={{className: "rn_tab"}}>

Code sample coming soon

</TabItem>
</Tabs>

## React Native

See [A practical guide to building a push notification client](https://github.com/xmtp/example-notification-server-go/blob/main/docs/notifications-client-guide.md). This guide is based on a React Native example, but can serve as a reference for how you might provide a notification client in your language of choice.

## Best practices for notifications

- Display push notifications only for messages sent **to** a user. In other words, do not send a push notification to a user about a message they sent. To do this, filter out messages sent by the user and don't send push notifications for them.

- Provide a separate setting for enabling and disabling direct message push notifications. For example, if you’re building a Lens app, provide a setting for XMTP push notifications that’s separate from Lens push notifications for posts, comments, likes, and so forth. For example, here are push notification settings in the Orb app:

  <img src={pushnotifsettings} style={{width:"300px"}}/>

- Decrypt messages for push notifications so you can display the contents within the notification. For example, here is a decrypted push notification provided by the [Converse app](https://getconverse.app/).

  <img src={pushnotifsdecrypted} style={{width:"300px"}}/>

- Display badges that indicate the presence of new notifications, messages, or conversations to help with engagement and interaction success.

  - Here is a conversation icon badge showing the presence of an unread message:

    <img src={unreadbadge} style={{width:"300px"}}/>

    Along these lines, be sure to unbadge conversations in which the user sent the latest message to avoid displaying unnecessary badges as users send messages across different apps. The action of sending the latest message implies that the user has seen the conversation.

  - Here is an app icon badge showing the number of unread messages in the Orb app:

    <img src={badgingorb} style={{width:"100px"}}/>
