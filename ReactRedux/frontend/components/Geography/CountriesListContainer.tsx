import * as React from "react";

const uuidv1 = require('uuid/v1');

import CitiesListContainer from "../Geography/CitiesListContainer";

export default class CountriesListContainer extends React.Component<{ countries: any }, {}>{

	public render(): JSX.Element {

		const countries = new Array();
		for (let country in this.props.countries) {
			countries.push(country);
		}

		if (countries.length) {
			return (
				<div>
					{countries.map((country, i) => (
							<CitiesListContainer country={country} cities={this.props.countries[country]} key={uuidv1()} />
						)
					)}
				</div>
			);
		}
		return <div>Loading...</div>;
	}
}