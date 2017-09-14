import { storeStates } from "../store/storeStates";
import { Action } from "../actions/action";

const initialState: storeStates.GeographyState = {
	data: [],
	isDownloaded: false
}

export function geography(state: storeStates.GeographyState = initialState, action: Action): storeStates.GeographyState {
	switch (action.type) {
		case 'LOAD_GEOGRAPHY_SUCCESS':
			console.log('LOAD_GEOGRAPHY_SUCCESS');
			return { ...state, data: action.data, isDownloaded: true };

		case 'GET_GEOGRAPHY_DATA':
			console.log('GET_GEOGRAPHY_DATA');
			return state;

		case 'DELETE_COUNTRY': {
			const { country } = action;
			let data = state.data;
			delete data[country];
			return { ...state, data: data };
		}

		case 'SORT_ASCENDING': {
			//let data = state.data;
			//data.sort();
			return state;
		}

		case 'SORT_DESCENDING': {
			//let data = state.data;
			//data.sort();
			return state;
		}

		default:
			console.log('default');
			return state;
	}
}