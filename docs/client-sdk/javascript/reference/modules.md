---
title: Types
sidebar_position: 3
---
<!--added these 3 lines above-->
<!--commented this out [@xmtp/xmtp-js](README.md) / Exports

# @xmtp/xmtp-js

## Table of contents

### Classes

- [Client](classes/Client.md)
- [CompositeCodec](classes/CompositeCodec.md)
- [ContentTypeId](classes/ContentTypeId.md)
- [Conversation](classes/Conversation.md)
- [Conversations](classes/Conversations.md)
- [Message](classes/Message.md)
- [PrivateKey](classes/PrivateKey.md)
- [PrivateKeyBundle](classes/PrivateKeyBundle.md)
- [PublicKey](classes/PublicKey.md)
- [PublicKeyBundle](classes/PublicKeyBundle.md)
- [Stream](classes/Stream.md)
- [TextCodec](classes/TextCodec.md)

### Interfaces

- [ContentCodec](interfaces/ContentCodec.md)
- [EncodedContent](interfaces/EncodedContent.md)

### Type Aliases

- [ClientOptions](modules.md#clientoptions)
- [Composite](modules.md#composite)
- [ListMessagesOptions](modules.md#listmessagesoptions)
- [SendOptions](modules.md#sendoptions)

### Variables

- [Compression](modules.md#compression)
- [ContentTypeComposite](modules.md#contenttypecomposite)
- [ContentTypeFallback](modules.md#contenttypefallback)
- [ContentTypeText](modules.md#contenttypetext)-->

## Type Aliases

### ClientOptions

Ƭ **ClientOptions**: `NetworkOptions` & `KeyStoreOptions` & `ContentOptions`

Aggregate type for client options. Optional properties are used when the default value is calculated on invocation, and are computed
as needed by each function. All other defaults are specified in defaultOptions.

#### Defined in

[Client.ts:97](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/Client.ts#L97)

___

### Composite

Ƭ **Composite**: { `content`: `any` ; `type`: [`ContentTypeId`](classes/ContentTypeId.md)  } \| { `parts`: [`Composite`](modules.md#composite)[]  }

#### Defined in

[codecs/Composite.ts:24](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/codecs/Composite.ts#L24)

___

### ListMessagesOptions

Ƭ **ListMessagesOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `checkAddresses?` | `boolean` |
| `endTime?` | `Date` |
| `limit?` | `number` |
| `startTime?` | `Date` |

#### Defined in

[Client.ts:46](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/Client.ts#L46)

___

### SendOptions

Ƭ **SendOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `compression?` | `xmtpEnvelope.Compression` |
| `contentFallback?` | `string` |
| `contentType?` | [`ContentTypeId`](classes/ContentTypeId.md) |
| `timestamp?` | `Date` |

#### Defined in

[Client.ts:61](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/Client.ts#L61)

## Variables

### Compression

• **Compression**: typeof `Compression`

#### Defined in

[Client.ts:30](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/Client.ts#L30)

___

### ContentTypeComposite

• `Const` **ContentTypeComposite**: [`ContentTypeId`](classes/ContentTypeId.md)

#### Defined in

[codecs/Composite.ts:15](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/codecs/Composite.ts#L15)

___

### ContentTypeFallback

• `Const` **ContentTypeFallback**: [`ContentTypeId`](classes/ContentTypeId.md)

#### Defined in

[MessageContent.ts:56](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/MessageContent.ts#L56)

___

### ContentTypeText

• `Const` **ContentTypeText**: [`ContentTypeId`](classes/ContentTypeId.md)

#### Defined in

[codecs/Text.ts:6](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/codecs/Text.ts#L6)
