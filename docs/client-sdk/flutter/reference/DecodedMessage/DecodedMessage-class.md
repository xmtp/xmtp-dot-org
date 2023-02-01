


# DecodedMessage class






    *[<Null safety>](https://dart.dev/null-safety)*



<p>This represents a fully decoded message.
It attempts to give uniform shape to v1 and v2 messages.</p>
<h2 id="offline-storage">Offline Storage</h2>
<p>Beyond ordinary offline storage concerns (secure the database, etc),
here are some tips for storing and indexing messages.</p>
<p>The <a href="./DecodedMessage/id.md">id</a> is a good message identifier for local storage purposes.
 -&gt; Tip: consider <a href="./DecodedMessage/id.md">id</a> as your primary key in the local database</p>
<p>But often you won't have an <a href="./DecodedMessage/id.md">id</a>, instead you'll have a conversation
and want to list the messages sequentially.
To support this you'll want to key by the <a href="./DecodedMessage/topic.md">topic</a> and <a href="./DecodedMessage/sentAt.md">sentAt</a> together.
 -&gt; Tip: consider <a href="./DecodedMessage/topic.md">topic</a>+<a href="./DecodedMessage/sentAt.md">sentAt</a> as an index in the local database.</p>
<p>Storing the decoded <a href="./DecodedMessage/content.md">content</a> is difficult because it can be any type.
Instead you'll want to store the <a href="./DecodedMessage/encoded.md">encoded</a> content because it can be
reliably serialized. Later, you can decode it using <code>Client.decodeContent</code>.
 -&gt; Tip: store the encoded content using <code>encoded.writeToBuffer()</code></p>
<p>See the example app for a demonstration of the overall approach.</p>




## Constructors

[DecodedMessage](./DecodedMessage/DecodedMessage.md) ([Message_Version](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/Message_Version.html) version, [DateTime](https://api.flutter.dev/flutter/dart-core/DateTime-class.html) sentAt, [EthereumAddress](https://pub.dev/documentation/web3dart/2.6.1/credentials/EthereumAddress-class.html) sender, [EncodedContent](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/EncodedContent-class.html) encoded, [ContentTypeId](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/ContentTypeId-class.html) contentType, [Object](https://api.flutter.dev/flutter/dart-core/Object-class.html) content, {required [String](https://api.flutter.dev/flutter/dart-core/String-class.html) id, required [String](https://api.flutter.dev/flutter/dart-core/String-class.html) topic})

   


## Properties

##### [content](./DecodedMessage/content.md) &#8594; [Object](https://api.flutter.dev/flutter/dart-core/Object-class.html)



This contains the <a href="./DecodedMessage/content.md">content</a> decoded by all registered codecs.
 e.g. for <a href="./contentTypeText.md">contentTypeText</a>, the <a href="./DecodedMessage/content.md">content</a> will be a <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>  
_<span class="feature">final</span>_



##### [contentType](./DecodedMessage/contentType.md) &#8594; [ContentTypeId](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/ContentTypeId-class.html)



This identifies the <a href="./DecodedMessage/content.md">content</a>'s type.  
_<span class="feature">final</span>_



##### [encoded](./DecodedMessage/encoded.md) &#8594; [EncodedContent](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/EncodedContent-class.html)



This contains the raw encoded content.  
_<span class="feature">final</span>_



##### [hashCode](https://api.flutter.dev/flutter/dart-core/Object/hashCode.html) &#8594; [int](https://api.flutter.dev/flutter/dart-core/int-class.html)



The hash code for this object.  
_<span class="feature">read-only</span><span class="feature">inherited</span>_



##### [id](./DecodedMessage/id.md) &#8594; [String](https://api.flutter.dev/flutter/dart-core/String-class.html)



A unique identifier for this message.
Tip: this is a good identifier for local caching purposes.  
_<span class="feature">final</span>_



##### [runtimeType](https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html) &#8594; [Type](https://api.flutter.dev/flutter/dart-core/Type-class.html)



A representation of the runtime type of the object.  
_<span class="feature">read-only</span><span class="feature">inherited</span>_



##### [sender](./DecodedMessage/sender.md) &#8594; [EthereumAddress](https://pub.dev/documentation/web3dart/2.6.1/credentials/EthereumAddress-class.html)



Who sent the message.  
_<span class="feature">final</span>_



##### [sentAt](./DecodedMessage/sentAt.md) &#8594; [DateTime](https://api.flutter.dev/flutter/dart-core/DateTime-class.html)



When the <a href="./DecodedMessage/sender.md">sender</a> sent this message.  
_<span class="feature">final</span>_



##### [topic](./DecodedMessage/topic.md) &#8594; [String](https://api.flutter.dev/flutter/dart-core/String-class.html)



The topic identifier for the parent conversation.  
_<span class="feature">final</span>_



##### [version](./DecodedMessage/version.md) &#8594; [Message_Version](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/Message_Version.html)



This identifies which type of message this contains.
For the most part, you are safe to ignore this.
This SDK takes pains to help you ignore the distinctions.  
_<span class="feature">final</span>_





## Methods

##### [noSuchMethod](https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html)([Invocation](https://api.flutter.dev/flutter/dart-core/Invocation-class.html) invocation) dynamic



Invoked when a non-existent method or property is accessed.  
_<span class="feature">inherited</span>_



##### [toString](./DecodedMessage/toString.md)() [String](https://api.flutter.dev/flutter/dart-core/String-class.html)



A string representation of this object.  
_<span class="feature">override</span>_





## Operators

##### [operator ==](https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html)([Object](https://api.flutter.dev/flutter/dart-core/Object-class.html) other) [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)



The equality operator.  
_<span class="feature">inherited</span>_















