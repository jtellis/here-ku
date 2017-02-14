import axios from 'axios'
import local from '../config/local.js'

const authUrl = `${local.apiUrl}/auth`

class User {
  static register(user) {
    const request = axios({
      method: 'post',
      url: `${authUrl}/register`,
      data: user
    })
    return request
  }
  static login(user) {
    const request = axios({
      method: 'post',
      url: `${authUrl}/login`,
      data: user
    })
    return request
  }
}

export default User
