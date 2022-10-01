<!--[@xmtp/xmtp-js](../README.md) / [Exports](../modules.md) / CompositeCodec-->

# Class: CompositeCodec

## Implements

- [`ContentCodec`](../interfaces/ContentCodec.md)<[`Composite`](../modules.md#composite)\>

<!--## Table of contents

### Constructors

- [constructor](CompositeCodec.md#constructor)

### Accessors

- [contentType](CompositeCodec.md#contenttype)

### Methods

- [decode](CompositeCodec.md#decode)
- [encode](CompositeCodec.md#encode)-->

## Constructors

### constructor

• **new CompositeCodec**()

## Accessors

### contentType

• `get` **contentType**(): [`ContentTypeId`](ContentTypeId.md)

#### Returns

[`ContentTypeId`](ContentTypeId.md)

#### Implementation of

[ContentCodec](../interfaces/ContentCodec.md).[contentType](../interfaces/ContentCodec.md#contenttype)

#### Defined in

[codecs/Composite.ts:35](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/codecs/Composite.ts#L35)

## Methods

### decode

▸ **decode**(`content`, `codecs`): [`Composite`](../modules.md#composite)

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | [`EncodedContent`](../interfaces/EncodedContent.md) |
| `codecs` | `CodecRegistry` |

#### Returns

[`Composite`](../modules.md#composite)

#### Implementation of

[ContentCodec](../interfaces/ContentCodec.md).[decode](../interfaces/ContentCodec.md#decode)

#### Defined in

[codecs/Composite.ts:55](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/codecs/Composite.ts#L55)

___

### encode

▸ **encode**(`content`, `codecs`): [`EncodedContent`](../interfaces/EncodedContent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | [`Composite`](../modules.md#composite) |
| `codecs` | `CodecRegistry` |

#### Returns

[`EncodedContent`](../interfaces/EncodedContent.md)

#### Implementation of

[ContentCodec](../interfaces/ContentCodec.md).[encode](../interfaces/ContentCodec.md#encode)

#### Defined in

[codecs/Composite.ts:39](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/codecs/Composite.ts#L39)
