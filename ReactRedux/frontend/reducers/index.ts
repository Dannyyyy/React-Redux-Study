import { combineReducers } from "redux";

import { Store } from "../store/store";
import { counter } from "./counter-reducer";

export default combineReducers<Store.AllReducers>({
	counter
})