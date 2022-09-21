import React from 'react'
import Footer from '@theme-original/Footer'
import { useColorMode } from '@docusaurus/theme-common'
import { Link } from 'react-router-dom'
import ALink from '../../components/ALink'

export default function FooterWrapper(props) {
  const { colorMode } = useColorMode()
  return (
    <>
      <Footer {...props} />
      <div className={`bg-black px-4 md-px-12 ${colorMode}`}>
        <div className="h-px bg-white max-w-screen-max mx-auto" />
        <div className="flex justify-center flex-wrap md:justify-between items-center h-auto md:h-32 max-w-screen-max mx-auto mt-9 md:mt-0 mb-20 md:mb-0 text-center md:text-inherit flex-col md:flex-row">
          <img src="/img/xmtp-icon.svg" className="w-10 md:w-auto" />
          <div className="flex flex-col md:flex-row justify-center text-white my-7 md:my-0">
            <span className="text-sm">
              <ALink
                className="ml-2 text-white hover:text-white"
                tp="https://creativecommons.org/licenses/by/4.0/"
              >
                CC BY 4.0
              </ALink>
            </span>
            <Link
              to="/privacy"
              className="mx-8 text-semibold text-sm text-red-600 hover:text-red-600 hover:no-underline my-8 md:my-0"
            >
              Privacy policy
            </Link>
            <Link
              to="/terms"
              className="text-sm text-red-600 hover:text-red-600 hover:no-underline"
            >
              Term of service
            </Link>
          </div>
          <div className="flex w-[139px] justify-between">
            <ALink to="https://github.com/xmtp">
              <img src="/img/github-icon.svg" />
            </ALink>
            <ALink to="https://twitter.com/xmtp_">
              <img src="/img/twitter-icon.svg" />
            </ALink>
            <ALink to="https://discord.gg/xmtp">
              <img src="/img/discord-icon.svg" />
            </ALink>
          </div>
        </div>
      </div>
    </>
  )
}
