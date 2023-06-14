---
sidebar_label: Kotlin
sidebar_position: 4
toc_max_heading_level: 4
description: "xmtp-android provides a Kotlin implementation of an XMTP message API client for use with Android apps."
---

# Kotlin SDK

The [Kotlin XMTP client SDK](https://github.com/xmtp/xmtp-android) (`xmtp-android`) provides a Kotlin implementation of an XMTP message API client for use with Android apps.

Build with this SDK to provide messaging between blockchain wallet addresses, including DMs, notifications, announcements, and more.

:::caution Important

This SDK is in **beta** status and ready for you to start building. However, we do **not** recommend using beta software in production apps. Software in this status may change based on feedback.

:::

Specifically, while push notifications should work with the current SDK, we are working on providing push notifications in the example app. We are also working on providing performance optimizations in the example app. These updates to the example app may inform changes to the SDK.

Follow along in the [tracking issue](https://github.com/xmtp/xmtp-android/issues/1) for updates.

To learn more about XMTP and get answers to frequently asked questions, see [FAQ about XMTP](/docs/concepts/faq).

## Example app

For a basic demonstration of the core concepts and capabilities of the `xmtp-android` client SDK, see the [Example app project](https://github.com/xmtp/xmtp-android/tree/main/example). This is currently a work in progress.

## Install from Maven Central

You can find the latest package version on [Maven Central](https://central.sonatype.com/artifact/org.xmtp/android).

```bash
implementation 'org.xmtp:android:X.X.X'
```

## Handle different types of content

All the send functions support `SendOptions` as an optional parameter. The `contentType` option allows specifying different types of content than the default simple string, which is identified with content type identifier `ContentTypeText`.

To learn more about content types, see [Content types with XMTP](/docs/concepts/content-types).

Support for other types of content can be added by registering additional `ContentCodecs` with the `Client`. Every codec is associated with a content type identifier, `ContentTypeId`, which is used to signal to the client which codec should be used to process the content that is being sent or received.

For example, to learn about the codecs available in `xmtp-android`, see [Use content types in your app](https://github.com/xmtp/xmtp-android/blob/main/library/src/main/java/org/xmtp/android/library/codecs/README.md).

If there is a concern that the recipient may not be able to handle a non-standard content type, the sender can use the `contentFallback` option to provide a string that describes the content being sent. If the recipient fails to decode the original content, the fallback will replace it and can be used to inform the recipient what the original content was.

```kotlin
// Assuming we've loaded a fictional NumberCodec that can be used to encode numbers,
// and is identified with ContentTypeNumber, we can use it as follows.
Client.register(codec = NumberCodec())

val options = ClientOptions(api = ClientOptions.Api(contentType = ContentTypeNumber, contentFallback = "sending you a pie"))
aliceConversation.send(content = 3.14, options = options)
```

Custom codecs and content types may be proposed as interoperable standards through XRCs. To learn about the custom content type proposal process, see [XIP-5](https://github.com/xmtp/XIPs/blob/main/XIPs/xip-5-message-content-types.md).

## Breaking revisions

Because `xmtp-android` is in active development, you should expect breaking revisions that might require you to adopt the latest SDK release to enable your app to continue working as expected.

XMTP communicates about breaking revisions in the [XMTP Discord community](https://discord.gg/xmtp), providing as much advance notice as possible. Additionally, breaking revisions in an `xmtp-android` release are described on the [Releases page](https://github.com/xmtp/xmtp-android/releases).

## Deprecation

Older versions of the SDK will eventually be deprecated, which means:

1. The network will not support and eventually actively reject connections from clients using deprecated versions.
2. Bugs will not be fixed in deprecated versions.

The following table provides the deprecation schedule.

| Announced                                                            | Effective | Minimum Version | Rationale |
| -------------------------------------------------------------------- | --------- | --------------- | --------- |
| There are no deprecations scheduled for `xmtp-android` at this time. |           |                 |           |

Bug reports, feature requests, and PRs are welcome in accordance with these [contribution guidelines](https://github.com/xmtp/xmtp-android/blob/main/CONTRIBUTING.md).
