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

- [Check if ENS addresses have XMTP](#query-a-0x-address-or-ens-name-to-check-if-xmtp-is-enabled)
- [Check if Lens addresses have XMTP](#bulk-query-lens-profiles-to-check-if-xmtp-is-enabled)
- [Check if Farcaster addresses have XMTP](#bulk-query-farcaster-name-or-id-to-check-if-xmtp-is-enabled)
- [Check if Farcaster followers have XMTP enabled](#check-if-farcaster-followers-have-xmtp-enabled)
- [Check if Farcaster following have XMTP enabled](#check-if-farcaster-following-have-xmtp-enabled)
- [Check if NFT or token holders have XMTP](#check-if-nft-or-token-holders-have-xmtp-enabled)
- [Check if POAP attendees have XMTP](#check-if-poap-attendees-have-xmtp-enabled)

With [Airstack](https://airstack.xyz) `XMTPs` API, it will return the `isXMTPEnabled` field that you can use to check if XMTP has been enabled.

### Prerequisites

- An [Airstack](https://airstack.xyz) account (free)
- Basic knowledge of GraphQL

#### 🤖 AI natural language

[Airstack](https://airstack.xyz) provides an AI solution for you to build GraphQL queries to fulfill your use case easily.

<div className='wrapper'>
  <ReactPlayer
    className='player'    
     width='100%'
    height='100%'  
    controls 
    muted  
    playing="true"  url='/img/query-xmtp.mp4'
  />
</div>

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
For lens/@vitalik and lens/@shanemac, show if XMTP is enabled
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
  "lens": ["lens/@shanemac", "lens/@vitalik"]
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

### Check if Farcaster followers have XMTP enabled

- [Live demo](https://app.airstack.xyz/DTyOZg/aFeHevxYed)

```bash
show me all Farcaster followers of vitalik.eth and their XMTP
```

<Tabs >
<TabItem value="request" label="Query"  >

```graphql
query MyQuery($user: Identity!) {
  SocialFollowers(
    input: {
      filter: { identity: { _eq: $user }, dappName: { _eq: farcaster } }
      blockchain: ALL
      limit: 50
    }
  ) {
    Follower {
      followerAddress {
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
  "user": "vitalik.eth"
}
```

</TabItem>
<TabItem value="response" label="Response"  >

```json
{
  "data": {
    "SocialFollowers": {
      "Follower": [
        {
          "followerAddress": {
            "addresses": [
              "0x6967e124c745173a571bf846e126e7f38fc66d3f",
              "0x988527874c7e3f02115f89a6a97135c70b6a47fc"
            ],
            "xmtp": [
              {
                "isXMTPEnabled": true // this follower have XMTP enabled
              }
            ]
          }
        },
        {
          "followerAddress": {
            "addresses": [
              "0x21441e89d7afe9922e461914c067dbe0a9bc1998",
              "0x87641313e36e94e4422610a6703ef3e1a8aca5fe"
            ],
            "xmtp": [] // this followers does not have XMTP enabled
          }
        }
      ]
    }
  }
}
```

</TabItem>
</Tabs>

### Check if Farcaster following have XMTP enabled

- [Live demo](https://app.airstack.xyz/DTyOZg/lb6TPPbI5c)

```bash
show me all Farcaster following of vitalik.eth and their XMTP

```

<Tabs >
<TabItem value="request" label="Query"  >

```graphql
query MyQuery($user: Identity!) {
  SocialFollowings(
    input: {
      filter: { identity: { _eq: $user }, dappName: { _eq: farcaster } }
      blockchain: ALL
      limit: 200
    }
  ) {
    Following {
      followingAddress {
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
  "user": "vitalik.eth"
}
```

</TabItem>
<TabItem value="response" label="Response"  >

```json
{
  "data": {
    "SocialFollowings": {
      "Following": [
        {
          "followingAddress": {
            "addresses": [
              "0x1ca66c990e86b750ea6b2180d17fff89273a5c0d",
              "0x9eab9d856a3a667dc4cd10001d59c679c64756e7"
            ],
            "xmtp": [
              {
                "isXMTPEnabled": true // this following have XMTP enabled
              }
            ]
          }
        },
        {
          "followingAddress": {
            "addresses": [
              "0x2596e027e19d7122798284010f9575c0eb18bbea",
              "0xc3fdadbae46798cd8762185a09c5b672a7aa36bb"
            ],
            "xmtp": [] // this following does not have XMTP enabled
          }
        }
      ]
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
            "addresses": ["0xda85048c977134b09fc05cd3d1abd3a63e8edf4d"],
            "xmtp": []
          }
        },
        {
          "owner": {
            "addresses": ["0x546457bbddf5e09929399768ab5a9d588cb0334d"],
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
