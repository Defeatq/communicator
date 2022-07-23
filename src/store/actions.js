import { createAction } from "@reduxjs/toolkit";

const ACTIONS = {
  ADD_FAVOURITE: 'ADD_FAVOURITE',
  REMOVE_FAVOURITE: 'REMOVE_FAVOURITE',
}

const addToFavourites = createAction( ACTIONS.ADD_FAVOURITE );

const removeFromFavourites = createAction( ACTIONS.REMOVE_FAVOURITE );

export { ACTIONS, addToFavourites, removeFromFavourites };
