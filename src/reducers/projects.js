import { RECEIVE_PROJECTS, ADD_TRANSACTION, REMOVE_TRANSACTION, ADD_PROJECT } from '../actions/projects'

export default function projects (state = {}, action) {
  switch(action.type) {
    case RECEIVE_PROJECTS :
      return {
        ...state,
        ...action.projects
      }
    case ADD_TRANSACTION :
      return {
        ...state,
        [action.projectId]: {
          ...state[action.projectId],
          transactions: state[action.projectId].transactions.concat([action.transactionId])
        }
      }
    case REMOVE_TRANSACTION :
        return {
            ...state,
            [action.projectId]: {
            ...state[action.projectId],
              transactions: state[action.projectId].transactions.filter((transactionsId) => {
                return transactionsId !== action.transactionId
              })
            }
        }
    case ADD_PROJECT : {
      return {
        ...state,
        [action.project.id]: action.project  
      }
    }
    default :
     return state
  }
}