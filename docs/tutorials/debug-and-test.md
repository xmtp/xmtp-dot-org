---
sidebar_label: Debug & Test
sidebar_position: 6
---

# Installation

To understand what you are inspecting please refer to our [architecture](/docs/concepts/architectural-overview)

1. clone this repository [xmtp-debug](https://github.com/xmtp/xmtp-debug)
2. run `npm install`
3. run `npm start init`

# Usage

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

Example Output

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

Note that the options can also be set from environment variables prefixed with `XMTP_`, e.g.

```sh
$ export XMTP_ADDRESS=xmtp.eth
$ export XMPT_ENV=production
$ npm start contacts list
$ npm start intros list
$ ...
```
