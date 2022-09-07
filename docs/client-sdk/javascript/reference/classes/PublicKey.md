<!--[@xmtp/xmtp-js](../README.md) / [Exports](../modules.md) / PublicKey-->

# Class: PublicKey

## Implements

- `PublicKey`

<!--## Table of contents

### Constructors

- [constructor](PublicKey.md#constructor)

### Properties

- [secp256k1Uncompressed](PublicKey.md#secp256k1uncompressed)
- [signature](PublicKey.md#signature)
- [timestamp](PublicKey.md#timestamp)

### Methods

- [bytesToSign](PublicKey.md#bytestosign)
- [equals](PublicKey.md#equals)
- [generated](PublicKey.md#generated)
- [getEthereumAddress](PublicKey.md#getethereumaddress)
- [identitySigRequestText](PublicKey.md#identitysigrequesttext)
- [signWithWallet](PublicKey.md#signwithwallet)
- [toBytes](PublicKey.md#tobytes)
- [verify](PublicKey.md#verify)
- [verifyKey](PublicKey.md#verifykey)
- [walletSignatureAddress](PublicKey.md#walletsignatureaddress)
- [fromBytes](PublicKey.md#frombytes)-->

## Constructors

### constructor

• **new PublicKey**(`obj`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `PublicKey` |

#### Defined in

[crypto/PublicKey.ts:17](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/crypto/PublicKey.ts#L17)

## Properties

### secp256k1Uncompressed

• **secp256k1Uncompressed**: `PublicKey_Secp256k1Uncompressed`

#### Implementation of

proto.PublicKey.secp256k1Uncompressed

#### Defined in

[crypto/PublicKey.ts:14](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/crypto/PublicKey.ts#L14)

___

### signature

• `Optional` **signature**: `default`

#### Implementation of

proto.PublicKey.signature

#### Defined in

[crypto/PublicKey.ts:15](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/crypto/PublicKey.ts#L15)

___

### timestamp

• **timestamp**: `Long`

#### Implementation of

proto.PublicKey.timestamp

#### Defined in

[crypto/PublicKey.ts:13](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/crypto/PublicKey.ts#L13)

## Methods

### bytesToSign

▸ **bytesToSign**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[crypto/PublicKey.ts:60](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/crypto/PublicKey.ts#L60)

___

### equals

▸ **equals**(`other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`PublicKey`](PublicKey.md) |

#### Returns

`boolean`

#### Defined in

[crypto/PublicKey.ts:141](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/crypto/PublicKey.ts#L141)

___

### generated

▸ **generated**(): `undefined` \| `Date`

#### Returns

`undefined` \| `Date`

#### Defined in

[crypto/PublicKey.ts:38](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/crypto/PublicKey.ts#L38)

___

### getEthereumAddress

▸ **getEthereumAddress**(): `string`

#### Returns

`string`

#### Defined in

[crypto/PublicKey.ts:133](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/crypto/PublicKey.ts#L133)

___

### identitySigRequestText

▸ **identitySigRequestText**(): `string`

#### Returns

`string`

#### Defined in

[crypto/PublicKey.ts:67](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/crypto/PublicKey.ts#L67)

___

### signWithWallet

▸ **signWithWallet**(`wallet`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `wallet` | `Signer` |

#### Returns

`Promise`<`void`\>

#### Defined in

[crypto/PublicKey.ts:93](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/crypto/PublicKey.ts#L93)

___

### toBytes

▸ **toBytes**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[crypto/PublicKey.ts:156](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/crypto/PublicKey.ts#L156)

___

### verify

▸ **verify**(`signature`, `digest`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `signature` | `default` |
| `digest` | `Uint8Array` |

#### Returns

`boolean`

#### Defined in

[crypto/PublicKey.ts:46](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/crypto/PublicKey.ts#L46)

___

### verifyKey

▸ **verifyKey**(`pub`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pub` | [`PublicKey`](PublicKey.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[crypto/PublicKey.ts:81](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/crypto/PublicKey.ts#L81)

___

### walletSignatureAddress

▸ **walletSignatureAddress**(): `string`

#### Returns

`string`

#### Defined in

[crypto/PublicKey.ts:115](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/crypto/PublicKey.ts#L115)

___

### fromBytes

▸ `Static` **fromBytes**(`bytes`): [`PublicKey`](PublicKey.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |

#### Returns

[`PublicKey`](PublicKey.md)

#### Defined in

[crypto/PublicKey.ts:160](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/crypto/PublicKey.ts#L160)
