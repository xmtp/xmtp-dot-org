import React from 'react'
import PrimaryMenu from '@theme-original/Navbar/MobileSidebar/PrimaryMenu'
import { useColorMode } from '@docusaurus/theme-common'

export default function PrimaryMenuWrapper(props) {
  const { colorMode, setColorMode } = useColorMode()

  const handleMode = (e) => {
    console.log(e.target.value)
    setColorMode(e.target.value)
  }
  return (
    <>
      <PrimaryMenu {...props} />
      <div className=" border-0 border-solid border-t border-neutral-300 grid grid-cols-2 pt-4 pb-6">
        <div className="pl-3 items-baseline">Switch theme</div>
        <select
          className="w-32 h-11 ml-auto"
          defaultValue={colorMode || 'light'}
          onChange={handleMode}
        >
          <option value="dark">Dark</option>
          <option value="light">Light</option>
        </select>
      </div>
    </>
  )
}
