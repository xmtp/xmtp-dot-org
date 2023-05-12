<!---->
# Class: KeyGeneratorKeystoreProvider

KeyGeneratorKeystoreProvider will create a new XMTP `PrivateKeyBundle` and persist it to the network
This provider should always be specified last in the list of `keystoreProviders` on client creation,
as it will overwrite any XMTP identities already on the network

## Implements

- [`KeystoreProvider`](../interfaces/KeystoreProvider.md)

## Constructors

### constructor

**new KeyGeneratorKeystoreProvider**()

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

[keystore/providers/KeyGeneratorKeystoreProvider.ts:18](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/keystore/providers/KeyGeneratorKeystoreProvider.ts#L18)
