---
sidebar_label: Start building
sidebar_position: 2
description: Use this list of high-level steps and considerations to start building with XMTP.
---

# Start building with XMTP

XMTP is an open protocol and network for secure web3 messaging. Developers build with XMTP client SDKs to provide messaging between blockchain accounts in their apps. The XMTP messaging API client takes care of:

- [Authentication](account-signatures) using an **XMTP identity that the user owns and controls**

- [End-to-end encryption](invitation-and-message-encryption) of **messages that the user owns and controls**

- Providing an **[interoperable inbox](interoperable-inbox)** accessible across apps built with XMTP

- Relaying messages to the **progressively decentralized** [XMTP network](architectural-overview#network-layer)

Here’s a list of high-level steps and considerations to help you start building with XMTP.


## Try messaging with an app built with XMTP

1. [**Start messaging with XMTP**](/docs/client-sdk/javascript/tutorials/start-messaging)
    
    Use an app built with XMTP to start learning how to build one.
    
2. **Need someone to send a test message to?**
    - `gm.xmtp.eth` (0x937C0d4a6294cdfa575de17382c7076b579DC176)  
    
        Message this XMTP message bot to get an immediate automated reply. 
        
    - `hi.xmtp.eth` (0x194c31cAe1418D5256E8c58e0d08Aee1046C6Ed0)  
    
        Message the XMTP Labs team and a human will reply, though not as quickly as `gm.xmtp.eth`! 🤖
        

## Start building your app

1. [**Build a simple hello world app**](/docs/client-sdk/javascript/tutorials/build-an-xmtp-hello-world-app)
    
    Get a feel for building with XMTP by building an app using 100% copy-and-paste commands and code.
    
2. **Ready to build your own app? Start with an XMTP client SDK:**

    - [xmtp-js](https://github.com/xmtp/xmtp-js)
    - [xmtp-android](https://github.com/xmtp/xmtp-android)
    - [xmtp-ios](https://github.com/xmtp/xmtp-ios)
    - [xmtp-flutter](https://github.com/xmtp/xmtp-flutter)

3. **Want to provide DMs in a Lens app?**

    To learn how, see [Build key XMTP chat features in a Lens app](/docs/client-sdk/javascript/tutorials/build-key-xmtp-chat-features-in-a-lens-app).
    
    Need a Lens handle? Message `prxshant.eth` using [xmtp.chat](https://xmtp.chat/)
    
4. [**Follow UX best practices**](ux-best-practices)

5. **Explore example apps for implementation guidance and inspiration:**

    - [https://demo.xmtp.chat/](https://demo.xmtp.chat/)  
    When you open the app, it creates a burner Ethereum account and connects it to the app. The app also creates and enables an XMTP identity for the account. And you’re ready to send demo messages with XMTP! The burner account is “burned” as soon as the demo session ends.
        
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
    - [Join and learn with the XMTP community](/community)
    - [Blog](/blog)
    - [Roadmap](/vision/roadmap)
    - [Litepaper - public draft](/vision/litepaper)


## Refine your app

- **Want to provide more than plain text messages?**  

  By default, building with XMTP SDKs supports plain text messages. If you’d like to provide other types of content in messages, you’ll use content types. To learn more, see [Content types](content-types), [Use content types](/docs/client-sdk/javascript/tutorials/use-content-types), and [Some new content types](/blog/attachments-and-remote-attachments).
    
- **Want to speed up conversation load time?**  

  For users with large numbers of conversations, loading conversations in real-time can be a very expensive operation. You can [use a persistent conversation cache](/docs/client-sdk/javascript/tutorials/use-a-persistent-conversation-cache) to improve load time.
    
- **Want to provide push notifications?**  

  See the [example-notification-server-go](https://github.com/xmtp/example-notification-server-go) for an example push notification server written in Golang that you can use as a reference for how you might provide a server for your app.  

    For Android apps, see [Enable the example app to send push notifications](https://github.com/xmtp/xmtp-android/blob/main/library/src/main/java/org/xmtp/android/library/push/README.md).
    
- **Want to filter conversations?**  

  By default, building with XMTP SDKs lists all conversations a user has regardless of which app started the conversation. This concept is called an [interoperable inbox](interoperable-inbox). If you want to provide filtered views of the user’s interoperable inbox, you can [use conversation filters](/docs/client-sdk/javascript/tutorials/filter-conversations).
    
- **Want to label conversations?**  

  When you display a user’s full interoperable inbox, the user may see multiple ongoing conversations they are having with another address. To help clarify the UX for users, [use conversation labels](/docs/client-sdk/javascript/tutorials/label-conversations).
    
- **Want app feedback from XMTP Labs?**  

  Message `prxshant.eth` using [xmtp.chat](https://xmtp.chat/) with a link to your demo video or TestFlight.


## Launch your app

- **Check out these launch posts for other apps built with XMTP:**

    - [Orb](https://twitter.com/orbapp_/status/1618659601154715649?s=20)
    - [meTokens](https://twitter.com/meTokens/status/1597983759462436870?s=20&t=wHy9mBrNR5ri146CbhCMUw)
    - [Buttrfly](https://twitter.com/0xMoe_/status/1603126849852563456?s=20&t=wHy9mBrNR5ri146CbhCMUw)
    - [Lenster](https://twitter.com/lensterxyz/status/1588203593257009152?s=20&t=wHy9mBrNR5ri146CbhCMUw)
    - [LensPort](https://twitter.com/lensport_io/status/1602370688139939841?s=20&t=wHy9mBrNR5ri146CbhCMUw)

- **Need an XMTP logo for your announcement?**  

  - See the [XMTP Brand Guidelines](https://github.com/xmtp/brand)
    
- **Tag the XMTP Labs team to help amplify your launch**

  - [@xmtplabs](https://lenster.xyz/u/xmtplabs) on Lens
  - [@xmtp_](https://twitter.com/xmtp_) on Twitter
    
- **Have your app added to [Built with XMTP](https://xmtp.org/built-with-xmtp)**  

  - [Submit this form](https://forms.gle/p1VgVtkoGfHXANXt5)
    
- **Have your project repo added to [awesome-xmtp](https://github.com/xmtp/awesome-xmtp)**  

  - [Create a PR](https://github.com/xmtp/awesome-xmtp)
    

## Contribute to XMTP

- **Have a public goods project you want to build that fosters XMTP ecosystem growth?**  

  - Apply for an [XMTP grant](/grants).
    
- **Is there something your app needs that the protocol doesn’t currently support?**  

  - Consider creating an [XMTP Improvement Proposal](https://github.com/xmtp/XIPs/blob/ae6fc638332f57f918d82a096f69b1e79df0bd0a/XIPs/xip-0-purpose-process.md) (XIP). Here’s a [template](https://github.com/xmtp/XIPs/blob/main/xip-template.md) you can use to create one.
