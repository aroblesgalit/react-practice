import React, { useState } from 'react';

export default function AddMovie() {

    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);

    function addMovie(e) {
        e.preventDefault();
        console.log(name, price);
    }

    return (
        <form>
            <input type='text' name='name' value={name} onChange={e => setName(e.target.value)}/>
            <input type='number' name='price' value={price} onChange={e => setPrice(`$${parseFloat(e.target.value).toFixed(2)}`)} />
            <button type='submit'>Submit</button>
        </form>
    );
}
