import React, { Component } from 'react'
import Profile from './Profile'
import Submission from '../models/Submission'

class ProfileContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      submissions: []
    }
  }
  getSubmissions = () => {
    Submission.get()
      .then((res) => {
        this.setState({
          submissions: res.data
        })
      })
      .catch((err) => console.error(err))
  }
  deleteSubmission = (id) => {
    Submission.delete(id)
      .then((res) => {
        this.getSubmissions()
      })
      .catch((err) => console.error(err))
  }
  componentDidMount() {
    this.getSubmissions()
  }
  render() {
    return (
      <Profile
        deleteSubmission={this.deleteSubmission}
        submissions={this.state.submissions}
      />
    )
  }
}

export default ProfileContainer
