// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
require('dotenv').config()
const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

const { tailwindPlugin } = require('./src/plugins')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'XMTP: The open protocol and network for secure web3 messaging',
  tagline:
    'Build with XMTP to send messages between blockchain accounts, including DMs, alerts, announcements, and more',
  url: 'https://xmtp.org',
  customFields: {
    githubAPI: process.env.PUBLIC_URL,
    personalToken: process.env.AUTH_PERSONAL_TOKEN,
  },
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.png',
  organizationName: 'xmtp',
  projectName: 'xmtp-dot-org',
  scripts: [{src: 'https://plausible.io/js/script.outbound-links.js', async: true, defer: true, 'data-domain': 'xmtp.org'}],
  clientModules: [require.resolve('./src/css/tailwind.css')],

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs/client-sdk/javascript',
          id: 'default',
          routeBasePath: 'docs/client-sdk/javascript',
          sidebarPath: require.resolve(
            './sidebars/sidebars-client-sdk-javascript.js'
          ),
          showLastUpdateAuthor: true, // setting to false for now to resolve errors due to some new files not being tracked by git yet
          showLastUpdateTime: true, // setting to false for now to resolve errors due to some new files not being tracked by git yet
          editUrl: 'https://github.com/xmtp/xmtp-dot-org/tree/main',
        },
        blog: {
          blogDescription: 'A blog about XMTP (Extensible Message Transport Protocol), the open protocol and network for secure web3 messaging',
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: require.resolve('./src/css/tailwind.css'),
        },
      },
    ],
  ],

  plugins: [
    tailwindPlugin,
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'swift',
        path: 'docs/client-sdk/swift',
        routeBasePath: 'docs/client-sdk/swift',
        sidebarPath: require.resolve('./sidebars/sidebars-client-sdk-swift.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'dart',
        path: 'docs/client-sdk/dart',
        routeBasePath: 'docs/client-sdk/dart',
        sidebarPath: require.resolve('./sidebars/sidebars-client-sdk-dart.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'kotlin',
        path: 'docs/client-sdk/kotlin',
        routeBasePath: 'docs/client-sdk/kotlin',
        sidebarPath: require.resolve('./sidebars/sidebars-client-sdk-kotlin.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'dev-concepts',
        path: 'docs/dev-concepts',
        routeBasePath: '/docs/dev-concepts',
        sidebarPath: require.resolve('./sidebars/sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'community',
        path: 'community',
        routeBasePath: '/',
        sidebarPath: require.resolve('./sidebars/sidebars-community.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'vision',
        path: 'vision',
        routeBasePath: 'vision',
        sidebarPath: require.resolve('./sidebars/sidebars-vision.js'),
      },
    ],
  ],


  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode:'light',
        disableSwitch: false,
      },
      image: '/img/mobile-animation-bg.jpg',
      navbar: {
        title: '',
        logo: {
          className: 'navbar__logo__img',
          alt: 'XMTP Logo',
          src: 'img/logomark.svg',
          srcDark: 'img/logomark-dark.svg',
        },
        items: [
          {
            type: 'dropdown',
            label: 'Documentation',
            position: 'right',
            items: [
              {
                to: 'docs/client-sdk/javascript/concepts/intro-to-sdk',
                html: `<div class="navbar__client__dropdown"><div class="navbar__client__dropdown__icon"><img src="/img/javascript-icon.svg" alt="JavaScript icon" /></div>
                 <div class="navbar__client__dropdown_text"><div class="text-base text-semibold">JavaScript XMTP client SDK</div>
                 <div class="subtext text-sm text-normal whitespace-pre-line">Tutorials and reference for building apps in JavaScript</div></div></div>`,
              },
              {
                to: 'docs/client-sdk/kotlin/tutorials/quickstart',
                html: `<div class="navbar__client__dropdown"><div class="navbar__client__dropdown__icon"><img src="/img/kotlin-icon.svg" alt="Kotlin icon" /></div>
                 <div class="navbar__client__dropdown_text"><div class="text-base text-semibold">Kotlin XMTP client SDK</div>
                 <div class="subtext text-sm text-normal whitespace-pre-line">Tutorial for building apps in Kotlin</div></div></div>`,
              },
              {
                to: 'docs/client-sdk/swift/tutorials/quickstart',
                html: `<div class="navbar__client__dropdown"><div class="navbar__client__dropdown__icon"><img src="/img/swift-icon.svg" alt="Swift icon" /></div>
                 <div class="navbar__client__dropdown_text"><div class="text-base text-semibold">Swift XMTP client SDK</div>
                 <div class="subtext text-sm text-normal whitespace-pre-line">Tutorial for building apps in Swift</div></div></div>`,
              },
              {
                to: 'docs/client-sdk/dart/tutorials/quickstart',
                html: `<div class="navbar__client__dropdown"><div class="navbar__client__dropdown__icon"><img src="/img/dart-icon.svg" alt="Dart icon" /></div>
                 <div class="navbar__client__dropdown_text"><div class="text-base text-semibold">Dart XMTP client SDK</div>
                 <div class="subtext text-sm text-normal whitespace-pre-line">Tutorial and reference for building apps in Dart</div></div></div>`,
              },
              {
                to: 'docs/dev-concepts/introduction',
                html: `<div class="navbar__client__dropdown"><div class="navbar__client__dropdown__icon"><img src="/img/development-icon.svg" alt="Development concepts icon" /></div>
                 <div class="navbar__client__dropdown_text"><div class="text-base text-semibold">Development concepts</div>
                 <div class="subtext text-sm text-normal whitespace-pre-line">Learn about XMTP architecture, security, FAQ, and more</div></div></div>`,
              },
            ],
          },
          {
            to: 'sdks-and-tools', // To highlight the navbar item, you must link to a document, not a top-level directory
            position: 'right',
            label: 'SDKs and tools',
            activeBaseRegex: `/`,
          },
          {
            type: 'dropdown',
            position: 'right',
            label: 'Community',
            items: [
              {
                to: 'community',
                html: `<div class="navbar__client__dropdown"><div class="navbar__client__dropdown__icon"><img src="/img/user-group.svg" alt="Community icon" /></div>
                <div class="navbar__client__dropdown_text"><div class="text-base text-semibold">Join in and contribute</div>
                <div class="subtext text-sm text-normal whitespace-pre-line">Join in and contribute to the XMTP community</div></div></div>`,
              },
              {
                to: 'grants',
                html: `<div class="navbar__client__dropdown"><div class="navbar__client__dropdown__icon"><img src="/img/rocket.svg" alt="Rocket icon" /></div>
                <div class="navbar__client__dropdown_text"><div class="text-base text-semibold">Grants</div>
                <div class="subtext text-sm text-normal whitespace-pre-line">Apply for a grant for a project that fosters ecosystem growth</div></div></div>`,
              },
              {
                to: 'built-with-xmtp',
                html: `<div class="navbar__client__dropdown"><div class="navbar__client__dropdown__icon"><img src="/img/concepts-icon.svg" alt="Sparkle icon" /></div>
                <div class="navbar__client__dropdown_text"><div class="text-base text-semibold">Built with XMTP</div>
                <div class="subtext text-sm text-normal whitespace-pre-line">Explore a showcase of apps built with XMTP</div></div></div>`,
              },
              {
                to: 'community/code-of-conduct',
                html: `<div class="navbar__client__dropdown"><div class="navbar__client__dropdown__icon"><img src="/img/shield.svg" alt="Shield with a check icon" /></div>
                <div class="navbar__client__dropdown_text"><div class="text-base text-semibold">Code of conduct</div>
                 <div class="subtext text-sm text-normal whitespace-pre-line">Foster a safe and positive XMTP community experience</div></div></div>`,
              },
            ],
          },
          {
            type: 'dropdown',
            label: 'Vision',
            position: 'right',
            items: [
              {
                to: 'vision/litepaper',
                html: `<div class="navbar__client__dropdown"><div class="navbar__client__dropdown__icon"><img src="/img/document-text.svg" alt="Document icon" /></div>
                <div class="navbar__client__dropdown_text"><div class="text-base text-semibold">Litepaper</div>
                <div class="subtext text-sm text-normal whitespace-pre-line">Read the public draft of the XMTP Litepaper</div></div></div>`,
              },
              {
                to: 'vision/roadmap',
                html: `<div class="navbar__client__dropdown"><div class="navbar__client__dropdown__icon"><img src="/img/map.svg" alt="Map icon" /></div>
                <div class="navbar__client__dropdown_text"><div class="text-base text-semibold">Roadmap</div>
                 <div class="subtext text-sm text-normal whitespace-pre-line">Learn about what's in store for XMTP in the months ahead</div></div></div>`,
              },
            ],
          },
          {
            to: 'blog',
            position: 'right',
            label: 'Blog',
            activeBaseRegex: `/`,
          },
          {
            href: 'https://github.com/xmtp',
            title: 'Go to the XMTP GitHub repo',
            position: 'right',
            className: 'header-github-link',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Client SDKs',
            items: [
              {
                label: `JavaScript`,
                to: `/docs/client-sdk/javascript/concepts/intro-to-sdk`,
              },
              {
                label: `Kotlin`,
                to: `/docs/client-sdk/kotlin/tutorials/quickstart`,
              },
              {
                label: `Swift`,
                to: `/docs/client-sdk/swift/tutorials/quickstart`,
              },
              {
                label: `Dart`,
                to: `/docs/client-sdk/dart/tutorials/quickstart`,
              },
            ],
          },
          {
            title: 'Development concepts',
            items: [
              {
                label: `Intro to XMTP`,
                to: `/docs/dev-concepts/introduction`,
              },
              {
                label: `Architectural overview`,
                to: `/docs/dev-concepts/architectural-overview`,
              },
              {
                label: `FAQ`,
                to: `/docs/dev-concepts/faq`,
              },
              {
                label: `Content types`,
                to: `/docs/dev-concepts/content-types`,
              },
              {
                label: `Key generation and usage`,
                to: `/docs/dev-concepts/key-generation-and-usage`,
              },
              {
                label: `Invitation and message encryption`,
                to: `/docs/dev-concepts/invitation-and-message-encryption`,
              },
              {
                label: `Wallet app and chain support`,
                to: `/docs/dev-concepts/wallets`,
              },
              {
                label: `Account signatures`,
                to: `/docs/dev-concepts/account-signatures`,
              },
              {
                label: `Contribute to XMTP`,
                to: `/docs/dev-concepts/contributing`,
              },
              {
                label: `XMTP Improvement Proposals`,
                to: `/docs/dev-concepts/xips`,
              },
            ],
          },
          {
            title: 'SDKs and tools',
            items: [
              {
                label: 'SDKs',
                to: 'sdks-and-tools#sdks',
              },
              {
                label: 'Example apps',
                to: 'sdks-and-tools#example-apps',
              },
              {
                label: 'XMTP status page',
                href: 'https://status.xmtp.com/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Built with XMTP',
                to: 'built-with-xmtp',
              },
              {
                label: 'Discussions',
                href: 'https://github.com/orgs/xmtp/discussions',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/xmtp',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/xmtp_',
              },
              {
                label: 'Contribute to XMTP',
                to: '/docs/dev-concepts/contributing',
              },
              {
                label: 'XMTP Improvement Proposals',
                to: '/docs/dev-concepts/xips',
              },
              {
                label: 'XMTP code of conduct',
                to: '/community/code-of-conduct',
              },
              {
                label: 'Careers at XMTP Labs',
                href: 'https://blog.xmtp.com/careers/',
              },
            ],
          },
          {
            title: 'Vision',
            items: [
              {
                label: 'Litepaper',
                to: '/vision/litepaper',
              },
              {
                label: 'Roadmap',
                to: '/vision/roadmap',
              },
            ],
          },
        ],
        // copyright: `Website CC0 XMTP`,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: process.env.ALGOLIA_APP_ID,

        // Public API key: it is safe to commit it
        apiKey: process.env.ALGOLIA_API_KEY,

        indexName: process.env.ALGOLIA_INDEX_NAME,

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        // externalUrlRegex: 'external\\.com|domain\\.com',

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',

        //... other Algolia params
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
}

module.exports = config
