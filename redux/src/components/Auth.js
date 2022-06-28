import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Auth() {

  const { isLoggedIn } = useSelector(state => state.auth);
  
  const dispatch = useDispatch();

  function handleAuth() {
    
  }

  return (
    <div>
        <button onClick={handleAuth} className='btn btn-info'>{ isLoggedIn ? 'Log out' : 'Log in' }</button>
    </div>
  );
}
