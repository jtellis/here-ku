import React, {Component} from 'react'
import RegisterForm from './RegisterForm'
import User from '../models/User'
import {browserHistory} from 'react-router'

class RegisterFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }
  changeHandler = (e) => {
    const name = e.target.name
    const value = e.target.value
    switch(name) {
      case 'username':
        this.setState({
          username: value.trim(),
        })
        break
      case 'password':
        this.setState({
          password: value.trim()
        })
        break
      default:
        break
    }
  }
  submitHandler = (e) => {
    e.preventDefault()
    User.register(this.state)
      .then((res) => {
        localStorage.setItem('jwt', res.data)
        browserHistory.push('/')
      })
      .catch((err) => console.error(err))
  }
  render() {
    return (
      <RegisterForm
        changeHandler={this.changeHandler}
        submitHandler={this.submitHandler}
        username={this.state.username}
        password={this.state.password}
      />
    )
  }
}

export default RegisterFormContainer
