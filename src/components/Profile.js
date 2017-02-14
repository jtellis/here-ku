import React from 'react'
import ProfileSubmission from './ProfileSubmission'

function Profile(props) {
  let submissions = props.submissions.map((submission, index) => {
    return (
      <ProfileSubmission
        handleDelete={props.deleteSubmission}
        key={index}
        submission={submission}
      />
    )
  })
  return (
    <div>
      <h3>Profile</h3>
      {submissions}
    </div>
  )
}

export default Profile
