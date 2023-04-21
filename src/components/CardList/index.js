import React from 'react'
import ALink from '../ALink'
import Link from '../Link'
import '/src/css/tailwind.css'

// this provides the content in the cards in the SDKs section on the SDKs and tools page
const sdkcards = [
  {
    title: 'JavaScript client SDK',
    description: 'A TypeScript implementation of an XMTP client for use with JavaScript and React apps',
    firstLink: { name: 'Repo', link: 'https://github.com/xmtp/xmtp-js' },
    secondLink: { name: 'Tutorials', link: '/docs/tutorials/quickstart' },
    thirdLink: { name: 'Reference', link: '/docs/references/javascript/classes/Client' },
    logo: '/img/js.svg',
    theme: 'sunrise',
  },
  {
    title: 'Kotlin client SDK',
    description: '🧑‍💻 Dev preview: A Kotlin implementation of an XMTP client for use with Android apps',
    firstLink: { name: 'Repo', link: 'https://github.com/xmtp/xmtp-android' },
    secondLink: { name: 'Tutorials', link: '/docs/tutorials/quickstart' },
    logo: '/img/kotlin.svg',
    theme: 'midnight',
  },
 {
    title: 'Swift client SDK',
    description: 'A Swift implementation of an XMTP client for use with iOS apps',
    firstLink: { name: 'Repo', link: 'https://github.com/xmtp/xmtp-ios' },
    secondLink: { name: 'Tutorials', link: '/docs/tutorials/quickstart' },
    thirdLink: { name: 'Reference', link: '/docs/references/swift/overview' },
    logo: '/img/swift.svg',
    theme: 'daylight',
  },
  {
    title: 'Dart client SDK',
    description: 'A Dart implementation of an XMTP client for use with Flutter and mobile apps',
    firstLink: { name: 'Repo', link: 'https://github.com/xmtp/xmtp-flutter' },
    secondLink: { name: 'Tutorials', link: '/docs/tutorials/quickstart' },
    thirdLink: { name: 'Reference', link: '/docs/references/dart/overview' },
    logo: '/img/dart.svg',
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
            thirdLink={card.thirdLink}
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
    title: 'Quickstart React web app',
    description: 'An example React chat app you can use to learn to build a basic messaging app using the XMTP client SDK',
    firstLink: { name: 'GitHub repo', link: 'https://github.com/xmtp/xmtp-quickstart-react' },
    logo: '/img/x-mark.svg',
    theme: 'sunrise',
  },
  {
    title: 'React Native example app',
    description: '🧑‍💻 Dev preview: An example chat app that demos how to integrate the XMTP client SDK for JavaScript into a React Native app',
    firstLink: { name: 'GitHub repo', link: 'https://github.com/xmtp/example-chat-react-native' },
    logo: '/img/x-mark.svg',
    theme: 'midnight',
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
            thirdLink={card.thirdLink}
            logo={card.logo}
            theme={card.theme}
          />
        </div>
      ))}
    </div>
  )
}

// this provides the content in the cards in the Developer tools section on the SDKs and tools page
const devtoolcards = [
  {
    title: 'Push notification example server',
    description: '🧑‍💻 Dev preview: A push notification example server written in Golang. A starting point to support notifications right in your app.',
    firstLink: { name: 'GitHub repo', link: 'https://github.com/xmtp/example-notification-server-go' },
    logo: '/img/x-mark.svg',
    theme: 'sunrise',
  },
  {
    title: 'Pre-registration messaging client SDK',
    description: '👀 Pre-preview: A TypeScript implementation of an XMTP memo client that enables pre-registration messaging.',
    firstLink: { name: 'GitHub repo', link: 'https://github.com/xmtp/xmtp-memo-js' },
    logo: '/img/x-mark.svg',
    theme: 'midnight',
  },
]

