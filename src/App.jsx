import React from 'react';
import { createBrowserRouter, RouterProvider, NavLink, Outlet } from 'react-router-dom';
import {Home} from './pages/home'
import { About } from './pages/aboutme';
import { Projets } from './pages/projets';
import { Nav, Logo } from './components/Navbar/Nav'
import './App.css';
import { Children } from 'react';
import { Menu } from './components/Menu';
import {Footer} from './components/Footer'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Root/>,
    children: [
      {
        path:'/',
        element: <Home/>
      },
      {
        path:'/aboutme',
        element: <About/>
      },
      {
        path:'/projets',
        element: <Projets/>
      }
    ]
  }
])


function Root() {

  return <>
   <header>
     <nav> 
       <Menu/>
       <Logo/>
       <Nav/>
     </nav>
   </header>

   <footer>
     <Footer/>
   </footer>

   <div>
     <Outlet/>
   </div>
  </>
}


function App() {
 
  return( 
    <div className='router'>
      <RouterProvider router={router}/>
    </div>
  )
  
}

export default App
