import React from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

function LogoutForm(props) {
  return (
    <form onSubmit={(e) => props.submitHandler(e)}>
      <RaisedButton
        label='Logout'
        disabled={false}
        type='submit'
      />
    </form>
  )
}

export default LogoutForm
