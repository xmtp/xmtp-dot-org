


# createFromKeys method




    *[<Null safety>](https://dart.dev/null-safety)*




[Future](https://api.flutter.dev/flutter/dart-async/Future-class.html)&lt;[Client](././Client-class.md)> createFromKeys
([Api](././Api-class.md) api, [PrivateKeyBundle](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/PrivateKeyBundle-class.html) keys, {[List](https://api.flutter.dev/flutter/dart-core/List-class.html)&lt;[Codec](././Codec-class.md)&lt;[Object](https://api.flutter.dev/flutter/dart-core/Object-class.html)>> customCodecs = const []})





<p>This creates a new <code>Client</code> using the saved <code>keys</code> from a
previously successful authentication.</p>



## Implementation

```dart
static Future<Client> createFromKeys(
  Api api,
  xmtp.PrivateKeyBundle keys, {
  List<Codec> customCodecs = const [],
}) async {
  var address = keys.wallet;
  var client = await _createUninitialized(api, address, customCodecs);
  await client._auth.authenticateWithKeys(keys);
  await client._contacts.ensureSavedContact(client._auth.keys);
  return client;
}
```







