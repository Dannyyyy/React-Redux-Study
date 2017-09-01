﻿import * as React from "react";
import * as redux from "redux";
import { connect } from "react-redux";

const uuidv1 = require('uuid/v1');

import { storeStates } from "../../store/storeStates";
import { getGeographyData } from "../../actions/geography-action";
import CitiesListContainer from "../Geography/CitiesListContainer";

type ConnectedState = {
	geography: { data: any }
}

const mapStateToProps = (state: storeStates.AllReducers): ConnectedState => ({
	geography: state.geography
})

type ConnectedDispatch = {
	load: () => void,
}

const mapDispatchToProps = (dispatch: redux.Dispatch<storeStates.AllReducers>): ConnectedDispatch => ({
	load: (): void => {
		dispatch(getGeographyData());
	},
})

class CountriesListContainerComponent extends React.Component< ConnectedState & ConnectedDispatch , {}>{

	componentDidMount() {
		this.props.load();
	}

	public render(): JSX.Element {
		const { geography } = this.props;
		const countries = new Array();
		for (let country in geography.data) {
			countries.push(country);
		}

		if (countries.length) {
			return (
				<div>
					{countries.map((country, i) => (
						<CitiesListContainer country={country} cities={geography.data[country]} key={uuidv1()} />
						)
					)}
				</div>
			);
		}
		return <div>Loading...</div>;
	}
}

export const CountriesListContainer: React.ComponentClass<{}> = connect(mapStateToProps, mapDispatchToProps)(CountriesListContainerComponent)