import React from 'react'
import { Link } from 'react-router-dom'

export const HeaderBox = ({ title, subtitle, url,styles }) => {
  return (
    <Link
      to={url}
      className={`${styles.headerBox} first:ml-0 last:mr-0 rounded-lg border-black dark:border-neutral-700 border border-solid px-8 py-6 w-432 mx-0 my-4 md:mx-4 flex flex-col justify-between cursor-pointer hover:no-underline`}
    >
      <div className="flex justify-between">
        <h4 className="text-red-500 text-xl">{title}</h4>
        <img className="h-5 mt-1" src="/img/xmtp-icon.svg" alt="xmtp icon" />
      </div>
      <div className="text-2xl font-semibold mb-0 dark:text-white text-gray-900 mt-9">
        {subtitle}
        <p className="mb-0 mt-2.5">&rarr;</p>
      </div>
    </Link>
  )
}
