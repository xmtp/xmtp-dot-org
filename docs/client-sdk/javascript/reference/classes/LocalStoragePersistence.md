<!---->
# Class: LocalStoragePersistence

## Implements

- [`Persistence`](../interfaces/Persistence.md)

## Constructors

### constructor

**new LocalStoragePersistence**()

#### Defined in

[keystore/persistence/LocalStoragePersistence.ts:6](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/keystore/persistence/LocalStoragePersistence.ts#L6)

## Properties

### storage

 **storage**: `Storage`

#### Defined in

[keystore/persistence/LocalStoragePersistence.ts:5](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/keystore/persistence/LocalStoragePersistence.ts#L5)

## Methods

### getItem

**getItem**(`key`): `Promise`<``null`` \| `Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Promise`<``null`` \| `Uint8Array`\>

#### Implementation of

[Persistence](../interfaces/Persistence.md).[getItem](../interfaces/Persistence.md#getitem)

#### Defined in

[keystore/persistence/LocalStoragePersistence.ts:13](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/keystore/persistence/LocalStoragePersistence.ts#L13)

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

#### Implementation of

[Persistence](../interfaces/Persistence.md).[setItem](../interfaces/Persistence.md#setitem)

#### Defined in

[keystore/persistence/LocalStoragePersistence.ts:21](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/keystore/persistence/LocalStoragePersistence.ts#L21)
