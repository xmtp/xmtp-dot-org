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
    tag: [tags.wallets, tags.privacySecurity, tags.developers, tags.messaging],
    title: 'Secure web3 messaging for wallet apps with XMTP',
    content:
      'How XMTP enables wallets to secure conversations, not just transactions and assets.',
    user: {
      name: 'Matt Galligan',
      date: '12 Sep 2022 · 6 min read',
      img: 'matt-galligan.jpeg',
      url: 'https://blog.xmtp.com/author/mg/'
    },
    url: 'https://blog.xmtp.com/secure-web3-wallet-messaging/',
  },
  {
    tag: [tags.developers, tags.litepaper, tags.messaging],
    title: 'Introducing the XMTP Litepaper Public Draft',
    content:
      'A primer on XMTP-the secure web3 messaging protocol-why we’re building it, how it works, and where we see it going in the future. A primer on XMTP-the secure web3 messaging protocol-why we’re building it, how it works, and where we see it going in the future. A primer on XMTP-the secure web3 messaging protocol-why we’re building it, how it works, and where we see it going in the future. ',
    user: {
      name: 'Matt Galligan',
      date: '31 Aug 2022 · 1 min read',
      img: 'matt-galligan.jpeg',
      url: 'https://blog.xmtp.com/author/mg/'
    },
    url: 'https://blog.xmtp.com/introducing-the-xmtp-litepaper/',
  },
  {
    tag: [tags.developers, tags.spotlight],
    title:
      'Project Spotlight: Relay Receiver, a no-code wallet chat for websites',
    content:
      'Facilitating user communication and overcoming one of web3’s biggest challenges. NFT sales, POAP events, DAO activities, etc all have very meaningful ...',
    user: {
      name: 'Peter Denton',
      date: '16 Aug 2022 · 4 min read',
      img: 'peter-denton.jpeg',
      url: 'https://blog.xmtp.com/author/peter/'
    },
    url: 'https://blog.xmtp.com/project-spotlight-relay-receiver/',
  },
]

export const XMTP_JS_URL = 'https://api.github.com/repos/xmtp/xmtp-js'
export const EXAMPLE_CHAT_URL =
  'https://api.github.com/repos/xmtp/example-chat-react'

export const CHAT_ITEM = {
  id: '2534740',
  full_name: 'Hosted example app',
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
