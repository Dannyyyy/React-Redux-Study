export type Action =
	// UI actions
	{ type: 'INCREMENT_COUNTER', delta: number }
	| { type: 'RESET_COUNTER' }
	| { type: 'LOAD_GEOGRAPHY_SUCCESS', data: any }