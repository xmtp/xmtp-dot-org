import React, { useEffect, useState } from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import { useColorMode } from '@docusaurus/theme-common'
import { Link } from 'react-router-dom'
import { HeaderBox } from '../HeaderBox'
import { SliderItem } from '../SliderItem'
import {
  HEADER_DATA,
  BLOG_DATA,
  XMTP_JS_URL,
  EXAMPLE_CHAT_URL,
  CHAT_ITEM,
  VERCEL_ITEM,
} from '../../helpers/constants'
import { BlogItem } from '../BlogItem'

export const MainContent = ({ styles }) => {
  const { colorMode } = useColorMode()
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext()
  const [sliderItems, setSliderItems] = useState(null)

  const userAction = async () => {
    let items = []
    const responseXmtp = await fetch(XMTP_JS_URL, {
      headers: {
        Authorization: customFields.personalToken,
      },
    })
    const responseChat = await fetch(EXAMPLE_CHAT_URL, {
      headers: {
        Authorization: customFields.personalToken,
      },
    })
    const dataXmtp = await responseXmtp.json()
    if (dataXmtp) items = [...items, dataXmtp]
    const dataChat = await responseChat.json()
    if (dataChat) items = [...items, dataChat]

    items = [...items, CHAT_ITEM]
    setSliderItems(items)
  }

  useEffect(() => {
    userAction()
  }, [])

  return (
    <>
      <main className={`max-w-screen-max mx-4 lg:mx-4 xl:mx-auto ${colorMode}`}>
        <div className="xl:px-12">
          <ul
            role="list"
            className="-mt-20 md:-mt-36 grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-3"
          >
            {HEADER_DATA.map(({ title, subtitle, url }) => (
              <HeaderBox
                key={title}
                title={title}
                subtitle={subtitle}
                url={url}
              />
            ))}
          </ul>
        </div>

        <div>
          <div className="relative min-h-[630px]">
            <div className="lg:absolute mt-12 sm:mt-16">
              <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:items-center lg:gap-8">
                <div className="lg:col-start-2 md:w-3/6 mx-auto lg:mx-0 lg:w-4/6">
                  <h3 className="text-3xl font-bold tracking-tight text-black sm:text-4xl dark:text-white">
                    Build with XMTP
                  </h3>
                  <p className="mt-3 mb-1 text-base text-neutral-800 dark:text-neutral-300">
                    Deliver apps and tools that enable messaging between
                    blockchain accounts. Want to talk about a use case?
                  </p>

                  <span className="text-base text-neutral-800 dark:text-neutral-300">
                    <a
                      href="https://github.com/orgs/xmtp/discussions"
                      className="text-red-500 font-bold hover:no-underline"
                    >
                      Join the discussion
                    </a>
                  </span>

                  <dl className="mt-10 space-y-8">
                    <div className="relative">
                      <dt>
                        <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-purple-800 text-white">
                          <img className="w-6 h-6" src="/img/bell.svg" />
                        </div>
                        <p className="ml-16 mb-2 text-xl font-semibold leading-6 text-neutral-900 dark:text-white">
                          Alerts
                        </p>
                      </dt>
                      <dd className="ml-16 text-base text-neutral-800 dark:text-neutral-300">
                        Enable apps to keep users informed with timely
                        event-based notifications
                      </dd>
                    </div>

                    <div className="relative">
                      <dt>
                        <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-purple-800 text-white">
                          <img
                            className="w-6 h-6"
                            src="/img/speakerphone.svg"
                          />
                        </div>
                        <p className="ml-16 mb-2 text-xl font-semibold leading-6 text-neutral-900 dark:text-white">
                          Announcements
                        </p>
                      </dt>
                      <dd className="ml-16 text-base text-neutral-800 dark:text-neutral-300">
                        Enable apps to engage users with meaningful one-to-many
                        messaging
                      </dd>
                    </div>

                    <div className="relative">
                      <dt>
                        <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-purple-800 text-white">
                          <img className="w-6 h-6" src="/img/dm.svg" />
                        </div>
                        <p className="ml-16 mb-2 text-xl font-semibold leading-6 text-neutral-900 dark:text-white">
                          Direct messaging
                        </p>
                      </dt>
                      <dd className="ml-16 text-base text-neutral-800 dark:text-neutral-300">
                        Enable users to connect and build community with
                        one-to-one messaging
                      </dd>
                    </div>
                  </dl>

                  <Link
                    to="/docs/client-sdk/javascript/tutorials/quickstart"
                    className="bg-red-500 text-white border-none rounded-lg py-3 px-5 font-bold text-base w-44 mt-10 h-12 cursor-pointer hover:bg-red-600 mb-14 xl:mb-0 block hover:no-underline hover:text-white"
                  >
                    <img
                      className="w-5 h-5 mr-2 align-middle"
                      src="/img/xmtp-sm-icon.png"
                    />
                    Start building
                  </Link>
                </div>

                <div className="relative -mx-4 mt-10 lg:col-start-1 lg:mt-0">
                  <img
                    className="relative mx-auto hidden 2xl:inline-block 2xl:max-w-[640px]"
                    src={
                      colorMode === 'light'
                        ? '/img/featureGraphicwithFade.png'
                        : '/img/featureGraphicwithFadeDark.png'
                    }
                    alt="laptop"
                  />
                  <img
                    className="relative mx-auto inline-block object-fill 2xl:hidden"
                    src={
                      colorMode === 'light'
                        ? '/img/build-xmtp.png'
                        : '/img/build-xmtp-dark.png'
                    }
                    alt="laptop"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 xl:ml-12 hidden mb-12 relative lg:flex">
          <div className="w-56 mr-6 mt-4">
            <p className="text-xl font-bold mb-2">SDK and tools</p>
            <small className="text-base">
              Build with XMTP using the SDK and dev tools
            </small>
          </div>
          {sliderItems && sliderItems?.length > 3 ? (
            <div className="flex">
              <img
                onClick={() => {
                  document.getElementsByClassName(
                    'inner-div'
                  )[0].scrollLeft -= 453
                }}
                src={
                  colorMode === 'light'
                    ? '/img/right-arrow.svg'
                    : '/img/right-arrow-dark.svg'
                }
                className="-scale-x-100 cursor-pointer"
              />
            </div>
          ) : null}
          <div className="inner-div flex flex-nowrap overflow-x-scroll w-3/4 flex-1 scroll-smooth">
            {sliderItems
              ? sliderItems.map((items) => (
                  <SliderItem key={items.id} items={items} size={sliderItems?.length} />
                ))
              : null}
          </div>
          {sliderItems && sliderItems?.length > 3 ? (
            <div className="arrow-icon w-40 h-[128px] absolute right-0 flex justify-center">
              <img
                onClick={() => {
                  document.getElementsByClassName(
                    'inner-div'
                  )[0].scrollLeft += 453
                }}
                src={
                  colorMode === 'light'
                    ? '/img/right-arrow.svg'
                    : '/img/right-arrow-dark.svg'
                }
                className="cursor-pointer w-12"
              />
            </div>
          ) : null}
        </div>
        <div className="flex flex-col mt-20 lg:mt-24 h-[1118px] lg:h-[1064px] max-w-screen-max bg-black mx-0 xl:mx-12 mb-14 rounded-2xl bg-cover bg-no-repeat bg-[url('/img/animation-bg.svg')] justify-center items-center text-center">
          {' '}
          {/* background-position: -196px -73px; */}
          <div className="flex">
            <div className="mr-40 hidden lg:block">
              <img src="/img/browser.png" />
            </div>
            <div>
              <img src="/img/browser-mobile.png" />
            </div>
          </div>
          <div className="flex justify-center flex-col items-center mt-8 :lg:-mt-10 mx-6">
            <h1 className="text-white text-3xl xl:text-4xl font-bold mb-4 leading-9">
              Messages meet users where they are
            </h1>
            <p className="text-neutral-300 text-base leading-6 text-center max-w-[656px] mb-8">
              Building with XMTP gives users a portable inbox that follows them
              across web3, providing access to their messages using any app
              built with XMTP.
            </p>
            <Link
              to="/docs/dev-concepts/introduction"
              className="bg-white rounded-lg w-52 h-12 text-black font-bold text-base cursor-pointer border-0 flex justify-center items-center hover:no-underline hover:text-black"
            >
              Learn more
            </Link>
          </div>
        </div>

        <div className="lg:px-0 xl:px-12">
          <div className="relative mx-auto max-w-8xl divide-y divide-gray-200">
            <div>
              <h2 className="mb-0 text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                Latest From XMTP
              </h2>
            </div>

            <hr className="my-4 bg-black dark:bg-neutral-500" />

            <div className="grid gap-16 mt-8 gap-y-8 md:grid-cols-3 md:gap-x-5 md:gap-y-12">
              {BLOG_DATA.map((items) => (
                <BlogItem key={items.title} items={items} />
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-8 max-w-screen-max border border-solid border-black bg-white mx-0 xl:mx-12 mb-0 rounded-2xl bg-cover bg-no-repeat relative px-8 pb-4">
          <div className="flex justify-center flex-col items-center mt-12 text-center">
            <h1 className="text-black text-4xl font-bold mb-4">
              Join a community of builders
            </h1>
            <p className="text-neutral-800 text-base leading-6 text-center max-w-[656px] mb-8">
              From hackathons to startups, developers are building with XMTP to
              address use cases for secure messaging for blockchain accounts
            </p>
            <button className="bg-black rounded-lg w-52 h-12 text-white font-bold text-base cursor-pointer flex justify-center items-center border-0">
              <img src="/img/xmtp-sm-icon.png" className="w-5 h-5 mr-2.5" />
              <Link
                className="hover:no-underline text-white hover:text-white"
                to="/docs/client-sdk/javascript/tutorials/quickstart"
              >
                Start building
              </Link>
            </button>
          </div>
          <div className="flex justify-evenly mt-12 flex-wrap">
            <div className="flex w-full sm:w-auto justify-center mb-10 mx-6">
              <img src="/img/logo-example.svg" className="flex-1 object-none" />
            </div>
            <div className="flex w-full sm:w-auto justify-center mb-10 mx-6">
              <img src="/img/logo-example.svg" className="flex-1 object-none" />
            </div>
            <div className="flex w-full sm:w-auto justify-center mb-10 mx-6">
              <img src="/img/logo-example.svg" className="flex-1 object-none" />
            </div>
            <div className="flex w-full sm:w-auto justify-center mb-10 mx-6">
              <img src="/img/logo-example.svg" className="flex-1 object-none" />
            </div>
            <div className="flex w-full sm:w-auto justify-center mb-10 mx-6">
              <img src="/img/logo-example.svg" className="flex-1 object-none" />
            </div>
          </div>
        </div>
      </main>

      <div className="bg-neutral-900 -mt-48">
        <div className="max-w-screen-max mx-auto pt-56 pb-16 px-4 lg:px-5 xl:px-12">
          <ul
            role="list"
            className="-mt-2 grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-3"
          >
            <li className="col-span-1">
              <div className="max-h-[300px] rounded-lg relative group px-6 pb-6 pt-6 bg-[#F3F4F6] bg-no-repeat bg-[url('/img/github-bg.jpg')] bg-contain bg-right-top focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                <div>
                  <h1 className="text-xl font-bold mt-[144px] mb-1 text-black">
                    Have a question or idea?
                  </h1>
                  <p className="mb-4 leading-6 text-black">
                    Start <span className="hidden xl:inline">or join</span> a
                    discussion in the XMTP forum
                  </p>
                  <hr className="my-4 bg-black" />
                  <a
                    href="https://github.com/orgs/xmtp/discussions"
                    target="_blank"
                    className="leading-6 text-right font-semibold text-black hover:text-black flex justify-end hover:no-underline"
                  >
                    GitHub Discussions →
                  </a>
                </div>
              </div>
            </li>

            <li className="col-span-1">
              <div className="max-h-[300px] rounded-lg relative group px-6 pb-6 pt-6 bg-[#394AF2] bg-no-repeat bg-[url('/img/discord-bg.jpg')] bg-contain bg-right-top focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                <div>
                  <h1 className="text-xl font-bold mt-[144px] mb-1 text-white">
                    Chat with the XMTP community
                  </h1>
                  <p className="mb-4 leading-6 text-white">
                    Say 👋, join a dev hangout, or get help
                  </p>
                  <hr className="my-4 bg-white" />
                  <a
                    href="https://discord.gg/xmtp"
                    target="_blank"
                    className="leading-6 text-right font-semibold text-white hover:text-white flex justify-end hover:no-underline"
                  >
                    Discord →
                  </a>
                </div>
              </div>
            </li>

            <li className="col-span-1">
              <div className="max-h-[300px] rounded-lg relative group px-6 pb-6 pt-6 bg-[#01A3EE] bg-no-repeat bg-[url('/img/twitter-bg.jpg')] bg-contain bg-right-top focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                <div>
                  <h1 className="text-xl font-bold mt-[144px] mb-1 text-white">
                    Follow XMTP on Twitter
                  </h1>
                  <p className="mb-4 leading-6 text-white">
                    Keep up with the latest updates
                  </p>
                  <hr className="my-4 bg-white" />
                  <a
                    href="https://twitter.com/xmtp_"
                    target="_blank"
                    className="leading-6 text-right font-semibold text-white hover:text-white flex justify-end hover:no-underline"
                  >
                    Twitter →
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
