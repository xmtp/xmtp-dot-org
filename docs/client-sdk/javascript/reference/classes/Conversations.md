<!--[@xmtp/xmtp-js](../README.md) / [Exports](../modules.md) / Conversations-->

# Class: Conversations

Conversations allows you to view ongoing 1:1 messaging sessions with another wallet

<!--## Table of contents

### Constructors

- [constructor](Conversations.md#constructor)

### Methods

- [list](Conversations.md#list)
- [newConversation](Conversations.md#newconversation)
- [stream](Conversations.md#stream)
- [streamAllMessages](Conversations.md#streamallmessages)-->

## Constructors

### constructor

• **new Conversations**(`client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |

#### Defined in

[conversations/Conversations.ts:19](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/conversations/Conversations.ts#L19)

## Methods

### list

▸ **list**(): `Promise`<[`Conversation`](Conversation.md)[]\>

List all conversations with the current wallet found in the network, deduped by peer address

#### Returns

`Promise`<[`Conversation`](Conversation.md)[]\>

#### Defined in

[conversations/Conversations.ts:26](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/conversations/Conversations.ts#L26)

___

### newConversation

▸ **newConversation**(`peerAddress`): `Promise`<[`Conversation`](Conversation.md)\>

Creates a new conversation for the given address. Will throw an error if the peer is not found in the XMTP network

#### Parameters

| Name | Type |
| :------ | :------ |
| `peerAddress` | `string` |

#### Returns

`Promise`<[`Conversation`](Conversation.md)\>

#### Defined in

[conversations/Conversations.ts:154](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/conversations/Conversations.ts#L154)

___

### stream

▸ **stream**(): `Promise`<[`Stream`](Stream.md)<[`Conversation`](Conversation.md)\>\>

Returns a stream of any newly created conversations.
Will dedupe to not return the same conversation twice in the same stream.
Does not dedupe any other previously seen conversations

#### Returns

`Promise`<[`Stream`](Stream.md)<[`Conversation`](Conversation.md)\>\>

#### Defined in

[conversations/Conversations.ts:56](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/conversations/Conversations.ts#L56)

___

### streamAllMessages

▸ **streamAllMessages**(): `Promise`<[`Stream`](Stream.md)<[`Message`](Message.md)\>\>

Returns a stream for all new messages from existing and new conversations.

#### Returns

`Promise`<[`Stream`](Stream.md)<[`Message`](Message.md)\>\>

#### Defined in

[conversations/Conversations.ts:90](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/conversations/Conversations.ts#L90)
