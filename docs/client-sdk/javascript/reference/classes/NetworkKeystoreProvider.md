<!---->
# Class: NetworkKeystoreProvider

NetworkKeystoreProvider will look on the XMTP network for an `EncryptedPrivateKeyBundle`
on the user's private storage topic. If found, will decrypt the bundle using a wallet
signature and instantiate a Keystore instance using the decrypted value.

## Implements

- [`KeystoreProvider`](../interfaces/KeystoreProvider.md)

## Constructors

### constructor

**new NetworkKeystoreProvider**()

## Methods

### newKeystore

**newKeystore**(`opts`, `apiClient`, `wallet?`): `Promise`<[`Keystore`](../interfaces/Keystore.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `KeystoreProviderOptions` |
| `apiClient` | `default` |
| `wallet?` | [`Signer`](../interfaces/Signer.md) |

#### Returns

`Promise`<[`Keystore`](../interfaces/Keystore.md)\>

#### Implementation of

[KeystoreProvider](../interfaces/KeystoreProvider.md).[newKeystore](../interfaces/KeystoreProvider.md#newkeystore)

#### Defined in

[keystore/providers/NetworkKeystoreProvider.ts:17](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/keystore/providers/NetworkKeystoreProvider.ts#L17)
