import React from 'react'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Nav from './component/Nav'
import Home from './component/Home'
import Router2 from './component/Router1'
import Router1 from './component/Router'
import Contact from './component/contact'
import About from './component/About'
const paths = createBrowserRouter([
  {
    path:"/",
    element:<Nav/>,
    
  },
  { 
    path:"/home",
    element:<Home/>,
  },
  { 
    path:"/contact",
    element:<Contact/>,
  },
  { 
    path:"/about",
    element:<About/>,
  },
])
const App = () => {
  return (
   
  
<RouterProvider router={paths}>
 <Nav/>
</RouterProvider>
   
    
  
  
  )
}

export default App