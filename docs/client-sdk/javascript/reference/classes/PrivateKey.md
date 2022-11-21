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

[crypto/PrivateKey.ts:181](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/crypto/PrivateKey.ts#L181)

## Properties

### publicKey

 **publicKey**: [`PublicKey`](PublicKey.md)

#### Implementation of

privateKey.PrivateKey.publicKey

#### Defined in

[crypto/PrivateKey.ts:179](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/crypto/PrivateKey.ts#L179)

___

### secp256k1

 **secp256k1**: `secp256k1`

#### Implementation of

privateKey.PrivateKey.secp256k1

#### Defined in

[crypto/PrivateKey.ts:178](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/crypto/PrivateKey.ts#L178)

___

### timestamp

 **timestamp**: `Long`

#### Implementation of

privateKey.PrivateKey.timestamp

#### Defined in

[crypto/PrivateKey.ts:177](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/crypto/PrivateKey.ts#L177)

## Methods

### decrypt

**decrypt**(`encrypted`, `peer`, `additionalData?`): `Promise`<`Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `encrypted` | `default` |
| `peer` | [`PublicKey`](PublicKey.md) |
| `additionalData?` | `Uint8Array` |

#### Returns

`Promise`<`Uint8Array`\>

#### Defined in

[crypto/PrivateKey.ts:262](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/crypto/PrivateKey.ts#L262)

___

### encrypt

**encrypt**(`plain`, `peer`, `additionalData?`): `Promise`<`default`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `plain` | `Uint8Array` |
| `peer` | [`PublicKey`](PublicKey.md) |
| `additionalData?` | `Uint8Array` |

#### Returns

`Promise`<`default`\>

#### Defined in

[crypto/PrivateKey.ts:251](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/crypto/PrivateKey.ts#L251)

___

### generated

**generated**(): `undefined` \| `Date`

#### Returns

`undefined` \| `Date`

#### Defined in

[crypto/PrivateKey.ts:212](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/crypto/PrivateKey.ts#L212)

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

[crypto/PrivateKey.ts:272](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/crypto/PrivateKey.ts#L272)

___

### sharedSecret

**sharedSecret**(`peer`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `peer` | `SignedPublicKey` \| [`PublicKey`](PublicKey.md) |

#### Returns

`Uint8Array`

#### Defined in

[crypto/PrivateKey.ts:240](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/crypto/PrivateKey.ts#L240)

___

### sign

**sign**(`digest`): `Promise`<`default`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `digest` | `Uint8Array` |

#### Returns

`Promise`<`default`\>

#### Defined in

[crypto/PrivateKey.ts:217](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/crypto/PrivateKey.ts#L217)

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

[crypto/PrivateKey.ts:232](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/crypto/PrivateKey.ts#L232)

___

### toBytes

**toBytes**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[crypto/PrivateKey.ts:277](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/crypto/PrivateKey.ts#L277)

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

[crypto/PrivateKey.ts:282](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/crypto/PrivateKey.ts#L282)

___

### generate

`Static` **generate**(): [`PrivateKey`](PrivateKey.md)

#### Returns

[`PrivateKey`](PrivateKey.md)

#### Defined in

[crypto/PrivateKey.ts:195](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/crypto/PrivateKey.ts#L195)
