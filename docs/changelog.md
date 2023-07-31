---
hide_table_of_contents: false
sidebar_label: Changelog
sidebar_position: 24
---

# Changelog for XMTP

This changelog provides information about release milestones for XMTP SDKs, developer tools, and node software. For information about future milestones and release status definitions, see the [Roadmap](/roadmap).

---

#### July 2023

## [React Native client SDK](https://github.com/xmtp/xmtp-react-native) is in Beta (xmtp-react-native)

Provides a package you can use to build with XMTP in a React Native or Expo app. (Jul 14)

## [Kotlin client SDK](https://github.com/xmtp/xmtp-android) is Production Ready (xmtp-android)

Provides a Kotlin implementation of an XMTP message API client for use with Android apps. (Jul 13)

---

#### May 2023

## [JavaScript client SDK](https://github.com/xmtp/xmtp-js) v9.1.0 released (xmtp-js)

This release implemented deterministic [XMTP v2 conversation topics](/docs/concepts/architectural-overview#conversation-topic-v2). This feature addresses a possible, but improbable, scenario in which two conversation topics are unintentionally created between two wallet addresses, causing unexpected conversation fragmentation. Upgrade now to get this feature that provides a **forward-only fix**. **[Read the release notes](https://github.com/xmtp/xmtp-js/releases/tag/v9.1.0)** (May 24)

## [JavaScript client SDK](https://github.com/xmtp/xmtp-js) v9.0.0 released (xmtp-js)

This release refactored the build process for `xmtp-js`, reducing the web bundle size by 10x, from 962 KB to 95 KB. **[Read the release notes](https://github.com/xmtp/xmtp-js/releases/tag/v9.0.0)** (May 9)

## [XMTP node software repo](https://github.com/xmtp/xmtpd) is public (xmtpd)

Provides `xmtpd` (XMTP daemon), an **experimental** version of XMTP node software. Making this repo public marks a crucial milestone in XMTP's progressive decentralized journey. **[Run an experimental node](https://github.com/xmtp/xmtpd/blob/main/README.md)** (May 9)

## [React client SDK](https://github.com/xmtp/xmtp-web/tree/main/packages/react-sdk) is in Beta

Provides the XMTP client SDK for React apps written in TypeScript, making it easier and faster for web apps to integrate messaging via hooks and plug-n-play components. **[Read the announcement](https://x.com/xmtp_/status/1654176551565692928)** (May 4)

## [Web SDKs and examples repo](https://github.com/xmtp/xmtp-web) is public (xmtp-web)

Provides XMTP web SDKs and examples, including a [React SDK](https://github.com/xmtp/xmtp-web/tree/main/packages/react-sdk) and [quickstart example app](https://github.com/xmtp/xmtp-web/tree/main/examples/react-quickstart). (May 4)

---

#### Apr 2023

## [React Native quickstart app repo](https://github.com/xmtp/xmtp-quickstart-react-native) is public (xmtp-quickstart-react-native)

Explore a basic XMTP React Native app that calls through to the [JavaScript client SDK](https://github.com/xmtp/xmtp-js) (`xmtp-js`) via a webview. (Apr 17)

## [JavaScript client SDK](https://github.com/xmtp/xmtp-js) v8.0.0 released (xmtp-js)

This release provides:

- Conversation list caching enabled by default
- Pre-signature callbacks
- `DecodedMessage` serialization
- A Keystore API
- **[Read the release notes](https://github.com/xmtp/xmtp-js/releases/tag/v8.0.0)** (Apr 13)

## [XMTP bot starter repo](https://github.com/xmtp/xmtp-bot-starter) is public (xmtp-bot-starter)

Provides tools to help you build a bot on the XMTP network. (Apr 11)

## [Swift client SDK](https://github.com/xmtp/xmtp-ios) is Production Ready (xmtp-ios)

Provides a Swift implementation of an XMTP message API client for use with iOS apps. (Apr 10)

## [Dart client SDK](https://github.com/xmtp/xmtp-flutter) is Production Ready (xmtp-flutter)

Provides a Dart implementation of an XMTP message API client for use with Flutter and mobile apps. (Apr 10)

---

#### Mar 2023

## [React Native client SDK repo](https://github.com/xmtp/xmtp-react-native) is public and in Alpha (xmtp-react-native)

Provides a package you can use to build with XMTP in a React Native or Expo app. (Mar 29)

## [Kotlin client SDK](https://github.com/xmtp/xmtp-android) is in Beta (xmtp-android)

Provides a Kotlin implementation of an XMTP message API client for use with Android apps. (Mar 15)

## [JavaScript client SDK remote content types repo](https://github.com/xmtp/xmtp-js-content-types) is public (xmtp-js-content-types)

Provides JavaScript implementations of content types you can use with your app built with the [`xmtp-js` client SDK](https://github.com/xmtp/xmtp-js). (Mar 1)

---

#### Feb 2023

## [XMTP Inbox iOS app repo](https://github.com/xmtp-labs/xmtp-inbox-ios) is public (xmtp-inbox-ios)

An iOS app in Swift using the [Swift client SDK](https://github.com/xmtp/xmtp-ios) (`xmtp-ios`). (Feb 1)

---

#### Jan 2023

## [XMTP Inbox web app repo](https://github.com/xmtp-labs/xmtp-inbox-web) is public (xmtp-inbox-web)

Demonstrates core and advanced capabilities of the [JavaScript client SDK](https://github.com/xmtp/xmtp-js) (`xmtp-js`) and showcases innovative ways of building with XMTP. (Jan 25)

---

#### Dec 2022

## [Swift client SDK repo](https://github.com/xmtp/xmtp-ios) is public and in Beta (xmtp-ios)

Provides a Swift implementation of an XMTP message API client for use with iOS apps. (Dec 20)

## [Dart client SDK repo](https://github.com/xmtp/xmtp-flutter) is public and in Beta (xmtp-flutter)

Provides a Dart implementation of an XMTP message API client for use with Flutter and mobile apps. (Dec 20)

## XMTP v2 is here

The latest version of XMTP brings conversation filtering and improvements to privacy. **[Read the announcement](/blog/xmtp-v2-is-here)** (Dec 7)

---

#### Nov 2022

## [Example XMTP push notifications server](https://github.com/xmtp/example-notification-server-go) in Beta (example-notification-server-go)

Provides an example push notification server, written in Golang. (Nov 18)

## [Example XMTP push notifications server repo](https://github.com/xmtp/example-notification-server-go) is public (example-notification-server-go)

Provides an example push notification server, written in Golang. (Nov 16)

## JavaScript client SDK v7.0.0 released (xmtp-js)

Provides a TypeScript implementation of an XMTP client for use with JavaScript and React apps. **[Read the release notes](https://github.com/xmtp/xmtp-js/releases/tag/v7.0.0)** (Nov 7)

## [XMTP Quickstart chat app repo](https://github.com/xmtp/xmtp-quickstart-react) is public (xmtp-quickstart-react)

Provides a 1:1 chat app built with the [JavaScript client SDK](https://github.com/xmtp/xmtp-js) (`xmtp-js`). The app is intentionally built with lightweight code to help make it easier to parse and start learning to build with XMTP. (Nov 4)

---

#### Aug 2022

## JavaScript client SDK v6.0.0 released (xmtp-js)

Provides a TypeScript implementation of an XMTP client for use with JavaScript and React apps. **[Read the release notes](https://github.com/xmtp/xmtp-js/releases/tag/v6.0.0)** (Aug 18)

---

#### Jul 2022

## JavaScript client SDK v5.0.0 released (xmtp-js)

Provides a TypeScript implementation of an XMTP client for use with JavaScript and React apps. **[Read the release notes](https://github.com/xmtp/xmtp-js/releases/tag/v5.0.0)** (Jul 18)

---

#### May 2022

## JavaScript client SDK v4.0.0 released (xmtp-js)

Provides a TypeScript implementation of an XMTP client for use with JavaScript and React apps. **[Read the release notes](https://github.com/xmtp/xmtp-js/releases/tag/v4.0.0)** (May 31)

---

#### Apr 2022

## [JavaScript client SDK repo](https://github.com/xmtp/xmtp-js) is public (xmtp-js)

Provides a TypeScript implementation of an XMTP client for use with JavaScript and React apps. (Apr 26)

## [XMTP Improvement Proposals repo](https://github.com/xmtp/XIPs) is public

The XMTP Improvement Proposals (XIPs) project aims to document standardized protocols for XMTP clients and apps in a high-quality and implementable way. (Apr 6)
