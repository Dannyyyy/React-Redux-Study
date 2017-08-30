import axios from "axios";
import store  from "../store/store";


const SportsApiUrl = "";

export const loadSports = () => {
	return axios.get('http://localhost:3001/users')
		.then(response => {
			store.dispatch(getUsersSuccess(response.data));
			return response;
		});
}