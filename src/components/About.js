import React, { useState } from 'react'
import { Navigate, redirect } from 'react-router-dom'
// useState
function About() {
  const [value, setValue] = useState(true)

  if(!value){
    return <Navigate to='/' replace={true} />
    //  redirect('/')
  }
  return (

    <div>
        <h1>INTEL</h1>
        <p>Ten-year-old Ben Tennyson discovers a mysterious device, the Omnitrix, 
        on a family vacation. <br/>The device allows him to transform into ten 
        different alien forms replete with unique superpowers.
        </p>
        <button onClick={() => setValue(false)}>Logout</button>
    </div>
  )
}

export default About
