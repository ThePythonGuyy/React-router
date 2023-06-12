import React from 'react'
import { Outlet } from 'react-router-dom'

const CareersLayout = () => {
  return (
    <div>
      <h1>
        Unison
      </h1>
      <p> He is the most superior villan in the ben 10 universe<br/>
          He again and again return even more powerfull after each defeat by the hero
      </p>

      <Outlet/>
    </div>
  )
}

export default CareersLayout
