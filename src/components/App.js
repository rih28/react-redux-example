import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import LoginPage from './LoginPage'
import ProjectDashboard from './ProjectDashboard'
import TransactionList from './TransactionList'
import ProjectPageView from './ProjectPageView'
import NewProject from './NewProject'
import Nav from './Nav'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container'>
            <Nav />
            {(this.props.authedUser === null)
              ? [ this.props.loading === true &&  <LoginPage /> ]
              : [ this.props.loading === true && 
                 <div>
                  <Route path='/' exact component={ProjectDashboard} />
                  <Route path='/transactions/:id' exact component={TransactionList} />
                  <Route path='/projects/:id' component={ProjectPageView} />
                  <Route path='/addproject' component={NewProject} />
                </div>
                ]}
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps ({ authedUser, users, transactions, projects }) {
  return {
    authedUser,
    users,
    loading: users.hasOwnProperty('rhunter') === true,
    transactions,
    projects
  }
}

export default connect(mapStateToProps)(App);
