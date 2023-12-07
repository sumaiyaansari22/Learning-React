import React from 'react'

function Input({count,setCount}) {
  return (
    <input 
    value={count}
    onChange={(e) => setCount(e.target.value)}
    type="text" 
    className='mx-6 w-64 h-28 border-solid border-2 p-3 border-black text-lg rounded-lg' />
  )
}

export default Input