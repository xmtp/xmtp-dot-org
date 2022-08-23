import React from 'react'

export const SliderItem = (props) => {
  const { title, content, language, stars, forks } = props.items;

  return (
    <div className="w-[430px] h-32 border-gray-200 dark:border-neutral-700 p-4 mr-6 border-x border-y border-solid flex-[0_0_auto]">
      <p className="text-xl font-bold mb-0 text-blue-600 text-base">
        <img className="align-middle mr-2" src="/img/repo.png" />
        {title}
      </p>
      <small className="text-base text-sm text-gray-600 dark:text-neutral-300">
        {content}
      </small>
      <div className="flex flex-row mt-3">
        <div className="text-xs mr-5 flex">
          <div className="rounded-full bg-cyan-700 w-3.5 h-3.5 mr-1"></div>
          {language}
        </div>
        <div className="text-xs mr-5 flex items-start">
          <img src="/img/star-icon.svg" className="mr-1" />
          {stars}
        </div>
        <div className="text-xs mr-5 flex items-start">
          <img src="/img/branch-icon.svg" className="mr-1" />
          {forks}
        </div>
      </div>
    </div>
  )
}
