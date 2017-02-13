import React from 'react'
import './Submission.css'

function Submission(props) {
  const {haiku, user, created_at, likes} = props.submission
  return (
    <div className='submission'>
      <p className='haiku'>
        {haiku.lineOne}<br />
        {haiku.lineTwo}<br />
        {haiku.lineThree}
      </p>
      <p>
        Written by <a href='#'>{user.name}</a><br />
        {created_at} | <a href='#'>&hearts;</a>({likes})
      </p>
    </div>
  )
}

export default Submission
