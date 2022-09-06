<!--[@xmtp/xmtp-js](../README.md) / [Exports](../modules.md) / PrivateKeyBundle-->

# Class: PrivateKeyBundle

## Implements

- `PrivateKeyBundleV1`

<!--## Table of contents

### Constructors

- [constructor](PrivateKeyBundle.md#constructor)

### Properties

- [identityKey](PrivateKeyBundle.md#identitykey)
- [preKeys](PrivateKeyBundle.md#prekeys)

### Methods

- [addPreKey](PrivateKeyBundle.md#addprekey)
- [encode](PrivateKeyBundle.md#encode)
- [findPreKey](PrivateKeyBundle.md#findprekey)
- [getCurrentPreKey](PrivateKeyBundle.md#getcurrentprekey)
- [getPublicKeyBundle](PrivateKeyBundle.md#getpublickeybundle)
- [sharedSecret](PrivateKeyBundle.md#sharedsecret)
- [toEncryptedBytes](PrivateKeyBundle.md#toencryptedbytes)
- [decode](PrivateKeyBundle.md#decode)
- [fromEncryptedBytes](PrivateKeyBundle.md#fromencryptedbytes)
- [generate](PrivateKeyBundle.md#generate)
- [storageSigRequestText](PrivateKeyBundle.md#storagesigrequesttext)-->

## Constructors

### constructor

• **new PrivateKeyBundle**(`identityKey`, `preKeys?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `identityKey` | [`PrivateKey`](PrivateKey.md) |
| `preKeys?` | [`PrivateKey`](PrivateKey.md)[] |

#### Defined in

[crypto/PrivateKeyBundle.ts:18](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/crypto/PrivateKeyBundle.ts#L18)

## Properties

### identityKey

• **identityKey**: [`PrivateKey`](PrivateKey.md)

#### Implementation of

proto.PrivateKeyBundleV1.identityKey

#### Defined in

[crypto/PrivateKeyBundle.ts:15](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/crypto/PrivateKeyBundle.ts#L15)

___

### preKeys

• **preKeys**: [`PrivateKey`](PrivateKey.md)[]

#### Implementation of

proto.PrivateKeyBundleV1.preKeys

#### Defined in

[crypto/PrivateKeyBundle.ts:16](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/crypto/PrivateKeyBundle.ts#L16)

## Methods

### addPreKey

▸ **addPreKey**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[crypto/PrivateKeyBundle.ts:50](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/crypto/PrivateKeyBundle.ts#L50)

___

### encode

▸ **encode**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[crypto/PrivateKeyBundle.ts:142](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/crypto/PrivateKeyBundle.ts#L142)

___

### findPreKey

▸ **findPreKey**(`which`): [`PrivateKey`](PrivateKey.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `which` | [`PublicKey`](PublicKey.md) |

#### Returns

[`PrivateKey`](PrivateKey.md)

#### Defined in

[crypto/PrivateKeyBundle.ts:41](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/crypto/PrivateKeyBundle.ts#L41)

___

### getCurrentPreKey

▸ **getCurrentPreKey**(): [`PrivateKey`](PrivateKey.md)

#### Returns

[`PrivateKey`](PrivateKey.md)

#### Defined in

[crypto/PrivateKeyBundle.ts:36](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/crypto/PrivateKeyBundle.ts#L36)

___

### getPublicKeyBundle

▸ **getPublicKeyBundle**(): [`PublicKeyBundle`](PublicKeyBundle.md)

#### Returns

[`PublicKeyBundle`](PublicKeyBundle.md)

#### Defined in

[crypto/PrivateKeyBundle.ts:57](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/crypto/PrivateKeyBundle.ts#L57)

___

### sharedSecret

▸ **sharedSecret**(`peer`, `myPreKey`, `isRecipient`): `Promise`<`Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `peer` | [`PublicKeyBundle`](PublicKeyBundle.md) |
| `myPreKey` | [`PublicKey`](PublicKey.md) |
| `isRecipient` | `boolean` |

#### Returns

`Promise`<`Uint8Array`\>

#### Defined in

[crypto/PrivateKeyBundle.ts:69](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/crypto/PrivateKeyBundle.ts#L69)

___

### toEncryptedBytes

▸ **toEncryptedBytes**(`wallet`): `Promise`<`Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `wallet` | `Signer` |

#### Returns

`Promise`<`Uint8Array`\>

#### Defined in

[crypto/PrivateKeyBundle.ts:115](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/crypto/PrivateKeyBundle.ts#L115)

___

### decode

▸ `Static` **decode**(`bytes`): [`PrivateKeyBundle`](PrivateKeyBundle.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |

#### Returns

[`PrivateKeyBundle`](PrivateKeyBundle.md)

#### Defined in

[crypto/PrivateKeyBundle.ts:146](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/crypto/PrivateKeyBundle.ts#L146)

___

### fromEncryptedBytes

▸ `Static` **fromEncryptedBytes**(`wallet`, `bytes`): `Promise`<[`PrivateKeyBundle`](PrivateKeyBundle.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `wallet` | `Signer` |
| `bytes` | `Uint8Array` |

#### Returns

`Promise`<[`PrivateKeyBundle`](PrivateKeyBundle.md)\>

#### Defined in

[crypto/PrivateKeyBundle.ts:158](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/crypto/PrivateKeyBundle.ts#L158)

___

### generate

▸ `Static` **generate**(`wallet?`): `Promise`<[`PrivateKeyBundle`](PrivateKeyBundle.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `wallet?` | `Signer` |

#### Returns

`Promise`<[`PrivateKeyBundle`](PrivateKeyBundle.md)\>

#### Defined in

[crypto/PrivateKeyBundle.ts:25](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/crypto/PrivateKeyBundle.ts#L25)

___

### storageSigRequestText

▸ `Static` **storageSigRequestText**(`preKey`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `preKey` | `Uint8Array` |

#### Returns

`string`

#### Defined in

[crypto/PrivateKeyBundle.ts:101](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/crypto/PrivateKeyBundle.ts#L101)
