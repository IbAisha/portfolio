import React from 'react';
import { createBrowserRouter, RouterProvider, NavLink, Outlet } from 'react-router-dom';
import {Home} from './pages/home'
import { About } from './pages/aboutme';
import { Projets } from './pages/projets';
import './App.css';
import { Children } from 'react';

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
       <NavLink to="/">Home</NavLink>
       <NavLink to="/aboutme">About Me</NavLink>
       <NavLink to="/projets">Projets</NavLink>
     </nav>
   </header>

   <div>
     <Outlet/>
   </div>
  </>
}


function App() {
 
  return( 
    <div>
      <RouterProvider router={router}/>
    </div>
  )
  
}

export default App
