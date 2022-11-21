<!---->
# Class: Message

## Implements

- `MessageV1`

## Constructors

### constructor

**new Message**(`id`, `bytes`, `obj`, `header`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `bytes` | `Uint8Array` |
| `obj` | `Message` |
| `header` | `MessageHeaderV1` |

#### Defined in

[Message.ts:45](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/Message.ts#L45)

## Properties

### bytes

 `Private` **bytes**: `Uint8Array`

#### Defined in

[Message.ts:43](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/Message.ts#L43)

___

### ciphertext

 **ciphertext**: `default`

#### Implementation of

proto.MessageV1.ciphertext

#### Defined in

[Message.ts:29](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/Message.ts#L29)

___

### content

 `Optional` **content**: `any`

#### Defined in

[Message.ts:34](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/Message.ts#L34)

___

### contentTopic

 `Optional` **contentTopic**: `string`

#### Defined in

[Message.ts:35](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/Message.ts#L35)

___

### contentType

 `Optional` **contentType**: [`ContentTypeId`](ContentTypeId.md)

#### Defined in

[Message.ts:33](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/Message.ts#L33)

___

### decrypted

 `Optional` **decrypted**: `Uint8Array`

#### Defined in

[Message.ts:30](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/Message.ts#L30)

___

### error

 `Optional` **error**: `Error`

#### Defined in

[Message.ts:36](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/Message.ts#L36)

___

### header

 **header**: `MessageHeaderV1`

#### Defined in

[Message.ts:27](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/Message.ts#L27)

___

### headerBytes

 **headerBytes**: `Uint8Array`

#### Implementation of

proto.MessageV1.headerBytes

#### Defined in

[Message.ts:28](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/Message.ts#L28)

___

### id

 **id**: `string`

Identifier that is deterministically derived from the bytes of the message
header and ciphertext, where all those bytes are authenticated. This can
be used in determining uniqueness of messages.

#### Defined in

[Message.ts:42](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/Message.ts#L42)

## Accessors

### recipientAddress

`get` **recipientAddress**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[Message.ts:97](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/Message.ts#L97)

___

### senderAddress

`get` **senderAddress**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[Message.ts:87](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/Message.ts#L87)

___

### sent

`get` **sent**(): `undefined` \| `Date`

#### Returns

`undefined` \| `Date`

#### Defined in

[Message.ts:82](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/Message.ts#L82)

## Methods

### toBytes

**toBytes**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[Message.ts:62](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/Message.ts#L62)

___

### create

`Static` **create**(`obj`, `header`, `bytes`): `Promise`<[`Message`](Message.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Message` |
| `header` | `MessageHeaderV1` |
| `bytes` | `Uint8Array` |

#### Returns

`Promise`<[`Message`](Message.md)\>

#### Defined in

[Message.ts:66](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/Message.ts#L66)

___

### decode

`Static` **decode**(`viewer`, `bytes`): `Promise`<[`Message`](Message.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `viewer` | [`PrivateKeyBundleV1`](PrivateKeyBundleV1.md) |
| `bytes` | `Uint8Array` |

#### Returns

`Promise`<[`Message`](Message.md)\>

#### Defined in

[Message.ts:139](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/Message.ts#L139)

___

### encode

`Static` **encode**(`sender`, `recipient`, `message`, `timestamp`): `Promise`<[`Message`](Message.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sender` | [`PrivateKeyBundleV1`](PrivateKeyBundleV1.md) |
| `recipient` | [`PublicKeyBundle`](PublicKeyBundle.md) |
| `message` | `Uint8Array` |
| `timestamp` | `Date` |

#### Returns

`Promise`<[`Message`](Message.md)\>

#### Defined in

[Message.ts:107](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/Message.ts#L107)

___

### fromBytes

`Static` **fromBytes**(`bytes`): `Promise`<[`Message`](Message.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |

#### Returns

`Promise`<[`Message`](Message.md)\>

#### Defined in

[Message.ts:75](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/Message.ts#L75)
