---
sidebar_label: Dart
sidebar_position: 3
toc_max_heading_level: 4
description: "xmtp-flutter provides a Dart implementation of an XMTP message API client for use with Flutter and mobile apps."
---

# Dart SDK

The [Dart XMTP client SDK](https://github.com/xmtp/xmtp-flutter) (`xmtp-flutter`) provides a Dart implementation of an XMTP message API client for use with Flutter and mobile apps.

Build with this SDK to provide messaging between blockchain wallet addresses, including DMs, notifications, announcements, and more.

To keep up with the latest SDK developments, see the [Issues tab](https://github.com/xmtp/xmtp-flutter/issues) in the `xmtp-flutter` repo.

To learn more about XMTP and get answers to frequently asked questions, see [FAQ about XMTP](/docs/concepts/faq).

## Example app

For a basic demonstration of the core concepts and capabilities of the `xmtp-flutter` client SDK, see the [Example app project](https://github.com/xmtp/xmtp-flutter/tree/main/example).

## Reference docs

:::tip View the reference

Access the [Dart client SDK reference documentation](https://pub.dev/documentation/xmtp/latest/xmtp/xmtp-library.html) on pub.dev.

:::

## Install with Dart Package Manager

```bash
flutter pub add xmtp
```

To see more options, check out the [verified XMTP Dart package](https://pub.dev/packages/xmtp/install).

## Handle different types of content

When sending a message, you can specify the type of content. This allows you to specify different types of content than the default (a simple string, `ContentTypeText`).

To learn more about content types, see [Content types with XMTP](/docs/concepts/content-types).

Support for other types of content can be added during client construction by registering additional `Codec`s, including a `customCodecs` parameter. Every codec declares a specific content type identifier, `ContentTypeId`, which is used to signal to the client which codec should be used to process the content that is being sent or received.

```dart
/// Example [Codec] for sending [int] values around.
final contentTypeInteger = xmtp.ContentTypeId(
  authorityId: "com.example",
  typeId: "integer",
  versionMajor: 0,
  versionMinor: 1,
);
class IntegerCodec extends Codec<int> {
  @override
  xmtp.ContentTypeId get contentType => contentTypeInteger;

  @override
  Future<int> decode(xmtp.EncodedContent encoded) async =>
      Uint8List.fromList(encoded.content).buffer.asByteData().getInt64(0);

  @override
  Future<xmtp.EncodedContent> encode(int decoded) async => xmtp.EncodedContent(
    type: contentType,
    content: Uint8List(8)..buffer.asByteData().setInt64(0, decoded),
    fallback: decoded.toString(),
  );
}

// Using the custom codec to send around an integer.
var client = await Client.createFromWallet(api, wallet, customCodecs:[IntegerCodec()]);
var convo = await client.newConversation("0x...");
await client.sendMessage(convo, "Hey here comes my favorite number:");
await client.sendMessage(convo, 42, contentType: contentTypeInteger);
```

If there is a concern that the recipient may not be able to handle a non-standard content type, the sender can use the `contentFallback` option to provide a string that describes the content being sent. If the recipient fails to decode the original content, the fallback will replace it and can be used to inform the recipient what the original content was.

Codecs and content types may be proposed as interoperable standards through XRCs. To learn about the custom content type proposal process, see [XIP-5](https://github.com/xmtp/XIPs/blob/main/XIPs/xip-5-message-content-types.md).

## Compression

This package currently does not support message content compression.

## Breaking revisions

Because `xmtp-flutter` is in active development, you should expect breaking revisions that might require you to adopt the latest SDK release to enable your app to continue working as expected.

XMTP communicates about breaking revisions in the [XMTP Discord community](https://discord.gg/xmtp), providing as much advance notice as possible. Additionally, breaking revisions in an `xmtp-flutter` release will be described on the [Releases page](https://github.com/xmtp/xmtp-flutter/releases).

## Deprecation

Older versions of the SDK will eventually be deprecated, which means:

1. The network will not support and eventually actively reject connections from clients using deprecated versions.
2. Bugs will not be fixed in deprecated versions.

The following table provides the deprecation schedule.

| Announced                                                            | Effective | Minimum Version | Rationale |
| -------------------------------------------------------------------- | --------- | --------------- | --------- |
| There are no deprecations scheduled for `xmtp-flutter` at this time. |           |                 |           |

Bug reports, feature requests, and PRs are welcome in accordance with these [contribution guidelines](https://github.com/xmtp/xmtp-flutter/blob/main/CONTRIBUTING.md).
