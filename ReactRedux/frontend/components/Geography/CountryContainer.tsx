import * as React from "react";

const uuidv1 = require('uuid/v1');

import CitiesListContainer from "../Geography/CitiesListContainer";

type CountryProps = {
	country: string,
	geography: any
}

export class CountryContainer extends React.Component<CountryProps, {}>{

	private isCitiesVisible = false;

	onClick = () => { this.isCitiesVisible = !this.isCitiesVisible; this.forceUpdate(); }

	public render(): JSX.Element {
		const { geography, country } = this.props;

		return (
			<div>
				<div onClick={this.onClick}>{country}</div>
				{this.isCitiesVisible ? 
					<CitiesListContainer cities={geography[country]} key={uuidv1()} /> :
					null
				}
			</div>
		);
	}
}