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

[crypto/PublicKey.ts:125](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/crypto/PublicKey.ts#L125)

## Properties

### createdNs

 **createdNs**: `Long`

#### Inherited from

UnsignedPublicKey.createdNs

#### Defined in

[crypto/PublicKey.ts:44](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/crypto/PublicKey.ts#L44)

___

### keyBytes

 **keyBytes**: `Uint8Array`

#### Implementation of

publicKey.SignedPublicKey.keyBytes

#### Defined in

[crypto/PublicKey.ts:122](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/crypto/PublicKey.ts#L122)

___

### secp256k1Uncompressed

 **secp256k1Uncompressed**: `secp256k1Uncompressed`

#### Inherited from

UnsignedPublicKey.secp256k1Uncompressed

#### Defined in

[crypto/PublicKey.ts:45](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/crypto/PublicKey.ts#L45)

___

### signature

 **signature**: [`Signature`](Signature.md)

#### Implementation of

publicKey.SignedPublicKey.signature

#### Defined in

[crypto/PublicKey.ts:123](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/crypto/PublicKey.ts#L123)

## Accessors

### timestamp

`get` **timestamp**(): `Long`

#### Returns

`Long`

#### Inherited from

UnsignedPublicKey.timestamp

#### Defined in

[crypto/PublicKey.ts:66](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/crypto/PublicKey.ts#L66)

___

### unsignedKey

`get` **unsignedKey**(): `UnsignedPublicKey`

#### Returns

`UnsignedPublicKey`

#### Defined in

[crypto/PublicKey.ts:138](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/crypto/PublicKey.ts#L138)

## Methods

### bytesToSign

**bytesToSign**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[crypto/PublicKey.ts:173](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/crypto/PublicKey.ts#L173)

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

[crypto/PublicKey.ts:165](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/crypto/PublicKey.ts#L165)

___

### generated

**generated**(): `undefined` \| `Date`

#### Returns

`undefined` \| `Date`

#### Inherited from

UnsignedPublicKey.generated

#### Defined in

[crypto/PublicKey.ts:57](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/crypto/PublicKey.ts#L57)

___

### getEthereumAddress

**getEthereumAddress**(): `string`

#### Returns

`string`

#### Inherited from

UnsignedPublicKey.getEthereumAddress

#### Defined in

[crypto/PublicKey.ts:102](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/crypto/PublicKey.ts#L102)

___

### isFromLegacyKey

**isFromLegacyKey**(): `boolean`

#### Returns

`boolean`

#### Inherited from

UnsignedPublicKey.isFromLegacyKey

#### Defined in

[crypto/PublicKey.ts:61](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/crypto/PublicKey.ts#L61)

___

### signerKey

**signerKey**(): `Promise`<`undefined` \| `UnsignedPublicKey`\>

#### Returns

`Promise`<`undefined` \| `UnsignedPublicKey`\>

#### Defined in

[crypto/PublicKey.ts:146](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/crypto/PublicKey.ts#L146)

___

### toBytes

**toBytes**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Overrides

UnsignedPublicKey.toBytes

#### Defined in

[crypto/PublicKey.ts:178](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/crypto/PublicKey.ts#L178)

___

### toLegacyKey

**toLegacyKey**(): [`PublicKey`](PublicKey.md)

#### Returns

[`PublicKey`](PublicKey.md)

#### Defined in

[crypto/PublicKey.ts:187](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/crypto/PublicKey.ts#L187)

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

[crypto/PublicKey.ts:73](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/crypto/PublicKey.ts#L73)

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

[crypto/PublicKey.ts:85](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/crypto/PublicKey.ts#L85)

___

### walletSignatureAddress

**walletSignatureAddress**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

[crypto/PublicKey.ts:153](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/crypto/PublicKey.ts#L153)

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

[crypto/PublicKey.ts:183](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/crypto/PublicKey.ts#L183)

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

[crypto/PublicKey.ts:204](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/crypto/PublicKey.ts#L204)
