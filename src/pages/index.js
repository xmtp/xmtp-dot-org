import React, { useState } from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import styles from './index.module.css'
import HomepageFeatures from '@site/src/components/HomepageFeatures'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={styles.heroBanner}>
      <div className={clsx('container', styles.container)}>
        <h1 className={clsx('hero__title', styles.heroTitle)}>
          {siteConfig.title}
        </h1>
        <p className={clsx('hero__subtitle', styles.heroSubtitle)}>
          {siteConfig.tagline}
        </p>
      </div>
    </header>
  )
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext()
  console.log(siteConfig)
  return (
    <Layout title={`${siteConfig.title}`} description="Homepage">
      <HomepageHeader />
      <main>
        <div className={styles.bannerCards}>
          <div className="bg-white rounded-lg border-black border border-solid px-8 py-6 w-432 ml-12 flex flex-col justify-between">
            <div className="flex justify-between">
              <h4 className="text-red-500 text-xl">What is XMTP?</h4>
              <img
                className="h-5 mt-1"
                src="/img/xmtp-icon.svg"
                alt="xmtp icon"
              />
            </div>
            <div className="text-2xl font-semibold mb-0">
              Learn about the protocol, network, case studies, litepaper, and
              <p className="mb-0 mt-5">{'->'}</p>
            </div>
          </div>
          <div className="bg-white rounded-lg border-black border border-solid px-8 py-6 w-432 mx-6 flex flex-col justify-between">
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
          <div className="bg-white rounded-lg border-black border border-solid px-8 py-6 w-432 mr-12 flex flex-col justify-between">
            <div className="flex justify-between">
              <h4 className="text-red-500 text-xl">Development concepts</h4>
              <img
                className="h-5 mt-1"
                src="/img/development-icon.svg"
                alt="development icon"
              />
            </div>
            <div className="text-2xl font-semibold mb-0">
              Learn about clients, nodes, message encryption, authentication,
              and more
              <p className="mb-0 mt-5">{'->'}</p>
            </div>
          </div>
        </div>
        <div className="flex mt-20 max-w-screen-max mx-auto">
          <img src="/img/build-xmtp.png" alt="laptop" />
          <div>
            <h4 className="text-4xl font-bold mb-2">Build with XMTP</h4>
            <small className="text-base text-neutral-800">
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
                  <p className="text-black text-xl font-bold mb-2">Alerts</p>
                  <small className="text-base">
                    Enable apps to keep users informed with timely event-based
                    notifications
                  </small>
                </div>
              </li>
              <li className="flex mt-6 flex-row">
                <img className="w-12 h-12 mr-4" src="/img/announce-icon.png" />
                <div>
                  <p className="text-black text-xl font-bold mb-2">
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
                  <p className="text-black text-xl font-bold mb-2">
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
                document.getElementsByClassName(
                  'inner-div'
                )[0].scrollLeft -= 100
              }}
              src="/img/right-arrow.svg"
              className="-scale-x-100 cursor-pointer"
            />
          </div>
          <div className="inner-div flex flex-nowrap overflow-x-scroll w-3/4 flex-1 scroll-smooth">
            <div className="w-[430px] h-32 border-gray-200 p-4 mr-6 border-x border-y border-solid flex-[0_0_auto]">
              <p className="text-xl font-bold mb-0 text-blue-600 text-base">
                <img className="align-middle mr-2" src="/img/repo.png" />
                xmtp-js client SDK
              </p>
              <small className="text-base text-sm text-gray-600">
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
            <div className="w-[430px] h-32 border-gray-200 p-4 mr-6 border-x border-y border-solid flex-[0_0_auto]">
              <p className="text-xl font-bold mb-0 text-blue-600 text-base">
                <img className="align-middle mr-2" src="/img/repo.png" />
                example-chat-react
              </p>
              <small className="text-base text-sm text-gray-600">
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
            <div className="w-[430px] h-32 border-gray-200 p-4 mr-6 border-x border-y border-solid flex-[0_0_auto]">
              <p className="text-xl font-bold mb-0 text-blue-600 text-base">
                <img className="align-middle mr-2" src="/img/repo.png" />
                Hosted example chat app
              </p>
              <small className="text-base text-sm text-gray-600">
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
            <div className="w-[430px] h-32 border-gray-200 p-4 mr-6 border-x border-y border-solid flex-[0_0_auto]">
              <p className="text-xl font-bold mb-0 text-blue-600 text-base">
                <img className="align-middle mr-2" src="/img/repo.png" />
                Hosted example chat app
              </p>
              <small className="text-base text-sm text-gray-600">
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
                document.getElementsByClassName(
                  'inner-div'
                )[0].scrollLeft += 100
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
          <div className='flex justify-center flex-col items-center -mt-10'>
            <h1 className='text-white text-4xl font-bold mb-4'>Messages meet users where they are</h1>
            <p className='text-neutral-300 text-base leading-6 text-center max-w-[656px] mb-8'>
              Building with XMTP gives users a portable inbox that follows them
              across web3, providing access to their messages using any app
              built with XMTP.
            </p>
            <button className="bg-white rounded-lg w-52 h-12 text-black font-bold text-base cursor-pointer">
              Read more about this
            </button>
          </div>
        </div>

        {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  )
}
