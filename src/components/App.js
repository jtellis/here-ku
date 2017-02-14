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
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: pink500,
    accent1Color: blue500
  }
})

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }
  handleToggle = () => this.setState({open: !this.state.open});
  handleClose = () => this.setState({open: false});
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <AppBar
            title='here-ku'
            onLeftIconButtonTouchTap={this.handleToggle}
          />
            <Drawer
              docked={false}
              width={200}
              open={this.state.open}
              onRequestChange={(open) => this.setState({open})}
            >
              <MenuItem onTouchTap={this.handleClose}><Link to='/about'>About</Link></MenuItem>
              <MenuItem onTouchTap={this.handleClose}><Link to='/submissions'>Read Here-ku</Link></MenuItem>
              <MenuItem onTouchTap={this.handleClose}><Link to='/submit'>Write Here-ku</Link></MenuItem>
              <MenuItem onTouchTap={this.handleClose}><Link to='/profile'>Profile</Link></MenuItem>
              <MenuItem onTouchTap={this.handleClose}><Link to='/register'>Register</Link></MenuItem>
              <MenuItem onTouchTap={this.handleClose}><Link to='/login'>Login</Link></MenuItem>
              <MenuItem onTouchTap={this.handleClose}><Link to='/logout'>Logout</Link></MenuItem>
            </Drawer>
          <PositionContainer>
            {this.props.children}
          </PositionContainer>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
