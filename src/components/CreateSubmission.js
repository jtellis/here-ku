import React, {Component} from 'react'
import HaikuFormContainer from './HaikuFormContainer'
import Submission from '../models/Submission'
import {browserHistory} from 'react-router'

class CreateSubmission extends Component {
  constructor(props) {
    super(props)
  }
  createSubmission = (haiku) => {
    const submission = {
      haiku: haiku,
      location: {
        type: 'Point',
        coordinates: this.props.position
      }
    }
    Submission.create(submission)
      .then((res) => {
        browserHistory.push('/submissions')
      })
  }
  render() {
    return (
      <HaikuFormContainer
        createSubmission={this.createSubmission}
      />
    )
  }
}

export default CreateSubmission
