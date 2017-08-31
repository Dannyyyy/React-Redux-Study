import { storeStates } from "../store/storeStates";
import { Action } from "../actions/action";

const initialState: storeStates.GeographyState = {
	data: []
}

export function geography(state: storeStates.GeographyState = initialState, action: Action): storeStates.GeographyState {
	switch (action.type) {
		case 'LOAD_GEOGRAPHY_SUCCESS':
			return { data: action.data };

		default:
			return state
	}
}