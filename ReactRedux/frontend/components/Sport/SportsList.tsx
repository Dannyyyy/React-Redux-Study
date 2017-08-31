import * as React from "react";
import * as redux from "redux";
import { connect } from "react-redux";

import * as sportApi from "../../api/sport-api";
import { storeStates } from "../../store/storeStates";
import store from "../../store/store";

type ConnectedState = {
	sport: { data: any }
}

const mapStateToProps = (state: storeStates.AllReducers): ConnectedState => ({
	sport: state.sport
})

type ConnectedDispatch = {
	load: () => void,
}

const mapDispatchToProps = (dispatch: redux.Dispatch<storeStates.AllReducers>): ConnectedDispatch => ({
	load: (): void => {
		sportApi.loadSports(dispatch);
	},
})

class SportListComponent extends React.Component<ConnectedState & ConnectedDispatch, {}>{

	componentDidMount() {
		this.props.load();
	}

	public render(): JSX.Element {
		console.log(this.props.sport);
		return <div>{"Sport list: "}</div>;
	}
}


export const SportsList: React.ComponentClass<{}> = connect(mapStateToProps, mapDispatchToProps)(SportListComponent)
//export default connect(mapStateToProps)(SportList);