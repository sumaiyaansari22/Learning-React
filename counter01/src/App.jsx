import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [povcount, setPovCount] = useState(15)
  const [negcount, setNegCount] = useState(15)

  function increaseVal() {

    setPovCount(povcount + 1)
  }

  function decreaseVal(){
    setNegCount(negcount - 1)
  }
  return (
    <>
      <h1>Click here if you think my boyfriend is cute</h1>
      <button onClick={increaseVal}>Click me : {povcount}</button>
      <h1>Click here if you think my boyfriend is following a unhealthy diet</h1>
      <button onClick={decreaseVal}>Click me : {negcount}</button>
    </>
  )
}

export default App
