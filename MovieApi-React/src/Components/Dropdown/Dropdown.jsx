import React, { useEffect, useState } from 'react';
import { useMovieContext } from '../../Context/MovieContext';
import { useApi } from '../../Hooks/Hooks';


const Dropdown = ({title,side}) => {
    const {setTitle,setData} = useMovieContext();
    const [id, setId] = useState("");
    const [movies, setMovies] = useState([]);
    const moviesData = useApi(title,'s');
    const movie = useApi(id,'i');

    useEffect(() => {
        if(id){
            setMovies([]);
        }else if(title){
            setMovies(moviesData)
        }
    },[title])

    useEffect(() => {
        console.log(movie)
        if(movie && Object.keys(movie) != 2) { 
            setData(movie,side)
            setTitle(movie.Title,side); 
        }
    },[movie])

    function renderDropDownItems(){
        if(movies && movies.length>0){
            return movies.map((movie)=>{
                return <a onClick={(e) => setId(e.target.id)} className="dropdown-item" id={movie.imdbID}><img src={movie.Poster} />{movie.Title}</a>
            })
        }
    }
  return (
    <div className={`dropdown ${movies&&movies.length>0?'is-active':''}`} >
        <div className ={`dropdown-menu`} style={{position:"static"}}>
            <div className = "dropdown-content">{renderDropDownItems()}</div>
        </div>
    </div>
  )
}

export default Dropdown