---
sidebar_label: Filtering
sidebar_position: 21
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import pushnotifsettings from '/docs/concepts/img/push-notif-settings.png';
import pushnotifsdecrypted from '/docs/concepts/img/push-notifs-decrypted.jpg';
import badgingorb from '/docs/concepts/img/badging-orb.jpg';
import unreadbadge from '/docs/concepts/img/unread-badge.png';

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
