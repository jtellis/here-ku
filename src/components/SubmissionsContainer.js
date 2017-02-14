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
  getSubmissions = (position) => {
    Submission.getNearby(position)
      .then((res) => {
        this.setState({
          submissions: res.data
        })
      })
  }
  componentDidMount() {
    this.getSubmissions(this.props.position)
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.position !== this.state.position) {
      this.getSubmissions(nextProps.position)
    }
  }
  render() {
    return <Submissions submissions={this.state.submissions} />
  }
}

export default SubmissionsContainer
