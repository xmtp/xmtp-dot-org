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
  developers: {
    name: 'Developers',
    url: 'https://blog.xmtp.com/tag/developers/',
  },
  lens: { name: 'Lens', url: 'https://blog.xmtp.com/tag/lens/' },
  announcements: { name: 'Announcements', url: 'https://blog.xmtp.com/tag/announcements/' },
  litepaper: { name: 'Litepaper', url: 'https://blog.xmtp.com/tag/litepaper/' },
  messaging: { name: 'Messaging', url: 'https://blog.xmtp.com/tag/messaging/' },
  spotlight: { name: 'Spotlight', url: 'https://blog.xmtp.com/tag/spotlight/' },
  hackathon: {
    name: 'Hackathon',
    url: 'https://blog.xmtp.com/tag/hackathon/',
  },
  nfts: { name: 'NFTs', url: 'https://blog.xmtp.com/tag/nfts/' },
  wallets: { name: 'Wallets', url: 'https://blog.xmtp.com/tag/wallets/' },
  privacySecurity: { name: 'Privacy & Security', url: 'https://blog.xmtp.com/tag/privacy-security/' },
  protocol: { name: 'Protocol', url: 'https://blog.xmtp.com/tag/protocol/' },
}

export const BLOG_DATA = [
  {
    tag: [tags.privacySecurity, tags.protocol, tags.announcements],
    title: 'XMTP v2 Is Here',
    content:
      'The latest version brings conversation filtering and improvements to privacy',
    user: {
      name: 'Matt Galligan',
      date: '06 Dec 2022 · 3 min read',
      img: 'matt-galligan.jpeg',
      url: 'https://blog.xmtp.com/author/mg/'
    },
    url: 'https://blog.xmtp.com/xmtp-v2-is-here/',
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
      url: 'https://blog.xmtp.com/author/peter/'
    },
    url: 'https://blog.xmtp.com/metokens-integrates-with-xmtp/',
  },
  {
    tag: [tags.developers, tags.hackathon, tags.spotlight],
    title:
      'ETH San Francisco Wrap-up',
    content:
      '"Wow" is just about the best way we could sum up ETHGlobal`s ETHSanFrancisco.',
    user: {
      name: 'Peter Denton',
      date: '22 Nov 2022 · 3 min read',
      img: 'peter-denton.jpeg',
      url: 'https://blog.xmtp.com/author/peter/'
    },
    url: 'https://blog.xmtp.com/eth-sf-2022/',
  },
]

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
