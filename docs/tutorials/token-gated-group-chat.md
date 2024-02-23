---
sidebar_label: Token gated group chat
sidebar_position: 6
---

# Building Token-Gated Group Chats

Programmatic groups empower developers to create a variety of token-gated communities, including those based on NFT collections, ERC-20 tokens, and unique access keys similar to Friendtech. For users, these groups offer significant benefits, such as:

- Accessing exclusive content
- Networking with peers and forging new connections

### Problem

The challenge for developers is determining the most effective way to direct users to join these groups. It's crucial to guide them to a platform where they can engage and interact with the community.

### Solution

The solution lies in Converse group links. Developers can generate a unique link for each group, leading users directly to a Converse in-app page. Upon clicking the link, users arrive at a page where they can request to join the group. If they meet the eligibility criteria, they are added to the group and can begin participating in discussions.

### How it Works

<div class=" rabbit  p-5 ">

📥 <b>Want to race ahead?</b> Jump to the quick setup [section](/#Quick-Setup).

</div>

### CLI

For ETH Denver, we've introduced a CLI tool, built using the [libxmtp GitHub repository](https://github.com/xmtp/libxmtp) repository, to enable the swift creation and management of token-gated group chats. This tool eliminates the need for full SDK changes. We don't have those changes yet since the Alpha was released this week.

For details on starting with the CLI for token-gated group chats, visit the [Libxmtp CLI section](https://github.com/xmtp/libxmtp/tree/main/examples/cli). For a hands-on example and to see the CLI tool in action, visit [Groups Node.js Client Replit](https://replit.com/@neekolas/Groups-Nodejs-Client%23src/index.ts).

### Creating the client

Our server is going to be using the CLI for managing group chats connected to libxmtp. `Client.ts` generates a `groupClient` with an interface for interacting with groups:

```jsx
// Initialize the groups client with the database "converse.db"
const groupsClient = await createClient("converse.db");

// Create a new group with specified permissions, controlled by an external wallet
// This method returns the unique ID of the newly created group
const groupId = await groupsClient.createGroup(permissions);

// Add members to the group by specifying the group ID and an array of account addresses
await groupsClient.addMembers(groupId, accountAddresses);

// Remove members from the group by specifying the group ID and an array of account addresses
await groupsClient.removeMembers(groupId, accountAddresses);

// List all groups available in the database
await groupsClient.listGroups();

// Send a message to a specific group by specifying the group ID and the message content
await groupsClient.send(groupId, message);

// List all messages from a specific group by specifying the group ID
await groupsClient.listMessages(groupId);
```

Leveraging this interface, we are now equipped to provide group chat functionalities through webhooks. Our server will incorporate two primary webhook calls.

:::info
While groups created with links are end-to-end encrypted they are not yet private. The bot that manages adding and removing members has access to all messages sent in the group. This limitation will be removed in future versions
:::

### 1: Create a Converse group link

The backend `/create` endpoint, hosted on [Replit](https://replit.com/@neekolas/Converse-Invite-Link), is designed to accept parameters such as `name` and `description`. Upon receiving these, it initiates the creation of a group by invoking the `createGroup` method.

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
  "topic": "<groupId>",
  "name": "My Super Group",
  "description": "Something visible to the user, like eligibility criteria"
}
```

Lets take a look at the full code code

```jsx
async function createConverseGroup(name, description) {
  const groupId = await client.createGroup("group-creator-is-admin");
  console.log(`Group created with ID: ${groupId}`);

  const requestBody = {
    webhook: WEBHOOK_URL,
    topic: groupId,
    name,
    description,
  };
  console.log("Request Body:", requestBody);

  try {
    const response = await fetch(CONVERSE_GROUP_LINK_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });
    const data = await response.json();
    console.log("Group Link Created:", data);
    return data;
  } catch (error) {
    console.error("Failed to create group link:", error);
    throw error;
  }
}
```

This will return a `groupLinkId` that will allow us to generate the converse URL: `https://preview.converse.xyz/group/<groupLinkId>` that
you can share with people.

### Open the Converse Group Link

Open the Converse Group Link on a mobile phone that has Converse PREVIEW installed. Converse PREVIEW is under development. Here are the urls where you can download it:

[iOS Testflight](https://testflight.apple.com/join/70v1Rvv5) | [Android IPA](https://drive.google.com/file/d/1rUtCmtIB6VzHNW8PDJ1TMBRuI2OEOdcg/view)

Upon accessing the link, users will be greeted with the group's name and description, alongside a button to request joining the group. Clicking this button triggers a request to your specified webhook, carrying the `walletAddress` and the `groupId`. This enables your backend logic to determine whether the wallet should be granted access to the group.

### Token gated verification

This process involves your backend webhook validating the wallet address. The request will include parameters such as `groupLinkId`, `groupId`, and `walletAddress`.

```jsx
// Define a POST route for the webhook
app.post("/webhook", async (req: Request, res: Response) => {
  // Destructure the necessary properties from the request body
  const { groupLinkId, topic: groupId, walletAddress } = req.body;
  // Log the received join query with groupId and walletAddress for debugging
  console.log(
    `Received a join query for groupId ${groupId} - wallet ${walletAddress}`,
  );

  // Check if the member should be added to the group
  if (await shouldAddMember(groupId, walletAddress)) {
    try {
      // Attempt to add the member to the group
      await addMember(groupsClient, groupId, walletAddress);
      // Respond with a success status if the member is successfully added
      res.json({
        status: "SUCCESS",
      });
    } catch (e) {
      // Log any errors that occur during the addMember process
      console.error(e);
      // Respond with a 500 status code and the error if an exception is caught
      return res.status(500).json({ error: e });
    }
  } else {
    // Respond with a denied status and a reason if the member should not be added
    res.json({
      status: "DENIED",
      reason: "You are not allowed to join this group",
    });
  }
});
```

The `shouldAddMember` function executes various checks, such as verifying NFTs or tokens possessed by the wallet, including POAPs, among others.

For incorporating different validation logics, please consult the [Airstack API Docs](https://docs.airstack.xyz/airstack-docs-and-faqs/) and [Figma](https://www.figma.com/community/file/1342873007403279194) inspiration.

```jsx
async function shouldAddMember(
  groupId: string,
  accountAddress: string,
): Promise<boolean> {
  // TODO: Airstack logic here
  return true;
}
```

If the condition is true, then add a member using the methods that were described earlier. After adding the member, return a success message.

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

### Quick Setup in Three Steps

1. **Fork on Replit:** Start by forking the project at [Replit](https://replit.com/@neekolas/Converse-Invite-Link). Any backend that allows webhook URL creation works.

2. **Adjust Logic:** Tailor the validation logic to your group chat's requirements.

3. **Update Repository:** Add your custom Replit URL to your repository to complete the setup, enabling your group chat API.
