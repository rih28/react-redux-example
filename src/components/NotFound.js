import React, { Component } from 'react'
import { connect } from 'react-redux'

class NotFound extends Component {
  render() {
    return (
      <h1>Sorry. This project is not found</h1> 
    )
  }
}

export default connect()(NotFound)