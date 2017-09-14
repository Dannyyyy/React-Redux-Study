import { Action } from "./action";

export const loadGeographySuccess = (data: any): Action => ({
	type: 'LOAD_GEOGRAPHY_SUCCESS',
	data
});

export const getGeographyData = (): Action => ({
	type: 'GET_GEOGRAPHY_DATA'
});

export const deleteCountry = (country: string): Action => ({
	type: 'DELETE_COUNTRY',
	country
});

export const sortAscending = (): Action => ({
	type: 'SORT_ASCENDING'
});

export const sortDescending = (): Action => ({
	type: 'SORT_DESCENDING'
});
