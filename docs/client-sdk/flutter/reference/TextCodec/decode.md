


# decode method




    *[<Null safety>](https://dart.dev/null-safety)*



- @[override](https://api.flutter.dev/flutter/dart-core/override-constant.html)

[Future](https://api.flutter.dev/flutter/dart-async/Future-class.html)&lt;[String](https://api.flutter.dev/flutter/dart-core/String-class.html)> decode
([EncodedContent](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/EncodedContent-class.html) encoded)

_<span class="feature">override</span>_



<p>This is called to decode the content captured by <code>encoded</code>.</p>



## Implementation

```dart
@override
Future<String> decode(xmtp.EncodedContent encoded) async {
  var encoding = encoded.parameters['encoding'] ?? defaultEncoding;
  if (!supportedEncodings.contains(encoding)) {
    throw StateError("unsupported text encoding '$encoding'");
  }
  return utf8.decode(encoded.content);
}
```







