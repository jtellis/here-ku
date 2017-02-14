import React from 'react'
import {List} from 'material-ui/List'
import ProfileSubmission from './ProfileSubmission'
import './Profile.css'

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
      <h4 className='heading'>Your Here-ku</h4>
      <List children={submissions} />
    </div>
  )
}

export default Profile
