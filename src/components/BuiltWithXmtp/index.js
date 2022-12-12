import React from 'react'
import ListOfDevelopers from './ListOfDevs.json'
import useBaseUrl from '@docusaurus/useBaseUrl/';

const BuiltWithXmtp = () => {
  return (
    <ul className="list-none grid grid-cols-1 md:grid-cols-2 gap-6 px-0">
      {ListOfDevelopers.map(developer => 
        <li className="relative group" key={developer.name}>
          <a className="rounded border-solid rounded-md border-slate-200 flex justify-center py-6 mb-4 bg-white" href={developer.href} alt="">
            <img className="max-h-20 max-w-20" src={useBaseUrl(developer.image)} alt=""></img>
          </a>
          <h4 className="my-1 text-xl mt-0">{developer.name}</h4>
          <p className="text-base text-neutral-800 dark:text-neutral-300 line-clamp-3 mt-0 h-20">{developer.description}</p>
          <div className='flex items-center'>
            <a className="mb-2 mt-1 text-base font-semibold text-red-500 flex align-center mr-2"  href="">Github Repo<img src={useBaseUrl('/img/icons/external-link.svg')} class="ml-1" alt="" /></a>
            |
            <a className="mb-2 mt-1 text-base font-semibold text-red-500 flex align-center ml-2" href="">Twitter<img src={useBaseUrl('/img/icons/twitter-icon-blue.svg')} class="ml-2" alt="" /></a>
          </div>
        </li>
      )}
        <li className="flex flex-col w-96">
          <a className="rounded border-solid rounded-md border-slate-200 flex justify-center py-6 mb-4 bg-black" href="#" alt="">
            <img className="max-h-20 max-w-20 min-h-20" src="/img/builtWithXmtp/building.svg" alt=""></img>
          </a>
          <a href="#"><h4 className="my-1 text-xl mt-0">Submit your project</h4></a>
          <p className="text-base text-neutral-800 dark:text-neutral-300 line-clamp-3 mt-0 h-20">Have a project or company that's currently building on XMTP? <a href="#">Submit it here</a> and we'll add it to the showcase.</p>
        </li>
    </ul>
  )
}

export default BuiltWithXmtp