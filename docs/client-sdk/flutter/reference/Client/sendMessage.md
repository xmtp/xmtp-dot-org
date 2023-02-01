


# sendMessage method




    *[<Null safety>](https://dart.dev/null-safety)*




[Future](https://api.flutter.dev/flutter/dart-async/Future-class.html)&lt;[DecodedMessage](../../xmtp/DecodedMessage-class.md)> sendMessage
([Conversation](../../xmtp/Conversation-class.md) conversation, [Object](https://api.flutter.dev/flutter/dart-core/Object-class.html) content, {[ContentTypeId](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/ContentTypeId-class.html)? contentType})





<p>This sends a new message to the <code>conversation</code>.
It returns the <code>DecodedMessage</code> to simplify optimistic local updates.
 e.g. you can display the <code>DecodedMessage</code> immediately
      without having to wait for it to come back down the stream.</p>



## Implementation

```dart
Future<DecodedMessage> sendMessage(
  Conversation conversation,
  Object content, {
  xmtp.ContentTypeId? contentType,
  // TODO: support fallback and compression
}) =>
    _conversations.sendMessage(
      conversation,
      content,
      contentType: contentType,
    );
```







