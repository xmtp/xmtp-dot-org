


# streamConversations method




    *[<Null safety>](https://dart.dev/null-safety)*




[Stream](https://api.flutter.dev/flutter/dart-async/Stream-class.html)&lt;[Conversation](../../xmtp/Conversation-class.md)> streamConversations
()





<p>This exposes a stream of new <code>Conversation</code>s for the user.</p>



## Implementation

```dart
Stream<Conversation> streamConversations() =>
    _conversations.streamConversations();
```







