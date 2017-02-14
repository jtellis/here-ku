import React, {Component} from 'react'
import './PositionContainer.css'

class PositionContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      watchID: null,
      position: {
        lon: 0,
        lat: 0
      }
    }
    let watchID = navigator.geolocation.watchPosition((position) => {
      let currentPos = {
        lon: position.coords.longitude,
        lat: position.coords.latitude
      }
      this.setState({
        position: currentPos
      })
    })
  }
  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.state.watchID)
  }
  render(){
    let childrenWithPos = React.Children.map(this.props.children, (child)=> {
      return React.cloneElement(child, {position: this.state.position})
    })

    return (
      <div className='position-container'>
        {childrenWithPos}
      </div>
    )
  }
}

export default PositionContainer
