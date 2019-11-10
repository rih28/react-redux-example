import React, { Component } from 'react'
import { connect } from 'react-redux'
import Transactions from './Transactions'
import { withRouter } from 'react-router-dom'


class ProjectPage extends Component {
  toTransactionList = (e, id) => {
    e.preventDefault()
    this.props.history.push(`/transactions/${id}`)
  }

  render() {
    return (
      <div className="card text-center">
  		  <h5 className="card-header">{this.props.project.project_name} ({this.props.project.id})</h5>
        <div className="card-body">
          <div className="media">
            <div className="media-body">
              <h5 className="mt-0">Transactions</h5>
              <Transactions transactions={this.props.project.transactions} id={this.props.project.id} />
            </div>
          </div>
          <br/>
          <button className="btn btn-secondary" onClick={(e) => this.toTransactionList(e, this.props.project.id)}>Add Transaction</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps ({ projects, authedUser, users }, props) {
  const { id } = props
  return {
    id,
    userName: users[projects[id].user_id].name,
    avatar: users[projects[id].user_id].avatarURL,
    project: projects[id],
    authedUser
  }
}

export default withRouter(connect(mapStateToProps)(ProjectPage))