import Country from "./Country";
import City from "./City";

export default class CountriesList{
	list: Array<Country>;

	constructor() {
		this.list = new Array();
	}

	getCities(countryName: string): Array<City> {
		let country = this.list.find((country) => country.name == countryName);
		if (country) {
			return country.cities;
		}
		throw new Error("couldn't find country");
	}

	removeCountry(countryName: string): Array<Country> {
		let index = this.list.map((country) => { return country.name }).indexOf(countryName);
		this.list.splice(index, 1);
		return this.list;
	}

	sortAscending(): Array<Country> {
		return this.list.sort((el1, el2) => el1.name.localeCompare(el2.name));
	}

	sortDescending(): Array<Country> {
		return this.list.sort((el1, el2) => -el1.name.localeCompare(el2.name));
	}
}