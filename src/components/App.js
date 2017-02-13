import React, { Component } from 'react';
import {
  pink500,
  blue500
} from 'material-ui/styles/colors'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import AppBar from 'material-ui/AppBar'
import PositionContainer from './PositionContainer'
import {Link} from 'react-router'

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: pink500,
    accent1Color: blue500
  }
})

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <AppBar title='here-ku' />
          <ul>
            <li><Link to="/submissions">Submission</Link></li>
            <li><Link to="/submit">Submit</Link></li>
          </ul>
          <PositionContainer>
            {this.props.children}
          </PositionContainer>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;
