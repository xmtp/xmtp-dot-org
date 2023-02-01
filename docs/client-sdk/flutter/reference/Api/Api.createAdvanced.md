


# Api.createAdvanced constructor




    *[<Null safety>](https://dart.dev/null-safety)*



Api.createAdvanced([ClientChannel](https://pub.dev/documentation/grpc/3.1.0/grpc_connection_interface/ClientChannel-class.html) channel, {[CallOptions](https://pub.dev/documentation/grpc/3.1.0/service_api/CallOptions-class.html)? options, [Iterable](https://api.flutter.dev/flutter/dart-core/Iterable-class.html)&lt;[ClientInterceptor](https://pub.dev/documentation/grpc/3.1.0/service_api/ClientInterceptor-class.html)>? interceptors, [String](https://api.flutter.dev/flutter/dart-core/String-class.html) appVersion = ""})





## Implementation

```dart
factory Api.createAdvanced(
  grpc.ClientChannel channel, {
  grpc.CallOptions? options,
  Iterable<grpc.ClientInterceptor>? interceptors,
  String appVersion = "",
}) {
  var metadata = _MetadataManager();
  options = grpc.CallOptions(
    providers: [metadata.provideCallMetadata],
  ).mergedWith(options);
  var client = xmtp.MessageApiClient(
    channel,
    options: options,
    interceptors: interceptors,
  );
  metadata.appVersion = appVersion;
  return Api._(channel, client, metadata);
}
```







