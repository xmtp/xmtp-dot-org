


# TextCodec class






    *[<Null safety>](https://dart.dev/null-safety)*



<p>This is a basic text <a href="./Codec-class.md">Codec</a> that supports UTF-8 encoding.</p>



**Inheritance**

- [Object](https://api.flutter.dev/flutter/dart-core/Object-class.html)
- [Codec](./Codec-class.md)&lt;[String](https://api.flutter.dev/flutter/dart-core/String-class.html)>
- TextCodec








## Constructors

[TextCodec](./TextCodec/TextCodec.md) ()

   


## Properties

##### [contentType](./TextCodec/contentType.md) &#8594; [ContentTypeId](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/ContentTypeId-class.html)



This identifies the flavor of content this codec can handle.
It advertises the ability to be responsible for the specified
<a href="https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/ContentTypeId/authorityId.html">ContentTypeId.authorityId</a>/<a href="https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/ContentTypeId/typeId.html">ContentTypeId.typeId</a>.  
_<span class="feature">read-only</span><span class="feature">override</span>_



##### [hashCode](https://api.flutter.dev/flutter/dart-core/Object/hashCode.html) &#8594; [int](https://api.flutter.dev/flutter/dart-core/int-class.html)



The hash code for this object.  
_<span class="feature">read-only</span><span class="feature">inherited</span>_



##### [runtimeType](https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html) &#8594; [Type](https://api.flutter.dev/flutter/dart-core/Type-class.html)



A representation of the runtime type of the object.  
_<span class="feature">read-only</span><span class="feature">inherited</span>_





## Methods

##### [decode](./TextCodec/decode.md)([EncodedContent](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/EncodedContent-class.html) encoded) [Future](https://api.flutter.dev/flutter/dart-async/Future-class.html)&lt;[String](https://api.flutter.dev/flutter/dart-core/String-class.html)>



This is called to decode the content captured by <code>encoded</code>.  
_<span class="feature">override</span>_



##### [encode](./TextCodec/encode.md)([String](https://api.flutter.dev/flutter/dart-core/String-class.html) decoded) [Future](https://api.flutter.dev/flutter/dart-async/Future-class.html)&lt;[EncodedContent](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/EncodedContent-class.html)>



This is called to encode the content  
_<span class="feature">override</span>_



##### [noSuchMethod](https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html)([Invocation](https://api.flutter.dev/flutter/dart-core/Invocation-class.html) invocation) dynamic



Invoked when a non-existent method or property is accessed.  
_<span class="feature">inherited</span>_



##### [toString](https://api.flutter.dev/flutter/dart-core/Object/toString.html)() [String](https://api.flutter.dev/flutter/dart-core/String-class.html)



A string representation of this object.  
_<span class="feature">inherited</span>_





## Operators

##### [operator ==](https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html)([Object](https://api.flutter.dev/flutter/dart-core/Object-class.html) other) [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)



The equality operator.  
_<span class="feature">inherited</span>_















