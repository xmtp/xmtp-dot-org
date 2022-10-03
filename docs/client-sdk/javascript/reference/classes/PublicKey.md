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

[crypto/PublicKey.ts:200](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/crypto/PublicKey.ts#L200)

## Properties

### createdNs

 **createdNs**: `Long`

#### Inherited from

UnsignedPublicKey.createdNs

#### Defined in

[crypto/PublicKey.ts:33](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/crypto/PublicKey.ts#L33)

___

### secp256k1Uncompressed

 **secp256k1Uncompressed**: `secp256k1Uncompressed`

#### Implementation of

publicKey.PublicKey.secp256k1Uncompressed

#### Inherited from

UnsignedPublicKey.secp256k1Uncompressed

#### Defined in

[crypto/PublicKey.ts:34](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/crypto/PublicKey.ts#L34)

___

### signature

 `Optional` **signature**: `default`

#### Implementation of

publicKey.PublicKey.signature

#### Defined in

[crypto/PublicKey.ts:198](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/crypto/PublicKey.ts#L198)

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

[crypto/PublicKey.ts:210](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/crypto/PublicKey.ts#L210)

## Methods

### bytesToSign

**bytesToSign**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[crypto/PublicKey.ts:214](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/crypto/PublicKey.ts#L214)

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

[crypto/PublicKey.ts:79](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/crypto/PublicKey.ts#L79)

___

### generated

**generated**(): `undefined` \| `Date`

#### Returns

`undefined` \| `Date`

#### Inherited from

UnsignedPublicKey.generated

#### Defined in

[crypto/PublicKey.ts:46](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/crypto/PublicKey.ts#L46)

___

### getEthereumAddress

**getEthereumAddress**(): `string`

#### Returns

`string`

#### Inherited from

UnsignedPublicKey.getEthereumAddress

#### Defined in

[crypto/PublicKey.ts:87](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/crypto/PublicKey.ts#L87)

___

### signWithWallet

**signWithWallet**(`wallet`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `wallet` | `Signer` |

#### Returns

`Promise`<`void`\>

#### Defined in

[crypto/PublicKey.ts:222](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/crypto/PublicKey.ts#L222)

___

### toBytes

**toBytes**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Overrides

UnsignedPublicKey.toBytes

#### Defined in

[crypto/PublicKey.ts:257](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/crypto/PublicKey.ts#L257)

___

### verify

**verify**(`signature`, `digest`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `signature` | `default` |
| `digest` | `Uint8Array` |

#### Returns

`boolean`

#### Inherited from

UnsignedPublicKey.verify

#### Defined in

[crypto/PublicKey.ts:58](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/crypto/PublicKey.ts#L58)

___

### verifyKey

**verifyKey**(`pub`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pub` | `SignedPublicKey` \| [`PublicKey`](PublicKey.md) |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

UnsignedPublicKey.verifyKey

#### Defined in

[crypto/PublicKey.ts:70](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/crypto/PublicKey.ts#L70)

___

### walletSignatureAddress

**walletSignatureAddress**(): `string`

#### Returns

`string`

#### Defined in

[crypto/PublicKey.ts:243](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/crypto/PublicKey.ts#L243)

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

[crypto/PublicKey.ts:261](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/crypto/PublicKey.ts#L261)
