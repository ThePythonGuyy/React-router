import React from 'react'
import styled from 'styled-components'
// import styled from 'styled-components'
import { useRouteLoaderData, Link } from 'react-router-dom'

const Careers = () => {
  const careers = useRouteLoaderData()
  console.log(careers)
  return (
   <Career>
    {/* {careers && 
      careers.map(career => (
        // <Link to='/' key={career.id}/>
        <h1>hello</h1>
      ))} */}
   </Career>
  )
}

export default Careers

export const careersLoader = async() => {

  const url = 'https://dog.ceo/api/breeds/image/random'
  const response = await fetch(url)
  const data = await response.json()
  console.log(data)
  return data
}

const Career = styled.div`

`