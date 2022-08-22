import React from 'react'
import { useColorMode } from '@docusaurus/theme-common'

export const MainContent = ({ styles }) => {
  const { colorMode } = useColorMode()

  return (
    <main className={`max-w-screen-max mx-auto ${colorMode}`}>
      <div className={styles.bannerCards}>
        <div className="bg-white dark:bg-neutral-900 rounded-lg border-black dark:border-neutral-700 border border-solid px-8 py-6 w-432 ml-12 flex flex-col justify-between">
          <div className="flex justify-between">
            <h4 className="text-red-500 text-xl">What is XMTP?</h4>
            <img
              className="h-5 mt-1"
              src="/img/xmtp-icon.svg"
              alt="xmtp icon"
            />
          </div>
          <div className="text-2xl font-semibold mb-0 dark:text-white">
            Learn about the protocol, network, case studies, litepaper, and
            <p className="mb-0 mt-5">{'->'}</p>
          </div>
        </div>
        <div className="bg-white dark:bg-neutral-900 rounded-lg border-black dark:border-neutral-700 border border-solid px-8 py-6 w-432 mx-6 flex flex-col justify-between">
          <div className="flex justify-between">
            <h4 className="text-red-500 text-xl">Quickstart: Client SDK</h4>
            <img
              className="h-5 mt-1"
              src="/img/quickstart-icon.svg"
              alt="quickstart icon"
            />
          </div>
          <div className="text-2xl font-semibold mb-0">
            Build apps and tools for messaging between blockchain accounts
            <p className="mb-0 mt-5">{'->'}</p>
          </div>
        </div>
        <div className="bg-white dark:bg-neutral-900 rounded-lg border-black dark:border-neutral-700 border border-solid px-8 py-6 w-432 mr-12 flex flex-col justify-between">
          <div className="flex justify-between">
            <h4 className="text-red-500 text-xl">Development concepts</h4>
            <img
              className="h-5 mt-1"
              src="/img/development-icon.svg"
              alt="development icon"
            />
          </div>
          <div className="text-2xl font-semibold mb-0">
            Learn about clients, nodes, message encryption, authentication, and
            more
            <p className="mb-0 mt-5">{'->'}</p>
          </div>
        </div>
      </div>
      <div className="flex mt-20 max-w-screen-max mx-auto">
        <img
          src={
            colorMode === 'light'
              ? '/img/build-xmtp.png'
              : '/img/build-xmtp-dark.png'
          }
          alt="laptop"
        />
        <div className='max-w-[437px]'>
          <h4 className="text-4xl font-bold mb-2">Build with XMTP</h4>
          <small className="text-base text-neutral-800 dark:text-neutral-300">
            Deliver apps and tools that enable messaging between blockchain
            accounts. Want to talk about a use case?
            <span className="text-red-500 font-bold">
              Join in the discussion
            </span>
          </small>
          <ul>
            <li className="flex mt-10 flex-row">
              <img className="w-12 h-12 mr-4" src="/img/alerts-icon.png" />
              <div>
                <p className="text-black dark:text-white text-xl font-bold mb-2">
                  Alerts
                </p>
                <small className="text-base">
                  Enable apps to keep users informed with timely event-based
                  notifications
                </small>
              </div>
            </li>
            <li className="flex mt-6 flex-row">
              <img className="w-12 h-12 mr-4" src="/img/announce-icon.png" />
              <div>
                <p className="text-black dark:text-white text-xl font-bold mb-2">
                  Announcements
                </p>
                <small className="text-base">
                  Enable apps to engage users with meaningful one-to-many
                  messaging
                </small>
              </div>
            </li>
            <li className="flex mt-6 flex-row">
              <img className="w-12 h-12 mr-4" src="/img/dm-icon.png" />
              <div>
                <p className="text-black dark:text-white text-xl font-bold mb-2">
                  Direct messaging
                </p>
                <small className="text-base">
                  Enable users to connect and build community with one-to-one
                  messaging
                </small>
              </div>
            </li>
          </ul>
          <button className="bg-red-500 text-white border-none rounded-lg py-3 px-5 font-bold text-base w-44 mt-10 h-12 cursor-pointer hover:bg-red-600">
            <img
              className="w-5 h-5 mr-2 align-middle"
              src="/img/xmtp-sm-icon.png"
            />
            Start building
          </button>
        </div>
      </div>
      <div className="mt-14 ml-12 flex mb-12">
        <div className="w-56 mr-6 mt-4">
          <p className="text-xl font-bold mb-2">SDK and tools</p>
          <small className="text-base">
            Use the SDK and dev tools to help you build with XMTP
          </small>
        </div>
        <div className="flex">
          <img
            onClick={() => {
              document.getElementsByClassName('inner-div')[0].scrollLeft -= 100
            }}
            src="/img/right-arrow.svg"
            className="-scale-x-100 cursor-pointer"
          />
        </div>
        <div className="inner-div flex flex-nowrap overflow-x-scroll w-3/4 flex-1 scroll-smooth">
          <div className="w-[430px] h-32 border-gray-200 dark:border-neutral-700 p-4 mr-6 border-x border-y border-solid flex-[0_0_auto]">
            <p className="text-xl font-bold mb-0 text-blue-600 text-base">
              <img className="align-middle mr-2" src="/img/repo.png" />
              xmtp-js client SDK
            </p>
            <small className="text-base text-sm text-gray-600 dark:text-neutral-300">
              A TypeScript implementation of the XMTP client protocol for use
              with JavaScript and React applications
            </small>
            <div className="flex flex-row mt-3">
              <div className="text-xs mr-5 flex">
                <div className="rounded-full bg-cyan-700 w-3.5 h-3.5 mr-1"></div>
                TypeScript
              </div>
              <div className="text-xs mr-5 flex items-start">
                <img src="/img/star-icon.svg" className="mr-1" />
                54
              </div>
              <div className="text-xs mr-5 flex items-start">
                <img src="/img/branch-icon.svg" className="mr-1" />1
              </div>
            </div>
          </div>
          <div className="w-[430px] h-32 border-gray-200 dark:border-neutral-700 p-4 mr-6 border-x border-y border-solid flex-[0_0_auto]">
            <p className="text-xl font-bold mb-0 text-blue-600 text-base">
              <img className="align-middle mr-2" src="/img/repo.png" />
              example-chat-react
            </p>
            <small className="text-base text-sm text-gray-600  dark:text-neutral-300">
              A chat application in React demonstrating the core concepts and
              capabilities of the XMTP Client SDK
            </small>
            <div className="flex flex-row mt-3">
              <div className="text-xs mr-5 flex">
                <div className="rounded-full bg-cyan-700 w-3.5 h-3.5 mr-1"></div>
                TypeScript
              </div>
              <div className="text-xs mr-5 flex items-start">
                <img src="/img/star-icon.svg" className="mr-1" />
                54
              </div>
              <div className="text-xs mr-5 flex items-start">
                <img src="/img/branch-icon.svg" className="mr-1" />1
              </div>
            </div>
          </div>
          <div className="w-[430px] h-32 border-gray-200 dark:border-neutral-700 p-4 mr-6 border-x border-y border-solid flex-[0_0_auto]">
            <p className="text-xl font-bold mb-0 text-blue-600 text-base">
              <img className="align-middle mr-2" src="/img/repo.png" />
              Hosted example chat app
            </p>
            <small className="text-base text-sm text-gray-600 dark:text-neutral-300">
              Hosted deployment of the example-chat-react app connected to the
              XMTP dev network
            </small>
            <div className="flex flex-row mt-3">
              <div className="text-xs mr-5 flex">
                <div className="rounded-full bg-cyan-700 w-3.5 h-3.5 mr-1"></div>
                TypeScript
              </div>
              <div className="text-xs mr-5 flex items-start">
                <img src="/img/star-icon.svg" className="mr-1" />
                54
              </div>
              <div className="text-xs mr-5 flex items-start">
                <img src="/img/branch-icon.svg" className="mr-1" />1
              </div>
            </div>
          </div>
          <div className="w-[430px] h-32 border-gray-200 dark:border-neutral-700 p-4 mr-6 border-x border-y border-solid flex-[0_0_auto]">
            <p className="text-xl font-bold mb-0 text-blue-600 text-base">
              <img className="align-middle mr-2" src="/img/repo.png" />
              Hosted example chat app
            </p>
            <small className="text-base text-sm text-gray-600 dark:text-neutral-300">
              Hosted deployment of the example-chat-react app connected to the
              XMTP dev network
            </small>
            <div className="flex flex-row mt-3">
              <div className="text-xs mr-5 flex">
                <div className="rounded-full bg-cyan-700 w-3.5 h-3.5 mr-1"></div>
                TypeScript
              </div>
              <div className="text-xs mr-5 flex items-start">
                <img src="/img/star-icon.svg" className="mr-1" />
                54
              </div>
              <div className="text-xs mr-5 flex items-start">
                <img src="/img/branch-icon.svg" className="mr-1" />1
              </div>
            </div>
          </div>
        </div>
        <div className="arrow-icon w-40 h-[128px] absolute right-0 flex justify-center">
          <img
            onClick={() => {
              document.getElementsByClassName('inner-div')[0].scrollLeft += 100
            }}
            src="/img/right-arrow.svg"
            className="cursor-pointer w-12"
          />
        </div>
      </div>
      <div className="flex flex-col mt-24 h-[1064px] max-w-screen-max mx-auto bg-black mr-12 ml-12 mb-14 rounded-2xl bg-cover bg-no-repeat bg-[url('/img/animation-bg.svg')]">
        <div className="flex">
          <div className="mt-12 mr-40">
            <img src="/img/browser.png" />
          </div>
          <div>
            <img src="/img/mobile.png" />
          </div>
        </div>
        <div className="flex justify-center flex-col items-center -mt-10">
          <h1 className="text-white text-4xl font-bold mb-4">
            Messages meet users where they are
          </h1>
          <p className="text-neutral-300 text-base leading-6 text-center max-w-[656px] mb-8">
            Building with XMTP gives users a portable inbox that follows them
            across web3, providing access to their messages using any app built
            with XMTP.
          </p>
          <button className="bg-white rounded-lg w-52 h-12 text-black font-bold text-base cursor-pointer">
            Read more about this
          </button>
        </div>
      </div>

      <div className="mx-12 mb-10">
        <h1 className="text4xl font-bold mb-4">Latest from XMTP</h1>
        <div className="h-[1px] bg-black dark:bg-neutral-500 w-full mb-8"></div>
        <div className="flex">
          <div>
            <div className="rounded-full border border-blue-300 bg-blue-50 text-xs font-semibold text-blue-800 border-solid px-2.5 py-0.5 mb-4 w-fit">
              Developers
            </div>
            <h3 className="text-red-500 text-xl">
              HackFS x XMTP awards wrap-up: Decentralized Ticket Platform, Optik
              video conferencing, and GhostShare file sharing
            </h3>
            <p className="text-sm text-neutral-800 dark:text-neutral-300 mb-6">
              HackFS by @ETHGlobal and @ProtocolLabs wrapped and creativity and
              quality of projects was outstanding.
            </p>
            <div className="flex">
              <div>
                <img className="mr-3" src="/img/avatar.png" />
              </div>
              <div>
                <p className="text-gray-800 dark:text-white text-base mb-0 text-sm font-medium">
                  Peter Denton
                </p>
                <p className="text-sm leading-5 font-normal text-neutral-800 dark:text-neutral-500">
                  01 Aug 2022 · 4 min read
                </p>
              </div>
            </div>
          </div>

          <div className="mx-11">
            <div className="rounded-full border border-blue-300 bg-blue-50 text-xs font-semibold text-blue-800 border-solid px-2.5 py-0.5 mb-4 w-fit">
              Developers
            </div>
            <h3 className="text-red-500 text-xl">
              OTC Swap - Building a message-based bartering system with
              OpenSea’s Seaport and XMTP
            </h3>
            <p className="text-sm text-neutral-800 dark:text-neutral-300 mb-6">
              How developer @0x_Yuzu built an application that enables buyers
              and sellers to barter on NFTs using...
            </p>
            <div className="flex">
              <div>
                <img className="mr-3" src="/img/avatar.png" />
              </div>
              <div>
                <p className="text-gray-800 dark:text-white mb-0 text-sm font-medium">
                  Peter Denton
                </p>
                <p className="text-sm leading-5 font-normal text-neutral-800 dark:text-neutral-500">
                  15 Jul 2022 · 3 min read
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-full border border-green-300 bg-green-100 text-xs font-semibold text-green-800 border-solid px-2.5 py-0.5 mb-4 w-fit">
              Hackathon
            </div>
            <h3 className="text-red-500 text-xl">
              ETH NYC Awards Wrap: OTC Swap for OpenSea, E2EE Chat via Intercom
              widget, and a kill switch “Burn My Wallet” for...
            </h3>
            <p className="text-sm text-neutral-800 dark:text-neutral-300 mb-6">
              We just got back from ETH NYC and what a great event. 1,300
              builders, 50 sponsors, so much energy.
            </p>
            <div className="flex">
              <div>
                <img className="mr-3" src="/img/avatar.png" />
              </div>
              <div>
                <p className="text-gray-800 dark:text-white text-sm mb-0 text-sm font-medium">
                  Peter Denton
                </p>
                <p className="text-sm leading-5 font-normal text-neutral-800 dark:text-neutral-500">
                  08 Jul 2022 · 3 min read
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-24 h-[384px] max-w-screen-max mx-auto border border-solid border-black bg-white mr-12 ml-12 mb-14 rounded-2xl bg-cover bg-no-repeat relative">
        <div className="flex justify-center flex-col items-center mt-12">
          <h1 className="text-black text-4xl font-bold mb-4">
            Join a community of builders
          </h1>
          <p className="text-neutral-800 text-sm leading-6 text-center max-w-[656px] mb-8">
            From hackathons to startups, developers are building with XMTP to
            address crucial use cases for secure messaging for blockchain
            accounts
          </p>
          <button className="bg-black rounded-lg w-52 h-12 text-white font-bold text-sm cursor-pointer flex justify-center items-center border-0">
            <img src="/img/github-icon.svg" className="w-5 h-5 mr-2.5" />
            <div>Start building</div>
          </button>
        </div>
        <div className="flex justify-evenly mt-12">
          <img src="/img/logo-example.svg" />
          <img src="/img/logo-example.svg" />
          <img src="/img/logo-example.svg" />
          <img src="/img/logo-example.svg" />
          <img src="/img/logo-example.svg" />
        </div>
      </div>

      <div className="flex max-w-screen-max mx-auto bg-neutral-900 -mt-64">
        <div className="flex h-[308px] max-w-screen-max mx-auto mr-12 ml-12 mb-24 w-full mt-60">
          <div className="w-1/3 h-full rounded-2xl bg-neutral-200 bg-no-repeat bg-[url('/img/github-bg.png')] px-6 bg-right-top">
            <h1 className="text-xl font-bold mt-[183px] mb-1 leading-7 text-black">
              Have a question or idea?
            </h1>
            <p className="mb-4 leading-6 text-black">
              Start or join a discussion in the XMTP forum
            </p>
            <div className="h-px mb-4 bg-black"></div>
            <p className="leading-6 text-right font-semibold text-black">
              GitHub Discussions →
            </p>
          </div>
          <div className="w-1/3 h-full rounded-2xl bg-blue-700 mx-7 bg-no-repeat bg-[url('/img/discord-bg.png')] px-6 bg-right-top">
            <h1 className="text-xl font-bold mt-[183px] mb-1 leading-7 text-white">
              Chat with the XMTP community
            </h1>
            <p className="mb-4 leading-6 text-white">
              Come say 👋, GM, or wagmi!
            </p>
            <div className="h-px mb-4 bg-white"></div>
            <p className="leading-6 text-right font-semibold text-white">
              Discord →
            </p>
          </div>
          <div className="w-1/3 h-full rounded-2xl bg-sky-500 bg-no-repeat bg-[url('/img/twitter-bg.png')] px-6 bg-right-top">
            <h1 className="text-xl font-bold mt-[183px] mb-1 leading-7 text-white">
              Follow XMTP on Twitter
            </h1>
            <p className="mb-4 leading-6 text-white">
              Keep up with the latest news and insights
            </p>
            <div className="h-px mb-4 bg-white"></div>
            <p className="leading-6 text-right font-semibold text-white">
              Twitter →
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
