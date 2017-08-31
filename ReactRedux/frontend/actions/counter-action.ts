import { Action } from "./action";

export const incrementCounter = (delta: number): Action => ({
	type: 'INCREMENT_COUNTER',
	delta
})

export const resetCounter = (): Action => ({
	type: 'RESET_COUNTER'
})