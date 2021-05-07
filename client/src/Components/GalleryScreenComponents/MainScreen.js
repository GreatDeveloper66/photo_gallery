import React, { Component } from "react"
import { Button } from 'reactstrap'

class MainScreen extends Component {

  constructor(props) {
    super()
    this.handleRandomPhotos = this.handleRandomPhotos.bind(this)
  }

  handleRandomPhotos() {
    console.log('this')
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

export default MainScreen;
