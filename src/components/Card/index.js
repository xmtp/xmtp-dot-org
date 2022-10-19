import React from 'react'
import ALink from '../ALink'

const Card = ({
  title,
  description,
  firstLink,
  secondLink,
  logo,
  theme = 'sunrise',
}) => {
  return (
    <div className="w-96">
      <article
        className={`${theme}-theme grid grid-flow-col items-end  h-36 rounded-lg`}
      >
        <h3 className="text-white text-2xl bold ml-6 mb-6"> {title}</h3>
        <section className="h-full grid justify-end items-center mr-3">
          <img src={logo} alt="card-logo" />
        </section>
      </article>
      <p className="mb-2 mt-4">{description}</p>
      <ALink
        className="text-red-500 text-base font-semibold"
        to={firstLink.link}
      >
        {firstLink.name}
      </ALink>
      {secondLink ? (
        <>
          <span className="mx-4">|</span>
          <ALink
            className="text-red-500 text-base font-semibold"
            to={secondLink.link}
          >
            {secondLink.name}
          </ALink>
        </>
      ) : null}
    </div>
  )
}

export default Card
