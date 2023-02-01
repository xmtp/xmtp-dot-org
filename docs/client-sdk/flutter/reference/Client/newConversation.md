


# newConversation method




    *[<Null safety>](https://dart.dev/null-safety)*




[Future](https://api.flutter.dev/flutter/dart-async/Future-class.html)&lt;[Conversation](../../xmtp/Conversation-class.md)> newConversation
([String](https://api.flutter.dev/flutter/dart-core/String-class.html) address, {[String](https://api.flutter.dev/flutter/dart-core/String-class.html) conversationId = "", [Map](https://api.flutter.dev/flutter/dart-core/Map-class.html)&lt;[String](https://api.flutter.dev/flutter/dart-core/String-class.html), [String](https://api.flutter.dev/flutter/dart-core/String-class.html)> metadata = const <String, String>{}})





<p>This creates or resumes a <code>Conversation</code> with <code>address</code>.
If a <code>conversationId</code> is specified then that will
distinguish multiple conversations with the same user.
A new <code>conversationId</code> always creates a new conversation.</p>
<p>e.g. This creates 2 conversations with the same <code>friend</code>.</p>
<pre class="language-dart"><code> var fooChat = await client.newConversation(
   friend,
   conversationId: 'https://example.com/foo',
 );
 var barChat = await client.newConversation(
   friend,
   conversationId: 'https://example.com/bar',
 );
</code></pre>



## Implementation

```dart
Future<Conversation> newConversation(
  String address, {
  String conversationId = "",
  Map<String, String> metadata = const <String, String>{},
}) =>
    _conversations.newConversation(address, conversationId, metadata);
```
