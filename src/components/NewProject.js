import React, { Component } from 'react'
import { handleAddProject } from '../actions/projects'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class NewProject extends Component {
  state = {
    projectNameText: '',
    toHome: false
  }
  handleProjectNameChange = (e) => {
    const projectNameText = e.target.value

    this.setState(() => ({
      projectNameText 
    }))
  }
  
  handleSubmit = (e) => {
    e.preventDefault()

    const { projectNameText } = this.state
    
    if (projectNameText === '') {
      alert("You must add a project name") 
    } else { 
      const { dispatch } = this.props
      dispatch(handleAddProject(projectNameText))
      
      this.setState(() => ({
      projectNameText: '',
      toHome: true
    }))
    }
  }
  render() {
    const { toHome } = this.state

    if (toHome === true) {
      return <Redirect to='/' />
    }
    return(
      <div className="card text-center">
        <div className="card-header">
          <h3 className="card-title">Create New Project</h3>
        </div>
        <div className="card-body">
          <h5 className="card-title">Project Name</h5>
      	  <input type="text" className="form-control" placeholder="Enter project name here" onChange={this.handleProjectNameChange} />
          <br/>
          <button className="btn btn-success" onClick={this.handleSubmit}>Add Project</button>
        </div>
      </div>
    )
  }
}

export default connect()(NewProject)