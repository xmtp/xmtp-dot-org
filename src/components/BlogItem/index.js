import React from 'react'

export const BlogItem = (props) => {
  const { tag, title, content, user, url } = props.items

  return (

    
    <div key={title}>

      <div>
        {tag.map((tag) => (
          <div
            key={tag}
            className="inline-block"
          >
              <span className="inline-flex items-center mr-3 mb-2 px-2 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-800 border-solid border-1 border-blue-300">
                {tag}
              </span>
              
          </div>
        ))}
      </div>
      
      <div className="min-h-[144px]">
        <a
          href={url}
          target="_blank"
          className="mt-0 block"
        >
          <p className="mb-2 text-xl font-semibold text-red-500">{title}</p>
        </a>

        <p className="mt-0 mb-0 text-base text-neutral-800 text-ellipsis">
          {content}
        </p>
      </div>

      <div className="mt-4 flex items-middle">
        <div className="flex-shrink-0">
          
          <span className="sr-only">{user.name}</span>
          <img className="h-10 w-10 rounded-full" src={`/img/${user.img || 'avatar.png'}`} alt="" />

        </div>

        <div className="ml-3">
          <p className="mb-0 text-sm font-medium text-neutral-800">
            {user.name}
          </p>
          <div className="flex space-x-1 text-sm text-neutral-800">
            <time>{user.date}</time>
          </div>
        </div>

      </div>
    </div>
  )
}


