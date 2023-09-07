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
    tag: [tags.announcements, tags.developers, tags.hackathon, tags.messaging],
    title: "The Crypto Cornerstore at ETH NYC",
    content:
      "This September we're teaming up with ENS to run a crypto corner store at ETH Global NYC, powered by XMTP.",
    user: {
      name: "Rochelle",
      date: "7 Sep 2023 · 3 min read",
      img: "rochelle-headshot.jpeg",
      url: "https://x.com/RochelleSophie_",
    },
    url: "/blog/cornerstore",
  },
  {
    tag: [tags.announcements, tags.builtwithxmtp, tags.messaging],
    title: "Unstoppable Domains unlocks secure customer support with new XMTP powered messaging",
    content:
      "Dapps and creators can now reach their audience inside of the Unstoppable Domains apps.",
    user: {
      name: "Rochelle",
      date: "1 Sep 2023 · 3 min read",
      img: "rochelle-headshot.jpeg",
      url: "https://x.com/RochelleSophie_",
    },
    url: "/blog/uns-xmtp",
  },
  {
    tag: [tags.announcements, tags.developers, tags.hackathon],
    title: "Before and after ETH Paris: the future of web3 and secure, private messaging",
    content:
      "A huge thank you to everyone who participated and made ETH Paris such an exciting event!",
    user: {
      name: "Fabri",
      date: "26 Jul 2023 · 4 min read",
      img: "fabri.jpeg",
      url: "https://x.com/fabriguespe",
    },
    url: "/blog/eth-paris",
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

export const CHAT_ITEM = {
  id: "2534740",
  full_name: "Hosted XMTP Inbox chat app",
  description:
    "Hosted xmtp-inbox-web app connected to the XMTP production network",
  text: "Try it",
  html_url: "https://xmtp.chat/",
  icon: "chat-icon.svg",
};
