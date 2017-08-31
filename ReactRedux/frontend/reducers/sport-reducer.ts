import { storeStates } from "../store/storeStates";
import { Action } from "../actions/action";

const initialState: storeStates.SportState = {
	data: {}
}

export function sport(state: storeStates.SportState = initialState, action: Action): storeStates.SportState {
	switch (action.type) {
		case 'LOAD_SPORTS_SUCCESS':
			return { data: action.data };

		default:
			return state
	}
}