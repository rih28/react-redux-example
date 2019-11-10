import {
  _getUsers,
  _getProjects,
  _getTransactions,
  _saveProject,
  _saveRemoveTransaction,
  _saveAddTransaction
} from './_DATA.js'

export function getInitialData () {
  return Promise.all([
    _getUsers(),
    _getProjects(),
    _getTransactions(),
  ]).then(([users, projects, transactions]) => ({
    users,
    projects,
    transactions,
  }))
}

export function saveProject (info) {
  return _saveProject(info)
}

export function saveRemoveTransaction (transactionId, projectId) {
  return _saveRemoveTransaction(transactionId, projectId);
}

export function saveAddTransaction (transactionId, projectId) {
  return _saveAddTransaction(transactionId, projectId);
}
