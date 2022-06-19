import React, { useState } from 'react';

export default function AddMovie() {

    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);

  return (
    <form>
        <input type='text' name='name' />
        <input type='number' name='price' />
        <button type='submit'>Submit</button>
    </form>
  );
}
