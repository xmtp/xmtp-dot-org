export const HEADER_DATA = [
  {
    title: "Try messaging with XMTP",
    subtitle: "Use an app built with XMTP to start learning how to build one",
    url: "/docs/introduction#try-messaging-with-xmtp",
    icon: "x-new.svg",
  },
  {
    title: "Build a quickstart app",
    subtitle: "Get this quickstart app up and running in 5 minutes",
    url: "/docs/developer-quickstart",
    icon: "dms-icon.svg",
  },
  {
    title: "Start building with XMTP client SDKs",
    subtitle: "Build web3 messaging apps in React, JS, Kotlin, Swift, & Dart",
    url: "/docs/introduction#xmtp-sdks-and-example-apps",
    icon: "quickstart-icon.svg",
  },
];

const tags = {
  announcements: { name: "Announcements", url: "/blog/tags/announcements/" },
  awards: { name: "Awards", url: "/blog/tags/awards/" },
  builtwithxmtp: {
    name: "Built with XMTP",
    url: "/blog/tags/built-with-xmtp/",
  },
  canada: { name: "Canada", url: "/blog/tags/canada/" },
  company: { name: "Company", url: "/blog/tags/company/" },
  contenttypes: { name: "Content Types", url: "/blog/tags/content-types/" },
  decentralization: {
    name: "Decentralization",
    url: "/blog/tags/decentralization/",
  },
  developers: { name: "Developers", url: "/blog/tags/developers/" },
  docs: { name: "Docs", url: "/blog/tags/docs/" },
  encryption: { name: "Encryption", url: "/blog/tags/encryption/" },
  grants: { name: "Grants", url: "/blog/tags/grants/" },
  hackathon: { name: "Hackathon", url: "/blog/tags/hackathon/" },
  lens: { name: "Lens", url: "/blog/tags/lens/" },
  litepaper: { name: "Litepaper", url: "/blog/tags/litepaper/" },
  messaging: { name: "Messaging", url: "/blog/tags/messaging/" },
  nfts: { name: "NFTs", url: "/blog/tags/nfts/" },
  privacySecurity: {
    name: "Privacy & Security",
    url: "/blog/tags/privacy-security/",
  },
  protocol: { name: "Protocol", url: "/blog/tags/protocol/" },
  sdks: { name: "SDKs", url: "/blog/tags/sd-ks" },
  spotlight: { name: "Spotlight", url: "/blog/tags/spotlight/" },
  wallets: { name: "Wallets", url: "/blog/tags/wallets/" },
};

export const BLOG_DATA = [
  {
    tag: [tags.decentralization, tags.docs],
    title: "Say hello to a seamless journey for building chat apps",
    content:
      "We are incredibly excited to announce the launch of the completely revamped XMTP developer documentation!",
    user: {
      name: "Fabri",
      date: "1 Jul 2023 · 4 min read",
      img: "fabri.jpeg",
      url: "https://twitter.com/fabriguespe",
    },
    url: "/blog/docsv2",
  },
  {
    tag: [tags.developers, tags.hackathon, tags.canada],
    title: "ETH Waterloo Winning Apps",
    content:
      "Last Saturday, we had the incredible opportunity to attend ETH Waterloo. For those who may not know, Vitalik went to college in Waterloo, and the first ETH Global event was also held there.",
    user: {
      name: "Fabri",
      date: "30 Jun 2023 · 3 min read",
      img: "fabri.jpeg",
      url: "https://twitter.com/fabriguespe",
    },
    url: "/blog/eth-waterloo-2023",
  },
  {
    tag: [tags.developers, tags.messaging],
    title: "Build a feedback widget for your website",
    content:
      "I have a feeling that most of you reading this have experienced that magic when collaboration, innovation, and plain ol' FUN converge in a project you're working on.",
    user: {
      name: "J-Ha",
      date: "22 Jun 2023 · 4 min read",
      img: "jhaaaa.jpeg",
      url: "https://twitter.com/j_ha",
    },
    url: "/blog/feedback-widget",
  },
];

export const XMTP_JS_URL = "https://api.github.com/repos/xmtp/xmtp-js";
export const XMTP_ANDROID_URL =
  "https://api.github.com/repos/xmtp/xmtp-android";
export const XMTP_IOS_URL = "https://api.github.com/repos/xmtp/xmtp-ios";
export const XMTP_FLUTTER_URL =
  "https://api.github.com/repos/xmtp/xmtp-flutter";
export const XMTP_WEB_URL = "https://api.github.com/repos/xmtp/xmtp-web";
export const XMTP_NOTIF_SERVER_URL =
  "https://api.github.com/repos/xmtp/example-notification-server-go";
export const QUICKSTART_CHAT_URL =
  "https://api.github.com/repos/xmtp/xmtp-quickstart-react";

export const CHAT_ITEM = {
  id: "2534740",
  full_name: "Hosted XMTP Inbox chat app",
  description:
    "Hosted xmtp-inbox-web app connected to the XMTP production network",
  text: "Try it",
  html_url: "https://xmtp.chat/",
  icon: "chat-icon.svg",
};
