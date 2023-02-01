


# decode method




    *[<Null safety>](https://dart.dev/null-safety)*



- @[override](https://api.flutter.dev/flutter/dart-core/override-constant.html)

[Future](https://api.flutter.dev/flutter/dart-async/Future-class.html)&lt;[DecodedContent](../../xmtp/DecodedContent-class.md)> decode
([EncodedContent](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/EncodedContent-class.html) encoded)

_<span class="feature">override</span>_



<p>These use all registered codecs to decode and encode content.</p>
<p>This happens automatically when you <a href="../../xmtp/Client/listMessages.md">listMessages</a> or <a href="../../xmtp/Client/streamMessages.md">streamMessages</a>
and also when you <a href="../../xmtp/Client/sendMessage.md">sendMessage</a>.</p>
<p>These method are exposed to help support offline storage of the
otherwise unwieldy content.
See note re "Offline Storage" atop <a href="../../xmtp/DecodedMessage-class.md">DecodedMessage</a>.</p>



## Implementation

```dart
@override
Future<DecodedContent> decode(xmtp.EncodedContent encoded) =>
    _codecs.decode(encoded);
```







