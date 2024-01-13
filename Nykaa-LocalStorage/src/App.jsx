import { useState } from 'react';
import {createRoutesFromChildren,createBrowserRouter,Route,RouterProvider} from "react-router-dom"
import Login from './Components/login/login';
import Homepage from './Components/homePage/homePage';
import About from './Components/about/about';
import Contact from './Components/contact/contact';

function App() {

  const router = createBrowserRouter(
    createRoutesFromChildren(
      <Route path = '/'>
        <Route path = "" element={<Homepage/>}/>
        <Route path = "/about" element={<About/>}/>
        <Route path = "/login" element={<Login/>}/>
        <Route path = "/contact" element={<Contact/>}/>
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
