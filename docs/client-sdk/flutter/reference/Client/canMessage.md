


# canMessage method




    *[<Null safety>](https://dart.dev/null-safety)*




[Future](https://api.flutter.dev/flutter/dart-async/Future-class.html)&lt;[bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)> canMessage
([String](https://api.flutter.dev/flutter/dart-core/String-class.html) address)





<p>Whether or not we can send messages to <code>address</code>.</p>
<p>This will return false when <code>address</code> has never signed up for XMTP
or when the message is addressed to the sender (no self-messaging).</p>



## Implementation

```dart
Future<bool> canMessage(String address) async =>
    EthereumAddress.fromHex(address) != this.address &&
    await _contacts.hasUserContacts(address);
```







