---
sidebar_label: React
sidebar_position: 5
toc_max_heading_level: 4
description: "These packages provide the XMTP client SDK for React apps, including React hooks and components."
---

# Quickstart for React SDK hooks and UI components

## React SDK hooks

This package provides the [React XMTP client SDK](https://github.com/xmtp/xmtp-web/tree/main/packages/react-sdk), including React hooks that provide ready-made logic for interacting with the XMTP network and work well with these [React components](#react-components).

Build with this SDK to provide messaging between blockchain wallet addresses, including DMs, notifications, announcements, and more.

:::caution Important

This SDK is in **beta** status and ready for you to start building with. However, we do **not** recommend using beta software in production apps. Software in this status may change based on feedback.

:::

To keep up with the latest SDK developments, see the [Issues tab](https://github.com/xmtp/xmtp-web/issues) in the `xmtp-web` repo.

To learn more about XMTP and get answers to frequently asked questions, see [FAQ about XMTP](/docs/concepts/faq).

### What's inside?

### Hooks

These hooks are mostly bindings to the [`xmtp-js` SDK](https://github.com/xmtp/xmtp-js) that expose the underlying data in a React way.

### Requirements

- Node 16.10+
- React 16.14+

### Install

```bash
# npm
npm install @xmtp/react-sdk@preview

# pnpm
pnpm install @xmtp/react-sdk@preview

# yarn
yarn add @xmtp/react-sdk@preview
```

#### Create React App

Requires the Buffer polyfill. See below.

If you see a lot of warnings related to source maps, see [this issue](https://github.com/facebook/create-react-app/discussions/11767) to learn more.

#### Vite

Requires the Buffer polyfill. See below.

#### Buffer polyfill

The Node Buffer API must be polyfilled in some cases. To do so, add the `buffer` dependency to your project and then polyfill it in your entry file.

**Example**

```ts
import { Buffer } from "buffer";

window.Buffer = window.Buffer ?? Buffer;
```

### Usage

#### Add the provider

To use the provided hooks, you must wrap your app with an `XMTPProvider`. This gives the hooks access to the XMTP client.

**Example**

```tsx
createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <XMTPProvider>
      <App />
    </XMTPProvider>
  </StrictMode>
);
```

#### List existing conversations

The `useConversations` hook fetches all conversations with the current wallet on mount. It also exposes error and loading states.

**Type**

```ts
import type { Conversation } from "@xmtp/react-sdk";

const useConversations: () => {
  conversations: Conversation[];
  error: unknown;
  isLoading: boolean;
};
```

**Example**

```tsx
export const ListConversations: React.FC = () => {
  const { conversations, error, isLoading } = useConversations();

  if (error) {
    return "An error occurred while loading conversations";
  }

  if (isLoading) {
    return "Loading conversations...";
  }

  return (
    ...
  );
};
```

To learn more, see [List existing conversations](https://github.com/xmtp/xmtp-js#list-existing-conversations) in the `xmtp-js` SDK docs.

#### Listen for new conversations

The `useStreamConversations` hook listens for new conversations in real-time and calls the passed callback when a new conversation is created. It also exposes an error state.

**Type**

```ts
import type { Conversation } from "@xmtp/react-sdk";

const useStreamConversations: (
  onConversation: (conversation: Conversation) => void
) => {
  error: unknown;
};
```

**Example**

```tsx
import { useCallback, useState } from "react";
import { useStreamConversations } from "@xmtp/react-sdk";
import type { Conversation } from "@xmtp/react-sdk";

export const NewConversations: React.FC = () => {
  // track streamed conversations
  const [streamedConversations, setStreamedConversations] = useState<
    Conversation[]
  >([]);

  // callback to handle incoming conversations
  const onConversation = useCallback(
    (conversation: Conversation) => {
      setStreamedConversations((prev) => [...prev, conversation]);
    },
    [],
  );
  const { error } = useStreamConversations(onConversation);

  if (error) {
    return "An error occurred while streaming conversations";
  }

  return (
    ...
  );
};
```

To learn more, see [Listen for new conversations](https://github.com/xmtp/xmtp-js#listen-for-new-conversations) in the `xmtp-js` SDK docs.

#### Start a new conversation

The `useStartConversation` hook starts a new conversation and sends an initial message to it.

**Type**

```ts
import type {
  Conversation,
  InvitationContext,
  SendOptions,
} from "@xmtp/react-sdk";

const useStartConversation: <T = string>(
  options?: InvitationContext
) => (
  peerAddress: string,
  message: T,
  sendOptions?: SendOptions
) => Promise<Conversation | undefined>;
```

**Example**

```tsx
import { isValidAddress, useStartConversation } from "@xmtp/react-sdk";
import { useCallback, useState } from "react";

export const StartConversation: React.FC = () => {
  const [peerAddress, setPeerAddress] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const startConversation = useStartConversation();

  const handleAddressChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setPeerAddress(e.target.value);
    },
    []
  );

  const handleMessageChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setMessage(e.target.value);
    },
    []
  );

  const handleStartConversation = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (peerAddress && message) {
        setIsLoading(true);
        const conversation = await startConversation(peerAddress, message);
        setIsLoading(false);
      }
    },
    [message, peerAddress, startConversation]
  );

  return (
    <form onSubmit={handleStartConversation}>
      <input
        name="addressInput"
        type="text"
        onChange={handleAddressChange}
        disabled={isLoading}
      />
      <input
        name="messageInput"
        type="text"
        onChange={handleMessageChange}
        disabled={isLoading || !isValidAddress(peerAddress)}
      />
    </form>
  );
};
```

#### Send messages

The `useSendMessage` hook sends a new message into a conversation.

**Type**

```ts
import type { Conversation, SendOptions } from "@xmtp/react-sdk";

const useSendMessage: <T = string>(
  conversation: Conversation,
  options?: SendOptions
) => (message: T, optionsOverride?: SendOptions) => Promise<void>;
```

**Example**

```tsx
import { useSendMessage } from "@xmtp/react-sdk";
import type { Conversation } from "@xmtp/react-sdk";
import { useCallback, useState } from "react";

export const SendMessage: React.FC<{ conversation: Conversation }> = ({
  conversation,
}) => {
  const [peerAddress, setPeerAddress] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const sendMessage = useSendMessage(conversation);

  const handleAddressChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setPeerAddress(e.target.value);
    },
    []
  );

  const handleMessageChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setMessage(e.target.value);
    },
    []
  );

  const handleSendMessage = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (peerAddress && isValidAddress(peerAddress) && message) {
        setIsLoading(true);
        await sendMessage(message);
        setIsLoading(false);
      }
    },
    [message, peerAddress, sendMessage]
  );

  return (
    <form onSubmit={handleSendMessage}>
      <input
        name="addressInput"
        type="text"
        onChange={handleAddressChange}
        disabled={isSending}
      />
      <input
        name="messageInput"
        type="text"
        onChange={handleMessageChange}
        disabled={isSending}
      />
    </form>
  );
};
```

To learn more, see [Send messages](https://github.com/xmtp/xmtp-js#send-messages) in the `xmtp-js` SDK docs.

#### List messages in a conversation

The `useMessages` hook fetches a list of all messages within a conversation on mount. It also exposes loading and error states and whether there are more messages based on the options passed.

**Type**

```ts
import type {
  Conversation,
  DecodedMessage,
  ListMessagesOptions,
} from "@xmtp/react-sdk";

export type UseMessagesOptions = ListMessagesOptions & {
  /**
   * Callback function to execute when new messages are fetched
   */
  onMessages?: (
    messages: DecodedMessage[],
    options: ListMessagesOptions
  ) => void;
};

const useMessages: (
  conversation?: Conversation,
  options?: UseMessagesOptions
) => {
  error: unknown;
  hasMore: boolean;
  isLoading: boolean;
  messages: DecodedMessage[];
  next: () => Promise<DecodedMessage[]>;
};
```

:::important

It's important to memoize the `options` argument so that the hook doesn't fetch messages endlessly.

:::

**Example**

```tsx
import { useMessages } from "@xmtp/react-sdk";
import type { Conversation, DecodedMessage } from "@xmtp/react-sdk";

export const Messages: React.FC<{
  conversation: Conversation;
}> = ({ conversation }) => {
  const { error, messages, isLoading } = useMessages(conversation);

  if (error) {
    return "An error occurred while loading messages";
  }

  if (isLoading) {
    return "Loading messages...";
  }

  return (
    ...
  );
};
```

##### Page through messages

If a conversation has a lot of messages, it's more performant to page through them rather than fetching them all at once. This can be accomplished by using the `limit` option to limit the number of messages to fetch at a time.

**Example**

```tsx
import { useMessages } from "@xmtp/react-sdk";
import type { Conversation, DecodedMessage } from "@xmtp/react-sdk";

export const PagedMessages: React.FC<{
  conversation: Conversation;
}> = ({ conversation }) => {
  const { error, isLoading, messages, next } = useMessages(
    conversation,
    options: {
      limit: 20,
    },
  );

  const handleClick = useCallback(() => {
    // fetch next page of messages
    next();
  }, [next]);

  if (error) {
    return "An error occurred while loading messages";
  }

  if (isLoading) {
    return "Loading messages...";
  }

  return (
    <>
      ...
      <button type="button" onClick={handleClick}>
        Load more messages
      </button>
    </>
  );
};
```

#### Listen for new messages in a conversation

The `useStreamMessages` hook streams new conversation messages on mount and exposes an error state.

**Type**

```ts
import type { Conversation, DecodedMessage } from "@xmtp/react-sdk";

const useStreamMessages: (
  conversation: Conversation,
  onMessage: (message: DecodedMessage) => void
) => {
  error: unknown;
};
```

**Example**

```tsx
import { useStreamMessages } from "@xmtp/react-sdk";
import type { Conversation, DecodedMessage } from "@xmtp/react-sdk";
import { useCallback, useEffect, useState } from "react";

export const StreamMessages: React.FC<{
  conversation: Conversation;
}> = ({
  conversation,
}) => {
  // track streamed messages
  const [streamedMessages, setStreamedMessages] = useState<DecodedMessage[]>(
    [],
  );

  // callback to handle incoming messages
  const onMessage = useCallback(
    (message: DecodedMessage) => {
      setStreamedMessages((prev) => [...prev, message]);
    },
    [streamedMessages],
  );

  useStreamMessages(conversation, onMessage);

  useEffect(() => {
    setStreamedMessages([]);
  }, [conversation]);

  return (
    ...
  );
};
```

To learn more, see [Listen for new messages in a conversation](https://github.com/xmtp/xmtp-js#listen-for-new-messages-in-a-conversation) in the `xmtp-js` SDK docs.

#### Listen for new messages in all conversations

The `useStreamAllMessages` hook streams new messages from all conversations on mount and exposes an error state.

**Type**

```ts
import type { DecodedMessage } from "@xmtp/react-sdk";

const useStreamAllMessages: (onMessage: (message: DecodedMessage) => void) => {
  error: unknown;
};
```

**Example**

```tsx
import { useStreamAllMessages } from "@xmtp/react-sdk";
import type { DecodedMessage } from "@xmtp/react-sdk";
import { useCallback, useState } from "react";

export const StreamAllMessages: React.FC = () => {
  // track streamed messages
  const [streamedMessages, setStreamedMessages] = useState<DecodedMessage[]>(
    [],
  );

  // callback to handle incoming messages
  const onMessage = useCallback(
    (message: DecodedMessage) => {
      setStreamedMessages((prev) => [...prev, message]);
    },
    [streamedMessages],
  );

  useStreamAllMessages(onMessage);

  return (
    ...
  );
};
```

To learn more, see [Listen for new messages in all conversations](https://github.com/xmtp/xmtp-js#listen-for-new-messages-in-all-conversations) in the `xmtp-js` SDK docs.

### Developing

Run `yarn dev` to build the SDK and watch for changes, which will trigger a rebuild.

### Useful commands

- `yarn build`: Builds the SDK
- `yarn clean`: Removes `node_modules`, `lib`, and `.turbo` folders
- `yarn dev`: Builds the SDK and watches for changes, which will trigger a rebuild
- `yarn format`: Runs prettier format and write changes
- `yarn format:check`: Runs prettier format check
- `yarn lint`: Runs ESLint
- `yarn test`: Runs all unit tests
- `yarn typecheck`: Runs `tsc`

## React UI components

This package provides [React UI components](https://github.com/xmtp/xmtp-web/tree/main/packages/react-components) for building React apps with XMTP.

:::caution Important

These components are in **beta** status and ready for you to start building with. However, we do **not** recommend using beta software in production apps. Software in this status may change based on feedback.

:::

To keep up with the latest component developments, see the [Issues tab](https://github.com/xmtp/xmtp-web/issues) in the `xmtp-web` repo.

### What's inside?

#### Components

These ready-made UI components provide building blocks that can help you quickly a chat app with XMTP. These components pair well with the [React SDK hooks](#react-sdk-hooks).

The package also provides a Storybook that outlines each component's API, use cases, and design that you can use as an interactive learning tool.

### Requirements

- Node 16.10+
- React 16.14+

### Install

```bash
# npm
npm install @xmtp/react-components@preview

# pnpm
pnpm install @xmtp/react-components@preview

# yarn
yarn add @xmtp/react-components@preview
```

### Usage

#### Include styles

To use any of the included components, you must also include their styles. To do so, import the styles from the package into your project.

```ts
import "@xmtp/react-components/styles.css";
```

:::important

The included styles contain normalizations of elements globally.

:::

### Developing

Run `yarn dev` to build the package and watch for changes, which will trigger a rebuild.

### Useful commands

- `yarn build`: Builds the package
- `yarn clean`: Removes `node_modules`, `lib`, and `.turbo` folders
- `yarn dev`: Builds the package and watches for changes, which will trigger a rebuild
- `yarn format`: Runs prettier format and write changes
- `yarn format:check`: Runs prettier format check
- `yarn lint`: Runs ESLint
- `yarn storybook`: Launches Storybook for the React components
- `yarn test`: Runs all unit tests
- `yarn typecheck`: Runs `tsc`

## Breaking revisions

Because these packages are in active development, you should expect breaking revisions that might require you to adopt the latest release to enable your app to continue working as expected.

XMTP communicates about breaking revisions in the [XMTP Discord community](https://discord.gg/xmtp), providing as much advance notice as possible. Additionally, breaking revisions in a release are described on the [Releases page](https://github.com/xmtp/xmtp-react/releases).

## Deprecation

Older versions of these packages will eventually be deprecated, which means:

1. The network will not support and eventually actively reject connections from clients using deprecated versions.
2. Bugs will not be fixed in deprecated versions.

The following table provides the deprecation schedule.

| Announced                                                            | Effective | Minimum Version | Rationale |
| -------------------------------------------------------------------- | --------- | --------------- | --------- |
| There are no deprecations scheduled for these packages at this time. |           |                 |           |

Bug reports, feature requests, and PRs are welcome in accordance with these [contribution guidelines](https://github.com/xmtp/xmtp-react/blob/main/CONTRIBUTING.md).
