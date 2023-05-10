<!---->
# Class: CompositeCodec

## Implements

- [`ContentCodec`](../interfaces/ContentCodec.md)<[`Composite`](../modules.md#composite)\>

## Constructors

### constructor

**new CompositeCodec**()

## Accessors

### contentType

`get` **contentType**(): [`ContentTypeId`](ContentTypeId.md)

#### Returns

[`ContentTypeId`](ContentTypeId.md)

#### Implementation of

[ContentCodec](../interfaces/ContentCodec.md).[contentType](../interfaces/ContentCodec.md#contenttype)

#### Defined in

[codecs/Composite.ts:35](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/codecs/Composite.ts#L35)

## Methods

### decode

**decode**(`content`, `codecs`): [`Composite`](../modules.md#composite)

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | [`EncodedContent`](../interfaces/EncodedContent.md) |
| `codecs` | [`CodecRegistry`](../interfaces/CodecRegistry.md) |

#### Returns

[`Composite`](../modules.md#composite)

#### Implementation of

[ContentCodec](../interfaces/ContentCodec.md).[decode](../interfaces/ContentCodec.md#decode)

#### Defined in

[codecs/Composite.ts:55](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/codecs/Composite.ts#L55)

___

### encode

**encode**(`content`, `codecs`): [`EncodedContent`](../interfaces/EncodedContent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | [`Composite`](../modules.md#composite) |
| `codecs` | [`CodecRegistry`](../interfaces/CodecRegistry.md) |

#### Returns

[`EncodedContent`](../interfaces/EncodedContent.md)

#### Implementation of

[ContentCodec](../interfaces/ContentCodec.md).[encode](../interfaces/ContentCodec.md#encode)

#### Defined in

[codecs/Composite.ts:39](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/codecs/Composite.ts#L39)

___

### fromProto

`Private` **fromProto**(`content`, `codecs`): [`Composite`](../modules.md#composite)

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `Composite_Part` |
| `codecs` | [`CodecRegistry`](../interfaces/CodecRegistry.md) |

#### Returns

[`Composite`](../modules.md#composite)

#### Defined in

[codecs/Composite.ts:83](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/codecs/Composite.ts#L83)

___

### toProto

`Private` **toProto**(`content`, `codecs`): `Composite_Part`

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | [`Composite`](../modules.md#composite) |
| `codecs` | [`CodecRegistry`](../interfaces/CodecRegistry.md) |

#### Returns

`Composite_Part`

#### Defined in

[codecs/Composite.ts:62](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/codecs/Composite.ts#L62)
