import axios from 'axios'
import local from '../config/local.js'

const submissionsUrl = `${local.apiUrl}/submissions`

function authHeader() {
  return {
    'Authorization': `Bearer ${localStorage.getItem('jwt')}`
  }
}

class Submission {
  static get(submissionId) {
    let url = submissionId ? `${submissionsUrl}/${submissionId}` : submissionsUrl
    const request = axios({
      method: 'get',
      url: url,
      headers: authHeader()
    })
    return request
  }
  static getNearby(position) {
    const request = axios({
      method: 'get',
      url: `${submissionsUrl}`,
      params: {
        lon: position.lon,
        lat: position.lat
      },
      headers: authHeader()
    })
    return request
  }
  static create(submission) {
    const request = axios({
      method: 'post',
      url: `${submissionsUrl}`,
      data: submission,
      headers: authHeader()
    })
    return request
  }
  static delete(submissionId) {
    const request = axios({
      method: 'delete',
      url: `${submissionsUrl}/${submissionId}`,
      headers: authHeader()
    })
    return request
  }
}

export default Submission
