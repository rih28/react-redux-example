import React, { Component } from 'react'
import { connect } from 'react-redux'
import Project from './Project';

class ProjectList extends Component {
  render() {
    return(
      <div>
        {this.props.projectIds.map((id) => (
           <div key={id}>
              <Project key={id} id={id} />
              <br/>
           </div>
         ))}
       </div>
    )
  }
}

function mapStateToProps ({ projects }) {
  return {
    projectIds: Object.keys(projects)
  }
}

export default connect(mapStateToProps)(ProjectList)