// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
require('dotenv').config()
const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

const { tailwindPlugin, webpackPlugin } = require('./src/plugins')

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
          path: 'docs',
          id: 'default',
          routeBasePath: 'docs',
          sidebarPath: require.resolve(
            './sidebars/sidebars.js'
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
    // @ts-ignore
    webpackPlugin,
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'community',
        path: 'community',
        routeBasePath: '/',
        sidebarPath: require.resolve('./sidebars/sidebars-community.js'),
        editUrl: 'https://github.com/xmtp/xmtp-dot-org/tree/main',
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
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
            to: 'docs/introduction',
            position: 'right',
            label: 'Documentation',
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
            position: 'right',
            label: 'Resources',
            items: [
              {
                to: 'docs/changelog',
                html: `<div class="navbar__client__dropdown"><div class="navbar__client__dropdown__icon"><img src="/img/gift-icon.svg" alt="Gift icon" /></div>
                <div class="navbar__client__dropdown_text"><div class="text-base text-semibold">Changelog</div>
                <div class="subtext text-sm text-normal whitespace-pre-line">Latest releases for SDKs, dev tools, and node software</div></div></div>`,
              },
              {
                to: 'roadmap',
                html: `<div class="navbar__client__dropdown"><div class="navbar__client__dropdown__icon"><img src="/img/map-icon.svg" alt="Map icon" /></div>
                <div class="navbar__client__dropdown_text"><div class="text-base text-semibold">Roadmap</div>
                <div class="subtext text-sm text-normal whitespace-pre-line">Future feature and decentralization milestones</div></div></div>`,
              },
              {
                to: 'docs/concepts/architectural-overview',
                html: `<div class="navbar__client__dropdown"><div class="navbar__client__dropdown__icon"><img src="/img/block-icon.svg" alt="Sparkle icon" /></div>
                <div class="navbar__client__dropdown_text"><div class="text-base text-semibold">Architecture</div>
                <div class="subtext text-sm text-normal whitespace-pre-line">Architecture of the network and client layers of XMTP</div></div></div>`,
              },
              {
                to: 'docs/concepts/faq#security',
                html: `<div class="navbar__client__dropdown"><div class="navbar__client__dropdown__icon"><img src="/img/lock-closed-icon.svg" alt="Lock icon" /></div>
                <div class="navbar__client__dropdown_text"><div class="text-base text-semibold">Security</div>
                 <div class="subtext text-sm text-normal whitespace-pre-line">Overview of the security features of XMTP</div></div></div>`,
              },              
              {
                to: 'docs/concepts/faq',
                html: `<div class="navbar__client__dropdown"><div class="navbar__client__dropdown__icon"><img src="/img/question-mark-icon.svg" alt="Shield with a check icon" /></div>
                <div class="navbar__client__dropdown_text"><div class="text-base text-semibold">FAQ</div>
                 <div class="subtext text-sm text-normal whitespace-pre-line">FAQ about the network, fees, storage, and more</div></div></div>`,
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
            type: 'html',
            position: 'right',
            value: '<button type="button" onClick="window.open(`/docs/build/start-building`, `_self`);" class="navbar__sbbutton"><strong>Start building</strong></button>',
          },
          {
            type: 'html',
            position: 'right',
            value: '<button type="button" onClick="window.open(`https://xmtp.chat/`, `_blank`);" class="navbar__chatbutton"><strong>Try app</strong></button>',
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
            title: 'SDKs',
            items: [
              {
                label: `JavaScript`,
                to: `/docs/sdks/js-quickstart`,
              },
              {
                label: `Swift`,
                to: `/docs/sdks/swift-quickstart`,
              },
              {
                label: `Dart`,
                to: `/docs/sdks/dart-quickstart`,
              },
              {
                label: `Kotlin`,
                to: `/docs/sdks/kotlin-quickstart`,
              },
              {
                label: `React`,
                to: `/docs/sdks/react-quickstart`,
              },
              {
                label: `SDK references`,
                to: `/docs/sdks/references`,
              },
            ],
          },
          {
            title: 'Build',
            items: [
              {
                label: `Start building`,
                to: `/docs/build/start-building`,
              },
              {
                label: `Lens DMs`,
                to: `/docs/build/build-key-xmtp-chat-features-in-a-lens-app`,
              },
              {
                label: `CyberConnect DMs`,
                to: `/docs/build/build-messaging-for-cyberconnect-profiles`,
              },
              {
                label: `Filter conversations`,
                to: `/docs/build/filter-conversations`,
              },
              {
                label: `Label conversations`,
                to: `/docs/build/label-conversations`,
              },
              {
                label: `Content types`,
                to: `/docs/build/use-content-types`,
              },
              {
                label: `Push notifications (Swift/iOS)`,
                to: `/docs/build/handle-push-notifications`,
              },
              {
                label: `Hello world app`,
                to: `/docs/build/build-an-xmtp-hello-world-app`,
              },
              {
                label: 'Changelog',
                to: '/docs/changelog',
              },
            ],
          },
          {
            title: 'Concepts',
            items: [
              {
                label: `Intro to XMTP`,
                to: `/docs/introduction`,
              },
              {
                label: `FAQ`,
                to: `/docs/concepts/faq`,
              },
              {
                label: `Architecture`,
                to: `/docs/concepts/architectural-overview`,
              },
              {
                label: `Content types`,
                to: `/docs/concepts/content-types`,
              },
              {
                label: `Interoperable inbox`,
                to: `/docs/concepts/interoperable-inbox`,
              },
              {
                label: `Keys`,
                to: `/docs/concepts/key-generation-and-usage`,
              },
              {
                label: `Encryption`,
                to: `/docs/concepts/invitation-and-message-encryption`,
              },
              {
                label: `Account signatures`,
                to: `/docs/concepts/account-signatures`,
              },
              {
                label: `Algorithms`,
                to: `/docs/concepts/algorithms-in-use`,
              },
              {
                label: `Works with XMTP`,
                to: `/docs/concepts/works-with-xmtp`,
              },
              {
                label: `Contribute`,
                to: `/docs/concepts/contributing`,
              },
              {
                label: `XIPs`,
                to: `/docs/concepts/xips`,
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Join in and contribute',
                to: 'community',
              },
              {
                label: 'Grants',
                to: 'grants',
              },
              {
                label: 'Built with XMTP',
                to: 'built-with-xmtp',
              },
              {
                label: 'Code of conduct',
                to: '/community/code-of-conduct',
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
                label: 'GitHub Discussions',
                href: 'https://github.com/orgs/xmtp/discussions',
              },
              {
                label: 'Careers at XMTP Labs',
                href: 'https://blog.xmtp.com/careers/',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Changelog',
                to: '/docs/changelog',
              },
              {
                label: 'Roadmap',
                to: 'roadmap',
              },
              {
                label: 'Architecture',
                to: '/docs/concepts/architectural-overview',
              },
              {
                label: 'Security',
                to: '/docs/concepts/faq#security',
              },
              {
                label: 'FAQ',
                to: '/docs/concepts/faq',
              },
              {
                label: 'XMTP status page',
                href: 'https://status.xmtp.com/',
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
