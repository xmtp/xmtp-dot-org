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

### How it Works

:::
Eager to deploy your own group chat in just three steps? Jump to #deploy.
:::

Our server is going to be using the CLI for managing group chats connected to libxmtp. Client.ts generates a `groupClient` with an interface for interacting with groups:

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

### Create a Converse group link

The backend `/create` endpoint, hosted on Replit, is designed to accept parameters such as `name` and `description`. Upon receiving these, it initiates the creation of a group by invoking the `createGroup` method.

```jsx
const groupId = await client.createGroup("group-creator-is-admin");
//group-creator-is-admin indicates bla bla bla...
// other permissions are valid like
```

Using that group_id , the dev registers the group on Converse using:

```bash
POST <https://backend-staging.converse.xyz/api/groups/create>
```

with parameters:

```json
{
  "webhook": "<https://my-domain.com/webhook>", // An URL that will be called with group
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

### Share your converse link

You get back a link in the form `https://preview.converse.xyz/group/<groupLinkId>` that
you can share with people.

### Open the Converse Group Link on a mobile phone that has Converse PREVIEW

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

The `shouldAddMember` function executes various checks, such as verifying NFTs or tokens possessed by the wallet, including POAPs, among others.

For incorporating different validation logics, please consult the [Airstack API Docs]. Specifically, in this scenario, we aim to authenticate whether the address attended ETH Paris by confirming the possession of a POAP.

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

## Launch Your Own in Just Three Simple Steps

### Step 1: Fork the Code on Replit

Navigate to this Replit link and fork the provided code to kickstart your own group chat creation. While we'll be utilizing Replit for this demonstration, feel free to opt for any backend platform of your preference that can generate a unique webhook URL for creation and validation processes.

### Step 2: Customize Group Validation Logic

Adjust the validation logic within your fork to ensure it meets the specific requirements of your group chat.

### Step 3: Update Your Repository with Your Custom Replit URL

By updating your repository with your personalized Replit URL, you finalize the setup. Congratulations! You've now successfully established an API for effortlessly setting up group chats.
