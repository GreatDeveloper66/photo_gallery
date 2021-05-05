const LoginUserReducer = (state='',action) => {
  switch(action.type) {
    case 'LoginUser': 
      return action.loggedIn
    default:
      return state  
  }
}

export default LoginUserReducer