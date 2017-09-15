import * as React from 'react';
import * as Redux from "redux";
import { Provider } from 'react-redux';
import { Link } from "react-router-dom";

import store from "../../store/store";
import './main-component.less';
import { Counter } from "../Counter/Counter";
import { Geography } from "../Geography/Geography";

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
			
				<div>
					<h1>
						{this.getMessage()}
					</h1>
					<div className="logos">
						<img src={webpackLogoPath} className='webpack-logo' />
						<div className="react-logo" />
					</div>
					<div className="links">
						<Link to="/counter">Counter >>></Link>
						<Link to="/geography">Geography >>></Link>
						<Link to="/test">Test >>></Link>
					</div>
				</div>
			
        );
    }
}