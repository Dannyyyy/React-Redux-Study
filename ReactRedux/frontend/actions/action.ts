import CountriesList from "../classes/CountriesList";

export type Action =
	// UI actions
	{ type: 'INCREMENT_COUNTER', delta: number }
	| { type: 'RESET_COUNTER' }
	| { type: 'LOAD_GEOGRAPHY_SUCCESS', data: CountriesList }
	| { type: 'GET_GEOGRAPHY_DATA' }
	| { type: 'DELETE_COUNTRY', countryName: string }
	| { type: 'SORT_ASCENDING' }
	| { type: 'SORT_DESCENDING' }