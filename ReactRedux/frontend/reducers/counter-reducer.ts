import { storeStates } from "../store/storeStates";
import { Action } from "../actions/index";

const initialState: storeStates.CounterState = {
	value: 0
}

export function counter(state: storeStates.CounterState = initialState, action: Action): storeStates.CounterState {
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