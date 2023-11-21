import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");
  const passwordReference = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAllow) str += "0123456789";
    if (charAllow) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass);
  }, [length, numAllow, charAllow, setPassword])

  const passwordToClipboard = useCallback( () => {
    passwordReference.current?.select();
    passwordReference.current?.setSelectionRange(0,100);
    window.navigator.clipboard.writeText(password)
  },[password])
  useEffect(() => {
    passwordGenerator()
  }, [length, numAllow, charAllow, passwordGenerator])

  return (
    <>

      <h1 className='text-white text-center my-3'>Password generator</h1>
      <input
        type="text"
        value={password}
        className="outline-none rounded w-3/4 py-1 px-3"
        placeholder="Password"
        readOnly
        ref={passwordReference}
      />
      <button
        onClick={passwordToClipboard}
        className='outline-none bg-blue-500 rounded text-white px-3 py-0.5 shrink-0'>copy</button>


      <div className='flex justify-center gap-x-2'>
        <input
          type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => { setLength(e.target.value) }}
        />
        <label className='text-white'>Length: {length}</label>


        <input
          type="checkbox"
          defaultChecked={numAllow}
          id="numberInput"
          onChange={() => {
            setNumAllow((prev) => !prev);
          }}
        />
        <label className="text-white">Numbers</label>


        <input
          type="checkbox"
          defaultChecked={charAllow}
          id="characterInput"
          onChange={() => {
            setCharAllow((prev) => !prev)
          }}
        />
        <label className='text-white'>Characters</label>
      </div>
    </>
  )
}

export default App
