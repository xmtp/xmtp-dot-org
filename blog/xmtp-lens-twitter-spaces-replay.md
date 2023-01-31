---
slug: xmtp-lens-twitter-spaces-replay
hide_table_of_contents: true
title: "XMTP / Lens Twitter Spaces replay"
date: 2022-11-17
authors: peter
description: XMTP and Lens hosted a Twitter Spaces event on November 10 to dig into how developers can now use XMTP to add E2EE DMs into their Lens apps.
image: "./media/SpacesRecap.png"
tags:
- Developers
- Lens
- Messaging
---
import ReactPlayer from 'react-player'

XMTP and Lens hosted a Twitter Spaces event on November 10 to dig into how developers can now use XMTP to add E2EE DMs into their Lens apps.

<ReactPlayer width="100%" controls config = {{file: { attributes: { poster: 'https://blog.xmtp.com/content/images/size/w1460/2022/11/SpacesRecap.png' }}}} url='https://blog.xmtp.com/content/media/2022/11/XMTP_Twitter-Spaces-Event_FCv1-1.mp3' />

<!--truncate-->

<br/>

The chat between Len’s Stani Kulechov and XMTP’s Matt Galligan went deeper, of course, as they chopped it up on web3 messaging, the future of social, and how XMTP enables devs to build more robust apps than ever before.

Just press play to learn more about this milestone and what it means for the future of social communication and web3!

**You can read the full transcript below:**

**Matt Galligan - XMTP:** Awesome to have you here today. We are gathering together to, to talk about the big launch that we saw last week where Lens launched direct messages and to, and encrypted Lens. Direct messages, which are awesome. For those in the in the audience that are not as familiar with Lens I'll definitely let Stani get in there and talk all about it and what it is and why he got it started.

[00:00:23] And then that will certainly lead into what. XMTP is how it was involved inDMs in that launch. And just in general, what all of this means for web3 social, but I think also in the broader ecosystem of just social in general. There's been a lot of change in turmoil here lately around the social ecosystems.

[00:00:47] And why all of this stuff that's going down is is important to, to talk about.So why don't we kick off with a little bit of of what Lens is all about? How did it get started and what brought you to today and why are you excited about it

[00:01:02] **Stani Kulechov - Lens:** Yeah, definitely. So I mean something that's very fascinating.

[00:01:08] What we do at Aave, like in the team itself is for the past years we've seen like a victory bringing access to people globally. And we've seen that, with blockchain there's a lot of things that you can actually do and make an impact in a, like a fair democratic matter globally.

[00:01:26] So pretty much the first things that we were building. And started back in2017 is actually a way of land and borrow on on, on the blockchain by using smart projects so effectively. What the other protocol today is where you supply cryptographic assets and you earn. Yield, earn your assets and you can use your assets as a collateral to draw more liquidity.

[00:01:49] So you can borrow stable coins and finance a gold. That could be a yield opportunity in decent class finance or an actual finance gold in real life, paying for tuition, car payment, or mortgage. So what we created is a protocol that became very, widely used in decent finance and one of the leading protocols securing from five to 16 billion worth of value depending on the markets and the evaluations within those smart contracts.

[00:02:18] And it's running Ethereum Polygon, avalanche and also layer to AUM and optimism. So what we essentially created is equal access to global financial market where everyone has the same equal access to their data transparency and equal access to the same execution, following the same logic that what we have seen now, especially with the layer twos we see.

[00:02:42] This access and ownership idea that the tree brings can be extended to non-financial use cases. So especially with the rise of the NFTs in the past couple of years, what we notice is that NFTs gives the direct access and ownership for creators to their communities and audiences.

[00:03:03] And we started to actually think, look how we actually create that accessibility for users of the internet. So today we have roughly 5 billion internet users. Many of the people for example in our team David, Josh we all, we were, we grow up, grew up on internet mostly. So basically there's five users, but almost equal amount of social media users. So it just showcases like how much we are interacting ongoing basis and all the interactions we do online or offline when we meet people and make connections. That's basically creation of social capital. The fact that you can borrow sugar from your neighbor maybe without paying is based on your social capital instead of financial capital.

