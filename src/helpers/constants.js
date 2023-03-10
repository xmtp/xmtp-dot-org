export const HEADER_DATA = [
  {
    title: 'Start messaging with XMTP',
    subtitle:
      'Use an app built with XMTP to start learning how to build one',
    url: '/docs/client-sdk/javascript/tutorials/start-messaging',
    icon: 'x-new.svg',
  },
  {
    title: 'Quickstart: Client SDK for JavaScript',
    subtitle: 'Build apps and tools for blockchain account messaging',
    url: '/docs/client-sdk/javascript/tutorials/quickstart',
    icon: 'quickstart-icon.svg',
  },
  {
    title: 'Build Lens DMs with XMTP',
    subtitle:
      'Build key XMTP chat features to provide DMs in a Lens app',
    url: '/docs/client-sdk/javascript/tutorials/build-key-xmtp-chat-features-in-a-lens-app',
    icon: 'dms-icon.svg',
  },
]

const tags = {
  announcements: { name: 'Announcements', url: '/blog/tags/announcements/' },
  awards: { name: 'Awards', url: '/blog/tags/awards/' },
  company: { name: 'Company', url: '/blog/tags/company/' },
  developers: { name: 'Developers', url: '/blog/tags/developers/' },
  grants: { name: 'Grants', url: '/blog/tags/grants/' },
  hackathon: { name: 'Hackathon', url: '/blog/tags/hackathon/' },
  lens: { name: 'Lens', url: '/blog/tags/lens/' },
  litepaper: { name: 'Litepaper', url: '/blog/tags/litepaper/' },
  messaging: { name: 'Messaging', url: '/blog/tags/messaging/' },
  nfts: { name: 'NFTs', url: '/blog/tags/nfts/' },
  privacySecurity: { name: 'Privacy & Security', url: '/blog/tags/privacy-security/' },
  protocol: { name: 'Protocol', url: '/blog/tags/protocol/' },
  sdks: { name: 'SDKs', url: '/blog/tags/sd-ks' },
  spotlight: { name: 'Spotlight', url: '/blog/tags/spotlight/' },
  wallets: { name: 'Wallets', url: '/blog/tags/wallets/' },
}

export const BLOG_DATA = [
  {
    tag: [tags.awards, tags.developers, tags.hackathon],
    title: 'Developers show the power of video + messaging with XMTP and Livepeer',
    content:
      "Livepeer x XMTP awards wrap-up: DeUniversity's education platform, Polyfans Messenger token-gated livestream, and Livopedia's creator tools take top honors.",
    user: {
      name: 'Rich Bustos',
      date: '02 Feb 2023 · 3 min read',
      img: 'rich-headshot.jpeg',
      url: 'https://twitter.com/richrdbustos'
    },
    url: '/blog/encode-club-livepeer-wrap-up/',
  },
  {
    tag: [tags.announcements, tags.developers, tags.grants],
    title:
      'XMTP Grants: Every big idea starts small',
    content:
      'Announcing XMTP Grants! A program to nurture web3 messaging projects, support public good creation, and foster ecosystem growth.',
    user: {
      name: 'Yash Lunagaria',
      date: '25 Jan 2023 · 2 min read',
      img: 'yash-headshot.jpeg',
      url: 'https://twitter.com/yash_luna'
    },
    url: '/blog/xmtp-grants-announcement/',
  },
  {
    tag: [tags.announcements, tags.developers, tags.sdks],
    title:
      'Mobile SDKs in Developer Preview',
    content:
      'This holiday season, we have an early gift for all the web3 developers out there. XMTP mobile SDKs are now available in Developer Preview 🧑‍💻',
    user: {
      name: 'Peter Denton',
      date: '20 Dec 2022 · 2 min read',
      img: 'peter-denton.jpeg',
      url: 'https://twitter.com/petermdenton'
    },
    url: '/blog/mobile-sdk-developer-preview',
  },
]

export const XMTP_JS_URL = 'https://api.github.com/repos/xmtp/xmtp-js'
export const XMTP_FLUTTER_URL = 'https://api.github.com/repos/xmtp/xmtp-flutter'
export const XMTP_IOS_URL = 'https://api.github.com/repos/xmtp/xmtp-ios'
export const XMTP_REACT_NATIVE_URL = 'https://api.github.com/repos/xmtp/example-chat-react-native'
export const XMTP_NOTIF_SERVER_URL = 'https://api.github.com/repos/xmtp/example-notification-server-go'
export const XMTP_MEMO_URL = 'https://api.github.com/repos/xmtp/xmtp-memo-js'
export const QUICKSTART_CHAT_URL = 'https://api.github.com/repos/xmtp/xmtp-quickstart-react'

export const CHAT_ITEM = {
  id: '2534740',
  full_name: 'Hosted XMTP Inbox chat app',
  description:
    'Hosted xmtp-inbox-web app connected to the XMTP production network',
  text: 'Try it',
  html_url: 'https://xmtp.chat/',
  icon: 'chat-icon.svg',
}
