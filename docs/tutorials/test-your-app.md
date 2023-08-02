---
sidebar_label: Test your app
sidebar_position: 9
description: Use these tips and guidelines to test your app before going live.
---

# Test your app

Be sure to test your app before launching.

## Test cases

Here's a list of recommended test cases.

Be sure to test using different devices (mobile, desktop), browsers, window sizes, and inbox sizes.

### Wallet connection

- Connect your preexisting wallet
- Connect a new wallet using “get a wallet” functionality
- Disconnect your wallet
- Reconnect your wallet after disconnection

### Identity resolution

- Verify that your ENS domain appears
- Verify that your ENS avatar appears
- Verify that your recipient’s ENS domain appears
- Verify that your recipient’s ENS avatar appears

### Messaging

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

Need an address to message? See [Use test message bots and addresses](#use-test-message-bots-and-addresses)

### Performance

Test your app's performance against these performance benchmarks.

Start by [creating a test wallet](https://xmtp.org/docs/tutorials/test-your-app#create-a-test-wallet) with ~2,000 conversations and 1,000 messages per conversation. Run the following performance tests:

- For a cold start (first load):
  - Test that the app is interactive in <15 sec
- For a warm cache (subsequent loads and refreshes):
  - Test that the app is interactive in <1 sec
- Sender UX: Time between sending a message and displaying the message in the conversation thread: ≤1 second
- Recipient UX: Time between sending a message and displaying the message in the conversation thread: ≤1 second

## Create a test wallet

It's important to test your app's performance when handling a wallet address with more than just a few conversations and messages. To do this, you can use the `xmtp-debug` repo to easily populate a test wallet with _X_ number of conversations, each with _Y_ number of messages, on the XMTP network of your choice.

1. Get a test wallet address.
2. Run `git clone https://github.com/xmtp/xmtp-debug.git`.
3. Run `cd xmtp-debug`.
4. Run `npm i`.
5. Run `npm start -- --env=dev fill-conversation-list $TEST_WALLET_ADDRESS $NUM_CONVERSATIONS $NUM_MESSAGES_PER_CONVERSATION`.

   For example, run `npm start -- --env=dev fill-conversation-list 0x78b97401850c335abf936C41F4D7a38A2F92D1D2 500 1` to populate test wallet `0x78b97401850c335abf936C41F4D7a38A2F92D1D2` with 500 conversations, each with 1 message, on the XMTP `dev` network.

Populating test wallets might cause you to hit the XMTP network rate limit. If this happens, wait 5 minutes and try again.

## Use test message bots and addresses

If helpful for testing, you can create your own message bot, such as `gm.yourappname.eth`, using [ChainJet](https://chainjet.io/) or the [XMTP Bot Starter](https://github.com/xmtp/xmtp-bot-starter). You can use the message bot to receive and send test messages.

If needed, you can also use these addresses for testing:

- gm.xmtp.eth (0x937C0d4a6294cdfa575de17382c7076b579DC176)

  Message this XMTP message bot to get an immediate automated reply.

- hi.xmtp.eth (0x194c31cAe1418D5256E8c58e0d08Aee1046C6Ed0)

  Message the XMTP Labs team and a human will reply, though not as quickly as gm.xmtp.eth! 🤖
