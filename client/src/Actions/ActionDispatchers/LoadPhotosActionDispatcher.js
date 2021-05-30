import LoadPhotosActionCreator from '../ActionCreators/LoadPhotosActionCreator'

function LoadPhotosActionDispatcher() {
  const photos = [
    'https://images.unsplash.com/photo-1601850844626-3d1650562a43?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyMzIwMzV8MHwxfHNlYXJjaHwxfHxjYXR8ZW58MHwxfHxncmVlbnwxNjIxOTkwNDU3&ixlib=rb-1.2.1&q=85',
    'https://images.unsplash.com/photo-1614079878578-1301ea379ac7?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyMzIwMzV8MHwxfHNlYXJjaHwyfHxjYXR8ZW58MHwxfHxncmVlbnwxNjIxOTkwNDU3&ixlib=rb-1.2.1&q=85',
    'https://images.unsplash.com/photo-1582716927552-c22821763fc5?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyMzIwMzV8MHwxfHNlYXJjaHwzfHxjYXR8ZW58MHwxfHxncmVlbnwxNjIxOTkwNDU3&ixlib=rb-1.2.1&q=85',
    'https://images.unsplash.com/photo-1594181203341-8293be69f52b?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyMzIwMzV8MHwxfHNlYXJjaHw0fHxjYXR8ZW58MHwxfHxncmVlbnwxNjIxOTkwNDU3&ixlib=rb-1.2.1&q=85',
    'https://images.unsplash.com/photo-1601694760252-dda7463ad366?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyMzIwMzV8MHwxfHNlYXJjaHw1fHxjYXR8ZW58MHwxfHxncmVlbnwxNjIxOTkwNDU3&ixlib=rb-1.2.1&q=85',
    'https://images.unsplash.com/photo-1531549703109-2d660dec3270?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyMzIwMzV8MHwxfHNlYXJjaHw2fHxjYXR8ZW58MHwxfHxncmVlbnwxNjIxOTkwNDU3&ixlib=rb-1.2.1&q=85',
    'https://images.unsplash.com/photo-1597752710901-aa42106bbdc4?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyMzIwMzV8MHwxfHNlYXJjaHw3fHxjYXR8ZW58MHwxfHxncmVlbnwxNjIxOTkwNDU3&ixlib=rb-1.2.1&q=85',
    'https://images.unsplash.com/photo-1605926822072-82a6a9bff8d7?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyMzIwMzV8MHwxfHNlYXJjaHw4fHxjYXR8ZW58MHwxfHxncmVlbnwxNjIxOTkwNDU3&ixlib=rb-1.2.1&q=85',
    'https://images.unsplash.com/photo-1584975773890-dcbf3e524559?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyMzIwMzV8MHwxfHNlYXJjaHw5fHxjYXR8ZW58MHwxfHxncmVlbnwxNjIxOTkwNDU3&ixlib=rb-1.2.1&q=85',
    'https://images.unsplash.com/photo-1568562782310-8e6704982671?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyMzIwMzV8MHwxfHNlYXJjaHwxMHx8Y2F0fGVufDB8MXx8Z3JlZW58MTYyMTk5MDQ1Nw&ixlib=rb-1.2.1&q=85'
  ]
  return dispatch => {
      //make fetch request here to get jwt
      console.log(photos)
      dispatch(LoadPhotosActionCreator(photos))
      /*
      fetch(`${process.env.REACT_APP_ROUTE}${process.env.REACT_APP_CATS}`)
        .then(resp => resp.json())
        .then(data => {
          
        }).catch(error => { 
          console.log(error)
         
        })
        */
  }
}

export default LoadPhotosActionDispatcher