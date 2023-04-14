<!---->
# Class: Client

Client class initiates connection to the XMTP network.
Should be created with `await Client.create(options)`

## Constructors

### constructor

**new Client**(`publicKeyBundle`, `apiClient`, `backupClient`, `keystore`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKeyBundle` | [`PublicKeyBundle`](PublicKeyBundle.md) |
| `apiClient` | `default` |
| `backupClient` | `default` |
| `keystore` | [`Keystore`](../interfaces/Keystore.md) |

#### Defined in

[Client.ts:220](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/Client.ts#L220)

## Properties

### \_backupClient

 `Private` **\_backupClient**: `default`

#### Defined in

[Client.ts:214](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/Client.ts#L214)

___

### \_codecs

 `Private` **\_codecs**: `Map`<`string`, [`ContentCodec`](../interfaces/ContentCodec.md)<`any`\>\>

#### Defined in

[Client.ts:217](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/Client.ts#L217)

___

### \_conversations

 `Private` **\_conversations**: [`Conversations`](Conversations.md)

#### Defined in

[Client.ts:215](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/Client.ts#L215)

___

### \_maxContentSize

 `Private` **\_maxContentSize**: `number`

#### Defined in

[Client.ts:218](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/Client.ts#L218)

___

### address

 **address**: `string`

#### Defined in

[Client.ts:204](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/Client.ts#L204)

___

### apiClient

 **apiClient**: `default`

#### Defined in

[Client.ts:206](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/Client.ts#L206)

___

### contacts

 **contacts**: `Set`<`string`\>

#### Defined in

[Client.ts:207](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/Client.ts#L207)

___

### keystore

 **keystore**: [`Keystore`](../interfaces/Keystore.md)

#### Defined in

[Client.ts:205](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/Client.ts#L205)

___

### knownPublicKeyBundles

 `Private` **knownPublicKeyBundles**: `Map`<`string`, [`SignedPublicKeyBundle`](SignedPublicKeyBundle.md) \| [`PublicKeyBundle`](PublicKeyBundle.md)\>

#### Defined in

[Client.ts:209](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/Client.ts#L209)

___

### publicKeyBundle

 **publicKeyBundle**: [`PublicKeyBundle`](PublicKeyBundle.md)

#### Defined in

[Client.ts:208](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/Client.ts#L208)

## Accessors

### backupType

`get` **backupType**(): `BackupType`

#### Returns

`BackupType`

#### Defined in

[Client.ts:249](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/Client.ts#L249)

___

### conversations

`get` **conversations**(): [`Conversations`](Conversations.md)

#### Returns

[`Conversations`](Conversations.md)

#### Defined in

[Client.ts:245](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/Client.ts#L245)

___

### signedPublicKeyBundle

`get` **signedPublicKeyBundle**(): [`SignedPublicKeyBundle`](SignedPublicKeyBundle.md)

#### Returns

[`SignedPublicKeyBundle`](SignedPublicKeyBundle.md)

#### Defined in

[Client.ts:253](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/Client.ts#L253)

## Methods

### canMessage

**canMessage**(`peerAddress`): `Promise`<`boolean`\>

Check if

**`Peer Address`**

can be messaged, specifically
it checks that a PublicKeyBundle can be found for the given address

#### Parameters

| Name | Type |
| :------ | :------ |
| `peerAddress` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[Client.ts:448](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/Client.ts#L448)

**canMessage**(`peerAddress`): `Promise`<`boolean`[]\>

Check if

**`Peer Address`**

can be messaged, specifically
it checks that a PublicKeyBundle can be found for the given address

#### Parameters

| Name | Type |
| :------ | :------ |
| `peerAddress` | `string`[] |

#### Returns

`Promise`<`boolean`[]\>

#### Defined in

[Client.ts:449](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/Client.ts#L449)

___

### close

**close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[Client.ts:329](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/Client.ts#L329)

___

### codecFor

**codecFor**(`contentType`): `undefined` \| [`ContentCodec`](../interfaces/ContentCodec.md)<`any`\>

Find a matching codec for a given `ContentTypeId` from the
client's codec registry

#### Parameters

| Name | Type |
| :------ | :------ |
| `contentType` | [`ContentTypeId`](ContentTypeId.md) |

#### Returns

`undefined` \| [`ContentCodec`](../interfaces/ContentCodec.md)<`any`\>

#### Defined in

[Client.ts:560](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/Client.ts#L560)

___

### encodeContent

**encodeContent**(`content`, `options?`): `Promise`<`Uint8Array`\>

Convert arbitrary content into a serialized `EncodedContent` instance
with the given options

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `any` |
| `options?` | [`SendOptions`](../modules.md#sendoptions) |

#### Returns

`Promise`<`Uint8Array`\>

#### Defined in

[Client.ts:576](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/Client.ts#L576)

___

### ensureUserContactPublished

`Private` **ensureUserContactPublished**(`legacy?`): `Promise`<`void`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `legacy` | `boolean` | `false` |

#### Returns

`Promise`<`void`\>

#### Defined in

[Client.ts:333](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/Client.ts#L333)

___

### forgetContact

**forgetContact**(`peerAddress`): `void`

Used to force getUserContact fetch contact from the network.

#### Parameters

| Name | Type |
| :------ | :------ |
| `peerAddress` | `string` |

#### Returns

`void`

#### Defined in

[Client.ts:443](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/Client.ts#L443)

___

### getUserContact

**getUserContact**(`peerAddress`): `Promise`<`undefined` \| [`SignedPublicKeyBundle`](SignedPublicKeyBundle.md) \| [`PublicKeyBundle`](PublicKeyBundle.md)\>

Returns the cached PublicKeyBundle if one is known for the given address or fetches
one from the network

This throws if either the address is invalid or the contact is not published.
See also [#canMessage].

#### Parameters

| Name | Type |
| :------ | :------ |
| `peerAddress` | `string` |

#### Returns

`Promise`<`undefined` \| [`SignedPublicKeyBundle`](SignedPublicKeyBundle.md) \| [`PublicKeyBundle`](PublicKeyBundle.md)\>

#### Defined in

[Client.ts:370](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/Client.ts#L370)

___

### getUserContacts

**getUserContacts**(`peerAddresses`): `Promise`<(`undefined` \| [`SignedPublicKeyBundle`](SignedPublicKeyBundle.md) \| [`PublicKeyBundle`](PublicKeyBundle.md))[]\>

Identical to getUserContact but for multiple peer addresses

#### Parameters

| Name | Type |
| :------ | :------ |
| `peerAddresses` | `string`[] |

#### Returns

`Promise`<(`undefined` \| [`SignedPublicKeyBundle`](SignedPublicKeyBundle.md) \| [`PublicKeyBundle`](PublicKeyBundle.md))[]\>

#### Defined in

[Client.ts:394](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/Client.ts#L394)

___

### init

`Private` **init**(`options`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Flatten`<[`NetworkOptions`](../modules.md#networkoptions) & [`KeyStoreOptions`](../modules.md#keystoreoptions) & [`ContentOptions`](../modules.md#contentoptions) & [`LegacyOptions`](../modules.md#legacyoptions) & `PreEventCallbackOptions`\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[Client.ts:318](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/Client.ts#L318)

___

### listEnvelopes

**listEnvelopes**<`Out`\>(`topic`, `mapper`, `opts?`): `Promise`<`Out`[]\>

List stored messages from the specified topic.

A specified mapper function will be applied to each envelope.
If the mapper function throws an error during processing, the
envelope will be discarded.

#### Type parameters

| Name |
| :------ |
| `Out` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `topic` | `string` |
| `mapper` | `EnvelopeMapper`<`Out`\> |
| `opts?` | [`ListMessagesOptions`](../modules.md#listmessagesoptions) |

#### Returns

`Promise`<`Out`[]\>

#### Defined in

[Client.ts:612](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/Client.ts#L612)

___

### listEnvelopesPaginated

**listEnvelopesPaginated**<`Out`\>(`contentTopic`, `mapper`, `opts?`): `AsyncGenerator`<`Out`[], `any`, `unknown`\>

List messages on a given set of content topics, yielding one page at a time

#### Type parameters

| Name |
| :------ |
| `Out` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `contentTopic` | `string` |
| `mapper` | `EnvelopeMapper`<`Out`\> |
| `opts?` | `ListMessagesPaginatedOptions` |

#### Returns

`AsyncGenerator`<`Out`[], `any`, `unknown`\>

#### Defined in

[Client.ts:646](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/Client.ts#L646)

___

### listInvitations

**listInvitations**(`opts?`): `Promise`<`Envelope`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ListMessagesOptions`](../modules.md#listmessagesoptions) |

#### Returns

`Promise`<`Envelope`[]\>

#### Defined in

[Client.ts:597](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/Client.ts#L597)

___

### publishEnvelopes

**publishEnvelopes**(`envelopes`): `Promise`<`void`\>

Low level method for publishing envelopes to the XMTP network with
no pre-processing or encryption applied.

Primarily used internally

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `envelopes` | `PublishParams`[] | PublishParams[] |

#### Returns

`Promise`<`void`\>

#### Defined in

[Client.ts:533](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/Client.ts#L533)

___

### publishUserContact

**publishUserContact**(`legacy?`): `Promise`<`void`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `legacy` | `boolean` | `false` |

#### Returns

`Promise`<`void`\>

#### Defined in

[Client.ts:353](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/Client.ts#L353)

___

### registerCodec

**registerCodec**(`codec`): `void`

Register a codec to be automatically used for encoding/decoding
messages of the given Content Type

#### Parameters

| Name | Type |
| :------ | :------ |
| `codec` | [`ContentCodec`](../interfaces/ContentCodec.md)<`any`\> |

#### Returns

`void`

#### Defined in

[Client.ts:549](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/Client.ts#L549)

___

### validateEnvelope

`Private` **validateEnvelope**(`env`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `env` | `PublishParams` |

#### Returns

`void`

#### Defined in

[Client.ts:514](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/Client.ts#L514)

___

### canMessage

`Static` **canMessage**(`peerAddress`, `opts?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `peerAddress` | `string` |
| `opts?` | `Partial`<[`NetworkOptions`](../modules.md#networkoptions)\> |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[Client.ts:472](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/Client.ts#L472)

`Static` **canMessage**(`peerAddress`, `opts?`): `Promise`<`boolean`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `peerAddress` | `string`[] |
| `opts?` | `Partial`<[`NetworkOptions`](../modules.md#networkoptions)\> |

#### Returns

`Promise`<`boolean`[]\>

#### Defined in

[Client.ts:477](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/Client.ts#L477)

___

### create

`Static` **create**(`wallet`, `opts?`): `Promise`<[`Client`](Client.md)\>

Create and start a client associated with given wallet.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `wallet` | ``null`` \| [`Signer`](../interfaces/Signer.md) | the wallet as a Signer instance |
| `opts?` | `Partial`<`Flatten`<[`NetworkOptions`](../modules.md#networkoptions) & [`KeyStoreOptions`](../modules.md#keystoreoptions) & [`ContentOptions`](../modules.md#contentoptions) & [`LegacyOptions`](../modules.md#legacyoptions) & `PreEventCallbackOptions`\>\> | specify how to to connect to the network |

#### Returns

`Promise`<[`Client`](Client.md)\>

#### Defined in

[Client.ts:263](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/Client.ts#L263)

___

### getKeys

`Static` **getKeys**(`wallet`, `opts?`): `Promise`<`Uint8Array`\>

Export the XMTP PrivateKeyBundle from the SDK as a `Uint8Array`.

This bundle can then be provided as `privateKeyOverride` in a
subsequent call to `Client.create(...)`

Be very careful with these keys, as they can be used to
impersonate a user on the XMTP network and read the user's
messages.

#### Parameters

| Name | Type |
| :------ | :------ |
| `wallet` | ``null`` \| [`Signer`](../interfaces/Signer.md) |
| `opts?` | `Partial`<`Flatten`<[`NetworkOptions`](../modules.md#networkoptions) & [`KeyStoreOptions`](../modules.md#keystoreoptions) & [`ContentOptions`](../modules.md#contentoptions) & [`LegacyOptions`](../modules.md#legacyoptions) & `PreEventCallbackOptions`\>\> |

#### Returns

`Promise`<`Uint8Array`\>

#### Defined in

[Client.ts:296](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/Client.ts#L296)

___

### setupBackupClient

`Static` `Private` **setupBackupClient**(`walletAddress`, `env`): `Promise`<`default`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `walletAddress` | `string` |
| `env` | ``"local"`` \| ``"dev"`` \| ``"production"`` |

#### Returns

`Promise`<`default`\>

#### Defined in

[Client.ts:305](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/Client.ts#L305)
