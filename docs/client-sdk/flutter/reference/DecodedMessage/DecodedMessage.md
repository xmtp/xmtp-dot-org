


# DecodedMessage constructor




    *[<Null safety>](https://dart.dev/null-safety)*



DecodedMessage([Message_Version](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/Message_Version.html) version, [DateTime](https://api.flutter.dev/flutter/dart-core/DateTime-class.html) sentAt, [EthereumAddress](https://pub.dev/documentation/web3dart/2.6.1/credentials/EthereumAddress-class.html) sender, [EncodedContent](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/EncodedContent-class.html) encoded, [ContentTypeId](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/ContentTypeId-class.html) contentType, [Object](https://api.flutter.dev/flutter/dart-core/Object-class.html) content, {required [String](https://api.flutter.dev/flutter/dart-core/String-class.html) id, required [String](https://api.flutter.dev/flutter/dart-core/String-class.html) topic})





## Implementation

```dart
DecodedMessage(
  this.version,
  this.sentAt,
  this.sender,
  this.encoded,
  this.contentType,
  this.content, {
  required this.id,
  required this.topic,
});
```







