import React, { useState, createContext } from 'react';

const MovieContext = createContext();

// Provider
function MovieProvider(props) {

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
        <MovieContext.Provider
            value={{movies}}
        >
            {props.children}
        </MovieContext.Provider>
    );

}

// Consumer
const MovieConsumer = MovieContext.Consumer;

export default MovieContext;
export { MovieProvider, MovieConsumer }