---
sidebar_label: Notifications
sidebar_position: 8
---

# Build push notifications with XMTP

Push notifications can be a highly effective way to engage your users and increase app retention.

import pushnotifsettings from '/docs/concepts/img/push-notif-settings.png';
import pushnotifsdecrypted from '/docs/concepts/img/push-notifs-decrypted.jpg';
import badgingorb from '/docs/concepts/img/badging-orb.jpg';
import unreadbadge from '/docs/concepts/img/unread-badge.png';

## Run your own notification server

See the [example-notification-server-go](https://github.com/xmtp/example-notification-server-go) for an example push notification server written in Golang that you can use as a reference for how you might provide a server for your app.

This example branch can serve as the basis for what you might want to provide for your own notification server. The branch also demonstrates how to generate the proto code if you decide to perform these tasks for your own app. This proto code from the example notification server has already been generated in the `xmtp-android` example app.

Check out the [Setup Guide for XMTP Notification Server](/blog/setting-up-push-notification-server).

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

## React Native

In addition to providing push notifications for new messages, provide them for new conversations. To learn more, see [A practical guide to building a push notification client](https://github.com/xmtp/example-notification-server-go/blob/main/docs/notifications-client-guide.md). This guide is based on a React Native example, but can serve as a reference for how you might provide a notification client in your language of choice.

## Android

For Android apps, see [Enable the `xmtp-android` example app to send push notifications](https://github.com/xmtp/xmtp-android/blob/main/library/src/main/java/org/xmtp/android/library/push/README.md) to explore how you might enable push notifications for your own app built with the [`xmtp-android` SDK](https://github.com/xmtp/xmtp-android).

1. Checkout the `push-notifications-example` branch

2. Add your `google-services.json` file to the `example/android/app` folder if you haven't already done it as a part of the FCM project creation process.

3. Uncomment `apply plugin: 'com.google.gms.google-services'` in the example app's `build.gradle` file.

4. Uncomment `classpath('com.google.gms:google-services:4.3.15')` in the top level of the example app's `build.gradle` file.

5. Sync the gradle project.

6. Replace `YOUR_SERVER_ADDRESS` in the `PullController.ts` file. If you're using the example notification server, it should be something like `YOURIPADDRESS:8080` since the Android emulator takes over localhost.

7. Change the example app's environment to `production` in both places in `AuthView.tsx`.

8. Replace `YOUR_FIREBASE_SENDER_ID` in the `PullController.ts` with your sender ID from Firebase.

## iOS

For iOS apps, see the `xmtp-ios` [example app and notification service](https://github.com/xmtp/xmtp-ios/tree/main/XMTPiOSExample) to explore how you might enable push notifications for your own app built with the [`xmtp-ios` SDK](https://github.com/xmtp/xmtp-ios).

When building an iOS app with XMTP, you might want to suppress certain Apple push notifications. For example, you should suppress push notifications for a user's own messages.

You can do this using the [com.apple.developer.usernotifications.filtering](https://developer.apple.com/documentation/bundleresources/entitlements/com_apple_developer_usernotifications_filtering) entitlement.

To use this entitlement, you must first receive permission from Apple. To request permission, use the app owner's Apple developer account to submit this application: [https://developer.apple.com/contact/request/notification-service](https://developer.apple.com/contact/request/notification-service).

:::tip Submit your application early

The approval process can take 2-3 weeks or longer.

:::

Here are some sample answers to help you complete the application:

- **App name:** [Your app name]
- **App Store URL:** [Your app store URL]
- **Apple ID of App:** [Your app ID]
- **App Type:** Messaging
- **Does your app provide end-to-end encryption?** Yes
- **Explain why existing APIs are not adequate for your app:** The existing APIs always show some sort of notification when a push comes in. We don't want to show a notification for a user's own messages.
- **Explain why your app doesn’t show a visible notification each time a push notification is received:** The server delivering notifications only knows of the existence of a conversation. It does not know who the sender or recipient are. That data is decoded on the device in the extension. As a result, it sends a push notification for every message that occurs in the conversation. We want to filter out notifications for notifications that the user sent.
- **When your extension runs, what system and network resources does it need?** We might need to make a GRPC request in order to load additional information about a conversation. This is only necessary when we haven't stored the conversation details locally, which is expected to be less common than being able to just decode the conversation locally.
- **How often does your extension run? What can trigger it to run?** The extension will run whenever a message is sent or received in a conversation. The frequency will depend on how active a user is.

## Best practices

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
