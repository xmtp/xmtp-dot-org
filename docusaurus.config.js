// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

const { tailwindPlugin } = require('./src/plugins')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'XMTP Labs Website Starter Kit', // CHANGE ME
  tagline: 'Start Here', // CHANGE ME
  url: 'https://xmtp.com', // CHANGE ME
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png', // CHANGE ME / Add favicon
  organizationName: 'xmtp-labs', // CHANGE ME / Usually your GitHub org/user name.
  projectName: 'web-starter', // CHANGE ME / Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to target repo.
          editUrl: 'https://github.com/xmtp-labs/web-starter/tree/main', // CHANGE ME
        },
        blog: {
          showReadingTime: true,
          // Please change this to target repo.
          editUrl:
            'https://github.com/xmtp-labs/web-starter/tree/main', // CHANGE ME
        },
        theme: {
          customCss: require.resolve('./src/css/tailwind.css'),
        },
        gtag: {
          trackingID: '3342098857', // CHANGE ME to the correct Google Analytics tag
          anonymizeIP: true,
        },
      }),
    ],
  ],

  plugins: [
    tailwindPlugin,
  ],

  clientModules: [require.resolve('./src/css/tailwind.css')],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'XMTP Labs Website Starter Kit',
        logo: {
          alt: 'XMTP Logo',
          src: 'img/logomark.svg', // CHANGE ME
          srcDark: 'img/logomark-color-dark.png', // CHANGE ME
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/xmtp-labs/web-starter', // CHANGE ME
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/xmtp',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/xmtp;_',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/xmtp-labs/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} XMTP Labs`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config
