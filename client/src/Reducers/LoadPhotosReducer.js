const LoadPhotosReducer = (state=[],action) => {
  switch(action.type) {
    case 'LoadPhotos': 
      return action.photos
    default:
      return state
  }
}

export default LoadPhotosReducer