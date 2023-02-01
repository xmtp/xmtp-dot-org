


# decode method




    *[<Null safety>](https://dart.dev/null-safety)*



- @[override](https://api.flutter.dev/flutter/dart-core/override-constant.html)

[Future](https://api.flutter.dev/flutter/dart-async/Future-class.html)&lt;[DecodedContent](../../xmtp/DecodedContent-class.md)> decode
([EncodedContent](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/EncodedContent-class.html) encoded)

_<span class="feature">override</span>_



<p>Use the registered codecs to decode the <code>encoded</code> content.</p>



## Implementation

```dart
@override
Future<DecodedContent> decode(xmtp.EncodedContent encoded) async {
  var codec = _codecFor(encoded.type);
  if (codec == null) {
    if (encoded.hasFallback()) {
      return DecodedContent(contentTypeText, encoded.fallback);
    }
    throw StateError(
        "unable to decode unsupported type ${_key(encoded.type)}");
  } else {
    return DecodedContent(encoded.type, await codec.decode(encoded));
  }
}
```







