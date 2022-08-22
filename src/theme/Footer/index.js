import React from 'react'
import Footer from '@theme-original/Footer'
import { useColorMode } from '@docusaurus/theme-common'

export default function FooterWrapper(props) {
  const { colorMode } = useColorMode()
  return (
    <>
      <Footer {...props} />
      <div className={`bg-[#171717] px-12 ${colorMode}`}>
        <div className="h-px bg-white " />
        <div className="flex justify-between items-center h-32">
          <img src="/img/xmtp-icon.svg" />
          <div className="text-red-500 dark:text-white">
            <span className="text-sm">
              Except where otherwise noted, this website is licensed under
              Creative Commons CC0.
            </span>
            <span className="mx-8 text-semibold text-sm text-red-600">
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
