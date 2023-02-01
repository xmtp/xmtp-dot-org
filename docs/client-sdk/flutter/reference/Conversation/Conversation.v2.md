


# Conversation.v2 constructor




    *[<Null safety>](https://dart.dev/null-safety)*



Conversation.v2([InvitationV1](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/InvitationV1-class.html) invite, [DateTime](https://api.flutter.dev/flutter/dart-core/DateTime-class.html) createdAt, {required [EthereumAddress](https://pub.dev/documentation/web3dart/2.6.1/credentials/EthereumAddress-class.html) me, required [EthereumAddress](https://pub.dev/documentation/web3dart/2.6.1/credentials/EthereumAddress-class.html) peer})





## Implementation

```dart
Conversation.v2(
  this.invite,
  this.createdAt, {
  required this.me,
  required this.peer,
})  : version = xmtp.Message_Version.v2,
      topic = invite.topic,
      conversationId = invite.context.conversationId,
      metadata = invite.context.metadata;
```







