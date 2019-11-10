import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProjectPage from './ProjectPage'
import NotFound from './NotFound'
import { withRouter } from 'react-router-dom'

class ProjectPageView extends Component {
  render() {
    if (this.props.projectExists === false) { 
       return (
         <NotFound />
       )
    } else {
    	const { id } = this.props;
    	return (
      		<div>
      			<ProjectPage id={id} />
      		</div>
    	)
  	}
  }
}

function mapStateToProps ({ projects }, props) {
  const { id } = props.match.params
  if (projects.hasOwnProperty(id) === false) {
    return {
       projectExists: false
    }
  }
  return {
    id,
    projectExists: true
  }
}

export default withRouter(connect(mapStateToProps)(ProjectPageView));