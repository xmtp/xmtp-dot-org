<!--[@xmtp/xmtp-js](../README.md) / [Exports](../modules.md) / Message-->

# Class: Message

## Implements

- `V1Message`

<!--## Table of contents

### Constructors

- [constructor](Message.md#constructor)

### Properties

- [ciphertext](Message.md#ciphertext)
- [content](Message.md#content)
- [contentTopic](Message.md#contenttopic)
- [contentType](Message.md#contenttype)
- [decrypted](Message.md#decrypted)
- [error](Message.md#error)
- [header](Message.md#header)
- [headerBytes](Message.md#headerbytes)
- [id](Message.md#id)

### Accessors

- [recipientAddress](Message.md#recipientaddress)
- [senderAddress](Message.md#senderaddress)
- [sent](Message.md#sent)

### Methods

- [toBytes](Message.md#tobytes)
- [create](Message.md#create)
- [decode](Message.md#decode)
- [encode](Message.md#encode)
- [fromBytes](Message.md#frombytes)-->

## Constructors

### constructor

• **new Message**(`id`, `bytes`, `obj`, `header`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `bytes` | `Uint8Array` |
| `obj` | `Message` |
| `header` | `MessageHeader` |

#### Defined in

[Message.ts:45](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/Message.ts#L45)

## Properties

### ciphertext

• **ciphertext**: `default`

#### Implementation of

proto.V1Message.ciphertext

#### Defined in

[Message.ts:29](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/Message.ts#L29)

___

### content

• `Optional` **content**: `any`

#### Defined in

[Message.ts:34](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/Message.ts#L34)

___

### contentTopic

• `Optional` **contentTopic**: `string`

#### Defined in

[Message.ts:35](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/Message.ts#L35)

___

### contentType

• `Optional` **contentType**: [`ContentTypeId`](ContentTypeId.md)

#### Defined in

[Message.ts:33](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/Message.ts#L33)

___

### decrypted

• `Optional` **decrypted**: `Uint8Array`

#### Defined in

[Message.ts:30](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/Message.ts#L30)

___

### error

• `Optional` **error**: `Error`

#### Defined in

[Message.ts:36](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/Message.ts#L36)

___

### header

• **header**: `MessageHeader`

#### Defined in

[Message.ts:27](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/Message.ts#L27)

___

### headerBytes

• **headerBytes**: `Uint8Array`

#### Implementation of

proto.V1Message.headerBytes

#### Defined in

[Message.ts:28](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/Message.ts#L28)

___

### id

• **id**: `string`

Identifier that is deterministically derived from the bytes of the message
header and ciphertext, where all those bytes are authenticated. This can
be used in determining uniqueness of messages.

#### Defined in

[Message.ts:42](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/Message.ts#L42)

## Accessors

### recipientAddress

• `get` **recipientAddress**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[Message.ts:97](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/Message.ts#L97)

___

### senderAddress

• `get` **senderAddress**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[Message.ts:87](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/Message.ts#L87)

___

### sent

• `get` **sent**(): `undefined` \| `Date`

#### Returns

`undefined` \| `Date`

#### Defined in

[Message.ts:82](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/Message.ts#L82)

## Methods

### toBytes

▸ **toBytes**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[Message.ts:62](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/Message.ts#L62)

___

### create

▸ `Static` **create**(`obj`, `header`, `bytes`): `Promise`<[`Message`](Message.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Message` |
| `header` | `MessageHeader` |
| `bytes` | `Uint8Array` |

#### Returns

`Promise`<[`Message`](Message.md)\>

#### Defined in

[Message.ts:66](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/Message.ts#L66)

___

### decode

▸ `Static` **decode**(`viewer`, `bytes`): `Promise`<[`Message`](Message.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `viewer` | [`PrivateKeyBundle`](PrivateKeyBundle.md) |
| `bytes` | `Uint8Array` |

#### Returns

`Promise`<[`Message`](Message.md)\>

#### Defined in

[Message.ts:136](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/Message.ts#L136)

___

### encode

▸ `Static` **encode**(`sender`, `recipient`, `message`, `timestamp`): `Promise`<[`Message`](Message.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sender` | [`PrivateKeyBundle`](PrivateKeyBundle.md) |
| `recipient` | [`PublicKeyBundle`](PublicKeyBundle.md) |
| `message` | `Uint8Array` |
| `timestamp` | `Date` |

#### Returns

`Promise`<[`Message`](Message.md)\>

#### Defined in

[Message.ts:107](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/Message.ts#L107)

___

### fromBytes

▸ `Static` **fromBytes**(`bytes`): `Promise`<[`Message`](Message.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |

#### Returns

`Promise`<[`Message`](Message.md)\>

#### Defined in

[Message.ts:75](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/Message.ts#L75)
