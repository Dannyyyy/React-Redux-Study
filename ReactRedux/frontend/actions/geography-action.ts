import { Action } from "./action";

export const loadGeographySuccess = (data: any): Action => ({
	type: 'LOAD_GEOGRAPHY_SUCCESS',
	data
})
