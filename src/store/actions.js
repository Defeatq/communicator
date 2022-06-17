const ADD_FAVOURITE = 'ADD_FAVOURITE';
const REMOVE_FAVOURITE = 'REMOVE_FAVOURITE';

const createAction = ( type ) => ( payload ) => {
  return {
    type,
    payload,
  }
}

const addToFavourites = createAction( ADD_FAVOURITE );

const removeFromFavourites = createAction( REMOVE_FAVOURITE );

export { ADD_FAVOURITE, REMOVE_FAVOURITE, addToFavourites, removeFromFavourites };
