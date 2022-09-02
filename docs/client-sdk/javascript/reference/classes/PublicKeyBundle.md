<!--[@xmtp/xmtp-js](../README.md) / [Exports](../modules.md) / PublicKeyBundle-->

# Class: PublicKeyBundle

## Implements

- `PublicKeyBundle`

<!--## Table of contents

### Constructors

- [constructor](PublicKeyBundle.md#constructor)

### Properties

- [identityKey](PublicKeyBundle.md#identitykey)
- [preKey](PublicKeyBundle.md#prekey)

### Methods

- [toBytes](PublicKeyBundle.md#tobytes)
- [walletSignatureAddress](PublicKeyBundle.md#walletsignatureaddress)
- [fromBytes](PublicKeyBundle.md#frombytes)-->

## Constructors

### constructor

• **new PublicKeyBundle**(`identityKey`, `preKey`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `identityKey` | [`PublicKey`](PublicKey.md) |
| `preKey` | [`PublicKey`](PublicKey.md) |

#### Defined in

[crypto/PublicKeyBundle.ts:11](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/crypto/PublicKeyBundle.ts#L11)

## Properties

### identityKey

• **identityKey**: [`PublicKey`](PublicKey.md)

#### Implementation of

proto.PublicKeyBundle.identityKey

#### Defined in

[crypto/PublicKeyBundle.ts:8](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/crypto/PublicKeyBundle.ts#L8)

___

### preKey

• **preKey**: [`PublicKey`](PublicKey.md)

#### Implementation of

proto.PublicKeyBundle.preKey

#### Defined in

[crypto/PublicKeyBundle.ts:9](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/crypto/PublicKeyBundle.ts#L9)

## Methods

### toBytes

▸ **toBytes**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[crypto/PublicKeyBundle.ts:26](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/crypto/PublicKeyBundle.ts#L26)

___

### walletSignatureAddress

▸ **walletSignatureAddress**(): `string`

#### Returns

`string`

#### Defined in

[crypto/PublicKeyBundle.ts:22](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/crypto/PublicKeyBundle.ts#L22)

___

### fromBytes

▸ `Static` **fromBytes**(`bytes`): [`PublicKeyBundle`](PublicKeyBundle.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |

#### Returns

[`PublicKeyBundle`](PublicKeyBundle.md)

#### Defined in

[crypto/PublicKeyBundle.ts:30](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/crypto/PublicKeyBundle.ts#L30)
