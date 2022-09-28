import React from 'react'

const ALink = ({ children, to, className }) => {
  return (
    <a
      target="_blank"
      href={to}
      className={'hover:no-underline cursor-pointer ' + className}
    >
      {children}
    </a>
  )
}

export default ALink
