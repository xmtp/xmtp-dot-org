<!--[@xmtp/xmtp-js](../README.md) / [Exports](../modules.md) / Stream-->

# Class: Stream<T\>

Stream implements an Asynchronous Iterable over messages received from a topic.
As such can be used with constructs like for-await-of, yield*, array destructing, etc.

## Type parameters

| Name |
| :------ |
| `T` |

<!--## Table of contents

### Constructors

- [constructor](Stream.md#constructor)

### Properties

- [callback](Stream.md#callback)
- [client](Stream.md#client)
- [messages](Stream.md#messages)
- [resolvers](Stream.md#resolvers)
- [topics](Stream.md#topics)
- [unsubscribeFn](Stream.md#unsubscribefn)

### Methods

- [[asyncIterator]](Stream.md#[asynciterator])
- [next](Stream.md#next)
- [return](Stream.md#return)
- [create](Stream.md#create)-->

## Constructors

### constructor

• **new Stream**<`T`\>(`client`, `topics`, `messageTransformer`, `messageFilter?`, `contentTopicUpdater?`)

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

[Stream.ts:33](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/Stream.ts#L33)

## Properties

### callback

• **callback**: `undefined` \| (`env`: `Envelope`) => `Promise`<`void`\>

#### Defined in

[Stream.ts:29](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/Stream.ts#L29)

___

### client

• **client**: [`Client`](Client.md)

#### Defined in

[Stream.ts:22](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/Stream.ts#L22)

___

### messages

• **messages**: `T`[]

#### Defined in

[Stream.ts:24](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/Stream.ts#L24)

___

### resolvers

• **resolvers**: (`value`: `IteratorResult`<`T`, `any`\>) => `void`[]

#### Defined in

[Stream.ts:26](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/Stream.ts#L26)

___

### topics

• **topics**: `string`[]

#### Defined in

[Stream.ts:21](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/Stream.ts#L21)

___

### unsubscribeFn

• `Optional` **unsubscribeFn**: `UnsubscribeFn`

#### Defined in

[Stream.ts:31](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/Stream.ts#L31)

## Methods

### [asyncIterator]

▸ **[asyncIterator]**(): `AsyncIterableIterator`<`T`\>

#### Returns

`AsyncIterableIterator`<`T`\>

#### Defined in

[Stream.ts:123](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/Stream.ts#L123)

___

### next

▸ **next**(): `Promise`<`IteratorResult`<`T`, `any`\>\>

#### Returns

`Promise`<`IteratorResult`<`T`, `any`\>\>

#### Defined in

[Stream.ts:148](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/Stream.ts#L148)

___

### return

▸ **return**(): `Promise`<`IteratorResult`<`T`, `any`\>\>

#### Returns

`Promise`<`IteratorResult`<`T`, `any`\>\>

#### Defined in

[Stream.ts:131](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/Stream.ts#L131)

___

### create

▸ `Static` **create**<`T`\>(`client`, `topics`, `messageTransformer`, `messageFilter?`, `contentTopicUpdater?`): `Promise`<[`Stream`](Stream.md)<`T`\>\>

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

[Stream.ts:104](https://github.com/xmtp/xmtp-js/blob/83d4d4b/src/Stream.ts#L104)
