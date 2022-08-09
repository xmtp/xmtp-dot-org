import React, { useEffect, useState } from 'react'
import DocSidebar from '@theme-original/DocSidebar'
import VersionDropdown from '@theme/NavbarItem/DocsVersionDropdownNavbarItem'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useGlobalData from '@docusaurus/useGlobalData'
import { Redirect } from '@docusaurus/router'
import { useHistory, useParams } from 'react-router-dom'
import Versions from '../../../javascript_versions.json'
import './docSidebar.css'

export const getDocId = () => {
  const [, ...doc] = window.location.pathname.split('/').slice(1)
  if (doc.includes('javascript')) {
    return 'javascript'
  }
  if (doc.includes('swift')) {
    return 'swift'
  }
  return doc
}

export default function DocSidebarWrapper(props) {
  const data = useDocusaurusContext()
  const globalData = useGlobalData()
  const [docId, setDocId] = useState(getDocId())
  const [language, setLanguage] = useState(docId)
  const history = useHistory()

  useEffect(() => {
    setDocId(language)
  }, [language])

  const handleLanguageChange = (lang) => {
    if (lang === docId) return
    setLanguage(lang)
    let url = ''
    if (lang == 'javascript') {
      const versionsJS =
        globalData['docusaurus-plugin-content-docs'].javascript.versions
      const urlJS = versionsJS.find(
        (item) =>
          item.label ===
          localStorage.getItem('docs-preferred-version-javascript')
      )
      url = `${urlJS.path}/${urlJS.mainDocId}`
    }
    if (lang == 'swift') {
      const versionSwift =
        globalData['docusaurus-plugin-content-docs'].swift.versions
      const urlSwift = versionSwift.find(
        (item) =>
          item.label === localStorage.getItem('docs-preferred-version-swift')
      )
      url = `${urlSwift.path}/${urlSwift.mainDocId}`
    }

    history.push(url)
  }

  const getCurrentPage = () => {
    const [, ...doc] = window.location.pathname.split('/')
    if (doc.includes('client-sdk')) {
      return true
    }
    return false
  }

  return (
    <>
      {getCurrentPage() ? (
        <div className="pt-14">
          <div className="my-4 flex items-center justify-around">
            <div className="dropdown inline-block relative">
              <button className="bg-transparent py-2 px-4 rounded inline-flex items-center border-0 font-medium text-base">
                <span className="mr-1 language-text w-20 text-left">
                  {language}
                </span>
              </button>
              <ul className="dropdown-menu absolute hidden pt-1 bg-white -mt-1.5 drop-shadow-2xl z-10 list-none rounded-md p-2 m-0">
                <li
                  className="cursor-pointer"
                  onClick={() => handleLanguageChange('javascript')}
                >
                  <p
                    className={`rounded-t hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap m-0 font-normal ${
                      language === 'javascript'
                        ? 'bg-gray-100 text-purple-900'
                        : ''
                    }`}
                  >
                    JavaScript
                  </p>
                </li>
                <li
                  className="cursor-pointer"
                  onClick={() => handleLanguageChange('swift')}
                >
                  <p
                    className={`rounded-t hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap m-0 font-normal ${
                      language === 'swift' ? 'bg-gray-100 text-purple-900' : ''
                    }`}
                  >
                    Swift
                  </p>
                </li>
              </ul>
            </div>
            <VersionDropdown
              dropdownItemsBefore={[]}
              dropdownItemsAfter={[]}
              docsPluginId={docId}
            />
          </div>
        </div>
      ) : null}
      <div
        className={`doc-sidebar-wrapper ${
          getCurrentPage() ? 'versioned-page' : ''
        }`}
      >
        <DocSidebar {...props} />
      </div>
    </>
  )
}
