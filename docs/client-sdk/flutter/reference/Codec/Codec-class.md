


# Codec&lt;T extends Object> class






    *[<Null safety>](https://dart.dev/null-safety)*



<p>This defines the interface for a content codec of a particular type <code>T</code>.
It is responsible for knowing how to <a href="../xmtp/Codec/encode.md">encode</a> the content <code>T</code>.
And it is responsible for knowing how to <a href="../xmtp/Codec/decode.md">decode</a> the <a href="https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/EncodedContent-class.html">EncodedContent</a>.</p>






**Implementers**

- [Client](../xmtp/Client-class.md)
- [CodecRegistry](../xmtp/CodecRegistry-class.md)
- [TextCodec](../xmtp/TextCodec-class.md)





## Constructors

[Codec](../xmtp/Codec/Codec.md) ()

   


## Properties

##### [contentType](../xmtp/Codec/contentType.md) &#8594; [ContentTypeId](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/ContentTypeId-class.html)



This identifies the flavor of content this codec can handle.
It advertises the ability to be responsible for the specified
<a href="https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/ContentTypeId/authorityId.html">ContentTypeId.authorityId</a>/<a href="https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/ContentTypeId/typeId.html">ContentTypeId.typeId</a>.  
_<span class="feature">read-only</span>_



##### [hashCode](https://api.flutter.dev/flutter/dart-core/Object/hashCode.html) &#8594; [int](https://api.flutter.dev/flutter/dart-core/int-class.html)



The hash code for this object.  
_<span class="feature">read-only</span><span class="feature">inherited</span>_



##### [runtimeType](https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html) &#8594; [Type](https://api.flutter.dev/flutter/dart-core/Type-class.html)



A representation of the runtime type of the object.  
_<span class="feature">read-only</span><span class="feature">inherited</span>_





## Methods

##### [decode](../xmtp/Codec/decode.md)([EncodedContent](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/EncodedContent-class.html) encoded) [Future](https://api.flutter.dev/flutter/dart-async/Future-class.html)&lt;T>



This is called to decode the content captured by <code>encoded</code>.  




##### [encode](../xmtp/Codec/encode.md)(T decoded) [Future](https://api.flutter.dev/flutter/dart-async/Future-class.html)&lt;[EncodedContent](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/EncodedContent-class.html)>



This is called to encode the content  




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















