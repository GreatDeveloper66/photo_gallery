import React from 'react'
import WelcomeScreen from '../WelcomeScreen'
import RegisterUserForm from '../Forms/RegisterUserForm'

function RegisterScreen(props) {
  return (
    <WelcomeScreen form={<RegisterUserForm parent={props} />}/>
  )


}

export default (RegisterScreen)