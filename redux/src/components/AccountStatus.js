import React from 'react';
import { useSelector } from 'react-redux';

export default function AccountStatus() {

  const { isSavingsAccount } = useSelector(state => state);

  return (
    <div>
        <h1>{isSavingsAccount ? 'Savings' : 'Checking'} Account</h1>
    </div>
  );
}
