import * as React from "react";

const uuidv1 = require('uuid/v1');

import { CountryContainer }  from "../Geography/countryContainer";

type CountriesProps = {
	geography: any
}

export class CountriesListContainer extends React.Component< CountriesProps , {}>{

	public render(): JSX.Element {
		const { geography } = this.props;
		const countries = new Array();
		for (let country in geography) {
			countries.push(country);
		}

		return (
			<div>
				{countries.map((country, i) => (
					<CountryContainer country={country} key={uuidv1()} />)
				)}
			</div>
		);
	}
}