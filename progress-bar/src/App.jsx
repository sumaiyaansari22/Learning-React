import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProgressBar from './components/progressBar'


function App() {
  const [value, setValue] = useState(0);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setValue((val) => val + 1);
    },100);
  },[]);

  return (
    <div className='app'>
      <span>Progress Bar</span>
      <ProgressBar value={value} onComplete={() => setSuccess(true)}/>
      <span>{success ? "Complete!" : "Loading..."}</span>
    </div>
  )
}

export default App
