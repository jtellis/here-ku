import React from 'react'
import Submission from './Submission'
import RefreshIndicator from 'material-ui/RefreshIndicator'
import {blue500} from 'material-ui/styles/colors'

function Submissions(props) {
  let submissions = props.submissions.map((submission, index) => {
    return <Submission key={index} submission={submission} />
  })
  if(submissions.length === 0) {
    return (
        <RefreshIndicator
          size={50}
          left={150}
          top={0}
          status='loading'
          loadingColor={blue500}
        />
    )
  } else {
    return (
      <div>
      {submissions}
      </div>
    )
  }
}

export default Submissions
