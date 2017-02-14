import React from 'react'
import {Route} from 'react-router'
import App from '../components/App'
import SubmissionsContainer from '../components/SubmissionsContainer'
import CreateSubmission from '../components/CreateSubmission'
import LoginFormContainer from '../components/LoginFormContainer'
import LogoutFormContainer from '../components/LogoutFormContainer'
import RegisterFormContainer from '../components/RegisterFormContainer'
import ProfileContainer from '../components/ProfileContainer'

const requireAuth = (nextState, replace) => {
  if (!('jwt' in localStorage)) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

const routes = (
  <Route path='/' component={App}>
    <Route path='/register' component={RegisterFormContainer} />
    <Route path='/login' component={LoginFormContainer} />
    <Route path='/logout' component={LogoutFormContainer} onEnter={requireAuth} />
    <Route path='/submissions' component={SubmissionsContainer} onEnter={requireAuth} />
    <Route path='/submit' component={CreateSubmission} onEnter={requireAuth} />
    <Route path='/profile' component={ProfileContainer} onEnter={requireAuth} />
  </Route>
)

export default routes
