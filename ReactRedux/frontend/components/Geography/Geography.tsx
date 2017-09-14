import * as React from "react";
import * as redux from "redux";
import { connect } from "react-redux";

import * as geographyApi from "../../api/geography-api";
import { sortAscending, sortDescending } from "../../actions/geography-action";
import { storeStates } from "../../store/storeStates";
import { CountriesListContainer } from "./CountriesListContainer";
import "./geography.less";

type ConnectedState = {
	geography: { data: any, isDownloaded: boolean }
}

const mapStateToProps = (state: storeStates.AllReducers): ConnectedState => ({
	geography: state.geography
})

type ConnectedDispatch = {
	load: () => void,
	sortAscending: () => void,
	sortDescending: () => void
}

const mapDispatchToProps = (dispatch: redux.Dispatch<storeStates.AllReducers>): ConnectedDispatch => ({
	load: (): void => {
		geographyApi.loadGeography(dispatch);
	},
	sortAscending: (): void => {
		dispatch(sortAscending())
	},
	sortDescending: (): void => {
		dispatch(sortDescending())
	}
})

class GeographyComponent extends React.Component<ConnectedState & ConnectedDispatch, {}>{

	sortDescending = (): void => { this.props.sortDescending() };

	sortAscending = (): void => { this.props.sortAscending() };

	componentDidMount() {
		const { load, geography } = this.props;

		if (!geography.isDownloaded) {
			load();
		}
	}

	public render(): JSX.Element {
		const { geography } = this.props;

		return (
			<div className={'geography-position'}>
				<span className={'list-title'}>
					<span className={'sort'} onClick={this.sortAscending}>{"▲"}</span>
					<span className={'title'}>{"Countries list: "}</span>
					<span className={'sort'} onClick={this.sortDescending}>{"▼"}</span>
				</span>
				{geography.isDownloaded ?
					<CountriesListContainer geography={geography.data} /> : 
					<div>{"Download..."}</div>
				}
			</div>
		);
	}
}

export const Geography: React.ComponentClass<{}> = connect(mapStateToProps, mapDispatchToProps)(GeographyComponent)