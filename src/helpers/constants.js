export const HEADER_DATA = [
  {
    title: 'Preview new SDKs and React Native app',
    subtitle:
      'Try dev previews of Flutter and Swift client SDKs and an example React Native chat app',
    url: 'sdks-and-tools',
    icon: 'beaker-icon.svg',
  },
  {
    title: 'Quickstart: Client SDK for JavaScript',
    subtitle: 'Build apps and tools for messaging between blockchain accounts',
    url: '/docs/client-sdk/javascript/tutorials/quickstart',
    icon: 'quickstart-icon.svg',
  },
  {
    title: 'Build Lens DMs with XMTP',
    subtitle:
      'Learn how to build key XMTP chat features to provide direct messaging in a Lens app',
    url: '/docs/client-sdk/javascript/tutorials/build-key-xmtp-chat-features-in-a-lens-app',
    icon: 'dms-icon.svg',
  },
]

const tags = {
  announcements: { name: 'Announcements', url: '/blog/tags/announcements/' },
  awards: { name: 'Awards', url: '/blog/tags/awards/' },
  company: { name: 'Company', url: '/blog/tags/company/' },
  developers: { name: 'Developers', url: '/blog/tags/developers/' },
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
  {
    tag: [tags.privacySecurity, tags.protocol, tags.announcements],
    title: 'XMTP v2 Is Here',
    content:
      'The latest version brings conversation filtering and improvements to privacy',
    user: {
      name: 'Matt Galligan',
      date: '06 Dec 2022 · 3 min read',
      img: 'matt-galligan.jpeg',
      url: 'https://twitter.com/mg'
    },
    url: '/blog/xmtp-v2-is-here/',
  },
  {
    tag: [tags.developers, tags.spotlight, tags.messaging],
    title:
      'meTokens Integrates with XMTP',
    content:
      'With XMTP, meTokens enables all creators to coordinate in a privacy-based manner that is simple enough to create widespread adoption.',
    user: {
      name: 'Peter Denton',
      date: '29 Nov 2022 · 2 min read',
      img: 'peter-denton.jpeg',
      url: 'https://twitter.com/petermdenton'
    },
    url: '/blog/metokens-integrates-with-xmtp/',
  },
]

export const XMTP_NOTIF_SERVER_URL = 'https://api.github.com/repos/xmtp/example-notification-server-go'
export const XMTP_JS_URL = 'https://api.github.com/repos/xmtp/xmtp-js'
export const XMTP_FLUTTER_URL = 'https://api.github.com/repos/xmtp/xmtp-flutter'
export const XMTP_IOS_URL = 'https://api.github.com/repos/xmtp/xmtp-ios'
export const XMTP_REACT_NATIVE_URL = 'https://api.github.com/repos/xmtp/example-chat-react-native'
export const QUICKSTART_CHAT_URL = 'https://api.github.com/repos/xmtp/xmtp-quickstart-react'
export const EXAMPLE_CHAT_URL = 'https://api.github.com/repos/xmtp/example-chat-react'

export const CHAT_ITEM = {
  id: '2534740',
  full_name: 'Hosted XMTP Chat app',
  description:
    'Hosted example-react-app connected to the XMTP production network',
  text: 'Try it',
  html_url: 'https://xmtp.chat/',
  icon: 'chat-icon.svg',
}
export const VERCEL_ITEM = {
  id: '1768846',
  full_name: 'Hosted example app on dev network',
  description: 'Hosted example-react-app connected to the XMTP dev network',
  text: 'Try it',
  html_url: 'https://xmtp.vercel.app/',
  icon: 'chat-icon.svg',
}
