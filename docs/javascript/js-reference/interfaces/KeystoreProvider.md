<!---->
# Interface: KeystoreProvider

A Keystore Provider is responsible for either creating a Keystore instance or throwing a KeystoreUnavailableError
It is typically used once on application startup to bootstrap the Keystore and load/decrypt the user's private keys

## Implemented by

- [`KeyGeneratorKeystoreProvider`](../classes/KeyGeneratorKeystoreProvider.md)
- [`NetworkKeystoreProvider`](../classes/NetworkKeystoreProvider.md)
- [`StaticKeystoreProvider`](../classes/StaticKeystoreProvider.md)

## Methods

### newKeystore

**newKeystore**(`opts`, `apiClient`, `wallet?`): `Promise`<[`Keystore`](Keystore.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `KeystoreProviderOptions` |
| `apiClient` | `default` |
| `wallet?` | [`Signer`](Signer.md) |

#### Returns

`Promise`<[`Keystore`](Keystore.md)\>

#### Defined in

[keystore/providers/interfaces.ts:17](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/keystore/providers/interfaces.ts#L17)
