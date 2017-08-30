import { Store } from "../store/store";
import { Action } from "../actions/index";

const initialState: Store.CounterState = {
	value: 0
}

export function counter(state: Store.CounterState = initialState, action: Action): Store.CounterState {
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