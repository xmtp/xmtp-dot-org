// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
require('dotenv').config()
const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

const { tailwindPlugin } = require('./src/plugins')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'The open protocol, network, and standards for secure web3 messaging',
  tagline:
    'Build with XMTP to send alerts, announcements, and messages between blockchain accounts',
  url: 'https://xmtp.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'xmtp',
  projectName: 'xmtp-dot-org',

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs/client-sdk/javascript',
          id: 'default',
          routeBasePath: 'docs/client-sdk/javascript',
          sidebarPath: require.resolve('./sidebars/sidebars-client-sdk-javascript.js'),
          showLastUpdateAuthor: false, // setting to false for now to resolve errors due to some new files not being tracked by git yet
          showLastUpdateTime: false, // setting to false for now to resolve errors due to some new files not being tracked by git yet
          editUrl: 'https://github.com/xmtp/xmtp-dot-org/tree/main',
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
        id: 'dev-concepts',
        path: 'docs/dev-concepts',
        routeBasePath: '/docs/dev-concepts',
        sidebarPath: require.resolve('./sidebars/sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'about',
        path: 'about',
        routeBasePath: 'about',
        sidebarPath: require.resolve('./sidebars/sidebars-about.js'),
      },
    ],
  ],

  clientModules: [require.resolve('./src/css/tailwind.css')],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        disableSwitch: false,
      },
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
            label: 'Docs',
            position: 'right',
            items: [
              {
                to: 'docs/client-sdk/javascript/tutorials/quickstart',
                html: `<div class="navbar__client__dropdown"><div class="navbar__client__dropdown__icon"><img src="/img/client-icon.svg" alt="icon" /></div>
                 <div class="navbar__client__dropdown_text"><div>Client SDK</div>
                 <div><small>Use the client SDK to build a web3 messaging solution</small></div></div></div>`,
              },
              {
                to: 'docs/dev-concepts/introduction',
                html: `<div class="navbar__client__dropdown"><div class="navbar__client__dropdown__icon"><img src="/img/concepts-icon.svg" alt="icon" /></div>
                 <div class="navbar__client__dropdown_text"><div>Concepts</div>
                 <div><small>Content types, supported wallets, nodes, security, and more</small></div></div></div>`,
              },
            ],
          },
          {
            to: 'sdks-and-tools', // To highlight the navbar item, you must link to a document, not a top-level directory
            position: 'right',
            label: 'SDK and tools',
            activeBaseRegex: `/`,
          },
          {
            to: 'community', // To highlight the navbar item, you must link to a document, not a top-level directory
            position: 'right',
            label: 'Community',
            activeBaseRegex: `/`,
          },
          {
            to: 'about/welcome', // To highlight the navbar item, you must link to a document, not a top-level directory
            position: 'right',
            label: 'What is XMTP?',
            activeBaseRegex: `/about/`,
          },
          {
            href: 'https://github.com/xmtp/website',
            position: 'right',
            className: 'header-github-link',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'What is XMTP?',
            items: [
              {
                label: 'Lorem ipsum',
                to: 'docs/client-sdk/javascript/tutorials/quickstart',
              },
              {
                label: 'Architectural overview',
                to: 'docs/client-sdk/javascript/tutorials/quickstart',
              },
              {
                label: 'Case studies',
                to: 'docs/client-sdk/javascript/tutorials/quickstart',
              },
              {
                label: 'Send a web3 message',
                to: 'docs/client-sdk/javascript/tutorials/quickstart',
              },
              {
                label: 'Maintenance and governance',
                to: 'docs/client-sdk/javascript/tutorials/quickstart',
              },
              {
                label: 'FAQ',
                to: 'docs/client-sdk/javascript/tutorials/quickstart',
              },
              {
                label: 'Whitepaper',
                to: 'docs/client-sdk/javascript/tutorials/quickstart',
              },
            ],
          },
          {
            title: 'Client SDK',
            items: [
              {
                label: `Tutorials`,
                to: `https://twitter.com/xmtp_`,
              },
              {
                label: `Concepts`,
                to: `https://discord.gg/xmtp`,
              },
              {
                label: `References`,
                to: `https://community.xmtp.org`,
              },
              {
                label: `Development concepts`,
                to: `https://community.xmtp.org`,
              },
              {
                label: `Lorem ipsum`,
                to: `https://community.xmtp.org`,
              },
              {
                label: `Intro to XMTP development`,
                to: `https://community.xmtp.org`,
              },
              {
                label: `Architecture`,
                to: `https://community.xmtp.org`,
              },
              {
                label: `Use cases`,
                to: `https://community.xmtp.org`,
              },
              {
                label: `Glossary`,
                to: `https://community.xmtp.org`,
              },
            ],
          },
          {
            title: 'SDK and tools',
            items: [
              {
                label: 'Client SDK',
                href: 'https://creativecommons.org/share-your-work/public-domain/cc0/',
              },
              {
                label: 'Example chat app',
                href: 'https://github.com/xmtp/website/',
              },
              {
                label: 'Hosted example chat app',
                href: 'https://github.com/xmtp/website/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discussions',
                href: 'https://creativecommons.org/share-your-work/public-domain/cc0/',
              },
              {
                label: 'Discord',
                href: 'https://github.com/xmtp/website/',
              },
              {
                label: 'Contribute to XMTP',
                href: 'https://github.com/xmtp/website/',
              },
              {
                label: 'XMTP Improvement Proposals',
                href: 'https://github.com/xmtp/website/',
              },
              {
                label: 'Twitter',
                href: 'https://github.com/xmtp/website/',
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
