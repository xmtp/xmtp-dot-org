import React from 'react'
import { Link } from 'react-router-dom'

export const HeaderBox = ({ title, subtitle, url, styles, icon }) => {
  return (
    <li key={title} className={`${styles.headerBox} col-span-1`}>
      <div className="xl:min-h-[300px] rounded-lg border border-solid border-black dark:border-neutral-700 relative group bg-white dark:bg-neutral-900 px-6 pb-6 pt-6 md:pt-6 lg:px-8 lg:pt-8 lg:pb-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 transition-all hover:shadow-lg">
        <div>
          <h4 className="inline-flex text-lg font-semibold text-red-500 md:text-x">
            {title}
          </h4>
        </div>

        <div className="lg:mt-14">
          <h3 className="text-xl md:text-2xl font-semibold mb-0 mt-3 md:mt-9">
            <Link
              to={url}
              className="focus:outline-none dark:text-white text-gray-900 hover:text-red-500 dark:hover:text-red-500 hover:no-underline"
            >
              <span className="absolute inset-0" aria-hidden="true"></span>
              {subtitle}
              <p className="mb-0 mt-2.5">&rarr;</p>
            </Link>
          </h3>
        </div>

        <span
          className="pointer-events-none absolute top-6 right-6 lg:top-8 lg:right-8 text-gray-300 group-hover:text-gray-400"
          aria-hidden="true"
        >
          <img className="h-5 mt-1" src={`/img/${icon}`} alt="xmtp icon" />
        </span>
      </div>
    </li>
  )
}
