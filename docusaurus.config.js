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
      "data-domain": "xmtp.org",
    },
    {
      src: "https://unpkg.com/flickity-fade@1/flickity-fade.js",
      "data-domain": "xmtp.org",
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
                <div class="navbar__client__dropdown_text"><div class="text-base text-semibold">Messaging</div></div>`,
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
              {
                to: "/docs/use-cases/groups",
                html: `<div class="navbar__client__dropdown"><div class="navbar__client__dropdown__icon"><img src="/img/groups.svg" alt="Finance icon" /></div>
                <div class="navbar__client__dropdown_text"><div class="text-base text-semibold">Groups</div></div>`,
              },
              {
                to: "/docs/use-cases/frames",
                html: `<div class="navbar__client__dropdown"><div class="navbar__client__dropdown__icon"><img src="/img/frames.svg" alt="Finance icon" /></div>
                <div class="navbar__client__dropdown_text"><div class="text-base text-semibold">Frames</div></div>`,
              },
            ],
          },
          {
            type: "dropdown",
            position: "right",
            label: "Community",
            items: [
              {
                href: "https://community.xmtp.org/",
                html: `<div class="navbar__client__dropdown"><div class="navbar__client__dropdown__icon"><img src="/img/discourse-icon.svg" alt="Discourse icon" /></div>
                <div class="navbar__client__dropdown_text"><div class="text-base text-semibold">Community forum</div>`,
              },
              {
                href: "https://discord.com/invite/xmtp",
                html: `<div class="navbar__client__dropdown"><div class="navbar__client__dropdown__icon"><img src="/img/discord-nav-icon.svg" alt="Discord icon" /></div>
                <div class="navbar__client__dropdown_text"><div class="text-base text-semibold">Dev support & chat</div>`,
              },
              {
                href: "https://github.com/xmtp/awesome-xmtp/",
                html: `<div class="navbar__client__dropdown"><div class="navbar__client__dropdown__icon"><img src="/img/xmtp-icon.svg" alt="XMTP icon" /></div>
                <div class="navbar__client__dropdown_text"><div class="text-base text-semibold">Awesome XMTP</div>`,
              },
              {
                href: "https://paragraph.xyz/@xmtp_community/",
                html: `<div class="navbar__client__dropdown"><div class="navbar__client__dropdown__icon"><img src="/img/marketing-icon.svg" alt="Megaphone icon" /></div>
                <div class="navbar__client__dropdown_text"><div class="text-base text-semibold">Newsletter</div></div>`,
              },
              {
                href: "https://calendar.google.com/calendar/u/0?cid=aGlAeG10cC5vcmc",
                html: `<div class="navbar__client__dropdown"><div class="navbar__client__dropdown__icon"><img src="/img/calendar-icon.svg" alt="Calendar icon" /></div>
                <div class="navbar__client__dropdown_text"><div class="text-base text-semibold">Calendar</div>`,
              },
              {
                to: "/docs/contribute",
                html: `<div class="navbar__client__dropdown"><div class="navbar__client__dropdown__icon"><img src="/img/heart-icon.svg" alt="Heart icon" /></div>
                <div class="navbar__client__dropdown_text"><div class="text-base text-semibold">Contribute</div>`,
              },
              {
                to: "code-of-conduct",
                html: `<div class="navbar__client__dropdown"><div class="navbar__client__dropdown__icon"><img src="/img/shield.svg" alt="Shield icon" /></div>
                <div class="navbar__client__dropdown_text"><div class="text-base text-semibold">Code of conduct</div>`,
              },
            ],
          },
          {
            type: "html",
            position: "right",
            value:
              '<button type="button" onClick="window.open(`https://xmtp.chat/`, `_blank`);" class="navbar__chatbutton"><strong>Try demo</strong></button>',
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
            title: "Community",
            items: [
              {
                label: "Community forum",
                href: "https://community.xmtp.org/",
              },
              {
                label: "Dev support & chat",
                href: "https://discord.gg/xmtp",
              },
              {
                label: "Awesome XMTP",
                href: "https://github.com/xmtp/awesome-xmtp/",
              },
              {
                label: "Newsletter",
                href: "https://paragraph.xyz/@xmtp_community/",
              },
              {
                label: "Calendar",
                href: "https://calendar.google.com/calendar/u/0/r?cid=aGlAeG10cC5vcmc",
              },
              {
                label: "Contribute",
                to: "/docs/contribute",
              },
              {
                label: "Code of conduct",
                to: "code-of-conduct",
              },
            ],
          },
          {
            title: "Resources",
            items: [
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
                label: "Careers at XMTP Labs",
                href: "https://blog.xmtp.com/careers/",
              },
            ],
          },
          {
            title: "Company",
            items: [
              {
                label: "🅧",
                href: "https://x.com/xmtp_",
              },
              {
                label: "Farcaster",
                href: "https://warpcast.com/~/channel/xmtp",
              },
              {
                label: "Terms of service",
                href: "/terms",
              },
              {
                label: "Terms of service",
                href: "/terms",
              },
              {
                label: "Privacy policy",
                href: "/privacy",
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
