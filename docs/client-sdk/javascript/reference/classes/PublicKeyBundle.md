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

[crypto/PublicKeyBundle.ts:100](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/crypto/PublicKeyBundle.ts#L100)

## Properties

### identityKey

 **identityKey**: [`PublicKey`](PublicKey.md)

#### Implementation of

publicKey.PublicKeyBundle.identityKey

#### Defined in

[crypto/PublicKeyBundle.ts:97](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/crypto/PublicKeyBundle.ts#L97)

___

### preKey

 **preKey**: [`PublicKey`](PublicKey.md)

#### Implementation of

publicKey.PublicKeyBundle.preKey

#### Defined in

[crypto/PublicKeyBundle.ts:98](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/crypto/PublicKeyBundle.ts#L98)

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

[crypto/PublicKeyBundle.ts:111](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/crypto/PublicKeyBundle.ts#L111)

___

### toBytes

**toBytes**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[crypto/PublicKeyBundle.ts:122](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/crypto/PublicKeyBundle.ts#L122)

___

### walletSignatureAddress

**walletSignatureAddress**(): `string`

#### Returns

`string`

#### Defined in

[crypto/PublicKeyBundle.ts:118](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/crypto/PublicKeyBundle.ts#L118)

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

[crypto/PublicKeyBundle.ts:126](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/crypto/PublicKeyBundle.ts#L126)
