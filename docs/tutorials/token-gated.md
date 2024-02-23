---
sidebar_label: Token gated group chat
sidebar_position: 6
---

# Building Token-Gated Group Chats

### Context

Programmatic groups empower developers to create a variety of token-gated communities, including those based on NFT collections, ERC-20 tokens, and unique access keys similar to Friendtech. For users, these groups offer significant benefits, such as:

- Accessing exclusive content
- Networking with peers and forging new connections

### Problem

The challenge for developers is determining the most effective way to direct users to join these groups. It's crucial to guide them to a platform where they can engage and interact with the community.

### Solution

The solution lies in Converse group links. Developers can generate a unique link for each group, leading users directly to a Converse in-app page. Upon clicking the link, users arrive at a page where they can request to join the group. If they meet the eligibility criteria, they are added to the group and can begin participating in discussions.

### Concepts

- **Libxmtp**: The backbone of group chats is the latest version of the XMTP protocol, which incorporates the Messaging Layer Security (MLS) standard. This functionality is currently implemented in mobile SDKs. To facilitate the creation of group chats on the backend, we've devised a workaround using libxmtp alongside a Command Line Interface (CLI).

-- **CLI**: The Command Line Interface (CLI) is a powerful tool that ...

-- **Converse**: Converse is a mobile application designed to ...

-- **XMTP**: The XMTP protocol serves as the foundation for ...

-- **Group Chat**: Group chats represent the latest innovation in the XMTP protocol, enabling multi-wallet conversations. For more details, refer to the official documentation.

-- **Airstack**: Airstack is a ...

### How it Works

:::
Eager to deploy your own group chat in just three steps? Jump to #deploy.
:::

Our server is going to be using the CLI for managing group chats connected to xmtp libxmtp. Client.ts generates a groupClient with an interface for interacting with groups

```jsx
const groupsClient = await createClient("converse.db");

//that is used to create methods
await client.createGroup(permissions); //an external wallet controlled by the backend
generates the group and returns ID
await addMembers(groupId, accountAddresses);
await removeMembers(groupId, accountAddresses);
await listGroups();
await send(groupId, message);
await listMessages(groupId);
```

Leveraging this interface, we are now equipped to provide group chat functionalities through webhooks. Our server will incorporate two primary webhook calls.

#### Create a Converse group link

The backend `/create` endpoint, hosted on Replit, is designed to accept parameters such as `name` and `description`. Upon receiving these, it initiates the creation of a group by invoking the `createGroup` method.

```jsx
const groupId = await client.createGroup("group-creator-is-admin");
//group-creator-is-admin indicates bla bla bla...
// other permissions are valid like
```

Using that grop_id , the dev registers the group on Converse using

```bash
POST https://backend-staging.converse.xyz/api/groups/create
```

with parameters

```json
{
  "webhook": "https://my-domain.com/webhook", // An URL that will be called with group
  join requests
  "topic": "<groupId>",
  "name": "My Super Group",
  "description": "Something visible to the user, like eligibility criteria"
}
```

Lets take a look at the full code code

```jsx
const groupId = await client.createGroup("group-creator-is-admin");
console.log("Creating group with id", groupId);
const request = {
  webhook: WEBHOOK_URL,
  topic: groupId,
  name,
  description,
};
console.log(request);
const data = await (
  await fetch(CONVERSE_GROUP_LINK_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  })
).json();
```

This will return a `groupLinkId` that will allow us to generate the converse URL

#### Share your converse link

You get back a link in the form `https://preview.converse.xyz/group/<groupLinkId>` that
you can share with people.

#### Open the Converse Group Link on a mobile phone that has Converse PREVIEW

Upon accessing the link, users will be greeted with the group's name and description, alongside a button to request joining the group. Clicking this button triggers a request to your specified webhook, carrying the `walletAddress` and the `groupId`. This enables your backend logic to determine whether the wallet should be granted access to the group.

This process involves your backend webhook validating the wallet address. The request will include parameters such as `groupLinkId`, `topic: groupId`, and `walletAddress`.

```jsx
app.post("/webhook", async (req: Request, res: Response) => {
  const { groupLinkId, topic: groupId, walletAddress } = req.body;
  console.log(
    `Received a join query for groupId ${groupId} - wallet ${walletAddress}`,
  );

  if (await shouldAddMember(groupId, walletAddress)) {
    try {
      await addMember(groupsClient, groupId, walletAddress);
      res.json({
        status: "SUCCESS",
      });
    } catch (e) {
      console.error(e);
      return res.status(500).json({ error: e });
    }
  } else {
    res.json({
      status: "DENIED",
      reason: "You are not allowed to join this group",
    });
  }
});
```

Should add members is going to run arbitrary logic like checking NFTs or Tokens hold by
the wallet. POAPs, etc.

For implementing dfiffernt logics refer to [Airstack API Docs](). In this case we are
going to validte if the address was present at ETH Paris, verifying that it has a POAP.

```jsx
async function shouldAddMember(
  groupId: string,
  accountAddress: string,
): Promise<boolean> {
  // TODO: Airstack logic here
  return true;
}
```

if true, adds member with the methods previously described and return success

```jsx
await addMember(groupsClient, groupId, walletAddress);
res.json({
  status: "SUCCESS",
});
```

If the wallet is not allowed to join the group, your webhook needs to return

```json
{
  "status": "DENIED",
  "reason": "You do not hold enough token to join the group!"
}
```

And the reason will be displayed back to the user in Converse.

## Deploy your own in 3 easy steps

### Step 1: Head to erplit and fork this code

Head to this replit and Fork the code if you want to create your own group chat. We are
going to be deploying this example to replit , but you can use any backend of choice
that will generate its own webhook URL for calling create and do the validation

### Step 2: Modify the validation of the group

### Step 2: Update the repo with your own replit URL

Thats it! You have created an API for easily creating group chats
