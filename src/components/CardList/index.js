import React from "react";
import ALink from "../ALink";
import "/src/css/tailwind.css";

// this provides the content in the cards in the SDKs section on the SDKs and tools page
const sdkcards = [
  {
    title: "JavaScript client SDK",
    description:
      "A TypeScript implementation of an XMTP client for use with JavaScript and React apps",
    firstLink: { name: "GitHub repo", link: "https://github.com/xmtp/xmtp-js" },
    secondLink: {
      name: "Docs",
      link: "docs/client-sdk/javascript/tutorials/quickstart",
    },
    logo: "img/js.svg",
    theme: "sunrise",
  },
  {
    title: "Kotlin client SDK",
    description:
      "🧑‍💻 Dev preview: A Kotlin implementation of an XMTP client for use with Android apps",
    firstLink: {
      name: "GitHub repo",
      link: "https://github.com/xmtp/xmtp-android",
    },
    secondLink: {
      name: "Docs",
      link: "docs/client-sdk/kotlin/tutorials/quickstart",
    },
    logo: "img/kotlin.svg",
    theme: "midnight",
  },
  {
    title: "Swift client SDK",
    description:
      "A Swift implementation of an XMTP client for use with iOS apps",
    firstLink: {
      name: "GitHub repo",
      link: "https://github.com/xmtp/xmtp-ios",
    },
    secondLink: {
      name: "Docs",
      link: "docs/client-sdk/swift/tutorials/quickstart",
    },
    logo: "img/swift.svg",
    theme: "daylight",
  },
  {
    title: "React client SDK",
    description:
      "🧑‍💻 Dev preview: A TypeScript implementation of an XMTP client for use with React apps",
    firstLink: {
      name: "GitHub repo",
      link: "https://github.com/xmtp/xmtp-web/tree/main/packages/react-sdk",
    },
    secondLink: {
      name: "Docs",
      link: "docs/client-sdk/react/tutorials/quickstart",
    },
    logo: "img/react.svg",
    theme: "sunrise",
  },
];

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
  );
};

// this provides the content in the cards in the Developer tools section on the SDKs and tools page
const devtoolcards = [
  {
    title: "Push notification example server",
    description:
      "🧑‍💻 Dev preview: A push notification example server written in Golang. A starting point to support notifications right in your app.",
    firstLink: {
      name: "GitHub repo",
      link: "https://github.com/xmtp/example-notification-server-go",
    },
    logo: "img/x-mark.svg",
    theme: "sunrise",
  },
  {
    title: "Pre-registration messaging client SDK",
    description:
      "👀 Pre-preview: A TypeScript implementation of an XMTP memo client that enables pre-registration messaging.",
    firstLink: {
      name: "GitHub repo",
      link: "https://github.com/xmtp/xmtp-memo-js",
    },
    logo: "img/x-mark.svg",
    theme: "midnight",
  },
];

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
            logo={card.logo}
            theme={card.theme}
          />
        </div>
      ))}
    </div>
  );
};

// this provides the content in the cards in the Ecosystem projects section on the SDKs and tools page
const ecosystemprojectscards = [
  {
    title: "App showcase",
    description: "Explore a curated showcase of apps built with XMTP‍",
    firstLink: { name: "Built with XMTP", link: "built-with-xmtp" },
    logo: "img/x-mark.svg",
    theme: "midnight",
  },
];

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
            logo={card.logo}
            theme={card.theme}
          />
        </div>
      ))}
    </div>
  );
};

// this provides the content in the cards in the Status section on the SDKs and tools page
const statuscards = [
  {
    title: "XMTP status page",
    description:
      "View the real-time status of the XMTP production network, XMTP dev network, and XMTP Chat app.",
    firstLink: { name: "View status page", link: "https://status.xmtp.com/" },
    logo: "img/x-mark.svg",
    theme: "sunrise",
  },
];

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
            logo={card.logo}
            theme={card.theme}
          />
        </div>
      ))}
    </div>
  );
};

// this is the code that creates the individual cards
const Card = ({
  title,
  description,
  firstLink,
  secondLink,
  logo,
  theme,
  className,
}) => {
  return (
    <div>
      <ALink to={firstLink.link}>
        <article
          className={`${theme}-theme grid grid-flow-col items-end h-36 rounded-lg relative hover:shadow-lg`}>
          <h3 className="text-white text-xl bold ml-6 mb-6 w-9/12"> {title}</h3>
          <section className="absolute right-4 bottom-4">
            <img src={logo} alt="card-logo" className="opacity-25" />
          </section>
        </article>
      </ALink>
      <p className="mb-2 mt-4">{description}</p>
      <ALink
        className="text-red-500 text-base font-semibold"
        to={firstLink.link}>
        {firstLink.name}
      </ALink>
      {secondLink ? (
        <>
          <span className="mx-4">|</span>
          <ALink
            className="text-red-500 text-base font-semibold"
            to={secondLink.link}>
            {secondLink.name}
          </ALink>
        </>
      ) : null}
    </div>
  );
};

export { SDKCardList };

export { DevToolsCardList };

export { EcosystemProjectsCardList };

export { StatusCardList };
