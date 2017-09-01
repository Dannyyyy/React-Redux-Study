import * as React from "react";

const uuidv1 = require('uuid/v1');

export default class CitiesListContainer extends React.Component<{ cities: any, country: string }, {}>{

	private isCitiesVisible = false;

	onClick = () => { this.isCitiesVisible = !this.isCitiesVisible; this.forceUpdate(); }

	public render(): JSX.Element {

		const { country } = this.props;
		const cities = this.props.cities.map((city, i) => { return city });

		if (cities.length) {
			if (this.isCitiesVisible) {
				return (	
					<div>
						<div onClick={this.onClick}>@ {country}</div>
						<div>{cities.map((city, i) => (<div key={uuidv1()}># {city}</div>))}</div>
					</div>
				);
			}
		}
		return <div onClick={this.onClick}>@ {country}</div>
	}
}