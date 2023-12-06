import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ButtonLayout from './Components/ButtonLayout/ButtonLayout'
import Input from './Components/Input/Input'

function App() {
  const [count, setCount] = useState("")

  
  return (
    <div className='border-solid border-2 border-black rounded-lg w-80 p-2 m-2'>
      <Input count={count} setCount={setCount}/>
      <ButtonLayout setCount={setCount} />

    </div>
  )
}

export default App
