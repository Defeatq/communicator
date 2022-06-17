import { createStore } from "redux";
import { reduceFavourites } from "./reducers";

const store = createStore( reduceFavourites );

export default store;
