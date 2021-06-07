import unsplash from 'unsplash-js'
import nodeFetch from 'node-fetch';
import connect  from 'mongodb';
import Parser from './Parser.js'


export default class apiConn {
  constructor() {
    this.accessKey = process.env.UNSPLASH_ACCESS_KEY
    this.apiUrl = process.env.APIURL
    this.fetch = nodeFetch
  }

  connect() {
    const serverApi = unsplash.createApi({
      accessKey: this.accessKey,
      apiUrl: this.apiUrl,
      fetch: this.fetch
    })
    return serverApi
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
        let pics = catPics.getFullPics()
        return pics
    })
  }


}





