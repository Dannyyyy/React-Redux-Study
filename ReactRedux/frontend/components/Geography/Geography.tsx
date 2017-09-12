import * as React from "react";
import * as redux from "redux";
import { connect } from "react-redux";

import * as geographyApi from "../../api/geography-api";
import { storeStates } from "../../store/storeStates";
import store from "../../store/store";
import { CountriesListContainer } from "./CountriesListContainer";
import "./geography.less";

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
		geographyApi.loadGeography(dispatch);
	},
})

class GeographyComponent extends React.Component<ConnectedState & ConnectedDispatch, {}>{

	componentDidMount() {
		this.props.load();
	}

	public render(): JSX.Element {
		return (
			<div className={'geography-position'}>
				<div className="countries-list">{"Countries list: "}</div>
				<CountriesListContainer />
			</div>
		);
	}
}

export const Geography: React.ComponentClass<{}> = connect(mapStateToProps, mapDispatchToProps)(GeographyComponent)