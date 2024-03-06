---
sidebar_label: Debug and test
sidebar_position: 6
---

# Debug and test your app

To ensure your app provides a seamless and performant user experience, be sure to debug and test.

## Debug your app

It's important to debug your app's performance when handling a wallet address with more than just a few conversations and messages. To do this, you can use the `xmtp-debug` repo to easily populate a test wallet with X number of conversations, each with Y number of messages, on the XMTP network of your choice.

Test your app's performance against these performance benchmarks. To understand what you are inspecting, see [Architectural overview of XMTP](/docs/concepts/architectural-overview).

1. Clone the [xmtp-debug](https://github.com/xmtp/xmtp-debug) repo
2. Run `npm install`
3. Run `npm start init`

### Usage

Run `npm start` to see help, e.g.

```
npm start <command>

Commands:
  npm start init                      initialize wallet
  npm start intros [cmd] [address]    list/check introduction messages for the
                                      address
  npm start invites [cmd] [address]   list/check introductions for the address
  npm start contacts [cmd] [address]  list/check published contacts for the
                                      address
  npm start private [address]         list published private key bundles for the
                                      address

Options:
      --help     Show help                                             [boolean]
      --version  Show version number                                   [boolean]
  -e, --env      The XMTP environment to use
                        [string] [choices: "dev", "production"] [default: "dev"]
  -a, --address  wallet address to inspect                              [string]
  -f, --full     do not shorten long output items     [boolean] [default: false]
  -s, --start    restrict output to dates on or after this date         [string]
  -n, --end      restrict output to dates before this date              [string]
  -l, --limit    restrict output to first <limit> entries               [number]
  -d, --desc     sort output in descending order                       [boolean]

Examples:
  npm start intros list xmtp.eth            list all introduction messages for
                                            xmtp.eth
  npm start -- -d -l10 intros list          list last 10 introduction messages
  xmtp.eth                                  for xmtp.eth in descending order
  npm start -- --full invites list          list all invitations for xmtp.eth,
  xmtp.eth                                  do not shorten addresses
  npm start -- -e=production contacts       check all contacts of xmtp.eth for
  check xmtp.eth                            anomalies on the production network
```

Example output

```
xmtp-debug % npm start --silent -- --env=production --end='3 weeks ago' --desc --limit=3 contacts list hi.xmtp.eth
XMTP environment: production
Resolved address: 0x194c31cAe1418D5256E8c58e0d08Aee1046C6Ed0
Ending on 2022-11-02T20:12:16.010Z
Limited to 3
┌─────────┬──────────────────────────┬──────┬─────────────┬─────────────┐
│ (index) │           date           │ type │ identityKey │   preKey    │
├─────────┼──────────────────────────┼──────┼─────────────┼─────────────┤
│    0    │ 2022-11-01T21:38:14.409Z │ 'V1' │ '044f…7b1a' │ '04d2…4f8c' │
│    1    │ 2022-10-28T18:24:13.305Z │ 'V1' │ '044f…7b1a' │ '04d2…4f8c' │
│    2    │ 2022-10-28T18:14:20.502Z │ 'V1' │ '044f…7b1a' │ '04d2…4f8c' │
└─────────┴──────────────────────────┴──────┴─────────────┴─────────────┘
```

You can also set the options using environment variables prefixed with `XMTP_`. For example:

```sh
$ export XMTP_ADDRESS=xmtp.eth
$ export XMPT_ENV=production
$ npm start contacts list
$ npm start intros list
$ ...
```

Populating test wallets might cause you to exceed the XMTP network rate limit. If this happens, wait 5 minutes and try again. To learn more, see [Rate limiting](/docs/faq#rate-limiting).

## Test your app

Start by creating a test wallet with ~2,000 conversations and 1,000 messages per conversation. Run the following performance tests:

- For a cold start (first load):
  - Test that the app is interactive in <15 sec
- For a warm cache (subsequent loads and refreshes):
  - Test that the app is interactive in <1 sec
- Sender UX:  
  - Test that the time between sending a message and displaying the message in the conversation thread is ≤1 second
- Recipient UX:
  - Test that the time between sending a message and displaying the message in the conversation thread is ≤1 second

## Use test message bots and addresses

If helpful for testing, you can create your own message bot, such as `gm.yourappname.eth`, using [ChainJet](https://chainjet.io/) or the [XMTP Bot Starter](https://github.com/xmtp/xmtp-node-js-tools/tree/main/packages/bot-starter). You can use the message bot to receive and send test messages.

You might also be interested in the bot-related packages in the [xmtp-node-js-tool](https://github.com/xmtp/xmtp-node-js-tools) repo.

If needed, you can also use these addresses for testing:

- gm.xmtp.eth (0x937C0d4a6294cdfa575de17382c7076b579DC176)  
  Message this XMTP message bot to get an immediate automated reply.
- hi.xmtp.eth (0x194c31cAe1418D5256E8c58e0d08Aee1046C6Ed0)  
  Message the XMTP Labs team and a human will reply, though not as quickly as gm.xmtp.eth! 🤖
  