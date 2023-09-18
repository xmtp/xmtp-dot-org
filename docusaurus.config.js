// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
require("dotenv").config();
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const { tailwindPlugin, webpackPlugin } = require("./src/plugins");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: " ", // Set empty string to disable site title repeating in og title for all pages. Title, descr, and home page heading set in src/pages/index.js.
  tagline:
    "Build with XMTP to send messages between blockchain accounts, including DMs, alerts, announcements, and more", // tagline on home page
  titleDelimiter: " ", // Set empty string to disable pipe delimiter in og title
  url: "https://xmtp.org",
  customFields: {
    githubAPI: process.env.PUBLIC_URL,
    personalToken: process.env.AUTH_PERSONAL_TOKEN,
  },
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  favicon: "img/favi.png",
  organizationName: "xmtp",
  projectName: "xmtp-dot-org",
  scripts: [
    {
      src: "/js/myjs.js",
    },
    {
      src: "https://plausible.io/js/script.tagged-events.outbound-links.js",
      async: true,
      defer: true,
      "data-domain": "xmtp.org",
    },
    {
      src: "https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js",
      defer: true,
      "data-domain": "xmtp.org",
      crossorigin: "anonymous",
    },
    {
      src: "https://unpkg.com/flickity-fade@1/flickity-fade.js",
      defer: true,
      "data-domain": "xmtp.org",
      crossorigin: "anonymous",
    },
  ],
  clientModules: [require.resolve("./src/css/tailwind.css")],

  presets: [
    [
      "classic",
      {
        docs: {
          path: "docs",
          id: "default",
          routeBasePath: "docs",
          sidebarPath: require.resolve("./sidebars/sidebars.js"),
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
          editUrl: "https://github.com/xmtp/xmtp-dot-org/edit/main",
        },
        blog: {
          blogDescription:
            "A blog about XMTP (Extensible Message Transport Protocol), the open protocol and network for secure messaging",
          blogSidebarTitle: "All posts",
          blogSidebarCount: "ALL",
          editUrl: "https://github.com/xmtp/xmtp-dot-org/edit/main",
        },
        theme: {
          customCss: require.resolve("./src/css/tailwind.css"),
        },
      },
    ],
  ],

  plugins: [
    tailwindPlugin,
    // @ts-ignore
    webpackPlugin,
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "community",
        path: "community",
        routeBasePath: "/",
        sidebarPath: require.resolve("./sidebars/sidebars-community.js"),
        editUrl: "https://github.com/xmtp/xmtp-dot-org/tree/main",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
      },
      image: "img/xmtp-new.jpeg",
      navbar: {
        title: "",
        logo: {
          className: "navbar__logo__img",
          alt: "XMTP Logo",
          src: "img/logomark.svg",
          srcDark: "img/logomark-dark.svg",
        },
        items: [
          {
            to: "docs/introduction",
            position: "right",
            label: "Documentation",
            activeBaseRegex: `/`,
          },
          {
            type: "dropdown",
            position: "right",
            label: "Use cases",
            items: [
              {
                to: "/docs/use-cases/messaging",
                html: `<div class="navbar__client__dropdown"><div class="navbar__client__dropdown__icon"><img src="/img/messaging-icon.svg" alt="Messaging icon" /></div>
                <div class="navbar__client__dropdown_text"><div class="text-base text-semibold">Chat apps</div></div>`,
              },
              {
                to: "/docs/use-cases/deso",
                html: `<div class="navbar__client__dropdown"><div class="navbar__client__dropdown__icon"><img src="/img/social-icon.svg" alt="Social icon" /></div>
                <div class="navbar__client__dropdown_text"><div class="text-base text-semibold">Web3 social</div></div>`,
              },
              {
                to: "/docs/use-cases/marketing",
                html: `<div class="navbar__client__dropdown"><div class="navbar__client__dropdown__icon"><img src="/img/marketing-icon.svg" alt="Marketing icon" /></div>
                <div class="navbar__client__dropdown_text"><div class="text-base text-semibold">Marketing</div></div>`,
              },
              {
                to: "/docs/use-cases/automation",
                html: `<div class="navbar__client__dropdown"><div class="navbar__client__dropdown__icon"><img src="/img/chip-icon.svg" alt="Automation icon" /></div>
                <div class="navbar__client__dropdown_text"><div class="text-base text-semibold">Automation</div></div>`,
              },
              {
                to: "/docs/use-cases/support",
                html: `<div class="navbar__client__dropdown"><div class="navbar__client__dropdown__icon"><img src="/img/support-icon.svg" alt="Automation icon" /></div>
                <div class="navbar__client__dropdown_text"><div class="text-base text-semibold">Support</div></div>`,
              },
              {
                to: "/docs/use-cases/commerce",
                html: `<div class="navbar__client__dropdown"><div class="navbar__client__dropdown__icon"><img src="/img/commerce-icon.svg" alt="Automation icon" /></div>
                <div class="navbar__client__dropdown_text"><div class="text-base text-semibold">Commerce</div></div>`,
              },
              {
                to: "/docs/use-cases/defi",
                html: `<div class="navbar__client__dropdown"><div class="navbar__client__dropdown__icon"><img src="/img/finance-icon.svg" alt="Finance icon" /></div>
                <div class="navbar__client__dropdown_text"><div class="text-base text-semibold">DeFi</div></div>`,
              },
              {
                to: "/docs/use-cases/gaming",
                html: `<div class="navbar__client__dropdown"><div class="navbar__client__dropdown__icon"><img src="/img/smile.svg" alt="Smile icon" /></div>
                <div class="navbar__client__dropdown_text"><div class="text-base text-semibold">Gaming</div></div>`,
              },
              {
                to: "/docs/use-cases/dao",
                html: `<div class="navbar__client__dropdown"><div class="navbar__client__dropdown__icon"><img src="/img/finance-icon.svg" alt="Finance icon" /></div>
                <div class="navbar__client__dropdown_text"><div class="text-base text-semibold">DAOs</div></div>`,
              },
            ],
          },
          {
            type: "dropdown",
            position: "right",
            label: "Resources",
            items: [
              {
                to: "built-with-xmtp",
                html: `<div class="navbar__client__dropdown"><div class="navbar__client__dropdown__icon"><img src="/img/xmtp-icon.svg" alt="Sparkles icon" /></div>
                <div class="navbar__client__dropdown_text"><div class="text-base text-semibold">Built with XMTP</div>
                <div class="subtext text-sm text-normal whitespace-pre-line">Explore a showcase of apps built with XMTP</div></div></div>`,
              },
              {
                to: "roadmap",
                html: `<div class="navbar__client__dropdown"><div class="navbar__client__dropdown__icon"><img src="/img/map-icon.svg" alt="Map icon" /></div>
                <div class="navbar__client__dropdown_text"><div class="text-base text-semibold">Roadmap</div>
                <div class="subtext text-sm text-normal whitespace-pre-line">Future features and decentralization milestones</div></div></div>`,
              },
              {
                to: "docs/concepts/architectural-overview",
                html: `<div class="navbar__client__dropdown"><div class="navbar__client__dropdown__icon"><img src="/img/block-icon.svg" alt="Sparkle icon" /></div>
                <div class="navbar__client__dropdown_text"><div class="text-base text-semibold">Architecture</div>
                <div class="subtext text-sm text-normal whitespace-pre-line">Architecture of the XTMP network and client layers</div></div></div>`,
              },
              {
                to: "docs/faq#security",
                html: `<div class="navbar__client__dropdown"><div class="navbar__client__dropdown__icon"><img src="/img/lock-closed-icon.svg" alt="Lock icon" /></div>
                <div class="navbar__client__dropdown_text"><div class="text-base text-semibold">Security</div>
                 <div class="subtext text-sm text-normal whitespace-pre-line">Overview of XMTP security</div></div></div>`,
              },
              {
                to: "/docs/contribute",
                html: `<div class="navbar__client__dropdown"><div class="navbar__client__dropdown__icon"><img src="/img/user-group.svg" alt="Community icon" /></div>
                <div class="navbar__client__dropdown_text"><div class="text-base text-semibold">Contribute</div>
                <div class="subtext text-sm text-normal whitespace-pre-line">Contribute to the XMTP community</div></div></div>`,
              },
              {
                to: "/docs/get-featured",
                html: `<div class="navbar__client__dropdown"><div class="navbar__client__dropdown__icon"><img src="/img/support-icon.svg" alt="Automation icon" /></div>
                <div class="navbar__client__dropdown_text"><div class="text-base text-semibold">Support</div></div>`,
              },
              {
                to: "https://paragraph.xyz/@xmtp",
                html: `<div class="navbar__client__dropdown"><div class="navbar__client__dropdown__icon"><img src="/img/marketing-icon.svg" alt="Marketing icon" /></div>
                <div class="navbar__client__dropdown_text"><div class="text-base text-semibold">Newsletter</div></div>`,
              },
            ],
          },
          {
            to: "blog",
            position: "right",
            label: "Blog",
            activeBaseRegex: `/`,
          },
          {
            type: "html",
            position: "right",
            value:
              '<button type="button" onClick="window.open(`/docs/build/get-started`, `_self`);" class="navbar__sbbutton"><strong>Start building</strong></button>',
          },
          {
            type: "html",
            position: "right",
            value:
              '<button type="button" onClick="window.open(`https://xmtp.chat/`, `_blank`);" class="navbar__chatbutton"><strong>Try demo</strong></button>',
          },
          {
            href: "https://discord.com/invite/xmtp",
            title: "Go to the Discord",
            position: "right",
            className: "header-discord-link",
          },
          {
            href: "https://github.com/xmtp",
            title: "Go to the XMTP GitHub repo",
            position: "right",
            className: "header-github-link",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "SDKs",
            items: [
              {
                label: `JavaScript`,
                href: "https://github.com/xmtp/xmtp-js",
              },
              {
                label: `Swift`,
                href: `https://github.com/xmtp/xmtp-ios`,
              },
              {
                label: `Dart`,
                href: `https://github.com/xmtp/xmtp-flutter`,
              },
              {
                label: `Kotlin`,
                href: `https://github.com/xmtp/xmtp-android`,
              },
              {
                label: `React`,
                href: `https://github.com/xmtp/xmtp-web/tree/main/packages/react-sdk`,
              },
              {
                label: `React Native`,
                href: `https://github.com/xmtp/xmtp-react-native`,
              },
            ],
          },

          {
            title: "Use cases",
            items: [
              {
                label: "Chat",
                to: "/docs/use-cases/messaging",
              },
              {
                label: "Web3 social",
                to: "/docs/use-cases/deso",
              },
              {
                label: "Marketing",
                to: "/docs/use-cases/marketing",
              },
              {
                label: "Automation",
                to: "/docs/use-cases/automation",
              },
              {
                label: "Support",
                to: "/docs/use-cases/support",
              },
              {
                label: "Commerce",
                to: "/docs/use-cases/commerce",
              },
              {
                label: "DeFi",
                to: "/docs/use-cases/defi",
              },
              {
                label: "Gaming",
                to: "/docs/use-cases/gaming",
              },
              {
                label: "DAOs",
                to: "/docs/use-cases/dao",
              },
            ],
          },

          {
            title: "Resources",
            items: [
              {
                label: "Changelog",
                to: "/docs/changelog",
              },
              {
                label: "Roadmap",
                to: "roadmap",
              },
              {
                label: "Security",
                to: "/docs/faq#security",
              },
              {
                label: "FAQ",
                to: "/docs/faq",
              },
              {
                label: "Brand assets",
                href: "https://github.com/xmtp/brand",
              },
              {
                label: "Status page",
                href: "https://status.xmtp.com/",
              },
              {
                label: "Partnerships with XMTP Labs",
                href: "https://forms.gle/UMCFjB8ukiMxBxnK6",
              },
              {
                label: "Get featured",
                href: "/docs/get-featured",
              },
              {
                label: "Newsletter",
                href: "https://paragraph.xyz/@xmtp",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Code of conduct",
                to: "code-of-conduct",
              },
              {
                label: "Contribute",
                to: "/docs/contribute",
              },
              {
                label: "Built with XMTP",
                to: "built-with-xmtp",
              },
              {
                label: "Discord",
                href: "https://discord.gg/xmtp",
              },
              {
                label: "𝕏",
                href: "https://x.com/xmtp_",
              },
              {
                label: "GitHub Discussions",
                href: "https://github.com/orgs/xmtp/discussions",
              },
              {
                label: "GitHub",
                href: "https://github.com/xmtp",
              },
              {
                label: "Careers at XMTP Labs",
                href: "https://blog.xmtp.com/careers/",
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
        searchPagePath: "search",

        //... other Algolia params
      },
      prism: {
        additionalLanguages: ["dart", "swift", "kotlin", "graphql"],
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
