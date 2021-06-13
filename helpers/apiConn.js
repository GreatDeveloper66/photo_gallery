import unsplash from 'unsplash-js'
import nodeFetch from 'node-fetch';
import Parser from './Parser.js'


export default class apiConn {
  constructor() {
    this.accessKey = process.env.UNSPLASH_ACCESS_KEY
    this.apiUrl = process.env.APIURL
    this.fetch = nodeFetch
  }

  connect() {
    return unsplash.createApi({
      accessKey: this.accessKey,
      apiUrl: this.apiUrl,
      fetch: this.fetch
    })
  }

  search(term) {
    return this.connect().search.getPhotos({
      query: term,
      page: 1,
      perPage: 10,
      color: 'green',
      orientation: 'portrait',
    }).then(response => {
        const catPics = new Parser(response)
        return catPics.getFullPics()
    }).catch(error => {
      console.log(error)
      return []
    })
  }

  //MnwxOTIzOTR8MHwxfHNlYXJjaHwxfHxjYXRzfGVufDB8MXx8Z3JlZW58MTYyMzE5MzUwMA

  getPic(picId) {
    return this.connect().photos.get({
      'photoId': `${picId}`
    }).then(response => {
      return response
    }).catch(error => {
      console.log(error)
      return []
    })
  }
}





