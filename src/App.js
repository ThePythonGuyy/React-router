import React from 'react'
import { createBrowserRouter, Route, createRoutesFromElements, NavLink, RouterProvider } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import HelpLayout from './layouts/HelpLayout'
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'
import NotFoundPage from './components/NotFoundPage'
import Careers, { careersLoader } from './components/Careers'
import CareersLayout from './layouts/CareersLayout'
// import Faq from './components/Faq'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<RootLayout/>}>

            <Route index element={<Home/>} />
            
            <Route path='about' element={<About/>} />
            

            <Route path='help' element={<HelpLayout/>}>
                <Route path='contact' element={<Contact/>} />
            </Route>

            <Route path="careers" element={<CareersLayout/>} >
                <Route 
                  index 
                  element={<Careers/>} 
                  loader={careersLoader}
                  />
            </Route>

            <Route path="*" element={<NotFoundPage/>}/>


        </Route>

    )
)

const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
