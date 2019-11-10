import React, { Component } from 'react'
import { connect } from 'react-redux'
import Transaction from './Transaction'

class TransactionList extends Component {
  state = {
    filterText: '',
    localTransactions: this.props.transactions
  }

  filterTextOnValue = (filterText, localTransactions) => {
    if (filterText.length > 0) {
      const trimmedFilterText = filterText.trim()
      if (trimmedFilterText[0] === '<' || trimmedFilterText[0] === '>' || trimmedFilterText[0] === '=') {
        const filterTextValue = trimmedFilterText.substr(1, trimmedFilterText.length-1);
        return localTransactions = localTransactions.filter((transaction) => {
          if (trimmedFilterText[0] === '<') {
            return parseInt(transaction.value) < parseInt(filterTextValue)
          } else if (trimmedFilterText[0] === '>') {
            return parseInt(transaction.value) > parseInt(filterTextValue)
          } else {
            return parseInt(transaction.value) === parseInt(filterTextValue)
          }
        })
      } else {
        //TODO: add a nice message
        return localTransactions;
        //alert("Sorry, we can only filter using <, > or =");
      }
    }
    else {
      return localTransactions
    }
  }
  
  // TODO: update as it is deprecated.
  componentWillReceiveProps(nextProps){
    const filteredByTextProjects = this.filterTextOnValue(this.state.filterText, nextProps.transactions)
    const filteredProjects = nextProps.projectId === "all" ? filteredByTextProjects : filteredByTextProjects.filter(function(transaction) {
      return !nextProps.projects[nextProps.projectId].transactions.includes(transaction.id);
    })
    this.setState({
      localTransactions: filteredProjects
    });
  }

  

  handleFilterChange = (e) => {
    const filterText = e.target.value
    let localTransactions = this.props.transactions
    localTransactions = this.filterTextOnValue(filterText, localTransactions) 

    this.setState(() => ({
      filterText,
      localTransactions
    }))
  }

  render() {
    return(
      <div>
        <input className="w-100" placeholder="Filter by value i.e. > 1000000" onChange={this.handleFilterChange} />
        {this.state.localTransactions.map((transaction) => (
           <div key={transaction.id}>
              <br/>
              <Transaction key={transaction.id} projectId={this.props.projectId} id={transaction.id} canAdd={this.props.canAdd} canRemove={false} />
           </div>
         ))}
      </div>
    )
  }
}

function mapStateToProps ({ projects, transactions }, props) {
  const { id } = props.match.params
  return {
    transactionIds: id === "all" ? Object.keys(transactions) : Object.keys(transactions).filter(function(transaction) {
      return !projects[id].transactions.includes(transaction); 
    }),
    transactions: id === "all" ? Object.values(transactions) : Object.values(transactions).filter(function(transaction) {
      return !projects[id].transactions.includes(transaction.id);
    }),
    projects,
    canAdd: id === "all" ? false : true,
    projectId: id
  }
}

export default connect(mapStateToProps)(TransactionList)