


# contentType property




    *[<Null safety>](https://dart.dev/null-safety)*





**Annotations**

- @[override](https://api.flutter.dev/flutter/dart-core/override-constant.html)
[ContentTypeId](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/ContentTypeId-class.html) contentType
  
_<span class="feature">override</span>_



<p>This identifies the flavor of content this codec can handle.
It advertises the ability to be responsible for the specified
<a href="https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/ContentTypeId/authorityId.html">ContentTypeId.authorityId</a>/<a href="https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/ContentTypeId/typeId.html">ContentTypeId.typeId</a>.</p>



## Implementation

```dart
@override
xmtp.ContentTypeId get contentType =>
    throw UnsupportedError("the registry, as a Codec, has no content type");
```








