import React from 'react'

const Link = ({ children, to, className }) => {
  return (
    <a
      target="_self"
      href={to}
      className={'hover:no-underline cursor-pointer ' + className}
    >
      {children}
    </a>
  )
}

export default Link
