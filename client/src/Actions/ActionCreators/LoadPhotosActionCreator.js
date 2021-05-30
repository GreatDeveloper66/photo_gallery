const LoadPhotosActionCreator = photos => {
  return {
    type: 'LoadPhotos',
    photos: photos
  }
}

export default LoadPhotosActionCreator