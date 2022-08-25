import React from 'react'

export const HeaderBox = ({ title, subtitle }) => {
  return (
    <div className="bg-white dark:bg-neutral-900 rounded-lg border-black dark:border-neutral-700 border border-solid px-8 py-6 w-432 mx-0 my-4 md:mx-4 flex flex-col justify-between ">
      <div className="flex justify-between">
        <h4 className="text-red-500 text-xl">{title}</h4>
        <img className="h-5 mt-1" src="/img/xmtp-icon.svg" alt="xmtp icon" />
      </div>
      <div className="text-2xl font-semibold mb-0 dark:text-white">
        {subtitle}
        <p className="mb-0 mt-5">&rarr;</p>
      </div>
    </div>
  )
}
