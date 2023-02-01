


# Client class






    *[<Null safety>](https://dart.dev/null-safety)*



<p>This is the top-level entrypoint to the XMTP flutter SDK.</p>
<p>This client provides access to every user <a href="./Conversation-class.md">Conversation</a>.
See <a href="./Client/listConversations.md">listConversations</a>, <a href="./Client/streamConversations.md">streamConversations</a>.</p>
<p>It also allows the user to create a new <a href="./Conversation-class.md">Conversation</a>.
See <a href="./Client/newConversation.md">newConversation</a>.</p>
<p>And once a <a href="./Conversation-class.md">Conversation</a> has been acquired, it can be used
to <a href="./Client/listMessages.md">listMessages</a>, <a href="./Client/streamMessages.md">streamMessages</a>, and <a href="./Client/sendMessage.md">sendMessage</a>.</p>
<h2 id="creating-a-client-instance">Creating a <a href="./Client-class.md">Client</a> Instance</h2>
<p>The client has two constructors: <a href="./Client/createFromWallet.md">createFromWallet</a> and <a href="./Client/createFromKeys.md">createFromKeys</a>.</p>
<p>The first time a user uses a new device they should call <a href="./Client/createFromWallet.md">createFromWallet</a>.
This will prompt them to sign a message that either
  creates a new identity (if they're new) or
  enables their existing identity (if they've used XMTP before).
When this succeeds it configures the client with a bundle of <a href="./Client/keys.md">keys</a> that can
be stored securely on the device.</p>
<pre class="language-dart"><code>  var client = await Client.createFromWallet(wallet);
  await mySecureStorage.save(client.keys);
</code></pre>
<p>The second time a user launches the app they should call <a href="./Client/createFromKeys.md">createFromKeys</a>
using the stored <a href="./Client/keys.md">keys</a> from their previous session.</p>
<pre class="language-dart"><code>  var keys = await mySecureStorage.load();
  var client = await Client.createFromKeys(keys);
</code></pre>
<h2 id="caching--offline-storage">Caching / Offline Storage</h2>
<p>The two primary models <a href="./Conversation-class.md">Conversation</a> and <a href="./DecodedMessage-class.md">DecodedMessage</a> are designed
with offline storage in mind.
See the example app for a demonstration.
TODO: consider adding offline storage support to the SDK itself.</p>
<p>Each <a href="./Conversation-class.md">Conversation</a> is uniquely identified by its <a href="./Conversation/topic.md">Conversation.topic</a>.
And each <a href="./DecodedMessage-class.md">DecodedMessage</a> is uniquely identified by its <a href="./DecodedMessage/id.md">DecodedMessage.id</a>.
See note re "Offline Storage" atop <a href="./DecodedMessage-class.md">DecodedMessage</a>.</p>




**Implemented types**

- [Codec](./Codec-class.md)&lt;[DecodedContent](./DecodedContent-class.md)>








## Properties

##### [address](./Client/address.md) &#8594; [EthereumAddress](https://pub.dev/documentation/web3dart/2.6.1/credentials/EthereumAddress-class.html)



  
_<span class="feature">final</span>_



##### [contentType](./Client/contentType.md) &#8594; [ContentTypeId](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/ContentTypeId-class.html)



This completes the implementation of the <a href="./Codec-class.md">Codec</a> interface.  
_<span class="feature">read-only</span><span class="feature">override</span>_



##### [hashCode](https://api.flutter.dev/flutter/dart-core/Object/hashCode.html) &#8594; [int](https://api.flutter.dev/flutter/dart-core/int-class.html)



The hash code for this object.  
_<span class="feature">read-only</span><span class="feature">inherited</span>_



##### [keys](./Client/keys.md) &#8594; [PrivateKeyBundle](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/PrivateKeyBundle-class.html)



  
_<span class="feature">read-only</span>_



##### [runtimeType](https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html) &#8594; [Type](https://api.flutter.dev/flutter/dart-core/Type-class.html)



A representation of the runtime type of the object.  
_<span class="feature">read-only</span><span class="feature">inherited</span>_





## Methods

##### [canMessage](./Client/canMessage.md)([String](https://api.flutter.dev/flutter/dart-core/String-class.html) address) [Future](https://api.flutter.dev/flutter/dart-async/Future-class.html)&lt;[bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)>



Whether or not we can send messages to <code>address</code>.  




##### [decode](./Client/decode.md)([EncodedContent](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/EncodedContent-class.html) encoded) [Future](https://api.flutter.dev/flutter/dart-async/Future-class.html)&lt;[DecodedContent](./DecodedContent-class.md)>



These use all registered codecs to decode and encode content.  
_<span class="feature">override</span>_



##### [encode](./Client/encode.md)([DecodedContent](./DecodedContent-class.md) decoded) [Future](https://api.flutter.dev/flutter/dart-async/Future-class.html)&lt;[EncodedContent](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/EncodedContent-class.html)>



This is called to encode the content  
_<span class="feature">override</span>_



##### [listConversations](./Client/listConversations.md)({[DateTime](https://api.flutter.dev/flutter/dart-core/DateTime-class.html)? start, [DateTime](https://api.flutter.dev/flutter/dart-core/DateTime-class.html)? end, [int](https://api.flutter.dev/flutter/dart-core/int-class.html)? limit, [SortDirection](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/SortDirection-class.html)? sort = xmtp.SortDirection.SORT_DIRECTION_DESCENDING}) [Future](https://api.flutter.dev/flutter/dart-async/Future-class.html)&lt;[List](https://api.flutter.dev/flutter/dart-core/List-class.html)&lt;[Conversation](./Conversation-class.md)>>



This lists all the <a href="./Conversation-class.md">Conversation</a>s for the user.  




##### [listMessages](./Client/listMessages.md)([Conversation](./Conversation-class.md) conversation, {[DateTime](https://api.flutter.dev/flutter/dart-core/DateTime-class.html)? start, [DateTime](https://api.flutter.dev/flutter/dart-core/DateTime-class.html)? end, [int](https://api.flutter.dev/flutter/dart-core/int-class.html)? limit, [SortDirection](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/SortDirection-class.html) sort = xmtp.SortDirection.SORT_DIRECTION_DESCENDING}) [Future](https://api.flutter.dev/flutter/dart-async/Future-class.html)&lt;[List](https://api.flutter.dev/flutter/dart-core/List-class.html)&lt;[DecodedMessage](./DecodedMessage-class.md)>>



This lists messages sent to the <code>conversation</code>.  




##### [newConversation](./Client/newConversation.md)([String](https://api.flutter.dev/flutter/dart-core/String-class.html) address, {[String](https://api.flutter.dev/flutter/dart-core/String-class.html) conversationId = "", [Map](https://api.flutter.dev/flutter/dart-core/Map-class.html)&lt;[String](https://api.flutter.dev/flutter/dart-core/String-class.html), [String](https://api.flutter.dev/flutter/dart-core/String-class.html)> metadata = const <String, String>{}}) [Future](https://api.flutter.dev/flutter/dart-async/Future-class.html)&lt;[Conversation](./Conversation-class.md)>



This creates or resumes a <code>Conversation</code> with <code>address</code>.
If a <code>conversationId</code> is specified then that will
distinguish multiple conversations with the same user.
A new <code>conversationId</code> always creates a new conversation.  




##### [noSuchMethod](https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html)([Invocation](https://api.flutter.dev/flutter/dart-core/Invocation-class.html) invocation) dynamic



Invoked when a non-existent method or property is accessed.  
_<span class="feature">inherited</span>_



##### [sendMessage](./Client/sendMessage.md)([Conversation](./Conversation-class.md) conversation, [Object](https://api.flutter.dev/flutter/dart-core/Object-class.html) content, {[ContentTypeId](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/ContentTypeId-class.html)? contentType}) [Future](https://api.flutter.dev/flutter/dart-async/Future-class.html)&lt;[DecodedMessage](./DecodedMessage-class.md)>



This sends a new message to the <code>conversation</code>.
It returns the <code>DecodedMessage</code> to simplify optimistic local updates.
 e.g. you can display the <code>DecodedMessage</code> immediately
      without having to wait for it to come back down the stream.  




##### [streamConversations](./Client/streamConversations.md)() [Stream](https://api.flutter.dev/flutter/dart-async/Stream-class.html)&lt;[Conversation](./Conversation-class.md)>



This exposes a stream of new <code>Conversation</code>s for the user.  




##### [streamMessages](./Client/streamMessages.md)([Conversation](./Conversation-class.md) conversation) [Stream](https://api.flutter.dev/flutter/dart-async/Stream-class.html)&lt;[DecodedMessage](./DecodedMessage-class.md)>



This exposes a stream of new messages sent to the <code>conversation</code>.  




##### [terminate](./Client/terminate.md)() [Future](https://api.flutter.dev/flutter/dart-async/Future-class.html)&lt;void>



Terminate this client.  




##### [toString](https://api.flutter.dev/flutter/dart-core/Object/toString.html)() [String](https://api.flutter.dev/flutter/dart-core/String-class.html)



A string representation of this object.  
_<span class="feature">inherited</span>_





## Operators

##### [operator ==](https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html)([Object](https://api.flutter.dev/flutter/dart-core/Object-class.html) other) [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)



The equality operator.  
_<span class="feature">inherited</span>_







## Static Methods

##### [createFromKeys](./Client/createFromKeys.md)([Api](./Api-class.md) api, [PrivateKeyBundle](https://pub.dev/documentation/xmtp_proto/0.0.1-development/xmtp_proto/PrivateKeyBundle-class.html) keys, {[List](https://api.flutter.dev/flutter/dart-core/List-class.html)&lt;[Codec](./Codec-class.md)&lt;[Object](https://api.flutter.dev/flutter/dart-core/Object-class.html)>> customCodecs = const []}) [Future](https://api.flutter.dev/flutter/dart-async/Future-class.html)&lt;[Client](./Client-class.md)>



This creates a new <code>Client</code> using the saved <code>keys</code> from a
previously successful authentication.  




##### [createFromWallet](./Client/createFromWallet.md)([Api](./Api-class.md) api, [Signer](./Signer-class.md) wallet, {[List](https://api.flutter.dev/flutter/dart-core/List-class.html)&lt;[Codec](./Codec-class.md)&lt;[Object](https://api.flutter.dev/flutter/dart-core/Object-class.html)>> customCodecs = const []}) [Future](https://api.flutter.dev/flutter/dart-async/Future-class.html)&lt;[Client](./Client-class.md)>



This creates a new <code>Client</code> instance using the <a href="./Signer-class.md">Signer</a> to
trigger signature prompts to acquire user authentication keys.  












