import { ACTIONS } from "./actions";
import LOCAL_STORAGE from "./localStorage";

const initialState = {
  favourites: LOCAL_STORAGE.getFavouriteCards() || [],
  communicator: [],
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
    case ACTIONS.ADD_COMMUNICATOR_WORD:
      return Object.assign({}, state, {
        communicator: [...state.communicator, action.payload],
      })
    case ACTIONS.REMOVE_COMMUNICATOR_WORD:
      return Object.assign({}, state, {
        communicator: state.communicator.slice(0, state.communicator.length - 1),
      })
    case ACTIONS.CLEAR_COMMUNICATOR_QUEUE:
      return Object.assign({}, state, {
        communicator: [],
      })
  }
}

export { reduceFavourites };
