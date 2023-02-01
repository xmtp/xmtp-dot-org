


# encode method




    *[<Null safety>](https://dart.dev/null-safety)*



- @[override](https://api.flutter.dev/flutter/dart-core/override-constant.html)

[Future](https://api.flutter.dev/flutter/dart-async/Future-class.html)&lt;[EncodedContent](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/EncodedContent-class.html)> encode
([DecodedContent](././DecodedContent-class.md) decoded)

_<span class="feature">override</span>_



<p>This is called to encode the content</p>



## Implementation

```dart
@override
Future<xmtp.EncodedContent> encode(DecodedContent decoded) =>
    _codecs.encode(decoded);
```







