<!---->
# Class: MessageV2

## Hierarchy

- `MessageBase`

  ↳ **`MessageV2`**

## Implements

- `MessageV2`

## Constructors

### constructor

**new MessageV2**(`id`, `bytes`, `obj`, `header`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `bytes` | `Uint8Array` |
| `obj` | `Message` |
| `header` | `MessageHeaderV2` |

#### Overrides

MessageBase.constructor

#### Defined in

[Message.ts:204](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/Message.ts#L204)

## Properties

### ciphertext

 **ciphertext**: [`Ciphertext`](Ciphertext.md)

#### Implementation of

proto.MessageV2.ciphertext

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

### error

 `Optional` **error**: `Error`

#### Inherited from

MessageBase.error

#### Defined in

[Message.ts:47](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/Message.ts#L47)

___

### header

 `Private` **header**: `MessageHeaderV2`

#### Defined in

[Message.ts:202](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/Message.ts#L202)

___

### headerBytes

 **headerBytes**: `Uint8Array`

#### Implementation of

proto.MessageV2.headerBytes

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

[Message.ts:201](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/Message.ts#L201)

## Accessors

### sent

`get` **sent**(): `Date`

#### Returns

`Date`

#### Defined in

[Message.ts:224](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/Message.ts#L224)

## Methods

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

`Static` **create**(`obj`, `header`, `bytes`): `Promise`<[`MessageV2`](MessageV2.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Message` |
| `header` | `MessageHeaderV2` |
| `bytes` | `Uint8Array` |

#### Returns

`Promise`<[`MessageV2`](MessageV2.md)\>

#### Defined in

[Message.ts:214](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/Message.ts#L214)
