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
          path: "vision",
          id: "default",
          routeBasePath: "vision",
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
            to: 'https://docs.xmtp.org/',
            position: 'right',
            label: 'Documentation ↗',
          },
          {
            to: "https://forms.gle/C5A6EEsrp4ENxnf48",
            label: "Join the XMTP Dev Community ↗",
            position: "right",
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
                label: "Community forum ↗",
                to: "https://community.xmtp.org/",
              },
              {
                label: "Dev support ↗",
                to: "https://github.com/xmtp",
              },
              {
                label: "XMTP Community blog ↗",
                to: "https://paragraph.xyz/@xmtp_community/",
              },
              {
                label: "XMTP Community events ↗",
                to: "https://lu.ma/xmtp",
              },
              {
                label: "Contribute",
                to: "/vision/community/contribute",
              },
              {
                label: "Code of conduct",
                to: "/vision/community/code-of-conduct",
              },
            ],
          },
          {
            title: "Resources",
            items: [
              {
                label: "FAQ ↗",
                to: "https://docs.xmtp.org/get-started/faq",
              },
              {
                label: "Brand assets ↗",
                to: "https://github.com/xmtp/brand",
              },
              {
                label: "Partnerships with Ephemera ↗",
                to: "https://forms.gle/UMCFjB8ukiMxBxnK6",
              },
              {
                label: "Careers at Ephemera ↗",
                to: "https://paragraph.xyz/@ephemera/careers",
              },
            ],
          },
          {
            title: "Socials",
            items: [
              {
                label: "Twitter / 𝕏 ↗",
                to: "https://x.com/xmtp_",
              },
              {
                label: "Farcaster ↗",
                to: "https://warpcast.com/~/channel/xmtp",
              },
            ],
          },
          {
            title: "Site",
            items: [
              {
                label: "Privacy policy",
                to: "privacy",
              },
              {
                label: "Terms of service",
                to: "/terms",
              },
              {
                label: "CC BY 4.0 ↗",
                to: "https://creativecommons.org/licenses/by/4.0/",
              },
            ],
          },
        ],
      },
      prism: {
        additionalLanguages: ["swift", "kotlin", "graphql"],
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
