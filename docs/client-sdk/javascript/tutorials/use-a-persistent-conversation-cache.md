---
sidebar_label: Use a persistent conversation cache
sidebar_position: 7
---

# Use a persistent conversation cache to improve load time

For a user with a large number of ongoing conversations, loading their conversation list in real-time can be a very expensive operation from the perspective of both bandwidth and CPU usage. This is because the message API client must download all of the [conversation invites](https://xmtp.org/docs/dev-concepts/invitation-and-message-encryption) and decrypt each one using X3DH before being able to display the conversations and their messages.

To improve conversation load time, you can use the XMTP SDK to export the unencrypted conversation list in a JSON serializable format to a persistent conversation cache. For example, you can use the Zustand [`persist` middleware](https://github.com/pmndrs/zustand/blob/main/docs/integrations/persisting-store-data.md) to create a conversation cache that you can persist to the browser’s `LocalStorage`.

:::info

The process described in this tutorial will change soon. You can implement a persistent conversation cache as described here to address performance issues in your app now. However, please be prepared to update your app to use a different approach to be provided in the near future.

:::

When your app creates a new message API client instance, the client can load its internal conversation cache from the browser’s persistent conversation cache.

:::warning

Treat the conversations and data in the cache with the utmost care. Compromise of this data will allow an attacker to impersonate the user on the XMTP network. A compromised script in your app or browser extension could access this data if stored in `LocalStorage`.

:::

## Create a persistent conversation cache constant

Create a persistent conversation cache constant for use in your app.

For example, see this code snippet from [`helpers/constants.ts`](https://github.com/xmtp-labs/xmtp-inbox-web/blob/main/helpers/constants.ts) in the example XMTP Inbox web app:

```tsx
export const CONVERSATION_CACHE_VERSION = 1;
```

## Create a persistent conversation cache

Enable your app to create the persistent conversation cache in its local storage. 

For example, see [`/store/conversationCache.ts`](https://github.com/xmtp-labs/xmtp-inbox-web/blob/main/store/conversationCache.ts) in the example XMTP Inbox web app:

```tsx
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ConversationExport } from "@xmtp/xmtp-js/dist/types/src/conversations/Conversation";
import { getEnv } from "../helpers";
import { CONVERSATION_CACHE_VERSION } from "../helpers/constants";

/**
 * The ConversationCache is a JSON serializable Zustand store that is persisted to LocalStorage
 * Persisting conversations to the cache saves on both bandwidth and CPU cycles, as we don't have to re-fetch or re-decrypt conversations on subsequent page loads
 */
interface ConversationCache {
  // Mapping of conversation exports, keyed by wallet address
  conversations: { [walletAddress: string]: ConversationExport[] };
  // Overwrite the cache for a given wallet address
  setConversations: (
    walletAddress: string,
    conversations: ConversationExport[],
  ) => void;
  // Add a single conversation to the cache.
  // Deduping only happens at the time the cache is loaded, so be careful to not overfill or you will use more LocalStorage space than necessary
  addConversation: (
    walletAddress: string,
    conversation: ConversationExport,
  ) => void;
}

export const useConversationCache = create<ConversationCache>()(
  persist(
    (set, get) => ({
      conversations: {},
      setConversations: (walletAddress: string, convos: ConversationExport[]) =>
        set({
          conversations: { ...get().conversations, [walletAddress]: convos },
        }),
      addConversation: (walletAddress: string, convo: ConversationExport) => {
        const existing = get().conversations;
        const existingForWallet = existing[walletAddress] || [];
        return set({
          conversations: {
            ...existing,
            [walletAddress]: [...existingForWallet, convo],
          },
        });
      },
    }),
    {
      // Ensure that the LocalStorage key includes the network and the cache version
      // If any breaking changes to the ConversationExport schema occur, increment the cache version.
      name: `xmtp:conversations:${getEnv()}:v${CONVERSATION_CACHE_VERSION}`,
      partialize: (state) => ({ conversations: state.conversations }),
    },
  ),
);
```

For the `getEnv` import, see [`helpers/index.ts`](https://github.com/xmtp-labs/xmtp-inbox-web/blob/main/helpers/index.ts) and [`helpers/env.ts`](https://github.com/xmtp-labs/xmtp-inbox-web/blob/main/helpers/env.ts) in the example XMTP Inbox web app repo.

## Add conversations to the persistent cache

Add existing and new conversations to the persistent cache.

For example, see these code snippets from [`hooks/useListConversations.tsx`](https://github.com/xmtp-labs/xmtp-inbox-web/blob/main/hooks/useListConversations.tsx) in the example XMTP Inbox web app:

```tsx
import { useConversationCache } from "../store/conversationCache";

const setConversationCache = useConversationCache(
    (state) => state.setConversations,
  );
const addToConversationCache = useConversationCache(
    (state) => state.addConversation,
  );

for (const convo of convos) {
        if (convo.peerAddress !== walletAddress) {
          conversations.set(getConversationId(convo), convo);

setConversations(new Map(conversations));
      setLoadingConversations(false);
      if (Notification.permission === "default") {
        Notification.requestPermission();
      }

if (walletAddress) {
        // Update the cache with the full conversation exports
        const convoExports = await client.conversations.export();
        setConversationCache(walletAddress, convoExports);
      }

if (walletAddress) {
        // Add the newly streamed conversation to the cache
        addToConversationCache(walletAddress, convo.export());
      }
```

## Preload conversations from the persistent cache to the message API client cache

Load conversations from the persistent cache to the client cache.

For example, see these code snippets from [`hooks/useInitXmtpClient.ts`](https://github.com/xmtp-labs/xmtp-inbox-web/blob/main/hooks/useInitXmtpClient.ts) in the example XMTP Inbox web app:

```tsx
import { useAccount, useSigner } from "wagmi";
import { address } from "../components/Address";
import { useConversationCache } from '../store/conversationCache';

const { address } = useAccount();

const conversationExports = useConversationCache((state) => state.conversations[address]);

if (conversationExports && conversationExports.length) {
  // Preload the client with conversations from the cache
  await xmtp.conversations.import(conversationExports);
}
```

For the `address` import, see [`components/Address.tsx`](https://github.com/xmtp-labs/xmtp-inbox-web/blob/dev/components/Address.tsx) in the XMTP Inbox web app repo.

## Clear the persistent conversation cache

Clear the persistent conversation cache upon wallet disconnect.

For example, see this code snippet from [`helpers/keys.ts`](https://github.com/xmtp-labs/xmtp-inbox-web/blob/main/helpers/keys.ts) in the example XMTP Inbox web app:

```tsx
export const wipeKeys = (walletAddress: string) => {
  // This will clear the conversation cache + the private keys
  localStorage.removeItem(buildLocalStorageKey(walletAddress));
};
```
