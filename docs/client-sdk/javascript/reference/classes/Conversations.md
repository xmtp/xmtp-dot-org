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

[conversations/Conversations.ts:77](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/conversations/Conversations.ts#L77)

## Properties

### client

 `Private` **client**: [`Client`](Client.md)

#### Defined in

[conversations/Conversations.ts:73](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/conversations/Conversations.ts#L73)

___

### v1Cache

 `Private` **v1Cache**: `ConversationCache`

#### Defined in

[conversations/Conversations.ts:74](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/conversations/Conversations.ts#L74)

___

### v2Mutex

 `Private` **v2Mutex**: `Mutex`

#### Defined in

[conversations/Conversations.ts:75](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/conversations/Conversations.ts#L75)

## Methods

### conversationReferenceToV2

`Private` **conversationReferenceToV2**(`convoRef`): `ConversationV2`

#### Parameters

| Name | Type |
| :------ | :------ |
| `convoRef` | `ConversationReference` |

#### Returns

`ConversationV2`

#### Defined in

[conversations/Conversations.ts:207](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/conversations/Conversations.ts#L207)

___

### createV2Convo

`Private` **createV2Convo**(`recipient`, `context?`): `Promise`<`ConversationV2`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `recipient` | [`SignedPublicKeyBundle`](SignedPublicKeyBundle.md) |
| `context?` | [`InvitationContext`](../modules.md#invitationcontext) |

#### Returns

`Promise`<`ConversationV2`\>

#### Defined in

[conversations/Conversations.ts:503](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/conversations/Conversations.ts#L503)

___

### decodeInvites

`Private` **decodeInvites**(`envelopes`, `shouldThrow?`): `Promise`<`ConversationV2`[]\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `envelopes` | `Envelope`[] | `undefined` |
| `shouldThrow` | `boolean` | `false` |

#### Returns

`Promise`<`ConversationV2`[]\>

#### Defined in

[conversations/Conversations.ts:170](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/conversations/Conversations.ts#L170)

___

### getIntroductionPeers

`Private` **getIntroductionPeers**(`opts?`): `Promise`<`Map`<`string`, `Date`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ListMessagesOptions`](../modules.md#listmessagesoptions) |

#### Returns

`Promise`<`Map`<`string`, `Date`\>\>

#### Defined in

[conversations/Conversations.ts:391](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/conversations/Conversations.ts#L391)

___

### getPeerAddress

`Private` **getPeerAddress**(`message`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`MessageV1`](MessageV1.md) |

#### Returns

`string`

#### Defined in

[conversations/Conversations.ts:535](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/conversations/Conversations.ts#L535)

___

### getV2ConversationsFromKeystore

`Private` **getV2ConversationsFromKeystore**(): `Promise`<`ConversationV2`[]\>

#### Returns

`Promise`<`ConversationV2`[]\>

#### Defined in

[conversations/Conversations.ts:152](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/conversations/Conversations.ts#L152)

___

### list

**list**(): `Promise`<[`Conversation`](../interfaces/Conversation.md)[]\>

List all conversations with the current wallet found in the network.

#### Returns

`Promise`<[`Conversation`](../interfaces/Conversation.md)[]\>

#### Defined in

[conversations/Conversations.ts:86](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/conversations/Conversations.ts#L86)

___

### listV1Conversations

`Private` **listV1Conversations**(): `Promise`<[`Conversation`](../interfaces/Conversation.md)[]\>

#### Returns

`Promise`<[`Conversation`](../interfaces/Conversation.md)[]\>

#### Defined in

[conversations/Conversations.ts:98](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/conversations/Conversations.ts#L98)

___

### listV2Conversations

`Private` **listV2Conversations**(): `Promise`<[`Conversation`](../interfaces/Conversation.md)[]\>

List all V2 conversations

#### Returns

`Promise`<[`Conversation`](../interfaces/Conversation.md)[]\>

#### Defined in

[conversations/Conversations.ts:117](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/conversations/Conversations.ts#L117)

___

### newConversation

**newConversation**(`peerAddress`, `context?`): `Promise`<[`Conversation`](../interfaces/Conversation.md)\>

Creates a new conversation for the given address. Will throw an error if the peer is not found in the XMTP network

#### Parameters

| Name | Type |
| :------ | :------ |
| `peerAddress` | `string` |
| `context?` | [`InvitationContext`](../modules.md#invitationcontext) |

#### Returns

`Promise`<[`Conversation`](../interfaces/Conversation.md)\>

#### Defined in

[conversations/Conversations.ts:435](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/conversations/Conversations.ts#L435)

___

### saveInviteResponseToConversation

`Private` **saveInviteResponseToConversation**(`«destructured»`): `ConversationV2`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `SaveInvitesResponse_Response` |

#### Returns

`ConversationV2`

#### Defined in

[conversations/Conversations.ts:197](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/conversations/Conversations.ts#L197)

___

### stream

**stream**(): `Promise`<[`Stream`](Stream.md)<[`Conversation`](../interfaces/Conversation.md)\>\>

Returns a stream of any newly created conversations.
Will dedupe to not return the same conversation twice in the same stream.
Does not dedupe any other previously seen conversations

#### Returns

`Promise`<[`Stream`](Stream.md)<[`Conversation`](../interfaces/Conversation.md)\>\>

#### Defined in

[conversations/Conversations.ts:224](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/conversations/Conversations.ts#L224)

___

### streamAllMessages

**streamAllMessages**(): `Promise`<`AsyncGenerator`<[`DecodedMessage`](DecodedMessage.md), `any`, `unknown`\>\>

Streams messages from all conversations.

When a new conversation is initiated with the client's address, this function will automatically register it and add it to the list of conversations to watch.
Callers should be aware the first messages in a newly created conversation are picked up on a best effort basis and there are other potential race conditions which may cause some newly created conversations to be missed.

#### Returns

`Promise`<`AsyncGenerator`<[`DecodedMessage`](DecodedMessage.md), `any`, `unknown`\>\>

#### Defined in

[conversations/Conversations.ts:272](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/conversations/Conversations.ts#L272)

___

### updateV2Conversations

**updateV2Conversations**(`startTime?`): `Promise`<`ConversationV2`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `startTime?` | `Date` |

#### Returns

`Promise`<`ConversationV2`[]\>

#### Defined in

[conversations/Conversations.ts:159](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/conversations/Conversations.ts#L159)
