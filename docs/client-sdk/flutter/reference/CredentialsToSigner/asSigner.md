


# asSigner method




    *[<Null safety>](https://dart.dev/null-safety)*




[Future](https://api.flutter.dev/flutter/dart-async/Future-class.html)&lt;[Signer](././Signer-class.md)> asSigner
()








## Implementation

```dart
Future<Signer> asSigner() async => Signer.create(
    (await extractAddress()).hexEip55,
    (text) => signPersonalMessage(Uint8List.fromList(utf8.encode(text))));
```







