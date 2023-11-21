import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive");

  return (

      <div className="w-full h-screen" style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center top-5 inset-x-5 px-5">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
           <button className='px-4 py-1 rounded-full text-white shadow-lg' 
           onClick={ () => setColor("red")} style={{backgroundColor : "red"}}>Red</button>
           <button className='px-4 py-1 rounded-full text-white shadow-lg' 
           onClick={ () => setColor("green")} style={{backgroundColor : "green"}}>Green</button>
           <button className='px-4 py-1 rounded-full text-white shadow-lg' 
           onClick={ () => setColor("blue")} style={{backgroundColor : "blue"}}>Blue</button>
           <button className='px-4 py-1 rounded-full text-white shadow-lg' 
           onClick={ () => setColor("lavender")} style={{backgroundColor : "lavender"}}>Lavender</button>
           <button className='px-4 py-1 rounded-full text-white shadow-lg' 
           onClick={ () => setColor("pink")} style={{backgroundColor : "pink"}}>Pink</button>
           <button className='px-4 py-1 rounded-full text-white shadow-lg' 
           onClick={ () => setColor("gray")} style={{backgroundColor : "gray"}}>Gray</button>
          </div>
        </div>
      </div>

  )
}

export default App
