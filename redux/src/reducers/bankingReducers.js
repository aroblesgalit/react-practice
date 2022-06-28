const initialState = {
  balance: 0,
  isSavingsAccount: false
}

export const bankingReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DEPOSIT':
            return {
              balance: state.balance + action.payload
            }
        case 'WITHDRAW':
            return {
              balance: state.balance - action.payload
            }
        case 'COLLECT_INTEREST':
            return {
              balance: state.balance * 1.03
            }
        case 'DELETE_ACCOUNT':
            return {
              balance: 0
            }
        case 'TOGGLE_ACCOUNT':
            return {
              isSavingsAccount: !state.isSavingsAccount
            }
        default:
            return state; // return the old state
    }
    
}
