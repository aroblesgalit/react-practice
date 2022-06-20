import React, { useState } from 'react';

export default function AddMovie() {

    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);

    return (
        <form>
            <input type='text' name='name' onChange={e => setName(e.target.value)}/>
            <input type='number' name='price' onChange={e => setPrice(`$${parseFloat(e.target.value).toFixed(2)}`)} />
            <button type='submit'>Submit</button>
        </form>
    );
}
