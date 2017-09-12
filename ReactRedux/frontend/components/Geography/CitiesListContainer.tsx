import * as React from "react";

const uuidv1 = require('uuid/v1');

export default class CitiesListContainer extends React.Component<{ cities: any }, {}>{

	public render(): JSX.Element {

		const cities = this.props.cities.map((city, i) => { return city });

		return (	
			<div>{cities.map((city, i) => (<div key={uuidv1()}># {city}</div>))}</div>
		);
	}
}