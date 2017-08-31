import axios from "axios";
import * as redux from "redux";

import { loadGeographySuccess } from "../actions/geography-action";

export const loadGeography = (dispatch) => {
	return axios.get("https://raw.githubusercontent.com/mjw56/first-react-ts-app/master/src/data.json")
		.then(response => {
			console.log('loadGeography: ', response.data);
			dispatch(loadGeographySuccess(response.data));
			return response;
		});
}