import { Action } from "./action";

export const loadSportsSuccess = (data: any): Action => ({
	type: 'LOAD_SPORTS_SUCCESS',
	data
})
