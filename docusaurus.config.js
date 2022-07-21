// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

const { tailwindPlugin } = require('./src/plugins')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'The open protocol, network, and standards for secure web3 messaging', // CHANGE ME
  tagline: 'Build with XMTP to send alerts, announcements, and messages between blockchain accounts', // CHANGE ME
  url: 'https://xmtp.org', // CHANGE ME
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png', // CHANGE ME / Add favicon
  organizationName: 'xmtp', // CHANGE ME / Usually your GitHub org/user name.
  projectName: 'xmtp-dot-org', // CHANGE ME / Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateAuthor: false, // setting to false for now to resolve errors due to some new files not being tracked by git yet
          showLastUpdateTime: false, // setting to false for now to resolve errors due to some new files not being tracked by git yet
          // Please change this to target repo.
          editUrl: 'https://github.com/xmtp/xmtp-dot-org/tree/main', // CHANGE ME
        },
        theme: {
          customCss: require.resolve('./src/css/tailwind.css'),
        },
      }),
    ],
  ],

  plugins: [
    tailwindPlugin,
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'dev-concepts',
        path: 'dev-concepts',
        routeBasePath: 'dev-concepts',
        sidebarPath: require.resolve('./sidebars-dev-concepts.js'),
        // ... other options
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'what-is-xmtp',
        path: 'what-is-xmtp',
        routeBasePath: 'what-is-xmtp',
        sidebarPath: require.resolve('./sidebars-what-is-xmtp.js'),
        // ... other options
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
        title: '', // CHANGE ME / Add title if necessary
        logo: {
          alt: 'XMTP Logo',
          src: 'img/logomark.svg', // CHANGE ME
          srcDark: 'img/logomark-dark.svg', // CHANGE ME
        },
        items: [
          {
            type: 'dropdown',
            label: 'Docs',
            position: 'right',
            items: [
                {
                  to: 'docs/tutorials/placeholder',
                  label: 'Client SDK',
                },
                {
                  to: 'dev-concepts/placeholder',
                  label: 'Development concepts',
                },
              ],
            },
            {
              to: 'sdks-and-tools',   // To highlight the navbar item, you must link to a document, not a top-level directory
              position: 'right',
              label: 'SDK and tools',
              activeBaseRegex: `/`,
            },
            {
              to: 'community',   // To highlight the navbar item, you must link to a document, not a top-level directory
              position: 'right',
              label: 'Community',
              activeBaseRegex: `/`,
            },
            {
              to: '/what-is-xmtp/placeholder',   // To highlight the navbar item, you must link to a document, not a top-level directory
              position: 'right',
              label: 'What is XMTP?',
              activeBaseRegex: `/what-is-xmtp/`,
            },
            {
              href: 'https://github.com/xmtp/website', // CHANGE ME
              label: 'GitHub',
              position: 'right',
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
               to: '/docs/tutorials/placeholder',
              },
            ],
          },
          {
            title: 'XMTP Community',
            items: [
              {
                label: `Twitter`,
                href: `https://twitter.com/xmtp_`
              },
              {
                label: `XMTP Discord`,
                href: `https://discord.gg/xmtp`
              },
              {
                label: `Community Forum`,
                href: `https://community.xmtp.org`
              },
            ],
          },
          {
            title: 'About this site',
            items: [
              {
                label: 'Website is CC0 No Rights Resered',
                href: 'https://creativecommons.org/share-your-work/public-domain/cc0/'
              },
              {
                label: 'Edit on Github',
                href: 'https://github.com/xmtp/website/'
              },
            ],
          },
        ],
        // copyright: `Website CC0 XMTP`,
      },
        algolia: {
        // The application ID provided by Algolia
        appId: 'ALGOLIA_APP_ID',

        // Public API key: it is safe to commit it
        apiKey: 'ALGOLIA_API_KEY',

        indexName: 'ALGOLIA_INDEX_NAME',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',

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
};

module.exports = config