[00:03:49] But we just see this as basically value that is attached to you. And we wanted to actually create ownership. Like access to ownership of that value. So that's basically the Lens protocol that we have been building for a year and a half which means, traditionally in social media, you create a profile, let's say on Twitter or Instagram, and then you you create content, you share news, you share ideas you follow people, you like things and you create a lot of data and you create a lot of social capital. But it's actually looked into that platform. And with Lens protocol, what we wanted to do is actually. Bring that ownership of your social presence to the users by simply allowing them to create a profile where the ownership of that profile is at the user's hand and also the connections you make across the social graph.

[00:04:38] You have that ownership of your audience and your distribution. So where, for example crypto or let's say Bitcoin gives you ownership of your money.That was the kind of initial idea Lens protocol gives you the ownership of your social presence and social and capital. And to put it simply, it's just a smart contract-based protocol.

[00:04:59] You have the ability to create a profile, which is token is an NFT, follow other profiles and then publish content directly to your audience. And there is various different modules that allow also to the users to collect your content, either free or you can set collection piece so it creates this user generated content.

[00:05:22] And in, in a similar form of also new type of asset class. And that's just the infrastructure. So then you have different applications built on top of the Lens protocol, which are, for example the community build Lens. So Lens isn't our application. That's something that was spin out by the community.

[00:05:41] Even the names are similar. There's, or there's favor bunch of these applications and when you interact with them, you obviously when you create Lens profile, but when you're interacting ongoing basis, you don't sign transactions, you don't pay gas fees. So it feels like a traditional social media application.

[00:06:00] We've been abstracting away within the community like how these applications should work, and that's why like we effectively build a protocol where we believe that could be the backbone of the future of social media applications which empowers users to have flexibility to which applications they use, or algorithms they subscribe.

[00:06:21] They have the choice and also developers can build something new, exciting and use the same network effect that's already built within Lens Protocol.And just to end up with some statistics we have almost I mean we have, we are 200profiles away of having 100, 100,000 profiles made on S protocol.

[00:06:42] So it's a protocol that has. Deploy domain that's may so it's very new. It's still beta, it's still gated. And there's different ways of getting your profile in, in the current form, in the beta release. But we're super excited how far the whole community has been growing so far.

[00:06:58] Matt Galligan - XMTP: Awesome. Yeah. Thank you so much for sharing all of that. That's that's fantastic. And, as you were talking and starting to get into to the ideas of this social graph and and all the content that I happen to own as a user, it's an entirely new. Construct that I think is being applied to social.

[00:07:23] If we think about, say, identity and the history of it on the internet, so much of identity came down to the email address that you had. And in the earliest days, yeah, you might have had a web server. Which would've been relatively owned, but by now, it's impossible to really be able to use email effectively if you're not, say, using Google or Yahoo or one of these sort of blessed operators.

[00:07:47] If we look at the history of social and where things say, started out even in Web 2.0 I was there like when Twitter launched and Facebook launched, Facebook Connect and all of these amazing. Almost protocol like things that existed in the in the sort of mid to late 2000s. And the promise of all of them was pretty strong.

[00:08:13] We'll take care of the social graph, you build the app, build what you're good at and we'll all be able to, ride off in the sunset together. And we all know how that played out, which was that. Instagram did that to build off the back of Twitter and Facebook and got shut down from their APIs.

[00:08:31] And we saw that even Twitter was coming off the back of Facebook and got their own integrations shut down and across the. Across the whole web 2.0social ecosystem. You would see, the castles get built and then the walls go up shortly thereafter and feeling a little bit duped.

[00:08:50] And here we are, 10, 15 years later and all of that activity has consolidated just so much. I'm curious, as you thought about building. Open or ownable social graph. How much you had looked to the, say sins of the past to figure out what might be the best path for apps moving forward.

[00:09:14] This in focusing on this permissionless as a as a core. Tenant to your protocol how much went into that in the sort of development of the earliest parts ofLens?

[00:09:25] Stani Kulechov - Lens: One of the exciting things about Web3 is that permission nature, which actually is the comp is actually the component for the access. And that's, the access and the permission of nature means that builders they can build new applications without actually being restricted of innovating.

[00:09:43] And I think that's very valuable if we wanna see more and more exciting social media applications. And when we look into the past, like. Lot of interactions in social media happens in a bigger platforms, and it's very rare that we see new social media applications pop out. I would say Be Real is one of the latest ones and there's few other interesting ones and attempts, but like it really takes a lot of work on the, like a network effect side to scale a social media application.

