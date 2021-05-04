
import React from 'react'
import { Redirect } from 'react-router'
//import { Redirect } from 'react-router'
import backgroundImage from '../../Media/backgroundImage.jpg'
/*
const style = {
  backgroundImage: `url(require(${backgroundImage}))`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',

}
*/
//url(require('../../Media/backgroundImage.jpg'))`,

function WelcomeScreen(props) {

  const bannerStyle =  {
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '100vh',
      width: '100%',
      
    }

  return (
    <div style= {bannerStyle}>
      {props.form}
    </div>
  )
}

export default (WelcomeScreen)