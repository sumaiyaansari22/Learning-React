import React from 'react'

function Button({text,btnClass,func}) {

  return (
    <button 
    onClick={(e) => func(e)}
    className={`bg-white text-black border-solid border-2 p-6 m-0.5 border-black rounded-lg ${btnClass}`}>{text}</button>
  )
}

export default Button