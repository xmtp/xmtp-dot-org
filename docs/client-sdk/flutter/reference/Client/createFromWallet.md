


# createFromWallet method




    *[<Null safety>](https://dart.dev/null-safety)*




[Future](https://api.flutter.dev/flutter/dart-async/Future-class.html)&lt;[Client](././Client-class.md)> createFromWallet
([Api](././Api-class.md) api, [Signer](././Signer-class.md) wallet, {[List](https://api.flutter.dev/flutter/dart-core/List-class.html)&lt;[Codec](././Codec-class.md)&lt;[Object](https://api.flutter.dev/flutter/dart-core/Object-class.html)>> customCodecs = const []})





<p>This creates a new <code>Client</code> instance using the <a href="././Signer-class.md">Signer</a> to
trigger signature prompts to acquire user authentication keys.</p>



## Implementation

```dart
static Future<Client> createFromWallet(
  Api api,
  Signer wallet, {
  List<Codec> customCodecs = const [],
}) async {
  var client = await _createUninitialized(api, wallet.address, customCodecs);
  await client._auth.authenticateWithCredentials(wallet);
  await client._contacts.ensureSavedContact(client._auth.keys);
  return client;
}
```







