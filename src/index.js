import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import injectTapEventPlugin from 'react-tap-event-plugin'
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()
import {Router, browserHistory} from 'react-router'
import routes from './config/routes'


ReactDOM.render(
  <Router routes={routes} history={browserHistory} />,
  document.getElementById('root')
);
