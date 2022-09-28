import React from 'react'
import PrimaryMenu from '@theme-original/Navbar/MobileSidebar/PrimaryMenu'
import { useColorMode } from '@docusaurus/theme-common'

export default function PrimaryMenuWrapper(props) {
  const { colorMode, setColorMode } = useColorMode()

  const handleMode = (mode) => {
    setColorMode(mode)
  }

  return (
    <>
      <PrimaryMenu {...props} />
      <div className=" border-0 border-solid border-t border-neutral-300 grid grid-cols-2 pt-4 pb-3">
        <div className="pl-3 grid items-center">Switch theme</div>
        <div className="grid grid-flow-col gap-1 items-center ml-auto p-3 mr-4 rounded-full cursor-pointer hover:drop-shadow-md">
          {colorMode === 'dark' ? (
            <>
              <img
                src="/img/icons/dark.svg"
                onClick={() => handleMode('light')}
              />
            </>
          ) : (
            <>
              <img
                className="invert"
                src="/img/icons/light.svg"
                onClick={() => handleMode('dark')}
              />
            </>
          )}
        </div>
      </div>
    </>
  )
}
