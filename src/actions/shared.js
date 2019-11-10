import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receiveTransactions } from './transactions'
import { receiveProjects } from '../actions/projects'
import { setAuthedUser } from '../actions/authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'

let AUTHED_ID = null
console.log("AUTHED_ID 1", typeof(AUTHED_ID))
if (localStorage.getItem("authedUser") === null || localStorage.getItem("authedUser") === "null") {
  AUTHED_ID = null
}  else {
  AUTHED_ID = localStorage.getItem('authedUser')
}

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ users, projects, transactions }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveProjects(projects))
        dispatch(receiveTransactions(transactions))
        dispatch(setAuthedUser(AUTHED_ID))
        dispatch(hideLoading())
      })
  }
}