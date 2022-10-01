<!---->
# Class: PrivateKeyBundleV2

## Implements

- `PrivateKeyBundleV2`

## Constructors

### constructor

**new PrivateKeyBundleV2**(`bundle`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bundle` | `PrivateKeyBundleV2` |

#### Defined in

[crypto/PrivateKeyBundle.ts:17](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/crypto/PrivateKeyBundle.ts#L17)

## Properties

### identityKey

 **identityKey**: `SignedPrivateKey`

#### Implementation of

proto.PrivateKeyBundleV2.identityKey

#### Defined in

[crypto/PrivateKeyBundle.ts:13](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/crypto/PrivateKeyBundle.ts#L13)

___

### preKeys

 **preKeys**: `SignedPrivateKey`[]

#### Implementation of

proto.PrivateKeyBundleV2.preKeys

#### Defined in

[crypto/PrivateKeyBundle.ts:14](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/crypto/PrivateKeyBundle.ts#L14)

___

### version

 **version**: `number` = `2`

#### Defined in

[crypto/PrivateKeyBundle.ts:15](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/crypto/PrivateKeyBundle.ts#L15)

## Methods

### addPreKey

**addPreKey**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[crypto/PrivateKeyBundle.ts:54](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/crypto/PrivateKeyBundle.ts#L54)

___

### encode

**encode**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[crypto/PrivateKeyBundle.ts:104](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/crypto/PrivateKeyBundle.ts#L104)

___

### equals

**equals**(`other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`PrivateKeyBundleV2`](PrivateKeyBundleV2.md) |

#### Returns

`boolean`

#### Defined in

[crypto/PrivateKeyBundle.ts:108](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/crypto/PrivateKeyBundle.ts#L108)

___

### findPreKey

**findPreKey**(`which`): `SignedPrivateKey`

#### Parameters

| Name | Type |
| :------ | :------ |
| `which` | `SignedPublicKey` |

#### Returns

`SignedPrivateKey`

#### Defined in

[crypto/PrivateKeyBundle.ts:45](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/crypto/PrivateKeyBundle.ts#L45)

___

### getCurrentPreKey

**getCurrentPreKey**(): `SignedPrivateKey`

#### Returns

`SignedPrivateKey`

#### Defined in

[crypto/PrivateKeyBundle.ts:40](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/crypto/PrivateKeyBundle.ts#L40)

___

### getPublicKeyBundle

**getPublicKeyBundle**(): [`SignedPublicKeyBundle`](SignedPublicKeyBundle.md)

#### Returns

[`SignedPublicKeyBundle`](SignedPublicKeyBundle.md)

#### Defined in

[crypto/PrivateKeyBundle.ts:60](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/crypto/PrivateKeyBundle.ts#L60)

___

### sharedSecret

**sharedSecret**(`peer`, `myPreKey`, `isRecipient`): `Promise`<`Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `peer` | [`SignedPublicKeyBundle`](SignedPublicKeyBundle.md) |
| `myPreKey` | `SignedPublicKey` |
| `isRecipient` | `boolean` |

#### Returns

`Promise`<`Uint8Array`\>

#### Defined in

[crypto/PrivateKeyBundle.ts:72](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/crypto/PrivateKeyBundle.ts#L72)

___

### fromLegacyBundle

`Static` **fromLegacyBundle**(`bundle`): [`PrivateKeyBundleV2`](PrivateKeyBundleV2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bundle` | [`PrivateKeyBundleV1`](PrivateKeyBundleV1.md) |

#### Returns

[`PrivateKeyBundleV2`](PrivateKeyBundleV2.md)

#### Defined in

[crypto/PrivateKeyBundle.ts:120](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/crypto/PrivateKeyBundle.ts#L120)

___

### generate

`Static` **generate**(`wallet`): `Promise`<[`PrivateKeyBundleV2`](PrivateKeyBundleV2.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `wallet` | `Signer` |

#### Returns

`Promise`<[`PrivateKeyBundleV2`](PrivateKeyBundleV2.md)\>

#### Defined in

[crypto/PrivateKeyBundle.ts:27](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/crypto/PrivateKeyBundle.ts#L27)
