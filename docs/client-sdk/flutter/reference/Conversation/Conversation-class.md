


# Conversation class






    *[<Null safety>](https://dart.dev/null-safety)*



<p>This represents an ongoing conversation.
It can be provided to <a href="./Client-class.md">Client</a> to <code>listMessages</code> and <code>sendMessage</code>.
The <a href="./Client-class.md">Client</a> also allows you to <code>streamMessages</code> from this <a href="./Conversation-class.md">Conversation</a>.</p>
<p>It attempts to give uniform shape to v1 and v2 conversations.</p>




## Constructors

[Conversation.v1](./Conversation/Conversation.v1.md) ([DateTime](https://api.flutter.dev/flutter/dart-core/DateTime-class.html) createdAt, {required [EthereumAddress](https://pub.dev/documentation/web3dart/2.6.1/credentials/EthereumAddress-class.html) me, required [EthereumAddress](https://pub.dev/documentation/web3dart/2.6.1/credentials/EthereumAddress-class.html) peer})

   

[Conversation.v2](./Conversation/Conversation.v2.md) ([InvitationV1](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/InvitationV1-class.html) invite, [DateTime](https://api.flutter.dev/flutter/dart-core/DateTime-class.html) createdAt, {required [EthereumAddress](https://pub.dev/documentation/web3dart/2.6.1/credentials/EthereumAddress-class.html) me, required [EthereumAddress](https://pub.dev/documentation/web3dart/2.6.1/credentials/EthereumAddress-class.html) peer})

   


## Properties

##### [conversationId](./Conversation/conversationId.md) &#8594; [String](https://api.flutter.dev/flutter/dart-core/String-class.html)



This distinctly identifies between two addresses.
Note: this will be empty for older v1 conversations.  
_<span class="feature">final</span>_



##### [createdAt](./Conversation/createdAt.md) &#8594; [DateTime](https://api.flutter.dev/flutter/dart-core/DateTime-class.html)



When the conversation was first created.  
_<span class="feature">final</span>_



##### [hashCode](https://api.flutter.dev/flutter/dart-core/Object/hashCode.html) &#8594; [int](https://api.flutter.dev/flutter/dart-core/int-class.html)



The hash code for this object.  
_<span class="feature">read-only</span><span class="feature">inherited</span>_



##### [invite](./Conversation/invite.md) &#8594; [InvitationV1](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/InvitationV1-class.html)



This contains the invitation to this conversation.
Note: this will be empty for older v1 conversations.  
_<span class="feature">final</span>_



##### [me](./Conversation/me.md) &#8594; [EthereumAddress](https://pub.dev/documentation/web3dart/2.6.1/credentials/EthereumAddress-class.html)



This is the address for me, the configured client user.  
_<span class="feature">final</span>_



##### [metadata](./Conversation/metadata.md) &#8594; [Map](https://api.flutter.dev/flutter/dart-core/Map-class.html)&lt;[String](https://api.flutter.dev/flutter/dart-core/String-class.html), [String](https://api.flutter.dev/flutter/dart-core/String-class.html)>



This contains any additional conversation context.
Note: this will be empty for older v1 conversations.  
_<span class="feature">final</span>_



##### [peer](./Conversation/peer.md) &#8594; [EthereumAddress](https://pub.dev/documentation/web3dart/2.6.1/credentials/EthereumAddress-class.html)



This is the address of the peer that I am talking to.  
_<span class="feature">final</span>_



##### [runtimeType](https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html) &#8594; [Type](https://api.flutter.dev/flutter/dart-core/Type-class.html)



A representation of the runtime type of the object.  
_<span class="feature">read-only</span><span class="feature">inherited</span>_



##### [topic](./Conversation/topic.md) &#8594; [String](https://api.flutter.dev/flutter/dart-core/String-class.html)



This is the underlying unique topic name for this conversation.
NOTE: this is a good identifier for local caching purposes.  
_<span class="feature">final</span>_



##### [version](./Conversation/version.md) &#8594; [Message_Version](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/Message_Version.html)



This indicates whether this a v1 or v2 conversation.  
_<span class="feature">final</span>_





## Methods

##### [noSuchMethod](https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html)([Invocation](https://api.flutter.dev/flutter/dart-core/Invocation-class.html) invocation) dynamic



Invoked when a non-existent method or property is accessed.  
_<span class="feature">inherited</span>_



##### [toString](./Conversation/toString.md)() [String](https://api.flutter.dev/flutter/dart-core/String-class.html)



A string representation of this object.  
_<span class="feature">override</span>_





## Operators

##### [operator ==](https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html)([Object](https://api.flutter.dev/flutter/dart-core/Object-class.html) other) [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)



The equality operator.  
_<span class="feature">inherited</span>_















