export type Action =
	// UI actions
	{ type: 'INCREMENT_COUNTER', delta: number }
	| { type: 'RESET_COUNTER' }
	| { type: 'LOAD_SPORTS_SUCCESS', data: any }