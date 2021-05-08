import React, { Component } from "react"
import { Button } from 'reactstrap'
import dotenv from 'dotenv'
import { connect } from "react-redux"
import LoadRandomPhotosActionDispatcher from "../../Actions/ActionDispatchers/LoadRandomPhotosActionDispatcher"
dotenv.config()

const mapDispatchToProps = dispatch => {
  return {
    loadRandomPhotos : () => {
      dispatch(LoadRandomPhotosActionDispatcher())
    } 
  }
}

class MainScreen extends Component {

  constructor(props) {
    super()
    this.handleRandomPhotos = this.handleRandomPhotos.bind(this)
  }

  handleRandomPhotos() {
    this.props.loadRandomPhotos()
    console.log(this.props.loadRandomPhotos)
  }

  render() {
    return (
      <div>
        <Button onClick = {this.handleRandomPhotos}>
          Random Photos
        </Button>
        WASSSSUPPP!
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(MainScreen)
