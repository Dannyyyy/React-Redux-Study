export namespace storeStates {

	export type CounterState = { value: number }

	export type SportState = { sports: Array<string> }

	export type AllReducers = {
		counter: CounterState
	}
}