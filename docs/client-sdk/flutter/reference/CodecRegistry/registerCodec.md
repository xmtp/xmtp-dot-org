


# registerCodec method




    *[<Null safety>](https://dart.dev/null-safety)*




void registerCodec
([Codec](././Codec-class.md)&lt;[Object](https://api.flutter.dev/flutter/dart-core/Object-class.html)> codec)








## Implementation

```dart
void registerCodec(Codec codec) => _codecs[_key(codec.contentType)] = codec;
```







