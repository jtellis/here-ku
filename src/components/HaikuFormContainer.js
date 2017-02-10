import React, {Component} from 'react'
import syllable from 'syllable'
import HaikuForm from './HaikuForm'


class HaikuFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      valid: false,
      lines: {
        one: {
          text: '',
          syllables: 0,
          valid: false
        },
        two: {
          text: '',
          syllables: 0,
          valid: false
        },
        three: {
          text: '',
          syllables: 0,
          valid: false
        }
      }
    }
  }
  submitHandler = (e) => {
    e.preventDefault()
    const {one, two, three} = this.state.lines
    let haiku = {
      lineOne: one.text.trim(),
      lineTwo: two.text.trim(),
      lineThree: three.text.trim()
    }
    this.props.createSubmission(haiku)
  }
  changeHandler = (e) => {
    const line = e.target.name
    const allowedSyllables = parseInt(e.target.dataset.allowedSyllables, 10)
    const text = e.target.value
    const syllableCount = syllable(text)
    let valid = syllableCount === allowedSyllables ? true : false
    let lineState = {
      text: text,
      syllables: syllableCount,
      valid: valid
    }

    this.setState((prevState) => {
      let state = prevState
      state.lines[line] = lineState
      const {one, two, three} = state.lines
      state.valid = one.valid && two.valid && three.valid
      return state
    })
  }
  render() {
    return (
      <HaikuForm
        valid={this.state.valid}
        lines={this.state.lines}
        changeHandler={this.changeHandler}
        submitHandler={this.submitHandler}
      />
    )
  }
}

export default HaikuFormContainer
