import React from 'react'
import WelcomeScreen from '../WelcomeScreen'
import LoginUserForm from '../Forms/LoginUserForm'

function LoginScreen(props) {
  console.log(props)
  return (
   <WelcomeScreen form={<LoginUserForm parent={props} />} />
  )


}

export default (LoginScreen)