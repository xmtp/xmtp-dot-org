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

[crypto/Signature.ts:65](https://github.com/xmtp/xmtp-js/blob/36ff630/src/crypto/Signature.ts#L65)

## Properties

### ecdsaCompact

 **ecdsaCompact**: `undefined` \| `ECDSACompactWithRecovery`

#### Implementation of

signature.Signature.ecdsaCompact

#### Defined in

[crypto/Signature.ts:61](https://github.com/xmtp/xmtp-js/blob/36ff630/src/crypto/Signature.ts#L61)

___

### walletEcdsaCompact

 **walletEcdsaCompact**: `undefined` \| `ECDSACompactWithRecovery`

#### Implementation of

signature.Signature.walletEcdsaCompact

#### Defined in

[crypto/Signature.ts:63](https://github.com/xmtp/xmtp-js/blob/36ff630/src/crypto/Signature.ts#L63)

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

[crypto/Signature.ts:110](https://github.com/xmtp/xmtp-js/blob/36ff630/src/crypto/Signature.ts#L110)

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

[crypto/Signature.ts:92](https://github.com/xmtp/xmtp-js/blob/36ff630/src/crypto/Signature.ts#L92)

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

[crypto/Signature.ts:78](https://github.com/xmtp/xmtp-js/blob/36ff630/src/crypto/Signature.ts#L78)

___

### toBytes

**toBytes**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[crypto/Signature.ts:120](https://github.com/xmtp/xmtp-js/blob/36ff630/src/crypto/Signature.ts#L120)

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

[crypto/Signature.ts:124](https://github.com/xmtp/xmtp-js/blob/36ff630/src/crypto/Signature.ts#L124)
