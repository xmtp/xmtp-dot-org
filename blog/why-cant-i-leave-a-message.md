---
slug: why-cant-i-leave-a-message-for-any-wallet-address-in-web3-introducing-youve-got-mail-an-idea-we-want-to-build-with-the-community
hide_table_of_contents: true
title: Why can't I leave a message for any wallet address in web3? Introducing "You've Got Mail"
date: 2022-06-24
authors: shane
description: Introducing "You've Got Mail" - An idea we want to build with the XMTP community
image: "media/CleanShot-2022-06-24-at-12.11.50@2x-1.png"
---
import ReactPlayer from 'react-player'

An idea we want to build with the XMTP community.

![](media/CleanShot-2022-06-24-at-12.11.50@2x-1.png)

<!--truncate-->

Every day on Twitter & Discord people are trying to figure out how to reach a wallet address that they can't otherwise reach. The problem today is that there isn’t an established wallet-based inbox that everyone checks.

We need a fun and lightweight way to leave messages for people and have simple ways to let them know there's a message waiting for them.

Here's what happens:

1. You see an NFT or ENS name that you want
2. It's owned by wallet address 0x.......
3. There's no other information about this wallet address online

We believe that a simple idea could help solve this problem using XMTP. Introducing: "You've Got Mail." It’s a simple app using XMTP that is both an inbox and a way to tell people to check it. Here's a video of me sharing this concept with our team at XMTP Labs:

<ReactPlayer width="100%" controls url='https://youtu.be/cmE0xNrls_E' />

The XMTP Labs team discussing this idea

We want to start sharing more raw ideas that we discuss internally with our community. If you'd like to build this and take this idea and run with it or have more ideas for this, say hello! Join our Discord or send us a note on Twitter or email us here!

Here are the bullet points of how we'd think about the problem and v1 for this simple idea:

- Focus on the experience of leaving a message for a wallet address that is probably not checking their inbox. (Today, people aren’t checking an inbox or know their wallet can even receive a message so you just get sad when no one ever replies. Set that expectation up front.)
- Let the sender send them a message over XMTP, but don’t stop there:
- Help the sender try to reach them in other ways to let them know they have a message. 2 simple ideas:
- Mint them a simple, branded NFT that says a message is waiting for them
- Pull in outside data about the address to try to find a connection to them. Imagine pulling in ENS names, other wallets they've interacted with that are connected to identity information, Discord links to groups they are a part of based on NFTs, etc etc etc.
- The branded NFT could be that a message is waiting for you on Youvegotmail.xyz (simple description on this that says: “Leave a message for any wallet, then chat. You have 4 messages waiting for you.”
- When the recipient visits the site, they can read all the messages they’ve received over XMTP.
- We joked that the website could feel very retro, classic, late 90s, ugly blues like AOL, AOL sounds. Like [this](https://winworldpc.com/product/aol-instant-messenge/10) or [this](https://poolsuite.net/) or [this](https://www.youtube.com/watch?v=dFuUCpBbbHw).
- The site could be inspired by https://haveibeenpwned.com/  - go to it, insert your email, and see if you’ve been pwned. This should be the fun and eye-opening part of Youvegotmail.xyz and you can simply click “Do I have messages” or “Send or leave a message to any wallet address”

We want to help someone build this idea, have fun with it, and make it their own. We will support product UX, design, and awareness when it is ready!

We want to meet you.

Shane Mac

P.S. Right now messages can only be sent to addresses that have used XMTP, but we’re working on a way to send messages to any address.

P.P.S. Here's my incredible design UX for the landing page :)

![](media/CleanShot-2022-06-22-at-14.21.34@2x.png)
