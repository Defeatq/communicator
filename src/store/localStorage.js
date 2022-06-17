const LOCAL_STORAGE = {
  saveFavouriteCards: function(cardList) {
    localStorage.setItem( 'favourites', JSON.stringify( cardList ) );
  },
  getFavouriteCards: function() {
    return JSON.parse( localStorage.getItem( 'favourites' ) );
  },
}

export default LOCAL_STORAGE;
