import { saveProject, saveRemoveTransaction, saveAddTransaction } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS'
export const ADD_TRANSACTION = 'ADD_TRANSACTION'
export const REMOVE_TRANSACTION = 'REMOVE_TRANSACTION'
export const ADD_PROJECT = 'ADD_PROJECT'

function addProject (project) {
  return {
    type: ADD_PROJECT,
    project,
  }
}

export function handleAddProject (projectNameText) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    
    dispatch(showLoading())
	
    return saveProject({
      project_name: projectNameText,
      user_id: authedUser
    })
    .then((project) => dispatch(addProject(project)))
    .then(() => dispatch(hideLoading()))
  }
}

function removeTransaction (transactionId, projectId) {
  return {
    type: REMOVE_TRANSACTION,
    transactionId,
    projectId
  }
}

export function handleRemoveTransaction (transactionId, projectId) {
  return (dispatch) => {
    dispatch(removeTransaction(transactionId, projectId))

    return saveRemoveTransaction({
      transaction_id: transactionId,
      projectId: projectId
    })
  }
}

function addTransaction (transactionId, projectId) {
  return {
    type: ADD_TRANSACTION,
    transactionId,
    projectId
  }
}

export function handleAddTransaction (transactionId, projectId) {
  return (dispatch) => {
    dispatch(addTransaction(transactionId, projectId))

    return saveAddTransaction({
      transaction_id: transactionId,
      projectId: projectId
    })
  }
}

export function receiveProjects (projects) {
  return {
    type: RECEIVE_PROJECTS,
    projects,
  }
}
