


# listMessages method




    *[<Null safety>](https://dart.dev/null-safety)*




[Future](https://api.flutter.dev/flutter/dart-async/Future-class.html)&lt;[List](https://api.flutter.dev/flutter/dart-core/List-class.html)&lt;[DecodedMessage](../../xmtp/DecodedMessage-class.md)>> listMessages
([Conversation](../../xmtp/Conversation-class.md) conversation, {[DateTime](https://api.flutter.dev/flutter/dart-core/DateTime-class.html)? start, [DateTime](https://api.flutter.dev/flutter/dart-core/DateTime-class.html)? end, [int](https://api.flutter.dev/flutter/dart-core/int-class.html)? limit, [SortDirection](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/SortDirection-class.html) sort = xmtp.SortDirection.SORT_DIRECTION_DESCENDING})





<p>This lists messages sent to the <code>conversation</code>.</p>
<p>If <code>start</code> or <code>end</code> are specified then this will only list messages
sent at or after <code>start</code> and at or before <code>end</code>.</p>
<p>If <code>limit</code> is specified then this returns no more than <code>limit</code> messages.</p>
<p>If <code>sort</code> is specified then that will control the sort order.</p>



## Implementation

```dart
Future<List<DecodedMessage>> listMessages(
  Conversation conversation, {
  DateTime? start,
  DateTime? end,
  int? limit,
  xmtp.SortDirection sort = xmtp.SortDirection.SORT_DIRECTION_DESCENDING,
}) =>
    _conversations.listMessages(conversation, start, end, limit, sort);
```







