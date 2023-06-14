---
sidebar_label: React
sidebar_position: 5
toc_max_heading_level: 3
description: "These packages provide the XMTP client SDK for React apps, including React hooks and components."
---

# React SDK hooks and UI components

## React SDK hooks

This package provides the [React XMTP client SDK](https://github.com/xmtp/xmtp-web/tree/main/packages/react-sdk), including React hooks that provide ready-made logic for interacting with the XMTP network and work well with these [React components](#react-components).

Build with this SDK to provide messaging between blockchain wallet addresses, including DMs, notifications, announcements, and more.

:::caution Important

This SDK is in **beta** status and ready for you to start building with. However, we do **not** recommend using beta software in production apps. Software in this status may change based on feedback.

:::

To keep up with the latest SDK developments, see the [Issues tab](https://github.com/xmtp/xmtp-web/issues) in the `xmtp-web` repo.

To learn more about XMTP and get answers to frequently asked questions, see [FAQ about XMTP](/docs/concepts/faq).

### What's inside?

### Hooks

These hooks are mostly bindings to the [`xmtp-js` SDK](https://github.com/xmtp/xmtp-js) that expose the underlying data in a React way.

### Requirements

- Node 16.10+
- React 16.14+

### Install

```bash
# npm
npm install @xmtp/react-sdk@preview

# pnpm
pnpm install @xmtp/react-sdk@preview

# yarn
yarn add @xmtp/react-sdk@preview
```

#### Create React App

Requires the Buffer polyfill. See below.

If you see a lot of warnings related to source maps, see [this issue](https://github.com/facebook/create-react-app/discussions/11767) to learn more.

#### Vite

Requires the Buffer polyfill. See below.

#### Buffer polyfill

The Node Buffer API must be polyfilled in some cases. To do so, add the `buffer` dependency to your project and then polyfill it in your entry file.

**Example**

```ts
import { Buffer } from "buffer";

window.Buffer = window.Buffer ?? Buffer;
```

### Usage

#### Add the provider

To use the provided hooks, you must wrap your app with an `XMTPProvider`. This gives the hooks access to the XMTP client.

**Example**

```tsx
createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <XMTPProvider>
      <App />
    </XMTPProvider>
  </StrictMode>
);
```

### Developing

Run `yarn dev` to build the SDK and watch for changes, which will trigger a rebuild.

## React UI components

This package provides [React UI components](https://github.com/xmtp/xmtp-web/tree/main/packages/react-components) for building React apps with XMTP.

:::caution Important

These components are in **beta** status and ready for you to start building with. However, we do **not** recommend using beta software in production apps. Software in this status may change based on feedback.

:::

To keep up with the latest component developments, see the [Issues tab](https://github.com/xmtp/xmtp-web/issues) in the `xmtp-web` repo.

### What's inside?

#### Components

These ready-made UI components provide building blocks that can help you quickly a chat app with XMTP. These components pair well with the [React SDK hooks](#react-sdk-hooks).

The package also provides a Storybook that outlines each component's API, use cases, and design that you can use as an interactive learning tool.

### Requirements

- Node 16.10+
- React 16.14+

### Install

```bash
# npm
npm install @xmtp/react-components@preview

# pnpm
pnpm install @xmtp/react-components@preview

# yarn
yarn add @xmtp/react-components@preview
```

#### Include styles

To use any of the included components, you must also include their styles. To do so, import the styles from the package into your project.

```ts
import "@xmtp/react-components/styles.css";
```

:::important

The included styles contain normalizations of elements globally.

:::

### Developing

Run `yarn dev` to build the package and watch for changes, which will trigger a rebuild.

## Breaking revisions

Because these packages are in active development, you should expect breaking revisions that might require you to adopt the latest release to enable your app to continue working as expected.

XMTP communicates about breaking revisions in the [XMTP Discord community](https://discord.gg/xmtp), providing as much advance notice as possible. Additionally, breaking revisions in a release are described on the [Releases page](https://github.com/xmtp/xmtp-react/releases).

## Deprecation

Older versions of these packages will eventually be deprecated, which means:

1. The network will not support and eventually actively reject connections from clients using deprecated versions.
2. Bugs will not be fixed in deprecated versions.

The following table provides the deprecation schedule.

| Announced                                                            | Effective | Minimum Version | Rationale |
| -------------------------------------------------------------------- | --------- | --------------- | --------- |
| There are no deprecations scheduled for these packages at this time. |           |                 |           |

Bug reports, feature requests, and PRs are welcome in accordance with these [contribution guidelines](https://github.com/xmtp/xmtp-react/blob/main/CONTRIBUTING.md).
