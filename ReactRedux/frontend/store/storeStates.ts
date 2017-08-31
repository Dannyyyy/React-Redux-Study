export namespace storeStates {

	export type CounterState = { value: number }

	export type GeographyState = { data: any }

	export type AllReducers = {
		counter: CounterState,
		geography: GeographyState
	}
}