// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
require('dotenv').config()
const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

const { tailwindPlugin } = require('./src/plugins')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'The open protocol, network, and standards for secure web3 messaging', // CHANGE ME
  tagline:
    'Build with XMTP to send alerts, announcements, and messages between blockchain accounts', // CHANGE ME
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
          sidebarPath: require.resolve('./sidebars/sidebars.js'),
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
        id: 'client-sdk-javascript',
        path: 'client-sdk/javascript',
        routeBasePath: 'client-sdk/javascript',
        sidebarPath: require.resolve('./sidebars/sidebars-client-sdk-javascript.js'),
        // ... other options
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'about',
        path: 'about',
        routeBasePath: 'about',
        sidebarPath: require.resolve('./sidebars/sidebars-about.js'),
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
                to: 'client-sdk/javascript/tutorials/quickstart',
                label: 'Client SDK',
              },
              {
                to: 'docs/overview',
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
            to: '/about/welcome-to-xmtp', // To highlight the navbar item, you must link to a document, not a top-level directory
            position: 'right',
            label: 'What is XMTP?',
            activeBaseRegex: `/about/`,
          },
          {
            href: 'https://github.com/xmtp/website',
            position: 'right',
          },
        ],
      },
      // still working
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Client SDK',
                to: 'client-sdk/javascript/tutorials/quickstart',
              },
              {
                label: 'Development concepts',
                to: 'docs/overview',
              },
            ],
          },
          {
            title: 'SDKs and tools',
            items: [
              {
                label: 'Client SDK',
                to: 'sdks-and-tools',
              },
              {
                label: 'Example client app repo',
                to: 'sdks-and-tools',
              },
              {
                label: 'Hosted example client apps',
                to: 'sdks-and-tools',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: `GitHub Discussions`,
                href: `community`,
              },
              {
                label: `Discord`,
                href: `community`,
              },
              {
                label: `Open source projects`,
                href: `community`,
              },
              {
                label: `XIPs`,
                href: `community`,
              },
              {
                label: `Twitter`,
                href: `community`,
              },
            ],
          },
          {
            title: 'What is XMTP?',
            items: [
              {
                label: 'Welcome',
                to: '/about/welcome-to-xmtp',
              },
              {
                label: 'FAQ',
                to: '/about/faq',
              },
            ],
          },

          {
            title: 'About this site',
            items: [
              {
                label: 'Terms',
                href: '#',
              },
              {
                label: 'Privacy',
                href: '#',
              },
              {
                label: 'CC0 No Rights Resered',
                href: 'https://creativecommons.org/share-your-work/public-domain/cc0/',
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
};

module.exports = config
