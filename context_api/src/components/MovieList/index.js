import React from 'react';
import Movie from '../Movie';

export default function MovieList() {
    
    

    return (
        <>
            {
                movies.map(movie => <Movie key={movie.id} movie={movie} />)
            }
        </>
    );

}
