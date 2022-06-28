import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleAuth } from '../actions/bankingActions';

export default function Auth() {

  const { isLoggedIn } = useSelector(state => state.auth);
  
  const dispatch = useDispatch();

  function handleAuth() {
    dispatch(toggleAuth());
  }

  return (
    <div>
        <button onClick={handleAuth} className='btn btn-info'>{ isLoggedIn ? 'Log out' : 'Log in' }</button>
    </div>
  );
}
