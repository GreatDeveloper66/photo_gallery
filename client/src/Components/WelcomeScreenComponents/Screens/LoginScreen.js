import React from 'react'
import WelcomeScreen from '../WelcomeScreen'
import LoginUserForm from '../Forms/LoginUserForm'

function LoginUserScreen(props) {
  return (
   <WelcomeScreen form={<LoginUserForm />} />
  )


}

export default (LoginUserScreen)