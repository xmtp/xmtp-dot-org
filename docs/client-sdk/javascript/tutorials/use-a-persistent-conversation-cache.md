---
sidebar_label: Use a persistent conversation cache
sidebar_position: 7
---

# Use a persistent conversation cache to improve load time

For a user with a large number of ongoing conversations, loading their conversation list in real-time can be a very expensive operation from the perspective of both bandwidth and CPU usage. This is because the message API client must download all of the [conversation invites](/docs/dev-concepts/invitation-and-message-encryption) and decrypt each one using X3DH before being able to display the conversations and their messages.

To improve conversation load time, you can use the XMTP SDK to export the unencrypted conversation list in a JSON serializable format to a persistent conversation cache. For example, you can use the Zustand [`persist` middleware](https://github.com/pmndrs/zustand/blob/main/docs/integrations/persisting-store-data.md) to create a conversation cache that you can persist to the browser's `LocalStorage`.

:::info

You can implement a persistent conversation cache as described here to address performance issues in your app now. However, please be prepared to update your app to use a more streamlined approach that will be provided by a new major version of the XMTP SDK scheduled for release in Q2 2023.

:::

When your app creates a new message API client instance, the client can load its internal conversation cache from the browser's persistent conversation cache.

:::warning

Treat the conversations in the cache with the utmost care. Compromise of these records will allow an attacker to read the user's messages on the XMTP network. A compromised script in your app or browser extension could access this data if stored in `LocalStorage`.

:::

## Create a persistent conversation cache

Enable your app to create the persistent conversation cache in the browser's local storage. 

For example:

```tsx title="conversationCache.ts"
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ConversationExport } from "@xmtp/xmtp-js/dist/types/src/conversations/Conversation";
import { getEnv } from "../helpers";

export const CONVERSATION_CACHE_VERSION = 1;

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

To learn more from an example implementation, see [`conversationCache.ts`](https://github.com/xmtp-labs/xmtp-inbox-web/blob/main/store/conversationCache.ts) in the XMTP Inbox web app repo.

For the `getEnv` import, see helpers [`index.ts`](https://github.com/xmtp-labs/xmtp-inbox-web/blob/main/helpers/index.ts) and [`env.ts`](https://github.com/xmtp-labs/xmtp-inbox-web/blob/main/helpers/env.ts) in the XMTP Inbox web app repo.

## Add conversations to the persistent cache

Add existing and new conversations to the persistent cache.

For example:

```tsx title="In useListConversations.tsx:"
import { useConversationCache } from "../store/conversationCache";

const setConversationCache = useConversationCache(
    (state) => state.setConversations,
  );

useEffect(() => {
    const loadConversations = async () => {
      if (!client) {
        return
      }
      const conversations = await client.conversations.list()
      // ... save the conversations in your application here
      
      // Export the conversations so they can be cached
      const convoExports = await client.conversations.export();
      setConversationCache(walletAddress, convoExports);
    }

    loadConversations()
 }, [client, walletAddress])
```

To learn more from an example implementation, see the [`useListConversations.tsx`](https://github.com/xmtp-labs/xmtp-inbox-web/blob/main/hooks/useListConversations.tsx) hook in the XMTP Inbox web app repo.

## Preload conversations from the persistent cache to the message API client cache

Preload conversations from the persistent cache to the client cache.

For example:

```tsx title="In useInitXmtpClient.ts:"
export const useCacheLoader = () => {
  const client = useXmtpStore((state) => state.client);
  const { address } = useAccount();
  const conversationExports = useConversationCache(
    (state) => state.conversations[client.address],
  );
  useEffect(() => {
    if (!client) {
      return;
    }
    const loadFromCache = async () => {
      if (conversationExports && conversationExports.length) {
        // Preload the client with conversations from the cache
        await client.conversations.import(conversationExports);
      }
    };
   loadFromCache()
  }, [client]);
};
```

To learn more from an example implementation, see the [`useInitXmtpClient.ts`](https://github.com/xmtp-labs/xmtp-inbox-web/blob/main/hooks/useInitXmtpClient.ts) hook in the XMTP Inbox web app repo.

## Clear the persistent conversation cache

Clear the persistent conversation cache upon wallet disconnect.

For example:

```tsx title="In keys.ts:"
export const wipeKeys = (walletAddress: string) => {
  // This will clear the conversation cache + the private keys
  localStorage.removeItem(buildLocalStorageKey(walletAddress));
};
```

To learn more from an example implementation, see the [`keys.ts`](https://github.com/xmtp-labs/xmtp-inbox-web/blob/main/helpers/keys.ts) helper in the XMTP Inbox web app repo.
