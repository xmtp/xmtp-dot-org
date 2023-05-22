<!---->
# Class: Ciphertext

## Implements

- `Ciphertext`

## Constructors

### constructor

**new Ciphertext**(`obj`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Ciphertext` |

#### Defined in

[crypto/Ciphertext.ts:14](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/crypto/Ciphertext.ts#L14)

## Properties

### aes256GcmHkdfSha256

 **aes256GcmHkdfSha256**: `undefined` \| `Ciphertext_Aes256gcmHkdfsha256`

#### Implementation of

ciphertext.Ciphertext.aes256GcmHkdfSha256

#### Defined in

[crypto/Ciphertext.ts:12](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/crypto/Ciphertext.ts#L12)

## Methods

### toBytes

**toBytes**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[crypto/Ciphertext.ts:36](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/crypto/Ciphertext.ts#L36)

___

### fromBytes

`Static` **fromBytes**(`bytes`): [`Ciphertext`](Ciphertext.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |

#### Returns

[`Ciphertext`](Ciphertext.md)

#### Defined in

[crypto/Ciphertext.ts:40](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/crypto/Ciphertext.ts#L40)
