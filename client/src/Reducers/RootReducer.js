import { combineReducers } from 'redux'
import LoginUserReducer from './LoginUserReducer'
import LoadRandomPhotosReducer from './LoadRandomPhotosReducer'

const RootReducer = combineReducers({ loggedIn: LoginUserReducer, loadRandomPhotos: LoadRandomPhotosReducer })

export default RootReducer