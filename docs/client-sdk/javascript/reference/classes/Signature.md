<!---->
# Class: Signature

## Implements

- `Signature`

## Constructors

### constructor

**new Signature**(`obj`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Partial`<`Signature`\> |

#### Defined in

[crypto/Signature.ts:58](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/crypto/Signature.ts#L58)

## Properties

### ecdsaCompact

 **ecdsaCompact**: `undefined` \| `ECDSACompactWithRecovery`

#### Implementation of

signature.Signature.ecdsaCompact

#### Defined in

[crypto/Signature.ts:54](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/crypto/Signature.ts#L54)

___

### walletEcdsaCompact

 **walletEcdsaCompact**: `undefined` \| `ECDSACompactWithRecovery`

#### Implementation of

signature.Signature.walletEcdsaCompact

#### Defined in

[crypto/Signature.ts:56](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/crypto/Signature.ts#L56)

## Methods

### equals

**equals**(`other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Signature`](Signature.md) |

#### Returns

`boolean`

#### Defined in

[crypto/Signature.ts:111](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/crypto/Signature.ts#L111)

___

### getPublicKey

**getPublicKey**(`digest`): `undefined` \| [`PublicKey`](PublicKey.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `digest` | `Uint8Array` |

#### Returns

`undefined` \| [`PublicKey`](PublicKey.md)

#### Defined in

[crypto/Signature.ts:85](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/crypto/Signature.ts#L85)

___

### signerKey

**signerKey**(`key`): `Promise`<`undefined` \| `UnsignedPublicKey`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`SignedPublicKey`](SignedPublicKey.md) |

#### Returns

`Promise`<`undefined` \| `UnsignedPublicKey`\>

#### Defined in

[crypto/Signature.ts:71](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/crypto/Signature.ts#L71)

___

### toBytes

**toBytes**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[crypto/Signature.ts:121](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/crypto/Signature.ts#L121)

___

### fromBytes

`Static` **fromBytes**(`bytes`): [`Signature`](Signature.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |

#### Returns

[`Signature`](Signature.md)

#### Defined in

[crypto/Signature.ts:125](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/crypto/Signature.ts#L125)
