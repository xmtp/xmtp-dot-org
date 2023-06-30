---
sidebar_label: Launch your app
sidebar_position: 10
---

# Prepare to launch your app built with XMTP

## Quality checklist run through

### Interoperable inbox

Your app provides an [interoperable inbox](/docs/concepts/interoperable-inbox) with the following characteristics:

- [ ]  New conversations created on your app should have `conversationID = "null"`
- [ ]  Display all conversations with `conversationID = "null"`
- [ ]  [Bonus] Display all conversations with non-null `conversationID` like `Lens.dev`, `GetConverse.app`, etc.
- [ ]  [Bonus] UI is intuitive and enables the user to understand the `conversationID`, if necessary
- [ ]  [Bonus] Provide inbox filters. Do not use tabs.

### Performance

Create a test wallet with ~2000 conversations and 1000 messages per conversation for the following performance tests. [Testing Guidance](https://xmtp.org/docs/tutorials/test-your-app)

- [ ]  Use a local database to cache as recommended [here](https://xmtp.org/docs/tutorials/performance)
- [ ]  For cold start (first load):
    - [ ]  Test wallet interactive in <15 sec
    - [ ]  Display ‘importing conversations’ and a progress bar
- [ ]  For Warm cache (all other loads & refreshes):
    - [ ]  Test wallet interactive in <1 sec

### UX

- [ ]  Navigating between conversations is smooth, fast, and intuitive
- [ ]  Sending messages works as expected
- [ ]  New conversations can be created
- [ ]  Conversation list is displayed and easily navigable
- [ ]  [Bonus] Has optimistic sending

### Resolution

- [ ]  Has identity resolution and reverse resolution support for ENS
- [ ]  [Bonus] Has identity resolution and reverse resolution support for UNS, cb.id, .lens, Cyberconnect

### Bugs & reliability

- [ ]  Does not create duplicate conversations
- [ ]  Does not show duplicate conversations; show most recent conversation for duplicates
- [ ]  Does not crash frequently
- [ ]  Does not have obvious or critical bugs

### SDK version

- [ ]  Does the integration use the latest SDK? If not, what features is it missing?

### Attachments

- [ ]  [Bonus] Support images
- [ ]  [Bonus] Has a GIF pick

## Get pre-launch feedback

Preparing to launch? Be sure to:

- Follow the development and UX best practices provided in the documentation of the XMTP features you included in your app
- Run through these [recommended test cases](test-your-app)
- Revisit these [performance guidelines](performance)
- Enable your app to track privacy-preserving metrics to help you understand app usage. For example:
  - \# of active wallets: Wallets sending at least one message
  - \# of active conversations: Conversations with at least one message
  - \# of returning conversations: Conversations with at least one message per participant

After your team has tested your app and reviewed the app best practices, message `prxshant.eth` using [xmtp.chat](https://xmtp.chat/) to get pre-launch feedback from XMTP Labs. Provide a link to a preview app, TestFlight, or demo video.

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

  - See the [XMTP Brand Guidelines](https://github.com/xmtp/brand)

- Tag the XMTP Labs team to help amplify your launch

  - [@xmtplabs](https://lenster.xyz/u/xmtplabs) on Lens
  - [@xmtp\_](https://twitter.com/xmtp_) on Twitter

- Have your app added to [Built with XMTP](/built-with-xmtp)

  - [Submit this form](https://forms.gle/p1VgVtkoGfHXANXt5)

- Have your project repo added to [awesome-xmtp](https://github.com/xmtp/awesome-xmtp)

  - [Create a PR](https://github.com/xmtp/awesome-xmtp)

- Create a commemorative NFT for your launch to reward early users

## Keep in touch post-launch

- Keep in touch using the [XMTP community platform](/docs/contribute) that works best for you. This helps ensure that you hear about the latest SDK and content type releases, as well as upgrade and deprecation notices.

- Message `prxshant.eth` using [xmtp.chat](https://xmtp.chat/) to share your app metrics. Let’s test hypotheses and learn together to help ensure interaction success and improve XMTP for all.
