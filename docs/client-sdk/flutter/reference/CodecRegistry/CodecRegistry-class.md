


# CodecRegistry class






    *[<Null safety>](https://dart.dev/null-safety)*



<p>This is a registry of codecs for particular types.</p>
<p>It knows how to apply the codecs to <a href="../xmtp/CodecRegistry/decode.md">decode</a> or <a href="../xmtp/CodecRegistry/encode.md">encode</a>
<a href="https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/EncodedContent-class.html">xmtp.EncodedContent</a> to <a href="../xmtp/DecodedContent-class.md">DecodedContent</a>..</p>




**Implemented types**

- [Codec](../xmtp/Codec-class.md)&lt;[DecodedContent](../xmtp/DecodedContent-class.md)>







## Constructors

[CodecRegistry](../xmtp/CodecRegistry/CodecRegistry.md) ()

   


## Properties

##### [contentType](../xmtp/CodecRegistry/contentType.md) &#8594; [ContentTypeId](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/ContentTypeId-class.html)



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

##### [decode](../xmtp/CodecRegistry/decode.md)([EncodedContent](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/EncodedContent-class.html) encoded) [Future](https://api.flutter.dev/flutter/dart-async/Future-class.html)&lt;[DecodedContent](../xmtp/DecodedContent-class.md)>



Use the registered codecs to decode the <code>encoded</code> content.  
_<span class="feature">override</span>_



##### [encode](../xmtp/CodecRegistry/encode.md)([DecodedContent](../xmtp/DecodedContent-class.md) decoded) [Future](https://api.flutter.dev/flutter/dart-async/Future-class.html)&lt;[EncodedContent](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/EncodedContent-class.html)>



Use the registered codecs to encode the <code>content</code>.  
_<span class="feature">override</span>_



##### [noSuchMethod](https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html)([Invocation](https://api.flutter.dev/flutter/dart-core/Invocation-class.html) invocation) dynamic



Invoked when a non-existent method or property is accessed.  
_<span class="feature">inherited</span>_



##### [registerCodec](../xmtp/CodecRegistry/registerCodec.md)([Codec](../xmtp/Codec-class.md)&lt;[Object](https://api.flutter.dev/flutter/dart-core/Object-class.html)> codec) void



  




##### [toString](https://api.flutter.dev/flutter/dart-core/Object/toString.html)() [String](https://api.flutter.dev/flutter/dart-core/String-class.html)



A string representation of this object.  
_<span class="feature">inherited</span>_





## Operators

##### [operator ==](https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html)([Object](https://api.flutter.dev/flutter/dart-core/Object-class.html) other) [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)



The equality operator.  
_<span class="feature">inherited</span>_















