<!---->
# Class: MessageV1

## Hierarchy

- `MessageBase`

  ↳ **`MessageV1`**

## Implements

- `MessageV1`

## Constructors

### constructor

**new MessageV1**(`id`, `bytes`, `obj`, `header`, `senderAddress`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `bytes` | `Uint8Array` |
| `obj` | `Message` |
| `header` | `MessageHeaderV1` |
| `senderAddress` | `undefined` \| `string` |

#### Overrides

MessageBase.constructor

#### Defined in

[Message.ts:75](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/Message.ts#L75)

## Properties

### ciphertext

 **ciphertext**: [`Ciphertext`](Ciphertext.md)

#### Implementation of

proto.MessageV1.ciphertext

#### Inherited from

MessageBase.ciphertext

#### Defined in

[Message.ts:43](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/Message.ts#L43)

___

### contentType

 `Optional` **contentType**: [`ContentTypeId`](ContentTypeId.md)

#### Inherited from

MessageBase.contentType

#### Defined in

[Message.ts:46](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/Message.ts#L46)

___

### conversation

 **conversation**: `undefined` = `undefined`

#### Defined in

[Message.ts:73](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/Message.ts#L73)

___

### error

 `Optional` **error**: `Error`

#### Inherited from

MessageBase.error

#### Defined in

[Message.ts:47](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/Message.ts#L47)

___

### header

 **header**: `MessageHeaderV1`

#### Defined in

[Message.ts:70](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/Message.ts#L70)

___

### headerBytes

 **headerBytes**: `Uint8Array`

#### Implementation of

proto.MessageV1.headerBytes

#### Inherited from

MessageBase.headerBytes

#### Defined in

[Message.ts:42](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/Message.ts#L42)

___

### id

 **id**: `string`

Identifier that is deterministically derived from the bytes of the message
header and ciphertext, where all those bytes are authenticated. This can
be used in determining uniqueness of messages.

#### Inherited from

MessageBase.id

#### Defined in

[Message.ts:53](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/Message.ts#L53)

___

### senderAddress

 **senderAddress**: `undefined` \| `string`

#### Defined in

[Message.ts:72](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/Message.ts#L72)

## Accessors

### recipientAddress

`get` **recipientAddress**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[Message.ts:107](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/Message.ts#L107)

___

### sent

`get` **sent**(): `Date`

#### Returns

`Date`

#### Defined in

[Message.ts:102](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/Message.ts#L102)

## Methods

### decrypt

**decrypt**(`keystore`, `myPublicKeyBundle`): `Promise`<`Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `keystore` | [`Keystore`](../interfaces/Keystore.md) |
| `myPublicKeyBundle` | [`PublicKeyBundle`](PublicKeyBundle.md) |

#### Returns

`Promise`<`Uint8Array`\>

#### Defined in

[Message.ts:116](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/Message.ts#L116)

___

### toBytes

**toBytes**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Inherited from

MessageBase.toBytes

#### Defined in

[Message.ts:62](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/Message.ts#L62)

___

### create

`Static` **create**(`obj`, `header`, `bytes`): `Promise`<[`MessageV1`](MessageV1.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Message` |
| `header` | `MessageHeaderV1` |
| `bytes` | `Uint8Array` |

#### Returns

`Promise`<[`MessageV1`](MessageV1.md)\>

#### Defined in

[Message.ts:87](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/Message.ts#L87)

___

### encode

`Static` **encode**(`keystore`, `payload`, `sender`, `recipient`, `timestamp`): `Promise`<[`MessageV1`](MessageV1.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `keystore` | [`Keystore`](../interfaces/Keystore.md) |
| `payload` | `Uint8Array` |
| `sender` | [`PublicKeyBundle`](PublicKeyBundle.md) |
| `recipient` | [`PublicKeyBundle`](PublicKeyBundle.md) |
| `timestamp` | `Date` |

#### Returns

`Promise`<[`MessageV1`](MessageV1.md)\>

#### Defined in

[Message.ts:162](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/Message.ts#L162)

___

### fromBytes

`Static` **fromBytes**(`bytes`): `Promise`<[`MessageV1`](MessageV1.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |

#### Returns

`Promise`<[`MessageV1`](MessageV1.md)\>

#### Defined in

[Message.ts:133](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/Message.ts#L133)
