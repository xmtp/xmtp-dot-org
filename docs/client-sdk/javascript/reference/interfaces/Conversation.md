<!---->
# Interface: Conversation

Conversation represents either a V1 or V2 conversation with a common set of methods.

## Properties

### clientAddress

 **clientAddress**: `string`

The wallet address connected to the client

#### Defined in

[conversations/Conversation.ts:44](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/conversations/Conversation.ts#L44)

___

### context

 `Optional` **context**: `InvitationContext`

Optional field containing the `conversationId` and `metadata` for V2 conversations.
Will always be undefined on V1 conversations

#### Defined in

[conversations/Conversation.ts:65](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/conversations/Conversation.ts#L65)

___

### createdAt

 **createdAt**: `Date`

Timestamp the conversation was created at

#### Defined in

[conversations/Conversation.ts:60](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/conversations/Conversation.ts#L60)

___

### ephemeralTopic

 **ephemeralTopic**: `string`

A unique identifier for ephemeral envelopes for a conversation.

#### Defined in

[conversations/Conversation.ts:52](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/conversations/Conversation.ts#L52)

___

### peerAddress

 **peerAddress**: `string`

The wallet address of the other party in the conversation

#### Defined in

[conversations/Conversation.ts:56](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/conversations/Conversation.ts#L56)

___

### topic

 **topic**: `string`

A unique identifier for a conversation. Each conversation is stored on the network on one topic

#### Defined in

[conversations/Conversation.ts:48](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/conversations/Conversation.ts#L48)

## Methods

### decodeMessage

**decodeMessage**(`env`): `Promise`<[`DecodedMessage`](../classes/DecodedMessage.md)\>

Takes a XMTP envelope as input and will decrypt and decode it
returning a `DecodedMessage` instance.

#### Parameters

| Name | Type |
| :------ | :------ |
| `env` | `Envelope` |

#### Returns

`Promise`<[`DecodedMessage`](../classes/DecodedMessage.md)\>

#### Defined in

[conversations/Conversation.ts:91](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/conversations/Conversation.ts#L91)

___

### messages

**messages**(`opts?`): `Promise`<[`DecodedMessage`](../classes/DecodedMessage.md)[]\>

Retrieve messages in this conversation. Default to returning all messages.

If only a subset is required, results can be narrowed by specifying a start/end
timestamp.

```ts
// Get all messages in the past 24 hours
const messages = await conversation.messages({
   startTime: new Date(+new Date() - 86_400)
})
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ListMessagesOptions`](../modules.md#listmessagesoptions) |

#### Returns

`Promise`<[`DecodedMessage`](../classes/DecodedMessage.md)[]\>

#### Defined in

[conversations/Conversation.ts:80](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/conversations/Conversation.ts#L80)

___

### messagesPaginated

**messagesPaginated**(`opts?`): `AsyncGenerator`<[`DecodedMessage`](../classes/DecodedMessage.md)[], `any`, `unknown`\>

**`Deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `ListMessagesPaginatedOptions` |

#### Returns

`AsyncGenerator`<[`DecodedMessage`](../classes/DecodedMessage.md)[], `any`, `unknown`\>

#### Defined in

[conversations/Conversation.ts:84](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/conversations/Conversation.ts#L84)

___

### prepareMessage

**prepareMessage**(`content`, `options?`): `Promise`<`PreparedMessage`\>

Return a `PreparedMessage` that has contains the message ID
of the message that will be sent.

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `any` |
| `options?` | [`SendOptions`](../modules.md#sendoptions) |

#### Returns

`Promise`<`PreparedMessage`\>

#### Defined in

[conversations/Conversation.ts:122](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/conversations/Conversation.ts#L122)

___

### send

**send**(`content`, `options?`): `Promise`<[`DecodedMessage`](../classes/DecodedMessage.md)\>

Send a message into the conversation

## Example
```ts
await conversation.send('Hello world') // returns a `DecodedMessage` instance
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `any` |
| `options?` | [`SendOptions`](../modules.md#sendoptions) |

#### Returns

`Promise`<[`DecodedMessage`](../classes/DecodedMessage.md)\>

#### Defined in

[conversations/Conversation.ts:113](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/conversations/Conversation.ts#L113)

___

### streamEphemeral

**streamEphemeral**(): `Promise`<[`Stream`](../classes/Stream.md)<[`DecodedMessage`](../classes/DecodedMessage.md)\>\>

Return a `Stream` of new ephemeral messages from this conversation's
ephemeral topic.

Stream instances are async generators and can be used in
`for await` statements.

```ts
for await (const message of await conversation.streamEphemeral()) {
   console.log(message.content)
}
```

#### Returns

`Promise`<[`Stream`](../classes/Stream.md)<[`DecodedMessage`](../classes/DecodedMessage.md)\>\>

#### Defined in

[conversations/Conversation.ts:140](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/conversations/Conversation.ts#L140)

___

### streamMessages

**streamMessages**(): `Promise`<[`Stream`](../classes/Stream.md)<[`DecodedMessage`](../classes/DecodedMessage.md)\>\>

Return a `Stream` of new messages in this conversation.

Stream instances are async generators and can be used in
`for await` statements.

```ts
for await (const message of await conversation.stream()) {
   console.log(message.content)
}
```

#### Returns

`Promise`<[`Stream`](../classes/Stream.md)<[`DecodedMessage`](../classes/DecodedMessage.md)\>\>

#### Defined in

[conversations/Conversation.ts:104](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/conversations/Conversation.ts#L104)
