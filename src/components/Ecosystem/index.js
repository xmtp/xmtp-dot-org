import React from 'react'
import apps from './apps.json'
import categories from './categories.json'
const EcosystemPage = () => {
  const categoriesKeys = [...new Set(apps.map((item) => item.category))]

  return (
    <div>
      {categoriesKeys.map((categoryKey) => (
        <div key={categoryKey}>
          <h1>{categoryKey}</h1>
          <p>{categories[categoryKey]}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-0">
            {apps
              .filter((item) => item.category === categoryKey)
              .map((item) => (
                <div key={item.title}>
                  <img
                    src={
                      item.cover ||
                      'https://xmtp.org/assets/images/hero-6278782df60d268e6a2e11d98e8414bb.png'
                    }
                    alt={item.title}
                    style={{ width: '100px', height: '100px' }} // adjust size as needed
                  />
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                  {/* Additional information can be added here */}
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default EcosystemPage
