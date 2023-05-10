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

[crypto/PublicKey.ts:222](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/crypto/PublicKey.ts#L222)

## Properties

### createdNs

 **createdNs**: `Long`

#### Inherited from

UnsignedPublicKey.createdNs

#### Defined in

[crypto/PublicKey.ts:34](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/crypto/PublicKey.ts#L34)

___

### secp256k1Uncompressed

 **secp256k1Uncompressed**: `secp256k1Uncompressed`

#### Implementation of

publicKey.PublicKey.secp256k1Uncompressed

#### Inherited from

UnsignedPublicKey.secp256k1Uncompressed

#### Defined in

[crypto/PublicKey.ts:35](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/crypto/PublicKey.ts#L35)

___

### signature

 `Optional` **signature**: [`Signature`](Signature.md)

#### Implementation of

publicKey.PublicKey.signature

#### Defined in

[crypto/PublicKey.ts:220](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/crypto/PublicKey.ts#L220)

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

[crypto/PublicKey.ts:243](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/crypto/PublicKey.ts#L243)

## Methods

### bytesToSign

**bytesToSign**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[crypto/PublicKey.ts:247](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/crypto/PublicKey.ts#L247)

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

[crypto/PublicKey.ts:84](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/crypto/PublicKey.ts#L84)

___

### generated

**generated**(): `undefined` \| `Date`

#### Returns

`undefined` \| `Date`

#### Inherited from

UnsignedPublicKey.generated

#### Defined in

[crypto/PublicKey.ts:47](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/crypto/PublicKey.ts#L47)

___

### getEthereumAddress

**getEthereumAddress**(): `string`

#### Returns

`string`

#### Inherited from

UnsignedPublicKey.getEthereumAddress

#### Defined in

[crypto/PublicKey.ts:92](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/crypto/PublicKey.ts#L92)

___

### isFromLegacyKey

**isFromLegacyKey**(): `boolean`

#### Returns

`boolean`

#### Inherited from

UnsignedPublicKey.isFromLegacyKey

#### Defined in

[crypto/PublicKey.ts:51](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/crypto/PublicKey.ts#L51)

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

[crypto/PublicKey.ts:255](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/crypto/PublicKey.ts#L255)

___

### toBytes

**toBytes**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Overrides

UnsignedPublicKey.toBytes

#### Defined in

[crypto/PublicKey.ts:290](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/crypto/PublicKey.ts#L290)

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

[crypto/PublicKey.ts:63](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/crypto/PublicKey.ts#L63)

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

[crypto/PublicKey.ts:75](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/crypto/PublicKey.ts#L75)

___

### walletSignatureAddress

**walletSignatureAddress**(): `string`

#### Returns

`string`

#### Defined in

[crypto/PublicKey.ts:276](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/crypto/PublicKey.ts#L276)

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

[crypto/PublicKey.ts:294](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/crypto/PublicKey.ts#L294)
