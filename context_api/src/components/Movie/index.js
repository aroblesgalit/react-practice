import React from 'react';

export default function Movie({ movie }) {
  return (
    <div>
        <h3>{movie.name}</h3>
        <p>{movie.price}</p>
    </div>
  );
}
