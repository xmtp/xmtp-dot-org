---
sidebar_label: Push notifications (Swift)
sidebar_position: 7
---

# Handle push notifications for Swift/iOS

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
- **How often does your extension run? What can trigger it to run?** The extension will run whenever a message is sent or a received in a conversation. The frequency will depend on how active a user is.
