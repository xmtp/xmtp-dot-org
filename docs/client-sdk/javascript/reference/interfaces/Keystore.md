<!---->
# Interface: Keystore

A Keystore is responsible for holding the user's XMTP private keys and using them to encrypt/decrypt/sign messages.
Keystores are instantiated using a `KeystoreProvider`

## Implemented by

- [`InMemoryKeystore`](../classes/InMemoryKeystore.md)

## Methods

### createAuthToken

**createAuthToken**(`req`): `Promise`<`Token`\>

Create an XMTP auth token to be used as a header on XMTP API requests

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | `CreateAuthTokenRequest` |

#### Returns

`Promise`<`Token`\>

#### Defined in

[keystore/interfaces.ts:48](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/keystore/interfaces.ts#L48)

___

### createInvite

**createInvite**(`req`): `Promise`<`CreateInviteResponse`\>

Create a sealed/encrypted invite and store the Topic keys in the Keystore for later use.
The returned invite payload must be sent to the network for the other party to be able to communicate.

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | `CreateInviteRequest` |

#### Returns

`Promise`<`CreateInviteResponse`\>

#### Defined in

[keystore/interfaces.ts:42](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/keystore/interfaces.ts#L42)

___

### decryptV1

**decryptV1**(`req`): `Promise`<`DecryptResponse`\>

Decrypt a batch of V1 messages

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | `DecryptV1Request` |

#### Returns

`Promise`<`DecryptResponse`\>

#### Defined in

[keystore/interfaces.ts:19](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/keystore/interfaces.ts#L19)

___

### decryptV2

**decryptV2**(`req`): `Promise`<`DecryptResponse`\>

Decrypt a batch of V2 messages

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | `DecryptV2Request` |

#### Returns

`Promise`<`DecryptResponse`\>

#### Defined in

[keystore/interfaces.ts:23](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/keystore/interfaces.ts#L23)

___

### encryptV1

**encryptV1**(`req`): `Promise`<`EncryptResponse`\>

Encrypt a batch of V1 messages

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | `EncryptV1Request` |

#### Returns

`Promise`<`EncryptResponse`\>

#### Defined in

[keystore/interfaces.ts:27](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/keystore/interfaces.ts#L27)

___

### encryptV2

**encryptV2**(`req`): `Promise`<`EncryptResponse`\>

Encrypt a batch of V2 messages

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | `EncryptV2Request` |

#### Returns

`Promise`<`EncryptResponse`\>

#### Defined in

[keystore/interfaces.ts:31](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/keystore/interfaces.ts#L31)

___

### getAccountAddress

**getAccountAddress**(): `Promise`<`string`\>

Get the account address of the wallet used to create the Keystore

#### Returns

`Promise`<`string`\>

#### Defined in

[keystore/interfaces.ts:68](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/keystore/interfaces.ts#L68)

___

### getPrivateKeyBundle

**getPrivateKeyBundle**(): `Promise`<`PrivateKeyBundleV1`\>

Export the private keys. May throw an error if the keystore implementation does not allow this operation

#### Returns

`Promise`<`PrivateKeyBundleV1`\>

#### Defined in

[keystore/interfaces.ts:64](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/keystore/interfaces.ts#L64)

___

### getPublicKeyBundle

**getPublicKeyBundle**(): `Promise`<`PublicKeyBundle`\>

Get the `PublicKeyBundle` associated with the Keystore's private keys

#### Returns

`Promise`<`PublicKeyBundle`\>

#### Defined in

[keystore/interfaces.ts:60](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/keystore/interfaces.ts#L60)

___

### getV2Conversations

**getV2Conversations**(): `Promise`<`ConversationReference`[]\>

Get a list of V2 conversations

#### Returns

`Promise`<`ConversationReference`[]\>

#### Defined in

[keystore/interfaces.ts:56](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/keystore/interfaces.ts#L56)

___

### saveInvites

**saveInvites**(`req`): `Promise`<`SaveInvitesResponse`\>

Take a batch of invite messages and store the `TopicKeys` for later use in decrypting messages

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | `SaveInvitesRequest` |

#### Returns

`Promise`<`SaveInvitesResponse`\>

#### Defined in

[keystore/interfaces.ts:35](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/keystore/interfaces.ts#L35)

___

### signDigest

**signDigest**(`req`): `Promise`<`Signature`\>

Sign the provided digest with either the `IdentityKey` or a specified `PreKey`

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | `SignDigestRequest` |

#### Returns

`Promise`<`Signature`\>

#### Defined in

[keystore/interfaces.ts:52](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/keystore/interfaces.ts#L52)
