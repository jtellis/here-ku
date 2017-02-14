import React from 'react'
import './ProfileSubmission.css'

function ProfileSubmission(props) {
  const {haiku, user, created_at, likes, _id} = props.submission
  return (
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
}

export default ProfileSubmission
