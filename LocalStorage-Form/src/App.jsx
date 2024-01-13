import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Components/Form/Form'
import LoginForm from './Components/LoginForm/LoginForm'
import Card from './Components/Card/Card'
import { FormProvider } from './Context/FormContext';
import {createRoutesFromChildren,createBrowserRouter,Route,RouterProvider} from "react-router-dom"

function App() {
  const [user, setUser] = useState("");
  const router = createBrowserRouter(
    createRoutesFromChildren(
      <Route path = '/'>
        <Route path = "" element={<Form />}/>
        <Route path = "/login" element={<LoginForm />}/>
        <Route path = "/card" element={<Card/>}/>
      </Route>
    )
  )

  return (
    <FormProvider values={{user,setUser}}>
      <RouterProvider router={router} />
    </FormProvider>
  )
}

export default App
