import CountriesList from "../classes/CountriesList";

export namespace storeStates {

	export type CounterState = { value: number }

	export type GeographyState = { data: CountriesList, isDownloaded: boolean }

	export type AllReducers = {
		counter: CounterState,
		geography: GeographyState
	}
}