---
sidebar_label: Query addresses
sidebar_position: 6
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import ReactPlayer from 'react-player'

# Query XMTP-enabled addresses

XMTP users can only chat with other users who have XMTP-enabled addresses. Thus, it is essential that if you are building on top of XMTP to know if a user or group of users have XMTP enabled.

In this guide, you’ll learn how to use [Airstack](https://airstack.xyz) to:

- [Check if ENS addresses have XMTP](#query-0x-address-or-ens-if-xmtp-is-enabled)
- [Check if Lens addresses have XMTP](#bulk-query-lens-profiles-if-xmtp-is-enabled)
- [Check if Farcaster addresses have XMTP](#bulk-query-farcaster-name-or-id-if-xmtp-is-enabled)
- [Check if NFT or token holders have XMTP](#check-if-nft-or-token-holders-have-xmtp)
- [Check if POAP attendees have XMTP](#check-if-poap-attendees-have-xmtp)

With [Airstack](https://airstack.xyz) `XMTPs` API, it will return the `isXMTPEnabled` field that you can use to check if XMTP has been enabled.

### Prerequisites

- An [Airstack](https://airstack.xyz) account (free)
- Basic knowledge of GraphQL

#### 🤖 AI natural language

[Airstack](https://airstack.xyz) provides an AI solution for you to build GraphQL queries to fulfill your use case easily.

<ReactPlayer w  url='/img/query-xmtp.mp4' muted playing="true" />

### Query a 0x address or ENS name to check if XMTP is enabled

You can query a 0x address or ENS name to check if the user has XMTP enabled:

AI prompt

- [Live demo](https://app.airstack.xyz/DTyOZg/Y52qApOo8j)

```bash
For vitalik.eth, show if XMTP is enabled
```

<Tabs >
<TabItem value="request" label="Query"  >

```graphql
query MyQuery($address: Identity!) {
  XMTPs(input: { blockchain: ALL, filter: { owner: { _eq: $address } } }) {
    XMTP {
      isXMTPEnabled
    }
  }
}
```

</TabItem>
<TabItem value="variables" label="Variables"  >

```json
{
  "address": "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045" // or “vitalik.eth”
}
```

</TabItem>

<TabItem value="response" label="Response"  >

```json
{
  "data": {
    "XMTPs": {
      "XMTP": [
        {
          "isXMTPEnabled": true
        }
      ]
    }
  }
}
```

</TabItem>
</Tabs>

### Bulk query Lens profiles to check if XMTP is enabled

You can check if an array of Lens profiles have XMTP enabled:

- [Live demo](https://app.airstack.xyz/DTyOZg/SPXFLOFhtx)

```bash
For vitalik.lens and shanemac.lens, show if XMTP is enabled
```

<Tabs >
<TabItem value="request" label="Query"  >

```graphql
query BulkFetchPrimaryENSandXMTP($lens: [Identity!]) {
  XMTPs(
    input: { blockchain: ALL, filter: { owner: { _in: $lens } }, limit: 100 }
  ) {
    XMTP {
      isXMTPEnabled
      owner {
        socials {
          dappName
          profileName
        }
      }
    }
    pageInfo {
      nextCursor
      prevCursor
    }
  }
}
```

</TabItem>
<TabItem value="variables" label="Variables"  >

```json
{
  "lens": ["shanemac.lens", "vitalik.lens"]
}
```

</TabItem>
<TabItem value="response" label="Response"  >

```json
{
  "data": {
    "XMTPs": {
      "XMTP": [
        {
          "isXMTPEnabled": true,
          "owner": {
            "addresses": ["0xa64af7f78de39a238ecd4fff7d6d410dbace2df0"],
            "domains": [
              {
                "name": "shanemac.eth"
              }
            ],
            "socials": [
              {
                "dappName": "farcaster",
                "profileName": "shanemac"
              },
              {
                "dappName": "lens",
                "profileName": "shanemac.lens"
              }
            ]
          }
        },
        {
          "isXMTPEnabled": true,
          "owner": {
            "addresses": ["0xd8da6bf26964af9d7eed9e03e53415d37aa96045"],
            "domains": [
              {
                "name": "satoshinart.eth"
              }
            ],
            "socials": [
              {
                "dappName": "farcaster",
                "profileName": "vbuterin"
              },
              {
                "dappName": "lens",
                "profileName": "vitalik.lens"
              }
            ]
          }
        }
      ]
    }
  }
}
```

</TabItem>
</Tabs>

### Bulk query Farcaster name or ID to check if XMTP is enabled

- [Live demo](https://app.airstack.xyz/DTyOZg/v4nVRtJsw5)

```bash
For farcaster user name vbuterin, name v, and id 602, show if XMTP are enabled
```

<Tabs >
<TabItem value="request" label="Query"  >

```graphql
query BulkFetchFarcasterHaveXMTP($farcaster: [Identity!]) {
  XMTPs(
    input: {
      blockchain: ALL
      filter: { owner: { _in: $farcaster } }
      limit: 100
    }
  ) {
    XMTP {
      isXMTPEnabled
      owner {
        socials {
          dappName
          profileName
        }
      }
    }
    pageInfo {
      nextCursor
      prevCursor
    }
  }
}
```

</TabItem>
<TabItem value="variables" label="Variables"  >

```json
{
  "farcaster": ["fc_fname:vbuterin", "fc_fname:v", "fc_fid:602"]
}
```

</TabItem>
<TabItem value="response" label="Response"  >

```json
{
  "data": {
    "XMTPs": {
      "XMTP": [
        {
          "isXMTPEnabled": true,
          "owner": {
            "socials": [
              {
                "dappName": "farcaster",
                "profileName": "vbuterin"
              },
              {
                "dappName": "lens",
                "profileName": "vitalik.lens"
              }
            ],
            "addresses": ["0xd8da6bf26964af9d7eed9e03e53415d37aa96045"]
          }
        },
        {
          "isXMTPEnabled": true,
          "owner": {
            "socials": [
              {
                "dappName": "farcaster",
                "profileName": "v"
              }
            ],
            "addresses": ["0x182327170fc284caaa5b1bc3e3878233f529d741"]
          }
        },
        {
          "isXMTPEnabled": true,
          "owner": {
            "socials": [
              {
                "dappName": "farcaster",
                "profileName": "betashop"
              },
              {
                "dappName": "lens",
                "profileName": "betashop9.lens"
              }
            ],
            "addresses": ["0xeaf55242a90bb3289db8184772b0b98562053559"]
          }
        }
      ],
      "pageInfo": {
        "nextCursor": "",
        "prevCursor": ""
      }
    }
  }
}
```

</TabItem>
</Tabs>

### Check if NFT or token holders have XMTP enabled

Get the NFT holders that have XMTP enabled using the [TokenBalances](https://docs.airstack.xyz/airstack-docs-and-faqs/api-references/api-reference/tokenbalances-api) API and provide an NFT contract address for the `$tokenAddress` input.

- [Live demo](https://app.airstack.xyz/DTyOZg/v4nVRtJsw5)

<Tabs >
<TabItem value="request" label="Query"  >

```graphql
query MyQuery($tokenAddress: Address!) {
  TokenBalances(
    input: {
      filter: { tokenAddress: { _eq: $tokenAddress } }
      blockchain: ethereum
    }
  ) {
    TokenBalance {
      owner {
        xmtp {
          isXMTPEnabled
        }
      }
    }
  }
}
```

</TabItem>
<TabItem value="variables" label="Variables"  >

```json
{
  "tokenAddress": "0xc0f95066899efd7c0540b9474f81355a83e6f578" // NFT collection address
}
```

</TabItem>
<TabItem value="response" label="Response"  >

```json
{
  "data": {
    "TokenBalances": {
      "TokenBalance": [
        {
          "owner": {
            "xmtp": [
              {
                "isXMTPEnabled": true
              }
            ]
          }
        },
        {
          "owner": {
            "xmtp": []
          }
        }
      ]
    }
  }
}
```

</TabItem>
</Tabs>

### Check if POAP attendees have XMTP enabled

Get the POAP holders that have XMTP enabled using the [Poaps](https://docs.airstack.xyz/airstack-docs-and-faqs/api-references/api-reference/poaps-api) API and provide a POAP event ID for the `$eventId` input.

- [Live demo](https://app.airstack.xyz/DTyOZg/v4nVRtJsw5)

<Tabs >
<TabItem value="request" label="Query"  >

```graphql
query POAPEventHoldersWithXMTP($eventId: String!) {
  Poaps(input: { filter: { eventId: { _eq: $eventId } }, blockchain: ALL }) {
    Poap {
      owner {
        addresses
        xmtp {
          isXMTPEnabled
        }
      }
    }
  }
}
```

</TabItem>
<TabItem value="variables" label="Variables"  >

```json
{
  "eventId": "141910" // POAP event ID
}
```

</TabItem>
<TabItem value="response" label="Response"  >

```json
{
  "data": {
    "Poaps": {
      "Poap": [
        {
          "owner": {
            "addresses": [
              "0xda85048c977134b09fc05cd3d1abd3a63e8edf4d"
            ],
            "xmtp": []
          }
        },
        {
          "owner": {
            "addresses": [
              "0x546457bbddf5e09929399768ab5a9d588cb0334d"
            ],
            "xmtp": [
              {
                "isXMTPEnabled": true
              }
            ]
          }
        }
      ]
    }
  }
}
```

</TabItem>
</Tabs>

### Learn more about Airstack

- [API references](https://docs.airstack.xyz/airstack-docs-and-faqs/api-references/api-reference)
- [SDKs](https://app.airstack.xyz/sdks)

#### Check if a single user has XMTP enabled

- [Check by 0x address](https://docs.airstack.xyz/airstack-docs-and-faqs/guides/has-xmtp/check-single-user#by-0x-address)
- [Check by ENS](https://docs.airstack.xyz/airstack-docs-and-faqs/guides/has-xmtp/check-single-user#by-ens)
- [Check by Lens profile](https://docs.airstack.xyz/airstack-docs-and-faqs/guides/has-xmtp/check-single-user#by-lens-profile)
- [Check by Farcaster name or ID](https://docs.airstack.xyz/airstack-docs-and-faqs/guides/has-xmtp/check-single-user#by-farcaster-name-or-id)

#### Check if multiple users have XMTP enabled

- [Bulk check by Lens profiles](https://docs.airstack.xyz/airstack-docs-and-faqs/guides/has-xmtp/check-multiple-users#bulk-check-lens-profiles-have-xmtp)
- [Bulk check by Farcaster names](https://docs.airstack.xyz/airstack-docs-and-faqs/guides/has-xmtp/check-multiple-users#bulk-check-farcasters-have-xmtp)

#### Check if NFT and POAP holders have XMTP enabled

- [Check by NFT holders](https://docs.airstack.xyz/airstack-docs-and-faqs/guides/has-xmtp/nft-and-poap-holders#nft-holders)
- [Check by POAP Holders](https://docs.airstack.xyz/airstack-docs-and-faqs/guides/has-xmtp/nft-and-poap-holders#poap-holders)