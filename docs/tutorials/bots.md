---
sidebar_label: Build and deploy an XMTP Bot
sidebar_position: 6
---

# Build and deploy an XMTP Bot

This guide will take you through the steps to create and deploy a simple bot using the [BotKit](https://github.com/xmtp/botkit) package.

### Step 1: Installation

First, install the necessary CLI tool globally using npm:

```bash
npx create-xmtp-bot <bot-name>
cd <bot-name>
```

#### Configuration

Set your private key and network environment in the `.env` file:

```bash
KEY= # your bot's private key
XMTP_ENV= # production or dev network
```

#### Building and Running Your Bot

Install dependencies and run your bot:

```bash
# For development with hot-reload
yarn build:watch
yarn start:watch
```

### Step 2: Understanding the `index.ts` File

The `index.ts` file contains the main logic for your bot:

```tsx
import "dotenv/config";
import { run, HandlerContext } from "@xmtp/botkit";

const inMemoryCacheStep = new Map<string, number>();

run(async (context: HandlerContext) => {
  const { content, senderAddress } = context.message;
  const lowerContent = content.toLowerCase();

  if (
    ["stop", "unsubscribe", "cancel", "list"].some((word) =>
      lowerContent.includes(word),
    )
  ) {
    inMemoryCacheStep.set(senderAddress, 0);
    await context.reply(
      "You are now unsubscribed. You will no longer receive updates!",
    );
  }

  const cacheStep = inMemoryCacheStep.get(senderAddress) || 0;
  let message = "";

  switch (cacheStep) {
    case 0:
      message = "Welcome! Choose an option:\n1. Info\n2. Subscribe";
      inMemoryCacheStep.set(senderAddress, 1);
      break;
    case 1:
      if (content === "1") {
        message = "Here is the info.";
      } else if (content === "2") {
        message =
          "You are now subscribed. You will receive updates. Type 'stop' to unsubscribe.";
        inMemoryCacheStep.set(senderAddress, 0);
      } else {
        message = "Invalid option. Please choose 1 for Info or 2 to Subscribe.";
      }
      break;
    default:
      message = "Invalid option. Please start again.";
      inMemoryCacheStep.set(senderAddress, 0);
      break;
  }

  await context.reply(message);
});
```

This script listens for messages and sends a options like showing info and subscribing logic.

#### Examples

Explore different types of bots:

- [Gm](https://github.com/xmtp/botkit/tree/main/examples/gm): A basic greeting bot.
- [Conversational](https://github.com/xmtp/botkit/tree/main/examples/conversational): Engage users with ongoing conversations and redis subscription
- [GPT](https://github.com/xmtp/botkit/tree/main/examples/gpt): Utilize OpenAI APIs for dynamic responses.

Find more examples in the [Awesome XMTP ⭐️](https://github.com/xmtp/awesome-xmtp) repository.

### Step 3: Deploy with Railway

1. **Sign Up and Setup**: Create an account at [Railway](https://railway.app/) and start a new empty project.

   ![](./img/railway/2.png)

2. **Database (Optional)**: Optionally, Right click to add a Redis database to your project.

   ![](./img/railway/3.png)

   **Get the redis connection string**

   ![](./img/railway/6.gif)

3. **Repository**: Connect your GitHub repository where your bot code resides and deploy the repo.
   ![](./img/railway/4.png)
4. **Environment Variables**: Set up environment variables in Railway.
   ![](./img/railway/5.gif)

### Step 4: Register an ENS Domain

Enhance your bot's identity by registering an [ENS domain](https://ens.domains/).
