import axios from "axios";
import * as redux from "redux";
import CountriesList from "../classes/CountriesList";
import Country from "../classes/Country";
import City from "../classes/City";

import { loadGeographySuccess } from "../actions/geography-action";

export const loadGeography = (dispatch) => {
	return axios.get("https://raw.githubusercontent.com/mjw56/first-react-ts-app/master/src/data.json")
		.then(response => {
			console.log('loadGeography: ', response.data);
			dispatch(loadGeographySuccess(initializeCountriesList(response.data)));
			return response;
		});
}

const initializeCountriesList = (data: any) => {
	let countriesList = new CountriesList();
	for (let countryElem in data) {
		if (countryElem !== undefined && countryElem !== "") {
			let country = new Country(countryElem);
			for (let cityElem of data[countryElem]) {
				if (cityElem !== undefined && cityElem !== "") {
					let city = new City(cityElem);
					country.cities.push(city);
				}
			}
			countriesList.list.push(country);
		}
	}
	return countriesList;
}