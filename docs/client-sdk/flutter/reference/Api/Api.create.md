


# Api.create constructor




    *[<Null safety>](https://dart.dev/null-safety)*



Api.create({[String](https://api.flutter.dev/flutter/dart-core/String-class.html) host = 'dev.xmtp.network', [int](https://api.flutter.dev/flutter/dart-core/int-class.html) port = 5556, [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) isSecure = true, [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html) debugLogRequests = kDebugMode, [String](https://api.flutter.dev/flutter/dart-core/String-class.html) appVersion = "dev/0.0.0-development"})





## Implementation

```dart
factory Api.create({
  String host = 'dev.xmtp.network',
  int port = 5556,
  bool isSecure = true,
  bool debugLogRequests = kDebugMode,
  String appVersion = "dev/0.0.0-development",
}) {
  var channel = grpc.ClientChannel(
    host,
    port: port,
    options: grpc.ChannelOptions(
      credentials: isSecure
          ? const grpc.ChannelCredentials.secure()
          : const grpc.ChannelCredentials.insecure(),
      userAgent: clientVersion,
    ),
  );

  return Api.createAdvanced(
    channel,
    options: grpc.CallOptions(
      timeout: const Duration(minutes: 5),
      // TODO: consider supporting compression
      // compression: const grpc.GzipCodec(),
    ),
    interceptors: debugLogRequests ? [_DebugLogInterceptor()] : [],
    appVersion: appVersion,
  );
}
```







