import React, { useContext } from 'react';
import Movie from '../Movie';
import MovieContext from '../../utils/MovieContext';

export default function MovieList() {
    
    const { movies } = useContext(MovieContext);

    return (
        <>
            {
                movies.map(movie => <Movie key={movie.id} movie={movie} />)
            }
        </>
    );

}
