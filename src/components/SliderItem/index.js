import React from 'react'

export const SliderItem = (props) => {
  const { full_name, description, language, stargazers_count, forks_count } =
    props.items

  return (
    <div className="w-[430px] h-32 border-gray-200 dark:border-neutral-700 p-4 mr-6 border-x border-y border-solid flex-[0_0_auto]">
      <p className="font-bold mb-0 text-blue-600 text-base">
        <img className="align-middle mr-2" src="/img/repo.png" />
        {full_name}
      </p>
      <div className="text-sm text-gray-600 dark:text-neutral-300 mt-1.5 h-10">
        {description}
      </div>
      <div className="flex flex-row mt-3">
        {language && (
          <div className="text-xs mr-5 flex">
            <div className="rounded-full bg-cyan-700 w-3.5 h-3.5 mr-1"></div>
            {language}
          </div>
        )}
        <div className="text-xs mr-5 flex items-start">
          <img src="/img/star-icon.svg" className="mr-1" />
          {stargazers_count}
        </div>
        <div className="text-xs mr-5 flex items-start">
          <img src="/img/branch-icon.svg" className="mr-1" />
          {forks_count}
        </div>
      </div>
    </div>
  )
}
