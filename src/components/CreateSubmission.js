import React, {Component} from 'react'
import HaikuFormContainer from './HaikuFormContainer'
import Submission from '../models/Submission'
import {browserHistory} from 'react-router'

class CreateSubmission extends Component {
  createSubmission = (haiku) => {
    const position = this.props.position;
    const submission = {
      haiku: haiku,
      location: {
        type: 'Point',
        coordinates: [position.lon, position.lat]
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
