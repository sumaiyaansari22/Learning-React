import { useState } from 'react'
import './App.css';
import UserContextProvider from './components/UserContextProvider/UserContextProvider'
import UserContext from './components/UserContext/UserContext'
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'

function App() {
 return(
  <UserContextProvider>
    <h2>Context Api -|- Chai Aur Code</h2>
    <Login />
    <Profile />
  </UserContextProvider>
 )
}

export default App
