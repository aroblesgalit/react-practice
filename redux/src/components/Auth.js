import React from 'react';
import { useSelector } from 'react-redux';

export default function Auth() {

  const { isLoggedIn } = useSelector(state => state.auth);

  return (
    <div>
        <button className='btn btn-info'>{ isLoggedIn ? 'Log out' : 'Log in' }</button>
    </div>
  );
}
