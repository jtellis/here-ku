import React from 'react'
import Paper from 'material-ui/Paper'

const style = {
  margin: 10,
  textAlign: 'center'
}

function Submission(props) {
  const {haiku, user, created_at, likes} = props.submission
  const submission = (
    <div className='submission'>
      <p className='haiku'>
        {haiku.lineOne}<br />
        {haiku.lineTwo}<br />
        {haiku.lineThree}
      </p>
      <p>
        Written by <a href='#'>{user.username}</a><br />
        {created_at} | <a href='#'>&hearts;</a>({likes})
      </p>
    </div>
  )
  return (
    <Paper style={style} children={submission} />
  )
}

export default Submission
