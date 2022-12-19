import React from 'react'
import ALink from '../ALink'
import '/src/css/tailwind.css'

// this provides the content in the cards in the SDKs section on the SDKs and tools page
const sdkcards = [
  {
    title: 'JavaScript client SDK',
    description: 'A TypeScript implementation of an XMTP client for use with JavaScript and React apps',
    firstLink: { name: 'GitHub repo', link: 'https://github.com/xmtp/xmtp-js' },
    secondLink: { name: 'Docs', link: 'docs/client-sdk/javascript/tutorials/quickstart' },
    logo: 'img/js.svg',
    theme: 'midnight',
  },
  {
    title: 'Flutter client SDK',
    description: '🧑‍💻 Dev preview: A Flutter implementation of an XMTP client for use with mobile apps',
    firstLink: { name: 'GitHub repo', link: 'https://github.com/xmtp/xmtp-flutter' },
    logo: 'img/flutter.svg',
    theme: 'daylight',
  },
  {
    title: 'Swift client SDK',
    description: '🧑‍💻 Dev preview: A Swift implementation of an XMTP client for use with iOS apps',
    firstLink: { name: 'GitHub repo', link: 'https://github.com/xmtp/xmtp-ios' },
    logo: 'img/swift.svg',
    theme: 'sunrise',
  },
]


// this provides the list of cards  in the SDKs section on the SDKs and tools page
const SDKCardList = () => {
  return (
    <div className="list-none grid grid-cols-1 md:grid-cols-2 px-0 gap-8 mb-8">
      {sdkcards.map((card) => (
        <div className="relative group">
          <Card
            key={card.title}
            title={card.title}
            description={card.description}
            firstLink={card.firstLink}
            secondLink={card.secondLink}
            logo={card.logo}
            theme={card.theme}
          />
        </div>
      ))}
    </div>
  )
}

// this provides the content in the cards in the Example Apps section on the SDKs and tools page
const exampleappcards = [
  {
    title: 'XMTP Quickstart Chat app',
    description: 'An example React app you can use to learn to build a basic messaging app using the XMTP client SDK',
    firstLink: { name: 'GitHub repo', link: 'https://github.com/xmtp/xmtp-quickstart-react' },
    logo: 'img/x-mark.svg',
    theme: 'midnight',
  },
  {
    title: 'XMTP Chat app',
    description: 'An example React app that demos both basic and advanced features of the XMTP client SDK',
    firstLink: { name: 'GitHub repo', link: 'https://github.com/xmtp/example-chat-react' },
    secondLink: { name: 'Try it', link: 'https://xmtp.chat/' },
    logo: 'img/x-mark.svg',
    theme: 'daylight',
  },
  {
    title: 'XMTP Chat React Native app',
    description: '🧑‍💻 Dev preview: An example app that demos how to integrate the XMTP client SDK for JavaSript into a Reative Native app',
    firstLink: { name: 'GitHub repo', link: 'https://github.com/xmtp/example-chat-react-native' },
    logo: 'img/x-mark.svg',
    theme: 'sunrise',
  },

]

// this provides the list of cards  in the Example Apps section on the SDKs and tools page
const ExampleAppCardList = () => {
  return (
    <div className="list-none grid grid-cols-1 md:grid-cols-2 px-0 gap-8 mb-8">
      {exampleappcards.map((card) => (
        <div className="relative group">
          <Card
            key={card.title}
            title={card.title}
            description={card.description}
            firstLink={card.firstLink}
            secondLink={card.secondLink}
            logo={card.logo}
            theme={card.theme}
          />
        </div>
      ))}
    </div>
  )
}

// this provides the content in the cards in the Example Apps section on the SDKs and tools page
const moretoolcards = [
  {
    title: 'XMTP status page',
    description: 'View the real-time status of the XMTP production network, XMTP dev network, and XMTP Chat app.',
    firstLink: { name: 'View status page', link: 'https://status.xmtp.com/' },
    logo: 'img/x-mark.svg',
    theme: 'midnight',
  },
]

// this provides the list of cards  in the Example Apps section on the SDKs and tools page
const MoreToolsCardList = () => {
  return (
    <div className="list-none grid grid-cols-1 md:grid-cols-2 px-0 gap-8 mb-8">
      {moretoolcards.map((card) => (
        <div className="relative group">
          <Card
            key={card.title}
            title={card.title}
            description={card.description}
            firstLink={card.firstLink}
            secondLink={card.secondLink}
            logo={card.logo}
            theme={card.theme}
          />
        </div>
      ))}
    </div>
  )
}

// this is the code that creates the individual cards
const Card = ({ title, description, firstLink, secondLink, logo, theme, className }) => {
  return (
    <div>
      <article
        className={`${theme}-theme grid grid-flow-col items-end h-36 rounded-lg relative`}
      >
        <h3 className="text-white text-xl bold ml-6 mb-6 w-9/12"> {title}</h3>
        <section className="absolute right-4 bottom-4">
          <img src={logo} alt="card-logo" className="opacity-25" />
        </section>
      </article>
      <p className="mb-2 mt-4">{description}</p>
      <ALink
        className="text-red-500 text-base font-semibold"
        to={firstLink.link}
      >
        {firstLink.name}
      </ALink>
      {secondLink ? (
        <>
          <span className="mx-4">|</span>
          <ALink
            className="text-red-500 text-base font-semibold"
            to={secondLink.link}
          >
            {secondLink.name}
          </ALink>
        </>
      ) : null}
    </div>
  )
}

export { SDKCardList };

export { ExampleAppCardList };

export { MoreToolsCardList };
