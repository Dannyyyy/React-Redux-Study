import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import StartPage from "../frontend/components/StartPage";
import './shared/styles/shared-styles.less'

const renderMain = () => {
    return ReactDOM.render(
        <AppContainer>
			<StartPage />
        </AppContainer>,
        document.getElementById('react-container')
    );
}

renderMain();
declare var module: any;

if (module.hot) {
	module.hot.accept(StartPage, renderMain);
}