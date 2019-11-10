import React, { Component } from 'react'
import { handleRemoveTransaction, handleAddTransaction } from '../actions/projects'
import { connect } from 'react-redux'

class Transaction extends Component {
    handleRemove = (e) => {
        e.preventDefault()
        const { dispatch } = this.props
        dispatch(handleRemoveTransaction(this.props.transactionId, this.props.projectId))
    }
    handleAdd = (e) => {
        e.preventDefault()
        const { dispatch } = this.props
        dispatch(handleAddTransaction(this.props.transactionId, this.props.projectId))
    }

    render() {
        return(
        <div className="card text-center">
            <h5 className="card-header">{this.props.transaction.target_name} ({this.props.transaction.target_id})</h5>
            <div className="card-body">
                <div className="media">
                <div className="media-body">
                    <h5 className="mt-0">Acquirer name: {this.props.transaction.acquirer_name}</h5>
                    <p>Value: {this.props.transaction.value}</p>
                    {this.props.canAdd && <button className="btn btn-success" onClick={this.handleAdd}>Add</button>}
                    {this.props.canRemove && <button className="btn btn-danger" onClick={this.handleRemove}>Remove</button>}
                </div>
                </div>   
            </div>
        </div>
        )
    }
}

function mapStateToProps ({ transactions, users }, { id, projectId }) {
  const transaction = transactions[id]
  return {
    transaction,
    transactionId: id,
    users,
    projectId
  }
}

export default connect(mapStateToProps)(Transaction)