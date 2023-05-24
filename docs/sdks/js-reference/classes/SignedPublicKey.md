<!---->
# Class: SignedPublicKey

## Hierarchy

- `UnsignedPublicKey`

  ↳ **`SignedPublicKey`**

## Implements

- `SignedPublicKey`

## Constructors

### constructor

**new SignedPublicKey**(`obj`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `SignedPublicKey` |

#### Overrides

UnsignedPublicKey.constructor

#### Defined in

[crypto/PublicKey.ts:115](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/crypto/PublicKey.ts#L115)

## Properties

### createdNs

 **createdNs**: `Long`

#### Inherited from

UnsignedPublicKey.createdNs

#### Defined in

[crypto/PublicKey.ts:34](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/crypto/PublicKey.ts#L34)

___

### keyBytes

 **keyBytes**: `Uint8Array`

#### Implementation of

publicKey.SignedPublicKey.keyBytes

#### Defined in

[crypto/PublicKey.ts:112](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/crypto/PublicKey.ts#L112)

___

### secp256k1Uncompressed

 **secp256k1Uncompressed**: `secp256k1Uncompressed`

#### Inherited from

UnsignedPublicKey.secp256k1Uncompressed

#### Defined in

[crypto/PublicKey.ts:35](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/crypto/PublicKey.ts#L35)

___

### signature

 **signature**: [`Signature`](Signature.md)

#### Implementation of

publicKey.SignedPublicKey.signature

#### Defined in

[crypto/PublicKey.ts:113](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/crypto/PublicKey.ts#L113)

## Accessors

### timestamp

`get` **timestamp**(): `Long`

#### Returns

`Long`

#### Inherited from

UnsignedPublicKey.timestamp

#### Defined in

[crypto/PublicKey.ts:56](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/crypto/PublicKey.ts#L56)

___

### unsignedKey

`get` **unsignedKey**(): `UnsignedPublicKey`

#### Returns

`UnsignedPublicKey`

#### Defined in

[crypto/PublicKey.ts:128](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/crypto/PublicKey.ts#L128)

## Methods

### bytesToSign

**bytesToSign**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[crypto/PublicKey.ts:163](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/crypto/PublicKey.ts#L163)

___

### equals

**equals**(`other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`SignedPublicKey`](SignedPublicKey.md) |

#### Returns

`boolean`

#### Overrides

UnsignedPublicKey.equals

#### Defined in

[crypto/PublicKey.ts:155](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/crypto/PublicKey.ts#L155)

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

### signerKey

**signerKey**(): `Promise`<`undefined` \| `UnsignedPublicKey`\>

#### Returns

`Promise`<`undefined` \| `UnsignedPublicKey`\>

#### Defined in

[crypto/PublicKey.ts:136](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/crypto/PublicKey.ts#L136)

___

### toBytes

**toBytes**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Overrides

UnsignedPublicKey.toBytes

#### Defined in

[crypto/PublicKey.ts:168](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/crypto/PublicKey.ts#L168)

___

### toLegacyKey

**toLegacyKey**(): [`PublicKey`](PublicKey.md)

#### Returns

[`PublicKey`](PublicKey.md)

#### Defined in

[crypto/PublicKey.ts:177](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/crypto/PublicKey.ts#L177)

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

**walletSignatureAddress**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

[crypto/PublicKey.ts:143](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/crypto/PublicKey.ts#L143)

___

### fromBytes

`Static` **fromBytes**(`bytes`): [`SignedPublicKey`](SignedPublicKey.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |

#### Returns

[`SignedPublicKey`](SignedPublicKey.md)

#### Overrides

UnsignedPublicKey.fromBytes

#### Defined in

[crypto/PublicKey.ts:173](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/crypto/PublicKey.ts#L173)

___

### fromLegacyKey

`Static` **fromLegacyKey**(`legacyKey`, `signedByWallet?`): [`SignedPublicKey`](SignedPublicKey.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `legacyKey` | [`PublicKey`](PublicKey.md) |
| `signedByWallet?` | `boolean` |

#### Returns

[`SignedPublicKey`](SignedPublicKey.md)

#### Defined in

[crypto/PublicKey.ts:194](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/crypto/PublicKey.ts#L194)
