import * as React from "react";

export default class CountriesListContainer extends React.Component<{ countries: any }, {}>{

	public render(): JSX.Element | null {

		const countries = new Array();
		for (let country in this.props.countries) {
			countries.push(country);
		}
		
		console.log('countries: ', countries);
		let countriesElem: JSX.Element;
		if (countries.length) {
			return (
				<div>{countries.map((country, i) => (<div>{country}</div>))}</div>
			);
		}
		return <div>Loadding...</div>;
	}
}