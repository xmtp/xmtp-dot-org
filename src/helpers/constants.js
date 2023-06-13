export const HEADER_DATA = [
  {
    title: "Try messaging with XMTP",
    subtitle: "Use an app built with XMTP to start learning how to build one",
    url: "/start-building",
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
  company: { name: "Company", url: "/blog/tags/company/" },
  contenttypes: { name: "Content Types", url: "/blog/tags/content-types/" },
  decentralization: {
    name: "Decentralization",
    url: "/blog/tags/decentralization/",
  },
  developers: { name: "Developers", url: "/blog/tags/developers/" },
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
    tag: [tags.decentralization],
    title: "XMTP: The journey to decentralization",
    content:
      "XMTP Labs is taking a phased approach toward architectural and logical decentralization of the network. The mission is to make sure the network is permissionless: owned by infrastructure providers and users that choose to participate, which can be anyone.",
    user: {
      name: "Montez",
      date: "26 May 2023 · 5 min read",
      img: "montez.png",
      url: "https://twitter.com/xmtp_",
    },
    url: "/blog/journey-to-decentralization",
  },
  {
    tag: [tags.contenttypes, tags.developers, tags.encryption, tags.sdks],
    title: "Send remote attachments with Thirdweb & XMTP SDKs",
    content:
      "Follow these steps to start sending image attachments to wallets within your chat app. Our sample app includes everything you need to connect to wallets with thirdweb's WalletSDK, use XMTP's remote attachments, and upload larger files to thirdweb's storage.",
    user: {
      name: "fabri",
      date: "12 May 2023 · 7 min read",
      img: "fabri.jpeg",
      url: "https://twitter.com/fabriguespe",
    },
    url: "/blog/thirdbweb-wallet-remote-attachments",
  },
  {
    tag: [tags.builtwithxmtp, tags.developers, tags.messaging, tags.nfts],
    title: "Join the movement: own your conversations with Converse",
    content:
      "Discover the WhatsApp for web3: end-to-end encrypted messages between wallets, that only you own and can take with you anywhere.",
    user: {
      name: "Rochelle Guillou",
      date: "9 May 2023 · 4 min read",
      img: "rochelle-headshot.jpeg",
      url: "https://twitter.com/RochelleSophie_",
    },
    url: "/blog/join-the-movement",
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
