import LoginUserActionCreator from '../ActionCreators/LoginUserActionCreator'

function RegisterUserActionDispatcher() {
  return dispatch => {
    setTimeout(() => {
      //make fetch request here to get jwt
      const token = '54@@##9%%@!7786'
      localStorage.setItem("token", token)
      dispatch(LoginUserActionCreator())
    }, 1000)
  }
}

export default RegisterUserActionDispatcher