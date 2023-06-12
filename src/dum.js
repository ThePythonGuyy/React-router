import { createBrowserRouter, createRoutesFromElements, Route, BrowserRouter, NavLink, RouterProvider } from "react-router-dom";
import Home from "./components/Home"
import About from "./components/About"
import styled from "styled-components";
import RootLayout from "./layouts/RootLayout";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import HelpLayout from "./layouts/HelpLayout";


// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<RootLayout/>}>

//          {/* <Route path='/' element={ <Home/> } /> */}

//          {/* <Route path='/about' element={ <About/> } /> */}

//          {/* <Route path='help' element={ <HelpLayout/> }>

//               <Route path='faq' element={ <Faq/>} />
//               <Route path='Contact' element={ <Contact/>} />

//          </Route> */}

//     </Route>
//   )
// )
function App() {
  return (
    
  
    <div>
        Hello
        {/* <RouterProvider router={ router } /> */}
    </div>
    
    

    
  
  );
}

export default App






