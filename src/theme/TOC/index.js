import React from 'react'
import TOC from '@theme-original/TOC'
import ALink from '../../components/ALink'

export default function TOCWrapper(props) {
  return (
    <>
      <div className="ml-1.5 mt-2 text-sm font-bold dark:white">On this page</div>
      <TOC {...props} />
      <ALink
        to="https://github.com/orgs/xmtp/discussions/categories/q-a"
        className="grid grid-flow-col items-center text-red-500 text-sm font-semibold ml-1.5 justify-start border-0 border-t border-solid border-black dark:border-neutral-500 pt-4 toc-footer"
      >
        <img src="/img/question-icon.svg" className="mr-1.5" />
        Questions? Give us feedback
      </ALink>
    </>
  )
}
