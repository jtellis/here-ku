import React, { Component } from 'react'
import Submissions from './Submissions'
import Submission from '../models/Submission'

class SubmissionsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      submissions: []
    }
  }
  getSubmissions = (submissionId) => {
    Submission.get(submissionId)
      .then((res) => {
        this.setState({
          submissions: res.data
        })
      })
  }
  componentDidMount() {
    this.getSubmissions()
  }
  render() {
    return <Submissions submissions={this.state.submissions} />
  }
}

export default SubmissionsContainer
