import React from 'react'
import ALink from '../ALink'

const Feedback = ({url}) => {
  return (
    <ALink
      to="https://github.com/orgs/xmtp/discussions/categories/q-a"
      className="grid grid-flow-col items-center text-red-500 text-sm font-semibold ml-1.5 justify-start border-0 border-t border-solid border-black dark:border-neutral-500 pt-4 toc-footer"
    >
      <img src="/img/question-icon.svg" className="mr-1.5" />
      Questions? Give us feedback
    </ALink>
  )
}

export default Feedback
