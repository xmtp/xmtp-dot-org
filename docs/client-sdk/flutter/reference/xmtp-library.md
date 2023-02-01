---
title: Flutter client SDK
sidebar_position: 1
---




# xmtp library






    *[<Null safety>](https://dart.dev/null-safety)*



<p>Library containing the XMTP client SDK
for Flutter applications written in dart.</p>


## Classes

##### [Api](./xmtp/Api-class.md)



This is an instance of the <a href="https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/MessageApiClient-class.html">xmtp.MessageApiClient</a> with some
metadata helpers (e.g. for setting the authorization token).


##### [AuthData](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/AuthData-class.html)






##### [Ciphertext](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/Ciphertext-class.html)






##### [Ciphertext_Aes256gcmHkdfsha256](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/Ciphertext_Aes256gcmHkdfsha256-class.html)






##### [Client](./xmtp/Client-class.md)



This is the top-level entrypoint to the XMTP flutter SDK.


##### [Codec](./xmtp/Codec-class.md)&lt;T extends [Object](https://api.flutter.dev/flutter/dart-core/Object-class.html)>



This defines the interface for a content codec of a particular type <code>T</code>.
It is responsible for knowing how to <a href="./xmtp/Codec/encode.md">encode</a> the content <code>T</code>.
And it is responsible for knowing how to <a href="./xmtp/Codec/decode.md">decode</a> the <a href="https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/EncodedContent-class.html">EncodedContent</a>.


##### [CodecRegistry](./xmtp/CodecRegistry-class.md)



This is a registry of codecs for particular types.


##### [Composite](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/Composite-class.html)






##### [Composite_Part](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/Composite_Part-class.html)






##### [Compression](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/Compression-class.html)






##### [ContactBundle](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/ContactBundle-class.html)






##### [ContactBundleV1](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/ContactBundleV1-class.html)






##### [ContactBundleV2](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/ContactBundleV2-class.html)






##### [ContentTypeId](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/ContentTypeId-class.html)






##### [Conversation](./xmtp/Conversation-class.md)



This represents an ongoing conversation.
It can be provided to <a href="./xmtp/Client-class.md">Client</a> to <code>listMessages</code> and <code>sendMessage</code>.
The <a href="./xmtp/Client-class.md">Client</a> also allows you to <code>streamMessages</code> from this <a href="./xmtp/Conversation-class.md">Conversation</a>.


##### [Cursor](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/Cursor-class.html)






##### [DecodedContent](./xmtp/DecodedContent-class.md)



This represents the result of decoding content.


##### [DecodedMessage](./xmtp/DecodedMessage-class.md)



This represents a fully decoded message.
It attempts to give uniform shape to v1 and v2 messages.


##### [EncodedContent](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/EncodedContent-class.html)






##### [EncryptedPrivateKeyBundle](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/EncryptedPrivateKeyBundle-class.html)






##### [EncryptedPrivateKeyBundleV1](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/EncryptedPrivateKeyBundleV1-class.html)






##### [Envelope](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/Envelope-class.html)






##### [IndexCursor](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/IndexCursor-class.html)






##### [InvitationV1](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/InvitationV1-class.html)






##### [InvitationV1_Aes256gcmHkdfsha256](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/InvitationV1_Aes256gcmHkdfsha256-class.html)






##### [InvitationV1_Context](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/InvitationV1_Context-class.html)






##### [Message](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/Message-class.html)






##### [MessageApiClient](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/MessageApiClient-class.html)






##### [MessageApiServiceBase](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/MessageApiServiceBase-class.html)






##### [MessageHeaderV1](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/MessageHeaderV1-class.html)






##### [MessageHeaderV2](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/MessageHeaderV2-class.html)






##### [MessageV1](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/MessageV1-class.html)






##### [MessageV2](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/MessageV2-class.html)






##### [PagingInfo](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/PagingInfo-class.html)






##### [PrivateKey](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/PrivateKey-class.html)






##### [PrivateKey_Secp256k1](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/PrivateKey_Secp256k1-class.html)






##### [PrivateKeyBundle](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/PrivateKeyBundle-class.html)






##### [PrivateKeyBundleV1](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/PrivateKeyBundleV1-class.html)






##### [PrivateKeyBundleV2](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/PrivateKeyBundleV2-class.html)






##### [PublicKey](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/PublicKey-class.html)






##### [PublicKey_Secp256k1Uncompressed](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/PublicKey_Secp256k1Uncompressed-class.html)






##### [PublicKeyBundle](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/PublicKeyBundle-class.html)






##### [PublishRequest](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/PublishRequest-class.html)






##### [PublishResponse](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/PublishResponse-class.html)






##### [QueryRequest](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/QueryRequest-class.html)






##### [QueryResponse](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/QueryResponse-class.html)






##### [SealedInvitation](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/SealedInvitation-class.html)






##### [SealedInvitationHeaderV1](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/SealedInvitationHeaderV1-class.html)






##### [SealedInvitationV1](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/SealedInvitationV1-class.html)






##### [Signature](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/Signature-class.html)






##### [Signature_ECDSACompact](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/Signature_ECDSACompact-class.html)






##### [Signature_WalletECDSACompact](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/Signature_WalletECDSACompact-class.html)






##### [SignedContent](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/SignedContent-class.html)






##### [SignedPrivateKey](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/SignedPrivateKey-class.html)






##### [SignedPrivateKey_Secp256k1](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/SignedPrivateKey_Secp256k1-class.html)






##### [SignedPublicKey](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/SignedPublicKey-class.html)






##### [SignedPublicKeyBundle](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/SignedPublicKeyBundle-class.html)






##### [Signer](./xmtp/Signer-class.md)



Abstraction over a wallet with an <a href="./xmtp/Signer/address.md">address</a> that can <a href="./xmtp/Signer/signPersonalMessage.md">signPersonalMessage</a>s.


##### [SortDirection](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/SortDirection-class.html)






##### [SubscribeRequest](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/SubscribeRequest-class.html)






##### [TextCodec](./xmtp/TextCodec-class.md)



This is a basic text <a href="./xmtp/Codec-class.md">Codec</a> that supports UTF-8 encoding.


##### [Token](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/Token-class.html)






##### [UnsignedPublicKey](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/UnsignedPublicKey-class.html)






##### [UnsignedPublicKey_Secp256k1Uncompressed](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/UnsignedPublicKey_Secp256k1Uncompressed-class.html)








## Extensions

##### [CredentialsToSigner](./xmtp/CredentialsToSigner.md)



This adds a helper to <a href="https://pub.dev/documentation/web3dart/2.6.1/credentials/Credentials-class.html">Credentials</a> to treat it as a <a href="./xmtp/Signer-class.md">Signer</a>.




## Properties

##### [contentTypeText](./xmtp/contentTypeText.md) &#8594; [ContentTypeId](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/ContentTypeId-class.html)




_<span class="feature">final</span>_





## Enums

##### [Ciphertext_Union](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/Ciphertext_Union.html)






##### [Composite_Part_Element](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/Composite_Part_Element.html)






##### [ContactBundle_Version](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/ContactBundle_Version.html)






##### [Cursor_Cursor](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/Cursor_Cursor.html)






##### [EncryptedPrivateKeyBundle_Version](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/EncryptedPrivateKeyBundle_Version.html)






##### [InvitationV1_Encryption](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/InvitationV1_Encryption.html)






##### [Message_Version](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/Message_Version.html)






##### [PrivateKey_Union](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/PrivateKey_Union.html)






##### [PrivateKeyBundle_Version](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/PrivateKeyBundle_Version.html)






##### [PublicKey_Union](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/PublicKey_Union.html)






##### [SealedInvitation_Version](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/SealedInvitation_Version.html)






##### [Signature_Union](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/Signature_Union.html)






##### [SignedPrivateKey_Union](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/SignedPrivateKey_Union.html)






##### [UnsignedPublicKey_Union](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/UnsignedPublicKey_Union.html)
