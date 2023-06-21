import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

const Breadcrums = () => {
    const location = useLocation()
    
    let currntLink =''
    const crumbs = location.pathname.split('/')
      .filter(crumb => crumb !== '')
      .map(crumb => {
        currntLink += `/${crumb}`

        return (
          <div className='crumb' key={crumb}>
              <Link to={currntLink}>{crumb}</Link>
              
          </div>
        )
      })
  return (
    <Div>
     {crumbs} 
    </Div>
  )
}

const Div = styled.div`
  margin: 20px auto;

  & > *{
    display: inline-block;
    margin-right: 10px;
  }

  div:after{
    content: '>';
    margin-left: 10px;
  }

  div:last-child:after{
    display: none;
  }
`

export default Breadcrums
