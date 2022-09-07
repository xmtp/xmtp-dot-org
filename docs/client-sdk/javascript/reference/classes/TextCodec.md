<!--[@xmtp/xmtp-js](../README.md) / [Exports](../modules.md) / TextCodec-->

# Class: TextCodec

## Implements

- [`ContentCodec`](../interfaces/ContentCodec.md)<`string`\>

<!--## Table of contents

### Constructors

- [constructor](TextCodec.md#constructor)

### Accessors

- [contentType](TextCodec.md#contenttype)

### Methods

- [decode](TextCodec.md#decode)
- [encode](TextCodec.md#encode)-->

## Constructors

### constructor

• **new TextCodec**()

## Accessors

### contentType

• `get` **contentType**(): [`ContentTypeId`](ContentTypeId.md)

#### Returns

[`ContentTypeId`](ContentTypeId.md)

#### Implementation of

[ContentCodec](../interfaces/ContentCodec.md).[contentType](../interfaces/ContentCodec.md#contenttype)

#### Defined in

[codecs/Text.ts:18](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/codecs/Text.ts#L18)

## Methods

### decode

▸ **decode**(`content`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | [`EncodedContent`](../interfaces/EncodedContent.md) |

#### Returns

`string`

#### Implementation of

[ContentCodec](../interfaces/ContentCodec.md).[decode](../interfaces/ContentCodec.md#decode)

#### Defined in

[codecs/Text.ts:30](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/codecs/Text.ts#L30)

___

### encode

▸ **encode**(`content`): [`EncodedContent`](../interfaces/EncodedContent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` |

#### Returns

[`EncodedContent`](../interfaces/EncodedContent.md)

#### Implementation of

[ContentCodec](../interfaces/ContentCodec.md).[encode](../interfaces/ContentCodec.md#encode)

#### Defined in

[codecs/Text.ts:22](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/codecs/Text.ts#L22)
