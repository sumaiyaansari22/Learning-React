import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/cards'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username : 'Sumaiya',
    age : 21
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p4 rounded-xl'>Tailwind</h1>
      <Card username="Sumaiya" btnText="Click"/>
      <Card username="Abutalha" />
    </>
  )
}

export default App
