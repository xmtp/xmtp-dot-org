---
title: Other types and variables
sidebar_position: 3
---
<!--added these 3 lines above-->

## Type Aliases

### ClientOptions

 **ClientOptions**: `NetworkOptions` & `KeyStoreOptions` & `ContentOptions`

Aggregate type for client options. Optional properties are used when the default value is calculated on invocation, and are computed
as needed by each function. All other defaults are specified in defaultOptions.

#### Defined in

[Client.ts:97](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/Client.ts#L97)

___

### Composite

 **Composite**: { `content`: `any` ; `type`: [`ContentTypeId`](classes/ContentTypeId.md)  } \| { `parts`: [`Composite`](modules.md#composite)[]  }

#### Defined in

[codecs/Composite.ts:24](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/codecs/Composite.ts#L24)

___

### ListMessagesOptions

 **ListMessagesOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `checkAddresses?` | `boolean` |
| `endTime?` | `Date` |
| `limit?` | `number` |
| `startTime?` | `Date` |

#### Defined in

[Client.ts:46](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/Client.ts#L46)

___

### SendOptions

 **SendOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `compression?` | `xmtpEnvelope.Compression` |
| `contentFallback?` | `string` |
| `contentType?` | [`ContentTypeId`](classes/ContentTypeId.md) |
| `timestamp?` | `Date` |

#### Defined in

[Client.ts:61](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/Client.ts#L61)

## Variables

### Compression

 **Compression**: typeof `Compression`

#### Defined in

[Client.ts:30](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/Client.ts#L30)

___

### ContentTypeComposite

 `Const` **ContentTypeComposite**: [`ContentTypeId`](classes/ContentTypeId.md)

#### Defined in

[codecs/Composite.ts:15](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/codecs/Composite.ts#L15)

___

### ContentTypeFallback

 `Const` **ContentTypeFallback**: [`ContentTypeId`](classes/ContentTypeId.md)

#### Defined in

[MessageContent.ts:56](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/MessageContent.ts#L56)

___

### ContentTypeText

 `Const` **ContentTypeText**: [`ContentTypeId`](classes/ContentTypeId.md)

#### Defined in

[codecs/Text.ts:6](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/codecs/Text.ts#L6)
