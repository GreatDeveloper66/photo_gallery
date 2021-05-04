import { combineReducers } from 'redux'
import LoginUserReducer from './LoginUserReducer'

const RootReducer = combineReducers({ loggedIn: LoginUserReducer })

export default RootReducer