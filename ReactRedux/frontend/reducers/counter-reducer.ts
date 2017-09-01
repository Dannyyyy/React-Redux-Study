import { storeStates } from "../store/storeStates";
import { Action } from "../actions/action";

const initialState: storeStates.CounterState = {
	value: 0
}

export function counter(state: storeStates.CounterState = initialState, action: Action): storeStates.CounterState {
	switch (action.type) {
		case 'INCREMENT_COUNTER':
			const { delta } = action
			return { ...state, value: state.value + delta };

		case 'RESET_COUNTER':
			return { ...state, value: 0 };

		default:
			return state;
	}
}