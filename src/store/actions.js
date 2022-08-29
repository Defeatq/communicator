import { createAction } from "@reduxjs/toolkit";

const ACTIONS = {
  ADD_FAVOURITE: 'ADD_FAVOURITE',
  REMOVE_FAVOURITE: 'REMOVE_FAVOURITE',
  ADD_COMMUNICATOR_WORD: 'ADD_COMMUNICATOR_WORD',
  REMOVE_COMMUNICATOR_WORD: 'REMOVE_COMMUNICATOR_WORD',
  CLEAR_COMMUNICATOR_QUEUE: 'CLEAR_COMMUNICATOR_QUEUE',
}

const addToFavourites = createAction( ACTIONS.ADD_FAVOURITE );

const removeFromFavourites = createAction( ACTIONS.REMOVE_FAVOURITE );

const COMMUNICATOR_ACTION_GENERATORS = {
  addCommunicatorWord: createAction( ACTIONS.ADD_COMMUNICATOR_WORD ),
  removeCommunicatorWord: createAction( ACTIONS.REMOVE_COMMUNICATOR_WORD ),
  clearCommunicatorQueue: createAction( ACTIONS.CLEAR_COMMUNICATOR_QUEUE ),
}

export { ACTIONS, addToFavourites, removeFromFavourites, COMMUNICATOR_ACTION_GENERATORS };
