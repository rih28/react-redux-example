import { combineReducers } from 'redux'
import authedUser from './authedUser'
import users from './users'
import projects from './projects'
import transactions from './transactions'
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
  authedUser,
  users,
  projects,
  transactions,
  loadingBar: loadingBarReducer
})