import * as React from "react";

const uuidv1 = require('uuid/v1');

import { CountryContainer } from "../Geography/countryContainer";
import CountriesList from "../../classes/CountriesList";

type CountriesProps = {
	countriesList: CountriesList
}

export class CountriesListContainer extends React.Component< CountriesProps , {}>{

	public render(): JSX.Element {
		const { countriesList } = this.props;
		const countries = countriesList.list;

		return (
			<div>
				{countries.map((country, i) => (
					<CountryContainer countryName={country.name} key={country.name} />)
				)}
			</div>
		);
	}
}