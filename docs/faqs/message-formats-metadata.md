# What message formats and metadata are supported?

A message payload is transported as simply a set of bytes, which can represent any format that a developer would want to support, such as plaintext, JSON, or even non-text binary or media content. Message payloads also include references to the sender and recipient identities and timestamps; however, timestamps are not currently independently verified and may be set to any value by the sending client.

A basic message format will be available to establish broad compatability among clients. Over time the community may propose and adopt standards for message formats, either informally or through a governance process.
