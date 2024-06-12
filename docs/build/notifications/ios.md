---
sidebar_label: iOS
sidebar_position: 22
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import pushnotifsettings from '/docs/concepts/img/push-notif-settings.png';
import pushnotifsdecrypted from '/docs/concepts/img/push-notifs-decrypted.jpg';
import badgingorb from '/docs/concepts/img/badging-orb.jpg';
import unreadbadge from '/docs/concepts/img/unread-badge.png';

# Enable the example app to send push notifications

For iOS apps, see the `xmtp-ios` [example app and notification service](https://github.com/xmtp/xmtp-ios/tree/main/XMTPiOSExample) to explore how you might enable push notifications for your own app built with the [`xmtp-ios` SDK](https://github.com/xmtp/xmtp-ios).

To adapt the push notification setup for the XMTP iOS example app, follow this comprehensive guide:

This guide will help you set up push notifications for the XMTP iOS example app using Firebase Cloud Messaging (FCM) and a custom notification server.

## Prerequisites

- An iOS device for testing, as push notifications do not work on simulators.
- A Firebase account and a project set up in the Firebase console.

## Firebase Cloud Messaging Setup

1. **Create an FCM Project**: Go to the [Firebase Console](https://console.firebase.google.com/), create a new project, and follow the setup instructions.

2. **Add Your App to the FCM Project**: Add your iOS app to the project by following the Firebase setup workflow. You'll need your app's bundle ID.

3. **Download `GoogleService-Info.plist`**: At the end of the setup, download the `GoogleService-Info.plist` file and add it to your Xcode project.

4. **Generate FCM Credentials**: In the Firebase console, navigate to your project settings, select the Cloud Messaging tab, and note your server key and sender ID. You'll need these for your notification server.

## Configure the iOS App for Push Notifications

1. **Enable Push Notifications**: In Xcode, go to your project's target capabilities and enable Push Notifications.

2. **Register for Notifications**: Modify the `AppDelegate` to register for remote notifications and handle the device token.

3. **Handle Incoming Notifications**: Implement the necessary delegate methods to handle incoming notifications and foreground notification display.

## Run the Notification Server

1. **Clone and Configure the Notification Server**: If you're using the example notification server, clone the repository and follow the setup instructions. Make sure to configure it with your FCM server key.

2. **Run the Server**: Start the server locally or deploy it to a hosting service.

- **Subscribe to Push Notifications in the App**: When initializing the XMTP client in your app, subscribe to push notifications using the device token obtained during registration.

- **Decode a Notification Envelope**: When you receive a push notification, you may want to decode the notification envelope to display a message preview or other information.

## Apple entitlement

You can utilize the [com.apple.developer.usernotifications.filtering](https://developer.apple.com/documentation/bundleresources/entitlements/com_apple_developer_usernotifications_filtering) entitlement. To do so, you need to obtain permission from Apple. Submit the application using the app owner's Apple developer account via [https://developer.apple.com/contact/request/notification-service](https://developer.apple.com/contact/request/notification-service).

:::tip Submit your application early

The approval process can take 2-3 weeks or longer.

:::

Here are some sample answers to help you complete the application:

- **App name:** [Your app name]
- **App Store URL:** [Your app store URL]
- **Apple ID of App:** [Your app ID]
- **App Type:** Messaging
- **Does your app provide end-to-end encryption?:** Yes
- **Explain why existing APIs are not adequate for your app:** The existing APIs always show some sort of notification when a push comes in. We don't want to show a notification for a user's own messages.
- **Explain why your app doesn’t show a visible notification each time a push notification is received:** The server delivering notifications only knows of the existence of a conversation. It does not know who the sender or recipient are. That data is decoded on the device in the extension. As a result, it sends a push notification for every message that occurs in the conversation. We want to filter out notifications for notifications that the user sent.
- **When your extension runs, what system and network resources does it need?:** We might need to make a GRPC request in order to load additional information about a conversation. This is only necessary when we haven't stored the conversation details locally, which is expected to be less common than being able to just decode the conversation locally.
- **How often does your extension run? What can trigger it to run?:** The extension will run whenever a message is sent or received in a conversation. The frequency will depend on how active a user is.
