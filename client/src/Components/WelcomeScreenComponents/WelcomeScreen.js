
import React from 'react'
import { Redirect } from 'react-router'
import backgroundImage from '../../Media/backgroundImage.jpg'
/*
const style = {
  backgroundImage: `url(require(${backgroundImage}))`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',

}
*/
const style = {
  backgroundColor: 'red',
  backgroundSize: 'cover',
  backgrounRepeat: 'no-repeat',
  backgroundPosition: 'center',
  height: '100vw',
  width: '100vw'
}

function WelcomeScreen(props) {
  return (
    <div style={style}>
      {props.form}
    </div>
  )
}

export default (WelcomeScreen)