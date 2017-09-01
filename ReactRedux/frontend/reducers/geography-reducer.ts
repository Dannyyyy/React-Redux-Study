import { storeStates } from "../store/storeStates";
import { Action } from "../actions/action";

const initialState: storeStates.GeographyState = {
	data: []
}

export function geography(state: storeStates.GeographyState = initialState, action: Action): storeStates.GeographyState {
	switch (action.type) {
		case 'LOAD_GEOGRAPHY_SUCCESS':
			console.log('LOAD_GEOGRAPHY_SUCCESS');
			return { ...state, data: action.data };

		case 'GET_GEOGRAPHY_DATA':
			console.log('GET_GEOGRAPHY_DATA');
			return state;

		default:
			console.log('default');
			return state;
	}
}