---
sidebar_label: Components quickstart
sidebar_position: 2
toc_max_heading_level: 4
---

# Quickstart for XMTP React components

![Status](https://img.shields.io/badge/Project_Status-Developer_Preview-yellow)

This package provides [React components](https://github.com/xmtp/xmtp-web/tree/main/packages/react-components) for building React apps with XMTP.

These components are in **Developer Preview** status and ready for you to start building with.

However, we do **not** recommend using Developer Preview software in production apps. Software in this status may change based on feedback.

To keep up with the latest component developments, see the [Issues tab](https://github.com/xmtp/xmtp-web/issues) in the `xmtp-web` repo.

To learn more about XMTP and get answers to frequently asked questions, see [FAQ about XMTP](/docs/dev-concepts/faq).

## What's inside?

### Components

These ready-made components can help you quickly build a chat app with XMTP.

## Requirements

- Node 16.10+
- React 16.14+

## Install

```bash
# npm
npm install @xmtp/react-components@preview

# pnpm
pnpm install @xmtp/react-components@preview

# yarn
yarn add @xmtp/react-components@preview
```

## Usage

### Include styles

To use any of the included components, you must also include their styles. To do so, import the styles from the package into your project.

```ts
import "@xmtp/react-components/styles.css";
```

:::important

The included styles contain normalizations of elements globally.

:::

## Developing

Run `yarn dev` to build the package and watch for changes, which will trigger a rebuild.

## Useful commands

- `yarn build`: Builds the package
- `yarn clean`: Removes `node_modules`, `lib`, and `.turbo` folders
- `yarn dev`: Builds the package and watches for changes, which will trigger a rebuild
- `yarn format`: Runs prettier format and write changes
- `yarn format:check`: Runs prettier format check
- `yarn lint`: Runs ESLint
- `yarn storybook`: Launches Storybook for the React components
- `yarn test`: Runs all unit tests
- `yarn typecheck`: Runs `tsc`

## Breaking revisions

Because this package is in active development, you should expect breaking revisions that might require you to adopt the latest release to enable your app to continue working as expected.

XMTP communicates about breaking revisions in the [XMTP Discord community](https://discord.gg/xmtp), providing as much advance notice as possible. Additionally, breaking revisions in a release are described on the [Releases page](https://github.com/xmtp/xmtp-react/releases).

## Deprecation

Older versions of this package will eventually be deprecated, which means bugs will not be fixed in deprecated versions.

The following table provides the deprecation schedule.

| Announced                                                      | Effective | Minimum Version | Rationale |
| -------------------------------------------------------------- | --------- | --------------- | --------- |
| There are no deprecations scheduled for this SDK at this time. |           |                 |           |

Bug reports, feature requests, and PRs are welcome in accordance with these [contribution guidelines](https://github.com/xmtp/xmtp-react/blob/main/CONTRIBUTING.md).
