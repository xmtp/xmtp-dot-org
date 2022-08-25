import React from 'react'
import Footer from '@theme-original/Footer'
import { useColorMode } from '@docusaurus/theme-common'

export default function FooterWrapper(props) {
  const { colorMode } = useColorMode()
  return (
    <>
      <Footer {...props} />
      <div className={`bg-[#171717] px-4 md-px-12 ${colorMode}`}>
        <div className="h-px bg-white max-w-screen-max mx-auto" />
        <div className="flex justify-center flex-wrap md:justify-between items-center h-auto md:h-32 max-w-screen-max mx-auto mt-9 md:mt-0 mb-20 md:mb-0 text-center md:text-inherit">
          <img src="/img/xmtp-icon.svg" className="w-10 md:w-auto" />
          <div className="flex flex-col md:flex-row justify-center text-white my-7 md:my-0">
            <span className="text-sm">
              Except where otherwise noted, this website is licensed under
              Creative Commons CC0.
            </span>
            <span className="mx-8 text-semibold text-sm text-red-600 my-8 md:my-0">
              Privacy policy
            </span>
            <span className="text-sm text-red-600">Term of use</span>
          </div>
          <div className="flex">
            <img src="/img/github-icon.svg" />
            <img className="mx-8" src="/img/twitter-icon.svg" />
            <img src="/img/discord-icon.svg" />
          </div>
        </div>
      </div>
    </>
  )
}
