import React from 'react'

export const BlogItem = (props) => {
  const { tag, title, content, user } = props.items

  return (
    <div className="mr-6 last:mr-0 w-full lg:w-1/3">
      <div className="flex">
        {tag.map((tag) => (
          <div
            key={tag}
            className="rounded-full border border-blue-300 bg-blue-50 text-xs font-semibold text-blue-800 border-solid px-2.5 py-0.5 mb-4 w-fit mr-3"
          >
            {tag}
          </div>
        ))}
      </div>
      <h3 className="group text-red-500 text-xl h-14 cursor-pointer">
        {title}
        <img  className="ml-2 opacity-0 group-hover:opacity-100" src="/img/new-window-icon.svg" alt="open new window" />
      </h3>
      <p className="text-sm text-neutral-800 dark:text-neutral-300">
        {content}
      </p>
      <div className="flex mb-6">
        <div>
          <img
            className="mr-3 w-10 h-10 rounded-full"
            src={`/img/${user.img || 'avatar.png'}`}
          />
        </div>
        <div>
          <p className="text-gray-800 dark:text-white mb-0 text-sm font-medium">
            {user.name}
          </p>
          <p className="text-sm leading-5 font-normal text-neutral-800 dark:text-neutral-500">
            {user.date}
          </p>
        </div>
      </div>
    </div>
  )
}
