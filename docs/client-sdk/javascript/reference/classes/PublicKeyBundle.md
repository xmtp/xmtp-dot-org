<!---->
# Class: PublicKeyBundle

## Implements

- `PublicKeyBundle`

## Constructors

### constructor

**new PublicKeyBundle**(`bundle`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bundle` | `PublicKeyBundle` |

#### Defined in

[crypto/PublicKeyBundle.ts:57](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/crypto/PublicKeyBundle.ts#L57)

## Properties

### identityKey

 **identityKey**: [`PublicKey`](PublicKey.md)

#### Implementation of

publicKey.PublicKeyBundle.identityKey

#### Defined in

[crypto/PublicKeyBundle.ts:54](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/crypto/PublicKeyBundle.ts#L54)

___

### preKey

 **preKey**: [`PublicKey`](PublicKey.md)

#### Implementation of

publicKey.PublicKeyBundle.preKey

#### Defined in

[crypto/PublicKeyBundle.ts:55](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/crypto/PublicKeyBundle.ts#L55)

## Methods

### equals

**equals**(`other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`PublicKeyBundle`](PublicKeyBundle.md) |

#### Returns

`boolean`

#### Defined in

[crypto/PublicKeyBundle.ts:68](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/crypto/PublicKeyBundle.ts#L68)

___

### toBytes

**toBytes**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[crypto/PublicKeyBundle.ts:79](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/crypto/PublicKeyBundle.ts#L79)

___

### walletSignatureAddress

**walletSignatureAddress**(): `string`

#### Returns

`string`

#### Defined in

[crypto/PublicKeyBundle.ts:75](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/crypto/PublicKeyBundle.ts#L75)

___

### fromBytes

`Static` **fromBytes**(`bytes`): [`PublicKeyBundle`](PublicKeyBundle.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |

#### Returns

[`PublicKeyBundle`](PublicKeyBundle.md)

#### Defined in

[crypto/PublicKeyBundle.ts:83](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/crypto/PublicKeyBundle.ts#L83)
