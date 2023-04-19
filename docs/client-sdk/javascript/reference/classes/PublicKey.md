<!---->
# Class: PublicKey

## Hierarchy

- `UnsignedPublicKey`

  ↳ **`PublicKey`**

## Implements

- `PublicKey`

## Constructors

### constructor

**new PublicKey**(`obj`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `PublicKey` |

#### Overrides

UnsignedPublicKey.constructor

#### Defined in

[crypto/PublicKey.ts:423](https://github.com/xmtp/xmtp-js/blob/36ff630/src/crypto/PublicKey.ts#L423)

## Properties

### createdNs

 **createdNs**: `Long`

#### Inherited from

UnsignedPublicKey.createdNs

#### Defined in

[crypto/PublicKey.ts:44](https://github.com/xmtp/xmtp-js/blob/36ff630/src/crypto/PublicKey.ts#L44)

___

### secp256k1Uncompressed

 **secp256k1Uncompressed**: `secp256k1Uncompressed`

#### Implementation of

publicKey.PublicKey.secp256k1Uncompressed

#### Inherited from

UnsignedPublicKey.secp256k1Uncompressed

#### Defined in

[crypto/PublicKey.ts:45](https://github.com/xmtp/xmtp-js/blob/36ff630/src/crypto/PublicKey.ts#L45)

___

### signature

 `Optional` **signature**: [`Signature`](Signature.md)

#### Implementation of

publicKey.PublicKey.signature

#### Defined in

[crypto/PublicKey.ts:421](https://github.com/xmtp/xmtp-js/blob/36ff630/src/crypto/PublicKey.ts#L421)

## Accessors

### timestamp

`get` **timestamp**(): `Long`

#### Returns

`Long`

#### Implementation of

publicKey.PublicKey.timestamp

#### Overrides

UnsignedPublicKey.timestamp

#### Defined in

[crypto/PublicKey.ts:433](https://github.com/xmtp/xmtp-js/blob/36ff630/src/crypto/PublicKey.ts#L433)

## Methods

### bytesToSign

**bytesToSign**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[crypto/PublicKey.ts:437](https://github.com/xmtp/xmtp-js/blob/36ff630/src/crypto/PublicKey.ts#L437)

___

### equals

**equals**(`other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`PublicKey`](PublicKey.md) |

#### Returns

`boolean`

#### Inherited from

UnsignedPublicKey.equals

#### Defined in

[crypto/PublicKey.ts:94](https://github.com/xmtp/xmtp-js/blob/36ff630/src/crypto/PublicKey.ts#L94)

___

### generated

**generated**(): `undefined` \| `Date`

#### Returns

`undefined` \| `Date`

#### Inherited from

UnsignedPublicKey.generated

#### Defined in

[crypto/PublicKey.ts:57](https://github.com/xmtp/xmtp-js/blob/36ff630/src/crypto/PublicKey.ts#L57)

___

### getEthereumAddress

**getEthereumAddress**(): `string`

#### Returns

`string`

#### Inherited from

UnsignedPublicKey.getEthereumAddress

#### Defined in

[crypto/PublicKey.ts:102](https://github.com/xmtp/xmtp-js/blob/36ff630/src/crypto/PublicKey.ts#L102)

___

### isFromLegacyKey

**isFromLegacyKey**(): `boolean`

#### Returns

`boolean`

#### Inherited from

UnsignedPublicKey.isFromLegacyKey

#### Defined in

[crypto/PublicKey.ts:61](https://github.com/xmtp/xmtp-js/blob/36ff630/src/crypto/PublicKey.ts#L61)

___

### signWithWallet

**signWithWallet**(`wallet`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `wallet` | [`Signer`](../interfaces/Signer.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[crypto/PublicKey.ts:445](https://github.com/xmtp/xmtp-js/blob/36ff630/src/crypto/PublicKey.ts#L445)

___

### toBytes

**toBytes**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Overrides

UnsignedPublicKey.toBytes

#### Defined in

[crypto/PublicKey.ts:480](https://github.com/xmtp/xmtp-js/blob/36ff630/src/crypto/PublicKey.ts#L480)

___

### verify

**verify**(`signature`, `digest`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `signature` | [`Signature`](Signature.md) |
| `digest` | `Uint8Array` |

#### Returns

`boolean`

#### Inherited from

UnsignedPublicKey.verify

#### Defined in

[crypto/PublicKey.ts:73](https://github.com/xmtp/xmtp-js/blob/36ff630/src/crypto/PublicKey.ts#L73)

___

### verifyKey

**verifyKey**(`pub`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pub` | [`SignedPublicKey`](SignedPublicKey.md) \| [`PublicKey`](PublicKey.md) |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

UnsignedPublicKey.verifyKey

#### Defined in

[crypto/PublicKey.ts:85](https://github.com/xmtp/xmtp-js/blob/36ff630/src/crypto/PublicKey.ts#L85)

___

### walletSignatureAddress

**walletSignatureAddress**(): `string`

#### Returns

`string`

#### Defined in

[crypto/PublicKey.ts:466](https://github.com/xmtp/xmtp-js/blob/36ff630/src/crypto/PublicKey.ts#L466)

___

### fromBytes

`Static` **fromBytes**(`bytes`): [`PublicKey`](PublicKey.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |

#### Returns

[`PublicKey`](PublicKey.md)

#### Overrides

UnsignedPublicKey.fromBytes

#### Defined in

[crypto/PublicKey.ts:484](https://github.com/xmtp/xmtp-js/blob/36ff630/src/crypto/PublicKey.ts#L484)
