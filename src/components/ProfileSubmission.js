import React from 'react'
import Paper from 'material-ui/Paper'

const style = {
  margin: 10,
  textAlign: 'center'
}

function ProfileSubmission(props) {
  const {haiku, user, created_at, likes, _id} = props.submission
  const submission = (
    <div className='submission'>
      <p className='haiku'>
        {haiku.lineOne}<br />
        {haiku.lineTwo}<br />
        {haiku.lineThree}
      </p>
      <p>
        {created_at} | <a href='#'>&hearts;</a>({likes})
        <br />
        <a href='#' onClick={() => props.handleDelete(_id)}>DELETE</a>
      </p>
    </div>
  )
  return (
    <Paper style={style} children={submission} />
  )
}

export default ProfileSubmission
