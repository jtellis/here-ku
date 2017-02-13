import React, {Component} from 'react'
import LoginForm from './LoginForm'
import User from '../models/User'
import {browserHistory, withRouter} from 'react-router'

class LoginFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }
  changeHandler = (e) => {
    switch(e.target.name) {
      case 'username':
        this.setState({
          username: e.target.value
        })
        break
      case 'password':
        this.setState({
          password: e.target.value
        })
        break
      default:
        break
    }
  }
  submitHandler = (e) => {
    e.preventDefault()
    User.login(this.state)
      .then((res) => {
        localStorage.setItem('jwt', res.data)
        const location = this.props.location
        if(location.state && location.state.nextPathname) {
          browserHistory.push(location.state.nextPathname)
        } else {
          browserHistory.push('/')
        }
      })
      .catch((err) => {
        console.log(err)
        this.setState({
          username: '',
          password: ''
        })
      })
  }
  render() {
    return (
      <LoginForm
        changeHandler={this.changeHandler}
        submitHandler={this.submitHandler}
        username={this.state.username}
        password={this.state.password}
      />
    )
  }
}

export default withRouter(LoginFormContainer)
