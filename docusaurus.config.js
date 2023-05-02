// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
require('dotenv').config()
const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

const { tailwindPlugin } = require('./src/plugins')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: ' ', // Set empty string to disable site title repeating in og title for all pages. Title, descr, and home page heading set in src/pages/index.js.
  tagline:
    'Build with XMTP to send messages between blockchain accounts, including DMs, alerts, announcements, and more', // tagline on home page
  titleDelimiter: ' ', // Set empty string to disable pipe delimiter in og title
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
  scripts: [
    {
      src: 'https://plausible.io/js/script.outbound-links.js',
      async: true,
      defer: true,
      'data-domain': 'xmtp.org',
    },
  ],
  clientModules: [require.resolve('./src/css/tailwind.css')],

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs/tutorials',
          id: 'default',
          routeBasePath: 'docs/tutorials',
          sidebarPath: require.resolve(
            './sidebars/sidebars-tutorials.js'
          ),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          editUrl: 'https://github.com/xmtp/xmtp-dot-org/tree/main',
        },
        blog: {
          blogDescription:
            'A blog about XMTP (Extensible Message Transport Protocol), the open protocol and network for secure web3 messaging',
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
        id: 'references',
        path: 'docs/references',
        routeBasePath: 'docs/references',
        sidebarPath: require.resolve('./sidebars/sidebars-references.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'concepts',
        path: 'docs/concepts',
        routeBasePath: '/docs/concepts',
        sidebarPath: require.resolve('./sidebars/sidebars-concepts.js'),
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
        defaultMode: 'light',
        disableSwitch: false,
      },
      image: 'img/xmtp-card.png',
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
            to: 'docs/tutorials/start-building',
            position: 'right',
            label: 'Tutorials',
            activeBaseRegex: `/`,
          },
          {
            to: 'docs/references/sdks-and-tools',
            position: 'right',
            label: 'SDKs & tools',
            activeBaseRegex: `/`,
          },
          {
            to: 'docs/concepts/introduction',
            position: 'right',
            label: 'Key concepts',
            activeBaseRegex: `/`,
          },
          {
            to: 'vision/roadmap',
            position: 'right',
            label: 'Roadmap',
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
            to: 'blog',
            position: 'right',
            label: 'Blog',
            activeBaseRegex: `/`,
          },
          {
            to: 'docs/tutorials/start-building',
            position: 'right',
            label: '⚡️ Start building ⚡️',
            className: 'start-building_link',
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
            title: 'Tutorials',
            items: [
              {
                label: `JavaScript`,
                to: `/docs/references/javascript/classes/Client`,
              },
              {
                label: `Swift`,
                to: `/docs/references/swift/overview`,
              },
              {
                label: `Dart`,
                to: `/docs/references/dart/overview`,
              },
            ],
          },
          {
            title: 'SDK references',
            items: [
              {
                label: `JavaScript`,
                to: `/docs/references/javascript/classes/Client`,
              },
              {
                label: `Swift`,
                to: `/docs/references/swift/overview`,
              },
              {
                label: `Dart`,
                to: `/docs/references/dart/overview`,
              },
            ],
          },
          {
            title: 'Concepts',
            items: [
              {
                label: `Intro to XMTP`,
                to: `/docs/concepts/introduction`,
              },
              {
                label: `Architectural overview`,
                to: `/docs/concepts/architectural-overview`,
              },
              {
                label: `FAQ`,
                to: `/docs/concepts/faq`,
              },
              {
                label: `Interoperable inbox`,
                to: `/docs/concepts/interoperable-inbox`,
              },
              {
                label: `Content types`,
                to: `/docs/concepts/content-types`,
              },
              {
                label: `Key generation and usage`,
                to: `/docs/concepts/key-generation-and-usage`,
              },
              {
                label: `Invitation and message encryption`,
                to: `/docs/concepts/invitation-and-message-encryption`,
              },
              {
                label: `Wallet app and chain support`,
                to: `/docs/concepts/wallets`,
              },
              {
                label: `Account signatures`,
                to: `/docs/concepts/account-signatures`,
              },
              {
                label: `Contribute to XMTP`,
                to: `/docs/concepts/contributing`,
              },
              {
                label: `Releases`,
                to: `/docs/concepts/xmtp-releases`,
              },
              {
                label: `XMTP Improvement Proposals`,
                to: `/docs/concepts/xips`,
              },
            ],
          },
          {
            title: 'SDKs and tools',
            items: [
              {
                label: 'SDKs',
                to: '/docs/references/sdks-and-tools#sdks',
              },
              {
                label: 'Example apps',
                to: '/docs/references/sdks-and-tools#example-apps',
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
                to: '/docs/concepts/contributing',
              },
              {
                label: 'XMTP Improvement Proposals',
                to: '/docs/concepts/xips',
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
        additionalLanguages: ['dart', 'swift', 'kotlin'],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
}

module.exports = config