[00:10:11] We wanted to make it as easy as possible for developers to, to build on that experience layer more than focusing on the infrastructure. But also because, we are using blockchain technology inland protocol and there's reason for that. Because your profile is on. And your follower relationships are on chain.

[00:10:28] It actually means that they're secured by the blockchain. So no one can actually take away of your presence or your follower relationships, your basic social draft and being on chain. It also means that there's democratic access for everyone to come and compute on that data as well. So meaning that anyone can actually come up with interesting algorithms.

[00:10:52] and service those algorithms through the middleware that we have. I think Josh and David will talk more about that as well, and the different applications and experiences. So it's just big change in the dynamics where, when you give the ownership and power to the users you really change the way that applications will function and algorithms too, because now they really have to value users as they can actually go from one application to.

[00:11:16] To find an experience or a community that is aligned with their values. So the permissionless nature is, One of the cornerstones, and these are just the blockchain guarantees. So effectively as a developer or a user, you can effectively can choose what you want to use what you wanna secure on chain, what kind of post you wanna make, more privately and how much you wanna add that on chain component.

[00:11:43] But it, it brings up possibility as well with different. Modules. I dunno ifJosh, David you have something to add as well on, on this question?[00:11:54] David - Lens: It's quite interesting, this question, I think, one of the, one of

the great things about Lens is that it's a super, super flexible system.

[00:12:00] We always like to joke that it's almost incomplete as a protocol intentionally so it can be combined with many different use cases and applications.And we've seen that a lot by teams building in all kinds of different features through the various modules, but also on the middleware. Where we see, we've seen apps build this new paradigm by stitching together different applications across different blockchains.

[00:12:22] And we see this integration with XMTP as a strong point in that narrative by taking XMTP to do messages and allowing to use things like Lens to allow usernames to be their verification through proof of humanity and other lists. And so I think this, the story of Lens and the story of kind of this middleware layer along the creation of applications that stitch together at the best of all of these decentralized on chain experiences into apps that users will actually use.

[00:12:49] Matt Galligan - XMTP: Yeah, it makes a ton of sense. And it there's an interesting tie back to one of the. The origin stories of XMTP where, you know a little a little while back in 2021 as NFTs were starting to come up.

[00:13:04] I'd heard this story from Mike Shinoda who told this history of the bandLincoln Park's use of Facebook and how they had grown. This fan base tirelessly through the platform only to one day discover that the algorithm had changed and that they had Facebook had demoted organic reach, meaning just actual usage of the platform and commenting and liking and things like that.

[00:13:28] And sending out posts in favor of promoted. Reach, so paying for it. So they felt rugged in having built this and, for all intents of purposes thought that they owned that that relationship, that graph and only to, to eventually have Facebook just come in and and take the reins and wipe that out.

[00:13:47] And what I hear you saying is that you know that whole experience from the graph to the posts, to the algorithms that are used to display those things in Lens are all owned by the user. Such that something like that. Would have a hard time actually playing out. And we are finding ourselves in a place where we're not as beholden to say any one provider or centralized authority.

[00:14:14] When we, when you, first off, I should just pause and if that resonates at all. But I am curious. The experiences that we have in any of these protocols at the end of the day, they are experienced through front ends. So how do you see Lens, say in five to 10 years and the front ends that we experience?

[00:14:34] The protocol in and how we don't just repeat the past where certain, say players have a lot more power in that relationship than others.

[00:14:49] Stani Kulechov - Lens: Yeah. The, the current landscape of social is that, we went from a internet. People were hosting webpages to more of platforms where you could actually share distributed content create connections message to people across, the world and very efficiently so that the centralized architecture of Internet makes sense because you basically create a lot of efficiency.

[00:15:14] The downside is that, when you put a lot of trust and faith and value into the bigger platforms you, you basically are very dependent on them as well. So you really can't do a dig digital exit out of a, let's say, platform like Twitter. Here for example, because I will leave my followers be behind and all this years, so that.

[00:15:38] How long we've seen social media now there isn't any kind of a standard on how you could actually transfer your follower base to another platform, even if it, that's actually technically possible. That's even easier to do it off chain, right? There isn't incentives there because all of these platforms and networks they're trying to build for themselves.

