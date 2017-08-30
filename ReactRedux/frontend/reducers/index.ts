﻿import { combineReducers } from "redux";

import { Action } from "../actions/index";

export namespace Store {

	export type Counter = { value: number }

	export type All = {
		counter: Counter
	}
}

const initialState: Store.Counter = {
	value: 0
}

function counter(state: Store.Counter = initialState, action: Action): Store.Counter {
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

export const reducers = combineReducers<Store.All>({
	counter
})