export namespace storeStates {

	export type CounterState = { value: number }

	export type SportState = { data: any }

	export type AllReducers = {
		counter: CounterState,
		sport: SportState
	}
}