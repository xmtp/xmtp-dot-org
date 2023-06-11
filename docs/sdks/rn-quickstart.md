---
sidebar_label: React Native
sidebar_position: 6
toc_max_heading_level: 4
description: "These packages provide the XMTP client SDK for React apps, including React hooks and components."
---

# Quickstart for the React Native XMTP client SDK

The [React Native XMTP client SDK](https://github.com/xmtp/xmtp-react-native) (`xmtp-react-native`) provides a package you can use to build with XMTP in a React Native or Expo app.

Build with this SDK to provide messaging between blockchain wallet addresses, including DMs, notifications, announcements, and more.

:::caution Important

This SDK is in **alpha** status and ready for you to start experimenting with. However, we do **not** recommend using alpha software in production apps. Software in this status will change as we add features and iterate based on feedback.

:::

We're still working on adding several features to bring this SDK to parity with the [XMTP client SDK for JavaScript](https://github.com/xmtp/xmtp-js) (`xmtp-js`). Here's a [list of features and issues](https://github.com/xmtp/xmtp-react-native/issues/14) we're working on.

Is there a feature you need that's not on the list? Please [open an issue](https://github.com/xmtp/xmtp-react-native/issues).

Or better yet, open a PR and we'll get it reviewed and merged as soon as possible. If you contribute a PR that gets merged into this repo, you'll be eligible to [claim this XMTP contributor POAP](https://www.gitpoap.io/gp/1042)!

## Example app

The `xmtp-react-native` repo also provides an [example app](https://github.com/xmtp/xmtp-react-native/tree/main/example) that you can use to experiment with and explore implementation details.

Follow the [React Native guide](https://reactnative.dev/docs/environment-setup) to set up a CLI environment.

To use the example app, run:

```bash
cd example
npm install --force
npm run [ios or android]
```

## Install in a managed Expo project

```bash
npx expo prebuild
```

## Install in a bare React Native project

For bare React Native projects, [install and configure the `expo` package](https://docs.expo.dev/bare/installing-expo-modules/) before continuing.

### Add the package to your npm dependencies

```bash
npm i @xmtp/react-native-sdk
```

### Configure for iOS

```bash
npx pod-install
```

We're working on testing the end-to-end installation and will provide more platform-specific configuration details.

### Configure for Android

Your app must use Android `minSdkVersion = 22` to work with the `xmtp-react-native` SDK.

We're working on testing the end-to-end installation and will provide more platform-specific configuration details.
