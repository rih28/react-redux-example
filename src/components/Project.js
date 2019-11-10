import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Project extends Component {
  toProject = (e, id) => {
    e.preventDefault()
    this.props.history.push(`/projects/${id}`)
  }
  render() {
    return(
      <div className="card text-center">
  		  <h5 className="card-header">{this.props.project.project_name} ({this.props.project.id})</h5>
  		  <div className="card-body">
			    <div className="media">
            <div className="media-body">
              <h5 className="mt-0">Created by {this.props.users[this.props.project.user_id].name}</h5>
              <br/>
    			    <button className="btn btn-primary" onClick={(e) => this.toProject(e, this.props.project.id)}>View Project</button>
            </div>
          </div>  
  		  </div>
	    </div>
    )
  }
}

function mapStateToProps ({ projects, users }, { id }) {
  const project = projects[id]
  return {
    project,
    users
  }
}

export default withRouter(connect(mapStateToProps)(Project))