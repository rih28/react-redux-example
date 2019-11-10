import { RECEIVE_TRANSACTIONS } from '../actions/transactions'

export default function transactions (state = {}, action) {
  switch(action.type) {
    case RECEIVE_TRANSACTIONS :
      return {
        ...state,
        ...action.transactions
      }
    default :
     return state
  }
}