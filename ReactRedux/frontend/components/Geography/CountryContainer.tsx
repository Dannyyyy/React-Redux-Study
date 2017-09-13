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
		const divClassName = "country";

		return (
			<div>
				<div className={divClassName}>
					<span className={'title'} onClick={this.onClick}>{country}</span>
					<span className={'delete-btn'}>{"Удалить"}</span>
				</div>
				
				{this.isCitiesVisible ? 
					<CitiesListContainer cities={geography[country]} key={uuidv1()} /> :
					null
				}
			</div>
		);
	}
}