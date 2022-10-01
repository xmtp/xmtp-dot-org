import React from 'react'
import { useColorMode } from '@docusaurus/theme-common'

export default function ToggleButtons() {
  const { colorMode, setColorMode } = useColorMode()

  const handleDarkMode = () => {
    if (colorMode === 'dark') setColorMode('light')
    if (colorMode === 'light') setColorMode('dark')
  }

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      <div
        onClick={handleDarkMode}
        className="w-11 h-11 rounded-full bg-gray-900 grid justify-center items-center border border-solid border-gray-500 fixed right-4 bottom-20 z-50 cursor-pointer drop-shadow-lg"
      >
        <img src={`/img/icons/${colorMode}.svg`} />
      </div>
      <div
        onClick={handleScrollToTop}
        className="w-11 h-11 rounded-full bg-gray-900 grid justify-center items-center border border-solid border-gray-500 fixed right-4 bottom-7 z-50 cursor-pointer drop-shadow-lg"
      >
        <img src="/img/icons/arrow-up.svg" />
      </div>
    </>
  )
}
