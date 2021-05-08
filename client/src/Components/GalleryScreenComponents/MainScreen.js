import React, { Component } from "react"
import { Button } from 'reactstrap'
import dotenv from 'dotenv'
dotenv.config()

class MainScreen extends Component {

  constructor(props) {
    super()
    this.handleRandomPhotos = this.handleRandomPhotos.bind(this)
  }

  handleRandomPhotos() {
    console.log(process.env.REACT_APP_APIURL)
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
