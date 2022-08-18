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
  scripts: [{src: 'https://plausible.io/js/plausible.js', async: true, defer: true, 'data-domain':'xmtp.org'}],

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
                label: 'Client SDK',
              },
              {
                to: 'docs/dev-concepts/introduction',
                label: 'Development concepts',
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
            title: 'XMTP',
            items: [
              {
                label: 'Docs',
                to: 'docs/client-sdk/javascript/tutorials/quickstart',
              },
            ],
          },
          {
            title: 'XMTP Community',
            items: [
              {
                label: `Twitter`,
                href: `https://twitter.com/xmtp_`,
              },
              {
                label: `XMTP Discord`,
                href: `https://discord.gg/xmtp`,
              },
              {
                label: `Community Forum`,
                href: `https://community.xmtp.org`,
              },
            ],
          },
          {
            title: 'About this site',
            items: [
              {
                label: 'Edit on Github',
                href: 'https://github.com/xmtp/website/',
              },
              {
                label: 'Terms',
                to: '/terms',
              },
              {
                label: 'Privacy',
                to: '/privacy',
              },
            ],
          },
        ],
        copyright: 'Except as otherwise noted, website content is licensed under the Creative Commons Attribution 4.0 License and code samples are licensed under the MIT License.'

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
