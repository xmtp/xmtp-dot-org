export const HEADER_DATA = [
  {
    title: 'Development concepts',
    subtitle:
      'Learn about the protocol, architecture, encryption, authentication, and more',
    url: '/docs/dev-concepts/introduction',
    icon: 'development-icon.svg',
  },
  {
    title: 'Quickstart: Client SDK',
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
}

export const BLOG_DATA = [
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
  {
    tag: [tags.lens, tags.developers, tags.announcements, tags.spotlight],
    title: 'XMTP delivers secure DMs with the Lens API',
    content:
      'Lens Protocol has adopted XMTP to provide a secure and private DM layer for the entire Lens ecosystem.',
    user: {
      name: 'Matt Galligan',
      date: '03 Nov 2022 · 3 min read',
      img: 'matt-galligan.jpeg',
      url: 'https://blog.xmtp.com/author/mg/'
    },
    url: 'https://blog.xmtp.com/lens-dms-with-xmtp/',
  },
  {
    tag: [tags.developers, tags.hackathon, tags.messaging],
    title:
      'ETHOnline Wrap Up: De-Chat, GameJutsu, and Dehitas Take Top Honors',
    content:
      'ETH Online hackers build incredible apps across video chat, game security, and talent platforms using XMTP.',
    user: {
      name: 'Peter Denton',
      date: '05 Oct 2022 · 4 min read',
      img: 'peter-denton.jpeg',
      url: 'https://blog.xmtp.com/author/peter/'
    },
    url: 'https://blog.xmtp.com/ethonline-2022-wrap-up/',
  },
]

export const XMTP_JS_URL = 'https://api.github.com/repos/xmtp/xmtp-js'
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
