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

**new Stream**<`T`\>(`client`, `topics`, `messageTransformer`, `messageFilter?`, `contentTopicUpdater?`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |
| `topics` | `string`[] |
| `messageTransformer` | `MessageTransformer`<`T`\> |
| `messageFilter?` | `MessageFilter` |
| `contentTopicUpdater?` | `ContentTopicUpdater` |

#### Defined in

[Stream.ts:33](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/Stream.ts#L33)

## Properties

### callback

 **callback**: `undefined` \| (`env`: `Envelope`) => `Promise`<`void`\>

#### Defined in

[Stream.ts:29](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/Stream.ts#L29)

___

### client

 **client**: [`Client`](Client.md)

#### Defined in

[Stream.ts:22](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/Stream.ts#L22)

___

### messages

 **messages**: `T`[]

#### Defined in

[Stream.ts:24](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/Stream.ts#L24)

___

### resolvers

 **resolvers**: (`value`: `IteratorResult`<`T`, `any`\>) => `void`[]

#### Defined in

[Stream.ts:26](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/Stream.ts#L26)

___

### topics

 **topics**: `string`[]

#### Defined in

[Stream.ts:21](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/Stream.ts#L21)

___

### unsubscribeFn

 `Optional` **unsubscribeFn**: `UnsubscribeFn`

#### Defined in

[Stream.ts:31](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/Stream.ts#L31)

## Methods

### [asyncIterator]

**[asyncIterator]**(): `AsyncIterableIterator`<`T`\>

#### Returns

`AsyncIterableIterator`<`T`\>

#### Defined in

[Stream.ts:123](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/Stream.ts#L123)

___

### newMessageCallback

`Private` **newMessageCallback**(`transformer`, `filter?`, `contentTopicUpdater?`): (`env`: `Envelope`) => `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transformer` | `MessageTransformer`<`T`\> |
| `filter?` | `MessageFilter` |
| `contentTopicUpdater?` | `ContentTopicUpdater` |

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

[Stream.ts:52](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/Stream.ts#L52)

___

### next

**next**(): `Promise`<`IteratorResult`<`T`, `any`\>\>

#### Returns

`Promise`<`IteratorResult`<`T`, `any`\>\>

#### Defined in

[Stream.ts:148](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/Stream.ts#L148)

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

[Stream.ts:163](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/Stream.ts#L163)

___

### return

**return**(): `Promise`<`IteratorResult`<`T`, `any`\>\>

#### Returns

`Promise`<`IteratorResult`<`T`, `any`\>\>

#### Defined in

[Stream.ts:131](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/Stream.ts#L131)

___

### start

`Private` **start**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[Stream.ts:88](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/Stream.ts#L88)

___

### create

`Static` **create**<`T`\>(`client`, `topics`, `messageTransformer`, `messageFilter?`, `contentTopicUpdater?`): `Promise`<[`Stream`](Stream.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |
| `topics` | `string`[] |
| `messageTransformer` | `MessageTransformer`<`T`\> |
| `messageFilter?` | `MessageFilter` |
| `contentTopicUpdater?` | `ContentTopicUpdater` |

#### Returns

`Promise`<[`Stream`](Stream.md)<`T`\>\>

#### Defined in

[Stream.ts:104](https://github.com/xmtp/xmtp-js/blob/9a266d7/src/Stream.ts#L104)
