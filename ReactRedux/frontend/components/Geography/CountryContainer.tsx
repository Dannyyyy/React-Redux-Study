import * as React from "react";
import * as redux from "redux";
import { connect } from "react-redux";

const uuidv1 = require('uuid/v1');

import { storeStates } from "../../store/storeStates";
import { getGeographyData, deleteCountry } from "../../actions/geography-action";
import CitiesListContainer from "../Geography/CitiesListContainer";
import CountriesList from "../../classes/CountriesList";

type ConnectedState = {
	countries: { data: CountriesList, isDownloaded: boolean }
}

type CountryProps = {
	countryName: string
}

const mapStateToProps = (state: storeStates.AllReducers, countryProps: CountryProps): ConnectedState => ({
	countries: state.geography,
})

type ConnectedDispatch = {
	load: () => void,
	delete: (country: string) => void
}

const mapDispatchToProps = (dispatch: redux.Dispatch<storeStates.AllReducers>): ConnectedDispatch => ({
	load: (): void => {
		dispatch(getGeographyData());
	},
	delete: (country: string): void => {
		dispatch(deleteCountry(country));
	}
})

class CountryContainerComponent extends React.Component<ConnectedState & ConnectedDispatch & CountryProps, {}>{

	private isCitiesVisible = false;

	onExpanded = () => { this.isCitiesVisible = !this.isCitiesVisible; this.forceUpdate(); }

	onDeleted = (event) => { this.props.delete(event.target.id); }

	componentDidMount() {
		if (!this.props.countries.isDownloaded) {
			this.props.load();
		}
	}

	public render(): JSX.Element {
		const { countries, countryName } = this.props;
		const divClassName = "country";

		return (
			<div>
				<div className={divClassName}>
					<span className={'title'} onClick={this.onExpanded}>{countryName}</span>
					<span className={'delete-btn'} id={countryName} onClick={this.onDeleted}>{"Удалить"}</span>
				</div>

				{this.isCitiesVisible ?
					<CitiesListContainer cities={countries.data.getCities(countryName)} key={uuidv1()} /> :
					null
				}
			</div>
		);
	}
}

export const CountryContainer: React.ComponentClass<CountryProps> = connect(mapStateToProps, mapDispatchToProps)(CountryContainerComponent)
