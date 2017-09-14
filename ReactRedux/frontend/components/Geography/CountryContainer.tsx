import * as React from "react";
import * as redux from "redux";
import { connect } from "react-redux";

const uuidv1 = require('uuid/v1');

import { storeStates } from "../../store/storeStates";
import { getGeographyData, deleteCountry } from "../../actions/geography-action";
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
		if (!this.props.geography.isDownloaded) {
			this.props.load();
		}
	}

	public render(): JSX.Element {
		const { geography, country } = this.props;
		const divClassName = "country";

		return (
			<div>
				<div className={divClassName}>
					<span className={'title'} onClick={this.onExpanded}>{country}</span>
					<span className={'delete-btn'} id={country} onClick={this.onDeleted}>{"Удалить"}</span>
				</div>

				{this.isCitiesVisible ?
					<CitiesListContainer cities={geography.data[country]} key={uuidv1()} /> :
					null
				}
			</div>
		);
	}
}

export const CountryContainer: React.ComponentClass<CountryProps> = connect(mapStateToProps, mapDispatchToProps)(CountryContainerComponent)
