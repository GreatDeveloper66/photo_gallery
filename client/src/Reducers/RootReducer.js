import { combineReducers } from 'redux'
import LoginUserReducer from './LoginUserReducer'
import LoadPhotosReducer from './LoadPhotosReducer'

const RootReducer = combineReducers({ loggedIn: LoginUserReducer, photos: LoadPhotosReducer })

export default RootReducer