import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSetAuthedUser } from '../actions/authedUser'
import { withRouter } from 'react-router-dom'

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 'blank', toHome: false, currentLocation: ''};

    this.handleChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSignIn.bind(this);
  }
  
  handleSignIn = (e) => {
    e.preventDefault()

    const { dispatch } = this.props;
    
    if (this.state.value === 'blank') {
      console.log("Do nothing"); 
    } else {
      dispatch(handleSetAuthedUser(
        this.state.value
      ))
      this.props.history.push(this.props.location.pathname)
    }
  }
  handleUserChange = (e) => {
    e.preventDefault()
    this.setState({value: e.target.value});
  }
  render() {
    return (
      <div>
      	<div className="card text-center">
  			<div className="card-header">
    			<h5 className="card-title">React/Redux Example</h5>
      			<p className="card-text">Please sign-in to continue</p>
  			</div>
  			<div className="card-body">
    			<h3 className="card-title">Sign-in</h3>
  			</div>
      		<br/>
      		<select className="form-control" id="login" onChange={this.handleUserChange}>
       			<option key="blank" value="blank">Select a user...</option>
				      {this.props.userIds.map((userId) => (
            		<option key={userId} value={userId}>{userId}</option>
          		))}
    		</select>
            <br/>
      		<button type="button" className="btn btn-success" onClick={this.handleSignIn}>Login</button>
            <br/>
		 </div>
      </div>
    )
  }
}

function mapStateToProps ({ authedUser, users }) {
  return {
    authedUser,
    users,
    userIds: Object.keys(users)
  }
}

export default withRouter(connect(mapStateToProps)(LoginPage))