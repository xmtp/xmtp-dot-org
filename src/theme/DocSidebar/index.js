import React, { useEffect, useState } from 'react'
import DocSidebar from '@theme-original/DocSidebar'
import VersionDropdown from '@theme/NavbarItem/DocsVersionDropdownNavbarItem'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useGlobalData from '@docusaurus/useGlobalData'
import Versions from '../../../javascript_versions.json'
import './docSidebar.css'

export const getDocId = () => {
  const [, ...doc] = window.location.pathname.split('/')
  if (doc.includes('javascript')) {
    return 'javascript'
  }
  if (doc.includes('swift')) {
    return 'swift'
  }
  return doc
}

export default function DocSidebarWrapper(props) {
  // let docId = getDocId()
  const data = useDocusaurusContext()
  // console.log("DATA", data);
  const globalData = useGlobalData()
  const [docId, setDocId] = useState(getDocId())
  const [language, setLanguage] = useState(docId)
  // console.log('Props', window.location.pathname)

  useEffect(() => {
    // console.log('LANGUAGE', language)
    setDocId(language)
  }, [language])

  const handleLanguageChange = (lang) => {
    if (lang === docId) return
    setLanguage(lang)
    let url = ''
    if (language == 'javascript') {
      url =
        globalData['docusaurus-plugin-content-docs'].swift.versions.at(-1)
          .docs[0].path
    }
    if (language == 'swift') {
      url =
        globalData['docusaurus-plugin-content-docs'].javascript.versions.at(-1)
          .docs[0].path
    }
    // console.log('GLOBAL', globalData["docusaurus-plugin-content-docs"].javascript);
    window.history.pushState({}, '', url)
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
            {/* <select value={language} onChange={handleLanguageChange} className="text-lg border-none bg-transparent">
            <option value="javascript">JavaScript</option>
            <option value="swift">Swift</option>
          </select> */}
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
