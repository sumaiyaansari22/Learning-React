import React from 'react'
import { useMovieContext } from '../../Context/MovieContext'

function Input({side,title}) {
  const {setTitle} = useMovieContext();
  const onTitleChange = (e) => {
    setTitle(e.target.value,side);
  }
  return (
    <>
    <label>Search</label>
    <input type="text" class="input" value={title} onChange ={(e) => onTitleChange(e)}/>
    </>
  );
}

export default Input