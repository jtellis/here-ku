import React, { Component } from 'react';
import {
  pink500,
  blue500
} from 'material-ui/styles/colors'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import AppBar from 'material-ui/AppBar'
import SubmissionsContainer from './SubmissionsContainer'

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: pink500,
    accent1Color: blue500
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
        <AppBar title='here-ku' />
        <SubmissionsContainer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
