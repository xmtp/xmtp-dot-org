<!---->
# Class: DecodedMessage

## Constructors

### constructor

**new DecodedMessage**(`«destructured»`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Omit`<[`DecodedMessage`](DecodedMessage.md), ``"toBytes"``\> |

#### Defined in

[Message.ts:244](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/Message.ts#L244)

## Properties

### content

 **content**: `any`

#### Defined in

[Message.ts:240](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/Message.ts#L240)

___

### contentBytes

 **contentBytes**: `Uint8Array`

#### Defined in

[Message.ts:242](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/Message.ts#L242)

___

### contentTopic

 **contentTopic**: `string`

#### Defined in

[Message.ts:237](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/Message.ts#L237)

___

### contentType

 **contentType**: [`ContentTypeId`](ContentTypeId.md)

#### Defined in

[Message.ts:239](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/Message.ts#L239)

___

### conversation

 **conversation**: [`Conversation`](../interfaces/Conversation.md)

#### Defined in

[Message.ts:238](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/Message.ts#L238)

___

### error

 `Optional` **error**: `Error`

#### Defined in

[Message.ts:241](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/Message.ts#L241)

___

### id

 **id**: `string`

#### Defined in

[Message.ts:232](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/Message.ts#L232)

___

### messageVersion

 **messageVersion**: ``"v1"`` \| ``"v2"``

#### Defined in

[Message.ts:233](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/Message.ts#L233)

___

### recipientAddress

 `Optional` **recipientAddress**: `string`

#### Defined in

[Message.ts:235](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/Message.ts#L235)

___

### senderAddress

 **senderAddress**: `string`

#### Defined in

[Message.ts:234](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/Message.ts#L234)

___

### sent

 **sent**: `Date`

#### Defined in

[Message.ts:236](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/Message.ts#L236)

## Methods

### toBytes

**toBytes**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[Message.ts:270](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/Message.ts#L270)

___

### fromBytes

`Static` **fromBytes**(`data`, `client`): `Promise`<[`DecodedMessage`](DecodedMessage.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Uint8Array` |
| `client` | [`Client`](Client.md) |

#### Returns

`Promise`<[`DecodedMessage`](DecodedMessage.md)\>

#### Defined in

[Message.ts:283](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/Message.ts#L283)

___

### fromV1Message

`Static` **fromV1Message**(`message`, `content`, `contentType`, `contentBytes`, `contentTopic`, `conversation`, `error?`): [`DecodedMessage`](DecodedMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`MessageV1`](MessageV1.md) |
| `content` | `any` |
| `contentType` | [`ContentTypeId`](ContentTypeId.md) |
| `contentBytes` | `Uint8Array` |
| `contentTopic` | `string` |
| `conversation` | [`Conversation`](../interfaces/Conversation.md) |
| `error?` | `Error` |

#### Returns

[`DecodedMessage`](DecodedMessage.md)

#### Defined in

[Message.ts:318](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/Message.ts#L318)

___

### fromV2Message

`Static` **fromV2Message**(`message`, `content`, `contentType`, `contentTopic`, `contentBytes`, `conversation`, `senderAddress`, `error?`): [`DecodedMessage`](DecodedMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`MessageV2`](MessageV2.md) |
| `content` | `any` |
| `contentType` | [`ContentTypeId`](ContentTypeId.md) |
| `contentTopic` | `string` |
| `contentBytes` | `Uint8Array` |
| `conversation` | [`Conversation`](../interfaces/Conversation.md) |
| `senderAddress` | `string` |
| `error?` | `Error` |

#### Returns

[`DecodedMessage`](DecodedMessage.md)

#### Defined in

[Message.ts:346](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/Message.ts#L346)
