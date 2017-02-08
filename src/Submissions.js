import React from 'react'
import Submission from './Submission'

function Submissions(props) {
  let submissions = props.submissions.map((submission, index) => {
    return <Submission key={index} submission={submission} />
  })
  return (
    <div>
    {submissions}
    </div>
  )
}

export default Submissions
