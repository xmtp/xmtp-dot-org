---
sidebar_label: UX best practices
sidebar_position: 5
---
import ensnameresolution from '/docs/dev-concepts/img/ens-name-resolution.png';
import noxmtpidentity from '/docs/dev-concepts/img/no-xmtp-identity.png';
import activatedmsscreen from '/docs/dev-concepts/img/activate-dms-screen.png';
import allinorb from '/docs/dev-concepts/img/all-in-orb.png';
import lensonlyorb from '/docs/dev-concepts/img/lens-only-orb.png';
import buttrflyfollowonly from '/docs/dev-concepts/img/buttrfly-follow-only.png';
import pushnotifsettings from '/docs/dev-concepts/img/push-notif-settings.png';
import pushnotifsdecrypted from '/docs/dev-concepts/img/push-notifs-decrypted.jpg';
import badgingorb from '/docs/dev-concepts/img/badging-orb.jpg';
import conversationlabels from '/docs/dev-concepts/img/conversation-labels.png';

# UX best practices when building with XMTP

Consider these UX best practices when building your app with XMTP.


## General

- If needed, use XMTP brand assets provided here: [XMTP brand guidelines](https://github.com/xmtp/brand)

- Resolve popular namespaces such as ENS, .lens, cb id, and so forth. For example, here is ENS name resolution in [xmtp.chat](https://xmtp.chat/):

  <img src={ensnameresolution} style={{width:"400px"}}/>

  To achieve this functionality, consider using the [Everyname](https://www.everyname.xyz/) resolution service. 

- Provide error messaging when a user enters an address in the **To** field and the address hasn't created an XMTP identity.

  <img src={noxmtpidentity} style={{width:"500px"}}/>

- When displaying .eth names, look for and display an ENS avatar. When displaying .lens names, look for and display a Lens profile photo. Use blockies for raw 0x addresses.


## Onboarding

- In your app onboarding flow, enable your users to activate XMTP DMs. User access to DMs can help with app engagement and re-engagement. For example, here is a prompt to activate XMTP DMs in the onboarding flow to [claim a Lens handle](https://claim.lens.xyz/):

  <img src={activatedmsscreen} style={{width:"600px"}}/>

- In your app onboarding flow, request user permission to display app-specific push notifications to reach users outside of an app session.


## Conversations

- Provide an [interoperable inbox](/docs/dev-concepts/interoperable-inbox) UI in your app. This inbox enables your user to access and engage with all of their conversations without leaving your app. An interoperable inbox is the default state of [listing conversations](/docs/client-sdk/javascript/tutorials/quickstart#conversations). For example, here is an interoperable inbox in the [Orb app](https://orb.ac/):

  <img src={allinorb} style={{width:"400px"}}/>

- Use [conversation labels](/docs/client-sdk/javascript/tutorials/label-conversations) to provide context. For example, here is conversation labeling in an interoperable inbox helping the user understand the different origins of two conversations with the same address.

    <img src={conversationlabels} style={{width:"400px"}}/>

- Hide empty conversations.

- For non-empty conversations between a pair of addresses with the same conversation ID, pick the earliest conversation and write to it, effectively abandoning the other conversations.

- Consider using conversation IDs and metadata to provide [filtered views of conversations](/docs/client-sdk/javascript/tutorials/filter-conversations). For example, here is the Orb app with conversations filtered to show Lens conversations only:

    <img src={lensonlyorb} style={{width:"400px"}}/>

- Enable users to filter based on friends on a social graph, such as Lens, or a client-side grant/revoke list. For example, here is the [Buttrfly app](https://buttrfly.app/) displaying only conversations with Lens profiles you follow:

    <img src={buttrflyfollowonly} style={{width:"400px"}}/>

## Push notifications

- Provide a separate setting for enabling and disabling direct message push notifications. For example, if you’re building a Lens app, provide a setting for XMTP push notifications that’s separate from Lens push notifications for posts, comments, likes, and so forth. For example, here are push notification settings in the Orb app:

    <img src={pushnotifsettings} style={{width:"400px"}}/>

- Decrypt messages for push notifications so you can display the contents within the notification. For example, here is a decrypted push notification provided by the [Converse app](https://getconverse.app/).

    <img src={pushnotifsdecrypted} style={{width:"400px"}}/>

- Display push notifications only for messages sent **to** a user. In other words, do not send a push notification to a user about a message they sent. To do this, filter out messages sent by the user and don't send push notifications for them.


## Badging

- Display badges that indicate the presence of new notifications, messages, or conversations to help with engagement and interaction success. For example, here is an app icon badge showing the number of unread messages in the Orb app:

    <img src={badgingorb} style={{width:"400px"}}/>

- Unbadge conversations in which the user sent the latest message to avoid displaying unnecessary badges as users send messages across different apps. The action of sending the latest message implies that the user has seen the conversation.
