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

- Mobile Integration: Learn how XMTP notifications are tailored for mobile platforms, ensuring efficient delivery and user engagement through services like Firebase.

  - [**Android**](./android): Set up your notification client in Android devices using the Kotlin SDK
  - [**iOS**](./ios): Learn howto navigate App store guidelines and integrate notifications with the IOS SDK

- [**Notification Filtering**](./filtering): Explore the mechanisms XMTP uses to filter notifications, ensuring users receive relevant updates without compromising privacy.

- [**Example Notification Server**](./server): Access a practical example of setting up a notification server with XMTP, providing a solid starting point for your own implementation.

## Resources

- [**Example Notification Server Implementation**](https://github.com/xmtp/example-notification-server-go): Dive into an example notification server to understand the integration process and how to leverage XMTP for efficient notification handling.

- [**Building A Push Notification Client**](https://github.com/xmtp/example-notification-server-go/blob/main/docs/notifications-client-guide.md):This document aims to be a guide to implementing a notifications client in your language and framework of choice.

- [**Integration Test Suite**](https://github.com/xmtp/example-notification-server-go/blob/main/integration/README.md): This package is designed to run as an integration test suite for the notification server
