<!---->
# Class: PrivateKeyBundleV1

## Implements

- `PrivateKeyBundleV1`

## Constructors

### constructor

**new PrivateKeyBundleV1**(`bundle`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bundle` | `PrivateKeyBundleV1` |

#### Defined in

[crypto/PrivateKeyBundle.ts:138](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/crypto/PrivateKeyBundle.ts#L138)

## Properties

### identityKey

 **identityKey**: [`PrivateKey`](PrivateKey.md)

#### Implementation of

proto.PrivateKeyBundleV1.identityKey

#### Defined in

[crypto/PrivateKeyBundle.ts:134](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/crypto/PrivateKeyBundle.ts#L134)

___

### preKeys

 **preKeys**: [`PrivateKey`](PrivateKey.md)[]

#### Implementation of

proto.PrivateKeyBundleV1.preKeys

#### Defined in

[crypto/PrivateKeyBundle.ts:135](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/crypto/PrivateKeyBundle.ts#L135)

___

### version

 **version**: `number` = `1`

#### Defined in

[crypto/PrivateKeyBundle.ts:136](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/crypto/PrivateKeyBundle.ts#L136)

## Methods

### addPreKey

**addPreKey**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[crypto/PrivateKeyBundle.ts:176](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/crypto/PrivateKeyBundle.ts#L176)

___

### encode

**encode**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[crypto/PrivateKeyBundle.ts:227](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/crypto/PrivateKeyBundle.ts#L227)

___

### findPreKey

**findPreKey**(`which`): [`PrivateKey`](PrivateKey.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `which` | [`PublicKey`](PublicKey.md) |

#### Returns

[`PrivateKey`](PrivateKey.md)

#### Defined in

[crypto/PrivateKeyBundle.ts:167](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/crypto/PrivateKeyBundle.ts#L167)

___

### getCurrentPreKey

**getCurrentPreKey**(): [`PrivateKey`](PrivateKey.md)

#### Returns

[`PrivateKey`](PrivateKey.md)

#### Defined in

[crypto/PrivateKeyBundle.ts:162](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/crypto/PrivateKeyBundle.ts#L162)

___

### getPublicKeyBundle

**getPublicKeyBundle**(): [`PublicKeyBundle`](PublicKeyBundle.md)

#### Returns

[`PublicKeyBundle`](PublicKeyBundle.md)

#### Defined in

[crypto/PrivateKeyBundle.ts:183](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/crypto/PrivateKeyBundle.ts#L183)

___

### sharedSecret

**sharedSecret**(`peer`, `myPreKey`, `isRecipient`): `Promise`<`Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `peer` | [`SignedPublicKeyBundle`](SignedPublicKeyBundle.md) \| [`PublicKeyBundle`](PublicKeyBundle.md) |
| `myPreKey` | [`PublicKey`](PublicKey.md) |
| `isRecipient` | `boolean` |

#### Returns

`Promise`<`Uint8Array`\>

#### Defined in

[crypto/PrivateKeyBundle.ts:195](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/crypto/PrivateKeyBundle.ts#L195)

___

### generate

`Static` **generate**(`wallet?`): `Promise`<[`PrivateKeyBundleV1`](PrivateKeyBundleV1.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `wallet?` | `Signer` |

#### Returns

`Promise`<[`PrivateKeyBundleV1`](PrivateKeyBundleV1.md)\>

#### Defined in

[crypto/PrivateKeyBundle.ts:148](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/crypto/PrivateKeyBundle.ts#L148)
