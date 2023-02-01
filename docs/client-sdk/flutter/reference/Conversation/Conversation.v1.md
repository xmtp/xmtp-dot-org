


# Conversation.v1 constructor




    *[<Null safety>](https://dart.dev/null-safety)*



Conversation.v1([DateTime](https://api.flutter.dev/flutter/dart-core/DateTime-class.html) createdAt, {required [EthereumAddress](https://pub.dev/documentation/web3dart/2.6.1/credentials/EthereumAddress-class.html) me, required [EthereumAddress](https://pub.dev/documentation/web3dart/2.6.1/credentials/EthereumAddress-class.html) peer})





## Implementation

```dart
Conversation.v1(
  this.createdAt, {
  required this.me,
  required this.peer,
})  : version = xmtp.Message_Version.v1,
      topic = Topic.directMessageV1(me.hex, peer.hex),
      conversationId = "",
      metadata = <String, String>{},
      invite = xmtp.InvitationV1();
```







