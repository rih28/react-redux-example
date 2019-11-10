export const RECEIVE_TRANSACTIONS = 'RECEIVE_TRANSACTIONS'

export function receiveTransactions (transactions) {
  return {
    type: RECEIVE_TRANSACTIONS,
    transactions,
  }
}

