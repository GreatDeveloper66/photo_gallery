import LoadRandomPhotosActionCreator from '../ActionCreators/LoadRandomPhotosActionCreator'

function LoadRandomPhotosActionDispatcher() {
  return dispatch => {
    setTimeout(() => {
      //make fetch request here to get jwt
      const photos = 'photos'
      dispatch(LoadRandomPhotosActionCreator(photos))
    }, 1000)
  }
}

export default LoadRandomPhotosActionDispatcher