import React from 'react';
import { useSelector } from 'react-redux';

export default function Balance() {

  const store = useSelector(state => state);

  return (
    <div>
        <h1>${store}</h1>
    </div>
  );
}
