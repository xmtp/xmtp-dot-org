import React from 'react'

export const BlogItem = (props) => {
  const { tag, title, content, user } = props.items
  return (
    <div className='mr-6 last:mr-0 w-full lg:w-1/3'>
      <div className="rounded-full border border-blue-300 bg-blue-50 text-xs font-semibold text-blue-800 border-solid px-2.5 py-0.5 mb-4 w-fit">
        {tag}
      </div>
      <h3 className="text-red-500 text-xl">{title}</h3>
      <p className="text-sm text-neutral-800 dark:text-neutral-300">
        {content}
      </p>
      <div className="flex mb-6">
        <div>
          <img className="mr-3" src="/img/avatar.png" />
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
