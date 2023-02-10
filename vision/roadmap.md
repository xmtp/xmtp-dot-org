---
sidebar_label: Roadmap
sidebar_position: 2
---

# Roadmap

Here are a few details about what we've shipped recently, what we're working on, and what's in store for XMTP in the months ahead.

---

## Researching 🔬

Scoping goals, requirements, and effort via research & proofs of concepts.

### Group chat

Users will be able to send messages to group chats with 2+ participants.

### Team inboxes

Teams will be able to read and send encrypted DMs and announcements using a shared team identity. The account admin will be able to delegate access to and revoke access from individual team user accounts.

---

## In progress 🏗️

Projects in flight.

### Network decentralization milestones

XMTP Labs will specify a phased approach towards architectural and logical decentralization of the network.

### Testnets for control plane sharding & topic replication

In parallel with a longer term decentralization plan, we will also ship testnets implementing code that contributes to progressive decentralization.

### Compromise recovery

Users will be able to recover their compromised XMTP identity by creating new private keys.

### App permissions

Users will be able to grant explicit permission for an app to use their account across sessions and will be able to revoke this permission at any time.

### Secure key storage alternatives

Users will be able to store XMTP private keys in secure contexts such as wallet apps.

### UI Kit & React Hooks SDK

Enable developers to focus on differentiating features by providing reusable messaging components via a UI kit & React Hooks SDK.

---

## Pre-Preview 👀

A super early peek into what we're building. Ready for exploration, not adoption.

### Message any address - Drops SDK

Individuals will be able to send encrypted DMs and announcements to addresses that have not yet created XMTP identities. Recipients will be notified of these messages upon first connection to XMTP.

- [Read more](https://github.com/xmtp/xmtp-memo-js)

---

## Developer Preview 🧑‍💻

Opportunity to test, validate, and provide feedback. We do not recommend usage in production apps just yet.

### Mobile client support

Developers will be able to build mobile client apps in Flutter, React Native, and Swift.

- [Read more: React Native](https://github.com/xmtp/xmtp-js/issues/170)
- [Read more: Swift](https://github.com/xmtp/xmtp-ios/issues/7)
- [Read more: Flutter](https://github.com/xmtp/xmtp-flutter/issues/4)

### Push notifications - example server

Apps will be able to subscribe users to receive push notifications to their devices upon receiving new messages.

- [Read more](https://github.com/xmtp/example-notification-server-go)

---

## General Availability ✅

Ready for production use. Check out docs, tutorials, and quick-start examples.

### XMTP v2 (December 2022)

#### Conversation filtering

Developers can now group and filter conversations in a particular context, such as conversations originating from within their app.

#### Participant privacy

Network clients responsible for relaying and storing messages can no longer observe the addresses of participants in ongoing conversations.

_For more information about delivered features and fixes, see [XMTP releases and updates](/docs/dev-concepts/xmtp-releases)._

<!--
## Researching

Read the [XMTP litepaper]() to learn about key concepts on XMTP's research roadmap.
-->
