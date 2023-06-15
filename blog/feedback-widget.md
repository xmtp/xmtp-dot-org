---
hide_table_of_contents: true
title: "Build a feedback widget for your website—using XMTP"
date: 2023-06-15
authors: jha
image: "./media/feedback-widget/feedback-widget.gif"
description: "Introducing two new content types: Attachment and Remote Attachment."
tags:
  - Messaging
  - Developers
---

import FeedbackWidget from '/src/components/FeedbackWidget'
import yash from './media/feedback-widget/yash-shaka.gif';
import jha from './media/feedback-widget/peace-pizza.gif';
import eleanor from './media/feedback-widget/eleanor-sparkles.gif';
import darick from './media/feedback-widget/tale-of-two-daricks.gif';
import daria from './media/feedback-widget/daria-and-her-doggo.gif';

Have we got a fun project to share today!

This project is the result of a 🤝 collaboration between XMTP Labs team members. As employees of XMTP Labs, you may see some of us in the XMTP [Discord](https://discord.gg/xmtp) and [GitHub](https://github.com/xmtp) repos working on projects that promote and support the development and global adoption of XMTP.

A few weeks ago, Yash, PM of Developer Experience, suggested that we provide a feedback widget on [xmtp.org](http://xmtp.org), with the goal of learning what’s working and not working for people using the site.

<!--truncate-->

<div style={{ display: "flex", justifyContent: "center" }}>
    <img src={yash} style={{ width:"250px", align: "center" }} />
</div>
<br/>

As a tech writer and one of the maintainers of the site, I started looking for a prebuilt solution that we could easily plug into the site.

<div style={{ display: "flex", justifyContent: "center" }}>
    <img src={jha} style={{width:"250px"}} />
</div>
<br/>

These were our seemingly simple requirements:

- **Collects feedback without using cookies**

  We wanted a cookieless solution to align with XMTP’s overall principles around privacy preservation. For example, on xmtp.org, we use Plausible for cookieless analytics.

- **Provides user friendly and customizable UX and visual design patterns**

  With the help of Eleanor, a UX researcher, we have a few hypotheses about the feedback options. And we’d like to be able to easily adjust them based on our learnings.

    <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={eleanor} style={{width:"250px"}}/>
    </div>
    <br/>

    With the help of Darick, a design manager, we have a design system for [xmtp.org](http://xmtp.org). And we’d like the visual design of the widget to adhere to the system.

    <div style={{ display: "flex", justifyContent: "center" }}>
    <img src={darick} style={{width:"250px"}}/>
    </div>

Welp, one solution provides the UX pattern we wanted, but uses cookies.

And the cookieless solution doesn't allow for the UX pattern we wanted.

And both solutions would have required some heavy lifting to get them to adhere to the design system.

I turned to Daria, an engineer and builder on [xmtp.chat](http://xmtp.chat) and asked, “WDYT - can we build this ourselves?”

<div style={{ display: "flex", justifyContent: "center" }}>
<img src={daria} style={{width:"250px"}}/>
</div>
<br/>

Daria went to the drawing board and discussed with Pat, another engineer.

Pat mused, “Hey, what if we use XMTP messages to capture and store the feedback?”

And the XMTP feedback widget was born:

![feedback-widget.gif](./media/feedback-widget/feedback-widget.gif)

## How it works

1. When the user clicks **Yes** or **No**, the widget creates a burner wallet and connects it to XMTP.
2. When the user submits their feedback, the widget sends the feedback in an XMTP message from the burner wallet to a persistent wallet address dedicated to receiving these feedback messages.
3. We can view the feedback message using any app built with XMTP. For example, here’s the feedback message displayed in [xmtp.chat](https://xmtp.chat/), where `0xA08e…0E93` is the sending burner wallet and **`0xA0Bed332eaC6eaeB56b59809b465d5053B710E93`** is the dedicated feedback widget wallet:

   ![Feedback messages in xmtp.chat](./media/feedback-widget/feedback-messages.png)

4. We use a script to convert the JSON message into Markdown that displays in the browser console:

   ![Feedback messages in markdown](./media/feedback-widget/feedback-markdown.png)

   We can then copy/paste the markdown into a doc for visibility and tracking across the team. In the spirit of action > perfection, we decided to go with this manual export for now and add automation later, if necessary.

In the future, we might enhance the feedback widget to enable a user to optionally connect using their own wallet address so they can have a record of their feedback. But anonymous feedback seems to be working for now. 🥸

## Want to build it on your site?

See this [Feedback Widget PR](https://github.com/xmtp/xmtp-dot-org/pull/344) that provides the widget on [xmtp.org](https://xmtp.org/), a site powered by Docusaurus.

Want a package that you can use to do something similar on your site? Have any other feedback? Let us know using the feedback widget below. ⬇️

If you’re interested in some of the UX research that informed the UX pattern of the feedback widget, see these [design mockups in Figma](https://www.figma.com/file/TlpmopJyaIPq8Fxex0CaBG/xmtp.org-feedback-widget?type=design&node-id=11-79&t=0r2OpWcNKWT5yLx0-4).

<br/>
<FeedbackWidget />
