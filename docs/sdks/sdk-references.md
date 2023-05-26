---
sidebar_label: SDK references
sidebar_position: 6
---

# XMTP client SDK references

## Swift client SDK reference

:::tip View the reference

Access the **[Swift client SDK reference documentation](https://xmtp.github.io/xmtp-ios/documentation/xmtp/)**.

:::

The reference documentation covers the following classes, protocols, structures, variables, type aliases, and enumerations provided by the SDK.

### Classes

- Client
- Conversations
- Notifications_V1_NotificationsClient

### Protocols

- ContentCodec
- Notifications_V1_NotificationsClientInterface
- SigningKey

### Structures

- Attachment
- AttachmentCodec
- ClientOptions
- Contacts
- ConversationV1
- ConversationV1Container
- ConversationV2
- ConversationV2Container
- DecodedComposite
- DecodedMessage
- EncryptedEncodedContent
- Notifications_V1_DeleteInstallationRequest
- Notifications_V1_DeliveryMechanism
- Notifications_V1_RegisterInstallationRequest
- Notifications_V1_RegisterInstallationResponse
- Notifications_V1_SubscribeRequest
- Notifications_V1_UnsubscribeRequest
- PreparedMessage
- RemoteAttachment
- RemoteAttachmentCodec
- SendOptions
- TextCodec
- XMTPPush

### Variables

- let ContentTypeAttachment: ContentTypeID
- let ContentTypeRemoteAttachment: ContentTypeID
- let ContentTypeText: ContentTypeID

### Type aliases

- CipherText
- ContentTypeID
- EncodedContent
- Envelope
- InvitationV1
- Message
- PrivateKey
- PrivateKeyBundle
- PrivateKeyBundleV1
- PrivateKeyBundleV2
- SealedInvitationHeaderV1
- Signature
- SignedPrivateKey

### Enumerations
- AttachmentCodecError
- Conversation
- ConversationContainer
- ConversationError
- EncodedContentCompression
- MessageVersion
- RemoteAttachmentError
- XMTPEnvironment

## Dart client SDK reference

:::tip View the reference

Access the **[Dart client SDK reference documentation](https://pub.dev/documentation/xmtp/latest/xmtp/xmtp-library.html)** on pub.dev.

:::

The reference documentation covers the following classes, properties, and enums provided by the SDK:

### Classes

- Api
- AuthData
- Ciphertext
- Ciphertext_Aes256gcmHkdfsha256
- Client
- Codec
- CodecRegistry
- Composite
- Composite_Part
- Compression
- ContactBundle
- ContactBundleV1
- ContactBundleV2
- ContentTypeId
- Conversation
- Cursor
- DecodedContent
- DecodedMessage
- EncodedContent
- EncryptedPrivateKeyBundle
- EncryptedPrivateKeyBundleV1
- Envelope
- IndexCursor
- InvitationV1
- InvitationV1_Aes256gcmHkdfsha256
- InvitationV1_Context
- Message
- MessageApiClient
- MessageApiServiceBase
- MessageHeaderV1
- MessageHeaderV2
- MessageV1
- MessageV2
- PagingInfo
- PrivateKey
- PrivateKey_Secp256k1
- PrivateKeyBundle
- PrivateKeyBundleV1
- PrivateKeyBundleV2
- PublicKey
- PublicKey_Secp256k1Uncompressed
- PublicKeyBundle
- PublishRequest
- PublishResponse
- QueryRequest
- QueryResponse
- SealedInvitation
- SealedInvitationHeaderV1
- SealedInvitationV1
- Signature
- Signature_ECDSACompact
- Signature_WalletECDSACompact
- SignedContent
- SignedPrivateKey
- SignedPrivateKey_Secp256k1
- SignedPublicKey
- SignedPublicKeyBundle
- SortDirection
- SubscribeRequest
- TextCodec
- Token
- UnsignedPublicKey
- UnsignedPublicKey_Secp256k1Uncompressed

### Properties

- contentTypeText	

### Enums

- Ciphertext_Union
- Composite_Part_Element
- ContactBundle_Version
- Cursor_Cursor
- EncryptedPrivateKeyBundle_Version
- InvitationV1_Encryption
- Message_Version
- PrivateKey_Union
- PrivateKeyBundle_Version
- PublicKey_Union
- SealedInvitation_Version
- Signature_Union
- SignedPrivateKey_Union
- UnsignedPublicKey_Union

## JavaScript client SDK reference

:::tip View the reference

Access the **[JavaScript client SDK reference documentation](https://pub.dev/documentation/xmtp/latest/xmtp/xmtp-library.html)** on pub.dev.

:::

### Classes

### Interfaces

### Other types and variables