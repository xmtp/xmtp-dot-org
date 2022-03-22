# Does XMTP support message attachments?

Not yet, but in the future this kind of use case may be supported by an XMTP message format that includes rich media as hyperlinks. Clients may provide a UI that would allow for seamless uploading, retrieval, and display of files hosted outside of the XMTP network.

[More on message formats here](message-formats-metadata.md)

## Additional detail

The contents of a message within XMTP is represented by a string, which is typically encrypted. The string may contain references to media that is stored elsewhere, which could be interpreted by clients to resemble an attachment.

Sending rich media as a part of the message itself will be discouraged as there will be a size limit placed on messages.
