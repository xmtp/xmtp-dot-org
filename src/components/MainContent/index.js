import React from 'react'
import { useColorMode } from '@docusaurus/theme-common'
import { HeaderBox } from '../HeaderBox'
import { SliderItem } from '../SliderItem'
import { HEADER_DATA, SLIDER_ITEMS } from '../../helpers/constants'
import { BlogItem } from '../BlogItem'

const BLOG_DATA = [
  {
    tag: 'Developers',
    title:
      'HackFS x XMTP awards wrap-up: Decentralized Ticket Platform, Optik video conferencing, and GhostShare file sharing',
    content:
      'HackFS by @ETHGlobal and @ProtocolLabs wrapped and creativity and quality of projects was outstanding.',
    user: { name: 'Peter Denton', date: '01 Aug 2022 · 4 min read' },
  },
  {
    tag: 'Developers',
    title:
      'OTC Swap - Building a message-based bartering system with OpenSea’s Seaport and XMTP',
    content:
      ' How developer @0x_Yuzu built an application that enables buyers and sellers to barter on NFTs using...',
    user: { name: 'Peter Denton', date: '15 Jul 2022 · 3 min read' },
  },
  {
    tag: 'Hackathon',
    title:
      'ETH NYC Awards Wrap: OTC Swap for OpenSea, E2EE Chat via Intercom widget, and a kill switch “Burn My Wallet” for...',
    content:
      'We just got back from ETH NYC and what a great event. 1,300 builders, 50 sponsors, so much energy.',
    user: { name: 'Peter Denton', date: '08 Jul 2022 · 3 min read' },
  },
]

export const MainContent = ({ styles }) => {
  const { colorMode } = useColorMode()

  return (
    <main className={`max-w-screen-max mx-auto ${colorMode}`}>
      <div className={styles.bannerCards}>
        {HEADER_DATA.map(({ title, subtitle }) => (
          <HeaderBox key={title} title={title} subtitle={subtitle} />
        ))}
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
        <div className="max-w-[437px]">
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
          {SLIDER_ITEMS.map((items) => (
            <SliderItem key={items.title} items={items} />
          ))}
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
          {BLOG_DATA.map((items) => (
            <BlogItem key={items.title} items={items} />
          ))}

          {/*  <div className="mx-11"></div> */}
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
