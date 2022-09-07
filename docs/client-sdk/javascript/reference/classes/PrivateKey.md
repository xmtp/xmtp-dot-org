<!--[@xmtp/xmtp-js](../README.md) / [Exports](../modules.md) / PrivateKey-->

# Class: PrivateKey

## Implements

- `PrivateKey`

<!--## Table of contents

### Constructors

- [constructor](PrivateKey.md#constructor)

### Properties

- [publicKey](PrivateKey.md#publickey)
- [secp256k1](PrivateKey.md#secp256k1)
- [timestamp](PrivateKey.md#timestamp)

### Methods

- [decrypt](PrivateKey.md#decrypt)
- [encrypt](PrivateKey.md#encrypt)
- [generated](PrivateKey.md#generated)
- [matches](PrivateKey.md#matches)
- [sharedSecret](PrivateKey.md#sharedsecret)
- [sign](PrivateKey.md#sign)
- [signKey](PrivateKey.md#signkey)
- [toBytes](PrivateKey.md#tobytes)
- [fromBytes](PrivateKey.md#frombytes)
- [generate](PrivateKey.md#generate)-->

## Constructors

### constructor

• **new PrivateKey**(`obj`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `PrivateKey` |

#### Defined in

[crypto/PrivateKey.ts:15](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/crypto/PrivateKey.ts#L15)

## Properties

### publicKey

• **publicKey**: [`PublicKey`](PublicKey.md)

#### Implementation of

proto.PrivateKey.publicKey

#### Defined in

[crypto/PrivateKey.ts:13](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/crypto/PrivateKey.ts#L13)

___

### secp256k1

• **secp256k1**: `undefined` \| `PrivateKey_Secp256k1`

#### Implementation of

proto.PrivateKey.secp256k1

#### Defined in

[crypto/PrivateKey.ts:12](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/crypto/PrivateKey.ts#L12)

___

### timestamp

• **timestamp**: `Long`

#### Implementation of

proto.PrivateKey.timestamp

#### Defined in

[crypto/PrivateKey.ts:11](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/crypto/PrivateKey.ts#L11)

## Methods

### decrypt

▸ **decrypt**(`encrypted`, `peer`, `additionalData?`): `Promise`<`Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `encrypted` | `default` |
| `peer` | [`PublicKey`](PublicKey.md) |
| `additionalData?` | `Uint8Array` |

#### Returns

`Promise`<`Uint8Array`\>

#### Defined in

[crypto/PrivateKey.ts:115](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/crypto/PrivateKey.ts#L115)

___

### encrypt

▸ **encrypt**(`plain`, `peer`, `additionalData?`): `Promise`<`default`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `plain` | `Uint8Array` |
| `peer` | [`PublicKey`](PublicKey.md) |
| `additionalData?` | `Uint8Array` |

#### Returns

`Promise`<`default`\>

#### Defined in

[crypto/PrivateKey.ts:104](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/crypto/PrivateKey.ts#L104)

___

### generated

▸ **generated**(): `undefined` \| `Date`

#### Returns

`undefined` \| `Date`

#### Defined in

[crypto/PrivateKey.ts:50](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/crypto/PrivateKey.ts#L50)

___

### matches

▸ **matches**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`PublicKey`](PublicKey.md) |

#### Returns

`boolean`

#### Defined in

[crypto/PrivateKey.ts:125](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/crypto/PrivateKey.ts#L125)

___

### sharedSecret

▸ **sharedSecret**(`peer`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `peer` | [`PublicKey`](PublicKey.md) |

#### Returns

`Uint8Array`

#### Defined in

[crypto/PrivateKey.ts:87](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/crypto/PrivateKey.ts#L87)

___

### sign

▸ **sign**(`digest`): `Promise`<`default`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `digest` | `Uint8Array` |

#### Returns

`Promise`<`default`\>

#### Defined in

[crypto/PrivateKey.ts:58](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/crypto/PrivateKey.ts#L58)

___

### signKey

▸ **signKey**(`pub`): `Promise`<[`PublicKey`](PublicKey.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pub` | [`PublicKey`](PublicKey.md) |

#### Returns

`Promise`<[`PublicKey`](PublicKey.md)\>

#### Defined in

[crypto/PrivateKey.ts:76](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/crypto/PrivateKey.ts#L76)

___

### toBytes

▸ **toBytes**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[crypto/PrivateKey.ts:129](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/crypto/PrivateKey.ts#L129)

___

### fromBytes

▸ `Static` **fromBytes**(`bytes`): [`PrivateKey`](PrivateKey.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |

#### Returns

[`PrivateKey`](PrivateKey.md)

#### Defined in

[crypto/PrivateKey.ts:133](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/crypto/PrivateKey.ts#L133)

___

### generate

▸ `Static` **generate**(): [`PrivateKey`](PrivateKey.md)

#### Returns

[`PrivateKey`](PrivateKey.md)

#### Defined in

[crypto/PrivateKey.ts:33](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/crypto/PrivateKey.ts#L33)
