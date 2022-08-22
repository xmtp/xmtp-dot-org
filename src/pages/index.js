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
        colorMode === 'light' ? styles.heroBanner : styles.heroBannerDark
      }
    >
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
  return (
    <Layout title={`${siteConfig.title}`} description="Homepage">
      <HomepageHeader />
      <MainContent styles={styles} />
    </Layout>
  )
}
