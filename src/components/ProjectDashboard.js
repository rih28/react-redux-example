import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProjectList from './ProjectList';


class ProjectDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { view: 'unanswered' };
	
    this.handleViewUnanswered = this.handleViewUnanswered.bind(this);
    this.handleViewAnswered = this.handleViewAnswered.bind(this);
  }
  
  handleViewUnanswered = (e) => {
    e.preventDefault()
	
    this.setState({view: 'unanswered'});
  }

  handleViewAnswered = (e) => {
    e.preventDefault()
	
    this.setState({view: 'answered'});
  }
  
  render() {
  return(
      <div className="card text-center">
        <div className="card-body">
          <ProjectList />
        </div>
      </div>
  )
 }
}

export default connect()(ProjectDashboard)