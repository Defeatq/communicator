import { ACTIONS } from "./actions";
import LOCAL_STORAGE from "./localStorage";

const initialState = {
  favourites: LOCAL_STORAGE.getFavouriteCards() || [],
}

function reduceFavourites(state = initialState, action) {
  switch ( action.type ) {
    case ACTIONS.ADD_FAVOURITE:
      return Object.assign({}, state, {
        favourites: [...state.favourites, action.payload],
      });
    case ACTIONS.REMOVE_FAVOURITE:
      return Object.assign({}, state, {
        favourites: state.favourites.filter( card => card.id !== action.payload.id ),
      });
  }
}

export { reduceFavourites };
