import React, {Component} from 'react'
import syllable from 'syllable'
import SubmissionForm from './SubmissionForm'


class SubmissionFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      valid: false,
      lines: {
        one: {
          syllables: 0,
          valid: false
        },
        two: {
          syllables: 0,
          valid: false
        },
        three: {
          syllables: 0,
          valid: false
        }
      }
    }
  }
  changeHandler = (e) => {
    const allowedSyllables = parseInt(e.target.dataset.allowedSyllables)
    const syllableCount = syllable(e.target.value)
    const line = e.target.name
    let lineValid = syllableCount === allowedSyllables ? true : false
    let lineState = {syllables: syllableCount, valid: lineValid}
    const {one, two, three} = this.state.lines

    this.setState((prevState) => {
      let nextState = prevState
      nextState.lines[line] = lineState
      const {one, two, three} = nextState.lines
      nextState.valid = one.valid && two.valid && three.valid
      return nextState
    })
  }
  render() {
    return (
      <SubmissionForm
        valid={this.state.valid}
        lines={this.state.lines}
        changeHandler={this.changeHandler}
      />
    )
  }
}

export default SubmissionFormContainer
