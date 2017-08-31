import { combineReducers } from "redux";

import { storeStates } from "../store/storeStates";
import { counter } from "./counter-reducer";
import { geography } from "./geography-reducer";

export default combineReducers<storeStates.AllReducers>({
	counter,
	geography
})