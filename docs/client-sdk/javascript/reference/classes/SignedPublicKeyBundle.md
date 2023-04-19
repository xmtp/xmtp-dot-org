<!---->
# Class: SignedPublicKeyBundle

## Implements

- `SignedPublicKeyBundle`

## Constructors

### constructor

**new SignedPublicKeyBundle**(`bundle`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bundle` | `SignedPublicKeyBundle` |

#### Defined in

[crypto/PublicKeyBundle.ts:41](https://github.com/xmtp/xmtp-js/blob/36ff630/src/crypto/PublicKeyBundle.ts#L41)

## Properties

### identityKey

 **identityKey**: [`SignedPublicKey`](SignedPublicKey.md)

#### Implementation of

publicKey.SignedPublicKeyBundle.identityKey

#### Defined in

[crypto/PublicKeyBundle.ts:38](https://github.com/xmtp/xmtp-js/blob/36ff630/src/crypto/PublicKeyBundle.ts#L38)

___

### preKey

 **preKey**: [`SignedPublicKey`](SignedPublicKey.md)

#### Implementation of

publicKey.SignedPublicKeyBundle.preKey

#### Defined in

[crypto/PublicKeyBundle.ts:39](https://github.com/xmtp/xmtp-js/blob/36ff630/src/crypto/PublicKeyBundle.ts#L39)

## Methods

### equals

**equals**(`other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`SignedPublicKeyBundle`](SignedPublicKeyBundle.md) |

#### Returns

`boolean`

#### Defined in

[crypto/PublicKeyBundle.ts:56](https://github.com/xmtp/xmtp-js/blob/36ff630/src/crypto/PublicKeyBundle.ts#L56)

___

### isFromLegacyBundle

**isFromLegacyBundle**(): `boolean`

#### Returns

`boolean`

#### Defined in

[crypto/PublicKeyBundle.ts:67](https://github.com/xmtp/xmtp-js/blob/36ff630/src/crypto/PublicKeyBundle.ts#L67)

___

### toBytes

**toBytes**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[crypto/PublicKeyBundle.ts:63](https://github.com/xmtp/xmtp-js/blob/36ff630/src/crypto/PublicKeyBundle.ts#L63)

___

### toLegacyBundle

**toLegacyBundle**(): [`PublicKeyBundle`](PublicKeyBundle.md)

#### Returns

[`PublicKeyBundle`](PublicKeyBundle.md)

#### Defined in

[crypto/PublicKeyBundle.ts:71](https://github.com/xmtp/xmtp-js/blob/36ff630/src/crypto/PublicKeyBundle.ts#L71)

___

### walletSignatureAddress

**walletSignatureAddress**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

[crypto/PublicKeyBundle.ts:52](https://github.com/xmtp/xmtp-js/blob/36ff630/src/crypto/PublicKeyBundle.ts#L52)

___

### fromBytes

`Static` **fromBytes**(`bytes`): [`SignedPublicKeyBundle`](SignedPublicKeyBundle.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |

#### Returns

[`SignedPublicKeyBundle`](SignedPublicKeyBundle.md)

#### Defined in

[crypto/PublicKeyBundle.ts:78](https://github.com/xmtp/xmtp-js/blob/36ff630/src/crypto/PublicKeyBundle.ts#L78)

___

### fromLegacyBundle

`Static` **fromLegacyBundle**(`bundle`): [`SignedPublicKeyBundle`](SignedPublicKeyBundle.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bundle` | [`PublicKeyBundle`](PublicKeyBundle.md) |

#### Returns

[`SignedPublicKeyBundle`](SignedPublicKeyBundle.md)

#### Defined in

[crypto/PublicKeyBundle.ts:83](https://github.com/xmtp/xmtp-js/blob/36ff630/src/crypto/PublicKeyBundle.ts#L83)
