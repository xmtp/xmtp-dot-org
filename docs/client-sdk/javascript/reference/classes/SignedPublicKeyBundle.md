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

[crypto/PublicKeyBundle.ts:11](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/crypto/PublicKeyBundle.ts#L11)

## Properties

### identityKey

 **identityKey**: [`SignedPublicKey`](SignedPublicKey.md)

#### Implementation of

publicKey.SignedPublicKeyBundle.identityKey

#### Defined in

[crypto/PublicKeyBundle.ts:8](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/crypto/PublicKeyBundle.ts#L8)

___

### preKey

 **preKey**: [`SignedPublicKey`](SignedPublicKey.md)

#### Implementation of

publicKey.SignedPublicKeyBundle.preKey

#### Defined in

[crypto/PublicKeyBundle.ts:9](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/crypto/PublicKeyBundle.ts#L9)

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

[crypto/PublicKeyBundle.ts:26](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/crypto/PublicKeyBundle.ts#L26)

___

### isFromLegacyBundle

**isFromLegacyBundle**(): `boolean`

#### Returns

`boolean`

#### Defined in

[crypto/PublicKeyBundle.ts:37](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/crypto/PublicKeyBundle.ts#L37)

___

### toBytes

**toBytes**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[crypto/PublicKeyBundle.ts:33](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/crypto/PublicKeyBundle.ts#L33)

___

### toLegacyBundle

**toLegacyBundle**(): [`PublicKeyBundle`](PublicKeyBundle.md)

#### Returns

[`PublicKeyBundle`](PublicKeyBundle.md)

#### Defined in

[crypto/PublicKeyBundle.ts:41](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/crypto/PublicKeyBundle.ts#L41)

___

### walletSignatureAddress

**walletSignatureAddress**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

[crypto/PublicKeyBundle.ts:22](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/crypto/PublicKeyBundle.ts#L22)

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

[crypto/PublicKeyBundle.ts:48](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/crypto/PublicKeyBundle.ts#L48)

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

[crypto/PublicKeyBundle.ts:53](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/crypto/PublicKeyBundle.ts#L53)
