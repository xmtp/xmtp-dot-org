<!---->
# Class: Stream<T\>

Stream implements an Asynchronous Iterable over messages received from a topic.
As such can be used with constructs like for-await-of, yield*, array destructing, etc.

## Type parameters

| Name |
| :------ |
| `T` |

## Constructors

### constructor

**new Stream**<`T`\>(`client`, `topics`, `decoder`, `contentTopicUpdater?`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |
| `topics` | `string`[] |
| `decoder` | `MessageDecoder`<`T`\> |
| `contentTopicUpdater?` | `ContentTopicUpdater`<`T`\> |

#### Defined in

[Stream.ts:28](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/Stream.ts#L28)

## Properties

### callback

 **callback**: `undefined` \| (`env`: `Envelope`) => `Promise`<`void`\>

#### Defined in

[Stream.ts:24](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/Stream.ts#L24)

___

### client

 **client**: [`Client`](Client.md)

#### Defined in

[Stream.ts:17](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/Stream.ts#L17)

___

### messages

 **messages**: `T`[]

#### Defined in

[Stream.ts:19](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/Stream.ts#L19)

___

### resolvers

 **resolvers**: (`value`: `IteratorResult`<`T`, `any`\>) => `void`[]

#### Defined in

[Stream.ts:21](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/Stream.ts#L21)

___

### topics

 **topics**: `string`[]

#### Defined in

[Stream.ts:16](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/Stream.ts#L16)

___

### unsubscribeFn

 `Optional` **unsubscribeFn**: `UnsubscribeFn`

#### Defined in

[Stream.ts:26](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/Stream.ts#L26)

## Methods

### [asyncIterator]

**[asyncIterator]**(): `AsyncIterableIterator`<`T`\>

#### Returns

`AsyncIterableIterator`<`T`\>

#### Defined in

[Stream.ts:106](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/Stream.ts#L106)

___

### newMessageCallback

`Private` **newMessageCallback**(`decoder`, `contentTopicUpdater?`): (`env`: `Envelope`) => `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `decoder` | `MessageDecoder`<`T`\> |
| `contentTopicUpdater?` | `ContentTopicUpdater`<`T`\> |

#### Returns

`fn`

(`env`): `Promise`<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `env` | `Envelope` |

##### Returns

`Promise`<`void`\>

#### Defined in

[Stream.ts:42](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/Stream.ts#L42)

___

### next

**next**(): `Promise`<`IteratorResult`<`T`, `any`\>\>

#### Returns

`Promise`<`IteratorResult`<`T`, `any`\>\>

#### Defined in

[Stream.ts:131](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/Stream.ts#L131)

___

### resubscribeToTopics

`Private` **resubscribeToTopics**(`topics`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `topics` | `string`[] |

#### Returns

`Promise`<`void`\>

#### Defined in

[Stream.ts:146](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/Stream.ts#L146)

___

### return

**return**(): `Promise`<`IteratorResult`<`T`, `any`\>\>

#### Returns

`Promise`<`IteratorResult`<`T`, `any`\>\>

#### Defined in

[Stream.ts:114](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/Stream.ts#L114)

___

### start

`Private` **start**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[Stream.ts:78](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/Stream.ts#L78)

___

### create

`Static` **create**<`T`\>(`client`, `topics`, `decoder`, `contentTopicUpdater?`): `Promise`<[`Stream`](Stream.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |
| `topics` | `string`[] |
| `decoder` | `MessageDecoder`<`T`\> |
| `contentTopicUpdater?` | `ContentTopicUpdater`<`T`\> |

#### Returns

`Promise`<[`Stream`](Stream.md)<`T`\>\>

#### Defined in

[Stream.ts:94](https://github.com/xmtp/xmtp-js/blob/ff53c33/src/Stream.ts#L94)
