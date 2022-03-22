# XMTP Website Starter Kit

This web starter is built using [Docusaurus 2](https://docusaurus.io/) and [Tailwind CSS](https://tailwindcss.com/docs/installation).

This repo will serve as the base for new websites to be built at `xmtp.com` (for XMTP Labs) and `xmtp.org` (for XMTP). Any changes that would need to happen on both sites should be made here, and upstream changes pulled in each individual repo.

## What is different than base Docusaurus?

### Files added

``` txt
website # Root directory of your site
└── src
    └── css
        ├── tailwind.css // global changes to be made here, replaces custom.css
└── tailwind.config.js
```

### Plugins added

- [Tailwind CSS](https://tailwindcss.com/docs/installation)
- Docusaurus
  - [`plugin-google-gtag`](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-google-gtag)

### Components added

- …

## Installation

``` txt
npm install
```

## Local Development

``` txt
npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

``` txt
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

See the [official project documentation](https://docusaurus.io/docs/2.0.0-beta.15/deployment) on Deployment.
