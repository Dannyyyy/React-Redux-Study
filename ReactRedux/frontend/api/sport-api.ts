import axios from "axios";
import store from "../store/store";
import { loadSportsSuccess } from "../actions/sport-action";
import { storeStates } from "../store/storeStates";
import * as redux from "redux";

export const loadSports = (dispatch) => {
	return axios.get("https://raw.githubusercontent.com/mjw56/first-react-ts-app/master/src/data.json")
		.then(response => {
			console.log('loadSports: ', response.data);
			dispatch(loadSportsSuccess(response.data));
			return response;
		});
}