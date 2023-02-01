


# Signer.create constructor




    *[<Null safety>](https://dart.dev/null-safety)*



Signer.create([String](https://api.flutter.dev/flutter/dart-core/String-class.html) address, [Future](https://api.flutter.dev/flutter/dart-async/Future-class.html)&lt;[Uint8List](https://api.flutter.dev/flutter/dart-typed_data/Uint8List-class.html)> signPersonalMessage([String](https://api.flutter.dev/flutter/dart-core/String-class.html) text))





## Implementation

```dart
Signer.create(String address, this.signPersonalMessage)
    : address = EthereumAddress.fromHex(address);
```







