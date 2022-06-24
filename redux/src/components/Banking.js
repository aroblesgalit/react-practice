import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function Banking() {

  const [amount, setAmount] = useState('');

  const dispatch = useDispatch();

  function handleDeposit() {
    dispatch({
      type: 'DEPOSIT',
      payload: parseInt(amount)
    });
  }

  function handleWithdraw() {
    dispatch({
      type: 'WITHDRAW',
      payload: parseInt(amount)
    });
  }

  function handleCollectInterest() {
    dispatch({ type: 'COLLECT_INTEREST' });
  }

  function handleDelete() {
    dispatch({ type: 'DELETE_ACCOUNT' });
  }

  function handleAccountChange() {
    
  }

  return (
    <div className='form-group'>
        <input value={amount} onChange={(e) => setAmount(e.target.value)} type='text' className='form-control' />
        <button onClick={handleDeposit} className='btn btn-success'>Deposit</button>
        <button onClick={handleWithdraw} className='btn btn-primary'>Withdraw</button>
        <button onClick={handleCollectInterest} className='btn btn-warning'>Collect Interest</button>
        <button onClick={handleDelete} className='btn btn-danger'>Delete Account</button>
        <button onClick={handleAccountChange} className='btn btn-secondary'>Change Account Type</button>
    </div>
  );
}
