import React from 'react'

export const SliderItem = (props) => {
  const {
    full_name,
    description,
    language,
    stargazers_count,
    forks_count,
    text,
    html_url,
    icon,
  } = props.items

  const { size } = props

  return (
    <a
      href={html_url}
      target="_blank"
      className={`${
        size > 3 ? 'w-[430px]' : 'w-[357px]'
      } h-32 border-gray-200 dark:border-neutral-700 p-4 mr-6 border-x border-y border-solid flex-[0_0_auto] hover:no-underline`}
    >
      <p className="font-bold mb-0 text-blue-600 text-base">
        <img className="align-middle mr-2" src={`/img/${icon || 'repo.png'}`} />
        {full_name}
      </p>
      <div className="text-sm text-gray-600 dark:text-neutral-300 mt-1.5 h-10 line-clamp-2">
        {description}
      </div>
      <div className="flex flex-row mt-3">
        {text ? (
          <div className="text-xs text-blue-600 font-bold">{text}</div>
        ) : (
          <>
            {language && (
              <div className="text-xs mr-5 flex text-black dark:text-neutral-500">
                <div className="rounded-full bg-cyan-700 w-3.5 h-3.5 mr-1"></div>
                {language}
              </div>
            )}
            <div className="text-xs mr-5 flex items-start text-black dark:text-neutral-500">
              <img src="/img/star-icon.svg" className="mr-1 dark:contrast-50" />
              {stargazers_count}
            </div>
            <div className="text-xs mr-5 flex items-start text-black dark:text-neutral-500">
              <img
                src="/img/branch-icon.svg"
                className="mr-1 dark:contrast-50"
              />
              {forks_count}
            </div>
          </>
        )}
      </div>
    </a>
  )
}
