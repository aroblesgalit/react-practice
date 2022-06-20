import React, { useContext, useState } from 'react';
import MovieContext from '../../utils/MovieContext';

export default function AddMovie() {

    const {setMovies} = useContext(MovieContext);

    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);

    function addMovie(e) {
        e.preventDefault();
        setMovies(prevMovies => [
            ...prevMovies,
            {
                name: name,
                price: `$${price}`,
                id: Math.random() * 10
            }
        ])
    }

    return (
        <form onSubmit={e => addMovie(e)}>
            <input type='text' name='name' value={name} onChange={e => setName(e.target.value)}/>
            <input type='number' step="0.01" min="0" name='price' value={price} onChange={e => setPrice(e.target.value)} />
            <button type='submit'>Submit</button>
        </form>
    );
}