[00:15:59] The stronger the network effect, let's say Twitter or Facebook has, it's harder to compete. So that's why whenever you see people trying to rebuild web two social with kind of like a web3 covered applications that are similar, that already, it's the hardest thing to do because obviously you get a lot of early adopters that are excited about the future of the application and being early.

[00:16:26] But at the same time, you're competing with network effects that really are pretty much locked in. So people go to Twitter because, you hear the news there that is close to your whatever you're following. You go to TikTok because the algorithm just finds whatever is interesting for you at that moment.

[00:16:46] You feel missed out if you don't do that. So like those networks are very strong and at the same time, these platforms are figuring out constantly how to make their algorithms stronger for keeping the users, but also providing content, consuming content, and then focusing on advertising.

[00:17:07] And advertising is interesting because, The platforms, they're so tied into advertising and that's basically a very fluctuating income source. And at the same time, not only it's fluctuating income source and depends on the market conditions, is that a lot of these brands actually apply this idea of brand safety.

[00:17:28] You wanna advertise where there's specific type of content and that.Moderation or duration or however you call it effectively, that necessarily doesn't reflect the values of users. So it, it's a big challenge. So we, when you're dealing with a lot platform, you really don't have much choice than effectively you can complain, but whether there's any changes, that's another story.

[00:17:54] So with an open network, open platform, You change the whole mindset that, what if we actually start just building algorithms and making that access to everyone to build and consume and then see what people actually are, most excited about. And that gives us the vision and with the experiences is the same.

[00:18:15] So I think we will see a lot of different experiences. But what's gonna be exciting is that some of these experiences are quite similar. A lot of components in social is baked in a similar way. So you have followers you have who you follow you post content, you have feed. A lot of things are standardized, but at the same time you can trade new things.

[00:18:37] But we will see same experiences, but just. There's a community around a particular application because the way they moderate and tools like Cultivator Dial that we launched not while back ago, where, there's community members that can actually curate content. And also if you disagree with the content creation, you can spin up your own cultivator dial.

[00:19:00] So there is like a complete shift in the. Paradigm of actually how we approach, the curation, the experiences. Because you are in open networks and in open networks, you really have to listen to the users and be aligned with their values. And I think that's the biggest game changer.

[00:19:18] Matt Galligan - XMTP:  It's really incredible to lean in on the this sort of permissionless building and building any front end that you would care to on top of.Of this protocol, the, I know that earlier this week you were tweeting out about Lenster. Really getting into the spotlight on, on GitHub, Lenster being one of the front ends to the Lens protocol and where Lens DMs have been deployed.

[00:19:43] First you the the developer behind it is awesome and we certainly had a great time in helping on building out the DMs. But the coolest thing about this is that here you have Lenster do XYZ as one place to to go to it. I just came back from East San Francisco Hackathon where Lens was also there.

[00:20:04] And we would see participants, hackers come up and show us their applications. And in some case, they were literal forks of Lenster, like they had gone to GitHub, forked it. Tweaked it, made it their own, made it for something that was unique to their community and launched it. And to me, that's the promise of this.

[00:20:24] Where it's if you're no longer happy with or not even that, if you wanna focus and find a community and go deep with them on a particular type of interaction. Or group of people, you can build your own and the value there in that I still own my profile can go from place to place is awesome.

[00:20:43] I wanna, toss in one other thing and then jump over to DMs. There's a lot of talk right now about alternate social platforms to say Twitter. And we're seeing talk of the web3 solutions, but there's also. Mastodon, which has been around and a bit obscure for quite a long time.

[00:21:02] But I think it's worth calling out that as there's some of this chatter talking about people checking out Mastodon and things like that. The thing that I find so useful about Lens, and let's just say even blockchains in general, is. The distinction between the federated approach to say the way that Mastodon doing it, where you have a server that you sign into and then all of your interactions and graph and things like that is determined and based off of that one server that something likeLens has a we talk about decentralization.

[00:21:39] It has a logical centralization. Where it is, one graph, one profile, all that stuff. And that is what's portable. So your interface, as you say, the experience layer is what gets to change and not the fundamentals. Whereas instead of a Mastodon world, it's the fundamentals that change. And your profile isn't as say a portable or you at least beholden to the whims of that one server.

[00:22:05] So I love seeing, how Lens apps can just come along and fork and build an entirely new interface. Switching gears for just a sec. I wanna talk about the DM feature and maybe even a little bit of how it might have gotten started, which is, In some conversations that you and I have had in the past here we are jumping around on a bunch of different platforms and one to the next don't quite know where I'm deeming you at any given time.

