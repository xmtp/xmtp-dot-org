---
sidebar_label: Launch your app
sidebar_position: 10
---

# Prepare and launch your app built with XMTP

Use this guide to prepare your app for a successful launch. 🚀

## Quality checklist

Before launching, review your app against this quality checklist. Meet the criteria in this checklist to help ensure you launch a best-in-class app built with XMTP.

### Interoperable inbox

Your app provides an [interoperable inbox](/docs/concepts/interoperable-inbox) with the following characteristics:

- [ ] New conversations created using your app should NOT have `conversationId`
- [ ] Display all conversations without `conversationId`
- [ ] [Bonus] Display all conversations with non-null `conversationId`, such as `Lens.dev`, `GetConverse.app`, etc.
- [ ] [Bonus] UI is intuitive and enables the user to understand the `conversationID`, if necessary
- [ ] [Bonus] Provide inbox filters. Do not use tabs.

### Performance

- [ ] [Use a local cache](/docs/tutorials/scale/performance)

### Test your app

- [ ] Test your app [against these test cases](/docs/tutorials/scale/test-your-app)

### UX

- [ ] Navigating between conversations is smooth, fast, and intuitive
- [ ] Sending messages works as expected
- [ ] New conversations can be created
- [ ] Conversation list is displayed and easily navigable
- [ ] [Bonus] Provides [optimistic sending](/docs/tutorials/optimistic-sending)

### Resolution

- [ ] Provides forward and reverse [identity resolution](/docs/tutorials/identity-resolution) support for ENS
- [ ] [Bonus] Provides forward and reverse identity resolution support for UNS, cb.id, .lens, Cyberconnect

### Bugs and reliability

- [ ] Does not create duplicate conversations
- [ ] Does not show duplicate conversations. For duplicates, show the most recent conversation only.
- [ ] Does not crash frequently
- [ ] Does not have obvious or critical bugs

### SDK version

- [ ] Uses the latest [XMTP client SDK](/docs/introduction#sdks). If not, which features is the app missing?

### Attachments

- [ ] [Bonus] Provides [image attachments](/docs/build/attachments)
- [ ] [Bonus] Provides a GIF picker

### Metrics

Enable your app to track privacy-preserving metrics to help you understand app usage. For example:

- [ ] \# of active wallets: Wallets sending at least one message
- [ ] \# of active conversations: Conversations with at least one message
- [ ] \# of returning conversations: Conversations with at least one message per participant

## Want more feedback?

Want more feedback after your team has run through the [quality checklist](#quality-checklist)?

Message `prxshant.eth` using [xmtp.chat](https://xmtp.chat/) to get pre-launch feedback from XMTP Labs. Provide a link to a preview app, TestFlight, or demo video.

## Launch your app

Way to go! 🎉 Here are some resources and ideas for promoting your app launch:

- Register for the Polygon [dApp Store Kit](https://docs.dappstorekit.io/docs/how%20to%20use%20the%20dapp%20store%20kit/dapp-registry-management/), which enables developers to launch their own dApp stores and list any dApp, including their own. To learn more, see the [dApp Store Kit Wiki](https://polygontechnology.notion.site/dApp-Store-Kit-Wiki-a3a9e7518b80400589aee8164550838e).

- Check out these launch posts for apps built with XMTP:

  - [Buttrfly](https://x.com/0xMoe_/status/1603126849852563456?s=20&t=wHy9mBrNR5ri146CbhCMUw)
  - [Coinbase Wallet](https://x.com/CoinbaseWallet/status/1679178581224873985?s=20)
  - [LensPort](https://x.com/lensport_io/status/1602370688139939841?s=20&t=wHy9mBrNR5ri146CbhCMUw)
  - [Lenster](https://x.com/lensterxyz/status/1588203593257009152?s=20&t=wHy9mBrNR5ri146CbhCMUw)
  - [meTokens](https://x.com/meTokens/status/1597983759462436870?s=20&t=wHy9mBrNR5ri146CbhCMUw)
  - [Orb](https://x.com/orbapp_/status/1618659601154715649?s=20)

- Need an XMTP logo for your announcement?

  - See the [XMTP Brand Guidelines](https://github.com/xmtp/brand)

- Tag the XMTP Labs team to help amplify your launch

  - [@xmtplabs](https://lenster.xyz/u/xmtplabs) on Lens
  - [@xmtp\_](https://x.com/xmtp_) on Twitter
  - [@xmtp](https://warpcast.com/xmtp) on Farcaster
  - [@xmtp_network](https://www.threads.net/@xmtp_network) on Threads

- Have your app added to [Built with XMTP](/built-with-xmtp)

  - [Submit this form](https://forms.gle/p1VgVtkoGfHXANXt5)

- Have your project repo added to [awesome-xmtp](https://github.com/xmtp/awesome-xmtp)

  - [Create a PR](https://github.com/xmtp/awesome-xmtp)

- Create a commemorative [POAP](https://app.poap.xyz/) for your launch to reward early users

## Keep in touch post-launch

- Keep in touch using the [XMTP community platform](/docs/contribute) that works best for you. This helps ensure that you hear about the latest SDK and content type releases, as well as upgrade and deprecation notices.

- Message `prxshant.eth` using [xmtp.chat](https://xmtp.chat/) to share your app metrics. Let’s test hypotheses and learn together to help ensure interaction success and improve XMTP for all.
