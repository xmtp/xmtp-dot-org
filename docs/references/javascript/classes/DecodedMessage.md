<!---->
# Class: DecodedMessage

## Constructors

### constructor

**new DecodedMessage**(`__namedParameters`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`DecodedMessage`](DecodedMessage.md) |

#### Defined in

[Message.ts:259](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/Message.ts#L259)

## Properties

### content

 **content**: `any`

#### Defined in

[Message.ts:256](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/Message.ts#L256)

___

### contentTopic

 **contentTopic**: `string`

#### Defined in

[Message.ts:253](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/Message.ts#L253)

___

### contentType

 **contentType**: [`ContentTypeId`](ContentTypeId.md)

#### Defined in

[Message.ts:255](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/Message.ts#L255)

___

### conversation

 **conversation**: [`Conversation`](../modules.md#conversation)

#### Defined in

[Message.ts:254](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/Message.ts#L254)

___

### error

 `Optional` **error**: `Error`

#### Defined in

[Message.ts:257](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/Message.ts#L257)

___

### id

 **id**: `string`

#### Defined in

[Message.ts:248](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/Message.ts#L248)

___

### messageVersion

 **messageVersion**: ``"v1"`` \| ``"v2"``

#### Defined in

[Message.ts:249](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/Message.ts#L249)

___

### recipientAddress

 `Optional` **recipientAddress**: `string`

#### Defined in

[Message.ts:251](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/Message.ts#L251)

___

### senderAddress

 **senderAddress**: `string`

#### Defined in

[Message.ts:250](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/Message.ts#L250)

___

### sent

 **sent**: `Date`

#### Defined in

[Message.ts:252](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/Message.ts#L252)

## Methods

### fromV1Message

`Static` **fromV1Message**(`message`, `content`, `contentType`, `contentTopic`, `conversation`, `error?`): [`DecodedMessage`](DecodedMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `MessageV1` |
| `content` | `any` |
| `contentType` | [`ContentTypeId`](ContentTypeId.md) |
| `contentTopic` | `string` |
| `conversation` | [`Conversation`](../modules.md#conversation) |
| `error?` | `Error` |

#### Returns

[`DecodedMessage`](DecodedMessage.md)

#### Defined in

[Message.ts:283](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/Message.ts#L283)

___

### fromV2Message

`Static` **fromV2Message**(`message`, `content`, `contentType`, `contentTopic`, `conversation`, `error?`): [`DecodedMessage`](DecodedMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `MessageV2` |
| `content` | `any` |
| `contentType` | [`ContentTypeId`](ContentTypeId.md) |
| `contentTopic` | `string` |
| `conversation` | [`Conversation`](../modules.md#conversation) |
| `error?` | `Error` |

#### Returns

[`DecodedMessage`](DecodedMessage.md)

#### Defined in

[Message.ts:309](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/Message.ts#L309)
