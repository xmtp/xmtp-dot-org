<!---->
# Interface: Conversation

Conversation represents either a V1 or V2 conversation with a common set of methods.

## Properties

### clientAddress

 **clientAddress**: `string`

The wallet address connected to the client

#### Defined in

[conversations/Conversation.ts:45](https://github.com/xmtp/xmtp-js/blob/36ff630/src/conversations/Conversation.ts#L45)

___

### context

 `Optional` **context**: `InvitationContext`

Optional field containing the `conversationId` and `metadata` for V2 conversations.
Will always be undefined on V1 conversations

#### Defined in

[conversations/Conversation.ts:66](https://github.com/xmtp/xmtp-js/blob/36ff630/src/conversations/Conversation.ts#L66)

___

### createdAt

 **createdAt**: `Date`

Timestamp the conversation was created at

#### Defined in

[conversations/Conversation.ts:61](https://github.com/xmtp/xmtp-js/blob/36ff630/src/conversations/Conversation.ts#L61)

___

### ephemeralTopic

 **ephemeralTopic**: `string`

A unique identifier for ephemeral envelopes for a conversation.

#### Defined in

[conversations/Conversation.ts:53](https://github.com/xmtp/xmtp-js/blob/36ff630/src/conversations/Conversation.ts#L53)

___

### peerAddress

 **peerAddress**: `string`

The wallet address of the other party in the conversation

#### Defined in

[conversations/Conversation.ts:57](https://github.com/xmtp/xmtp-js/blob/36ff630/src/conversations/Conversation.ts#L57)

___

### topic

 **topic**: `string`

A unique identifier for a conversation. Each conversation is stored on the network on one topic

#### Defined in

[conversations/Conversation.ts:49](https://github.com/xmtp/xmtp-js/blob/36ff630/src/conversations/Conversation.ts#L49)

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

[conversations/Conversation.ts:92](https://github.com/xmtp/xmtp-js/blob/36ff630/src/conversations/Conversation.ts#L92)

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

[conversations/Conversation.ts:81](https://github.com/xmtp/xmtp-js/blob/36ff630/src/conversations/Conversation.ts#L81)

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

[conversations/Conversation.ts:85](https://github.com/xmtp/xmtp-js/blob/36ff630/src/conversations/Conversation.ts#L85)

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

[conversations/Conversation.ts:123](https://github.com/xmtp/xmtp-js/blob/36ff630/src/conversations/Conversation.ts#L123)

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

[conversations/Conversation.ts:114](https://github.com/xmtp/xmtp-js/blob/36ff630/src/conversations/Conversation.ts#L114)

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

[conversations/Conversation.ts:141](https://github.com/xmtp/xmtp-js/blob/36ff630/src/conversations/Conversation.ts#L141)

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

[conversations/Conversation.ts:105](https://github.com/xmtp/xmtp-js/blob/36ff630/src/conversations/Conversation.ts#L105)
