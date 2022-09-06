<!--[@xmtp/xmtp-js](../README.md) / [Exports](../modules.md) / ContentCodec-->

# Interface: ContentCodec<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Implemented by

- [`CompositeCodec`](../classes/CompositeCodec.md)
- [`TextCodec`](../classes/TextCodec.md)

<!--## Table of contents

### Properties

- [contentType](ContentCodec.md#contenttype)

### Methods

- [decode](ContentCodec.md#decode)
- [encode](ContentCodec.md#encode)-->

## Properties

### contentType

• **contentType**: [`ContentTypeId`](../classes/ContentTypeId.md)

#### Defined in

[MessageContent.ts:45](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/MessageContent.ts#L45)

## Methods

### decode

▸ **decode**(`content`, `registry`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | [`EncodedContent`](EncodedContent.md) |
| `registry` | `CodecRegistry` |

#### Returns

`T`

#### Defined in

[MessageContent.ts:47](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/MessageContent.ts#L47)

___

### encode

▸ **encode**(`content`, `registry`): [`EncodedContent`](EncodedContent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `T` |
| `registry` | `CodecRegistry` |

#### Returns

[`EncodedContent`](EncodedContent.md)

#### Defined in

[MessageContent.ts:46](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/MessageContent.ts#L46)
