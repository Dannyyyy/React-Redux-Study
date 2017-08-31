import * as React from 'react';
import * as Redux from "redux";
import { Provider } from 'react-redux';

import store from "../../store/store";
import './main-component.less';
import { Counter } from "../Counter/Counter";
import { SportsList } from "../Sport/SportsList";

export default class MainComponent extends React.Component<{}, {}>{
    constructor(props) {
        super(props);
    }

    getMessage() {
        return 'webpack, react, typescript, hot-reload demo';
    }

    render() {

        // Обратите внимание, svg в js коде загружаются с помощью такого вызова require.
        // В css коде не нужно ничего дописывать
        // Подробности в документации svg-loader
        const webpackLogoPath = require('!svg-url-loader?noquotes!./webpack-logo.svg');

		return (
			<Provider store={store}>
				<div>
					<h1>
						{this.getMessage()}
					</h1>
					<div className="logos">
						<img src={webpackLogoPath} className='webpack-logo' />
						<div className="react-logo" />
					</div>
					<Counter />
					<SportsList />
				</div>
			</ Provider>
        );
    }
}