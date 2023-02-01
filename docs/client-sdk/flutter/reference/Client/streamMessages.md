


# streamMessages method




    *[<Null safety>](https://dart.dev/null-safety)*




[Stream](https://api.flutter.dev/flutter/dart-async/Stream-class.html)&lt;[DecodedMessage](../../xmtp/DecodedMessage-class.md)> streamMessages
([Conversation](../../xmtp/Conversation-class.md) conversation)





<p>This exposes a stream of new messages sent to the <code>conversation</code>.</p>



## Implementation

```dart
Stream<DecodedMessage> streamMessages(Conversation conversation) =>
    _conversations.streamMessages(conversation);
```







