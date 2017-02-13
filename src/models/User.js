import axios from 'axios'
import local from '../config/local.js'

const usersUrl = `${local.apiUrl}/users`
const authUrl = `${local.apiUrl}/auth`

class User {
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