[00:22:31] And it's cool then in retrospect to see Lens DMS launch with XMTP. AndI'd love to dig a little bit in on that. The one most unique thing about DMs in the Lens context now is. Much in the same way that I can take my profile with me from different front ends. You'll also be able to take your DMs with you into the different front ends.

[00:22:53] And so if somebody goes in and forks Lenster or builds something entirely new the DMs will still be there, the DMs will work. And it feels like such a contrast to say siloed experiences of the past. How do you see Web3 messaging evolving from here? I know we talk a lot about wallet-to-wallet chat in the in the ecosystem in general, but like where do you see the the sort of unique cases or the interesting use cases that could emerge from that?

[00:23:22] And how does Lens lean into or benefit from where we go. David or you wanna take the kind of like the dev perspective?[00:23:44] David - Lens: Yeah, I think Josh can jump in probably with some more color in a bit, but I would say from the dev side of things first off, best part of the working with the XMTP team to get this out has been surely great.

[00:23:54] The documentation has been incredible. And most of it was done, I guess fully out in open source, done as a PR directly to Lenster and the other UIs directly. I know Josh can talk a bit more about what's coming in the API layer, our middleware layer to allow this to be much more adopted across the OR option to be adopted across the rest of the Lens ecosystem to provide that incredible experience of not just traveling with your social graph, but traveling with your DMs.

[00:24:17] Josh, you wanna take that?

[00:24:20] **Josh - Lens:** Yes. Yeah, firstly, I wanna say that it was amazing working with the team. The beauty of Lens and it kind of shin. Is how open and transparent it is and how another team who has the same moral compass as us can ship something entirely. Yes. We spec out a kind of standard for the DM so we can work, they took, the team took ownership of it and they did.

[00:24:46] And they did a PR and Lenster and. Fantastic. Now we have DMs onLens without even the core Lens team changing or working everything, which I think is just a testament to how powerful this is and how we can build together. So first I wanna say that secondly I love the we love the beauty of the portability of the DMs, of course, with Lens of biggest thing is we want to abstract the wallet as much as we can. We want take it be profile to profile. We wanna make it feel just as it would onTwitter, et cetera, et cetera. And coming soon when we have the SDK for Lens, we will want to baking features like separation of degree within your messages. Being able to hide messages like and order these kind of things, build on top of messaging protocol to allow us to give that tailored, fitted, messaging platform of what we seeLens to be.

[00:25:38] So yeah, we see some really exciting things to come when we start putting this nasally within our SDK, which will come, later on. So yeah, super, super excited.

[00:25:46] Matt Galligan - XMTP: Awesome. Yeah. And maybe it's a good opportunity to talk a little bit about some of the Lens specific things that that came into XMTP.

[00:25:55] There's this vast roadmap that that has been planned. And the cool thing is that with each and every. Project and team that wants to go build something on and with XMTP we learn about its, unique properties that may, give us the information we need to bring something out of the roadmap prioritize it.

[00:26:16] And, at least, I'd love to to tap you in on this. For those that that dunno.Elise is on front end here at XMTP and has been an awesome new member of the team. A handful of months ago joined and was a key player in getting DMs to work with with Lens and maybe digging in on some of the Lens specific.

[00:26:38] Things that came into play for XMTP and maybe a little bit about how they would be able to be used elsewhere. I'm thinking about like conversation IDs and things like that. Would just love to hear how the integration went and how you see it working for subsequent Lens teams.

[00:26:55] **Elise Alix - XMTP:** Oh my gosh, yes.

[00:26:56] Hi everyone. I'm Elise. Thank you, Matt for the intro. Yeah. So I think first of all, I wanna step back and say it was so important to us to actually ship something that you could feel and use and actually see like that the messages come through.Like we could have announced a partnership and just been like here we, our partners now.

[00:27:17] Happy building, good luck. But I really wanna shout out Josh for intro'ing us to yo who I see here in the crowd. Yo could not have been more welcoming into his repo to actually demonstrate DMs end to end within the Lens protocol. So it's been honestly such a pleasure and it just feels like right place, right time, and I cannot be more excited about this project.

