---
sidebar_label: Get featured
sidebar_position: 14
---

# Get featured

To be featured on the Built with XMTP page and receive amplification from XMTP's social channels, follow the checklist to provide a best-in-class messaging experience with your client.

## A. Quality checklist

Before launching, ensure your app meets the following criteria:

### Performance

- [ ] Implement a [Local-first cache](/docs/build/local-first).
- [ ] Cache conversation list `conversations.list()` to boost performance by 90%.
- [ ] Serialize securely stored `DecodedMessage` histories to reduce redundant downloads and decryptions.
- [ ] Implement message [pagination](/docs/build/messages#list-messages-in-a-conversation-with-pagination).
- [ ] [Compress message content](/docs/build/messages#compress-message-content) with a suitable compression algorithm.
- [ ] (Bonus) Implement [optimistic sending](/docs/tutorials/other/optimistic-sending).

### Bugs and reliability

- [ ] No duplicate conversations should be created or displayed. If duplicates exist, only the latest conversation should be visible.
- [ ] The app should be stable and not crash frequently.
- [ ] No visible critical bugs.

### SDK and app versions

- [ ] Make sure to use the [latest](/docs/changelog) XMTP client SDK.
- [ ] Always set an `appVersion` [value](/docs/build/authentication#configure-the-client).
- [ ] Follow our [testing tutorial](/docs/tutorials/debug-and-test)

### Content types

- [ ] Include image [remote attachments](/docs/build/messages/remote-attachment).
- [ ] Include [message replies](/docs/build/messages/reply)
- [ ] Include [message reactions](/docs/build/messages/reaction)
- [ ] Include [read receipts](docs/build/messages/read-receipt)
- [ ] (Bonus) Implement a [custom content type](/docs/tutorials/custom-ct)

### Resolution

- [ ] Offer forward and reverse [identity resolution](/docs/tutorials/identity-resolution) support for ENS.
- [ ] (Bonus) Support for UNS, cb.id, .lens, Cyberconnect.

### Metrics

Enable your app to keep track of:

- [ ] Number of active wallets: At least one message sent.
- [ ] Number of active conversations: At least one message.
- [ ] Number of returning conversations: A minimum of one message from each participant.

## B. Launch your app

Way to go! 🎉 Here are some resources and ideas for promoting your app launch:

- [ ] Register for the Polygon [dApp Store Kit](https://docs.dappstorekit.io/docs/how%20to%20use%20the%20dapp%20store%20kit/dapp-registry-management/), which enables developers to launch their own dApp stores and list any dApp, including their own. To learn more, see the [dApp Store Kit Wiki](https://www.notion.so/a3a9e7518b80400589aee8164550838e?pvs=21).
- [ ] Check out these launch posts for apps built with XMTP:
  - [Coinbase Wallet](https://x.com/CoinbaseWallet/status/1679178581224873985?s=20)
  - [Bello](https://twitter.com/xmtp_/status/1693978790618095972)
  - [Buttrfly](https://x.com/0xMoe_/status/1603126849852563456?s=20&t=wHy9mBrNR5ri146CbhCMUw)
  - [LensPort](https://x.com/lensport_io/status/1602370688139939841?s=20&t=wHy9mBrNR5ri146CbhCMUw)
  - [Lenster](https://x.com/lensterxyz/status/1588203593257009152?s=20&t=wHy9mBrNR5ri146CbhCMUw)
  - [Orb](https://x.com/orbapp_/status/1618659601154715649?s=20)
- [ ] Need an XMTP logo for your announcement?
  - See the [XMTP Brand Guidelines](https://github.com/xmtp/brand)
- [ ] Tag the XMTP Labs team to help amplify your launch
  - [@xmtplabs](https://lenster.xyz/u/xmtplabs) on Lens
  - [@xmtp\_](https://x.com/xmtp_) on Twitter
  - [@xmtp](https://warpcast.com/xmtp) on Farcaster
  - [@xmtp_network](https://www.threads.net/@xmtp_network) on Threads
- [ ] Have your app added to [Built with XMTP](/built-with-xmtp)
  - [Submit this form](https://forms.gle/p1VgVtkoGfHXANXt5)
- [ ] Have your project repo added to [awesome-xmtp](https://github.com/xmtp/awesome-xmtp)
  - [Create a PR](https://github.com/xmtp/awesome-xmtp)
- [ ] Create a commemorative [POAP](https://app.poap.xyz/) for your launch to reward early users

## C. Post-launch engagement

- [ ] Keep in touch using the [XMTP community platform](/docs/contribute) that works best for you. This helps ensure that you hear about the latest SDK and content type releases, as well as upgrade and deprecation notices.
- [ ] Message `prxshant.eth` using ([xmtp.chat](https://xmtp.chat/), [Converse](https://converse.xyz/), [Coinbase Wallet](https://www.coinbase.com/wallet), etc.) to share your app metrics. Let’s test hypotheses and learn together to help ensure interaction success and improve XMTP for all.
