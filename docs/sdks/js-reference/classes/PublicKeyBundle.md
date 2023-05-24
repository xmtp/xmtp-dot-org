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

[crypto/PublicKeyBundle.ts:70](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/crypto/PublicKeyBundle.ts#L70)

## Properties

### identityKey

 **identityKey**: [`PublicKey`](PublicKey.md)

#### Implementation of

publicKey.PublicKeyBundle.identityKey

#### Defined in

[crypto/PublicKeyBundle.ts:67](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/crypto/PublicKeyBundle.ts#L67)

___

### preKey

 **preKey**: [`PublicKey`](PublicKey.md)

#### Implementation of

publicKey.PublicKeyBundle.preKey

#### Defined in

[crypto/PublicKeyBundle.ts:68](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/crypto/PublicKeyBundle.ts#L68)

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

[crypto/PublicKeyBundle.ts:81](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/crypto/PublicKeyBundle.ts#L81)

___

### toBytes

**toBytes**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[crypto/PublicKeyBundle.ts:92](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/crypto/PublicKeyBundle.ts#L92)

___

### walletSignatureAddress

**walletSignatureAddress**(): `string`

#### Returns

`string`

#### Defined in

[crypto/PublicKeyBundle.ts:88](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/crypto/PublicKeyBundle.ts#L88)

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

[crypto/PublicKeyBundle.ts:96](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/crypto/PublicKeyBundle.ts#L96)
