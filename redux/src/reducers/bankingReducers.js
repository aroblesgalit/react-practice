export const bankingReducer = (state, action) => {
    return state; // return the old state
}


// actions

// deposit
const deposit = {
    type: 'DEPOSIT',
    payload: 20
  }
  
  // withdraw
  const withdraw = {
    type: 'WITHDRAW',
    payload: 3
  }
  
  // collect interest
  const collectInterest = {
    type: 'COLLECT_INTEREST'
  }
  
  // delete account
  const deleteAccount = {
    type: 'DELETE_ACCOUNT'
  }