<!---->
# Class: EncryptedPersistence

EncryptedPersistence is a Persistence implementation that uses ECIES to encrypt all values
ECIES encryption protects against unauthorized reads, but not unauthorized writes.
A third party with access to the underlying store could write malicious data using the public key of the owner

## Implements

- [`Persistence`](../interfaces/Persistence.md)

## Constructors

### constructor

**new EncryptedPersistence**(`persistence`, `privateKey`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `persistence` | [`Persistence`](../interfaces/Persistence.md) |
| `privateKey` | `SignedPrivateKey` \| [`PrivateKey`](PrivateKey.md) |

#### Defined in

[keystore/persistence/EncryptedPersistence.ts:20](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/keystore/persistence/EncryptedPersistence.ts#L20)

## Properties

### persistence

 `Private` **persistence**: [`Persistence`](../interfaces/Persistence.md)

#### Defined in

[keystore/persistence/EncryptedPersistence.ts:15](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/keystore/persistence/EncryptedPersistence.ts#L15)

___

### privateKey

 `Private` **privateKey**: `SignedPrivateKey` \| [`PrivateKey`](PrivateKey.md)

#### Defined in

[keystore/persistence/EncryptedPersistence.ts:16](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/keystore/persistence/EncryptedPersistence.ts#L16)

___

### privateKeyBytes

 `Private` **privateKeyBytes**: `Buffer`

#### Defined in

[keystore/persistence/EncryptedPersistence.ts:17](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/keystore/persistence/EncryptedPersistence.ts#L17)

___

### publicKey

 `Private` **publicKey**: `Buffer`

#### Defined in

[keystore/persistence/EncryptedPersistence.ts:18](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/keystore/persistence/EncryptedPersistence.ts#L18)

## Methods

### decrypt

`Private` **decrypt**(`value`): `Promise`<`Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Uint8Array` |

#### Returns

`Promise`<`Uint8Array`\>

#### Defined in

[keystore/persistence/EncryptedPersistence.ts:48](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/keystore/persistence/EncryptedPersistence.ts#L48)

___

### deserializeEcies

`Private` **deserializeEcies**(`data`): `Promise`<`Ecies`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Uint8Array` |

#### Returns

`Promise`<`Ecies`\>

#### Defined in

[keystore/persistence/EncryptedPersistence.ts:60](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/keystore/persistence/EncryptedPersistence.ts#L60)

___

### encrypt

`Private` **encrypt**(`value`): `Promise`<`Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Uint8Array` |

#### Returns

`Promise`<`Uint8Array`\>

#### Defined in

[keystore/persistence/EncryptedPersistence.ts:43](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/keystore/persistence/EncryptedPersistence.ts#L43)

___

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

[keystore/persistence/EncryptedPersistence.ts:30](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/keystore/persistence/EncryptedPersistence.ts#L30)

___

### serializeEcies

`Private` **serializeEcies**(`data`): `Promise`<`Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Ecies` |

#### Returns

`Promise`<`Uint8Array`\>

#### Defined in

[keystore/persistence/EncryptedPersistence.ts:54](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/keystore/persistence/EncryptedPersistence.ts#L54)

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

[keystore/persistence/EncryptedPersistence.ts:38](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/keystore/persistence/EncryptedPersistence.ts#L38)
