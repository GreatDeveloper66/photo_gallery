class UserFavorites {
  consturctor(user) {
    this.user = user
    this.favorites = []
  }

  addFavorite(pic) {
    this.favorites.push(pic)
  }

  removeFavorite(pic) {
    this.favorites = this.favorites.filter(favorite => favorite !== pic)
  }

}