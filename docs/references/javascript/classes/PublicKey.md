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

[crypto/PublicKey.ts:202](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/crypto/PublicKey.ts#L202)

## Properties

### createdNs

 **createdNs**: `Long`

#### Inherited from

UnsignedPublicKey.createdNs

#### Defined in

[crypto/PublicKey.ts:33](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/crypto/PublicKey.ts#L33)

___

### secp256k1Uncompressed

 **secp256k1Uncompressed**: `secp256k1Uncompressed`

#### Implementation of

publicKey.PublicKey.secp256k1Uncompressed

#### Inherited from

UnsignedPublicKey.secp256k1Uncompressed

#### Defined in

[crypto/PublicKey.ts:34](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/crypto/PublicKey.ts#L34)

___

### signature

 `Optional` **signature**: `default`

#### Implementation of

publicKey.PublicKey.signature

#### Defined in

[crypto/PublicKey.ts:200](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/crypto/PublicKey.ts#L200)

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

[crypto/PublicKey.ts:212](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/crypto/PublicKey.ts#L212)

## Methods

### bytesToSign

**bytesToSign**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[crypto/PublicKey.ts:216](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/crypto/PublicKey.ts#L216)

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

[crypto/PublicKey.ts:81](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/crypto/PublicKey.ts#L81)

___

### generated

**generated**(): `undefined` \| `Date`

#### Returns

`undefined` \| `Date`

#### Inherited from

UnsignedPublicKey.generated

#### Defined in

[crypto/PublicKey.ts:46](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/crypto/PublicKey.ts#L46)

___

### getEthereumAddress

**getEthereumAddress**(): `string`

#### Returns

`string`

#### Inherited from

UnsignedPublicKey.getEthereumAddress

#### Defined in

[crypto/PublicKey.ts:89](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/crypto/PublicKey.ts#L89)

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

[crypto/PublicKey.ts:224](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/crypto/PublicKey.ts#L224)

___

### toBytes

**toBytes**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Overrides

UnsignedPublicKey.toBytes

#### Defined in

[crypto/PublicKey.ts:259](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/crypto/PublicKey.ts#L259)

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

[crypto/PublicKey.ts:60](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/crypto/PublicKey.ts#L60)

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

[crypto/PublicKey.ts:72](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/crypto/PublicKey.ts#L72)

___

### walletSignatureAddress

**walletSignatureAddress**(): `string`

#### Returns

`string`

#### Defined in

[crypto/PublicKey.ts:245](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/crypto/PublicKey.ts#L245)

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

[crypto/PublicKey.ts:263](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/crypto/PublicKey.ts#L263)
