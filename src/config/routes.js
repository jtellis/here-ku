import React from 'react'
import { Route } from 'react-router'
import App from '../components/App'
import SubmissionsContainer from '../components/SubmissionsContainer'
import CreateSubmission from '../components/CreateSubmission'

const routes = (
  <Route path='/'component={App}>
    <Route path='/submissions' component={SubmissionsContainer} />
    <Route path='/submit' component={CreateSubmission} />
  </Route>
)

export default routes
