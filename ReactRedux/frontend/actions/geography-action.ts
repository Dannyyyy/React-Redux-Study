import { Action } from "./action";
import CountriesList from "../classes/CountriesList";

export const loadGeographySuccess = (data: CountriesList): Action => ({
	type: 'LOAD_GEOGRAPHY_SUCCESS',
	data
});

export const getGeographyData = (): Action => ({
	type: 'GET_GEOGRAPHY_DATA'
});

export const deleteCountry = (countryName: string): Action => ({
	type: 'DELETE_COUNTRY',
	countryName
});

export const sortAscending = (): Action => ({
	type: 'SORT_ASCENDING'
});

export const sortDescending = (): Action => ({
	type: 'SORT_DESCENDING'
});
