<!---->
# Class: PrivateKey

## Implements

- `PrivateKey`

## Constructors

### constructor

**new PrivateKey**(`obj`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `PrivateKey` |

#### Defined in

[crypto/PrivateKey.ts:312](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/crypto/PrivateKey.ts#L312)

## Properties

### publicKey

 **publicKey**: [`PublicKey`](PublicKey.md)

#### Implementation of

privateKey.PrivateKey.publicKey

#### Defined in

[crypto/PrivateKey.ts:310](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/crypto/PrivateKey.ts#L310)

___

### secp256k1

 **secp256k1**: `secp256k1`

#### Implementation of

privateKey.PrivateKey.secp256k1

#### Defined in

[crypto/PrivateKey.ts:309](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/crypto/PrivateKey.ts#L309)

___

### timestamp

 **timestamp**: `Long`

#### Implementation of

privateKey.PrivateKey.timestamp

#### Defined in

[crypto/PrivateKey.ts:308](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/crypto/PrivateKey.ts#L308)

## Methods

### decrypt

**decrypt**(`encrypted`, `peer`, `additionalData?`): `Promise`<`Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `encrypted` | [`Ciphertext`](Ciphertext.md) |
| `peer` | [`PublicKey`](PublicKey.md) |
| `additionalData?` | `Uint8Array` |

#### Returns

`Promise`<`Uint8Array`\>

#### Defined in

[crypto/PrivateKey.ts:393](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/crypto/PrivateKey.ts#L393)

___

### encrypt

**encrypt**(`plain`, `peer`, `additionalData?`): `Promise`<[`Ciphertext`](Ciphertext.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `plain` | `Uint8Array` |
| `peer` | [`PublicKey`](PublicKey.md) |
| `additionalData?` | `Uint8Array` |

#### Returns

`Promise`<[`Ciphertext`](Ciphertext.md)\>

#### Defined in

[crypto/PrivateKey.ts:382](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/crypto/PrivateKey.ts#L382)

___

### generated

**generated**(): `undefined` \| `Date`

#### Returns

`undefined` \| `Date`

#### Defined in

[crypto/PrivateKey.ts:343](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/crypto/PrivateKey.ts#L343)

___

### matches

**matches**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`PublicKey`](PublicKey.md) |

#### Returns

`boolean`

#### Defined in

[crypto/PrivateKey.ts:403](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/crypto/PrivateKey.ts#L403)

___

### sharedSecret

**sharedSecret**(`peer`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `peer` | [`SignedPublicKey`](SignedPublicKey.md) \| [`PublicKey`](PublicKey.md) |

#### Returns

`Uint8Array`

#### Defined in

[crypto/PrivateKey.ts:371](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/crypto/PrivateKey.ts#L371)

___

### sign

**sign**(`digest`): `Promise`<[`Signature`](Signature.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `digest` | `Uint8Array` |

#### Returns

`Promise`<[`Signature`](Signature.md)\>

#### Defined in

[crypto/PrivateKey.ts:348](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/crypto/PrivateKey.ts#L348)

___

### signKey

**signKey**(`pub`): `Promise`<[`PublicKey`](PublicKey.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pub` | [`PublicKey`](PublicKey.md) |

#### Returns

`Promise`<[`PublicKey`](PublicKey.md)\>

#### Defined in

[crypto/PrivateKey.ts:363](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/crypto/PrivateKey.ts#L363)

___

### toBytes

**toBytes**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[crypto/PrivateKey.ts:408](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/crypto/PrivateKey.ts#L408)

___

### fromBytes

`Static` **fromBytes**(`bytes`): [`PrivateKey`](PrivateKey.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |

#### Returns

[`PrivateKey`](PrivateKey.md)

#### Defined in

[crypto/PrivateKey.ts:413](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/crypto/PrivateKey.ts#L413)

___

### generate

`Static` **generate**(): [`PrivateKey`](PrivateKey.md)

#### Returns

[`PrivateKey`](PrivateKey.md)

#### Defined in

[crypto/PrivateKey.ts:326](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/crypto/PrivateKey.ts#L326)
