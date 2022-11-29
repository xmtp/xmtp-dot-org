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

[crypto/PublicKeyBundle.ts:59](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/crypto/PublicKeyBundle.ts#L59)

## Properties

### identityKey

 **identityKey**: [`PublicKey`](PublicKey.md)

#### Implementation of

publicKey.PublicKeyBundle.identityKey

#### Defined in

[crypto/PublicKeyBundle.ts:56](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/crypto/PublicKeyBundle.ts#L56)

___

### preKey

 **preKey**: [`PublicKey`](PublicKey.md)

#### Implementation of

publicKey.PublicKeyBundle.preKey

#### Defined in

[crypto/PublicKeyBundle.ts:57](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/crypto/PublicKeyBundle.ts#L57)

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

[crypto/PublicKeyBundle.ts:70](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/crypto/PublicKeyBundle.ts#L70)

___

### toBytes

**toBytes**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[crypto/PublicKeyBundle.ts:81](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/crypto/PublicKeyBundle.ts#L81)

___

### walletSignatureAddress

**walletSignatureAddress**(): `string`

#### Returns

`string`

#### Defined in

[crypto/PublicKeyBundle.ts:77](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/crypto/PublicKeyBundle.ts#L77)

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

[crypto/PublicKeyBundle.ts:85](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/crypto/PublicKeyBundle.ts#L85)
