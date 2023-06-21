import React from 'react'
import { useRouteError } from 'react-router-dom'

const CareerError = () => {
    const err = useRouteError()
  return (
    <div>
      <h2>Error</h2>
      <p>{err.message}</p>
    </div>
  )
}

export default CareerError
