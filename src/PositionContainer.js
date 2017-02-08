import React, {Component} from 'react'

class PositionContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      watchID: null,
      position: [0, 0]
    }
    let watchID = navigator.geolocation.watchPosition((position) => {
      let currentPos = [position.coords.longitude, position.coords.latitude]
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
      <div>
        {childrenWithPos}
      </div>
    )
  }
}

export default PositionContainer
