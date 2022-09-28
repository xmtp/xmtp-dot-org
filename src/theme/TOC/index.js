import React from 'react'
import TOC from '@theme-original/TOC'

export default function TOCWrapper(props) {
  return (
    <>
      <div className='ml-1.5 text-sm font-bold dark:white'>On this page</div>
      <TOC {...props} />
      <div className="grid grid-flow-col items-center text-red-500 text-sm font-semibold ml-1.5 justify-start border-0 border-t border-solid border-black pt-4">
        <img src="/img/question-icon.svg" className="mr-1.5" />
        Questions? Give us feedback
      </div>
    </>
  )
}
