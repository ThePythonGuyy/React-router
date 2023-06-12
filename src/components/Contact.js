import React from 'react'
import styled from 'styled-components'
import { Outlet, NavLink } from 'react-router-dom'

const Contact = () => {
  return (
    <Support>
        Email : 1234@gmail.com<br/>
        Phone : +917867526363
    </Support>
  )
}

export default Contact

const Support = styled.div`
`