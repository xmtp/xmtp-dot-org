---
title: Other types and variables
sidebar_position: 3
---

## Type Aliases

### ClientOptions

 **ClientOptions**: `NetworkOptions` & `KeyStoreOptions` & `ContentOptions` & `LegacyOptions`

Aggregate type for client options. Optional properties are used when the default value is calculated on invocation, and are computed
as needed by each function. All other defaults are specified in defaultOptions.

#### Defined in

[Client.ts:110](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/Client.ts#L110)

___

### Composite

 **Composite**: { `content`: `any` ; `type`: [`ContentTypeId`](classes/ContentTypeId.md)  } \| { `parts`: [`Composite`](modules.md#composite)[]  }

#### Defined in

[codecs/Composite.ts:24](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/codecs/Composite.ts#L24)

___

### Conversation

 **Conversation**: `ConversationV1` \| `ConversationV2`

#### Defined in

[conversations/Conversation.ts:352](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/conversations/Conversation.ts#L352)

___

### ListMessagesOptions

 **ListMessagesOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `checkAddresses?` | `boolean` |
| `direction?` | `messageApi.SortDirection` |
| `endTime?` | `Date` |
| `limit?` | `number` |
| `startTime?` | `Date` |

#### Defined in

[Client.ts:45](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/Client.ts#L45)

___

### Message

 **Message**: `MessageV1` \| `MessageV2`

#### Defined in

[Message.ts:245](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/Message.ts#L245)

___

### PrivateKeyBundle

 **PrivateKeyBundle**: `PrivateKeyBundleV1` \| `PrivateKeyBundleV2`

#### Defined in

[crypto/PrivateKeyBundle.ts:232](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/crypto/PrivateKeyBundle.ts#L232)

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

[Client.ts:67](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/Client.ts#L67)

## Variables

### Compression

 **Compression**: typeof `Compression`

#### Defined in

[Client.ts:29](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/Client.ts#L29)

___

### ContentTypeComposite

 `Const` **ContentTypeComposite**: [`ContentTypeId`](classes/ContentTypeId.md)

#### Defined in

[codecs/Composite.ts:15](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/codecs/Composite.ts#L15)

___

### ContentTypeFallback

 `Const` **ContentTypeFallback**: [`ContentTypeId`](classes/ContentTypeId.md)

#### Defined in

[MessageContent.ts:56](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/MessageContent.ts#L56)

___

### ContentTypeText

 `Const` **ContentTypeText**: [`ContentTypeId`](classes/ContentTypeId.md)

#### Defined in

[codecs/Text.ts:6](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/codecs/Text.ts#L6)

___

### SortDirection

 **SortDirection**: typeof `SortDirection`

#### Defined in

[ApiClient.ts:7](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/ApiClient.ts#L7)

## Functions

### dateToNs

**dateToNs**(`date`): `Long`

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Date` |

#### Returns

`Long`

#### Defined in

[utils.ts:110](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/utils.ts#L110)

___

### fromNanoString

**fromNanoString**(`s`): `undefined` \| `Date`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `undefined` \| `string` |

#### Returns

`undefined` \| `Date`

#### Defined in

[utils.ts:122](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/utils.ts#L122)

___

### nsToDate

**nsToDate**(`ns`): `Date`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ns` | `Long` |

#### Returns

`Date`

#### Defined in

[utils.ts:114](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/utils.ts#L114)

___

### toNanoString

**toNanoString**(`d`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `d` | `undefined` \| `Date` |

#### Returns

`undefined` \| `string`

#### Defined in

[utils.ts:118](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/utils.ts#L118)
