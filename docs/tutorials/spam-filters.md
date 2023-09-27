---
sidebar_label: Spam Filters
sidebar_position: 6
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# Spam Filters

Learn how to use Airstack to build a known sender inbox and spam filters for your XMTP-powered messaging application.

## Overview

In this tutorial, you will learn how to use on-chain and off-chain data provided by Airstack to create various kinds of spam filtering systems for your application:

- [**Known Senders**](#known-senders): Separate the user inbox into known and unknown senders
- [**Proof of Personhood**](#proof-of-personhood): Establish a scoring or evaluation system to prove an identity’s personhood
- [**High Probability of Connection**](#high-probability-of-connection): Evaluating the likelihood of real-life connections using social graphs and POAPs

### Pre-requisites

- [Get Airstack API key](https://docs.airstack.xyz/airstack-docs-and-faqs/get-started/get-api-key)
- Basic knowledge of GraphQL
- Basic knowledge of [XMTP](https://xmtp.org/)

### Get Started

JavaScript/TypeScript/Python
If you are using JavaScript/TypeScript or Python, Install the Airstack SDK:

```bash
# React
npm install @airstack/airstack-react
# Node
npm install @airstack/node
# React
yarn add @airstack/airstack-react
# Node
yarn add @airstack/node
# React
pnpm install @airstack/airstack-react
# Node
pnpm install @airstack/node
# Python
pip install airstack
```

Then, add the following snippets to your code:

<Tabs>
<TabItem value="react" label="React">

```jsx React
import { init, useQuery } from "@airstack/airstack-react";

init("YOUR_AIRSTACK_API_KEY");

const query = `YOUR_QUERY`; // Replace with GraphQL Query

const Component = () => {
  const { data, loading, error } = useQuery(query);

  if (data) {
    return <p>Data: {JSON.stringify(data)}</p>;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
};
```

</TabItem>
<TabItem value="node" label="Node">

```js Node
import { init, fetchQuery } from "@airstack/node";

init("YOUR_AIRSTACK_API_KEY");

const query = `YOUR_QUERY`; // Replace with GraphQL Query

const { data, error } = await fetchQuery(query);

console.log("data:", data);
console.log("error:", error);
```

</TabItem>
<TabItem value="python" label="Python" >

```py Python
import asyncio
from airstack.execute_query import AirstackClient

api_client = AirstackClient(api_key="YOUR_AIRSTACK_API_KEY")

query = """YOUR_QUERY""" # Replace with GraphQL Query

async def main():
    execute_query_client = api_client.create_execute_query_object(
        query=query)

    query_response = await execute_query_client.execute_query()
    print(query_response.data)

asyncio.run(main())
```

</TabItem>
</Tabs>

### Other Programming Languages

To access the Airstack APIs in other languages, you can use https://api.airstack.xyz/gql as your GraphQL endpoint.

#### Airstack AI

Airstack provides an AI solution for you to build GraphQL queries to fulfill your use case easily. You can find the AI prompt of each query in each of the tutorial sections.

[Replace image w/ GIF later]

## Known Senders

---

### Check If User A Is Following User B

You can use Airstack to check and verify if user A is following user B on either Lens or Farcaster:

**Try Demo**

- https://app.airstack.xyz/query/gxn0jQ0ADA

<Tabs>
<TabItem value="prompt" label="Prompt"  >

```text
Show me if betashop.eth is following ipeciura.eth
```

</TabItem>
</Tabs>

<Tabs>
<TabItem value="query" label="Query"  >

```graphql Query
query isFollowing {
  # Top-level is User B's Identity (ipeciura.eth)
  Wallet(input: { identity: "ipeciura.eth", blockchain: ethereum }) {
    socialFollowings( # Here is User A's Identity (betashop.eth)
      input: { filter: { identity: { _in: ["betashop.eth"] } } }
    ) {
      Following {
        dappName
        dappSlug
        followingProfileId
        followerProfileId
        followerAddress {
          addresses
          socials {
            dappName
            profileName
          }
          domains {
            name
          }
        }
      }
    }
  }
}
```

</TabItem>

<TabItem value="response" label="Response"  >

```json Response
{
  "data": {
    "Wallet": {
      "socialFollowings": {
        "Following": [
          {
            "dappName": "farcaster", // following on Farcaster
            "dappSlug": "farcaster_optimism",
            "followingProfileId": "2602",
            "followerProfileId": "602",
            "followerAddress": {
              "addresses": [
                "0x66bd69c7064d35d146ca78e6b186e57679fba249",
                "0xeaf55242a90bb3289db8184772b0b98562053559"
              ],
              "socials": [
                {
                  "dappName": "farcaster",
                  "profileName": "betashop.eth" // betashop.eth is following ipeciura.eth
                },
                {
                  "dappName": "lens",
                  "profileName": "betashop9.lens"
                }
              ],
              "domains": [
                {
                  "name": "jasongoldberg.eth"
                },
                {
                  "name": "betashop.eth"
                }
              ]
            }
          }
        ]
      }
    }
  }
}
```

</TabItem>
</Tabs>

If the `Following` field returns an array with non-zero length, then user A is verified to follow user B in either Lens or Farcaster.

Otherwise, user A does not follow user B in Lens and Farcaster.

### Check If User A Has Any Token Transfers History With User B

You can use Airstack to check and verify if user A has transferred any ERC20/721/1155 tokens to user B on either Ethereum or Polygon:

**Try Demo**

- https://app.airstack.xyz/query/fBJOJH9bZA

<Tabs>
<TabItem value="prompt" label="Prompt"  >

```text
Show token transfers history from betashop.eth to ipeciura.eth on Ethereum and Polygon
```

</TabItem>
</Tabs>

<Tabs>
<TabItem value="query" label="Query"  >

```graphql Query
query GetTokenTransfers {
  ethereum: TokenTransfers(
    input: {
      filter: { from: { _in: ["betashop.eth"] }, to: { _eq: "ipeciura.eth" } }
      blockchain: ethereum
    }
  ) {
    TokenTransfer {
      from {
        addresses
        domains {
          name
        }
        socials {
          dappName
          profileName
          profileTokenId
          profileTokenIdHex
          userId
          userAssociatedAddresses
        }
      }
      to {
        addresses
        domains {
          name
        }
        socials {
          dappName
          profileName
          profileTokenId
          profileTokenIdHex
          userId
          userAssociatedAddresses
        }
      }
      transactionHash
    }
    pageInfo {
      nextCursor
      prevCursor
    }
  }
  polygon: TokenTransfers(
    input: {
      filter: { from: { _in: ["betashop.eth"] }, to: { _eq: "ipeciura.eth" } }
      blockchain: polygon
    }
  ) {
    TokenTransfer {
      from {
        addresses
        domains {
          name
        }
        socials {
          dappName
          profileName
          profileTokenId
          profileTokenIdHex
          userId
          userAssociatedAddresses
        }
      }
      to {
        addresses
        domains {
          name
        }
        socials {
          dappName
          profileName
          profileTokenId
          profileTokenIdHex
          userId
          userAssociatedAddresses
        }
      }
      transactionHash
    }
    pageInfo {
      nextCursor
      prevCursor
    }
  }
}
```

</TabItem>

<TabItem value="response" label="Response"  >

```json Response
{
  "data": {
    "ethereum": {
      "TokenTransfer": [
        // If the array is not empty, this indicates there are token transferred previously
        {
          "from": {
            "addresses": ["0xeaf55242a90bb3289db8184772b0b98562053559"],
            "domains": [
              {
                "name": "jasongoldberg.eth"
              },
              {
                "name": "betashop.eth"
              }
            ],
            "socials": [
              {
                "dappName": "farcaster",
                "profileName": "betashop.eth",
                "profileTokenId": "602",
                "profileTokenIdHex": "0x025a",
                "userId": "602",
                "userAssociatedAddresses": [
                  "0x66bd69c7064d35d146ca78e6b186e57679fba249",
                  "0xeaf55242a90bb3289db8184772b0b98562053559"
                ]
              },
              {
                "dappName": "lens",
                "profileName": "betashop9.lens",
                "profileTokenId": "94472",
                "profileTokenIdHex": "0x017108",
                "userId": "0xeaf55242a90bb3289db8184772b0b98562053559",
                "userAssociatedAddresses": [
                  "0xeaf55242a90bb3289db8184772b0b98562053559"
                ]
              }
            ]
          },
          "to": {
            "addresses": ["0xb59aa5bb9270d44be3fa9b6d67520a2d28cf80ab"],
            "domains": [
              {
                "name": "ipeciura.eth"
              },
              {
                "name": "shnoodles.eth"
              },
              {
                "name": "🅱🏪👨‍💻.eth"
              },
              {
                "name": "getjam.eth"
              }
            ],
            "socials": [
              {
                "dappName": "lens",
                "profileName": "shnoodles.lens",
                "profileTokenId": "27561",
                "profileTokenIdHex": "0x6ba9",
                "userId": "0xb59aa5bb9270d44be3fa9b6d67520a2d28cf80ab",
                "userAssociatedAddresses": [
                  "0xb59aa5bb9270d44be3fa9b6d67520a2d28cf80ab"
                ]
              },
              {
                "dappName": "farcaster",
                "profileName": "ipeciura",
                "profileTokenId": "2602",
                "profileTokenIdHex": "0x0a2a",
                "userId": "2602",
                "userAssociatedAddresses": [
                  "0x40ceb58e8f17ae4fa6124684aaad22a39c33fb8c",
                  "0xb59aa5bb9270d44be3fa9b6d67520a2d28cf80ab"
                ]
              }
            ]
          },
          "transactionHash": "0x4f98621583fa88beae2ef2d8c3cfd13541b202d806e5da76ea98008bbb48d119"
        }
        // other token transfers
      ],
      "pageInfo": {
        "nextCursor": "",
        "prevCursor": ""
      }
    },
    "polygon": {
      "TokenTransfer": null, // Indicate no token transfers on Polygon
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

## Proof of Personhood

---

### Token Transfers

You can examine a user’s token transfer history across Ethereum and Polygon to determine their likelihood of being a legitimate vs. bad actor:

**Try Demo**

- https://app.airstack.xyz/query/dvRSbWiNKG

<Tabs>
<TabItem value="prompt" label="Prompt"  >

```text
Show me token transfers by vitalik.eth
```

</TabItem>
</Tabs>

<Tabs>
<TabItem value="query" label="Query"  >

```graphql Query
query GetTokenTransfers {
  ethereum: TokenTransfers(
    input: { filter: { from: { _in: ["vitalik.eth"] } }, blockchain: ethereum }
  ) {
    TokenTransfer {
      from {
        addresses
        domains {
          name
        }
        socials {
          dappName
          profileName
          profileTokenId
          profileTokenIdHex
          userId
          userAssociatedAddresses
        }
      }
      to {
        addresses
        domains {
          name
        }
        socials {
          dappName
          profileName
          profileTokenId
          profileTokenIdHex
          userId
          userAssociatedAddresses
        }
      }
      transactionHash
    }
    pageInfo {
      nextCursor
      prevCursor
    }
  }
  polygon: TokenTransfers(
    input: { filter: { from: { _in: ["vitalik.eth"] } }, blockchain: polygon }
  ) {
    TokenTransfer {
      from {
        addresses
        domains {
          name
        }
        socials {
          dappName
          profileName
          profileTokenId
          profileTokenIdHex
          userId
          userAssociatedAddresses
        }
      }
      to {
        addresses
        domains {
          name
        }
        socials {
          dappName
          profileName
          profileTokenId
          profileTokenIdHex
          userId
          userAssociatedAddresses
        }
      }
      transactionHash
    }
    pageInfo {
      nextCursor
      prevCursor
    }
  }
}
```

</TabItem>

<TabItem value="response" label="Response"  >

```json Response
{
  "data": {
    "ethereum": {
      "TokenTransfer": [
        // If TokenTransfer array is not empty, then there are token transfers
        {
          "from": {
            "addresses": ["0xd8da6bf26964af9d7eed9e03e53415d37aa96045"],
            "domains": [
              {
                "name": "quantumexchange.eth"
              },
              {
                "name": "7860000.eth"
              },
              {
                "name": "offchainexample.eth"
              },
              {
                "name": "brianshaw.eth"
              },
              {
                "name": "vbuterin.stateofus.eth"
              },
              {
                "name": "quantumsmartcontracts.eth"
              },
              {
                "name": "Vitalik.eth"
              },
              {
                "name": "openegp.eth"
              },
              {
                "name": "vitalik.cannafam.eth"
              },
              {
                "name": "VITALIK.eth"
              }
            ],
            "socials": [
              {
                "dappName": "farcaster",
                "profileName": "vitalik.eth",
                "profileTokenId": "5650",
                "profileTokenIdHex": "",
                "userId": "5650",
                "userAssociatedAddresses": [
                  "0xadd746be46ff36f10c81d6e3ba282537f4c68077",
                  "0xd8da6bf26964af9d7eed9e03e53415d37aa96045"
                ]
              },
              {
                "dappName": "lens",
                "profileName": "vitalik.lens",
                "profileTokenId": "100275",
                "profileTokenIdHex": "",
                "userId": "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
                "userAssociatedAddresses": [
                  "0xd8da6bf26964af9d7eed9e03e53415d37aa96045"
                ]
              }
            ]
          },
          "to": {
            "addresses": ["0xd8b75eb7bd778ac0b3f5ffad69bcc2e25bccac95"],
            "domains": [
              {
                "name": "toastmybread.eth"
              },
              {
                "name": "daerbymtsaot.eth"
              }
            ],
            "socials": null
          },
          "transactionHash": "0xd2e0d4e8aae125a7edae14c7dab106c1620be136b239e7f9dbd60861034b0c25"
        }
        // other token transfers
      ]
    }
  }
}
```

</TabItem>
</Tabs>

If either `ethereum.TokenTransfer` or `polygon.TokenTransfer` array has non-zero length, then the user has a history of transferring token and thus can be considered unlikely as a spammer.

Otherwise, they may be considered as one.

### Token Balances

You can examine a user’s ERC20/721/1155 token balances to determine their likelihood of being a legitimate vs. bad actor. Users with high-value tokens are more likely to be good actors than users with 0 balances:

**Try Demo**

- https://app.airstack.xyz/query/5teoS4ZS1X

<Tabs>
<TabItem value="prompt" label="Prompt"  >

```text
show me vitalik.eth token balances on Ethereum and Polygon
```

</TabItem>
</Tabs>

<Tabs>
<TabItem value="query" label="Query"  >

```graphql Query
query MyQuery {
  Ethereum: TokenBalances(
    input: {
      filter: { owner: { _in: ["vitalik.eth"] } }
      blockchain: ethereum
      limit: 50
    }
  ) {
    TokenBalance {
      tokenAddress
      tokenId
      amount
      tokenType
      token {
        name
        symbol
      }
    }
    pageInfo {
      nextCursor
      prevCursor
    }
  }
  Polygon: TokenBalances(
    input: {
      filter: { owner: { _in: ["vitalik.eth"] } }
      blockchain: polygon
      limit: 50
    }
  ) {
    TokenBalance {
      tokenAddress
      tokenId
      amount
      tokenType
      token {
        name
        symbol
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
<TabItem value="response" label="Response"  >

```json Response
{
  "data": {
    "Ethereum": {
      "TokenBalance": [
        // Shows that hold some tokens in Ethereum
        {
          "tokenAddress": "0x75c97384ca209f915381755c582ec0e2ce88c1ba",
          "tokenId": "",
          "amount": "47077057573",
          "tokenType": "ERC20",
          "token": {
            "name": "FINE",
            "symbol": "FINE"
          }
        },
        {
          "tokenAddress": "0xd56736e79093d31be093ba1b5a5fe32e054b9592",
          "tokenId": "",
          "amount": "57415038814950477",
          "tokenType": "ERC20",
          "token": {
            "name": "Nucleus",
            "symbol": "NUCLEUS"
          }
        },
        {
          "tokenAddress": "0xa362cd1e14705f0bdd9347fccffe0d67a7cf6e2b",
          "tokenId": "",
          "amount": "400000000000000000000",
          "tokenType": "ERC20",
          "token": {
            "name": "Chloe Clem",
            "symbol": "CHLOE"
          }
        }
        // more tokens
      ]
    }
  }
}
```

</TabItem>
</Tabs>

### Has Primary ENS

You can use Airstack to check if a user has any primary ENS domain registered. This is a strong signal as it costs $ to purchase ENS and takes additional effort to register a primary ENS.:

**Try Demo**

- https://app.airstack.xyz/query/6re2GWPzw5

<Tabs>
<TabItem value="prompt" label="Prompt"  >

```text
Show me if 0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045 has any primary ENS
```

</TabItem>
</Tabs>

<Tabs>
<TabItem value="query" label="Query"  >

```graphql Query
query MyQuery {
  Domains(
    input: {
      filter: {
        owner: { _in: ["0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045"] }
        isPrimary: { _eq: true }
      }
      blockchain: ethereum
    }
  ) {
    Domain {
      name
      owner
      isPrimary
    }
  }
}
```

</TabItem>
<TabItem value="response" label="Response"  >

```json Response
{
  "data": {
    "Domains": {
      "Domain": [
        {
          "name": "vitalik.eth", // This is the primary ENS
          "owner": "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
          "isPrimary": true
        }
      ]
    }
  }
}
```

</TabItem>
</Tabs>

If the user has a primary ENS, then the `Domain` field will have non-zero length, and thus can be considered as a non-spammer.

Otherwise, you may consider the user as one.

### Has Lens Profile & Followers

You can use Airstack to check if a given user has any Lens profile or not, and get the number of followers and people they are following. Users with low followers are more suspicious:

**Try Demo**

- https://app.airstack.xyz/query/aoZPofhxXD

<Tabs>
<TabItem value="prompt" label="Prompt"  >

```text
Show me if 0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045 has any Lens profile and the follower and following count
```

</TabItem>
</Tabs>

<Tabs>
<TabItem value="query" label="Query"  >

```graphql Query
query MyQuery {
  Socials(
    input: {
      filter: {
        dappName: { _eq: lens }
        identity: { _in: ["0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045"] }
      }
      blockchain: ethereum
    }
  ) {
    Social {
      profileName
      profileTokenId
      profileTokenIdHex
      followerCount
      followingCount
    }
  }
}
```

</TabItem>
<TabItem value="response" label="Response"  >

```json Response
{
  "data": {
    "Socials": {
      "Social": [
        {
          "profileName": "vitalik.lens", // This is the Lens profile
          "profileTokenId": "100275",
          "profileTokenIdHex": "0x0187b3",
          "followerCount": 15441,
          "followingCount": 7
        }
      ]
    }
  }
}
```

</TabItem>
</Tabs>

If a user has a Lens profile, as shown in the `Social` field having non-zero length, then you can consider that the user is not a spammer.

Otherwise, the user may be considered as one.

Additionally, you can also consider using comparing the number of followers and following. If there are more followers than following, then you can consider that the user is less likely to be a spammer.

Otherwise, you may take into consideration that the user is a potential spammer.

### Has Farcaster Account & Followers

You can use Airstack to check if a given user has any Farcaster account or not and get the number of followers and people they are followings.

**Try Demo**

- https://app.airstack.xyz/query/4GPOVP5rUE

<Tabs>
<TabItem value="prompt" label="Prompt"  >

```text
Show me if 0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045 has any Farcaster account and the follower and following count
```

</TabItem>
</Tabs>

<Tabs>
<TabItem value="query" label="Query"  >

```graphql Query
query MyQuery {
  Socials(
    input: {
      filter: {
        dappName: { _eq: farcaster }
        identity: { _in: ["0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045"] }
      }
      blockchain: ethereum
    }
  ) {
    Social {
      profileName
      userId
      userAssociatedAddresses
      followerCount
      followingCount
    }
  }
}
```

</TabItem>
<TabItem value="response" label="Response"  >

```json Response
{
  "data": {
    "Socials": {
      "Social": [
        {
          "profileName": "vitalik.eth", // This is the Farcaster account
          "userId": "5650",
          "userAssociatedAddresses": [
            "0xadd746be46ff36f10c81d6e3ba282537f4c68077",
            "0xd8da6bf26964af9d7eed9e03e53415d37aa96045"
          ],
          "followerCount": 8486,
          "followingCount": 69
        }
      ]
    }
  }
}
```

</TabItem>
</Tabs>

If a user has a Farcaster account, as shown in the `Social` field having non-zero length, then you can consider that the user is not a spammer.

Otherwise, the user may be considered as one.

Additionally, you can also consider using comparing the number of followers and following. If there are more followers than following, then you can consider that the user is less likely to be a spammer.

Otherwise, you may take into consideration that the user is a potential spammer.

### Has Non-Virtual POAPs

You can use Airstack to check if a user has any non-virutal POAPs, meaning that the user have attended a real-life event and collected the POAP in person:

**Try Demo**

- https://app.airstack.xyz/query/EjEAFk2Xv7

<Tabs>
<TabItem value="prompt" label="Prompt"  >

```text
Show me all POAPs owned by vitalik.eth and see if they are virtual or not
```

</TabItem>
</Tabs>

<Tabs>
<TabItem value="query" label="Query"  >

```graphql Query
query POAPsOwnedByVitalik {
  Poaps(
    input: {
      filter: { owner: { _in: ["vitalik.eth"] } }
      blockchain: ALL
      limit: 50
    }
  ) {
    Poap {
      mintOrder
      mintHash
      poapEvent {
        isVirtualEvent
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
<TabItem value="response" label="Response"  >

```json Response
{
  "data": {
    "Poaps": {
      "Poap": [
        {
          "mintOrder": 5,
          "mintHash": "0x4974ddc3ada2100b8e4cb2e17fb993324f71e0676cdd33dfff107899fca16e90",
          "poapEvent": {
            "isVirtualEvent": false // This is not virtual event
          }
        },
        {
          "mintOrder": 12,
          "mintHash": "0xdbb3a298401c221e6596557cecd0c0c8944e0dd538b7d81b6d97449b5911ce98",
          "poapEvent": {
            "isVirtualEvent": true // This is virtual event
          }
        }
        // more POAPs
      ]
    }
  }
}
```

</TabItem>
</Tabs>

If the user has attended real-life event and collected the POAP, it will be shown in the `Poap` field having non-zero length, then you can consider that the user as unlikely not a spammer.

Otherwise, you may take into consideration that the user is a potential spammer.

## High Probability of Connection

---

### Common POAP Events Attended

You can use Airstack to check if user B has any POAPs in common with user A, which could provide a strong indication that user B has attended the same POAP events previously and thus close connection to one another:

**Try Demo**

- https://app.airstack.xyz/query/GiJgN06hW9

<Tabs>
<TabItem value="prompt" label="Prompt"  >

```text
Show me all common poaps hold by both betashop.eth and ipeciura.eth
```

</TabItem>
</Tabs>

<Tabs>
<TabItem value="query" label="Query"  >

```graphql Query
query CommonPoaps {
  Poaps( # Example user A: betashop.eth
    input: {
      filter: { owner: { _eq: "betashop.eth" } }
      blockchain: ALL
      limit: 50
    }
  ) {
    Poap {
      poapEvent {
        # Example user B: ipeciura.eth
        poaps(input: { filter: { owner: { _eq: "ipeciura.eth" } } }) {
          eventId
          mintHash
          mintOrder
          poapEvent {
            eventName
            eventURL
            contentValue {
              image {
                extraSmall
                small
                original
                medium
                large
              }
            }
            isVirtualEvent
            city
          }
        }
      }
    }
  }
}
```

</TabItem>
<TabItem value="response" label="Response"  >

```json Response
{
  "data": {
    "Poaps": {
      "Poap": [
        {
          "poapEvent": {
            "poaps": [
              {
                "eventId": "141662", // This POAP hold by both betashop.eth and ipeciura.eth
                "mintHash": "0x959c6119c98af3d2e4b0616d8cdb10f2d161fc917613c0ca7f41234ed6892f19",
                "mintOrder": 117,
                "poapEvent": {
                  "eventName": "You've met Lucas in Summer 23",
                  "eventURL": "https://poap.studio",
                  "contentValue": {
                    "image": {
                      "extraSmall": "https://assets.airstack.xyz/image/poap/gqIGlLldTGyeR+h4MXK90Q==/extra_small.gif",
                      "small": "https://assets.airstack.xyz/image/poap/gqIGlLldTGyeR+h4MXK90Q==/small.gif",
                      "original": "https://assets.airstack.xyz/image/poap/gqIGlLldTGyeR+h4MXK90Q==/original_image.gif",
                      "medium": "https://assets.airstack.xyz/image/poap/gqIGlLldTGyeR+h4MXK90Q==/medium.gif",
                      "large": "https://assets.airstack.xyz/image/poap/gqIGlLldTGyeR+h4MXK90Q==/large.gif"
                    }
                  },
                  "isVirtualEvent": false,
                  "city": "Summer 23"
                }
              }
            ]
          }
        },
        {
          "poapEvent": {
            "poaps": [] // The POAP is hold by betashop.eth, but not ipeciura.eth
          }
        }
        // more POAP events
      ]
    }
  }
}
```

</TabItem>
</Tabs>

By checking the innermost `Poaps` fields, you can see the events that are attended by both user A and B, which will be returned as an array with non-zero length, and thus user B can be considered unlikely a spammer.

Otherwise, you may take into consideration that the user B is a potential spammer.

### Common Followers on Lens or Farcaster

You can use Airstack to check if user B has any followers in common with user A on either Lens or Farcaster, which could provide a strong indication that user A and B have a close connection to one another on either of the social graph:

**Try Demo**

- https://app.airstack.xyz/query/Ngh4xIAcYL

<Tabs>
<TabItem value="prompt" label="Prompt"  >

```text
Show me all user that follow both betashop.eth and ipeciura.eth
```

</TabItem>
</Tabs>

<Tabs>
<TabItem value="query" label="Query"  >

```graphql Query
query CommonFollowers {
  SocialFollowers(
    input: {
      filter: { identity: { _eq: "betashop.eth" } }
      blockchain: ALL
      limit: 50
    }
  ) {
    Follower {
      followerAddress {
        socialFollowers(
          input: { filter: { identity: { _eq: "ipeciura.eth" } } }
        ) {
          Follower {
            followerAddress {
              addresses
              domains {
                name
              }
              socials {
                profileName
                profileTokenId
                profileTokenIdHex
                userId
                userAssociatedAddresses
              }
            }
          }
        }
      }
    }
  }
}
```

</TabItem>
<TabItem value="response" label="Response"  >

```json Response
{
  "data": {
    "SocialFollowers": {
      "Follower": [
        {
          "followerAddress": {
            "socialFollowers": {
              "Follower": [
                {
                  "followerAddress": {
                    // followers of both betashop.eth and ipeciura.eth
                    "addresses": [
                      "0x44f9047ec33dd3682df5e9178c492272a5f7afd0",
                      "0x71167f1794c90510671f3d122207696709ef4417",
                      "0x8c34ae28c1bb84785e4c059c301842b7be295a01",
                      "0x3570958b8dcbc4f663f508efcedb454ee9af9516"
                    ],
                    "domains": [
                      {
                        "name": "panjab.eth"
                      },
                      {
                        "name": "prabh.eth"
                      },
                      {
                        "name": "kapurthala.eth"
                      },
                      {
                        "name": "gurdaspur.eth"
                      },
                      {
                        "name": "solostakes.eth"
                      },
                      {
                        "name": "antilibrary.eth"
                      },
                      {
                        "name": "ਣਣਣ.eth"
                      },
                      {
                        "name": "ethereumfellowship.eth"
                      },
                      {
                        "name": "jynmrh.eth"
                      },
                      {
                        "name": "jugaad.eth"
                      }
                    ],
                    "socials": [
                      {
                        "profileName": "prabh.eth",
                        "profileTokenId": "11946",
                        "profileTokenIdHex": "0x2eaa",
                        "userId": "11946",
                        "userAssociatedAddresses": [
                          "0x44f9047ec33dd3682df5e9178c492272a5f7afd0",
                          "0x71167f1794c90510671f3d122207696709ef4417",
                          "0x8c34ae28c1bb84785e4c059c301842b7be295a01",
                          "0x3570958b8dcbc4f663f508efcedb454ee9af9516"
                        ]
                      },
                      {
                        "profileName": "retroflex.lens",
                        "profileTokenId": "106741",
                        "profileTokenIdHex": "0x01a0f5",
                        "userId": "0x44f9047ec33dd3682df5e9178c492272a5f7afd0",
                        "userAssociatedAddresses": [
                          "0x44f9047ec33dd3682df5e9178c492272a5f7afd0"
                        ]
                      }
                    ]
                  }
                }
              ]
            }
          }
        },
        {
          "followerAddress": {
            "socialFollowers": {
              "Follower": null // followers of betashop.eth, but not followed by ipeciura.eth
            }
          }
        }
        // more followers
      ]
    }
  }
}
```

</TabItem>
</Tabs>

You can see the followers that are following both user A and B, which will be returned in the innermost `Follower` fields with a non-zero length array. If so, user B can be considered unlikely a spammer.

Otherwise, you may take into consideration that the user B is a potential spammer.

#### Developer Support

If you have any questions or need help regarding building a known inbox and spam filter for your XMTP messaging app, please join our Airstack's Telegram group.

#### More Resources

- [TokenTransfers API Reference](https://docs.airstack.xyz/airstack-docs-and-faqs/api-references/api-reference/tokentransfers-api)
- [TokenBalances API Reference](https://docs.airstack.xyz/airstack-docs-and-faqs/api-references/api-reference/tokenbalances-api)
- [Domains API Reference](https://docs.airstack.xyz/airstack-docs-and-faqs/api-references/api-reference/domains-api)
- [Socials API Reference](https://docs.airstack.xyz/airstack-docs-and-faqs/api-references/api-reference/socials-api)
- [POAPs API Reference](https://docs.airstack.xyz/airstack-docs-and-faqs/api-references/api-reference/poaps-api)
- [Wallet API Reference](https://docs.airstack.xyz/airstack-docs-and-faqs/api-references/api-reference/wallet-api)
- [Spam Filters](https://docs.airstack.xyz/airstack-docs-and-faqs/guides/xmtp/spam-filters)
  - [Known Senders](https://docs.airstack.xyz/airstack-docs-and-faqs/guides/xmtp/spam-filters/known-senders)
  - [Proof of Personhood](https://docs.airstack.xyz/airstack-docs-and-faqs/guides/xmtp/spam-filters/proof-of-personhood)
  - [High Probability of Connection](https://docs.airstack.xyz/airstack-docs-and-faqs/guides/xmtp/spam-filters/high-probability-of-connection)
