import { combineReducers } from "redux";

import { Action } from "../actions/index";

export namespace Store {

	export type CounterState = { value: number }

	export type AllReducers = {
		counter: CounterState
	}
}

const initialState: Store.CounterState = {
	value: 0
}

function counter(state: Store.CounterState = initialState, action: Action): Store.CounterState {
	switch (action.type) {
		case 'INCREMENT_COUNTER':
			const { delta } = action
			return { value: state.value + delta }

		case 'RESET_COUNTER':
			return { value: 0 }

		default:
			return state
	}
}

export default combineReducers<Store.AllReducers>({
	counter
})