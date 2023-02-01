


# terminate method




    *[<Null safety>](https://dart.dev/null-safety)*




[Future](https://api.flutter.dev/flutter/dart-async/Future-class.html)&lt;void> terminate
()





<p>Terminate this client.</p>
<p>Already in progress calls will be terminated. No further calls can be made
using this client.</p>



## Implementation

```dart
Future<void> terminate() async {
  return _api.terminate();
}
```







