const initialState = 0;

export const bankingReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DEPOSIT':
            // logic for DEPOSIT
            break;
        case 'WITHDRAW':
            // logic for WITHDRAW
            break;
        case 'COLLECT_INTEREST':
            // logic for COLLECT_INTEREST
            break;
        case 'DELETE_ACCOUNT':
            // logic for DELETE_ACCOUNT
            break;
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