[00:27:38] So I just wanna start there and say thank you. But yeah, so really we had this network up and running. You could send messages in our demo site today. But the piece that was missing for Lens specific was we have a, like universal inbox feel.So you could take your messages, break down these silos and move from platform to platform.

[00:28:01] However, we also wanted to make it so that developers could say, I want specifically, I want to only see. DMs. So we introduce this way of filtering by conversation id which is documented in our how to get started that I'm sure we can link out. But basically as a developer, you can now specify I want to see messages from this like wallet address, but also specific to this conversation id, which is just a.

[00:28:35] And then you can get only your Lens DMs within the Lens context. So you could still, as a developer break down those walls between Lens ecosystems, but you won't get the like messages that are elsewhere on the XMTP network in your platform, if that makes sense. So that was really the biggest protocol change in order to make this work.

[00:28:58] Matt Galligan - XMTP: But. I would also like to quickly add that with that we, we were, even though it was put on Lenster to start off with we wanted to set a standard. And if you go to the docks now, you have a standard just as we have a publication standard of a naming convention that you have to conform to with amazing guides on how to get it up and running, and just as powerful as it is that you inherit publications.

[00:29:22] Cross chain sorry. Cross apps. You will also have that you can put DMs on your app and inherit exactly the same thing, which is the whole idea of portability and composability throughout the Lens ecosystem, which I, again, I think it's amazing. I'm glad we got to execute it as we did.

[00:29:38] Matt Galligan - XMTP: I'd love to start bringing up some questions, but areal quick mention before that and folks.

[00:29:44] Raising their hands if they would like. But the experience of being at the hackathon. Seeing the ingenuity in the projects that were being built, that were usingLens and XMTP was mind blowing. We were days away from this launch days since the DM launch and people were jumping right in and building and.

[00:30:08] The beauty being, open source, no API keys to speak of, dig right in. And you saw some really cool features of say apps that were built around gaming and being able to talk with other players and ones that were built around, say being able to put a bounty on your attention and messages.

[00:30:26] Just incredible stuff. So it was so cool to see and that open source and permissionless. Focus is just such a different feel than everything that I've done so far in building in one, two.

[00:30:37] David - Lens: Go ahead Matt. I was there. One of the coolest things to actually see was one team take this really powerful new tech of XMTP and Lens and actually build a retro.

[00:30:46] I think one of the winning SF projects was actually a beeper, like a pager system built with. With really cool art just shows the creativity that's unlocked when you have these really simple building blocks, you really get to let devs and creators run free. Yeah, it was really cool stuff that was built in San Francisco and we can't wait to see what else devs build now that this is out there.

[00:31:04] Absolutely. Why don't we bring on folks for questions if if they happen to have any. We've got Tommy.

[00:31:12] Stani Kulechov - Lens: I'm not sure. Tommy can know you're muted, but

[00:31:14] Matt Galligan - XMTP: Just let you know you're muted. All right. Ms.Evans some trouble there. Why don't we see if anybody else is up? Feel free to send in a request and we will bring them on up.

[00:31:27] Stani Kulechov - Lens: I think Tommy's just un muted. Tommy, have you got a question?

[00:31:31] Matt Galligan - XMTP: Let's see. We'll bring 'em back up. I don't know what happened there. In the meantime, for anybody that hasn't hasn't used it, hasn't experienced it Lens.xyz fired up and start sending DMs. We have a profile up forXMTP Labs.

[00:31:44] We have one. I'm up there as Galligan dot Lens. Shoot me a dm. Happy to have a chat there. Also, if you have question. Maybe don't want to jump up into the speaker section. Go ahead and just maybe DM us directly in, in here as well and we can address it. The project that you were talking about beeper was a ton of fun to see where you just had.

[00:32:07] Say somebody that could send out a beep and it would go to everybody else that had these beepers. And it was all based on NFT. Like my my wallet now has an NFT that is displaying the beeps from the others that are in that beeper network. All powered through Lens and XMTP. It was it was cool to see any questions,Not not seeing too many just yet.

[00:32:27] In any case the Lens team, I'd love to hear a little bit more about the future of Lens and where you see things going from here. Maybe as it relates to communication, both public and and private communications.

[00:32:43] David - Lens: I think one of the things we're super excited about thisXMTPT connection is the is the fact that it's not just wallet to wallet like many of the other chat solutions out there, that it's designed to truly be profile to profile in the context with Lens.