// this provides the list of cards in the Developer tools section on the SDKs and tools page
const DevToolsCardList = () => {
  return (
    <div className="list-none grid grid-cols-1 md:grid-cols-2 px-0 gap-8 mb-8">
      {devtoolcards.map((card) => (
        <div className="relative group">
          <Card
            key={card.title}
            title={card.title}
            description={card.description}
            firstLink={card.firstLink}
            secondLink={card.secondLink}
            thirdLink={card.thirdLink}
            logo={card.logo}
            theme={card.theme}
          />
        </div>
      ))}
    </div>
  )
}

// this provides the content in the cards in the Ecosystem projects section on the SDKs and tools page
const ecosystemprojectscards = [
  {
    title: 'Awesome XMTP',
    description: 'Explore a growing list of GitHub repos for projects that use XMTP‍',
    firstLink: { name: 'Awesome XMTP', link: 'https://github.com/xmtp/awesome-xmtp' },
    logo: '/img/x-mark.svg',
    theme: 'sunrise',
  },
  {
    title: 'App showcase',
    description: 'Explore a curated showcase of apps built with XMTP‍',
    firstLink: { name: 'Built with XMTP', link: 'built-with-xmtp' },
    logo: '/img/x-mark.svg',
    theme: 'midnight',
  },
]

// this provides the list of cards in the Ecosystem projects section on the SDKs and tools page
const EcosystemProjectsCardList = () => {
  return (
    <div className="list-none grid grid-cols-1 md:grid-cols-2 px-0 gap-8 mb-8">
      {ecosystemprojectscards.map((card) => (
        <div className="relative group">
          <Card
            key={card.title}
            title={card.title}
            description={card.description}
            firstLink={card.firstLink}
            secondLink={card.secondLink}
            thirdLink={card.thirdLink}
            logo={card.logo}
            theme={card.theme}
          />
        </div>
      ))}
    </div>
  )
}

// this provides the content in the cards in the Status section on the SDKs and tools page
const statuscards = [
  {
    title: 'XMTP status page',
    description: 'View the real-time status of the XMTP production network, XMTP dev network, and XMTP Chat app.',
    firstLink: { name: 'View status page', link: 'https://status.xmtp.com/' },
    logo: '/img/x-mark.svg',
    theme: 'sunrise',
  },
]

// this provides the list of cards in the Status section on the SDKs and tools page
const StatusCardList = () => {
  return (
    <div className="list-none grid grid-cols-1 md:grid-cols-2 px-0 gap-8 mb-8">
      {statuscards.map((card) => (
        <div className="relative group">
          <Card
            key={card.title}
            title={card.title}
            description={card.description}
            firstLink={card.firstLink}
            secondLink={card.secondLink}
            thirdLink={card.thirdLink}
            logo={card.logo}
            theme={card.theme}
          />
        </div>
      ))}
    </div>
  )
}

// this is the code that creates the individual cards
const Card = ({ title, description, firstLink, secondLink, thirdLink, logo, theme, className }) => {
  return (
    <div>
    <ALink to={firstLink.link}>
      <article
        className={`${theme}-theme grid grid-flow-col items-end h-36 rounded-lg relative hover:shadow-lg`}
      >
        <h3 className="text-white text-xl bold ml-6 mb-6 w-9/12"> {title}</h3>
        <section className="absolute right-4 bottom-4">
            <img src={logo} alt="card-logo" className="opacity-25" />
        </section>
      </article>
      </ALink>
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
          <Link
            className="text-red-500 text-base font-semibold"
            to={secondLink.link}
          >
            {secondLink.name}
          </Link>
        </>
      ) : null}
            {thirdLink ? (
        <>
          <span className="mx-4">|</span>
          <Link
            className="text-red-500 text-base font-semibold"
            to={thirdLink.link}
          >
            {thirdLink.name}
          </Link>
        </>
      ) : null}
    </div>
  )
}

export { SDKCardList };

export { ExampleAppCardList };

export { DevToolsCardList };

export { EcosystemProjectsCardList };

export { StatusCardList };
