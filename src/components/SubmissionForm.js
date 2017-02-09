import React from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const SubmissionForm = (props) => (
  <form>
    <TextField
      data-allowed-syllables={5}
      name='one'
      onChange={(e) => props.changeHandler(e)}
      floatingLabelText={`${props.lines.one.syllables}/5 syllables`}
    />
    <TextField
      data-allowed-syllables={7}
      name='two'
      onChange={(e) => props.changeHandler(e)}
      floatingLabelText={`${props.lines.two.syllables}/7 syllables`}
    />
    <TextField
      data-allowed-syllables={5}
      name='three'
      onChange={(e) => props.changeHandler(e)}
      floatingLabelText={`${props.lines.three.syllables}/5 syllables`}
    />
    <hr />
    <RaisedButton
      label="Submit"
      disabled={!props.valid}
    />
  </form>
)

export default SubmissionForm