[00:32:56] One of the big things, again, Lens being programmable, you can have multi-user accounts. This is something that isn't really present on majority of social networking. We're excited to see, again, we view DAUs and we view groups. First-class objects in the Lens system. And so I do see a future where the next time there's a collaboration between the Lens team and XMTP or between two differentDAUs, you can have all of the members of their comms team communicating profile to profile fully end to end encrypted in a way where you can't rub the conversation by the leading account as you currently can on Twitter and other legacy social media.

[00:33:29] Super excited to see how people use these new primitives.

[00:33:31] Matt Galligan - XMTP: Yeah. Yeah. And David, just to to go deeper on that for just a moment. The fact that this is all happening with on chain identities with the keys, with the things that we own also means that, it is able to be authenticated.

[00:33:45] If I'm getting a message from say, a a Lens protocol support , I know I'm going straight to support here. I can know that it's real. Cryptographically, I can know that it is real and authentic. And that's huge because in a space where you have millions of dollars that are lost to scams and fishing because we're using insecureplatforms like.

[00:34:05] Like DMs and discord and stuff like that. It's pretty awesome. So hopefully as we see these brand things pop up, being able to rely on solutions like this that are crypto native is gonna just be huge.

[00:34:17] Elise Alix - XMTP: I was gonna say, if we're talking about future of messaging, are we allowed to talk about what we see coming in the future?

[00:34:24] Matt Galligan - XMTP: Hey, I would love it. I wanna take a moment, a couple questions, but let's definitely round it out with some of that stuff. Give, have a little bit of alpha. That be awesome. So re let's bring you up. I would love to take any question you've got. So bring the speakers in. Floor is yours. Oh, hello.

[00:34:44] Spaces guest: Can you guys hear? Sure can. Ah, yeah. Hey, so thanks for this. And yeah, so I'm actually a user of an app called Favor. I believe they have, they build on on Lens, right? And and what I see is the

[00:35:00] interaction is quite fun over there. But to to actually have a really.

[00:35:06] Now you guys familiar with favor, right? But my question is besides just replicating the experience of like web tools social media platforms or like the way that they interact with the users. Or how user interact. I'm not talking about like the, decentralized the user data or anything just about the interface.

[00:35:25] So do you guys have any suggestion or or any plans for some like web3native interface? It would provide like a more fun experience not very techy or anything, but just more fun. For example, people can create a lot of meme in their face or something, something that are more entertaining than Snapchat, than TikTok when they just when they first come down.

[00:35:49] Yeah. Thanks.

[00:35:50] Stani Kulechov - Lens: Yeah. Say that. Oh, Chase, you wanna go? No.Yeah. Okay. I was just gonna quickly say that every everything you described is down to how, we give all the tools for apps to be able to build the most amazing UI that's possible. So for sure, we'd love to see people pushing, a Snapchat version oran Instagram version or these kind of things.

[00:36:16] And I feel like they have all the tools. Like with all the data, with all with the api, with the contracts to go and build. That's just how creative those builders could be. That's just what I wanted to say with that.

[00:36:26] Matt Galligan - XMTP: Stani, you can carry on.

[00:36:28] Stani Kulechov - Lens: Yeah I really love the reme that pull, because it's like a concept where, you can create a meme not necessarily use an old template, but like actual new meme.

[00:36:38] And then once you create it, anyone can come and actually remix that meme and select collection fees. So effectively you can actually you can monetize by creating memes and getting remixed and also sharing that revenue with other  creators. There's also another interesting platform called Memester.

[00:36:55] So that's just recently launched Memester.xyz.

[00:37:00] The creator was just a basically a power user on Lens and created on a daily basis a lot of memes.And, he decided to create an actual meme creation application on top of Lens protocol, which was pretty cool. But regarding like an over overview and also, yeah.

[00:37:18] One thing I need to mention also, Lens. It allows you to actually curate your feed by swiping different images that you, that are on Lens protocol and curate your feed. But one thing I wanna mention is that a lot of these experiences are very experiment experimental still, the protocol has been live for a few months now, and I think like the more we like progress as a community, we are gonna see more and more Nobel and exciting experiences.

