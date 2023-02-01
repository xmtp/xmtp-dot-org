


# setAuthTokenProvider method




    *[<Null safety>](https://dart.dev/null-safety)*




void setAuthTokenProvider
([FutureOr](https://api.flutter.dev/flutter/dart-async/FutureOr-class.html)&lt;[String](https://api.flutter.dev/flutter/dart-core/String-class.html)> authTokenProvider())








## Implementation

```dart
void setAuthTokenProvider(FutureOr<String> Function() authTokenProvider) {
  _metadata.authTokenProvider = authTokenProvider;
}
```







