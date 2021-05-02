import React from 'react'
import WelcomeScreen from '../WelcomeScreen'
import RegisterUserForm from '../Forms/LoginUserForm'

function LoginUserScreen(props) {
  return (
   <WelcomeScreen form={<RegisterUserForm parent={props}/>} />
  )


}

export default (LoginUserScreen)