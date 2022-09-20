import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import styles from './index.module.css'
import { MainContent } from '../components/MainContent'
import { useColorMode } from '@docusaurus/theme-common'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  const { colorMode } = useColorMode()
  return (
    <header
      className={
        "px-0 pt-12 lg:pt-16 h-[504px] bg-[url('/img/background.jpg')] bg-cover border-0 border-b border-solid border-b-black " +
        (colorMode === 'light'
          ? "bg-[url('/img/background.jpg')]"
          : "bg-[url('/img/dark-background.jpg')] bg-black")
      }
    >
      <div className="container text-left py-0 xl:px-12 m-auto max-w-screen-max">
        <div className="rounded-full border border-blue-300 bg-blue-50 text-xs font-semibold text-blue-800 border-solid px-2.5 py-0.5 mb-3 lg:mb-4 w-fit">
          📄 Read the XMTP Litepaper - public draft »
        </div>
        <h1 className="hero__title max-w-2xl text-4xl lg:text-5xl">
          {siteConfig.title}
        </h1>
        <p className="hero__subtitle max-w-2xl text-lg lg:text-xl">
          {siteConfig.tagline}
        </p>
      </div>
    </header>
  )
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout title={`${siteConfig.title}`} description="Homepage">
      <HomepageHeader />
      <MainContent styles={styles} />
    </Layout>
  )
}
