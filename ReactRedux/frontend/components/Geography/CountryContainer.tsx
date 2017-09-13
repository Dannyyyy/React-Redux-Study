import * as React from "react";
import * as redux from "redux";
import { connect } from "react-redux";

const uuidv1 = require('uuid/v1');

import { storeStates } from "../../store/storeStates";
import { getGeographyData } from "../../actions/geography-action";
import CitiesListContainer from "../Geography/CitiesListContainer";

type ConnectedState = {
	geography: { data: any, isDownloaded: boolean }
}

type CountryProps = {
	country: string
}

const mapStateToProps = (state: storeStates.AllReducers, countryProps: CountryProps): ConnectedState => ({
	geography: state.geography,
})

type ConnectedDispatch = {
	load: () => void,
}

const mapDispatchToProps = (dispatch: redux.Dispatch<storeStates.AllReducers>): ConnectedDispatch => ({
	load: (): void => {
		dispatch(getGeographyData());
	},
})

class CountryContainerComponent extends React.Component<ConnectedState & ConnectedDispatch & CountryProps, {}>{

	private isCitiesVisible = false;

	onClick = () => { this.isCitiesVisible = !this.isCitiesVisible; this.forceUpdate(); }

	componentDidMount() {
		if (!this.props.geography.isDownloaded) {
			this.props.load();
		}
	}

	public render(): JSX.Element {
		const { geography, country } = this.props;

		return (
			<div>
				<div onClick={this.onClick}>{country}</div>
				{this.isCitiesVisible ? 
					<CitiesListContainer cities={geography.data[country]} key={uuidv1()} /> :
					null
				}
			</div>
		);
	}
}

export const CountryContainer: React.ComponentClass<CountryProps> = connect(mapStateToProps, mapDispatchToProps)(CountryContainerComponent)