[00:37:46] and one of the reasons are that you really don't need to rebuild the whole kind of like a social media application infrastructure, but you can actually focus on that experience. And, there is almost 100,000 profiles at the [00:38:00] moment onLens protocol, meaning that if you create something exciting, you have that user base and that's of people who own their own.

[00:38:08] Social media presence. So over time as it grows, it's a big opportunity for creatives and developers to build very exciting experiences. And more and more, since you have less benefit needed on the back end and on that infrastructure, you can actually focus more on the experiences and. The audiences and that part.

[00:38:29] So I'm very excited on what we will see for the next six months.

[00:38:32] Matt Galligan - XMTP: Not having to recreate everything from the ground up is just such a freaking game changer. Like I think about say so or say eCommerce websites and it's like how many people going and building new e-

commerce websites today go and build the shopping cart infrastructure from the ground up like we did back in the nineties and two thousands.

[00:38:52] We don't like, it's all abstracted now. And things like Lens for all of the social interactions and social graphs and profiles [00:39:00] and just being able to start and focus on the things that you're interested in. Awesome. DMs, encryption, like all the nasty bits about how all that works. Abstracted. Cool.

[00:40:03] Matt Galligan - XMTP: Sure. Thank you. All right. Let's let's bring it bring it back around. I know that at least wanted to to talk a little bit about some of the newer stuff. I. Tap on one other thing for XMTP, which is some of the stuff that I saw over the weekend.

[00:40:18] And then. Tap it over to Elise. But there's one thing about XMTP that is that I love, which is that this payload, these messages are extensible. That, at the outside it's all encrypted. And nobody knows what's in there. But once you open up these messages they can contain any sort of payload.

[00:40:36] That is one of the ways. Conversation Id was able to get done because it's all built into the payload. Didn't have to worry about too much more from the protocol perspective, but at the at the experience at the experience around sf SF Hackathon, we saw some really cool use cases. What we call content types where you can add in arbitrary stuff right into the payload.

[00:41:02] And at least one of the teams was building say a couch hopping like lightweight Airbnb for web3. And you were able to say, have buttons right? In the messages that allowed you to accept or decline. There was another that came along. A full-blown turn based game client that was passing moves back and forth over messages over XMTP.

[00:41:26] So for those that in the audience, I'm thinking about this as you're thinking about Lens and DMS and these experiences leaning into the sort of nooks and crannies of this protocol could be really powerful. I guess this is just a call to the community to go build what we used to have in Facebook with games.

[00:41:48] Cuz it was fun back in the day to just have a social graph where I could go build games and they worked. We made the platform do it over XMTP, transmit the game moves back and forth via DMs and let's go build some cool stuff with the social graph in there. I would love to see that kind of stuff.

[00:42:05] Lens: And I would just like to add to that, like one thing that you were saying there, Matt, like you can push this to any kind of level, like I'm imagining token gate messages, which are encrypted, all of these kind of amazing things that can only be decrypted by you owning a hundred are they, et cetera, et cetera.

[00:42:25] Like this can get pushed very far. And I'm very excited totally about how far we could take.[00:42:32] Matt Galligan - XMTP: Yeah, it's gonna be fun, to say the least. At least.Yeah. Elise?

[00:42:37] Elise Alix - XMTP: Yeah. So in addition to the different types of messages you can have, I think one thing that is super important to me personally is we currently have a JavaScript SDK, which is why it made it so great to have Lenster as our first partner because they are a React app, and it worked really nicely.

[00:42:55] However, when you think about, so social and message, I'm

[00:43:00]sure coming to your phone is top of mind. So we are currently working to get our SDK available on every platform, essentially. So yeah, we have Flutter, we're working to do React native and then also we wanna have both iOS and Android native SDKs as well.

[00:43:19] So when that comes along, I think the next step as well will. Push notifications. We want people to be able to see the messages as they get them. So I just wanna shout out where Nick is like writing up design docs on that right now. So yeah, we want people to be able to use XMTP across every platform and every appthat uses Lens.

[00:43:42] Matt Galligan - XMTP: Yeah. Awesome. Thanks for that, Elise. And I know that the Lens folks have to drop, and we are at our time. Just wanted to say thanks to everybody that joined us today. By all means, if anybody wants to follow up you can reach us, directly on any of our socials XMTP.org Lens.xyz. Reach out to us.

[00:44:02] Let's go build together. I think the Lens tagline is, Let's fucking grow. This was really. Thanks everybody.
