import React, { Component } from 'react'
import Submissions from './Submissions'

const SUBMISSION = {
    haiku: {
      lineOne: 'Keep straight down this block,',
      lineTwo: 'Then turn right where you will find',
      lineThree: 'A peach tree blooming.'
    },
    user: 'Jesse Ellis',
    created_at: '12:14pm on 02/08/17',
    location: {
      type: 'Point',
      coordinates: [-71.422222, 41.823611]
    },
    likes: 3
  }

class SubmissionsContainer extends Component {
  render() {
    let submissions = []
    for(let i=0; i < 10; i++) {
      submissions.push(SUBMISSION)
    }
    return <Submissions submissions={submissions} />
  }
}

export default SubmissionsContainer
