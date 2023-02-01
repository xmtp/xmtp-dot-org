


# encode method




    *[<Null safety>](https://dart.dev/null-safety)*



- @[override](https://api.flutter.dev/flutter/dart-core/override-constant.html)

[Future](https://api.flutter.dev/flutter/dart-async/Future-class.html)&lt;[EncodedContent](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/EncodedContent-class.html)> encode
([DecodedContent](././DecodedContent-class.md) decoded)

_<span class="feature">override</span>_



<p>Use the registered codecs to encode the <code>content</code>.</p>



## Implementation

```dart
@override
Future<xmtp.EncodedContent> encode(DecodedContent decoded) async {
  var type = decoded.contentType;
  var codec = _codecFor(type);
  if (codec == null) {
    throw StateError("unable to encode unsupported type ${_key(type)}");
  }
  return codec.encode(decoded.content);
}
```







