<!---->
# Class: SealedInvitation

Wrapper class for SealedInvitationV1 and any future iterations of SealedInvitation

## Implements

- `SealedInvitation`

## Constructors

### constructor

**new SealedInvitation**(`«destructured»`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `SealedInvitation` |

#### Defined in

[Invitation.ts:186](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/Invitation.ts#L186)

## Properties

### v1

 **v1**: `undefined` \| `SealedInvitationV1`

#### Implementation of

invitation.SealedInvitation.v1

#### Defined in

[Invitation.ts:184](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/Invitation.ts#L184)

## Methods

### toBytes

**toBytes**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[Invitation.ts:194](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/Invitation.ts#L194)

___

### createV1

`Static` **createV1**(`«destructured»`): `Promise`<[`SealedInvitation`](SealedInvitation.md)\>

Create a SealedInvitation with a SealedInvitationV1 payload
Will encrypt all contents and validate inputs

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `created` | `Date` |
| › `invitation` | `InvitationV1` |
| › `recipient` | [`SignedPublicKeyBundle`](SignedPublicKeyBundle.md) |
| › `sender` | `PrivateKeyBundleV2` |

#### Returns

`Promise`<[`SealedInvitation`](SealedInvitation.md)\>

#### Defined in

[Invitation.ts:223](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/Invitation.ts#L223)

___

### fromBytes

`Static` **fromBytes**(`bytes`): [`SealedInvitation`](SealedInvitation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |

#### Returns

[`SealedInvitation`](SealedInvitation.md)

#### Defined in

[Invitation.ts:198](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/Invitation.ts#L198)

___

### fromEnvelope

`Static` **fromEnvelope**(`env`): `Promise`<[`SealedInvitation`](SealedInvitation.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `env` | `Envelope` |

#### Returns

`Promise`<[`SealedInvitation`](SealedInvitation.md)\>

#### Defined in

[Invitation.ts:202](https://github.com/xmtp/xmtp-js/blob/ff16daf/src/Invitation.ts#L202)
