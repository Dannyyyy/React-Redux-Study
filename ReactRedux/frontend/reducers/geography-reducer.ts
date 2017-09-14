import { storeStates } from "../store/storeStates";
import { Action } from "../actions/action";

import CountriesList from "../classes/CountriesList";

const initialState: storeStates.GeographyState = {
	data: new CountriesList(),
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
			const { countryName } = action;
			let data = state.data;
			data.list = data.removeCountry(countryName);
			return { ...state, data: data };
		}

		case 'SORT_ASCENDING': {
			let data = state.data;
			data.list = data.sortAscending();
			return { ...state, data: data };
		}

		case 'SORT_DESCENDING': {
			let data = state.data;
			data.list = data.sortDescending();
			return { ...state, data: data };
		}

		default:
			console.log('default');
			return state;
	}
}