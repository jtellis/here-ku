import React, {Component} from 'react'
import HaikuFormContainer from './HaikuFormContainer'

class CreateSubmission extends Component {
  constructor(props) {
    super(props)
  }
  createSubmission = (haiku) => {
    console.log(haiku, this.props.position)
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
