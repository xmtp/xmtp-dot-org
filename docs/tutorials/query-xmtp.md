---
sidebar_label: Query addresses
sidebar_position: 6
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# Query XMTP enabled addresses

XMTP users can only chat with other users who have XMTP-enabled addresses. Thus, it is essential that if you are building on top of XMTP to know if a user or group of users have XMTP enabled.

In this guide, you’ll learn how to use Airstack to:

- Check if ENS addresses have XMTP
- Check if Lens addresses have XMTP
- Check if Farcaster addresses have XMTP
- Check if NFT or Token holders have XMTP
- Check if POAP attendees have XMTP

With Airstack `XMTPs` API, it will return the `isXMTPEnabled` field that you can use to check if XMTP has been enabled.

### Prerequisites

- An Airstack account (free)
- Basic knowledge of GraphQL

#### 🤖 AI Natural Language

Airstack provides an AI solution for you to build GraphQL queries to fulfill your use case easily.

### Query 0x Address or ENS If XMTP Is Enabled

You can resolve either a 0x address of ENS to check if the user has XMTP enabled:
AI Prompt

- [Live Demo](https://app.airstack.xyz/DTyOZg/Y52qApOo8j)

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

```graphql
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

### Bulk Query Lens Profiles If XMTP Is Enabled

You can check if an array of Lens profiles have XMTP enabled:

- [Live Demo](https://app.airstack.xyz/DTyOZg/SPXFLOFhtx)

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

```graphql
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

### Bulk Query Farcaster Name or ID If XMTP Is Enabled

- [Live Demo](https://app.airstack.xyz/DTyOZg/v4nVRtJsw5)

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

```graphql
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

### Check if NFT or Token holders have XMTP

Get the NFT holders that have XMTP using the [TokenBalances](https://docs.airstack.xyz/airstack-docs-and-faqs/api-references/api-reference/tokenbalances-api) API and provide an NFT contract address for the `$tokenAddress` input.

- [Live Demo](https://app.airstack.xyz/DTyOZg/v4nVRtJsw5)

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

```graphql
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

### Check if POAP attendees have XMTP

Get the POAP holders that have XMTP using the [Poaps](https://docs.airstack.xyz/airstack-docs-and-faqs/api-references/api-reference/poaps-api) API and provide an POAP event ID for the $eventId input.

- [Live Demo](https://app.airstack.xyz/DTyOZg/v4nVRtJsw5)

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

```graphql
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

### Learn More about Airstack

- [API References](https://docs.airstack.xyz/)
- [SDKs](https://app.airstack.xyz/sdks)

#### Check XMTP For Single User

- [By 0x address](https://docs.airstack.xyz/airstack-docs-and-faqs/guides/has-xmtp/check-single-user#by-0x-address)
- [By ENS](https://docs.airstack.xyz/airstack-docs-and-faqs/guides/has-xmtp/check-single-user#by-ens)
- [By Lens Profile](https://docs.airstack.xyz/airstack-docs-and-faqs/guides/has-xmtp/check-single-user#by-lens-profile)
- [By Farcaster Name or ID](https://docs.airstack.xyz/airstack-docs-and-faqs/guides/has-xmtp/check-single-user#by-farcaster-name-or-id)

#### Check XMTP For Multiple User

- [Bulk Check Lens Profiles Have XMTP](https://docs.airstack.xyz/airstack-docs-and-faqs/guides/has-xmtp/check-multiple-users#bulk-check-lens-profiles-have-xmtp)
- [Bulk Check Farcasters Have XMTP](https://docs.airstack.xyz/airstack-docs-and-faqs/guides/has-xmtp/check-multiple-users#bulk-check-farcasters-have-xmtp)

#### NFT & POAP Holders

- [NFT Holders](https://docs.airstack.xyz/airstack-docs-and-faqs/guides/has-xmtp/nft-and-poap-holders#nft-holders)
- [POAP Holders](https://docs.airstack.xyz/airstack-docs-and-faqs/guides/has-xmtp/nft-and-poap-holders#poap-holders)
