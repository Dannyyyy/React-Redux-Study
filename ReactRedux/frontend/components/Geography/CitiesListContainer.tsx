import * as React from "react";

const uuidv1 = require('uuid/v1');

import City from "../../classes/City";

export default class CitiesListContainer extends React.Component<{ cities: Array<City> }, {}>{

	public render(): JSX.Element {

		const names = this.props.cities.map((city, i) => { return city.name });

		return (	
			<div>{names.map((name, i) => (<div key={uuidv1()}># {name}</div>))}</div>
		);
	}
}