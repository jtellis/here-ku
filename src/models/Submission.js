import axios from 'axios'
import local from '../config/local.js'

const submissionsUrl = `${local.apiUrl}/submissions`

class Submission {
  static get(submissionId) {
    //if no ID is specified, all are fetched
    submissionId = submissionId === undefined ? '' : submissionId
    const request = axios.get(`${submissionsUrl}/${submissionId}`)
    return request
  }
}

export default Submission
