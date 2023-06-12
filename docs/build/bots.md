---
sidebar_label: Bots
sidebar_position: 10
---

# Create an XMTP message bot

Use the [XMTP Bot Starter project](https://github.com/xmtp/xmtp-bot-starter) to create message bot on the XMTP network.

:::caution Important

This project is **alpha** status and ready for you to start experimenting with. However, we do not recommend using alpha software in production apps. Software in this status will change as we add features and iterate based on feedback.

:::

## Usage

```typescript
// TODO: this isn't actually published yet.
import run from "xmtp-bot-starter";

// Call `run` with a handler function. The handler function is called
// with a HandlerContext
run(async (context) => {
  // When someone sends your bot a message, you can get the DecodedMessage
  // from the HandlerContext's `message` field
  const messageBody = context.message.content;

  // To reply, just call `reply` on the HandlerContext.
  await context.reply(`ECHO: ${messageBody}`);
});
```

## Keep the same address (the `KEY` environment variable)

By default, your bot will have a new address every time you start it up. That's ideal. If you have a private key, you can encode it to a hex string and set the `KEY` environment variable. Your bot will then use this key to connect to the network.

Don't know how to create a private key? Here's how to do it with ethers.js:

```typescript
import { Wallet } from "ethers";

const key = Wallet.createRandom().privateKey;
console.log("Set your environment variable: KEY=" + key);
```

## XMTP environment (the `XMTP_ENV` environment variable)

By default, the bot connects to the `dev` network. If you want to connect to production, specify `XMTP_ENV=production`.

## More bot resources

- Want to use a GUI to create a message bot? Check out [chainjet.io](https://chainjet.io/).

- Need someone to send a test message to? Try these addresses:

  - `gm.xmtp.eth` (`0x937C0d4a6294cdfa575de17382c7076b579DC176`)

    Message this XMTP message bot to get an immediate automated reply.

  - `hi.xmtp.eth` (`0x194c31cAe1418D5256E8c58e0d08Aee1046C6Ed0`)

    Message the XMTP Labs team and a human will reply, though not as quickly as `gm.xmtp.eth`! 🤖
