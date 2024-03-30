---
sidebar_label: Filtering
sidebar_position: 21
---

# Filtering notifications

In the context of XMTP notifications, several concepts play a crucial role in ensuring that notifications are delivered appropriately and in a user-friendly manner. Here's a concise explanation of each:

### `consentState`

- **Purpose**: To protect users from spam notifications.
- **Usage**: Notifications are only subscribed to if the `consentState` of a conversation is "allowed". This ensures that users receive notifications only for conversations they have consented to.

### `isIos`

- **Purpose**: To handle platform-specific notification behavior.
- **Usage**: A flag indicating whether the client device is iOS. This is used to apply iOS-specific notification handling, such as using silent notifications to suppress visible alerts for a user's own messages.

### `isSilent`

- **Purpose**: To control the visibility of notifications.
- **Usage**: Determines whether a notification should be silent (no sound or visual alert) or visible. This is particularly useful for iOS devices where you might want to suppress notifications for a user's own messages or for certain types of conversations.

#### `Invite` topic V2

- **Purpose**: Clients use invite topics to initiate conversations between participants. The invite topic name uses this format: `invite-<account-address>`.

To learn more, see [Invitations](https://github.com/xmtp/proto/blob/main/PROTOCOL.md#invitations) in the `xmtp/proto` repo.

#### `Intro` topic V1

- **Purpose**: Clients use intro topics to store the first message sent between two participants (blockchain accounts). This enables clients to know that messages exist in a given conversation topic. The intro topic name uses this format: `intro-<participant-1-account-address>-<participant-2-account-address>`.

These concepts collectively ensure that notifications are delivered in a manner that respects user consent, minimizes spam, and provides a tailored experience based on the user's device platform and preferences regarding conversation invites and intros.
