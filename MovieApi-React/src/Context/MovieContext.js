import {createContext, useContext} from 'react';

export const MovieContext = createContext({
   
})

export const useMovieContext = () => {
    return useContext(MovieContext);
}   

export const MovieProvider = MovieContext.Provider;
