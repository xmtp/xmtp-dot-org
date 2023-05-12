---
title: Other types and variables
sidebar_position: 3
---

## Type Aliases

### ClientOptions

 **ClientOptions**: `Flatten`<[`NetworkOptions`](modules.md#networkoptions) & [`KeyStoreOptions`](modules.md#keystoreoptions) & [`ContentOptions`](modules.md#contentoptions) & [`LegacyOptions`](modules.md#legacyoptions) & `PreEventCallbackOptions`\>

Aggregate type for client options. Optional properties are used when the default value is calculated on invocation, and are computed
as needed by each function. All other defaults are specified in defaultOptions.

#### Defined in

[Client.ts:168](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/Client.ts#L168)

___

### Composite

 **Composite**: { `content`: `any` ; `type`: [`ContentTypeId`](classes/ContentTypeId.md)  } \| { `parts`: [`Composite`](modules.md#composite)[]  }

#### Defined in

[codecs/Composite.ts:24](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/codecs/Composite.ts#L24)

___

### ContentOptions

 **ContentOptions**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `codecs` | [`ContentCodec`](interfaces/ContentCodec.md)<`any`\>[] | Allow configuring codecs for additional content types |
| `maxContentSize` | `number` | Set the maximum content size in bytes that is allowed by the Client. Currently only checked when decompressing compressed content. |

#### Defined in

[Client.ts:109](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/Client.ts#L109)

___

### InvitationContext

 **InvitationContext**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `conversationId` | `string` |
| `metadata` | { `[k: string]`: `string`;  } |

#### Defined in

[Invitation.ts:11](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/Invitation.ts#L11)

___

### KeyStoreOptions

 **KeyStoreOptions**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `keystoreProviders` | [`KeystoreProvider`](interfaces/KeystoreProvider.md)[] | Provide an array of KeystoreProviders. The client will attempt to use each one in sequence until one successfully returns a Keystore instance |
| `persistConversations` | `boolean` | Enable the Keystore to persist conversations in the provided storage interface |
| `privateKeyOverride?` | `Uint8Array` | Provide a XMTP PrivateKeyBundle encoded as a Uint8Array. A bundle can be retried using `Client.getKeys(...)` |

#### Defined in

[Client.ts:123](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/Client.ts#L123)

___

### LegacyOptions

 **LegacyOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `publishLegacyContact?` | `boolean` |

#### Defined in

[Client.ts:141](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/Client.ts#L141)

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

[Client.ts:40](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/Client.ts#L40)

___

### Message

 **Message**: [`MessageV1`](classes/MessageV1.md) \| [`MessageV2`](classes/MessageV2.md)

#### Defined in

[Message.ts:229](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/Message.ts#L229)

___

### NetworkOptions

 **NetworkOptions**: `Object`

Network startup options

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `apiUrl` | `string` \| `undefined` | apiUrl can be used to override the `env` flag and connect to a specific endpoint |
| `appVersion?` | `string` | identifier that's included with API requests. For example, you can use the following format: `appVersion: APP_NAME + '/' + APP_VERSION`. Setting this value provides telemetry that shows which apps are using the XMTP client SDK. This information can help XMTP developers provide app support, especially around communicating important SDK updates, including deprecations and required upgrades. |
| `env` | `XmtpEnv` | Specify which XMTP environment to connect to. (default: `dev`) |
| `skipContactPublishing` | `boolean` | Skip publishing the user's contact bundle as part of Client startup. This flag should be used with caution, as we rely on contact publishing to let other users know your public key and periodically run migrations on this data with new SDK versions. Your application should have this flag set to `false` at least _some_ of the time. The most common use-case for setting this to `true` is cases where the Client instance is very short-lived. For example, spinning up a Client to decrypt a push notification. |

#### Defined in

[Client.ts:71](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/Client.ts#L71)

___

### PrivateKeyBundle

 **PrivateKeyBundle**: `PrivateKeyBundleV1` \| `PrivateKeyBundleV2`

#### Defined in

[crypto/PrivateKeyBundle.ts:248](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/crypto/PrivateKeyBundle.ts#L248)

___

### SendOptions

 **SendOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `compression?` | `proto.Compression` |
| `contentFallback?` | `string` |
| `contentType?` | [`ContentTypeId`](classes/ContentTypeId.md) |
| `ephemeral?` | `boolean` |
| `timestamp?` | `Date` |

#### Defined in

[Client.ts:57](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/Client.ts#L57)

___

### TopicData

 **TopicData**: `WithoutUndefined`<`keystore.TopicMap_TopicData`\>

#### Defined in

[keystore/interfaces.ts:71](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/keystore/interfaces.ts#L71)

___

### TypingNotification

 **TypingNotification**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `isFinished` | `boolean` |
| `timestamp` | `Date` |
| `typerAddress` | `string` |

#### Defined in

[codecs/TypingNotification.ts:13](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/codecs/TypingNotification.ts#L13)

## Variables

### ApiUrls

 `Const` **ApiUrls**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `dev` | ``"https://dev.xmtp.network"`` |
| `local` | ``"http://localhost:5555"`` |
| `production` | ``"https://production.xmtp.network"`` |

#### Defined in

[ApiClient.ts:17](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/ApiClient.ts#L17)

___

### Compression

 **Compression**: typeof `Compression`

#### Defined in

[Client.ts:30](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/Client.ts#L30)

___

### ContentTypeComposite

 `Const` **ContentTypeComposite**: [`ContentTypeId`](classes/ContentTypeId.md)

#### Defined in

[codecs/Composite.ts:15](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/codecs/Composite.ts#L15)

___

### ContentTypeFallback

 `Const` **ContentTypeFallback**: [`ContentTypeId`](classes/ContentTypeId.md)

#### Defined in

[MessageContent.ts:56](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/MessageContent.ts#L56)

___

### ContentTypeText

 `Const` **ContentTypeText**: [`ContentTypeId`](classes/ContentTypeId.md)

#### Defined in

[codecs/Text.ts:6](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/codecs/Text.ts#L6)

___

### ContentTypeTypingNotification

 `Const` **ContentTypeTypingNotification**: [`ContentTypeId`](classes/ContentTypeId.md)

#### Defined in

[codecs/TypingNotification.ts:6](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/codecs/TypingNotification.ts#L6)

___

### SortDirection

 **SortDirection**: typeof `SortDirection`

#### Defined in

[ApiClient.ts:9](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/ApiClient.ts#L9)

## Functions

### buildContentTopic

**buildContentTopic**(`name`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`string`

#### Defined in

[utils/topic.ts:3](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/utils/topic.ts#L3)

___

### buildDirectMessageTopic

**buildDirectMessageTopic**(`sender`, `recipient`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sender` | `string` |
| `recipient` | `string` |

#### Returns

`string`

#### Defined in

[utils/topic.ts:6](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/utils/topic.ts#L6)

___

### buildDirectMessageTopicV2

**buildDirectMessageTopicV2**(`randomString`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `randomString` | `string` |

#### Returns

`string`

#### Defined in

[utils/topic.ts:16](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/utils/topic.ts#L16)

___

### buildUserContactTopic

**buildUserContactTopic**(`walletAddr`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `walletAddr` | `string` |

#### Returns

`string`

#### Defined in

[utils/topic.ts:20](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/utils/topic.ts#L20)

___

### buildUserIntroTopic

**buildUserIntroTopic**(`walletAddr`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `walletAddr` | `string` |

#### Returns

`string`

#### Defined in

[utils/topic.ts:25](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/utils/topic.ts#L25)

___

### buildUserInviteTopic

**buildUserInviteTopic**(`walletAddr`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `walletAddr` | `string` |

#### Returns

`string`

#### Defined in

[utils/topic.ts:30](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/utils/topic.ts#L30)

___

### buildUserPrivateStoreTopic

**buildUserPrivateStoreTopic**(`addrPrefixedKey`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `addrPrefixedKey` | `string` |

#### Returns

`string`

#### Defined in

[utils/topic.ts:34](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/utils/topic.ts#L34)

___

### dateToNs

**dateToNs**(`date`): `Long`

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Date` |

#### Returns

`Long`

#### Defined in

[utils/date.ts:3](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/utils/date.ts#L3)

___

### decodeContactBundle

**decodeContactBundle**(`bytes`): [`PublicKeyBundle`](classes/PublicKeyBundle.md) \| [`SignedPublicKeyBundle`](classes/SignedPublicKeyBundle.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |

#### Returns

[`PublicKeyBundle`](classes/PublicKeyBundle.md) \| [`SignedPublicKeyBundle`](classes/SignedPublicKeyBundle.md)

#### Defined in

[ContactBundle.ts:5](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/ContactBundle.ts#L5)

___

### decodeContent

**decodeContent**(`contentBytes`, `client`): `Promise`<{ `content`: `any` ; `contentType`: [`ContentTypeId`](classes/ContentTypeId.md) ; `error`: `undefined` \| `Error`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contentBytes` | `Uint8Array` |
| `client` | [`Client`](classes/Client.md) |

#### Returns

`Promise`<{ `content`: `any` ; `contentType`: [`ContentTypeId`](classes/ContentTypeId.md) ; `error`: `undefined` \| `Error`  }\>

#### Defined in

[Message.ts:373](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/Message.ts#L373)

___

### decrypt

**decrypt**(`encrypted`, `secret`, `additionalData?`): `Promise`<`Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `encrypted` | `Ciphertext` \| [`Ciphertext`](classes/Ciphertext.md) |
| `secret` | `Uint8Array` |
| `additionalData?` | `Uint8Array` |

#### Returns

`Promise`<`Uint8Array`\>

#### Defined in

[crypto/encryption.ts:40](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/crypto/encryption.ts#L40)

___

### encrypt

**encrypt**(`plain`, `secret`, `additionalData?`): `Promise`<[`Ciphertext`](classes/Ciphertext.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `plain` | `Uint8Array` |
| `secret` | `Uint8Array` |
| `additionalData?` | `Uint8Array` |

#### Returns

`Promise`<[`Ciphertext`](classes/Ciphertext.md)\>

#### Defined in

[crypto/encryption.ts:17](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/crypto/encryption.ts#L17)

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

[utils/date.ts:15](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/utils/date.ts#L15)

___

### mapPaginatedStream

**mapPaginatedStream**<`Out`\>(`gen`, `mapper`): `AsyncGenerator`<`Out`[]\>

#### Type parameters

| Name |
| :------ |
| `Out` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `gen` | `AsyncGenerator`<`Envelope`[], `any`, `unknown`\> |
| `mapper` | `EnvelopeMapper`<`Out`\> |

#### Returns

`AsyncGenerator`<`Out`[]\>

#### Defined in

[utils/async.ts:56](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/utils/async.ts#L56)

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

[utils/date.ts:7](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/utils/date.ts#L7)

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

[utils/date.ts:11](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/utils/date.ts#L11)
