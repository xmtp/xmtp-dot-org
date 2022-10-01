<!--[@xmtp/xmtp-js](../README.md) / [Exports](../modules.md) / Client-->

# Class: Client

Client class initiates connection to the XMTP network.
Should be created with `await Client.create(options)`

<!--## Table of contents

### Constructors

- [constructor](Client.md#constructor)

### Properties

- [address](Client.md#address)
- [apiClient](Client.md#apiclient)
- [keys](Client.md#keys)

### Accessors

- [conversations](Client.md#conversations)

### Methods

- [canMessage](Client.md#canmessage)
- [close](Client.md#close)
- [codecFor](Client.md#codecfor)
- [decodeMessage](Client.md#decodemessage)
- [encodeMessage](Client.md#encodemessage)
- [getUserContact](Client.md#getusercontact)
- [getUserContactFromNetwork](Client.md#getusercontactfromnetwork)
- [init](Client.md#init)
- [listConversationMessages](Client.md#listconversationmessages)
- [listIntroductionMessages](Client.md#listintroductionmessages)
- [publishEnvelope](Client.md#publishenvelope)
- [registerCodec](Client.md#registercodec)
- [sendMessage](Client.md#sendmessage)
- [streamConversationMessages](Client.md#streamconversationmessages)
- [streamIntroductionMessages](Client.md#streamintroductionmessages)
- [create](Client.md#create)
- [getKeys](Client.md#getkeys)-->

## Constructors

### constructor

• **new Client**(`keys`, `apiClient`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `keys` | [`PrivateKeyBundle`](PrivateKeyBundle.md) |
| `apiClient` | `default` |

#### Defined in

[Client.ts:136](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/Client.ts#L136)

## Properties

### address

• **address**: `string`

#### Defined in

[Client.ts:127](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/Client.ts#L127)

___

### apiClient

• **apiClient**: `default`

#### Defined in

[Client.ts:129](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/Client.ts#L129)

___

### keys

• **keys**: [`PrivateKeyBundle`](PrivateKeyBundle.md)

#### Defined in

[Client.ts:128](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/Client.ts#L128)

## Accessors

### conversations

• `get` **conversations**(): [`Conversations`](Conversations.md)

#### Returns

[`Conversations`](Conversations.md)

#### Defined in

[Client.ts:150](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/Client.ts#L150)

## Methods

### canMessage

▸ **canMessage**(`peerAddress`): `Promise`<`boolean`\>

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

[Client.ts:255](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/Client.ts#L255)

___

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[Client.ts:190](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/Client.ts#L190)

___

### codecFor

▸ **codecFor**(`contentType`): `undefined` \| [`ContentCodec`](../interfaces/ContentCodec.md)<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contentType` | [`ContentTypeId`](ContentTypeId.md) |

#### Returns

`undefined` \| [`ContentCodec`](../interfaces/ContentCodec.md)<`any`\>

#### Defined in

[Client.ts:330](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/Client.ts#L330)

___

### decodeMessage

▸ **decodeMessage**(`payload`, `contentTopic`): `Promise`<[`Message`](Message.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `Uint8Array` |
| `contentTopic` | `undefined` \| `string` |

#### Returns

`Promise`<[`Message`](Message.md)\>

#### Defined in

[Client.ts:365](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/Client.ts#L365)

___

### encodeMessage

▸ **encodeMessage**(`recipient`, `timestamp`, `content`, `options?`): `Promise`<[`Message`](Message.md)\>

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

[Client.ts:342](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/Client.ts#L342)

___

### getUserContact

▸ **getUserContact**(`peerAddress`): `Promise`<`undefined` \| [`PublicKeyBundle`](PublicKeyBundle.md)\>

Returns the cached PublicKeyBundle if one is known for the given address or fetches
one from the network

#### Parameters

| Name | Type |
| :------ | :------ |
| `peerAddress` | `string` |

#### Returns

`Promise`<`undefined` \| [`PublicKeyBundle`](PublicKeyBundle.md)\>

#### Defined in

[Client.ts:233](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/Client.ts#L233)

___

### getUserContactFromNetwork

▸ **getUserContactFromNetwork**(`peerAddress`): `Promise`<`undefined` \| [`PublicKeyBundle`](PublicKeyBundle.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `peerAddress` | `string` |

#### Returns

`Promise`<`undefined` \| [`PublicKeyBundle`](PublicKeyBundle.md)\>

#### Defined in

[Client.ts:204](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/Client.ts#L204)

___

### init

▸ **init**(`options`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ClientOptions`](../modules.md#clientoptions) |

#### Returns

`Promise`<`void`\>

#### Defined in

[Client.ts:181](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/Client.ts#L181)

___

### listConversationMessages

▸ **listConversationMessages**(`peerAddress`, `opts?`): `Promise`<[`Message`](Message.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `peerAddress` | `string` |
| `opts?` | [`ListMessagesOptions`](../modules.md#listmessagesoptions) |

#### Returns

`Promise`<[`Message`](Message.md)[]\>

#### Defined in

[Client.ts:421](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/Client.ts#L421)

___

### listIntroductionMessages

▸ **listIntroductionMessages**(`opts?`): `Promise`<[`Message`](Message.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ListMessagesOptions`](../modules.md#listmessagesoptions) |

#### Returns

`Promise`<[`Message`](Message.md)[]\>

#### Defined in

[Client.ts:416](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/Client.ts#L416)

___

### publishEnvelope

▸ **publishEnvelope**(`env`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `env` | `Envelope` |

#### Returns

`Promise`<`void`\>

#### Defined in

[Client.ts:302](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/Client.ts#L302)

___

### registerCodec

▸ **registerCodec**(`codec`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `codec` | [`ContentCodec`](../interfaces/ContentCodec.md)<`any`\> |

#### Returns

`void`

#### Defined in

[Client.ts:324](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/Client.ts#L324)

___

### sendMessage

▸ **sendMessage**(`peerAddress`, `content`, `options?`): `Promise`<[`Message`](Message.md)\>

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

[Client.ts:263](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/Client.ts#L263)

___

### streamConversationMessages

▸ **streamConversationMessages**(`peerAddress`): `Promise`<[`Stream`](Stream.md)<[`Message`](Message.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `peerAddress` | `string` |

#### Returns

`Promise`<[`Stream`](Stream.md)<[`Message`](Message.md)\>\>

#### Defined in

[Client.ts:405](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/Client.ts#L405)

___

### streamIntroductionMessages

▸ **streamIntroductionMessages**(): `Promise`<[`Stream`](Stream.md)<[`Message`](Message.md)\>\>

#### Returns

`Promise`<[`Stream`](Stream.md)<[`Message`](Message.md)\>\>

#### Defined in

[Client.ts:397](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/Client.ts#L397)

___

### create

▸ `Static` **create**(`wallet`, `opts?`): `Promise`<[`Client`](Client.md)\>

Create and start a client associated with given wallet.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `wallet` | ``null`` \| `Signer` | the wallet as a Signer instance |
| `opts?` | `Partial`<[`ClientOptions`](../modules.md#clientoptions)\> | specify how to to connect to the network |

#### Returns

`Promise`<[`Client`](Client.md)\>

#### Defined in

[Client.ts:160](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/Client.ts#L160)

___

### getKeys

▸ `Static` **getKeys**(`wallet`, `opts?`): `Promise`<`Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `wallet` | ``null`` \| `Signer` |
| `opts?` | `Partial`<[`ClientOptions`](../modules.md#clientoptions)\> |

#### Returns

`Promise`<`Uint8Array`\>

#### Defined in

[Client.ts:173](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/Client.ts#L173)
