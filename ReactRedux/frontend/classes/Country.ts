import City from "./City"

export default class Country {
	name: string;
	cities: Array<City>;

	constructor(name: string) {
		this.cities = new Array();
		this.name = name;
	}
}