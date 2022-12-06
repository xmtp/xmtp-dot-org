---
sidebar_label: Roadmap
sidebar_position: 2
---

# Roadmap

Here are a few details about what's in store for XMTP in the months ahead.

## In progress

### Mobile client support

Developers will be able to build mobile client apps in React Native, Swift, Kotlin, and Flutter.

- [Read more: React Native](https://github.com/xmtp/xmtp-js/issues/170)
- [Read more: Swift](https://github.com/xmtp/xmtp-ios/issues/7)
- [Read more: Flutter](https://github.com/xmtp/xmtp-flutter/issues/4)

### Message any address

Individuals will be able to send encrypted DMs and announcements to addresses that have not yet created XMTP identities. Recipients will be notified of these messages upon first connection to XMTP.

- [Read more](https://github.com/xmtp/xmtp-memo-js)

### Push notifications

Apps will be able to subscribe users to receive push notifications to their devices upon receiving new messages.

- [Read more](https://github.com/xmtp/example-notification-server-go)

### Network decentralization milestones

XMTP Labs will specify a phased approach towards architectural and logical decentralization of the network.

## Planned

### Group chat and announcements channels

Users will be able to send messages to group chats and announcements channels, and will retrieve messages from these channels separately from their DMs.

### Team inboxes

Teams will be able to read and send encrypted DMs and announcements using a shared team identity that resolves to their ENS domain or Lens profile. The account admin will be able to delegate access to and revoke access from individual team user accounts.

### Compromise recovery

Users will be able to recover their compromised XMTP identity by creating new private keys.

### App permissions

Users will be able to grant explicit permission for an app to use their account across sessions and will be able to revoke this permission at any time.

### Secure key storage alternatives

Users will be able to store XMTP private keys in secure contexts such as wallet apps.

## Delivered

### December 2022: XMTP v2

#### Conversation filtering

Developers can now group and filter conversations in a particular context, such as conversations originating from within their app.

#### Participant privacy

Network clients responsible for relaying and storing messages can no longer observe the addresses of participants in ongoing conversations.

_For more information about delivered features and fixes, see [XMTP releases and updates](/docs/dev-concepts/xmtp-releases)._

<!--
## Researching

Read the [XMTP litepaper]() to learn about key concepts on XMTP's research roadmap.
-->
