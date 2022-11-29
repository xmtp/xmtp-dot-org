<!---->
# Class: Client

Client class initiates connection to the XMTP network.
Should be created with `await Client.create(options)`

## Constructors

### constructor

**new Client**(`keys`, `apiClient`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `keys` | `PrivateKeyBundleV1` |
| `apiClient` | `default` |

#### Defined in

[Client.ts:158](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/Client.ts#L158)

## Properties

### \_codecs

 `Private` **\_codecs**: `Map`<`string`, [`ContentCodec`](../interfaces/ContentCodec.md)<`any`\>\>

#### Defined in

[Client.ts:155](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/Client.ts#L155)

___

### \_conversations

 `Private` **\_conversations**: [`Conversations`](Conversations.md)

#### Defined in

[Client.ts:153](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/Client.ts#L153)

___

### \_maxContentSize

 `Private` **\_maxContentSize**: `number`

#### Defined in

[Client.ts:156](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/Client.ts#L156)

___

### address

 **address**: `string`

#### Defined in

[Client.ts:143](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/Client.ts#L143)

___

### apiClient

 **apiClient**: `default`

#### Defined in

[Client.ts:146](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/Client.ts#L146)

___

### contacts

 **contacts**: `Set`<`string`\>

#### Defined in

[Client.ts:147](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/Client.ts#L147)

___

### keys

 **keys**: `PrivateKeyBundleV2`

#### Defined in

[Client.ts:145](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/Client.ts#L145)

___

### knownPublicKeyBundles

 `Private` **knownPublicKeyBundles**: `Map`<`string`, [`SignedPublicKeyBundle`](SignedPublicKeyBundle.md) \| [`PublicKeyBundle`](PublicKeyBundle.md)\>

#### Defined in

[Client.ts:148](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/Client.ts#L148)

___

### legacyKeys

 **legacyKeys**: `PrivateKeyBundleV1`

#### Defined in

[Client.ts:144](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/Client.ts#L144)

## Accessors

### conversations

`get` **conversations**(): [`Conversations`](Conversations.md)

#### Returns

[`Conversations`](Conversations.md)

#### Defined in

[Client.ts:176](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/Client.ts#L176)

## Methods

### canMessage

**canMessage**(`peerAddress`): `Promise`<`boolean`\>

Check if

**`Peer Address`**

can be messaged, specifically it checks that a PublicKeyBundle can be
found for the given address

#### Parameters

| Name | Type |
| :------ | :------ |
| `peerAddress` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[Client.ts:287](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/Client.ts#L287)

___

### close

**close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[Client.ts:216](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/Client.ts#L216)

___

### codecFor

**codecFor**(`contentType`): `undefined` \| [`ContentCodec`](../interfaces/ContentCodec.md)<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contentType` | [`ContentTypeId`](ContentTypeId.md) |

#### Returns

`undefined` \| [`ContentCodec`](../interfaces/ContentCodec.md)<`any`\>

#### Defined in

[Client.ts:334](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/Client.ts#L334)

___

### encodeContent

**encodeContent**(`content`, `options?`): `Promise`<`Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `any` |
| `options?` | [`SendOptions`](../modules.md#sendoptions) |

#### Returns

`Promise`<`Uint8Array`\>

#### Defined in

[Client.ts:346](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/Client.ts#L346)

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

[Client.ts:220](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/Client.ts#L220)

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

[Client.ts:279](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/Client.ts#L279)

___

### getUserContact

**getUserContact**(`peerAddress`): `Promise`<`undefined` \| [`SignedPublicKeyBundle`](SignedPublicKeyBundle.md) \| [`PublicKeyBundle`](PublicKeyBundle.md)\>

Returns the cached PublicKeyBundle if one is known for the given address or fetches
one from the network

#### Parameters

| Name | Type |
| :------ | :------ |
| `peerAddress` | `string` |

#### Returns

`Promise`<`undefined` \| [`SignedPublicKeyBundle`](SignedPublicKeyBundle.md) \| [`PublicKeyBundle`](PublicKeyBundle.md)\>

#### Defined in

[Client.ts:255](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/Client.ts#L255)

___

### init

`Private` **init**(`options`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ClientOptions`](../modules.md#clientoptions) |

#### Returns

`Promise`<`void`\>

#### Defined in

[Client.ts:207](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/Client.ts#L207)

___

### listEnvelopes

**listEnvelopes**<`Out`\>(`topics`, `mapper`, `opts?`): `Promise`<`Out`[]\>

#### Type parameters

| Name |
| :------ |
| `Out` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `topics` | `string`[] |
| `mapper` | `EnvelopeMapper`<`Out`\> |
| `opts?` | [`ListMessagesOptions`](../modules.md#listmessagesoptions) |

#### Returns

`Promise`<`Out`[]\>

#### Defined in

[Client.ts:376](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/Client.ts#L376)

___

### listEnvelopesPaginated

**listEnvelopesPaginated**<`Out`\>(`contentTopics`, `mapper`, `opts?`): `AsyncGenerator`<`Out`[], `any`, `unknown`\>

List messages on a given set of content topics, yielding one page at a time

#### Type parameters

| Name |
| :------ |
| `Out` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `contentTopics` | `string`[] |
| `mapper` | `EnvelopeMapper`<`Out`\> |
| `opts?` | `ListMessagesPaginatedOptions` |

#### Returns

`AsyncGenerator`<`Out`[], `any`, `unknown`\>

#### Defined in

[Client.ts:410](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/Client.ts#L410)

___

### listInvitations

**listInvitations**(`opts?`): `Promise`<`SealedInvitation`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ListMessagesOptions`](../modules.md#listmessagesoptions) |

#### Returns

`Promise`<`SealedInvitation`[]\>

#### Defined in

[Client.ts:367](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/Client.ts#L367)

___

### publishEnvelopes

**publishEnvelopes**(`envelopes`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `envelopes` | `PublishParams`[] |

#### Returns

`Promise`<`void`\>

#### Defined in

[Client.ts:315](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/Client.ts#L315)

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

[Client.ts:240](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/Client.ts#L240)

___

### registerCodec

**registerCodec**(`codec`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `codec` | [`ContentCodec`](../interfaces/ContentCodec.md)<`any`\> |

#### Returns

`void`

#### Defined in

[Client.ts:327](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/Client.ts#L327)

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

[Client.ts:304](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/Client.ts#L304)

___

### canMessage

`Static` **canMessage**(`peerAddress`, `opts?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `peerAddress` | `string` |
| `opts?` | `Partial`<`NetworkOptions`\> |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[Client.ts:292](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/Client.ts#L292)

___

### create

`Static` **create**(`wallet`, `opts?`): `Promise`<[`Client`](Client.md)\>

Create and start a client associated with given wallet.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `wallet` | ``null`` \| `Signer` | the wallet as a Signer instance |
| `opts?` | `Partial`<[`ClientOptions`](../modules.md#clientoptions)\> | specify how to to connect to the network |

#### Returns

`Promise`<[`Client`](Client.md)\>

#### Defined in

[Client.ts:186](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/Client.ts#L186)

___

### getKeys

`Static` **getKeys**(`wallet`, `opts?`): `Promise`<`Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `wallet` | ``null`` \| `Signer` |
| `opts?` | `Partial`<[`ClientOptions`](../modules.md#clientoptions)\> |

#### Returns

`Promise`<`Uint8Array`\>

#### Defined in

[Client.ts:199](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/Client.ts#L199)
