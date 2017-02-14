import React from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

function RegisterForm(props) {
  return (
    <div>
      <h3>Register</h3>
      <form onSubmit={(e) => props.submitHandler(e)}>
        <TextField
          name='username'
          value={props.username}
          onChange={(e) => props.changeHandler(e)}
          floatingLabelText='Username'
        />
        <TextField
          name='password'
          type='password'
          value={props.password}
          onChange={(e) => props.changeHandler(e)}
          floatingLabelText='Password'
        />
        <hr />
        <RaisedButton
          label='Login'
          disabled={false}
          type='submit'
        />
      </form>
    </div>
  )
}

export default RegisterForm
