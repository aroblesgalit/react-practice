const initialState = 0;

export const bankingReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DEPOSIT':
            return state + action.payload;
        case 'WITHDRAW':
            return state - action.payload;
        case 'COLLECT_INTEREST':
            return state * 1.03;
        case 'DELETE_ACCOUNT':
            return 0;
        default:
            return state; // return the old state
    }
    
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