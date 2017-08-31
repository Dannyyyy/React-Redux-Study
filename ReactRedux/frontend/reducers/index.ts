import { combineReducers } from "redux";

import { storeStates } from "../store/storeStates";
import { counter } from "./counter-reducer";
import { sport } from "./sport-reducer";

export default combineReducers<storeStates.AllReducers>({
	counter,
	sport
})