<!---->
# Class: StaticKeystoreProvider

StaticKeystoreProvider will look for a `privateKeyOverride` in the provided options,
and bootstrap a Keystore using those options if provided.

If no `privateKeyOverride` is supplied will throw a `KeystoreProviderUnavailableError` causing
the client to continue iterating through the `KeystoreProviders` list.

## Implements

- [`KeystoreProvider`](../interfaces/KeystoreProvider.md)

## Constructors

### constructor

**new StaticKeystoreProvider**()

## Methods

### newKeystore

**newKeystore**(`opts`): `Promise`<[`Keystore`](../interfaces/Keystore.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `KeystoreProviderOptions` |

#### Returns

`Promise`<[`Keystore`](../interfaces/Keystore.md)\>

#### Implementation of

[KeystoreProvider](../interfaces/KeystoreProvider.md).[newKeystore](../interfaces/KeystoreProvider.md#newkeystore)

#### Defined in

[keystore/providers/StaticKeystoreProvider.ts:19](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/keystore/providers/StaticKeystoreProvider.ts#L19)
