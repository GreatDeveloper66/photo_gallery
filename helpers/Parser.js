class Parser {
  constructor(unsplashResponse) {
    this.unsplashResponse = unsplashResponse
  }
  getUrls() {
    return this.unsplashResponse.response.results.map(result => result.urls)
  }

  getFullPics() {
    return this.getUrls().map(url => url.full)
  }

  getRegularPics() {
    return this.getUrls().map(url => url.regular)
  }

  getSmallPics() {
    return this.getUrls().map(url => url.small)
  }

  getThumbPics() {
    return this.getUrls().map(url => url.thumb)
  }

  getRawPics() {
    return this.getUrls().map(url => url.raw)
  }
}


export default (Parser)