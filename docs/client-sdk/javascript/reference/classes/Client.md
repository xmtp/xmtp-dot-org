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
| `keys` | [`PrivateKeyBundleV1`](PrivateKeyBundleV1.md) |
| `apiClient` | `default` |

#### Defined in

[Client.ts:136](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/Client.ts#L136)

## Properties

### \_codecs

 `Private` **\_codecs**: `Map`<`string`, [`ContentCodec`](../interfaces/ContentCodec.md)<`any`\>\>

#### Defined in

[Client.ts:133](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/Client.ts#L133)

___

### \_conversations

 `Private` **\_conversations**: [`Conversations`](Conversations.md)

#### Defined in

[Client.ts:132](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/Client.ts#L132)

___

### \_maxContentSize

 `Private` **\_maxContentSize**: `number`

#### Defined in

[Client.ts:134](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/Client.ts#L134)

___

### address

 **address**: `string`

#### Defined in

[Client.ts:127](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/Client.ts#L127)

___

### apiClient

 **apiClient**: `default`

#### Defined in

[Client.ts:129](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/Client.ts#L129)

___

### contacts

 `Private` **contacts**: `Set`<`string`\>

#### Defined in

[Client.ts:130](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/Client.ts#L130)

___

### keys

 **keys**: [`PrivateKeyBundleV1`](PrivateKeyBundleV1.md)

#### Defined in

[Client.ts:128](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/Client.ts#L128)

___

### knownPublicKeyBundles

 `Private` **knownPublicKeyBundles**: `Map`<`string`, [`PublicKeyBundle`](PublicKeyBundle.md)\>

#### Defined in

[Client.ts:131](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/Client.ts#L131)

## Accessors

### conversations

`get` **conversations**(): [`Conversations`](Conversations.md)

#### Returns

[`Conversations`](Conversations.md)

#### Defined in

[Client.ts:150](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/Client.ts#L150)

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

[Client.ts:233](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/Client.ts#L233)

___

### close

**close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[Client.ts:190](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/Client.ts#L190)

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

[Client.ts:320](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/Client.ts#L320)

___

### decodeMessage

**decodeMessage**(`payload`, `contentTopic`): `Promise`<[`Message`](Message.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `Uint8Array` |
| `contentTopic` | `undefined` \| `string` |

#### Returns

`Promise`<[`Message`](Message.md)\>

#### Defined in

[Client.ts:355](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/Client.ts#L355)

___

### encodeMessage

**encodeMessage**(`recipient`, `timestamp`, `content`, `options?`): `Promise`<[`Message`](Message.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `recipient` | [`PublicKeyBundle`](PublicKeyBundle.md) |
| `timestamp` | `Date` |
| `content` | `any` |
| `options?` | [`SendOptions`](../modules.md#sendoptions) |

#### Returns

`Promise`<[`Message`](Message.md)\>

#### Defined in

[Client.ts:332](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/Client.ts#L332)

___

### getUserContact

**getUserContact**(`peerAddress`): `Promise`<`undefined` \| [`PublicKeyBundle`](PublicKeyBundle.md)\>

Returns the cached PublicKeyBundle if one is known for the given address or fetches
one from the network

#### Parameters

| Name | Type |
| :------ | :------ |
| `peerAddress` | `string` |

#### Returns

`Promise`<`undefined` \| [`PublicKeyBundle`](PublicKeyBundle.md)\>

#### Defined in

[Client.ts:208](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/Client.ts#L208)

___

### init

**init**(`options`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ClientOptions`](../modules.md#clientoptions) |

#### Returns

`Promise`<`void`\>

#### Defined in

[Client.ts:181](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/Client.ts#L181)

___

### listConversationMessages

**listConversationMessages**(`peerAddress`, `opts?`): `Promise`<[`Message`](Message.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `peerAddress` | `string` |
| `opts?` | [`ListMessagesOptions`](../modules.md#listmessagesoptions) |

#### Returns

`Promise`<[`Message`](Message.md)[]\>

#### Defined in

[Client.ts:411](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/Client.ts#L411)

___

### listIntroductionMessages

**listIntroductionMessages**(`opts?`): `Promise`<[`Message`](Message.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ListMessagesOptions`](../modules.md#listmessagesoptions) |

#### Returns

`Promise`<[`Message`](Message.md)[]\>

#### Defined in

[Client.ts:406](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/Client.ts#L406)

___

### listMessages

`Private` **listMessages**(`topic`, `opts?`): `Promise`<[`Message`](Message.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `topic` | `string` |
| `opts?` | [`ListMessagesOptions`](../modules.md#listmessagesoptions) |

#### Returns

`Promise`<[`Message`](Message.md)[]\>

#### Defined in

[Client.ts:422](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/Client.ts#L422)

___

### publishEnvelope

**publishEnvelope**(`env`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `env` | `Envelope` |

#### Returns

`Promise`<`void`\>

#### Defined in

[Client.ts:292](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/Client.ts#L292)

___

### publishUserContact

`Private` **publishUserContact**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[Client.ts:195](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/Client.ts#L195)

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

[Client.ts:314](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/Client.ts#L314)

___

### sendMessage

**sendMessage**(`peerAddress`, `content`, `options?`): `Promise`<[`Message`](Message.md)\>

Send a message to the wallet identified by

**`Peer Address`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `peerAddress` | `string` |
| `content` | `any` |
| `options?` | [`SendOptions`](../modules.md#sendoptions) |

#### Returns

`Promise`<[`Message`](Message.md)\>

#### Defined in

[Client.ts:253](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/Client.ts#L253)

___

### streamConversationMessages

**streamConversationMessages**(`peerAddress`): `Promise`<[`Stream`](Stream.md)<[`Message`](Message.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `peerAddress` | `string` |

#### Returns

`Promise`<[`Stream`](Stream.md)<[`Message`](Message.md)\>\>

#### Defined in

[Client.ts:395](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/Client.ts#L395)

___

### streamIntroductionMessages

**streamIntroductionMessages**(): `Promise`<[`Stream`](Stream.md)<[`Message`](Message.md)\>\>

#### Returns

`Promise`<[`Stream`](Stream.md)<[`Message`](Message.md)\>\>

#### Defined in

[Client.ts:387](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/Client.ts#L387)

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

[Client.ts:238](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/Client.ts#L238)

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

[Client.ts:160](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/Client.ts#L160)

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

[Client.ts:173](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/Client.ts#L173)
