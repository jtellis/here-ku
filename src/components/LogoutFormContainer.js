import React, {Component} from 'react'
import LogoutForm from './LogoutForm'
import {browserHistory} from 'react-router'


class LogoutFormContainer extends Component {
  submitHandler = (e) => {
    e.preventDefault()
    localStorage.removeItem('jwt')
    browserHistory.push('/login')
  }
  render() {
    return (
      <LogoutForm
        submitHandler={this.submitHandler}
      />
    )
  }
}

export default LogoutFormContainer
