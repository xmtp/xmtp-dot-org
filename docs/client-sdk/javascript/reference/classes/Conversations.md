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

[conversations/Conversations.ts:21](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/conversations/Conversations.ts#L21)

## Properties

### client

 `Private` **client**: [`Client`](Client.md)

#### Defined in

[conversations/Conversations.ts:20](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/conversations/Conversations.ts#L20)

## Methods

### getIntroductionPeers

`Private` **getIntroductionPeers**(): `Promise`<`Map`<`string`, `Date`\>\>

#### Returns

`Promise`<`Map`<`string`, `Date`\>\>

#### Defined in

[conversations/Conversations.ts:233](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/conversations/Conversations.ts#L233)

___

### getPeerAddress

`Private` **getPeerAddress**(`message`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `MessageV1` |

#### Returns

`string`

#### Defined in

[conversations/Conversations.ts:365](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/conversations/Conversations.ts#L365)

___

### list

**list**(): `Promise`<[`Conversation`](../modules.md#conversation)[]\>

List all conversations with the current wallet found in the network, deduped by peer address

#### Returns

`Promise`<[`Conversation`](../modules.md#conversation)[]\>

#### Defined in

[conversations/Conversations.ts:28](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/conversations/Conversations.ts#L28)

___

### newConversation

**newConversation**(`peerAddress`, `context?`): `Promise`<[`Conversation`](../modules.md#conversation)\>

Creates a new conversation for the given address. Will throw an error if the peer is not found in the XMTP network

#### Parameters

| Name | Type |
| :------ | :------ |
| `peerAddress` | `string` |
| `context?` | `InvitationContext` |

#### Returns

`Promise`<[`Conversation`](../modules.md#conversation)\>

#### Defined in

[conversations/Conversations.ts:270](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/conversations/Conversations.ts#L270)

___

### sendInvitation

`Private` **sendInvitation**(`recipient`, `invitation`, `created`): `Promise`<`SealedInvitation`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `recipient` | [`SignedPublicKeyBundle`](SignedPublicKeyBundle.md) |
| `invitation` | `InvitationV1` |
| `created` | `Date` |

#### Returns

`Promise`<`SealedInvitation`\>

#### Defined in

[conversations/Conversations.ts:335](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/conversations/Conversations.ts#L335)

___

### stream

**stream**(): `Promise`<[`Stream`](Stream.md)<[`Conversation`](../modules.md#conversation)\>\>

Returns a stream of any newly created conversations.
Will dedupe to not return the same conversation twice in the same stream.
Does not dedupe any other previously seen conversations

#### Returns

`Promise`<[`Stream`](Stream.md)<[`Conversation`](../modules.md#conversation)\>\>

#### Defined in

[conversations/Conversations.ts:59](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/conversations/Conversations.ts#L59)

___

### streamAllMessages

**streamAllMessages**(): `Promise`<`AsyncGenerator`<[`DecodedMessage`](DecodedMessage.md), `any`, `unknown`\>\>

Streams messages from all conversations.

When a new conversation is initiated with the client's address, this function will automatically register it and add it to the list of conversations to watch.
Callers should be aware the first messages in a newly created conversation are picked up on a best effort basis and there are other potential race conditions which may cause some newly created conversations to be missed.

#### Returns

`Promise`<`AsyncGenerator`<[`DecodedMessage`](DecodedMessage.md), `any`, `unknown`\>\>

#### Defined in

[conversations/Conversations.ts:110](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/conversations/Conversations.ts#L110)
