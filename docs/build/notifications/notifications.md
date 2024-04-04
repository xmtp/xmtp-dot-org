---
sidebar_label: overview
sidebar_position: 20
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import pushnotifsettings from '/docs/concepts/img/push-notif-settings.png';
import pushnotifsdecrypted from '/docs/concepts/img/push-notifs-decrypted.jpg';
import badgingorb from '/docs/concepts/img/badging-orb.jpg';
import unreadbadge from '/docs/concepts/img/unread-badge.png';

# Notifications with XMTP

XMTP notifications are designed to seamlessly integrate into both mobile and web applications, providing developers with a robust framework for managing message delivery and notifications. This guide briefly introduces the key components and directs you to resources for detailed exploration.

## Concepts

- [**Overview**](./overview): Understand the fundamentals of XMTP notifications, including their importance and how they enhance user experience in messaging applications.

- **Mobile**: Learn how XMTP notifications are tailored for mobile platforms, ensuring efficient delivery and user engagement through services like Firebase.

  - [**Android**](./android): Set up your notification client in Android devices using the Kotlin SDK
  - [**iOS**](./ios): Learn howto navigate App store guidelines and integrate notifications with the IOS SDK

- [**Example Notification Server**](./server): Access a practical example of setting up a notification server with XMTP, providing a solid starting point for your own implementation.

## Resources

- [**Example Notification Server Implementation**](https://github.com/xmtp/example-notification-server-go): Dive into an example notification server to understand the integration process and how to leverage XMTP for efficient notification handling.

- [**Building A Push Notification Client**](https://github.com/xmtp/example-notification-server-go/blob/main/docs/notifications-client-guide.md):This document aims to be a guide to implementing a notifications client in your language and framework of choice.

- [**Integration Test Suite**](https://github.com/xmtp/example-notification-server-go/blob/main/integration/README.md): This package is designed to run as an integration test suite for the notification server

## Example apps

- **iOS**: If you are an iOS developer looking to integrate XMTP notifications, you can explore the example app and notification service featured in the [xmtp-ios repository](https://github.com/xmtp/xmtp-ios/tree/main/XMTPiOSExample) from the `xmtp-ios` SDK, along with its corresponding [documentation](./ios).

- **Android**: Android developers aiming to integrate push notifications into their applications can refer to this [example app](https://github.com/xmtp/xmtp-android/tree/main/example) and its accompanying [documentation](./android).

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
