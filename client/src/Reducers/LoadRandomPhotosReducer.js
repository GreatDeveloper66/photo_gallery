const LoadRandomPhotosReducer = (state='',action) => {
  switch(action.type) {
    case 'LoadRandomPhotos': 
      return action.randomPhotos
    default:
      return state  
  }
}

export default LoadRandomPhotosReducer