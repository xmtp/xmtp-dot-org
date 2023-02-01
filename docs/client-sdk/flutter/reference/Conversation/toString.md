


# toString method




    *[<Null safety>](https://dart.dev/null-safety)*



- @[override](https://api.flutter.dev/flutter/dart-core/override-constant.html)

[String](https://api.flutter.dev/flutter/dart-core/String-class.html) toString
()

_<span class="feature">override</span>_



<p>A string representation of this object.</p>
<p>Some classes have a default textual representation,
often paired with a static <code>parse</code> function (like <a href="https://api.flutter.dev/flutter/dart-core/int/parse.html">int.parse</a>).
These classes will provide the textual representation as
their string representation.</p>
<p>Other classes have no meaningful textual representation
that a program will care about.
Such classes will typically override <code>toString</code> to provide
useful information when inspecting the object,
mainly for debugging or logging.</p>



## Implementation

```dart
@override
String toString() {
  return 'Conversation{version:$version me:$me peer:$peer topic:$topic}';
}
```







