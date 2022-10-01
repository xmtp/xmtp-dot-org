<!---->
# Class: Conversations

Conversations allows you to view ongoing 1:1 messaging sessions with another wallet

## Constructors

### constructor

**new Conversations**(`client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |

#### Defined in

[conversations/Conversations.ts:19](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/conversations/Conversations.ts#L19)

## Properties

### client

 `Private` **client**: [`Client`](Client.md)

#### Defined in

[conversations/Conversations.ts:18](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/conversations/Conversations.ts#L18)

## Methods

### buildTopicsForAllMessages

`Private` **buildTopicsForAllMessages**(`peerAddresses`, `introTopic`): `string`[]

Builds a list of topics for existing conversations and new intro topics

#### Parameters

| Name | Type |
| :------ | :------ |
| `peerAddresses` | `string`[] |
| `introTopic` | `string` |

#### Returns

`string`[]

#### Defined in

[conversations/Conversations.ts:139](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/conversations/Conversations.ts#L139)

___

### getPeerAddress

`Private` **getPeerAddress**(`message`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](Message.md) |

#### Returns

`string`

#### Defined in

[conversations/Conversations.ts:163](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/conversations/Conversations.ts#L163)

___

### list

**list**(): `Promise`<[`Conversation`](Conversation.md)[]\>

List all conversations with the current wallet found in the network, deduped by peer address

#### Returns

`Promise`<[`Conversation`](Conversation.md)[]\>

#### Defined in

[conversations/Conversations.ts:26](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/conversations/Conversations.ts#L26)

___

### newConversation

**newConversation**(`peerAddress`): `Promise`<[`Conversation`](Conversation.md)\>

Creates a new conversation for the given address. Will throw an error if the peer is not found in the XMTP network

#### Parameters

| Name | Type |
| :------ | :------ |
| `peerAddress` | `string` |

#### Returns

`Promise`<[`Conversation`](Conversation.md)\>

#### Defined in

[conversations/Conversations.ts:154](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/conversations/Conversations.ts#L154)

___

### stream

**stream**(): `Promise`<[`Stream`](Stream.md)<[`Conversation`](Conversation.md)\>\>

Returns a stream of any newly created conversations.
Will dedupe to not return the same conversation twice in the same stream.
Does not dedupe any other previously seen conversations

#### Returns

`Promise`<[`Stream`](Stream.md)<[`Conversation`](Conversation.md)\>\>

#### Defined in

[conversations/Conversations.ts:56](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/conversations/Conversations.ts#L56)

___

### streamAllMessages

**streamAllMessages**(): `Promise`<[`Stream`](Stream.md)<[`Message`](Message.md)\>\>

Returns a stream for all new messages from existing and new conversations.

#### Returns

`Promise`<[`Stream`](Stream.md)<[`Message`](Message.md)\>\>

#### Defined in

[conversations/Conversations.ts:90](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/conversations/Conversations.ts#L90)
