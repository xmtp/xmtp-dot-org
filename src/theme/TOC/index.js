import React from 'react'
import TOC from '@theme-original/TOC'
import ALink from '../../components/ALink'
import Feedback from '../../components/Feedback'

export default function TOCWrapper(props) {
  return (
    <>
      <div className="ml-1.5 text-sm font-bold dark:white">On this page</div>
      <TOC {...props} />
      <Feedback />
    </>
  )
}
