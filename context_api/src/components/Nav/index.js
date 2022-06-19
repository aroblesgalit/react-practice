import React, { useContext } from 'react';
import MovieContext from '../../utils/MovieContext';

export default function Nav() {

    const { movies } = useContext(MovieContext);

  return (
    <div>
        <h3>Alvin Galit</h3>
        <p>List of Movies: {movies.length}</p>
    </div>
  );
}
