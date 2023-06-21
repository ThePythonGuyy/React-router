import React from 'react'
import styled from 'styled-components'
import { Outlet, NavLink } from 'react-router-dom'


const HelpLayout = () => {
  return (
    <HelpWrap>
        <Help>
          This is the help section of the website you can post your complaints 24/7.  
          Any queries related to webiste content will be answered within 15 minutes.
        
        </Help>

        <NavLink to='/help/contact'>Contact</NavLink>
        <NavLink to='/help/contactForm'>Form</NavLink>
        <Main>
            <Outlet />
        </Main>
    </HelpWrap>
  )
}

export default HelpLayout

const HelpWrap = styled.div`

  display: flex;
  flex-direction: column;
  padding: 10px;
  /* justifyconst careers = useRouteLoaderData() */
    margin: 20px 0;
    text-decoration: none;
    font-weight: 550;
    background-color: #c1bdbd;
    color:  black;
    border-radius: 4px;
    max-width: 100px;
    text-align: center;
    
  

  a.active{
    color: #e53a3a;
  }
`

const Help = styled.div`

`

const Main = styled.div`
`