import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from './Context/Theme/ThemeContext'
import ThemeBtn from './Context/Components/ThemeBtn/ThemeBtn'
import Card from './Context/Components/Card/Card'

function App() {

  const [themeMode, setThemeMode] = useState('light');

  const lightTheme = () => {
    setThemeMode("light");
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }
   useEffect(() => {
    const html = document.querySelector('html')
    const body = document.querySelector('body')
    const toggleText = document.querySelector('.toggleBtn');

    html.classList.remove("light","dark")
    html.classList.add(themeMode)
    body.classList.add(themeMode==="dark"?"dark:bg-gray-900":"a");
    toggleText.classList.add(themeMode==="dark"?"dark:text-white":"a")
   }, [themeMode])
   
  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
              <Card />
          </div>
        </div>
      </div>

    </ThemeProvider>
  )
}

export default App
