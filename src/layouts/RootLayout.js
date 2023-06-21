import React from 'react'
import styled from 'styled-components'
import { NavLink, Outlet, Link } from 'react-router-dom'
import Breadcrums from '../components/Breadcrums'

const RootLayout = () => {
    return (
        <div>
            <Header>

                <h1>CN</h1>
                <NavLink to="/">Home</NavLink>
                <NavLink to="about">About</NavLink>
                <NavLink to="help">Help</NavLink>
                <NavLink to="careers">Careers</NavLink>

            </Header>
                <Breadcrums />
            <Main>
                <Outlet />
            </Main>
        </div>
    )
}

export default RootLayout

const Header = styled.div`
  display: flex;
  gap: 16px;
  justify-content: left;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;

    a{
      text-decoration: none;
      padding: 6px;
      border-radius: 4px;
      background-color: #c1bdbd;
      color: black;
      font-weight: 500;
     }
     a.active{
      color: #e53a3a;
     }

    h1{
      margin-right: auto;
      border-bottom: 3px solid;
      
    }
`


const Main = styled.div`
    max-width: 1200px;
    margin: 40px auto;
`