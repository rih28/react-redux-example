import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { handleSetAuthedUser } from '../actions/authedUser'

class Nav extends Component {
  handleLogOut = (e) => {
    e.preventDefault()
    const { dispatch, authedUser } = this.props;
    
    if (authedUser == null) {
      console.log("Do nothing"); 
    } else {
      dispatch(handleSetAuthedUser(
        null
      ))
    }
  }
  render() {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className='navbar-nav'>
          <li className='nav-item active'>
            <NavLink to='/' exact className='nav-link'>
              Home
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/transactions/all' className='nav-link'>
              Transactions
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/addproject' className='nav-link'>
              New Project
            </NavLink>
          </li>
          
        </ul>
        {this.props.authedUser != null ?
        <div className="form-inline my-2 my-lg-0">
            <div>
            <p className='nav-item my-2 my-lg-0 mr-sm-2'>Hello, {this.props.users[this.props.authedUser].name}</p>
            </div>
            <div>
            <button onClick={this.handleLogOut} className="btn btn-outline-success my-2 mr-sm-2">Logout</button>
            </div>
        </div>
      : <div className='nav-item'></div>}
      </div>
    </nav>
  )
  }
}

function mapStateToProps ({ authedUser, users }) {
  return {
    authedUser,
    users
  }
}

export default connect(mapStateToProps)(Nav);