import React, { Component } from 'react'
import { connect } from 'react-redux'
import Transaction from './Transaction'

class Transactions extends Component {
  render() {
    return(
      <div>
  		  {this.props.transactions.map((transaction) => (
          <div key={transaction}>
              <br/>
              <Transaction projectId={this.props.projectId} key={transaction} id={transaction} canAdd={false} canRemove={true} />
          </div>
        ))}
	    </div>
    )
  }
}

function mapStateToProps ({ projects, users }, { id }) {
  const project = projects[id]
  return {
    project,
    users,
    projectId: id
  }
}

export default connect(mapStateToProps)(Transactions)