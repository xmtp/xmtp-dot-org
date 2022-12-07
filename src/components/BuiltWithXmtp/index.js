import React from 'react'
import ListOfDevelopers from './ListOfDevs.json'
import useBaseUrl from '@docusaurus/useBaseUrl/';

const BuiltWithXmtp = () => {
  return (
    <ul className="list-none grid grid-cols-1 md:grid-cols-2 gap-4 px-0">
      {ListOfDevelopers.map(developer => 
        <li className="flex flex-col w-96" key={developer.name}>
          <a className="rounded border-solid rounded-md border-slate-200 flex justify-center py-4 mb-4 bg-white" href={developer.href} alt="">
            <img className="max-h-24 max-w-24" src={useBaseUrl(developer.image)} alt=""></img>
          </a>
          <h4 className="my-1 text-xl mt-0">{developer.name}</h4>
          <p className="text-base text-neutral-800 dark:text-neutral-300 line-clamp-3 mt-0 h-20">{developer.description}</p>
          <div className='flex items-center'>
            <a className="mb-2 mt-1 text-base font-semibold text-red-500 flex align-center mr-1"  href="">Github Repo<img src={useBaseUrl('/img/icons/external-link.svg')} alt="" /></a>
            |
            <a className="mb-2 mt-1 text-base font-semibold text-red-500 flex align-center ml-1" href="">Twitter<img src={useBaseUrl('/img/icons/twitter-icon-blue.svg')} alt="" /></a>
          </div>
        </li>
      )}
    </ul>
  )
}

export default BuiltWithXmtp
