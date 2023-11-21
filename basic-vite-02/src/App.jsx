import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Basic from "./basic"

function App() {
  const [count, setCount] = useState(0)

  const name = "Sumaiya"

  return (
    <>
     <Basic />
     <h1>From Vite - {name}</h1>
    </>
  )
}

export default App