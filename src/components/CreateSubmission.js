import React, {Component} from 'react'
import HaikuFormContainer from './HaikuFormContainer'

class CreateSubmission extends Component {
  createSubmission = (haiku) => {
    console.log(haiku)
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
