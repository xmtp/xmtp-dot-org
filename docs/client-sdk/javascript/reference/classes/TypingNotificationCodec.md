<!---->
# Class: TypingNotificationCodec

## Implements

- [`ContentCodec`](../interfaces/ContentCodec.md)<[`TypingNotification`](../modules.md#typingnotification)\>

## Constructors

### constructor

**new TypingNotificationCodec**()

## Accessors

### contentType

`get` **contentType**(): [`ContentTypeId`](ContentTypeId.md)

#### Returns

[`ContentTypeId`](ContentTypeId.md)

#### Implementation of

[ContentCodec](../interfaces/ContentCodec.md).[contentType](../interfaces/ContentCodec.md#contenttype)

#### Defined in

[codecs/TypingNotification.ts:23](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/codecs/TypingNotification.ts#L23)

## Methods

### decode

**decode**(`content`): [`TypingNotification`](../modules.md#typingnotification)

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | [`EncodedContent`](../interfaces/EncodedContent.md) |

#### Returns

[`TypingNotification`](../modules.md#typingnotification)

#### Implementation of

[ContentCodec](../interfaces/ContentCodec.md).[decode](../interfaces/ContentCodec.md#decode)

#### Defined in

[codecs/TypingNotification.ts:39](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/codecs/TypingNotification.ts#L39)

___

### encode

**encode**(`content`): [`EncodedContent`](../interfaces/EncodedContent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | [`TypingNotification`](../modules.md#typingnotification) |

#### Returns

[`EncodedContent`](../interfaces/EncodedContent.md)

#### Implementation of

[ContentCodec](../interfaces/ContentCodec.md).[encode](../interfaces/ContentCodec.md#encode)

#### Defined in

[codecs/TypingNotification.ts:27](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/codecs/TypingNotification.ts#L27)
