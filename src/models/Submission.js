import axios from 'axios'
import local from '../config/local.js'

const submissionsUrl = `${local.apiUrl}/submissions`

const authHeader = {
  'Authorization': `Bearer ${localStorage.getItem('jwt')}`
}

class Submission {
  static get(submissionId) {
    //if no ID is specified, all are fetched
    submissionId = submissionId === undefined ? '' : submissionId
    const request = axios({
      method: 'get',
      url: `${submissionsUrl}/${submissionId}`,
      headers: authHeader
    })
    return request
  }
  static create(submission) {
    const request = axios({
      method: 'post',
      url: `${submissionsUrl}`,
      data: submission,
      headers: authHeader
    })
    return request
  }
}

export default Submission
