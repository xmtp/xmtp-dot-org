<!---->
# Class: PrefixedPersistence

## Constructors

### constructor

**new PrefixedPersistence**(`prefix`, `persistence`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `prefix` | `string` |
| `persistence` | [`Persistence`](../interfaces/Persistence.md) |

#### Defined in

[keystore/persistence/PrefixedPersistence.ts:7](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/keystore/persistence/PrefixedPersistence.ts#L7)

## Properties

### persistence

 **persistence**: [`Persistence`](../interfaces/Persistence.md)

#### Defined in

[keystore/persistence/PrefixedPersistence.ts:5](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/keystore/persistence/PrefixedPersistence.ts#L5)

___

### prefix

 **prefix**: `string`

#### Defined in

[keystore/persistence/PrefixedPersistence.ts:4](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/keystore/persistence/PrefixedPersistence.ts#L4)

## Methods

### buildKey

`Private` **buildKey**(`key`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`string`

#### Defined in

[keystore/persistence/PrefixedPersistence.ts:20](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/keystore/persistence/PrefixedPersistence.ts#L20)

___

### getItem

**getItem**(`key`): `Promise`<``null`` \| `Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Promise`<``null`` \| `Uint8Array`\>

#### Defined in

[keystore/persistence/PrefixedPersistence.ts:12](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/keystore/persistence/PrefixedPersistence.ts#L12)

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

[keystore/persistence/PrefixedPersistence.ts:16](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/keystore/persistence/PrefixedPersistence.ts#L16)
