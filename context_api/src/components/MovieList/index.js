import React, { useState } from 'react';

export default function MovieList() {
    
    const [movies, setMovies] = useState([
        {
            name: 'Harry Potter',
            price: '$10',
            id: 23124
        },
        {
            name: 'Game of Thrones',
            price: '$10',
            id: 2566124
        },
        {
            name: 'Inception',
            price: '$10',
            id: 23524
        }
    ]);

    return (
        <>
            {
                movies.map(movie => (
                    <li>{movie.name}</li>
                ))
            }
        </>
    );

}
