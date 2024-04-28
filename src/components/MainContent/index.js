import React, { useEffect, useRef, useState } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useColorMode } from "@docusaurus/theme-common";
import ThemedImage from "@theme/ThemedImage";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { Link } from "react-router-dom";
import { HeaderBox } from "../HeaderBox";
import { SliderItem } from "../SliderItem";
import {
  HEADER_DATA,
  BLOG_DATA,
  XMTP_NOTIF_SERVER_URL,
  XMTP_JS_URL,
  XMTP_ANDROID_URL,
  XMTP_IOS_URL,
  XMTP_FLUTTER_URL,
  XMTP_WEB_URL,
  ,
} from "../../helpers/constants";
import { BlogItem } from "../BlogItem";
import ALink from "../ALink";

export const MainContent = ({ styles }) => {
  const [sliderItems, setSliderItems] = useState(null);
  const { colorMode } = useColorMode();
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();
  const videoRef = useRef(null);
  const [showReplayBtn, setShowReplayBtn] = useState(false);
  const userAction = async () => {
    let items = [];
    const responseXmtp = await fetch(XMTP_JS_URL, {
      headers: {
        Authorization: customFields.personalToken,
      },
    });
    const responseAndroid = await fetch(XMTP_ANDROID_URL, {
      headers: {
        Authorization: customFields.personalToken,
      },
    });
    const responseIos = await fetch(XMTP_IOS_URL, {
      headers: {
        Authorization: customFields.personalToken,
      },
    });
    const responseFlutter = await fetch(XMTP_FLUTTER_URL, {
      headers: {
        Authorization: customFields.personalToken,
      },
    });
    const responseWeb = await fetch(XMTP_WEB_URL, {
      headers: {
        Authorization: customFields.personalToken,
      },
    });
    const responseNotif = await fetch(XMTP_NOTIF_SERVER_URL, {
      headers: {
        Authorization: customFields.personalToken,
      },
    });

    const dataXmtp = await responseXmtp.json();
    if (dataXmtp && !dataXmtp.message) items = [...items, dataXmtp];
    const dataAndroid = await responseAndroid.json();
    if (dataAndroid && !dataAndroid.message) items = [...items, dataAndroid];
    const dataIos = await responseIos.json();
    if (dataIos && !dataIos.message) items = [...items, dataIos];
    const dataFlutter = await responseFlutter.json();
    if (dataFlutter && !dataFlutter.message) items = [...items, dataFlutter];
    const dataWeb = await responseWeb.json();
    if (dataWeb && !dataWeb.message) items = [...items, dataWeb];
    const dataNotif = await responseNotif.json();
    if (dataNotif && !dataNotif.message) items = [...items, dataNotif];

    items = [...items];
    setSliderItems(items);
  };

  const handleReplay = () => {
    setShowReplayBtn(false);
    videoRef.current.play();
  };

  useEffect(() => {
    userAction();
    videoRef.current.onended = () => {
      setShowReplayBtn(true);
    };
  }, []);

  useEffect(() => {
    if (
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [colorMode]);

  return (
    <>
      <main className={`max-w-screen-max mx-4 lg:mx-4 xl:mx-auto px-0 xl:px-4`}>
        <div>
          <div className="relative min-h-[630px]">
            <div className="mt-12 sm:mt-16">
              <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:items-center lg:gap-8">
                <div className="lg:col-start-2 md:w-3/6 mx-auto lg:mx-0 lg:w-4/6">
                  <h3 className="text-3xl font-bold tracking-tight text-black sm:text-4xl dark:text-white color-white">
                    Build with XMTP
                  </h3>
                  <p className="mt-3 mb-1 text-base text-neutral-800 dark:text-neutral-300 color-neutral-300">
                    Deliver apps and tools that enable messaging between
                    blockchain accounts. Want to talk about a use case?
                  </p>

                  <span className="text-base text-neutral-800 dark:text-neutral-300 color-neutral-300">
                    <ALink
                      to="https://community.xmtp.org/"
                      className="text-red-500 font-bold">
                      Join the discussion
                    </ALink>
                  </span>

                  <dl className="mt-10 space-y-8">
                    <div className="relative">
                      <dt>
                        <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-purple-800">
                          <img
                            alt="bell icon representing the alert message use case"
                            className="w-6 h-6"
                            src="/img/bell.svg"
                          />
                        </div>
                        <p className="ml-16 mb-2 text-xl font-semibold leading-6 text-neutral-900 dark:text-white color-white">
                          Alerts
                        </p>
                      </dt>
                      <dd className="ml-16 text-base text-neutral-800 dark:text-neutral-300 color-neutral-300">
                        Enable apps to keep users informed with timely
                        event-based notifications
                      </dd>
                    </div>

                    <div className="relative">
                      <dt>
                        <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-purple-800">
                          <img
                            alt="megaphone icon representing the announcement message use case"
                            className="w-6 h-6"
                            src="/img/speakerphone.svg"
                          />
                        </div>
                        <p className="ml-16 mb-2 text-xl font-semibold leading-6 text-neutral-900 dark:text-white color-white">
                          Announcements
                        </p>
                      </dt>
                      <dd className="ml-16 text-base text-neutral-800 dark:text-neutral-300 color-neutral-300">
                        Enable apps to engage users with meaningful one-to-many
                        messaging
                      </dd>
                    </div>

                    <div className="relative">
                      <dt>
                        <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-purple-800 ">
                          <img
                            alt="chat icon representing the direct messaging use case"
                            className="w-6 h-6"
                            src="/img/dm.svg"
                          />
                        </div>
                        <p className="ml-16 mb-2 text-xl font-semibold leading-6 text-neutral-900 dark:text-white color-white">
                          Direct messaging
                        </p>
                      </dt>
                      <dd className="ml-16 text-base text-neutral-800 dark:text-neutral-300 color-neutral-300">
                        Enable users to connect and build community with
                        one-to-one messaging
                      </dd>
                    </div>
                  </dl>
                </div>

                <div className="-mx-4 mt-10 lg:col-start-1 lg:mt-0">
                  <div className="absolute mx-auto object-fill bg-none img-gradient z-10 h-[92%] w-36"></div>
                  <link
                    rel="preload"
                    href="/img/build-xmtp-dark.png"
                    as="image"></link>
                  <link
                    rel="preload"
                    href="/img/build-xmtp.png"
                    as="image"></link>
                  <div className="build-xmtp-img"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="my-0 relative grid grid-cols-1 lg:grid-cols-11">
          <div className="w-auto mr-6 mt-4 mb-6 lg:mb-0 col-span-2">
            <p className="text-xl font-bold mb-2">SDKs and tools</p>
            <small className="text-base">
              Build with XMTP using the SDK and dev tools
            </small>
          </div>
          <div className="col-span-9 grid grid-cols-10 relative">
            <div
              className={`hidden -scale-x-100 lg:grid absolute -left-12 h-32 justify-center arrow-icon w-20 items-center ${
                sliderItems && sliderItems?.length > 3 ? "" : "2xl:hidden"
              }`}>
              <ThemedImage
                onClick={() => {
                  document.getElementsByClassName(
                    "inner-div",
                  )[0].scrollLeft -= 360;
                }}
                sources={{
                  light: useBaseUrl("/img/right-arrow.svg"),
                  dark: useBaseUrl("/img/right-arrow-dark.svg"),
                }}
                alt="arrow"
                className="cursor-pointer w-12"
              />
            </div>
            <div className="inner-div grid grid-flow-row lg:grid-flow-col overflow-x-scroll w-auto space-y-4 lg:space-y-0 scroll-smooth col-span-10 lg:justify-start">
              {sliderItems
                ? sliderItems.map((items) => (
                    <SliderItem key={items.id} items={items} />
                  ))
                : null}
            </div>
            <div
              className={`arrow-icon w-24 h-32 absolute right-0 items-center justify-center hidden lg:grid ${
                sliderItems && sliderItems?.length > 3 ? "" : "2xl:hidden"
              }`}>
              <ThemedImage
                onClick={() => {
                  document.getElementsByClassName(
                    "inner-div",
                  )[0].scrollLeft += 360;
                }}
                sources={{
                  light: useBaseUrl("/img/right-arrow.svg"),
                  dark: useBaseUrl("/img/right-arrow-dark.svg"),
                }}
                className="cursor-pointer w-12"
                alt="arrow"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-20 lg:mt-24 max-w-screen-max bg-black mx-0 mb-14 rounded-2xl justify-center items-center text-center relative overflow-hidden">
          <div className="grid grid-flow-col relative w-full">
            {showReplayBtn ? (
              <div className="bg-neutral-800/50 absolute hidden lg:grid justify-center items-center w-full h-full z-10">
                <img
                  onClick={handleReplay}
                  src="/img/play-icon.svg"
                  alt="play button"
                  className="w-14 cursor-pointer hover:invert"
                />
              </div>
            ) : null}
            <video
              className="w-full hidden lg:block"
              ref={videoRef}
              autoPlay="autoplay"
              muted
              playsInline>
              <source src="/img/animation.mp4" type="video/mp4" />
              Your browser does not support HTML video.
            </video>
            <div className="grid justify-center lg:hidden p-4">
              <img
                src="/img/mobile-animation-bg.jpg"
                alt="animation background"
                className="rounded-xl max-h-[51rem]"
              />
            </div>
          </div>
          <div className="flex justify-center flex-col items-center mt-8 :lg:-mt-10 mx-6 lg:absolute lg:bottom-9 mb-14 lg:mb-0 z-10">
            <h1 className="text-white text-3xl xl:text-4xl font-bold mb-4 leading-9">
              Messages meet users where they are
            </h1>
            <p className="text-white text-base leading-6 text-center lg:max-w-[70%] mb-8">
              Building with XMTP gives users an interoperable inbox that follows
              them across web3, providing access to their messages using any app
              built with XMTP.
            </p>
            <Link
              to="/docs/concepts/interoperable-inbox"
              className="bg-white rounded-lg w-52 h-12 text-black font-bold text-base cursor-pointer border-0 flex justify-center items-center hover:no-underline hover:text-black">
              Learn more
            </Link>
          </div>
        </div>

        <div>
          <div className="relative mx-auto max-w-8xl divide-y divide-gray-200 mt-8">
            <div>
              <h2 className="mb-0 text-4xl font-bold tracking-tight text-gray-900 sm:text-3xl dark:text-white color-white">
                Latest from XMTP
              </h2>
            </div>

            <div className="grid gap-16 mt-8 gap-y-8 md:grid-cols-3 md:gap-x-5 md:gap-y-12">
              {BLOG_DATA.map((items) => (
                <BlogItem key={items.title} items={items} />
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-16 mb-20  max-w-screen-max border border-solid border-black bg-white mx-0 mb-0 rounded-2xl bg-cover bg-no-repeat relative px-8 pb-12">
          <div className="flex justify-center flex-col items-center mt-12 text-center">
            <h1 className="text-black text-4xl sm:text-3xl font-bold mb-4">
              Join a community of builders
            </h1>
            <p className="text-neutral-800 text-base leading-6 text-center lg:max-w-[70%] mb-8">
              From startups to Fortune 500 companies, developers trust and build
              with XMTP to deliver innovative messaging experiences
            </p>
            <button className="bg-black rounded-lg w-52 h-12 text-white font-bold text-base cursor-pointer flex justify-center items-center border-0">
              <img src="/img/xmtp-sm-icon.png" className="w-5 h-5 mr-2.5" />
              <Link
                className="hover:no-underline text-white hover:text-white"
                to="built-with-xmtp">
                Explore apps
              </Link>
            </button>
          </div>
        </div>
      </main>
    </>
  );
};
