


# Signer class






    *[<Null safety>](https://dart.dev/null-safety)*



<p>Abstraction over a wallet with an <a href="../xmtp/Signer/address.md">address</a> that can <a href="../xmtp/Signer/signPersonalMessage.md">signPersonalMessage</a>s.</p>
<p>This is used by the <a href="../xmtp/Client-class.md">Client</a> to prompt the user to sign messages.</p>
<p>The goal with this abstraction is to expose a minimal interface so that
integrations can provide their own <a href="../xmtp/Signer-class.md">Signer</a> as necessary.</p>




## Constructors

[Signer.create](../xmtp/Signer/Signer.create.md) ([String](https://api.flutter.dev/flutter/dart-core/String-class.html) address, [Future](https://api.flutter.dev/flutter/dart-async/Future-class.html)&lt;[Uint8List](https://api.flutter.dev/flutter/dart-typed_data/Uint8List-class.html)> signPersonalMessage([String](https://api.flutter.dev/flutter/dart-core/String-class.html) text))

   


## Properties

##### [address](../xmtp/Signer/address.md) &#8594; [EthereumAddress](https://pub.dev/documentation/web3dart/2.6.1/credentials/EthereumAddress-class.html)



  
_<span class="feature">final</span>_



##### [hashCode](https://api.flutter.dev/flutter/dart-core/Object/hashCode.html) &#8594; [int](https://api.flutter.dev/flutter/dart-core/int-class.html)



The hash code for this object.  
_<span class="feature">read-only</span><span class="feature">inherited</span>_



##### [runtimeType](https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html) &#8594; [Type](https://api.flutter.dev/flutter/dart-core/Type-class.html)



A representation of the runtime type of the object.  
_<span class="feature">read-only</span><span class="feature">inherited</span>_



##### [signPersonalMessage](../xmtp/Signer/signPersonalMessage.md) &#8594; [Future](https://api.flutter.dev/flutter/dart-async/Future-class.html)&lt;[Uint8List](https://api.flutter.dev/flutter/dart-typed_data/Uint8List-class.html)> Function([String](https://api.flutter.dev/flutter/dart-core/String-class.html) text)



  
_<span class="feature">final</span>_





## Methods

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















