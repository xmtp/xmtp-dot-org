export const HEADER_DATA = [
  {
    title: 'Start messaging with XMTP',
    subtitle:
      'Use an app built with XMTP to start learning how to build one',
    url: '/docs/tutorials/get-started/start-messaging',
    icon: 'x-new.svg',
  },
  {
    title: 'Start building with XMTP client SDKs',
    subtitle: 'Build web3 messaging apps in JavaScript, Kotlin, Swift, & Dart',
    url: '/docs/references/sdks-and-tools',
    icon: 'quickstart-icon.svg',
  },
  {
    title: 'Build Lens DMs with XMTP',
    subtitle:
      'Build key XMTP chat features to provide DMs in a Lens app',
    url: '/docs/tutorials/build/build-key-xmtp-chat-features-in-a-lens-app',
    icon: 'dms-icon.svg',
  },
]

const tags = {
  announcements: { name: 'Announcements', url: '/blog/tags/announcements/' },
  awards: { name: 'Awards', url: '/blog/tags/awards/' },
  company: { name: 'Company', url: '/blog/tags/company/' },
  contenttypes: { name: 'Content Types', url: '/blog/tags/content-types/' },
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
    tag: [tags.contenttypes, tags.developers, tags.sdks],
    title:
      'Some new content types',
    content:
      "Let's talk about some new content types for XMTP. What's a content type? A content type is a way to describe the type of content a message contains on XMTP.",
    user: {
      name: 'Engineering',
      date: '06 Mar 2023 · 7 min read',
      img: 'xmtp-icon.jpeg',
      url: 'https://twitter.com/xmtp_'
    },
    url: '/blog/attachments-and-remote-attachments',
  },
  {
    tag: [tags.developers, tags.messaging],
    title:
      'Secure web3 customer service and support with XMTP and ENS',
    content:
      "If you've been in the web3/crypto community for longer than an hour, you've probably seen a strange message that seems to accompany every Discord server.",
    user: {
      name: 'Matt Galligan',
      date: '22 Feb 2023 · 8 min read',
      img: 'matt-galligan.jpeg',
      url: 'https://twitter.com/mg'
    },
    url: '/blog/secure-web3-customer-service-and-support-with-xmtp-and-ens',
  },
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
]

export const XMTP_JS_URL = 'https://api.github.com/repos/xmtp/xmtp-js'
export const XMTP_ANDROID_URL = 'https://api.github.com/repos/xmtp/xmtp-android'
export const XMTP_IOS_URL = 'https://api.github.com/repos/xmtp/xmtp-ios'
export const XMTP_FLUTTER_URL = 'https://api.github.com/repos/xmtp/xmtp-flutter'
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
