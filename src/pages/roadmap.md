---
hide_table_of_contents: true
---

# XMTP roadmap

The features and timelines listed below are subject to change. For information about recently delivered features and fixes, see the [Changelog](https://xmtp.org/docs/changelog).

## 2023

### Q4

- Group chat prototype powered by Messaging Layer Security (MLS)
- Shared allow/deny lists for iOS/Android SDKs
- Publish a decentralization overview covering contacts, invites, inboxes, and conversations
- Contact directory prototype (a smart contract that allows users to create, maintain, and share a public DID contact bundle) available in alpha

## 2024

### Q1

- Group chat beta available in iOS, Android, and React Native SDKs
- Initial support for push notifications, message history backups/portable inboxes, and smart contract wallet accounts
- Contact directory available in production
- Invite inbox and conversation consent smart contract prototypes available in alpha

### Q2 

- Group chat available in JavaScript and React SDKs
- Message history synchronization for new devices
- Key revocation and rejection of messages from revoked identities
- Enable 1:1 conversations to use MLS and `libxmtp`
- Flutter SDK support
- Testnet blockchain supporting contacts, invites, inboxes, and conversations

### Q3 → Q4

- Decentralized MLS rollout
- Production-ready testnet

## Release cycles

Prior roadmaps combined multiple features into a single versioned release, such as XMTP v1 and v2.

Going forward, individual features will be released as they become available. For example, group chat, contact directory, key revocation, etc.

We typically follow this release cycle for new features:

- **Alpha**: Super early peek into the feature being built. Not ready for use in production apps.
- **Beta**: Opportunity to test, validate, and provide feedback. Not ready for use in production apps.
- **Production**: Ready for use in production apps.
