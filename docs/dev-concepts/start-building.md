---
sidebar_label: Start building
sidebar_position: 2
description: Use this document as a map to build, launch, and maintain a best-in-class app with XMTP.
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
import unreadbadge from '/docs/dev-concepts/img/unread-badge.png';
import conversationlabels from '/docs/dev-concepts/img/conversation-labels.png';
import onboardingbot from '/docs/dev-concepts/img/onboarding-bot.png';

# Start building with XMTP

Use this document as a map to build, launch, and maintain a best-in-class app with XMTP.


## Why XMTP?

XMTP is an open protocol and network for secure web3 messaging. Developers build with XMTP client SDKs to provide messaging between blockchain accounts in their apps. The XMTP messaging API client takes care of:

- [Authentication](account-signatures) using an **XMTP identity that the user owns and controls**

- [End-to-end encryption](invitation-and-message-encryption) of **messages that the user owns and controls**

- Providing an **[interoperable inbox](interoperable-inbox)** accessible across apps built with XMTP

- Relaying messages to the **progressively decentralized** [XMTP network](architectural-overview#network-layer)


## Try messaging with XMTP

1. [**Start messaging with XMTP**](/docs/client-sdk/javascript/tutorials/start-messaging)

    Use an app built with XMTP to start learning how to build one.

2. **Need someone to send a test message to?**
    - `gm.xmtp.eth` (`0x937C0d4a6294cdfa575de17382c7076b579DC176`)  

        Message this XMTP message bot to get an immediate automated reply.

    - `hi.xmtp.eth` (`0x194c31cAe1418D5256E8c58e0d08Aee1046C6Ed0`)  

        Message the XMTP Labs team and a human will reply, though not as quickly as `gm.xmtp.eth`! 🤖


## Start building your app

1. [**Build a simple hello world app**](/docs/client-sdk/javascript/tutorials/build-an-xmtp-hello-world-app)

    Get a feel for building with XMTP by building an app using 100% copy-and-paste commands and code.

2. **Ready to build your own app? Start with an XMTP client SDK:**

    - [xmtp-js](https://github.com/xmtp/xmtp-js)
    - [xmtp-android](https://github.com/xmtp/xmtp-android)
    - [xmtp-ios](https://github.com/xmtp/xmtp-ios)
    - [xmtp-flutter](https://github.com/xmtp/xmtp-flutter)
    
  Be sure to watch relevant repos to be notified about new releases, which might include breaking changes and migration steps. You can also join the [XMTP Discord](https://discord.gg/xmtp) to receive these types of notifications.

3. **Want to provide DMs in a Lens app?**

    To learn how, see [Build key XMTP chat features in a Lens app](/docs/client-sdk/javascript/tutorials/build-key-xmtp-chat-features-in-a-lens-app).

    Need a Lens handle? Message `prxshant.eth` using [xmtp.chat](https://xmtp.chat/)

5. **Explore example apps for implementation guidance and inspiration:**

    - [https://demo.xmtp.chat/](https://demo.xmtp.chat/)  
    When you open the app, it creates a sandbox Ethereum account and connects it to the app. The app also creates and enables an XMTP identity for the account. And you're ready to send demo messages with XMTP! The sandbox account is deleted as soon as the demo session ends.

    - [xmtp-quickstart-react](https://github.com/xmtp/xmtp-quickstart-react)  
    An intentionally lightweight example app that you can use to learn how to build with XMTP.

    - [xmtp-inbox-web](https://github.com/xmtp-labs/xmtp-inbox-web)  
    An example app that showcases innovative ways of building with XMTP.

    - [Built with XMTP](/built-with-xmtp/)  
    Explore a curated showcase of apps built with XMTP.

    - [Awesome XMTP](https://github.com/xmtp/awesome-xmtp)  
    Explore a list of project repos using XMTP.

6. **You probably have some great questions by now! Check out these resources:**

    - [FAQ](faq)
    - [Roadmap](/vision/roadmap)
    - [Blog](/blog)


## Join the XMTP community

Ask questions and learn with others building with XMTP. Join the community on the platform that works best for you:

- Discord: [Chat with other builders](https://discord.gg/xmtp)
- Twitter: [Follow @XMTP_](https://twitter.com/xmtp_)
- GitHub Discussions: [Join the discussion](https://github.com/orgs/xmtp/discussions)


## Development best practices

Consider following these best practices when developing your app:

- Set the `env` client option to `dev` while developing. Set it to `production` before you launch.

- If you are building with the xmtp-js SDK, set the [`appVersion` client option](/docs/client-sdk/javascript/tutorials/quickstart#configuring-the-client).    

- Paginate message history to help optimize time to load messages in a conversation.

- Use [standard content types](content-types#standard-content-types) to ensure that message content sent using your app is interoperable with other apps.
  - By default, building with XMTP SDKs supports plain text messages. 
  - To send remote media attachments, see [Some new content types](/blog/attachments-and-remote-attachments).
  - To send custom content types, see [Build a custom content type](/docs/client-sdk/javascript/tutorials/use-content-types#build-a-custom-content-type).

- Enable your app to track privacy-preserving metrics to help you understand app usage. For example:
    - \# of active wallets: Wallets sending at least one message
    - \# of active conversations: Conversations with at least one message
    - \# of returning conversations: Conversations with at least one message per participant


## UX best practices

Consider following these UX best practices.

### General

- If needed, use [official XMTP brand assets](https://github.com/xmtp/brand).

- Provide error messaging when a user enters an address in the **To** field and the address hasn't created an XMTP identity.

  <img src={noxmtpidentity} style={{width:"450px"}}/>
    
- Consider how your app performs against these performance benchmarks:
    - Time to load conversation list: 8-15ms to decrypt invites per conversation
    - Sender UX: Time between sending a message and displaying the message in the conversation thread: ≤1 second
    - Recipient UX: Time between sending a message and displaying the message in the conversation thread: ≤1 second
- Resolve popular namespaces such as ENS, .lens, cb id, and so forth. For example, here is ENS name resolution in [xmtp.chat](https://xmtp.chat/). To achieve this functionality, consider using the [Everyname](https://www.everyname.xyz/) resolution service.

  <img src={ensnameresolution} style={{width:"400px"}}/>
    
- When displaying .eth names, look for and display an ENS avatar. When displaying .lens names, look for and display a Lens profile photo. Use blockies for raw 0x addresses.


### Onboarding

- In your app onboarding flow, enable your users to activate XMTP DMs. User access to DMs can help with app engagement and re-engagement. For example, here is a prompt to activate XMTP DMs in the onboarding flow to [claim a Lens handle](https://claim.lens.xyz/):

  <img src={activatedmsscreen} style={{width:"500px"}}/>
    
- In your app onboarding flow, request user permission to display app-specific push notifications to reach users outside of an app session.

- Create your own message bot, such as `gm.yourappname.eth`, to provide a friendly app onboarding experience. For example, when a user sends a message to `gm.xmtp.eth`, a message bot built with [ChainJet](https://chainjet.io/) sends an automatic reply. You can configure your bot to provide onboarding information or an easy way for a user to send and receive their first messages with your app.

  <img src={onboardingbot} style={{width:"600px"}}/>

### Conversations

- Provide an [interoperable inbox](https://xmtp.org/docs/dev-concepts/interoperable-inbox) UI in your app. This inbox enables your user to access and engage with all of their conversations without leaving your app. An interoperable inbox is the default state of [listing conversations](https://xmtp.org/docs/client-sdk/javascript/tutorials/quickstart#conversations). For example, here is an interoperable inbox in the [Orb app](https://orb.ac/):

  <img src={allinorb} style={{width:"400px"}}/>
    
- Use [conversation labels](https://xmtp.org/docs/client-sdk/javascript/tutorials/label-conversations) to provide context, especially in an interoperable inbox. For example, here is conversation labeling in an interoperable inbox helping the user understand the different origins of two conversations with the same address.

  <img src={conversationlabels} style={{width:"400px"}}/>
    
- Consider using conversation IDs and metadata to provide [filtered views of conversations](https://xmtp.org/docs/client-sdk/javascript/tutorials/filter-conversations). For example, here is the Orb app with conversations filtered to show Lens conversations only:

  <img src={lensonlyorb} style={{width:"400px"}}/>
    
- Enable users to filter based on friends on a social graph, such as Lens, or a client-side grant/revoke list. For example, here is the [Buttrfly app](https://buttrfly.app/) displaying only conversations with Lens profiles you follow:

  <img src={buttrflyfollowonly} style={{width:"400px"}}/>
    
- Hide empty conversations.
- For multiple non-empty conversations with the same conversation ID and between the same pair of addresses, pick the earliest conversation and write to it, effectively abandoning the other conversations.


### Push notifications

Push notifications can be a highly effective way to engage your users and increase app retention.

- See the [example-notification-server-go](https://github.com/xmtp/example-notification-server-go) for an example push notification server written in Golang that you can use as a reference for how you might provide a server for your app.

- In addition to providing push notifications for new messages, provide them for new conversations. To learn more, see [A practical guide to building a push notification client](https://github.com/xmtp/example-notification-server-go/blob/main/docs/notifications-client-guide.md). This guide is based on a React Native example, but can serve as a reference for how you might provide a notification client in your language of choice.

- For Android apps, see [Enable the `xmtp-android` example app to send push notifications](https://github.com/xmtp/xmtp-android/blob/main/library/src/main/java/org/xmtp/android/library/push/README.md) to explore how you might enable push notifications for your own app built with the [`xmtp-android` SDK](https://github.com/xmtp/xmtp-android).
    
- For iOS apps, see the `xmtp-ios` [example app and notification service](https://github.com/xmtp/xmtp-ios/tree/main/XMTPiOSExample) to explore how you might enable push notifications for your own app built with the [`xmtp-ios` SDK](https://github.com/xmtp/xmtp-ios). 

- Display push notifications only for messages sent **to** a user. In other words, do not send a push notification to a user about a message they sent. To do this, filter out messages sent by the user and don't send push notifications for them.

   - For iOS apps, see [Handle push notifications](https://xmtp.org/docs/client-sdk/swift/tutorials/handle-push-notifications) to learn how to suppress these push notifications.

    :::tip Submit your application early

    To suppress these notifications, you must submit an application to Apple. The approval process can take 2-3 weeks or longer.

    :::

- Provide a separate setting for enabling and disabling direct message push notifications. For example, if you’re building a Lens app, provide a setting for XMTP push notifications that’s separate from Lens push notifications for posts, comments, likes, and so forth. For example, here are push notification settings in the Orb app:

  <img src={pushnotifsettings} style={{width:"400px"}}/>

- Decrypt messages for push notifications so you can display the contents within the notification. For example, here is a decrypted push notification provided by the [Converse app](https://getconverse.app/).

  <img src={pushnotifsdecrypted} style={{width:"400px"}}/>
    

### Badging

- Display badges that indicate the presence of new notifications, messages, or conversations to help with engagement and interaction success.
    - Here is a conversation icon badge showing the presence of an unread message:

      <img src={unreadbadge} style={{width:"400px"}}/>
      
      Along these lines, be sure to unbadge conversations in which the user sent the latest message to avoid displaying unnecessary badges as users send messages across different apps. The action of sending the latest message implies that the user has seen the conversation.
        
    - Here is an app icon badge showing the number of unread messages in the Orb app:
    
      <img src={badgingorb} style={{width:"200px"}}/>


## Test your app

Test your app before going live. Here's a list of recommended test cases.

Be sure to test using different devices (mobile, desktop), browsers, and window sizes.

If helpful for testing, you can create your own message bot, such as `gm.yourappname.eth`, using [ChainJet](https://chainjet.io/). You can use the message bot to receive and send test messages, as well as provide a friendly app onboarding experience. If needed, you can also [use these XMTP addresses](#try-messaging-with-xmtp) for testing. 

### Wallet connection

- Connect your preexisting wallet
- Connect a new wallet using “get a wallet” functionality
- Disconnect your wallet
- Reconnect your wallet after disconnection

### Identity

- Verify that your ENS domain appears
- Verify that your ENS avatar appears
- Verify that your recipient’s ENS domain appears
- Verify that your recipient’s ENS avatar appears

### Message

- Start a new conversation with an 0x address as the recipient
- Start a new conversation with an ENS address as the recipient
- Send a short message (<10 characters)
- Send a medium message (<200 characters)
- Send a long message (>200 characters)
- Receive a short message (<10 characters)
- Receive a medium message (<200 characters)
- Receive a long message (>200 characters)
- Scroll through the conversation list
- Scroll through a conversation


## Get pre-launch feedback

Preparing to launch? Be sure to:

- Run through these [recommended test cases](#test-your-app)
- Revisit these [development best practices](#development-best-practices)
- Revisit these [UX best practices](#ux-best-practices)

After your team has tested your app and reviewed the app best practices, message  `prxshant.eth`  using [xmtp.chat](https://xmtp.chat/) to get pre-launch feedback from XMTP Labs. Provide a link to a preview app, TestFlight, or demo video.


## Launch your app

Way to go! 🎉 Here are some resources and ideas for promoting your app launch:

- Register for the Polygon [dApp Store Kit](https://docs.dappstorekit.io/docs/how%20to%20use%20the%20dapp%20store%20kit/dapp-registry-management/), which enables developers to launch their own dApp stores and list any dApp, including their own. To learn more, see the [dApp Store Kit Wiki](https://polygontechnology.notion.site/dApp-Store-Kit-Wiki-a3a9e7518b80400589aee8164550838e).

- Check out these launch posts for other apps built with XMTP:
    - [Orb](https://twitter.com/orbapp_/status/1618659601154715649?s=20)
    - [meTokens](https://twitter.com/meTokens/status/1597983759462436870?s=20&t=wHy9mBrNR5ri146CbhCMUw)
    - [Buttrfly](https://twitter.com/0xMoe_/status/1603126849852563456?s=20&t=wHy9mBrNR5ri146CbhCMUw)
    - [Lenster](https://twitter.com/lensterxyz/status/1588203593257009152?s=20&t=wHy9mBrNR5ri146CbhCMUw)
    - [LensPort](https://twitter.com/lensport_io/status/1602370688139939841?s=20&t=wHy9mBrNR5ri146CbhCMUw)

- Need an XMTP logo for your announcement?
    - See the [XMTP Brand Guidelines](https://github.com/xmtp/brand)

- Tag the XMTP Labs team to help amplify your launch
    - [@xmtplabs](https://lenster.xyz/u/xmtplabs) on Lens
    - [@xmtp_](https://twitter.com/xmtp_) on Twitter

- Have your app added to [Built with XMTP](https://xmtp.org/built-with-xmtp)
    - [Submit this form](https://forms.gle/p1VgVtkoGfHXANXt5)

- Have your project repo added to [awesome-xmtp](https://github.com/xmtp/awesome-xmtp)
    - [Create a PR](https://github.com/xmtp/awesome-xmtp)

- Create a commemorative NFT for your launch to reward early users


## Keep in touch post-launch

- Keep in touch using the [XMTP community platform](/community) that works best for you. This helps ensure that you hear about the latest SDK and content type releases, as well as upgrade and deprecation notices.

- Message `prxshant.eth` using [xmtp.chat](https://xmtp.chat/) to share your app metrics. Let’s test hypotheses and learn together to help ensure interaction success and improve XMTP for all.

## Contribute to XMTP

- Have a public goods project you want to build that fosters XMTP ecosystem growth?
    - Apply for an [XMTP grant](https://xmtp.org/grants).

- Is there something your app needs that the protocol doesn’t currently support?
    - Consider creating an [XMTP Improvement Proposal](https://github.com/xmtp/XIPs/blob/ae6fc638332f57f918d82a096f69b1e79df0bd0a/XIPs/xip-0-purpose-process.md) (XIP). Here’s a [template](https://github.com/xmtp/XIPs/blob/main/xip-template.md) you can use to create one.
    - Take a look at [existing XIPs](https://github.com/xmtp/XIPs/tree/main/XIPs). XIPs are meant to reflect the needs of the XMTP developer community and benefit from your input and expertise.        

- Contribute to an XMTP project that resonates with you. Here are a few repos of interest:
    - [xmtp-inbox-web](https://github.com/xmtp-labs/xmtp-inbox-web): XMTP Inbox web chat app
    - [xmtp-inbox-ios](https://github.com/xmtp-labs/xmtp-inbox-ios): XMTP Inbox iOS chat app
