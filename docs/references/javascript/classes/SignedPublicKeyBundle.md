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

[crypto/PublicKeyBundle.ts:11](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/crypto/PublicKeyBundle.ts#L11)

## Properties

### identityKey

 **identityKey**: `SignedPublicKey`

#### Implementation of

publicKey.SignedPublicKeyBundle.identityKey

#### Defined in

[crypto/PublicKeyBundle.ts:8](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/crypto/PublicKeyBundle.ts#L8)

___

### preKey

 **preKey**: `SignedPublicKey`

#### Implementation of

publicKey.SignedPublicKeyBundle.preKey

#### Defined in

[crypto/PublicKeyBundle.ts:9](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/crypto/PublicKeyBundle.ts#L9)

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

[crypto/PublicKeyBundle.ts:26](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/crypto/PublicKeyBundle.ts#L26)

___

### toBytes

**toBytes**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[crypto/PublicKeyBundle.ts:33](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/crypto/PublicKeyBundle.ts#L33)

___

### walletSignatureAddress

**walletSignatureAddress**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

[crypto/PublicKeyBundle.ts:22](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/crypto/PublicKeyBundle.ts#L22)

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

[crypto/PublicKeyBundle.ts:37](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/crypto/PublicKeyBundle.ts#L37)

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

[crypto/PublicKeyBundle.ts:42](https://github.com/xmtp/xmtp-js/blob/b6e743a/src/crypto/PublicKeyBundle.ts#L42)
