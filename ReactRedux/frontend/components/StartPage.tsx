import * as React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';

import store from "../store/store";
import MainComponent from "./MainComponent/MainComponent";
import { Counter } from "./Counter/Counter";
import { Geography } from "./Geography/Geography";

const browserHistory = createBrowserHistory();

export default class StartPage extends React.Component<{}, {}>{
	public render(): JSX.Element {
		return (
			<Provider store={store}>
				<Router history={browserHistory}>
					<Switch>
						<Route exact path="/" component={MainComponent} />
						<Route path="/counter" component={Counter} />
						<Route path="/geography" component={Geography} />
					</Switch>
				</Router>
			</ Provider>
		);
	}
}
