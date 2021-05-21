import LoadRandomPhotosActionCreator from '../ActionCreators/LoadRandomPhotosActionCreator'

function LoadRandomPhotosActionDispatcher() {
  return dispatch => {
    setTimeout(() => {
      //make fetch request here to get jwt
      let photos = []
      fetch(`${process.env.REACT_APP_ROUTE}${process.env.REACT_APP_CATS}`)
        .then(resp => resp.json())
        .then(data => photos = data)
      dispatch(LoadRandomPhotosActionCreator(photos))
    }, 1000)
  }
}

export default LoadRandomPhotosActionDispatcher