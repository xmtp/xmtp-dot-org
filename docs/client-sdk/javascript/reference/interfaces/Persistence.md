<!---->
# Interface: Persistence

## Implemented by

- [`EncryptedPersistence`](../classes/EncryptedPersistence.md)
- [`LocalStoragePersistence`](../classes/LocalStoragePersistence.md)

## Methods

### getItem

**getItem**(`key`): `Promise`<``null`` \| `Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Promise`<``null`` \| `Uint8Array`\>

#### Defined in

[keystore/persistence/interface.ts:2](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/keystore/persistence/interface.ts#L2)

___

### setItem

**setItem**(`key`, `value`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `Uint8Array` |

#### Returns

`Promise`<`void`\>

#### Defined in

[keystore/persistence/interface.ts:3](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/keystore/persistence/interface.ts#L3)
