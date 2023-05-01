import React from 'react'
import TOC from '@theme-original/TOC'

export default function TOCWrapper(props) {
  return (
    <>
      <div className="ml-1.5 mt-2 text-sm font-bold dark:white">On this page</div>
      <TOC {...props} />
    </>
  )
}
