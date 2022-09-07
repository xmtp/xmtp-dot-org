<!--[@xmtp/xmtp-js](../README.md) / [Exports](../modules.md) / Conversation-->

# Class: Conversation

Conversation class allows you to view, stream, and send messages to/from a peer address

<!--## Table of contents

### Constructors

- [constructor](Conversation.md#constructor)

### Properties

- [peerAddress](Conversation.md#peeraddress)

### Methods

- [messages](Conversation.md#messages)
- [send](Conversation.md#send)
- [streamMessages](Conversation.md#streammessages)-->

## Constructors

### constructor

• **new Conversation**(`client`, `address`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |
| `address` | `string` |

#### Defined in

[conversations/Conversation.ts:14](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/conversations/Conversation.ts#L14)

## Properties

### peerAddress

• **peerAddress**: `string`

#### Defined in

[conversations/Conversation.ts:11](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/conversations/Conversation.ts#L11)

## Methods

### messages

▸ **messages**(`opts?`): `Promise`<[`Message`](Message.md)[]\>

Returns a list of all messages to/from the peerAddress

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ListMessagesOptions`](../modules.md#listmessagesoptions) |

#### Returns

`Promise`<[`Message`](Message.md)[]\>

#### Defined in

[conversations/Conversation.ts:22](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/conversations/Conversation.ts#L22)

___

### send

▸ **send**(`message`, `options?`): `Promise`<[`Message`](Message.md)\>

Send a message into the conversation

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `any` |
| `options?` | [`SendOptions`](../modules.md#sendoptions) |

#### Returns

`Promise`<[`Message`](Message.md)\>

#### Defined in

[conversations/Conversation.ts:36](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/conversations/Conversation.ts#L36)

___

### streamMessages

▸ **streamMessages**(): `Promise`<[`Stream`](Stream.md)<[`Message`](Message.md)\>\>

Returns a Stream of any new messages to/from the peerAddress

#### Returns

`Promise`<[`Stream`](Stream.md)<[`Message`](Message.md)\>\>

#### Defined in

[conversations/Conversation.ts:29](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/conversations/Conversation.ts#L29)
