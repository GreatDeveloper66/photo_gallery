import React, { Component } from "react"
import { Button } from 'reactstrap'
import dotenv from 'dotenv'
import { connect } from "react-redux"
import LoadPhotosActionDispatcher from "../../Actions/ActionDispatchers/LoadPhotosActionDispatcher"
dotenv.config()

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn,
    photos: state.photos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadPhotos : () => {
      dispatch(LoadPhotosActionDispatcher())
    } 
  }
}

class MainScreen extends Component {

  constructor(props) {
    super()
    this.handlePhotos = this.handlePhotos.bind(this)
  }

  handlePhotos() {
    this.props.loadPhotos()
    
  }

  renderPhotos() {
    return <div>{this.props.photos.map(phot => <img src={phot} alt="phot"></img>)}</div>
  }

  render() {
    return (
      this.props.loggedIn ? 
      <div>
        <Button onClick = {this.handlePhotos}>
          Random Photos
        </Button>
        <div>{this.renderPhotos()}</div>
      </div>
      :
      <div> You are not authorized</div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen)
